"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { onIntroDone } from "@/lib/intro";
import { splitLines } from "@/lib/split";

/**
 * Declarative scroll reveals. Mounted once per page (in template.tsx), it
 * wires every [data-reveal] element on the page:
 *
 *   data-reveal="lines"   — masked line-by-line text reveal (auto-splits)
 *   data-reveal="fade"    — fade + rise
 *   data-reveal="image"   — clip + de-zoom
 *   data-reveal="stagger" — children fade + rise in sequence
 *
 * Elements already inside the first viewport play immediately (with their
 * data-reveal-delay); everything below the fold animates on scroll.
 */
export default function Reveals() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add("is-split"));
      return;
    }

    let ctx: gsap.Context | null = null;
    let cancelled = false;

    const setup = async () => {
      if ("fonts" in document) {
        await document.fonts.ready.catch(() => undefined);
      }
      if (cancelled) return;

      const delayOf = (el: HTMLElement) => parseFloat(el.dataset.revealDelay ?? "0") || 0;
      const inFirstView = (el: HTMLElement) =>
        el.getBoundingClientRect().top < window.innerHeight + 1;

      const play = (
        el: HTMLElement,
        targets: gsap.TweenTarget,
        fromVars: gsap.TweenVars,
        toVars: gsap.TweenVars,
        start: string
      ) => {
        if (inFirstView(el)) {
          gsap.fromTo(targets, fromVars, { ...toVars, delay: delayOf(el) });
        } else {
          gsap.fromTo(targets, fromVars, {
            ...toVars,
            scrollTrigger: { trigger: el, start, once: true },
          });
        }
      };

      ctx = gsap.context(() => {
        document.querySelectorAll<HTMLElement>("[data-reveal='lines']").forEach((el) => {
          const lines = splitLines(el);
          play(
            el,
            lines,
            { yPercent: 112 },
            { yPercent: 0, duration: 1.1, stagger: 0.085, ease: "expo.out" },
            "top 88%"
          );
        });

        document.querySelectorAll<HTMLElement>("[data-reveal='fade']").forEach((el) => {
          play(
            el,
            el,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 1, ease: "expo.out" },
            "top 92%"
          );
        });

        document.querySelectorAll<HTMLElement>("[data-reveal='image']").forEach((el) => {
          const img = el.querySelector("img, video") ?? el;
          play(
            el,
            el,
            { opacity: 1, clipPath: "inset(8% 4% 8% 4%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.25, ease: "expo.out" },
            "top 86%"
          );
          play(
            el,
            img,
            { scale: 1.12 },
            { scale: 1, duration: 1.6, ease: "expo.out" },
            "top 86%"
          );
        });

        document.querySelectorAll<HTMLElement>("[data-reveal='stagger']").forEach((el) => {
          gsap.set(el, { opacity: 1 });
          play(
            el,
            el.children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.09, ease: "expo.out" },
            "top 88%"
          );
        });
      });

      ScrollTrigger.refresh();
    };

    const off = onIntroDone(() => void setup());

    return () => {
      cancelled = true;
      off();
      ctx?.revert();
    };
  }, []);

  return null;
}
