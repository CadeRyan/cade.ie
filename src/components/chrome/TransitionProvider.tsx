"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type TransitionContextValue = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
});

const LABELS: { match: (p: string) => boolean; label: string }[] = [
  { match: (p) => p === "/", label: "Home" },
  { match: (p) => p === "/work", label: "Work" },
  { match: (p) => p.startsWith("/work/"), label: "Case study" },
  { match: (p) => p === "/about", label: "About" },
  { match: (p) => p === "/contact", label: "Contact" },
];

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const covering = useRef(false);
  const animating = useRef(false);
  const [label, setLabel] = useState("");

  // Park the overlay below the viewport with GSAP owning the transform.
  // (An inline CSS translateY(100%) would be parsed by GSAP as a pixel offset
  // and silently shift every yPercent tween by a full screen height.)
  useEffect(() => {
    if (!overlayRef.current) return;
    gsap.set(overlayRef.current, { yPercent: 100, visibility: "visible" });
  }, []);

  const navigate = useCallback(
    (href: string) => {
      if (animating.current || href === pathname) return;

      if (prefersReducedMotion() || !overlayRef.current) {
        router.push(href);
        return;
      }

      animating.current = true;
      setLabel(LABELS.find((l) => l.match(href))?.label ?? "");
      // Warm the route while the overlay covers the page.
      router.prefetch(href);

      gsap.to(overlayRef.current, {
        yPercent: 0,
        duration: 0.45,
        ease: "expo.inOut",
        onComplete: () => {
          covering.current = true;
          router.push(href);
        },
      });
      if (labelRef.current) {
        gsap.fromTo(
          labelRef.current,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.45, ease: "expo.out", delay: 0.18 }
        );
      }
    },
    [pathname, router]
  );

  // When the new route has rendered (under the overlay), sweep it away.
  useEffect(() => {
    if (!covering.current || !overlayRef.current) return;
    const tl = gsap.timeline({ delay: 0.1 });
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "expo.inOut",
      onComplete: () => {
        covering.current = false;
        animating.current = false;
        gsap.set(overlayRef.current, { yPercent: 100 });
      },
    });
    if (labelRef.current) {
      tl.to(labelRef.current, { opacity: 0, duration: 0.2 }, 0);
    }
    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        ref={overlayRef}
        aria-hidden
        data-transition-overlay
        className="fixed inset-0 z-[150] flex items-center justify-center bg-ink-2"
        style={{ visibility: "hidden" }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #FF5227, transparent)" }}
        />
        <span className="overflow-hidden">
          <span ref={labelRef} className="meta-label block text-bone-dim">
            {label}
          </span>
        </span>
      </div>
    </TransitionContext.Provider>
  );
}

type TransitionLinkProps = React.ComponentProps<typeof Link> & {
  href: string;
};

/** Internal link that routes through the wipe transition. */
export function TransitionLink({ href, onClick, children, ...rest }: TransitionLinkProps) {
  const { navigate } = useContext(TransitionContext);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    // Let modified clicks and external targets behave natively.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (rest.target === "_blank") return;
    e.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
