import type { Metadata } from "next";
import Image from "next/image";
import { TransitionLink } from "@/components/chrome/TransitionProvider";
import SectionHead from "@/components/ui/SectionHead";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cade Ryan — Dublin-born software engineer in Vancouver, BC. Engineering Manager at Aritzia; previously Microsoft and co-founder of Koduu. Builder of The Fools' Guild platform and VoxMail.",
};

const facts = [
  { label: "Based in", value: "Vancouver, BC" },
  { label: "From", value: "Dublin, Ireland" },
  { label: "Day job", value: "Engineering Manager, Concierge Technology — Aritzia" },
  { label: "Off hours", value: "The Fools' Guild · VoxMail" },
];

const timeline = [
  {
    where: "Aritzia",
    what: "Engineering Manager — Concierge Technology",
    when: "Now",
  },
  {
    where: "Koduu",
    what: "Co-founder — end-to-end product studio",
    when: "Previously",
  },
  {
    where: "Microsoft",
    what: "Software Engineer",
    when: "Previously",
  },
  {
    where: "Squid Rewards",
    what: "Engineer — built the Squid loyalty platform MVP",
    when: "Previously",
  },
  {
    where: "Astrum Tech",
    what: "Computer Hardware Engineer",
    when: "Early days",
  },
  {
    where: "Trinity College Dublin",
    what: "BSc Computer Science",
    when: "Education",
  },
];

const collaborations = [
  { name: "The Fools' Guild", note: "Show platform & box office — my own troupe", href: "https://foolsguild.ca/" },
  { name: "Squid Loyalty", note: "Loyalty platform MVP — apps, backend, NFC", href: "https://squidloyalty.ie/" },
  { name: "ShredVision", note: "Snow-sports coaching platform", href: "https://shredvision.io/" },
  { name: "Your Studios", note: "Hula the Goose — game promo site", href: "https://hulathegoose.com/" },
];

const tools = [
  "TypeScript",
  "React / Next.js",
  "Node",
  "Firebase",
  "iOS & Android",
  "Stripe",
  "Three.js",
  "Figma",
  "Tailwind",
];

export default function AboutPage() {
  return (
    <>
      {/* title band */}
      <section className="flex min-h-[52svh] flex-col justify-end px-5 pb-10 md:px-10">
        <p className="meta-label mb-4 text-bone-dim" data-reveal="fade">
          ( About )
        </p>
        <h1 className="display text-display-lg text-bone" data-reveal="lines">
          The longer story
        </h1>
      </section>

      <div className="bg-ink px-5 py-20 md:px-10 md:py-28">
        {/* bio */}
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28" data-reveal="image">
              <div className="frame relative aspect-[4/5]">
                <Image
                  src="/Cade.jpg"
                  alt="Portrait of Cade Ryan"
                  fill
                  priority
                  sizes="(min-width: 768px) 33vw, 92vw"
                  className="object-cover"
                />
              </div>
              <p className="meta-label mt-3 flex justify-between text-bone-faint">
                <span>Cade Ryan</span>
                <span>{site.location.coords}</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-2xl leading-snug text-bone md:text-4xl" data-reveal="lines">
              I&rsquo;m Cade — a software engineer and maker from Dublin,
              Ireland, now calling{" "}
              <span className="serif-accent text-ember">Vancouver</span> home.
            </p>

            <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-bone-dim">
              <p data-reveal="fade">
                I work across the full stack — interfaces people enjoy touching,
                and the scalable systems underneath that keep them honest. Design
                isn&rsquo;t my job title, but it is part of my toolkit: design
                systems, prototypes, accessibility passes — whatever the product
                needs to feel finished.
              </p>
              <p data-reveal="fade">
                These days I&rsquo;m an Engineering Manager at Aritzia, leading
                the Concierge Technology team. The route here ran through a
                computer science degree at Trinity College Dublin, software
                engineering at Microsoft, building the MVP of the Squid loyalty
                platform, and co-founding Koduu — a small studio where I shipped
                products end-to-end for founders and teams.
              </p>
              <p data-reveal="fade">
                The building never stopped. I co-produce The Fools&rsquo; Guild,
                Vancouver&rsquo;s fantasy improv troupe, and built the platform
                that runs its shows and box office. And I make my own products —
                like VoxMail, a voice-messaging widget designed with Susanne
                Duswald.
              </p>
            </div>

            {/* facts */}
            <dl className="hairline-t mt-12 grid grid-cols-1 gap-y-4 pt-8 sm:grid-cols-2 sm:gap-x-8" data-reveal="stagger">
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline gap-4">
                  <dt className="meta-label w-20 shrink-0 text-bone-faint">{fact.label}</dt>
                  <dd className="text-sm text-bone-dim">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* timeline */}
        <section className="mt-28">
          <SectionHead index="01" title="Timeline" note="Most recent first" />
          <ol className="hairline-t" data-reveal="stagger">
            {timeline.map((stop, i) => (
              <li
                key={`${stop.where}-${stop.what}`}
                className="hairline-b flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 px-1 py-5 md:px-4"
              >
                <span className="flex items-baseline gap-5">
                  <span className="meta-label w-7 text-bone-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="display text-lg text-bone md:text-xl">{stop.where}</span>
                </span>
                <span className="grow text-sm text-bone-dim md:text-right">{stop.what}</span>
                <span className="meta-label w-full text-bone-faint md:w-24 md:text-right">
                  {stop.when}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* selected builds */}
        <section className="mt-28">
          <SectionHead index="02" title="Selected builds" note="With & for good people" />
          <ul className="hairline-t" data-reveal="stagger">
            {collaborations.map((c, i) => (
              <li key={c.name} className="hairline-b">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-baseline justify-between gap-2 px-1 py-6 transition-colors duration-300 hover:bg-bone/[0.03] md:px-4"
                >
                  <span className="flex items-baseline gap-5">
                    <span className="meta-label text-bone-faint">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-xl text-bone md:text-2xl">{c.name}</span>
                  </span>
                  <span className="meta-label text-bone-faint transition-colors duration-300 group-hover:text-bone-dim">
                    {c.note} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* tools */}
        <section className="mt-28">
          <SectionHead index="03" title="Toolkit" note="Daily drivers" />
          <ul className="flex flex-wrap gap-3" data-reveal="stagger">
            {tools.map((tool) => (
              <li
                key={tool}
                className="meta-label rounded-full border border-hairline px-4 py-2.5 text-bone-dim"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>

        {/* cta */}
        <section className="mt-28 text-center">
          <p className="meta-label mb-4 text-bone-faint" data-reveal="fade">
            Sound like a fit?
          </p>
          <TransitionLink
            href="/contact"
            className="display inline-block text-display-sm text-bone transition-colors duration-300 hover:text-ember"
            data-reveal="lines"
          >
            Start a conversation →
          </TransitionLink>
        </section>
      </div>
    </>
  );
}
