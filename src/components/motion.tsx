"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------- Reveal: blendet Inhalte beim Hineinscrollen ein ---------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

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

/* ---------- ScrollWords: Text färbt sich Wort für Wort beim Scrollen ein ---------- */

function ScrollWord({ word, range, progress }: { word: string; range: [number, number]; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrollWord key={`${word}-${i}`} word={word} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}

/* ---------- ProcessLine: Fortschrittslinie, die beim Scrollen wächst ---------- */

export function ProcessTimeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute bottom-0 left-[1.4rem] top-0 w-px bg-white/10 md:left-1/2">
        <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-gradient-to-b from-accent via-violet to-accent" />
      </div>
      {children}
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
