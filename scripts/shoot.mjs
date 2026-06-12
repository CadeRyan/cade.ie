/* Screenshot harness for visual review. Usage: node scripts/shoot.mjs [baseURL] */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.argv[2] ?? "http://localhost:3199";
const OUT = ".playwright-shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({
  args: ["--enable-unsafe-swiftshader", "--use-gl=angle", "--use-angle=swiftshader"],
});

async function shoot(name, { width, height, path, scrolls = [0], waitFirst = 4500 }) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
  // report WebGL availability once
  if (name === "home-desktop") {
    const gl = await page.evaluate(() => {
      const c = document.createElement("canvas");
      return !!(c.getContext("webgl2") || c.getContext("webgl"));
    });
    console.log("WebGL available:", gl);
  }
  await page.waitForTimeout(waitFirst); // let preloader + hero reveal settle
  for (let i = 0; i < scrolls.length; i++) {
    const y = scrolls[i];
    await page.evaluate((v) => {
      window.__lenis?.scrollTo(v, { immediate: true, force: true });
      window.scrollTo(0, v);
    }, y);
    await page.waitForTimeout(1600); // reveals + brightness easing
    await page.screenshot({ path: `${OUT}/${name}-s${i}.png` });
    console.log(`shot ${name}-s${i} @y=${y}`);
  }
  await page.close();
}

const vhD = 900;
await shoot("home-desktop", {
  width: 1440,
  height: vhD,
  path: "/",
  scrolls: [0, vhD * 1.15, vhD * 2.4, vhD * 3.6, 99999],
});
await shoot("work-desktop", { width: 1440, height: vhD, path: "/work", scrolls: [0, vhD * 1.1, 99999] });
await shoot("case-voxmail", { width: 1440, height: vhD, path: "/work/voxmail", scrolls: [0, vhD, vhD * 3, 99999] });
await shoot("case-squid", { width: 1440, height: vhD, path: "/work/squid", scrolls: [vhD * 1.6] });
await shoot("about-desktop", { width: 1440, height: vhD, path: "/about", scrolls: [0, vhD * 1.2, 99999] });
await shoot("contact-desktop", { width: 1440, height: vhD, path: "/contact", scrolls: [0, vhD] });
await shoot("notfound-desktop", { width: 1440, height: vhD, path: "/nope", scrolls: [0] });
await shoot("home-mobile", { width: 390, height: 844, path: "/", scrolls: [0, 950, 2400, 99999] });
await shoot("case-mobile", { width: 390, height: 844, path: "/work/espoused", scrolls: [0, 1400] });

await browser.close();
console.log("done");
