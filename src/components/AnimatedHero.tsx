"use client";

import { MotionConfig, motion, useReducedMotion, useSpring, type Transition } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

/* ---------- Timing ---------- */

// Schweres, kontrolliertes Easing – langsamer Anlauf, präzises Abbremsen
const EASE_EXPO: [number, number, number, number] = [0.76, 0, 0.24, 1];
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HEADLINE_DELAY = 0.25;
const WORD_STAGGER = 0.07;
const WORD_DURATION = 1.1;

type HeadlineLine = { words: string[]; className?: string };

const HEADLINE: HeadlineLine[] = [
  { words: ["Digitale", "Lösungen,"] },
  { words: ["die", "Ihr", "Geschäft"], className: "text-blue-600" },
  { words: ["voranbringen."] },
];

const TOTAL_WORDS = HEADLINE.reduce((sum, line) => sum + line.words.length, 0);
// Subtext startet, kurz bevor das letzte Wort zur Ruhe kommt
const REVEAL_END = HEADLINE_DELAY + (TOTAL_WORDS - 1) * WORD_STAGGER + WORD_DURATION * 0.75;

function fadeUp(delay: number): Transition {
  return { duration: 0.9, delay, ease: EASE_OUT };
}

/* ---------- Masked Headline ---------- */

function MaskedHeadline() {
  let wordIndex = 0;

  return (
    <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
      {HEADLINE.map((line) => (
        // pb/-mb geben Unterlängen (g, ä, ,) Platz, ohne den Zeilenabstand zu verändern
        <span key={line.words.join(" ")} className={`block overflow-hidden pb-[0.12em] -mb-[0.12em] ${line.className ?? ""}`}>
          {line.words.map((word, i) => {
            const delay = HEADLINE_DELAY + wordIndex++ * WORD_STAGGER;
            return (
              <span key={word}>
                <motion.span
                  className="inline-block will-change-transform"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: WORD_DURATION, delay, ease: EASE_EXPO }}
                >
                  {word}
                </motion.span>
                {i < line.words.length - 1 && " "}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/* ---------- Magnetic Button ---------- */

type MagneticButtonProps = {
  href: string;
  variant: "primary" | "outline";
  children: ReactNode;
};

const MAGNET_STRENGTH = 0.25;
const MAGNET_SPRING = { stiffness: 220, damping: 18, mass: 0.6 };

const buttonVariants = {
  primary: {
    base: "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-slate-900/20",
    sweep: "bg-slate-900",
  },
  outline: {
    base: "border border-slate-300 bg-white/60 text-slate-900 backdrop-blur hover:border-slate-900 hover:text-white",
    sweep: "bg-slate-900",
  },
} as const;

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function MagneticButton({ href, variant, children }: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, MAGNET_SPRING);
  const y = useSpring(0, MAGNET_SPRING);
  const styles = buttonVariants[variant];

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * MAGNET_STRENGTH);
    y.set((event.clientY - (rect.top + rect.height / 2)) * MAGNET_STRENGTH);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-medium transition-[color,border-color,box-shadow] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${styles.base}`}
    >
      {/* Sweep: Fläche fährt mit demselben Easing wie die Headline von unten ein */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 -z-10 translate-y-full rounded-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 motion-reduce:transition-none ${styles.sweep}`}
      />
      <span>{children}</span>
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">
        <ArrowIcon />
      </span>
    </motion.a>
  );
}

/* ---------- Hero ---------- */

export default function AnimatedHero() {
  return (
    // reducedMotion="user": Bei "Bewegung reduzieren" im OS entfallen alle Transform-Animationen
    <MotionConfig reducedMotion="user">
      <div>
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-600"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />
          Verfügbar für neue Projekte im Quartal
        </motion.span>

        <MaskedHeadline />

        <motion.p
          className="mt-6 max-w-xl font-sans text-lg text-slate-600"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fadeUp(REVEAL_END)}
        >
          Moderne, performante und conversion-starke Webseiten für KMU &amp; Startups – ohne Technik-Stress.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={fadeUp(REVEAL_END + 0.15)}
        >
          <MagneticButton href="#kontakt" variant="primary">
            Kostenloses Erstgespräch
          </MagneticButton>
          <MagneticButton href="#preise" variant="outline">
            Pakete ansehen
          </MagneticButton>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
