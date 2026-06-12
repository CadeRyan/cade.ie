"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/** Infinite horizontal scroller. Children are rendered twice and looped. */
export default function Marquee({
  children,
  speed = 26,
  className,
}: {
  children: ReactNode;
  /** seconds per full loop */
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !trackRef.current) return;
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [speed]);

  return (
    <div className={`overflow-hidden ${className ?? ""}`} aria-hidden>
      <div ref={trackRef} className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
