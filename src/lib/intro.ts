/**
 * Tiny coordination bus between the preloader, the WebGL scene and the hero:
 * everything that should wait for the intro subscribes here.
 */

let done = false;

export function markIntroDone() {
  if (done) return;
  done = true;
  window.dispatchEvent(new CustomEvent("intro:done"));
}

export function isIntroDone() {
  return done;
}

/** Runs cb once the intro finishes (immediately if it already has). */
export function onIntroDone(cb: () => void): () => void {
  if (done) {
    cb();
    return () => {};
  }
  const handler = () => cb();
  window.addEventListener("intro:done", handler, { once: true });
  return () => window.removeEventListener("intro:done", handler);
}
