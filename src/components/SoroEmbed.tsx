"use client";

import Script from "next/script";
import { useConsent, writeConsent } from "@/lib/consent";
import type { Dictionary } from "@/lib/i18n";

const SORO_SRC = "https://app.trysoro.com/api/embed/5323da2a-5529-4d90-8f34-a9a29aa89df9";

// Lädt den Soro-Blog erst nach Zustimmung. Ohne Zustimmung gibt es keine Anfrage an Soro.
export default function SoroEmbed({ t }: { t: Dictionary["cookie"] }) {
  const consent = useConsent();

  if (consent === "loading") return null;

  if (consent === "accepted") {
    return (
      <>
        <div id="soro-blog" />
        <Script src={SORO_SRC} strategy="afterInteractive" />
      </>
    );
  }

  return (
    <div className="max-w-xl rounded-3xl border border-fg/10 bg-ink-900 p-8">
      <p className="text-lg font-semibold text-fg">{t.blogTitle}</p>
      <p className="mt-2 text-sm leading-relaxed text-fg/70">{t.blogText}</p>
      <button
        type="button"
        onClick={() => writeConsent("accepted")}
        className="mt-6 rounded-full bg-fg px-6 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {t.blogButton}
      </button>
    </div>
  );
}
