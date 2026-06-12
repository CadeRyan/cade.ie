/* Interaction tests: hover previews, cursor, page transitions, mobile menu,
   reduced motion, console errors. Usage: node scripts/interact.mjs [baseURL] */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.argv[2] ?? "http://localhost:3199";
const OUT = ".playwright-shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  args: ["--enable-unsafe-swiftshader", "--use-gl=angle", "--use-angle=swiftshader"],
});

const errors = [];

async function newPage(opts = {}) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, ...opts });
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`[console] ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`[pageerror] ${err.message}`));
  return page;
}

// ── 1. hover preview on project rows + custom cursor ──
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(4200);
  const row = page.locator("a[href='/work/squid']").first();
  await row.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await row.hover();
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/it-hover-row.png` });
  console.log("hover preview captured");

  // ── 2. click through with transition ──
  // The overlay must cover the viewport BEFORE the URL changes, then sweep away.
  const overlayState = () =>
    page.evaluate(() => {
      const el = document.querySelector("[data-transition-overlay]");
      if (!el) return { found: false };
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      return {
        found: true,
        coversCenter: r.top <= vh / 2 && r.bottom >= vh / 2,
        rising: r.top < vh * 0.8, // visibly entered the viewport
        top: Math.round(r.top),
        path: location.pathname,
      };
    });

  // Poll through the transition. The invariant: the path may only change
  // while the overlay covers the viewport.
  await row.click();
  let sawRiseBeforeNav = false;
  let coveredAtNav = false;
  let navHappened = false;
  let shotTaken = false;
  for (let t = 0; t < 2000; t += 60) {
    const s = await overlayState();
    if (s.rising && s.path === "/") sawRiseBeforeNav = true;
    if (!shotTaken && s.rising) {
      shotTaken = true;
      await page.screenshot({ path: `${OUT}/it-transition-mid.png` });
    }
    if (s.path !== "/") {
      navHappened = true;
      coveredAtNav = s.coversCenter;
      break;
    }
    await page.waitForTimeout(60);
  }
  if (!sawRiseBeforeNav) console.log("FAIL: overlay never entered viewport before navigation");
  if (!navHappened) console.log("FAIL: navigation never happened");
  if (navHappened && !coveredAtNav) console.log("FAIL: overlay not covering when path changed");

  await page.waitForTimeout(1500); // out complete
  const done = await overlayState();
  console.log("transition done:", JSON.stringify(done), "url:", page.url());
  if (done.coversCenter) console.log("FAIL: overlay stuck covering");
  if (!page.url().endsWith("/work/squid")) console.log("FAIL: wrong destination");
  else if (sawRiseBeforeNav && coveredAtNav) {
    console.log("transition OK: rose before nav, covered at nav, revealed after");
  }
  await page.screenshot({ path: `${OUT}/it-transition-done.png` });
  await page.close();
}

// ── 3. mobile menu ──
{
  const page = await newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`${BASE}/about`, { waitUntil: "networkidle" });
  await page.waitForTimeout(3800);
  await page.click("button[aria-controls='mobile-menu']");
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/it-mobile-menu.png` });
  await page.click("#mobile-menu a[href='/work']");
  await page.waitForTimeout(1800);
  console.log("mobile menu nav url:", page.url());
  await page.close();
}

// ── 4. reduced motion smoke test ──
{
  const page = await newPage();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${OUT}/it-reduced-motion.png` });
  const visible = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    return h1 ? getComputedStyle(h1).opacity : "missing";
  });
  console.log("reduced-motion h1 opacity:", visible);
  await page.close();
}

// ── 5. hero bottom bar visibility on mobile (clip) ──
{
  const page = await newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(4200);
  await page.screenshot({
    path: `${OUT}/it-mobile-hero-bottom.png`,
    clip: { x: 0, y: 560, width: 390, height: 284 },
  });
  await page.close();
}

// ── 6. desktop hero close-up of name + terrain (clip) ──
{
  const page = await newPage();
  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await page.mouse.move(1000, 420);
  await page.waitForTimeout(4500);
  await page.screenshot({
    path: `${OUT}/it-hero-closeup.png`,
    clip: { x: 0, y: 240, width: 1440, height: 660 },
  });
  // about teaser punctuation check
  await page.evaluate(() => {
    window.__lenis?.scrollTo(2400, { immediate: true, force: true });
    window.scrollTo(0, 2400);
  });
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `${OUT}/it-about-teaser.png`, clip: { x: 500, y: 0, width: 940, height: 500 } });
  await page.close();
}

// ── 7. contact footer CTA ──
{
  const page = await newPage();
  await page.goto(`${BASE}/contact`, { waitUntil: "networkidle" });
  await page.waitForTimeout(3800);
  await page.evaluate(() => {
    window.__lenis?.scrollTo(99999, { immediate: true, force: true });
    window.scrollTo(0, 99999);
  });
  await page.waitForTimeout(1600);
  await page.screenshot({ path: `${OUT}/it-contact-footer.png` });
  await page.close();
}

await browser.close();
if (errors.length) {
  console.log("\n── console/page errors ──");
  errors.slice(0, 20).forEach((e) => console.log(e));
} else {
  console.log("\nno console or page errors");
}
console.log("done");
