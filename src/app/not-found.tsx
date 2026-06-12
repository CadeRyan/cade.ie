import { TransitionLink } from "@/components/chrome/TransitionProvider";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 text-center">
      <p className="meta-label mb-6 text-ember" data-reveal="fade">
        ( 404 )
      </p>
      <h1 className="display text-display-lg text-bone" data-reveal="lines">
        Off the trail
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-bone-dim" data-reveal="fade">
        This page doesn&rsquo;t exist — or it wandered into the mountains.
        Either way, the way back is easy.
      </p>
      <div className="mt-10" data-reveal="fade">
        <TransitionLink
          href="/"
          className="meta-label rounded-full border border-hairline px-6 py-3.5 text-bone-dim transition-colors duration-300 hover:border-bone hover:text-bone"
        >
          Back to base camp →
        </TransitionLink>
      </div>
    </section>
  );
}
