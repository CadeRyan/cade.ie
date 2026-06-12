"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type CursorMode = "default" | "link" | "view";

/**
 * Custom cursor: a quick dot + lagging ring in difference blend; over project
 * rows ([data-cursor="view"]) it grows into a labelled bone disc.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    return () => {
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "expo" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "expo" });

    let visible = false;
    let mode: CursorMode = "default";

    const setMode = (next: CursorMode, label?: string) => {
      if (next === mode && next !== "view") return;
      mode = next;
      if (labelRef.current) {
        labelRef.current.textContent = next === "view" ? (label ?? "View") : "";
      }
      if (next === "view") {
        ring.classList.add("cursor-view");
        gsap.to(ring, { width: 84, height: 84, duration: 0.4, ease: "expo.out" });
        gsap.to(dot, { scale: 0, duration: 0.25, ease: "power2.out" });
      } else if (next === "link") {
        ring.classList.remove("cursor-view");
        gsap.to(ring, { width: 48, height: 48, duration: 0.4, ease: "expo.out" });
        gsap.to(dot, { scale: 0.5, duration: 0.25, ease: "power2.out" });
      } else {
        ring.classList.remove("cursor-view");
        gsap.to(ring, { width: 32, height: 32, duration: 0.4, ease: "expo.out" });
        gsap.to(dot, { scale: 1, duration: 0.25, ease: "power2.out" });
      }
    };

    const onMove = (e: PointerEvent) => {
      if (!visible) {
        visible = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const el = e.target as Element | null;
      if (!el || !(el instanceof Element)) return;
      const view = el.closest<HTMLElement>("[data-cursor='view']");
      if (view) {
        setMode("view", view.dataset.cursorLabel);
        return;
      }
      const link = el.closest("a, button, [role='button'], input, textarea, select, [data-cursor='link']");
      setMode(link ? "link" : "default");
    };

    const onLeave = () => {
      visible = false;
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[250]">
      <div
        ref={ringRef}
        className="cursor-ring fixed left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full"
      >
        <span ref={labelRef} className="meta-label select-none text-ink" />
      </div>
      <div ref={dotRef} className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-bone mix-blend-difference" />
    </div>
  );
}
