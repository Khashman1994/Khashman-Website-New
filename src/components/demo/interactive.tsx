"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
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
      <div className="absolute bottom-4 right-4 flex gap-2 sm:inset-x-0 sm:right-auto sm:justify-center">
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

/* ---------- Haus-Animation neu abspielen ---------- */

export function Replay({ children, label }: { children: ReactNode; label: string }) {
  const [run, setRun] = useState(0);
  return (
    <div className="relative">
      <div key={run}>{children}</div>
      <button
        type="button"
        onClick={() => setRun((r) => r + 1)}
        className={`absolute bottom-2 right-2 inline-flex min-h-10 items-center gap-2 rounded-full border border-[color:var(--d-line)] bg-[color:var(--d-bg)]/90 px-4 text-sm font-medium text-[color:var(--d-ink)] shadow-sm transition-colors hover:border-[color:var(--d-accent)] ${focus}`}
      >
        <span aria-hidden="true">↻</span> {label}
      </button>
    </div>
  );
}

/* ---------- Objektsuche mit Filter ---------- */

type Listing = {
  title: string;
  place: string;
  deal: "Kaufen" | "Mieten";
  type: "Wohnung" | "Haus" | "Gewerbe";
  price: string;
  priceValue: number;
  rooms: number;
  area: number;
  tone: string;
  tag?: string;
};

export function PropertySearch({ listings, places }: { listings: Listing[]; places: string[] }) {
  const [deal, setDeal] = useState<"Kaufen" | "Mieten">("Kaufen");
  const [place, setPlace] = useState(places[0]);
  const [type, setType] = useState("Alle Arten");
  const [rooms, setRooms] = useState(0);
  const id = useId();

  const result = listings.filter(
    (l) =>
      l.deal === deal &&
      (place === places[0] || l.place === place) &&
      (type === "Alle Arten" || l.type === type) &&
      l.rooms >= rooms,
  );
  const select =
    "min-h-12 w-full rounded-xl border border-[color:var(--d-line)] bg-[color:var(--d-bg)] px-3 text-[color:var(--d-ink)] focus:border-[color:var(--d-accent)] focus:outline-none";
  const lbl = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[color:var(--d-muted)]";

  return (
    <div>
      <div className="rounded-3xl border border-[color:var(--d-line)] bg-[color:var(--d-bg)] p-5 shadow-xl sm:p-6">
        <div role="group" aria-label="Kaufen oder Mieten" className="mb-5 inline-flex rounded-full border border-[color:var(--d-line)] p-1">
          {(["Kaufen", "Mieten"] as const).map((d) => (
            <button
              key={d}
              type="button"
              aria-pressed={deal === d}
              onClick={() => setDeal(d)}
              className={`min-h-10 rounded-full px-5 text-sm font-semibold transition-colors ${focus} ${
                deal === d ? "bg-[color:var(--d-accent)] text-[color:var(--d-on-accent)]" : "text-[color:var(--d-ink)]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor={`${id}-ort`} className={lbl}>Ort</label>
            <select id={`${id}-ort`} value={place} onChange={(e) => setPlace(e.target.value)} className={select}>
              {places.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor={`${id}-art`} className={lbl}>Objektart</label>
            <select id={`${id}-art`} value={type} onChange={(e) => setType(e.target.value)} className={select}>
              {["Alle Arten", "Wohnung", "Haus", "Gewerbe"].map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor={`${id}-zi`} className={lbl}>Zimmer ab</label>
            <select id={`${id}-zi`} value={rooms} onChange={(e) => setRooms(Number(e.target.value))} className={select}>
              {[0, 2, 3, 4, 5].map((r) => <option key={r} value={r}>{r === 0 ? "Egal" : `${r}+`}</option>)}
            </select>
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-[color:var(--d-muted)]" aria-live="polite">
        {result.length} {result.length === 1 ? "Objekt" : "Objekte"} zum {deal === "Kaufen" ? "Kauf" : "Mieten"}
      </p>
      {result.length === 0 ? (
        <div className="mt-4 rounded-3xl border border-dashed border-[color:var(--d-line)] p-8 text-center">
          <p className="font-semibold text-[color:var(--d-ink)]">Gerade nichts Passendes online.</p>
          <p className="mt-1 text-sm text-[color:var(--d-muted)]">Mit einem Suchauftrag hören Sie zuerst von neuen Objekten.</p>
          <button type="button" onClick={() => { setPlace(places[0]); setType("Alle Arten"); setRooms(0); }} className={`mt-4 min-h-11 rounded-full border border-[color:var(--d-line)] px-5 text-sm font-semibold text-[color:var(--d-ink)] hover:border-[color:var(--d-accent)] ${focus}`}>
            Filter zurücksetzen
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {result.map((l) => (
            <li key={l.title} className="group overflow-hidden rounded-3xl border border-[color:var(--d-line)] bg-[color:var(--d-bg)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none starting:opacity-0">
              <div className="relative">
                <DemoPhoto label={l.title} tone={l.tone} icon="home" className="aspect-[4/3]" />
                {l.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-[color:var(--d-accent)] px-3 py-1 text-xs font-semibold text-[color:var(--d-on-accent)]">{l.tag}</span>
                )}
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--d-accent-text)]">{l.place} · {l.type}</p>
                <h3 className="mt-1 font-[family-name:var(--d-display)] text-lg text-[color:var(--d-ink)]">{l.title}</h3>
                <p className="mt-3 flex flex-wrap gap-x-4 text-sm tabular-nums text-[color:var(--d-muted)]">
                  <span>{l.rooms} Zimmer</span>
                  <span>{l.area} m²</span>
                </p>
                <p className="mt-3 text-xl font-semibold tabular-nums text-[color:var(--d-ink)]">{l.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
