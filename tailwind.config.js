/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E13",
        "ink-2": "#10161D",
        "ink-3": "#161E27",
        bone: "#E9E4D8",
        "bone-dim": "rgba(233, 228, 216, 0.62)",
        "bone-faint": "rgba(233, 228, 216, 0.38)",
        ember: "#FF5227",
        glow: "#7DF0DC",
        hairline: "rgba(233, 228, 216, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(4.5rem, 17vw, 16rem)", { lineHeight: "0.86", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 9.5vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.25rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.75rem, 3.6vw, 3.25rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        meta: ["0.72rem", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
