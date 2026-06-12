"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { TransitionLink } from "./TransitionProvider";
import Magnetic from "@/components/ui/Magnetic";
import LocalTime from "@/components/ui/LocalTime";
import { site } from "@/lib/site";

const LINKS = [
  { href: "/work", label: "Work", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/contact", label: "Contact", index: "03" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Animate the mobile menu + lock scroll while open.
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const lenis = window.__lenis;
    const reduce = prefersReducedMotion();

    if (menuOpen) {
      lenis?.stop();
      document.documentElement.classList.add("overflow-hidden");
      gsap.set(menu, { display: "flex" });
      if (reduce) {
        gsap.set(menu, { clipPath: "inset(0% 0% 0% 0%)" });
      } else {
        gsap.fromTo(
          menu,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "expo.inOut" }
        );
        if (menuLinksRef.current) {
          gsap.fromTo(
            menuLinksRef.current.children,
            { yPercent: 120, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.07,
              delay: 0.25,
              ease: "expo.out",
            }
          );
        }
      }
    } else {
      lenis?.start();
      document.documentElement.classList.remove("overflow-hidden");
      if (reduce) {
        gsap.set(menu, { display: "none" });
      } else {
        gsap.to(menu, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.45,
          ease: "expo.inOut",
          onComplete: () => gsap.set(menu, { display: "none" }),
        });
      }
    }
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main"
        className="meta-label fixed left-4 top-4 z-[300] -translate-y-24 rounded bg-bone px-4 py-2 text-ink transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
          scrolled && !menuOpen
            ? "border-b border-hairline bg-ink/70 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5 md:h-20 md:px-10">
          <Magnetic strength={0.25}>
            <TransitionLink
              href="/"
              aria-label="Cade Ryan — home"
              className="display text-[0.95rem] tracking-wide text-bone"
            >
              Cade Ryan<span className="text-ember">.</span>
            </TransitionLink>
          </Magnetic>

          {/* desktop nav */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {LINKS.map((link) => {
                const active =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Magnetic strength={0.3}>
                      <TransitionLink
                        href={link.href}
                        className={`meta-label link-line transition-colors duration-300 ${
                          active ? "text-ember" : "text-bone-dim hover:text-bone"
                        }`}
                      >
                        <span className="mr-1.5 text-bone-faint">{link.index}</span>
                        {link.label}
                      </TransitionLink>
                    </Magnetic>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* right cluster */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="meta-label flex items-center gap-2 text-bone-faint">
              <span>VAN</span>
              <LocalTime timezone={site.location.timezone} className="text-bone-dim" />
            </div>
            <div className="flex items-center gap-2">
              <span className="pulse-dot" />
              <span className="meta-label text-bone-dim">Always building</span>
            </div>
          </div>

          {/* mobile burger */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span
              className={`absolute h-px w-6 bg-bone transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-bone transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className="fixed inset-0 z-[90] hidden flex-col justify-between bg-ink px-5 pb-10 pt-28"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <nav aria-label="Mobile">
          <ul ref={menuLinksRef} className="flex flex-col gap-2">
            {[{ href: "/", label: "Home", index: "00" }, ...LINKS].map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href} className="overflow-hidden">
                  <TransitionLink
                    href={link.href}
                    className={`display block text-display-md leading-none ${
                      active ? "text-ember" : "text-bone"
                    }`}
                  >
                    <span className="meta-label mr-3 align-super text-bone-faint">
                      {link.index}
                    </span>
                    {link.label}
                  </TransitionLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-end justify-between">
          <div className="meta-label text-bone-faint">
            Dublin ➝ Vancouver
            <br />
            {site.location.coords}
          </div>
          <div className="meta-label flex items-center gap-2 text-bone-dim">
            <span className="pulse-dot" />
            Always building
          </div>
        </div>
      </div>
    </>
  );
}
