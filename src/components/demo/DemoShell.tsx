"use client";

import Link from "next/link";
import { useState, type CSSProperties, type ReactNode } from "react";
import type { DemoTheme } from "@/lib/demo-sites";

/* Rahmen jeder Beispiel-Website: Hinweisbalken von Khashman Webdesign und
   Hell/Dunkel-Schalter. Jede Seite öffnet bewusst hell, egal welches Theme
   die Hauptseite oder das Betriebssystem gerade nutzt. */

type Mode = "light" | "dark";

function toVars(theme: DemoTheme, display: string, mode: Mode) {
  return {
    "--d-bg": theme.bg,
    "--d-surface": theme.surface,
    "--d-ink": theme.ink,
    "--d-muted": theme.muted,
    "--d-line": theme.line,
    "--d-accent": theme.accent,
    "--d-on-accent": theme.onAccent,
    "--d-accent-text": theme.accentText,
    "--d-display": display,
    colorScheme: mode,
  } as CSSProperties;
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export default function DemoShell({
  industry,
  palettes,
  display,
  children,
}: {
  industry: string;
  palettes: { light: DemoTheme; dark: DemoTheme };
  display: string;
  children: ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("light");
  const dark = mode === "dark";

  return (
    <div
      style={toVars(palettes[mode], display, mode)}
      className="min-h-screen bg-[color:var(--d-bg)] font-[family-name:var(--font-jakarta)] text-[color:var(--d-ink)] transition-colors duration-300 motion-reduce:transition-none"
    >
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a] text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 text-sm sm:px-6">
          <p className="min-w-0 text-white/70">
            <span className="font-semibold text-white">Fiktives Design-Beispiel</span>
            <span className="hidden md:inline"> für {industry} · von Khashman Webdesign</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMode(dark ? "light" : "dark")}
              aria-pressed={dark}
              aria-label={dark ? "Hellen Modus anzeigen" : "Dunklen Modus anzeigen"}
              title={dark ? "Hellen Modus anzeigen" : "Dunklen Modus anzeigen"}
              className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/20 px-3 text-white/80 transition-colors hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b8cff]"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
              <span className="hidden sm:inline">{dark ? "Hell" : "Dunkel"}</span>
            </button>
            <Link href="/#branchen" className="inline-flex min-h-9 items-center whitespace-nowrap rounded-full px-3 text-white/70 transition-colors hover:text-white">
              ← <span className="sm:hidden">Zurück</span>
              <span className="hidden sm:inline">Alle Beispiele</span>
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex min-h-9 items-center whitespace-nowrap rounded-full bg-white px-4 font-medium text-[#05060a] transition-colors hover:bg-[#5b8cff] hover:text-white"
            >
              <span className="sm:hidden">Anfragen</span>
              <span className="hidden sm:inline">Ähnliches Design anfragen</span>
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
