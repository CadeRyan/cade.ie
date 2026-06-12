import type { Metadata } from "next";
import Image from "next/image";
import { TransitionLink } from "@/components/chrome/TransitionProvider";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Cade Ryan — products, platforms and websites designed and engineered end-to-end.",
};

export default function WorkPage() {
  return (
    <>
      {/* title band — terrain visible behind */}
      <section className="flex min-h-[52svh] flex-col justify-end px-5 pb-10 md:px-10">
        <p className="meta-label mb-4 text-bone-dim" data-reveal="fade">
          ( All projects )
        </p>
        <h1 className="display text-display-lg text-bone" data-reveal="lines">
          Work
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-bone-dim" data-reveal="fade" data-reveal-delay="0.15">
          Five stories of taking something from first sketch to a live, working
          thing — designed and engineered end-to-end.
        </p>
      </section>

      {/* index */}
      <div className="bg-ink px-5 py-20 md:px-10 md:py-28">
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={project.slug}
                className="grid items-end gap-8 md:grid-cols-12"
              >
                <div
                  className={`md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}
                  data-reveal="image"
                >
                  <TransitionLink
                    href={`/work/${project.slug}`}
                    data-cursor="view"
                    data-cursor-label="Open"
                    aria-label={`${project.title} — case study`}
                    className="frame group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.cover.src}
                        alt={project.cover.alt}
                        fill
                        sizes="(min-width: 768px) 58vw, 92vw"
                        className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                      />
                    </div>
                  </TransitionLink>
                </div>

                <div className={`md:col-span-4 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-9"}`}>
                  <p className="meta-label mb-3 text-ember" data-reveal="fade">
                    ({String(i + 1).padStart(2, "0")}) — {project.category}
                  </p>
                  <h2 className="display text-display-sm text-bone" data-reveal="lines">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-bone-dim" data-reveal="fade">
                    {project.tagline}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" data-reveal="fade">
                    {project.scope.map((s) => (
                      <li
                        key={s}
                        className="meta-label rounded-full border border-hairline px-3 py-1.5 text-bone-faint"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7" data-reveal="fade">
                    <TransitionLink
                      href={`/work/${project.slug}`}
                      className="meta-label link-line text-bone-dim transition-colors hover:text-bone"
                    >
                      Read the case study →
                    </TransitionLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
