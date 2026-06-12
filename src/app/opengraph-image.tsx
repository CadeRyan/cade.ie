import { ImageResponse } from "next/og";

export const alt = "Cade Ryan — Software Engineer & Maker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0E13",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(233,228,216,0.45)",
            fontSize: 24,
            letterSpacing: 4,
          }}
        >
          <span>PORTFOLIO — CADE.IE</span>
          <span>DUBLIN — VANCOUVER</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 176,
              fontWeight: 800,
              color: "#E9E4D8",
              letterSpacing: -4,
              lineHeight: 0.95,
            }}
          >
            CADE RYAN
            <span style={{ color: "#FF5227" }}>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(233,228,216,0.18)",
            paddingTop: 28,
            color: "rgba(233,228,216,0.7)",
            fontSize: 28,
          }}
        >
          <span>Software Engineer &amp; Maker</span>
          <span style={{ color: "#7DF0DC" }}>49.2827° N — 123.1207° W</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
