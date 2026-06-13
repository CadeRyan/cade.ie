import Image from "next/image";
import { TransitionLink } from "@/components/chrome/TransitionProvider";
import ProjectList from "@/components/ui/ProjectList";
import SectionHead from "@/components/ui/SectionHead";
import Marquee from "@/components/ui/Marquee";
import LocalTime from "@/components/ui/LocalTime";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

const capabilities = [
  {
    index: "01",
    title: "Product engineering",
    body: "Full-stack builds that ship: web apps, native iOS & Android, backends, admin tooling and the integrations that make them real businesses — Stripe payments, CRM pipelines, NFC systems.",
    tags: ["TypeScript", "React / Next.js", "Node", "Firebase", "iOS & Android", "Stripe"],
  },
  {
    index: "02",
    title: "Software design",
    body: "Design isn't my job title — it's a tool I reach for daily. Design systems, UX flows and high-fidelity prototypes in Figma, tested for accessibility and built to survive contact with real users.",
    tags: ["Figma", "Design systems", "Prototyping", "Accessibility", "Branding"],
  },
  {
    index: "03",
    title: "Launch & growth",
    body: "The unglamorous parts that make products work: dashboards your team can actually run, in-site ticketing, analytics, referral loops, and the polish that earns trust.",
    tags: ["Dashboards", "Ticketing", "CRM & analytics", "Referrals", "SEO"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────────── hero ───────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-5 md:px-10 md:pb-8">
        <div className="mb-6 flex items-end justify-between md:mb-10">
          <p className="meta-label max-w-[16rem] text-bone-dim" data-reveal="fade" data-reveal-delay="0.5">
            Software engineer
            <br />
            <span className="serif-accent text-[1.05rem] normal-case tracking-normal text-bone">
              &amp; maker
            </span>
          </p>
          <p className="meta-label hidden text-right text-bone-faint md:block" data-reveal="fade" data-reveal-delay="0.6">
            Eng. Manager — Aritzia
            <br />
            Dublin ➝ Vancouver
          </p>
        </div>

        <h1 className="display text-display-xl text-bone" aria-label="Cade Ryan">
          <span className="block overflow-hidden" aria-hidden>
            <span className="block" data-reveal="lines">
              Cade
            </span>
          </span>
          <span className="block overflow-hidden" aria-hidden>
            <span className="block" data-reveal="lines" data-reveal-delay="0.12">
              Ryan<span className="text-ember">.</span>
            </span>
          </span>
        </h1>

        <div className="hairline-t mt-8 flex items-center justify-between gap-6 pt-5" data-reveal="fade" data-reveal-delay="0.7">
          <p className="meta-label hidden text-bone-faint md:block">{site.location.coords}</p>
          <p className="max-w-md text-sm leading-relaxed text-bone-dim md:text-base">
            I design and build software that feels as good as it works — products,
            platforms and interfaces, taken from first sketch to shipped.
          </p>
          <div className="flex items-center gap-4">
            <div className="scroll-cue hidden md:block" aria-hidden />
            <div className="meta-label text-right text-bone-faint">
              <span className="block">Local time</span>
              <LocalTime timezone={site.location.timezone} className="text-bone-dim" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── solid content panel ─────────────────────── */}
      <div className="relative bg-ink">
        <Marquee className="hairline-t hairline-b py-5" speed={32}>
          {[
            "Selected work",
            "Fools' Guild",
            "Maker",
            "Dublin",
            "Vancouver",
            "Design",
            "Engineering",
          ].map((word) => (
            <span key={word} className="flex items-center">
              <span className="display text-stroke px-6 text-4xl md:text-6xl">{word}</span>
              <span className="text-ember" aria-hidden>
                ✺
              </span>
            </span>
          ))}
        </Marquee>

        {/* selected work */}
        <section className="px-5 pb-28 pt-24 md:px-10 md:pt-32" id="work">
          <SectionHead index="01" title="Selected work" note={`${projects.length} projects`} />
          <ProjectList projects={projects} />
          <div className="mt-10 flex justify-end">
            <TransitionLink
              href="/work"
              className="meta-label link-line text-bone-dim transition-colors hover:text-bone"
            >
              Browse the full index →
            </TransitionLink>
          </div>
        </section>

        {/* about teaser */}
        <section className="px-5 pb-28 md:px-10">
          <SectionHead index="02" title="The short story" note="About" />
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4" data-reveal="image">
              <div className="frame relative aspect-[4/5] max-w-sm">
                <Image
                  src="/Cade.jpg"
                  alt="Portrait of Cade Ryan"
                  fill
                  sizes="(min-width: 768px) 33vw, 90vw"
                  className="object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-xl leading-relaxed text-bone md:text-3xl" data-reveal="lines">
                Dublin-born, Vancouver-based. By day I lead the Concierge
                Technology team at{" "}
                <span className="serif-accent text-ember">Aritzia</span> — and by
                night I build my own things, like The Fools&rsquo; Guild and its
                box office.
              </p>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-bone-dim" data-reveal="fade">
                From a fantasy-improv box office to NFC loyalty ecosystems, I work
                end-to-end: strategy, interface, code, launch. One pair of hands,
                no hand-offs, nothing lost in translation.
              </p>
              <div className="mt-10" data-reveal="fade">
                <TransitionLink
                  href="/about"
                  className="meta-label link-line text-bone-dim transition-colors hover:text-bone"
                >
                  More about me →
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>

        {/* capabilities */}
        <section className="px-5 pb-32 md:px-10">
          <SectionHead index="03" title="What I do" note="Capabilities" />
          <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline md:grid-cols-3" data-reveal="stagger">
            {capabilities.map((cap) => (
              <article key={cap.index} className="flex flex-col gap-16 bg-ink p-7 md:p-9">
                <div className="flex items-baseline justify-between">
                  <span className="meta-label text-ember">({cap.index})</span>
                </div>
                <div>
                  <h3 className="display mb-4 text-2xl text-bone md:text-3xl">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-bone-dim">{cap.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <li
                        key={tag}
                        className="meta-label rounded-full border border-hairline px-3 py-1.5 text-bone-faint"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
