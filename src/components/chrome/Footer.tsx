"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "./TransitionProvider";
import Magnetic from "@/components/ui/Magnetic";
import LocalTime from "@/components/ui/LocalTime";
import { site, nav } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();
  const onContact = pathname === "/contact";

  const scrollTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="hairline-t relative z-10">
      {/* The content panel ends above — the terrain re-emerges behind this footer. */}
      <div className="flex min-h-[72vh] flex-col justify-between px-5 pb-8 pt-20 md:px-10 md:pt-28">
        <div>
          <p className="meta-label mb-6 text-bone-faint" data-reveal="fade">
            ( Have an idea? )
          </p>
          {onContact ? (
            <a
              href={`mailto:${site.email}`}
              className="group display block text-display-lg text-bone transition-colors duration-300 hover:text-ember"
              data-reveal="lines"
            >
              Say hello
              <span className="ml-4 inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-4 md:ml-8">
                ↗
              </span>
            </a>
          ) : (
            <TransitionLink
              href="/contact"
              className="group display block text-display-lg text-bone"
              data-reveal="lines"
            >
              Let&rsquo;s talk
              <span className="ml-4 inline-block transition-transform duration-500 ease-out-expo group-hover:translate-x-4 md:ml-8">
                ↗
              </span>
            </TransitionLink>
          )}
        </div>

        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          <div>
            <p className="meta-label mb-4 text-bone-faint">Sitemap</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <TransitionLink
                    href={item.href}
                    className="link-line text-sm text-bone-dim transition-colors hover:text-bone"
                  >
                    {item.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="meta-label mb-4 text-bone-faint">Elsewhere</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://vox-mail.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-sm text-bone-dim transition-colors hover:text-bone"
                >
                  VoxMail ↗
                </a>
              </li>
              <li>
                <a
                  href="https://foolsguild.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-sm text-bone-dim transition-colors hover:text-bone"
                >
                  The Fools&rsquo; Guild ↗
                </a>
              </li>
              <li>
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-sm text-bone-dim transition-colors hover:text-bone"
                >
                  Calendly ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-line text-sm text-bone-dim transition-colors hover:text-bone"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="meta-label mb-4 text-bone-faint">Timezones</p>
            <ul className="meta-label space-y-2 text-bone-dim">
              <li className="flex items-center gap-3">
                <span className="w-10 text-bone-faint">DUB</span>
                <LocalTime timezone={site.location.originTimezone} />
              </li>
              <li className="flex items-center gap-3">
                <span className="w-10 text-bone-faint">VAN</span>
                <LocalTime timezone={site.location.timezone} />
              </li>
              <li className="pt-2 text-bone-faint">{site.location.coords}</li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 md:items-end">
            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={scrollTop}
                className="meta-label rounded-full border border-hairline px-5 py-3 text-bone-dim transition-colors duration-300 hover:border-bone hover:text-bone"
              >
                Back to top ↑
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="hairline-t mt-12 flex flex-col gap-2 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="meta-label text-bone-faint">
            © {new Date().getFullYear()} Cade Ryan
          </p>
          <p className="meta-label text-bone-faint">Dublin ➝ Vancouver, BC</p>
          <p className="meta-label text-bone-faint">Designed & built by Cade Ryan</p>
        </div>
      </div>
    </footer>
  );
}
