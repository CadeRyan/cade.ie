import type { Metadata } from "next";
import VoxMailWidget from "@/components/ui/VoxMailWidget";
import LocalTime from "@/components/ui/LocalTime";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cade Ryan — email, Calendly, or leave a voice note with the VoxMail widget.",
};

export default function ContactPage() {
  return (
    <>
      <VoxMailWidget />

      {/* title band */}
      <section className="flex min-h-[58svh] flex-col justify-end px-5 pb-10 md:px-10">
        <p className="meta-label mb-4 text-bone-dim" data-reveal="fade">
          ( Contact )
        </p>
        <h1 className="display text-display-lg text-bone" data-reveal="lines">
          Get in touch
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-bone-dim" data-reveal="fade" data-reveal-delay="0.15">
          Interested in collaborating, want to talk shop, or just have a
          question? I&rsquo;d love to hear from you — pick whichever channel
          suits you.
        </p>
      </section>

      <div className="bg-ink px-5 py-20 md:px-10 md:py-28">
        {/* email */}
        <div className="hairline-t pt-8">
          <p className="meta-label mb-5 text-ember" data-reveal="fade">
            (01) — Email
          </p>
          <a
            href={`mailto:${site.email}`}
            className="display block break-all text-display-sm text-bone transition-colors duration-300 hover:text-ember md:break-normal"
            data-reveal="lines"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline md:grid-cols-3" data-reveal="stagger">
          {/* calendly */}
          <article className="flex flex-col justify-between gap-14 bg-ink p-7 md:p-9">
            <div>
              <p className="meta-label mb-4 text-ember">(02) — Book a call</p>
              <p className="text-sm leading-relaxed text-bone-dim">
                Twenty minutes, no agenda needed. Pick a time that works for you and
                let&rsquo;s talk through your idea.
              </p>
            </div>
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="meta-label inline-block self-start rounded-full border border-hairline px-5 py-3 text-bone-dim transition-colors duration-300 hover:border-bone hover:text-bone"
            >
              Book with Calendly ↗
            </a>
          </article>

          {/* voxmail */}
          <article className="flex flex-col justify-between gap-14 bg-ink p-7 md:p-9">
            <div>
              <p className="meta-label mb-4 text-ember">(03) — Say it out loud</p>
              <p className="text-sm leading-relaxed text-bone-dim">
                The widget in the corner of this page is VoxMail — my own product.
                Tap it, talk, and your voice note lands straight with me. The best
                kind of dogfooding.
              </p>
            </div>
            <p className="meta-label text-bone-faint">Look bottom-right ↘</p>
          </article>

          {/* timezones */}
          <article className="flex flex-col justify-between gap-14 bg-ink p-7 md:p-9">
            <div>
              <p className="meta-label mb-4 text-ember">(04) — Hours</p>
              <p className="text-sm leading-relaxed text-bone-dim">
                I work from the Pacific coast and overlap generously with European
                mornings and North American afternoons.
              </p>
            </div>
            <dl className="meta-label space-y-2 text-bone-dim">
              <div className="flex items-center justify-between gap-6">
                <dt className="text-bone-faint">Vancouver</dt>
                <dd>
                  <LocalTime timezone={site.location.timezone} />
                </dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-bone-faint">Dublin</dt>
                <dd>
                  <LocalTime timezone={site.location.originTimezone} />
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </>
  );
}
