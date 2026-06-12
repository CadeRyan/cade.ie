# cade.ie

Personal portfolio of **Cade Ryan** — software engineer & designer, Dublin ➝ Vancouver.

Built with Next.js (App Router), Three.js, GSAP + ScrollTrigger, Lenis and Tailwind CSS.

## The idea

A dark, editorial, type-driven site over a single persistent WebGL scene — a
LIDAR-style point-cloud mountain range ("the North Shore at night") with a calm
water foreground, a star dome, and an ember glow that follows the cursor. Solid
content panels slide over the scene; it re-emerges at the hero and the footer.
Scroll position and the active route drive the camera and terrain mood.

## Stack notes

- **WebGL** — vanilla Three.js (no R3F), custom GLSL: ridged-FBM terrain
  displacement in the vertex shader, additive point sprites, scroll/route-driven
  uniforms. Lazy-loaded, DPR-clamped, paused when hidden, static frame under
  `prefers-reduced-motion`, graceful no-WebGL fallback.
- **Motion** — Lenis smooth scroll + GSAP. Declarative reveals via
  `data-reveal="lines | fade | image | stagger"` (see `src/components/ui/Reveals.tsx`),
  custom line splitter, page-transition wipe, magnetic hovers, custom cursor.
- **Content** — all case studies live in `src/lib/projects.ts`; pages are server
  components rendering that data.
- Old `/projects/*` URLs 308-redirect to `/work/*`; the deprecated Espoused
  case study redirects to its successor, `/work/fools-guild` (see `next.config.mjs`).
- `/wedding` is intentionally untouched (bare Figma embed, no site chrome).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Visual test harness

```bash
npm run build && npm start -- -p 3199
node scripts/shoot.mjs      # full-page screenshots → .playwright-shots/
node scripts/interact.mjs   # hover/transition/menu/reduced-motion checks
```

## Deploy

Configured for Firebase App Hosting (`apphosting.yaml`).
