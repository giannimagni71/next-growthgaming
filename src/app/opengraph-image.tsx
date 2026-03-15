import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Growth Gaming — Giocare per crescere";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)",
          }}
        />

        {/* GG ghost text */}
        <div
          style={{
            position: "absolute",
            fontSize: 300,
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            letterSpacing: "-0.05em",
          }}
        >
          GG
        </div>

        {/* Main text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            GROWTH
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              background: "linear-gradient(90deg, #ff6b00, #ff4500)",
              backgroundClip: "text",
              color: "transparent",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            GAMING
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          Giocare per crescere
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #ff6b00, #ff4500, #ff6b00)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
