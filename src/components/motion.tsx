"use client";

import type { MouseEvent, ReactNode } from "react";

// Nur noch die Bausteine, die wirklich auf Maus/Klick reagieren müssen.
// Reine Scroll-Effekte liegen als CSS-Lösung in scroll-effects.tsx.

/* ---------- SpotlightCard: Lichtkegel + leuchtender Rand folgen der Maus ---------- */

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <div onMouseMove={handleMouseMove} className={`spotlight-border group relative rounded-3xl p-px ${className}`}>
      <div className="spotlight relative h-full rounded-[calc(1.5rem-1px)]">{children}</div>
    </div>
  );
}

/* ---------- Paket im Kontaktformular vorauswählen ---------- */

export const PACKAGE_EVENT = "khashman:select-package";

export function PackageLink({ value, className, children }: { value: string; className?: string; children: ReactNode }) {
  return (
    <a
      href="#kontakt"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(PACKAGE_EVENT, { detail: value }))}
    >
      {children}
    </a>
  );
}
