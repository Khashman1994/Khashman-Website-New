"use client";

import { writeConsent } from "@/lib/consent";

// Footer-Link: Die Wahl lässt sich jederzeit ändern. Der Banner erscheint dann erneut.
export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => writeConsent(null)} className="text-left text-fg/70 hover:text-fg">
      {label}
    </button>
  );
}
