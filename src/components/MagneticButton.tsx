"use client";

import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  variant: "primary" | "outline";
  children: ReactNode;
};

const MAGNET_STRENGTH = 0.3;

const buttonVariants = {
  primary: {
    base: "bg-fg text-ink-950 hover:text-white",
    sweep: "bg-accent",
  },
  outline: {
    base: "border border-fg/20 bg-fg/5 text-fg backdrop-blur hover:border-fg hover:text-ink-950",
    sweep: "bg-fg",
  },
} as const;

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// Der Button folgt der Maus leicht. Bewegung über die CSS-Eigenschaft "translate" mit
// Übergang – das ergibt das federnde Nachziehen ohne Animations-Bibliothek und ohne Re-Render.
export default function MagneticButton({ href, variant, children }: MagneticButtonProps) {
  const styles = buttonVariants[variant];

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) * MAGNET_STRENGTH;
    const y = (event.clientY - (rect.top + rect.height / 2)) * MAGNET_STRENGTH;
    el.style.translate = `${x}px ${y}px`;
  }

  function handleMouseLeave(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.style.translate = "";
  }

  return (
    <a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-7 py-4 font-medium transition-[color,border-color,translate,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${styles.base}`}
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
    </a>
  );
}
