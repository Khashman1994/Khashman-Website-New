import { ImageResponse } from "next/og";
import type { Locale } from "@/lib/i18n";

// Vorschaubild für WhatsApp, LinkedIn, Facebook & Co. – gemeinsames Layout für beide Sprachen

export const OG_SIZE = { width: 1200, height: 630 };

const TEXT: Record<Locale, { line1: string; line2: string; left: string; right: string }> = {
  de: { line1: "Webseiten, die", line2: "Eindruck hinterlassen.", left: "Webdesign aus Aachen", right: "Festpreise ab 299 €" },
  en: { line1: "Websites that make", line2: "an impression.", left: "Web design from Aachen, Germany", right: "Fixed prices from €299" },
};

export function renderOgImage(locale: Locale) {
  const t = TEXT[locale];

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
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>{t.line1}</div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1, letterSpacing: -3, color: "#8fb0ff" }}>{t.line2}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
          <span>{t.left}</span>
          <span>{t.right}</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
