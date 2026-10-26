"use client";

import { AnimatePresence, MotionConfig, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

type Phrase = { lead: string; accent: string };

// Zeile 1 dunkel, Zeile 2 in Royal Blue – wie die dunklen/blauen Balken im Mockup
const PHRASES: Phrase[] = [
  { lead: "Modernes", accent: "Webdesign" },
  { lead: "Conversion-starke", accent: "Online-Shops" },
  { lead: "Zielgerichtete", accent: "SEO-Optimierung" },
  { lead: "Blitzschnelle", accent: "Ladezeiten" },
];

const INTERVAL_MS = 3000;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const lineVariants: Variants = {
  enter: { y: "60%", opacity: 0, filter: "blur(6px)" },
  center: (i: number) => ({
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.08, ease: EASE },
  }),
  exit: (i: number) => ({
    y: "-60%",
    opacity: 0,
    filter: "blur(6px)",
    transition: { duration: 0.5, delay: i * 0.05, ease: EASE },
  }),
};

/**
 * Wechselnder Zwei-Zeilen-Text für einen Mockup-Screen.
 * Schriftgröße in cqw (Prozent der Screen-Breite) → skaliert automatisch mit dem Gerät.
 */
function ScreenText({ phrase, className, delay = 0 }: { phrase: Phrase; className: string; delay?: number }) {
  return (
    <div className={`relative h-[2.5em] font-display font-bold leading-[1.25] ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={phrase.lead}
          className="absolute inset-0"
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ delayChildren: delay }}
        >
          {[phrase.lead, phrase.accent].map((line, i) => (
            <motion.span
              key={line}
              custom={i}
              variants={lineVariants}
              className={`block whitespace-nowrap will-change-transform ${i === 0 ? "text-slate-900" : "text-blue-600"}`}
            >
              {line}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function HeroMockup() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % PHRASES.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const phrase = PHRASES[index];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
        <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-blue-400/30 to-indigo-300/30 blur-3xl" />

        {/* Laptop */}
        <div className="rounded-t-2xl border border-slate-200 bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/20">
          <div className="overflow-hidden rounded-lg bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-3 h-3 flex-1 rounded bg-slate-100" />
            </div>
            <div className="@container space-y-3 p-5">
              <div className="h-3 w-1/3 rounded bg-slate-200" />
              <ScreenText phrase={phrase} className="text-[7.5cqw]" />
              <div className="h-2.5 w-2/3 rounded bg-slate-200" />
              <div className="flex gap-2 pt-2">
                <div className="h-7 w-24 rounded-full bg-blue-600" />
                <div className="h-7 w-20 rounded-full border border-slate-300" />
              </div>
              <div className="grid grid-cols-3 gap-2 pt-3">
                <div className="h-14 rounded-lg bg-slate-100" />
                <div className="h-14 rounded-lg bg-blue-50" />
                <div className="h-14 rounded-lg bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto h-3 w-[110%] -translate-x-[4.5%] rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-lg" />

        {/* Smartphone */}
        <div className="absolute -bottom-8 -right-2 w-28 rounded-[1.4rem] border border-slate-200 bg-slate-900 p-1.5 shadow-2xl shadow-slate-900/30 sm:-right-6 sm:w-32">
          <div className="@container space-y-2 overflow-hidden rounded-[1.1rem] bg-white p-3">
            <div className="mx-auto h-1.5 w-10 rounded-full bg-slate-200" />
            {/* Handy wechselt minimal nach dem Laptop – wirkt wie ein Sync zwischen den Geräten */}
            <ScreenText phrase={phrase} className="text-[10.5cqw]" delay={0.12} />
            <div className="h-2 w-full rounded bg-slate-200" />
            <div className="h-5 w-16 rounded-full bg-blue-600" />
            <div className="h-12 rounded-lg bg-slate-100" />
            <div className="h-8 rounded-lg bg-blue-50" />
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
