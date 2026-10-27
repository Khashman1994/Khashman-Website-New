"use client";

import Link from "next/link";
import { useConsent, writeConsent } from "@/lib/consent";
import type { Dictionary } from "@/lib/i18n";

// Einwilligungs-Banner: erscheint, solange noch keine Wahl getroffen wurde.
// Beide Schaltflächen sind bewusst gleich gestaltet (Akzeptieren und Ablehnen gleichwertig).
const BUTTON =
  "rounded-full border border-fg/25 px-6 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg/60 hover:bg-fg/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function CookieBanner({ t }: { t: Dictionary["cookie"] }) {
  const consent = useConsent();
  if (consent !== null) return null;

  return (
    <div role="region" aria-label={t.title} className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="mx-auto max-w-3xl rounded-3xl border border-fg/10 bg-ink-900/95 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <p className="text-base font-semibold text-fg">{t.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-fg/70">
          {t.text}
        </p>
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <Link href="/datenschutz" hrefLang="de" className="text-fg underline underline-offset-4 hover:text-accent">
            {t.privacyLink}
          </Link>
          <Link href="/impressum" hrefLang="de" className="text-fg underline underline-offset-4 hover:text-accent">
            {t.imprintLink}
          </Link>
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button type="button" className={BUTTON} onClick={() => writeConsent("declined")}>
            {t.decline}
          </button>
          <button type="button" className={BUTTON} onClick={() => writeConsent("accepted")}>
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
