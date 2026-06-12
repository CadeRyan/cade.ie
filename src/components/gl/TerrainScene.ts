import * as THREE from "three";
import { terrainVertex, terrainFragment, starsVertex, starsFragment } from "./shaders";

type Preset = { calm: number; camY: number };

const PRESETS: { match: (p: string) => boolean; preset: Preset }[] = [
  { match: (p) => p === "/", preset: { calm: 0.0, camY: 8.0 } },
  { match: (p) => p === "/contact", preset: { calm: 0.18, camY: 8.4 } },
  { match: (p) => p === "/work", preset: { calm: 0.55, camY: 9.6 } },
  { match: (p) => p.startsWith("/work/"), preset: { calm: 0.75, camY: 10.4 } },
  { match: (p) => p === "/about", preset: { calm: 0.45, camY: 9.0 } },
];

const FALLBACK: Preset = { calm: 0.55, camY: 9.2 };

function smoothstep(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * The persistent WebGL background: a point-cloud mountain range with a calm
 * water foreground, a rotating star dome, an ember glow following the cursor,
 * and camera/terrain moods driven by scroll position and the active route.
 */
export class TerrainScene {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private terrain!: THREE.Points;
  private stars!: THREE.Points;
  private terrainMat!: THREE.ShaderMaterial;
  private starsMat!: THREE.ShaderMaterial;

  private raf = 0;
  private running = false;
  private disposed = false;
  private reduced = false;

  private time = 0;
  private lastTick = 0;

  // pointer state
  private ndc = new THREE.Vector2(0, 0);
  private pointerWorld = new THREE.Vector2(0, -60);
  private pointerTarget = new THREE.Vector2(0, -60);
  private pointerStrength = 0;
  private lastPointerMove = 0;

  // route + reveal state
  private preset: Preset = { ...FALLBACK };
  private presetTarget: Preset = { ...FALLBACK };
  private revealStart = -1;
  private revealValue = 0;
  private brightness = 1;

  private onIntroDone = () => this.reveal();
  private mediaQuery: MediaQueryList | null = null;

  constructor(private canvas: HTMLCanvasElement, initialPath: string) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });
    this.renderer.setClearColor(0x0a0e13, 1);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);

    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 700);
    this.camera.position.set(0, 8, 30);

    const initial = this.resolvePreset(initialPath);
    this.preset = { ...initial };
    this.presetTarget = { ...initial };

    this.buildTerrain();
    this.buildStars();

    window.addEventListener("resize", this.onResize);
    window.addEventListener("pointermove", this.onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", this.onVisibility);
    window.addEventListener("intro:done", this.onIntroDone);
    canvas.addEventListener("webglcontextlost", this.onContextLost, false);
    canvas.addEventListener("webglcontextrestored", this.onContextRestored, false);

    this.mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.reduced = this.mediaQuery.matches;
    this.mediaQuery.addEventListener?.("change", this.onMotionPref);

    if (this.reduced) {
      this.revealValue = 1;
      this.renderOnce();
    } else {
      this.start();
    }
  }

  /* ------------------------------ construction ----------------------------- */

  private buildTerrain() {
    const coarse =
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    const segX = coarse ? 190 : 300;
    const segZ = coarse ? 130 : 210;

    const geo = new THREE.PlaneGeometry(420, 360, segX, segZ);
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, 0, -150); // spans z in [-330, 30]

    this.terrainMat = new THREE.ShaderMaterial({
      vertexShader: terrainVertex,
      fragmentShader: terrainFragment,
      uniforms: {
        uTime: { value: 0 },
        uReveal: { value: 0 },
        uAmp: { value: 1 },
        uCalm: { value: this.preset.calm },
        uPointer: { value: this.pointerWorld },
        uPointerStrength: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.75) },
        uSize: { value: 1.45 },
        uBrightness: { value: 1 },
        uDeep: { value: new THREE.Color("#16363c") },
        uGlowColor: { value: new THREE.Color("#7df0dc") },
        uSnow: { value: new THREE.Color("#e9e4d8") },
        uEmber: { value: new THREE.Color("#ff5227") },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });

    this.terrain = new THREE.Points(geo, this.terrainMat);
    this.terrain.frustumCulled = false;
    this.scene.add(this.terrain);
  }

  private buildStars() {
    const count = 650;
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // random point on an upper dome
      const theta = Math.random() * Math.PI * 2;
      const y = 0.12 + Math.random() * 0.88; // bias above horizon
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const radius = 360 + Math.random() * 80;
      positions[i * 3] = Math.cos(theta) * r * radius;
      positions[i * 3 + 1] = y * radius * 0.6 + 20;
      positions[i * 3 + 2] = Math.sin(theta) * r * radius - 60;
      phases[i] = Math.random() * 2;
      sizes[i] = 0.8 + Math.random() * 1.7;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    this.starsMat = new THREE.ShaderMaterial({
      vertexShader: starsVertex,
      fragmentShader: starsFragment,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.75) },
        uBrightness: { value: 1 },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });

    this.stars = new THREE.Points(geo, this.starsMat);
    this.stars.frustumCulled = false;
    this.scene.add(this.stars);
  }

  /* -------------------------------- controls ------------------------------- */

  setRoute(path: string) {
    this.presetTarget = { ...this.resolvePreset(path) };
    if (this.reduced) {
      this.preset = { ...this.presetTarget };
      this.renderOnce();
    }
  }

  reveal() {
    if (this.revealStart >= 0 || this.reduced) return;
    this.revealStart = this.time;
  }

  private resolvePreset(path: string): Preset {
    return PRESETS.find((e) => e.match(path))?.preset ?? FALLBACK;
  }

  /* --------------------------------- events -------------------------------- */

  private onResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
    if (this.reduced) this.renderOnce();
  };

  private onPointerMove = (e: PointerEvent) => {
    this.ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    this.lastPointerMove = this.time;
    // project the pointer ray onto the y = 0 plane
    const dir = new THREE.Vector3(this.ndc.x, this.ndc.y, 0.5)
      .unproject(this.camera)
      .sub(this.camera.position)
      .normalize();
    if (dir.y < -0.01) {
      const t = -this.camera.position.y / dir.y;
      const hit = this.camera.position.clone().add(dir.multiplyScalar(Math.min(t, 320)));
      this.pointerTarget.set(hit.x, hit.z);
    }
  };

  private onVisibility = () => {
    if (document.hidden) this.stop();
    else if (!this.reduced) this.start();
  };

  private onMotionPref = () => {
    this.reduced = this.mediaQuery?.matches ?? false;
    if (this.reduced) {
      this.stop();
      this.revealValue = 1;
      this.renderOnce();
    } else {
      this.start();
    }
  };

  private onContextLost = (e: Event) => {
    e.preventDefault();
    this.stop();
  };

  private onContextRestored = () => {
    if (!this.reduced) this.start();
  };

  /* ---------------------------------- loop --------------------------------- */

  private start() {
    if (this.running || this.disposed) return;
    this.running = true;
    this.lastTick = performance.now();
    this.raf = requestAnimationFrame(this.tick);
  }

  private stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private tick = (now: number) => {
    if (!this.running || this.disposed) return;
    const dt = Math.min((now - this.lastTick) / 1000, 0.05);
    this.lastTick = now;
    this.time += dt;

    this.update(dt);
    this.renderer.render(this.scene, this.camera);
    this.raf = requestAnimationFrame(this.tick);
  };

  private update(dt: number) {
    const k = 1 - Math.pow(0.0001, dt); // framerate-independent lerp factor (~fast)
    const slow = 1 - Math.pow(0.05, dt); // gentler

    // reveal envelope
    if (this.revealStart >= 0) {
      const t = Math.min((this.time - this.revealStart) / 2.4, 1);
      this.revealValue = easeOutCubic(t);
    }

    // route preset easing
    this.preset.calm += (this.presetTarget.calm - this.preset.calm) * slow;
    this.preset.camY += (this.presetTarget.camY - this.preset.camY) * slow;

    // pointer: follow the mouse, or drift on autopilot when idle / touch
    const idle = this.time - this.lastPointerMove > 3.5 || this.lastPointerMove === 0;
    if (idle) {
      this.pointerTarget.set(
        Math.sin(this.time * 0.17) * 58,
        -50 + Math.sin(this.time * 0.11) * 42
      );
    }
    const strengthTarget = idle ? 0.55 : 1;
    this.pointerStrength += (strengthTarget - this.pointerStrength) * slow;
    this.pointerWorld.lerp(this.pointerTarget, idle ? slow : k * 0.7);

    // scroll mood: bright in the hero, dim through content, bright at the footer
    const vh = window.innerHeight || 1;
    const sy = window.scrollY || 0;
    const max = Math.max((document.documentElement?.scrollHeight ?? vh) - vh, 1);
    const topF = 1 - smoothstep(0.2, 1.15, sy / vh);
    const botF = max > vh * 1.5 ? smoothstep(max - 1.5 * vh, max - vh * 0.2, sy) : 0;
    const targetBrightness = 0.3 + 0.7 * Math.max(topF, botF);
    this.brightness += (targetBrightness - this.brightness) * slow;

    // camera: parallax + slight lift as you scroll out of the hero
    const lift = smoothstep(0, 1.4, sy / vh) * 3.2;
    const tx = this.ndc.x * 3.0;
    const ty = this.preset.camY + this.ndc.y * 1.1 + lift;
    this.camera.position.x += (tx - this.camera.position.x) * slow;
    this.camera.position.y += (ty - this.camera.position.y) * slow;
    this.camera.lookAt(0, 4.2, -90);

    // uniforms
    const tu = this.terrainMat.uniforms;
    tu.uTime.value = this.time;
    tu.uReveal.value = this.revealValue;
    tu.uCalm.value = this.preset.calm;
    tu.uPointerStrength.value = this.pointerStrength;
    tu.uBrightness.value = this.brightness;

    const su = this.starsMat.uniforms;
    su.uTime.value = this.time;
    su.uBrightness.value = (0.45 + 0.55 * this.brightness) * this.revealValue;
  }

  private renderOnce() {
    if (this.disposed) return;
    this.time = 40; // a pleasant frozen moment
    this.update(0.016);
    this.terrainMat.uniforms.uReveal.value = 1;
    this.renderer.render(this.scene, this.camera);
  }

  /* -------------------------------- teardown -------------------------------- */

  dispose() {
    this.disposed = true;
    this.stop();
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("pointermove", this.onPointerMove);
    document.removeEventListener("visibilitychange", this.onVisibility);
    window.removeEventListener("intro:done", this.onIntroDone);
    this.canvas.removeEventListener("webglcontextlost", this.onContextLost);
    this.canvas.removeEventListener("webglcontextrestored", this.onContextRestored);
    this.mediaQuery?.removeEventListener?.("change", this.onMotionPref);

    this.terrain.geometry.dispose();
    this.terrainMat.dispose();
    this.stars.geometry.dispose();
    this.starsMat.dispose();
    this.renderer.dispose();
  }
}
