"use client";

import { THEME_COLORS, THEME_STORAGE_KEY } from "@/lib/theme";

// Schaltet zwischen Hell und Dunkel um und merkt sich die Wahl.
// Welches Icon sichtbar ist, entscheidet reines CSS (light:-Variante) –
// so gibt es beim Laden kein falsches Icon und keinen Hydration-Konflikt.
export default function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Privater Modus o. Ä.: Umschalten klappt trotzdem, wird nur nicht gespeichert
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[next]);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-fg/15 text-fg/80 transition-colors hover:border-fg/40 hover:text-fg"
    >
      {/* Mond im Dunkelmodus, Sonne im Hellmodus */}
      <svg className="h-4 w-4 light:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg className="hidden h-4 w-4 light:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
