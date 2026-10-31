"use client";

import { useEffect, useId, useState } from "react";
import { DemoPhoto } from "@/components/demo/ui";

/* Kleine interaktive Bausteine für die besonderen Layouts. */

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--d-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--d-bg)]";

/* ---------- Bild-Slider über die ganze Breite ---------- */

export function HeroSlider({ slides }: { slides: { label: string; caption: string; tone: string }[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <section
      aria-roledescription="Karussell"
      aria-label="Eindrücke aus der Praxis"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-[52vh] min-h-72 max-h-[560px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            aria-roledescription="Folie"
            aria-label={`${i + 1} von ${count}: ${slide.caption}`}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <DemoPhoto label={slide.label} tone={slide.tone} className="h-full w-full" />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-14 pt-24 sm:px-6">
          <p className="mx-auto max-w-6xl text-lg font-medium text-white sm:text-2xl">{slides[index].caption}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Vorheriges Bild"
        className={`absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl text-neutral-800 shadow transition-colors hover:bg-white ${focus}`}
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Nächstes Bild"
        className={`absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl text-neutral-800 shadow transition-colors hover:bg-white ${focus}`}
      >
        ›
      </button>
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Bild ${i + 1}: ${slide.label}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-2.5 bg-white/60 hover:bg-white"} ${focus}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ---------- Sprechzeiten mit heutiger Zeile hervorgehoben ---------- */

const WEEKDAYS = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

export function HoursTable({
  headers,
  rows,
  tone = "light",
}: {
  headers: string[];
  rows: { day: string; cols: string[] }[];
  tone?: "light" | "onAccent";
}) {
  // Erst im Browser bestimmen, damit Server und Client gleich rendern
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(WEEKDAYS[new Date().getDay()]), []);

  const onAccent = tone === "onAccent";
  return (
    <table className="w-full text-left text-sm tabular-nums">
      <thead>
        <tr className={onAccent ? "text-[color:var(--d-on-accent)]/80" : "text-[color:var(--d-muted)]"}>
          {headers.map((h, i) => (
            <th key={h} scope="col" className={`pb-2 font-medium ${i === 0 ? "" : "text-right"}`}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const isToday = row.day === today;
          return (
            <tr
              key={row.day}
              className={
                isToday
                  ? onAccent
                    ? "bg-[color:var(--d-on-accent)]/15 font-semibold"
                    : "bg-[color:var(--d-accent)]/10 font-semibold"
                  : ""
              }
            >
              <th scope="row" className="rounded-l-lg py-1.5 pl-2 font-medium">
                {row.day}
                {isToday && <span className="ml-2 text-xs font-semibold">· heute</span>}
              </th>
              {row.cols.map((c, i) => (
                <td key={i} className={`py-1.5 pr-2 text-right ${i === row.cols.length - 1 ? "rounded-r-lg" : ""}`}>
                  {c}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

/* ---------- Reiter, z. B. für Fachbereiche ---------- */

export function TabbedList({ tabs }: { tabs: { name: string; items: string[] }[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  return (
    <div className="grid gap-6 md:grid-cols-[16rem_1fr]">
      <div role="tablist" aria-label="Fachbereiche" className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible">
        {tabs.map((t, i) => (
          <button
            key={t.name}
            id={`${id}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${id}-panel`}
            onClick={() => setActive(i)}
            className={`min-h-11 shrink-0 rounded-xl px-4 py-2 text-left text-sm font-semibold transition-colors ${focus} ${
              active === i
                ? "bg-[color:var(--d-accent)] text-[color:var(--d-on-accent)]"
                : "text-[color:var(--d-ink)] hover:bg-[color:var(--d-accent)]/10"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        className="rounded-2xl border border-[color:var(--d-line)] bg-[color:var(--d-bg)] p-6"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {tabs[active].items.map((item) => (
            <li key={item} className="flex gap-3 text-[color:var(--d-ink)]">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--d-accent)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------- Schwebende Kontaktknöpfe am Bildschirmrand ---------- */

const CONTACT = [
  { key: "whatsapp", label: "WhatsApp", path: "M4 20l1.3-3.9A8 8 0 1 1 8 19l-4 1z M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .8a5 5 0 0 1-2.6-2.6l.8-1-1-2L9 9z" },
  { key: "phone", label: "Anrufen", path: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" },
  { key: "mail", label: "E-Mail", path: "M3 6h18v12H3zM3 7l9 6 9-6" },
] as const;

export function FloatingContact({ contactLine }: { contactLine: string }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex flex-col items-end gap-2">
      {open && (
        <div role="status" className="mb-1 max-w-64 rounded-2xl border border-[color:var(--d-line)] bg-[color:var(--d-bg)] p-4 text-sm text-[color:var(--d-ink)] shadow-xl">
          <p className="font-semibold">Demo: hier öffnet sich {open}.</p>
          <p className="mt-1 text-[color:var(--d-muted)]">{contactLine}</p>
        </div>
      )}
      {CONTACT.map((c) => (
        <button
          key={c.key}
          type="button"
          onClick={() => setOpen((o) => (o === c.label ? null : c.label))}
          aria-label={c.label}
          aria-pressed={open === c.label}
          title={c.label}
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--d-accent)] text-[color:var(--d-on-accent)] shadow-lg transition-transform hover:-translate-x-1 motion-reduce:transition-none ${focus}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
            <path d={c.path} />
          </svg>
        </button>
      ))}
    </div>
  );
}
