"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { markIntroDone } from "@/lib/intro";

/**
 * First-load cover: a counter runs to 100 while fonts settle, the name flashes
 * up, then the panel clips away and hands off to the hero + WebGL reveal.
 */
export default function Preloader() {
  const [gone, setGone] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      markIntroDone();
      setGone(true);
      return;
    }

    const lenis = window.__lenis;
    lenis?.stop();
    document.documentElement.classList.add("overflow-hidden");

    const counter = { v: 0 };
    const fontsReady =
      "fonts" in document ? document.fonts.ready.catch(() => undefined) : Promise.resolve();

    const tl = gsap.timeline({ paused: true });

    tl.to(counter, {
      v: 100,
      duration: 1.35,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = String(Math.round(counter.v)).padStart(3, "0");
        }
      },
    })
      .fromTo(
        nameRef.current,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, ease: "expo.out" },
        0.25
      )
      .add(() => markIntroDone(), "+=0.1")
      .to(rootRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.9,
        ease: "expo.inOut",
        delay: 0.05,
      })
      .add(() => {
        document.documentElement.classList.remove("overflow-hidden");
        lenis?.start();
        setGone(true);
      });

    // Don't finish before fonts are in — the hero sets huge display type.
    let cancelled = false;
    fontsReady.then(() => {
      if (!cancelled) tl.play();
    });
    // Safety: never hold the page hostage.
    const failsafe = window.setTimeout(() => {
      if (!cancelled && !tl.isActive() && tl.progress() === 0) tl.play();
    }, 1800);

    return () => {
      cancelled = true;
      window.clearTimeout(failsafe);
      tl.kill();
      document.documentElement.classList.remove("overflow-hidden");
      lenis?.start();
    };
  }, []);

  if (gone) return null;

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="fixed inset-0 z-[200] flex flex-col justify-between bg-ink px-6 py-6 md:px-10 md:py-8"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="meta-label text-bone-faint">Portfolio — Cade Ryan</div>
      <div className="flex items-end justify-between gap-6">
        <div className="overflow-hidden">
          <div ref={nameRef} className="display text-display-sm text-bone">
            Cade Ryan<span className="text-ember">.</span>
          </div>
        </div>
        <div className="meta-label flex items-baseline gap-2 text-bone">
          <span ref={countRef} className="display text-4xl tracking-tight md:text-6xl">
            000
          </span>
          <span className="text-bone-faint">/ 100</span>
        </div>
      </div>
    </div>
  );
}
