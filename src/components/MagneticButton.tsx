"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

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

export default function MagneticButton({ href, variant, children }: MagneticButtonProps) {
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
      className={`group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-7 py-4 font-medium transition-[color,border-color] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${styles.base}`}
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
