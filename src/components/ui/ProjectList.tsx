"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { TransitionLink } from "@/components/chrome/TransitionProvider";
import type { Project } from "@/lib/projects";

/**
 * The typographic project index: big rows with a floating screenshot preview
 * that trails the cursor over whichever row is hot.
 */
export default function ProjectList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<((v: number) => void) | null>(null);
  const yTo = useRef<((v: number) => void) | null>(null);
  const fine = useRef(false);

  useEffect(() => {
    fine.current =
      window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion();
    if (!fine.current || !previewRef.current) return;

    gsap.set(previewRef.current, { xPercent: -50, yPercent: -50, scale: 0.85, opacity: 0 });
    xTo.current = gsap.quickTo(previewRef.current, "x", { duration: 0.55, ease: "expo.out" });
    yTo.current = gsap.quickTo(previewRef.current, "y", { duration: 0.55, ease: "expo.out" });

    const onMove = (e: PointerEvent) => {
      xTo.current?.(e.clientX);
      yTo.current?.(e.clientY);
    };
    const list = listRef.current;
    list?.addEventListener("pointermove", onMove, { passive: true });
    return () => list?.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    if (!fine.current || !previewRef.current) return;
    gsap.to(previewRef.current, {
      opacity: active === null ? 0 : 1,
      scale: active === null ? 0.85 : 1,
      duration: 0.45,
      ease: "expo.out",
    });
  }, [active]);

  return (
    <div ref={listRef} className="relative">
      <div className="hairline-t" data-reveal="stagger">
        {projects.map((project, i) => (
          <TransitionLink
            key={project.slug}
            href={`/work/${project.slug}`}
            data-cursor="view"
            data-cursor-label="View"
            onPointerEnter={() => setActive(i)}
            onPointerLeave={() => setActive(null)}
            className="group hairline-b relative grid grid-cols-[auto_1fr] items-baseline gap-x-5 px-1 py-7 transition-colors duration-500 hover:bg-bone/[0.03] md:grid-cols-[3.5rem_1fr_auto] md:gap-x-8 md:px-4 md:py-10"
          >
            <span className="meta-label text-bone-faint transition-colors duration-300 group-hover:text-ember">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0">
              <span className="display block text-display-sm leading-none text-bone transition-transform duration-500 ease-out-expo group-hover:translate-x-2 md:group-hover:translate-x-4">
                {project.title}
              </span>
              <span className="mt-2 block text-sm text-bone-faint md:hidden">
                {project.short}
              </span>
            </span>
            <span className="hidden items-center gap-6 md:flex">
              <span className="meta-label text-bone-faint transition-colors duration-300 group-hover:text-bone-dim">
                {project.category}
              </span>
              <span className="inline-block text-bone-dim transition-transform duration-500 ease-out-expo group-hover:-rotate-45 group-hover:text-ember">
                →
              </span>
            </span>
          </TransitionLink>
        ))}
      </div>

      {/* floating preview */}
      <div
        ref={previewRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[240px] w-[340px] overflow-hidden rounded-md border border-hairline bg-ink-2 md:block"
        style={{ opacity: 0 }}
      >
        {projects.map((project, i) => (
          <div
            key={project.slug}
            className="absolute inset-0 transition-opacity duration-300"
            style={{ opacity: active === i ? 1 : 0 }}
          >
            <Image
              src={project.preview}
              alt=""
              fill
              sizes="340px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-8">
              <span className="meta-label text-bone">{project.title}</span>
              <span className="meta-label text-bone-dim">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
