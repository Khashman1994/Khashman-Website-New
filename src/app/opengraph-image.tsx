import { ImageResponse } from "next/og";

// Vorschaubild für WhatsApp, LinkedIn, Facebook & Co.
export const alt = "Khashman Webdesign – Moderne Webseiten aus Aachen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 80% 30%, #2a3a7a 0%, #0a0c12 45%, #05060a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 600 }}>
          Khashman<span style={{ color: "#5b8cff" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>Webseiten, die</div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1, letterSpacing: -3, color: "#8fb0ff" }}>
            Eindruck hinterlassen.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
          <span>Webdesign aus Aachen</span>
          <span>Festpreise ab 299 €</span>
        </div>
      </div>
    ),
    size,
  );
}
