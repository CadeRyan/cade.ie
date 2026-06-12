import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { TransitionLink } from "@/components/chrome/TransitionProvider";
import { projects, getProject, nextProject, type CaseSection } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case study`,
    description: project.tagline,
  };
}

function SectionImages({ section }: { section: CaseSection }) {
  if (!section.images?.length) return null;

  if (section.layout === "trio") {
    return (
      <div className="grid gap-4 sm:grid-cols-3" data-reveal="stagger">
        {section.images.map((img) => (
          <figure key={img.src} className="frame">
            <div className="relative aspect-[3/4]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 30vw, 92vw"
                className="object-contain p-2"
              />
            </div>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {section.images.map((img) => (
        <figure key={img.src} data-reveal="image">
          <div className="frame relative">
            <Image
              src={img.src}
              alt={img.alt}
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 70vw, 92vw"
              className="h-auto w-full object-contain"
            />
          </div>
          {img.caption ? (
            <figcaption className="meta-label mt-3 text-bone-faint">{img.caption}</figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

function Section({ section, index }: { section: CaseSection; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const split = section.layout === "split";

  return (
    <section className="hairline-t py-16 md:py-24">
      <div className={split ? "grid gap-10 md:grid-cols-12" : ""}>
        <div className={split ? "md:col-span-5" : "mb-12 max-w-3xl"}>
          <p className="meta-label mb-4 text-ember" data-reveal="fade">
            ({number}) — {section.kicker}
          </p>
          <h2 className="display text-display-sm text-bone" data-reveal="lines">
            {section.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {section.body.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-bone-dim" data-reveal="fade">
                {p}
              </p>
            ))}
          </div>
          {section.bullets ? (
            <ul className="mt-8 space-y-3" data-reveal="stagger">
              {section.bullets.map((b, i) => (
                <li key={b} className="flex gap-4 text-sm leading-relaxed text-bone-dim">
                  <span className="meta-label mt-0.5 text-bone-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className={split ? "md:col-span-6 md:col-start-7" : ""}>
          {section.video ? (
            <figure data-reveal="image">
              <div className="frame relative">
                <video controls preload="metadata" className="h-auto w-full" playsInline>
                  <source src={section.video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <figcaption className="meta-label mt-3 text-bone-faint">
                {section.video.note}
              </figcaption>
            </figure>
          ) : (
            <SectionImages section={section} />
          )}
        </div>
      </div>
    </section>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = nextProject(slug);
  const number = String(projects.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");

  return (
    <>
      {/* title band — terrain visible behind */}
      <section className="flex min-h-[60svh] flex-col justify-end px-5 pb-10 md:px-10">
        <p className="meta-label mb-4 text-bone-dim" data-reveal="fade">
          <TransitionLink href="/work" className="link-line">
            Work
          </TransitionLink>{" "}
          / ({number})
        </p>
        <h1 className="display text-display-lg text-bone" data-reveal="lines">
          {project.title}
        </h1>
        <p className="serif-accent mt-5 text-2xl text-bone-dim md:text-3xl" data-reveal="fade" data-reveal-delay="0.15">
          {project.tagline}
        </p>
      </section>

      <div className="bg-ink px-5 pb-24 pt-12 md:px-10">
        {/* meta grid */}
        <div className="hairline-t hairline-b grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4" data-reveal="stagger">
          <div>
            <p className="meta-label mb-2 text-bone-faint">Role</p>
            <p className="text-sm text-bone-dim">{project.role}</p>
            {project.credit ? <p className="mt-1 text-sm text-bone-faint">{project.credit}</p> : null}
          </div>
          <div>
            <p className="meta-label mb-2 text-bone-faint">Scope</p>
            <ul className="space-y-1">
              {project.scope.map((s) => (
                <li key={s} className="text-sm text-bone-dim">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta-label mb-2 text-bone-faint">Client</p>
            <p className="text-sm text-bone-dim">{project.client ?? "Self-initiated"}</p>
          </div>
          <div>
            <p className="meta-label mb-2 text-bone-faint">Live</p>
            {project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line text-sm text-bone transition-colors hover:text-ember"
              >
                {project.link.label} ↗
              </a>
            ) : (
              <p className="text-sm text-bone-dim">—</p>
            )}
          </div>
        </div>

        {/* cover */}
        <figure className="mt-12" data-reveal="image">
          <div className="frame relative">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={1920}
              height={1200}
              priority
              sizes="92vw"
              className="h-auto w-full object-contain"
            />
          </div>
          {project.cover.caption ? (
            <figcaption className="meta-label mt-3 text-bone-faint">
              {project.cover.caption}
            </figcaption>
          ) : null}
        </figure>

        {/* intro */}
        <div className="mx-auto max-w-3xl py-20 md:py-28">
          {project.intro.map((p, i) => (
            <p
              key={p.slice(0, 24)}
              className={`leading-relaxed ${
                i === 0 ? "text-xl text-bone md:text-2xl" : "mt-6 text-base text-bone-dim"
              }`}
              data-reveal="fade"
            >
              {p}
            </p>
          ))}
        </div>

        {/* sections */}
        {project.sections.map((section, i) => (
          <Section key={section.heading} section={section} index={i} />
        ))}

        {/* outcome */}
        <section className="hairline-t py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="meta-label mb-4 text-ember" data-reveal="fade">
              Outcome
            </p>
            <h2 className="display text-display-sm text-bone" data-reveal="lines">
              {project.outcome.heading}
            </h2>
            {project.outcome.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 text-base leading-relaxed text-bone-dim" data-reveal="fade">
                {p}
              </p>
            ))}
            {project.link ? (
              <div className="mt-10" data-reveal="fade">
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-label rounded-full border border-hairline px-6 py-3.5 text-bone-dim transition-colors duration-300 hover:border-bone hover:text-bone"
                >
                  Visit {project.title} ↗
                </a>
              </div>
            ) : null}
          </div>
        </section>

        {/* next project */}
        <TransitionLink
          href={`/work/${next.slug}`}
          data-cursor="view"
          data-cursor-label="Next"
          className="group hairline-t block py-16 md:py-20"
        >
          <p className="meta-label mb-4 text-bone-faint">Next project</p>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="display text-display-md text-bone transition-colors duration-300 group-hover:text-ember">
              {next.title}
            </span>
            <span className="display inline-block text-display-md text-bone-dim transition-transform duration-500 ease-out-expo group-hover:translate-x-4 group-hover:text-ember">
              →
            </span>
          </div>
          <p className="mt-3 text-sm text-bone-faint">{next.short}</p>
        </TransitionLink>
      </div>
    </>
  );
}
