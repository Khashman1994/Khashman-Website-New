import type { CSSProperties, ReactNode } from "react";

// Server-Komponenten: Die Animationen stecken komplett im CSS (globals.css, Abschnitt
// "Scroll-Animationen") – kein JavaScript, keine Hydration, keine IntersectionObserver.

/* ---------- Reveal: blendet Inhalte beim Hineinscrollen ein ---------- */

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Staffelung in Sekunden-Äquivalent: 0.1 ≈ 10 % später im Scroll-Verlauf */
  delay?: number;
  className?: string;
}) {
  const style = delay ? ({ "--reveal-offset": `${delay * 100}%` } as CSSProperties) : undefined;
  return (
    <div className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

/* ---------- ScrollWords: Text färbt sich Wort für Wort beim Scrollen ein ---------- */

const WORDS_START = 10;
const WORDS_SPAN = 45;

export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <p className={`scroll-words ${className}`}>
      {words.map((word, i) => {
        const style = {
          "--word-start": `${WORDS_START + (WORDS_SPAN * i) / words.length}%`,
          "--word-end": `${WORDS_START + (WORDS_SPAN * (i + 1)) / words.length}%`,
        } as CSSProperties;
        return (
          <span key={`${word}-${i}`} className="inline-block" style={style}>
            {word}&nbsp;
          </span>
        );
      })}
    </p>
  );
}

/* ---------- ProcessTimeline: Fortschrittslinie, die beim Scrollen wächst ---------- */

export function ProcessTimeline({ children }: { children: ReactNode }) {
  return (
    <div className="process-timeline relative">
      <div aria-hidden="true" className="absolute bottom-0 left-[1.4rem] top-0 w-px bg-white/10 md:left-1/2">
        <div className="process-line h-full w-full origin-top bg-gradient-to-b from-accent via-violet to-accent" />
      </div>
      {children}
    </div>
  );
}
