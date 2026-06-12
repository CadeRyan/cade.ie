/**
 * GLSL for the "North Shore" background — a LIDAR-style point-cloud terrain
 * with a flat water foreground, ridged-noise mountains, an ember glow that
 * follows the cursor, and a slowly rotating star field.
 */

const SIMPLEX_2D = /* glsl */ `
  // Ashima 2D simplex noise (public domain)
  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
`;

export const terrainVertex = /* glsl */ `
  uniform float uTime;
  uniform float uReveal;
  uniform float uAmp;
  uniform float uCalm;
  uniform vec2 uPointer;
  uniform float uPointerStrength;
  uniform float uPixelRatio;
  uniform float uSize;

  varying float vElevation;
  varying float vGlow;
  varying float vFade;
  varying float vTwinkle;

  ${SIMPLEX_2D}

  float ridge(float h, float offset) {
    h = abs(h);
    h = offset - h;
    return h * h;
  }

  float ridgedFbm(vec2 p) {
    float sum = 0.0;
    float freq = 1.0;
    float amp = 0.62;
    float prev = 1.0;
    for (int i = 0; i < 4; i++) {
      float n = ridge(snoise(p * freq), 0.92);
      sum += n * amp * prev;
      prev = n;
      freq *= 2.04;
      amp *= 0.46;
    }
    return sum;
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec3 pos = position;

    // Slow drift: the range crawls toward the camera, forever.
    vec2 domain = pos.xz * 0.0135 + vec2(0.0, uTime * 0.0125);

    // Fjord mask: flat water down the middle + near the camera,
    // ridges rising to the sides and into the distance.
    float side = smoothstep(7.0, 78.0, abs(pos.x));
    float depth = smoothstep(-20.0, -190.0, pos.z);
    float mask = clamp(max(side * 0.9, depth), 0.0, 1.0);

    float calmDamp = mix(1.0, 0.42, uCalm);
    float mountains = ridgedFbm(domain) * 30.0 * mask * uAmp * calmDamp;

    // Gentle water ripple where the mask is low.
    float ripple = snoise(pos.xz * 0.05 + vec2(uTime * 0.06, uTime * 0.045)) * 0.4 * (1.0 - mask);

    float h = (mountains + ripple) * uReveal;
    pos.y += h;

    vElevation = clamp(h / 16.0, 0.0, 1.0);

    // Ember glow around the projected cursor position.
    float d = distance(pos.xz, uPointer);
    vGlow = exp(-(d * d) / 260.0) * uPointerStrength;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);

    // Distance fade plus soft fade at the plane's side edges.
    float dist = -mv.z;
    float far = smoothstep(330.0, 110.0, dist);
    float near = smoothstep(2.0, 14.0, dist);
    float edge = 1.0 - smoothstep(150.0, 205.0, abs(pos.x));
    vFade = far * near * edge;

    vTwinkle = hash(position.xz);

    gl_Position = projectionMatrix * mv;

    float size = uSize * (1.0 + vElevation * 0.9 + vGlow * 1.4);
    gl_PointSize = size * uPixelRatio * (140.0 / max(dist, 1.0));
    gl_PointSize = clamp(gl_PointSize, 0.0, 7.0 * uPixelRatio);
  }
`;

export const terrainFragment = /* glsl */ `
  uniform float uTime;
  uniform float uBrightness;
  uniform vec3 uDeep;
  uniform vec3 uGlowColor;
  uniform vec3 uSnow;
  uniform vec3 uEmber;

  varying float vElevation;
  varying float vGlow;
  varying float vFade;
  varying float vTwinkle;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float disc = smoothstep(0.5, 0.08, r);

    float t = pow(vElevation, 1.35);
    vec3 col = mix(uDeep, uGlowColor, t);
    col = mix(col, uSnow, smoothstep(0.72, 1.0, vElevation) * 0.55);

    // cursor ember
    col += uEmber * vGlow * 1.6;

    float twinkle = 0.78 + 0.22 * sin(uTime * (0.6 + vTwinkle * 1.6) + vTwinkle * 41.0);

    float alpha = disc * vFade * twinkle * uBrightness;
    alpha *= 0.36 + 0.64 * t + vGlow;

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

export const starsVertex = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;

  attribute float aPhase;
  attribute float aSize;

  varying float vAlpha;

  void main() {
    // Slow rotation of the whole sky.
    float a = uTime * 0.004;
    mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
    vec3 pos = position;
    pos.xz = rot * pos.xz;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    vAlpha = 0.5 + 0.5 * sin(uTime * (0.3 + aPhase) + aPhase * 31.0);
    gl_PointSize = aSize * uPixelRatio;
  }
`;

export const starsFragment = /* glsl */ `
  uniform float uBrightness;
  varying float vAlpha;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float disc = smoothstep(0.5, 0.12, r);
    vec3 col = mix(vec3(0.78, 0.86, 0.86), vec3(0.91, 0.89, 0.84), vAlpha);
    gl_FragColor = vec4(col, disc * vAlpha * 0.72 * uBrightness);
  }
`;
