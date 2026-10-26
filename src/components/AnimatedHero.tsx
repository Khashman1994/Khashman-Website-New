"use client";

import { MotionConfig, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import HeroCanvas from "@/components/three/HeroCanvas";

/* ---------- Timing ---------- */

// Die Einblend-Animationen laufen als reines CSS (siehe .hero-word / .hero-fade in globals.css):
// Sie starten mit dem ersten Paint, ohne auf das JavaScript zu warten → Headline sofort sichtbar.
const HEADLINE_DELAY = 0.1;
const WORD_STAGGER = 0.07;
const WORD_DURATION = 1.1;

type Word = { text: string; serif?: boolean };
type HeadlineLine = Word[];

const HEADLINE: HeadlineLine[] = [
  [{ text: "Webseiten," }, { text: "die" }],
  [{ text: "Eindruck", serif: true }],
  [{ text: "hinterlassen." }],
];

const TOTAL_WORDS = HEADLINE.reduce((sum, line) => sum + line.length, 0);
// Subtext startet, kurz bevor das letzte Wort zur Ruhe kommt
const REVEAL_END = HEADLINE_DELAY + (TOTAL_WORDS - 1) * WORD_STAGGER + WORD_DURATION * 0.75;

function delayStyle(seconds: number) {
  return { animationDelay: `${seconds}s` };
}

/* ---------- Masked Headline ---------- */

function MaskedHeadline() {
  let wordIndex = 0;

  return (
    <h1 className="text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
      {HEADLINE.map((line) => (
        // pb/-mb geben Unterlängen (g, ä, ,) Platz, ohne den Zeilenabstand zu verändern
        <span key={line.map((w) => w.text).join(" ")} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
          {line.map((word, i) => {
            const delay = HEADLINE_DELAY + wordIndex++ * WORD_STAGGER;
            return (
              <span key={word.text}>
                <span
                  className={`hero-word inline-block ${
                    word.serif ? "text-gradient pr-[0.08em] font-serif font-normal italic tracking-[-0.02em]" : ""
                  }`}
                  style={{ ...delayStyle(delay), animationDuration: `${WORD_DURATION}s` }}
                >
                  {word.text}
                </span>
                {i < line.length - 1 && " "}
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

const MAGNET_STRENGTH = 0.3;
const MAGNET_SPRING = { stiffness: 220, damping: 18, mass: 0.6 };

const buttonVariants = {
  primary: {
    base: "bg-white text-ink-950 hover:text-white",
    sweep: "bg-accent",
  },
  outline: {
    base: "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white hover:text-ink-950",
    sweep: "bg-white",
  },
} as const;

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MagneticButton({ href, variant, children }: MagneticButtonProps) {
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
      className={`group relative isolate inline-flex whitespace-nowrap items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 font-medium transition-[color,border-color] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${styles.base}`}
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
  const section = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  // Beim Wegscrollen: Text fährt nach oben weg, 3D-Szene zoomt leicht heran und blendet aus
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    // reducedMotion="user": Bei "Bewegung reduzieren" im OS entfallen alle Transform-Animationen
    <MotionConfig reducedMotion="user">
      <section ref={section} className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 md:pb-24">
        {/* Raster im Hintergrund, zu den Rändern hin ausgeblendet */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        />

        <motion.div
          // Unter lg nur die obere Hälfte, damit die Headline frei bleibt
          className="absolute inset-x-0 top-0 h-[58%] lg:inset-y-0 lg:left-[30%] lg:h-auto"
          style={{ scale: sceneScale, opacity: sceneOpacity }}
        >
          <HeroCanvas />
        </motion.div>

        {/* Unten abdunkeln, damit der Text immer lesbar bleibt */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />

        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative mx-auto w-full max-w-6xl px-6">
          <span className="hero-fade inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Webdesign aus Aachen · Verfügbar für neue Projekte
          </span>

          <div className="mt-8">
            <MaskedHeadline />
          </div>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="hero-fade max-w-md text-lg leading-relaxed text-white/60" style={delayStyle(REVEAL_END)}>
              Moderne, blitzschnelle und conversion-starke Webseiten für KMU &amp; Gründer – persönlich umgesetzt, zum
              Festpreis.
            </p>

            <div className="hero-fade flex flex-col gap-3 sm:flex-row" style={delayStyle(REVEAL_END + 0.15)}>
              <MagneticButton href="#kontakt" variant="primary">
                Kostenloses Erstgespräch
              </MagneticButton>
              <MagneticButton href="#preise" variant="outline">
                Pakete ansehen
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Scroll-Hinweis */}
        <div
          aria-hidden="true"
          className="hero-fade absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
          style={delayStyle(REVEAL_END + 0.6)}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
            <span className="h-2 w-px animate-bounce bg-white/70" />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
