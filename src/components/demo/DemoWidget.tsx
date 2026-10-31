"use client";

import { useId, useState, type ChangeEvent, type DragEvent, type FormEvent } from "react";
import type { DemoWidget as WidgetConfig } from "@/lib/demo-sites";

/* Interaktive Kernfunktion jeder Beispiel-Website.
   Alles läuft nur im Browser: Es wird nichts gesendet oder gespeichert. */

const chip =
  "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--d-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--d-surface)]";
const chipOn = "border-[color:var(--d-accent)] bg-[color:var(--d-accent)] text-[color:var(--d-on-accent)]";
const chipOff = "border-[color:var(--d-line)] text-[color:var(--d-ink)] hover:border-[color:var(--d-accent)]";
const primaryBtn =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--d-accent)] px-6 font-semibold text-[color:var(--d-on-accent)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--d-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--d-surface)]";
const input =
  "min-h-12 w-full rounded-xl border border-[color:var(--d-line)] bg-[color:var(--d-bg)] px-4 text-[color:var(--d-ink)] placeholder:text-[color:var(--d-muted)] focus:border-[color:var(--d-accent)] focus:outline-none";
const label = "mb-2 block text-sm font-medium text-[color:var(--d-muted)]";

function Done({ text, onReset }: { text: string; onReset: () => void }) {
  return (
    <div role="status" className="rounded-2xl border border-[color:var(--d-accent)] bg-[color:var(--d-accent)]/10 p-6">
      <p className="font-semibold text-[color:var(--d-ink)]">{text}</p>
      <p className="mt-2 text-sm text-[color:var(--d-muted)]">Dies ist eine Demo, es wurde nichts gesendet.</p>
      <button type="button" onClick={onReset} className="mt-4 text-sm font-medium text-[color:var(--d-accent-text)] underline underline-offset-4">
        Noch einmal ausprobieren
      </button>
    </div>
  );
}

/* ---------- Vorher-Nachher-Slider ---------- */

function BeforeAfter({ config }: { config: Extract<WidgetConfig, { kind: "beforeAfter" }> }) {
  const [pos, setPos] = useState(50);
  const id = useId();
  const room = (tone: string, worn: boolean) => (
    <div className="absolute inset-0" style={{ background: tone }}>
      {/* Wand */}
      <div
        className="absolute inset-x-0 top-0 h-[68%]"
        style={{
          background: worn
            ? `linear-gradient(160deg, ${tone}, #7d7364 70%), repeating-linear-gradient(90deg, transparent 0 46px, rgb(0 0 0 / .06) 46px 48px)`
            : `linear-gradient(180deg, ${tone}, #cfdad6)`,
        }}
      />
      {worn && (
        <>
          <div className="absolute left-[18%] top-[20%] h-16 w-24 rounded-[40%] bg-black/15 blur-md" />
          <div className="absolute right-[22%] top-[34%] h-px w-28 rotate-12 bg-black/30" />
          <div className="absolute right-[26%] top-[38%] h-px w-16 -rotate-6 bg-black/25" />
        </>
      )}
      {/* Fenster */}
      <div className="absolute left-[58%] top-[14%] h-[38%] w-[22%] rounded-sm border-4 border-white/80" style={{ background: worn ? "#b9c3c7" : "#d8ecf6" }}>
        <div className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-white/80" />
      </div>
      {/* Boden und Sofa */}
      <div className="absolute inset-x-0 bottom-0 h-[32%]" style={{ background: worn ? "#6d5a45" : "#b48a5e" }} />
      <div className="absolute bottom-[22%] left-[12%] h-[16%] w-[34%] rounded-t-2xl" style={{ background: worn ? "#5b5148" : "#3d5a6c" }} />
    </div>
  );

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[color:var(--d-line)] select-none">
        {room(config.afterTone, false)}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {room(config.beforeTone, true)}
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-800 shadow-lg">
            ⇆
          </span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">{config.before}</span>
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">{config.after}</span>
      </div>
      <label htmlFor={id} className="sr-only">Vorher-Nachher-Vergleich verschieben</label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="mt-4 w-full accent-[color:var(--d-accent)]"
      />
    </div>
  );
}

/* ---------- Terminbuchung ---------- */

function Booking({ config }: { config: Extract<WidgetConfig, { kind: "booking" }> }) {
  const [service, setService] = useState(0);
  const [staff, setStaff] = useState(0);
  const [day, setDay] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  // Ein paar Zeiten sind „belegt“, damit es echt wirkt – abhängig vom Tag
  const taken = (d: number, i: number) => (d * 3 + i * 2) % 5 === 0;

  if (done)
    return (
      <Done
        text={`${config.confirm} (${config.services[service].name}, ${config.days[day ?? 0]} ${slot} Uhr)`}
        onReset={() => {
          setDone(false);
          setDay(null);
          setSlot(null);
        }}
      />
    );

  return (
    <div className="space-y-6">
      <fieldset>
        <legend className={label}>1. Leistung</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {config.services.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-pressed={service === i}
              onClick={() => setService(i)}
              className={`rounded-2xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--d-accent)] ${
                service === i ? "border-[color:var(--d-accent)] bg-[color:var(--d-accent)]/10" : "border-[color:var(--d-line)] hover:border-[color:var(--d-accent)]"
              }`}
            >
              <span className="block font-semibold text-[color:var(--d-ink)]">{s.name}</span>
              <span className="mt-1 block text-sm text-[color:var(--d-muted)]">{s.detail}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {config.staff && (
        <fieldset>
          <legend className={label}>2. Bei wem?</legend>
          <div className="flex flex-wrap gap-2">
            {config.staff.map((p, i) => (
              <button key={p} type="button" aria-pressed={staff === i} onClick={() => setStaff(i)} className={`${chip} ${staff === i ? chipOn : chipOff}`}>
                {p}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <fieldset>
        <legend className={label}>{config.staff ? "3." : "2."} Tag</legend>
        <div className="flex flex-wrap gap-2">
          {config.days.map((d, i) => (
            <button
              key={d}
              type="button"
              aria-pressed={day === i}
              onClick={() => {
                setDay(i);
                setSlot(null);
              }}
              className={`${chip} min-w-14 ${day === i ? chipOn : chipOff}`}
            >
              {d}
            </button>
          ))}
        </div>
      </fieldset>

      {day !== null && (
        <fieldset>
          <legend className={label}>{config.staff ? "4." : "3."} Uhrzeit</legend>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {config.slots.map((s, i) => {
              const off = taken(day, i);
              return (
                <button
                  key={s}
                  type="button"
                  disabled={off}
                  aria-pressed={slot === s}
                  onClick={() => setSlot(s)}
                  className={`${chip} ${off ? "cursor-not-allowed border-[color:var(--d-line)] text-[color:var(--d-muted)] line-through opacity-50" : slot === s ? chipOn : chipOff}`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      <button type="button" disabled={!slot} onClick={() => setDone(true)} className={primaryBtn}>
        {slot ? `${config.days[day ?? 0]}, ${slot} Uhr buchen` : "Uhrzeit wählen"}
      </button>
    </div>
  );
}

/* ---------- Rechner (Preis oder Wert) ---------- */

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

function Calculator({ config }: { config: Extract<WidgetConfig, { kind: "calculator" }> }) {
  const [value, setValue] = useState(config.initial);
  const [option, setOption] = useState(0);
  const id = useId();
  const total = value * config.rate * config.options[option].factor;
  const spread = config.spread ?? 0;

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor={id} className={label}>{config.inputLabel}</label>
          <span className="font-semibold tabular-nums text-[color:var(--d-ink)]">
            {value} {config.unit}
          </span>
        </div>
        <input
          id={id}
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-[color:var(--d-accent)]"
        />
      </div>
      <fieldset>
        <legend className={label}>{config.optionsLabel}</legend>
        <div className="flex flex-wrap gap-2">
          {config.options.map((o, i) => (
            <button key={o.label} type="button" aria-pressed={option === i} onClick={() => setOption(i)} className={`${chip} ${option === i ? chipOn : chipOff}`}>
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="rounded-2xl bg-[color:var(--d-accent)]/10 p-6" aria-live="polite">
        <p className="text-3xl font-semibold tabular-nums tracking-tight text-[color:var(--d-ink)] sm:text-4xl">
          {spread ? `${euro.format(total * (1 - spread))} – ${euro.format(total * (1 + spread))}` : euro.format(total)}
        </p>
        <p className="mt-1 text-sm text-[color:var(--d-muted)]">{config.resultLabel}</p>
      </div>
      <p className="text-sm text-[color:var(--d-muted)]">{config.note}</p>
    </div>
  );
}

/* ---------- Datei-Upload ---------- */

function Upload({ config }: { config: Extract<WidgetConfig, { kind: "upload" }> }) {
  const [files, setFiles] = useState<string[]>([]);
  const [drag, setDrag] = useState(false);
  const [done, setDone] = useState(false);
  const fileId = useId();

  const take = (list: FileList | null) => list && setFiles((prev) => [...prev, ...Array.from(list).map((f) => f.name)]);
  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDrag(false);
    take(e.dataTransfer.files);
  };
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) return <Done text={config.confirm} onReset={() => { setDone(false); setFiles([]); }} />;

  return (
    <form onSubmit={submit} className="space-y-5">
      <label
        htmlFor={fileId}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={onDrop}
        className={`flex min-h-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-6 text-center transition-colors ${
          drag ? "border-[color:var(--d-accent)] bg-[color:var(--d-accent)]/10" : "border-[color:var(--d-line)] hover:border-[color:var(--d-accent)]"
        }`}
      >
        <span className="text-3xl text-[color:var(--d-accent-text)]" aria-hidden="true">↑</span>
        <span className="font-semibold text-[color:var(--d-ink)]">{config.dropLabel}</span>
        <span className="text-sm text-[color:var(--d-muted)]">{config.hint}</span>
        <input id={fileId} type="file" multiple className="sr-only" onChange={(e: ChangeEvent<HTMLInputElement>) => take(e.target.files)} />
      </label>
      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((f, i) => (
            <li key={`${f}-${i}`} className="flex items-center justify-between rounded-xl bg-[color:var(--d-bg)] px-4 py-3 text-sm text-[color:var(--d-ink)]">
              <span className="truncate">{f}</span>
              <span className="ml-3 shrink-0 text-[color:var(--d-accent-text)]">bereit</span>
            </li>
          ))}
        </ul>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {config.fields.map((f) => (
          <div key={f}>
            <label htmlFor={`${fileId}-${f}`} className={label}>{f}</label>
            <input id={`${fileId}-${f}`} className={input} />
          </div>
        ))}
      </div>
      <button type="submit" disabled={files.length === 0} className={primaryBtn}>
        {files.length ? `${files.length} ${files.length === 1 ? "Datei" : "Dateien"} senden` : "Zuerst Datei auswählen"}
      </button>
    </form>
  );
}

/* ---------- Speisekarte ---------- */

function Menu({ config }: { config: Extract<WidgetConfig, { kind: "menu" }> }) {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Kategorie">
        {config.tabs.map((t, i) => (
          <button key={t.name} type="button" aria-pressed={tab === i} onClick={() => setTab(i)} className={`${chip} ${tab === i ? chipOn : chipOff}`}>
            {t.name}
          </button>
        ))}
      </div>
      <ul className="mt-6 divide-y divide-[color:var(--d-line)]">
        {config.tabs[tab].items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-4 py-4">
            <div className="min-w-0 flex-1">
              <p className="font-[family-name:var(--d-display)] text-lg text-[color:var(--d-ink)]">{item.name}</p>
              <p className="text-sm text-[color:var(--d-muted)]">{item.text}</p>
            </div>
            <span className="shrink-0 font-semibold tabular-nums text-[color:var(--d-ink)]">{item.price} €</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Belegungskalender ---------- */

function Availability({ config }: { config: Extract<WidgetConfig, { kind: "availability" }> }) {
  const [from, setFrom] = useState<number | null>(null);
  const [to, setTo] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

  const blocked = (a: number, b: number) => config.booked.some((d) => d >= a && d < b);
  const pick = (d: number) => {
    if (from === null || to !== null || d <= from) {
      setFrom(d);
      setTo(null);
    } else if (!blocked(from, d)) {
      setTo(d);
    } else {
      setFrom(d);
      setTo(null);
    }
  };
  const nights = from !== null && to !== null ? to - from : 0;

  if (done)
    return (
      <Done
        text={`Anfrage für ${from}.–${to}. ${config.month.split(" ")[0]} (${nights} Nächte) ist eingegangen.`}
        onReset={() => { setDone(false); setFrom(null); setTo(null); }}
      />
    );

  return (
    <div>
      <p className="mb-4 font-[family-name:var(--d-display)] text-xl text-[color:var(--d-ink)]">{config.month}</p>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {weekdays.map((w) => (
          <span key={w} className="py-2 text-xs font-medium text-[color:var(--d-muted)]">{w}</span>
        ))}
        {Array.from({ length: config.startWeekday }).map((_, i) => <span key={`e${i}`} />)}
        {Array.from({ length: config.days }, (_, i) => i + 1).map((d) => {
          const isBooked = config.booked.includes(d);
          const inRange = from !== null && to !== null && d > from && d < to;
          const isEdge = d === from || d === to;
          return (
            <button
              key={d}
              type="button"
              disabled={isBooked}
              onClick={() => pick(d)}
              aria-label={`${d}. ${config.month}${isBooked ? ", ausgebucht" : ""}`}
              aria-pressed={isEdge}
              className={`aspect-square min-h-10 rounded-lg tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--d-accent)] ${
                isBooked
                  ? "cursor-not-allowed text-[color:var(--d-muted)] line-through opacity-40"
                  : isEdge
                    ? "bg-[color:var(--d-accent)] font-semibold text-[color:var(--d-on-accent)]"
                    : inRange
                      ? "bg-[color:var(--d-accent)]/15 text-[color:var(--d-ink)]"
                      : "text-[color:var(--d-ink)] hover:bg-[color:var(--d-accent)]/10"
              }`}
            >
              {d}
            </button>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[color:var(--d-bg)] p-4">
        <p className="text-sm text-[color:var(--d-muted)]" aria-live="polite">
          {nights > 0 ? (
            <>
              <span className="font-semibold text-[color:var(--d-ink)]">{nights} Nächte · {euro.format(nights * config.pricePerNight)}</span> im Doppelzimmer mit Frühstück
            </>
          ) : from !== null ? (
            "Jetzt Abreisetag wählen"
          ) : (
            "Anreisetag wählen"
          )}
        </p>
        <button type="button" disabled={nights === 0} onClick={() => setDone(true)} className={primaryBtn}>
          Anfragen
        </button>
      </div>
    </div>
  );
}

/* ---------- Kursplan ---------- */

function Schedule({ config }: { config: Extract<WidgetConfig, { kind: "schedule" }> }) {
  const [day, setDay] = useState(0);
  const [booked, setBooked] = useState<string[]>([]);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Wochentag">
        {config.days.map((d, i) => (
          <button key={d.name} type="button" aria-pressed={day === i} onClick={() => setDay(i)} className={`${chip} min-w-14 ${day === i ? chipOn : chipOff}`}>
            {d.name}
          </button>
        ))}
      </div>
      <ul className="mt-6 space-y-2">
        {config.days[day].classes.map((c) => {
          const key = `${day}-${c.time}`;
          const mine = booked.includes(key);
          const spots = c.spots - (mine ? 1 : 0);
          return (
            <li key={key} className="flex items-center gap-4 rounded-2xl border border-[color:var(--d-line)] p-4">
              <span className="w-14 shrink-0 font-semibold tabular-nums text-[color:var(--d-ink)]">{c.time}</span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[color:var(--d-ink)]">{c.name}</p>
                <p className="text-sm text-[color:var(--d-muted)]">{c.spots === 0 ? "Ausgebucht, Warteliste offen" : `${spots} ${spots === 1 ? "Platz" : "Plätze"} frei`}</p>
              </div>
              <button
                type="button"
                disabled={c.spots === 0}
                onClick={() => setBooked((b) => (mine ? b.filter((k) => k !== key) : [...b, key]))}
                className={`${chip} ${mine ? chipOn : chipOff} disabled:cursor-not-allowed disabled:opacity-40`}
              >
                {mine ? "Gebucht ✓" : "Buchen"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------- Reservieren und abholen ---------- */

function Reserve({ config }: { config: Extract<WidgetConfig, { kind: "reserve" }> }) {
  const [picked, setPicked] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  if (done) return <Done text={`${picked.length} ${picked.length === 1 ? "Titel liegt" : "Titel liegen"} morgen ab 10 Uhr für Sie bereit.`} onReset={() => { setDone(false); setPicked([]); }} />;
  return (
    <div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {config.products.map((p) => {
          const on = picked.includes(p.name);
          return (
            <li key={p.name} className="flex flex-col rounded-2xl border border-[color:var(--d-line)] p-4">
              <div className="mb-4 flex aspect-[3/2] items-end rounded-xl bg-[color:var(--d-accent)]/10 p-3">
                <span className="font-[family-name:var(--d-display)] text-sm leading-tight text-[color:var(--d-ink)]">{p.name}</span>
              </div>
              <p className="font-semibold text-[color:var(--d-ink)]">{p.name}</p>
              <p className="text-sm text-[color:var(--d-muted)]">{p.text} · {p.price}</p>
              <p className="mt-1 text-xs text-[color:var(--d-muted)]">{p.stock > 0 ? `${p.stock} im Laden` : "Über Nacht bestellbar"}</p>
              <button
                type="button"
                aria-pressed={on}
                onClick={() => setPicked((l) => (on ? l.filter((n) => n !== p.name) : [...l, p.name]))}
                className={`${chip} mt-4 ${on ? chipOn : chipOff}`}
              >
                {on ? "Reserviert ✓" : p.stock > 0 ? "Reservieren" : "Bestellen"}
              </button>
            </li>
          );
        })}
      </ul>
      <button type="button" disabled={picked.length === 0} onClick={() => setDone(true)} className={`${primaryBtn} mt-6`}>
        {picked.length ? `${picked.length} zum Abholen vormerken` : "Titel auswählen"}
      </button>
    </div>
  );
}

/* ---------- Rückruf ---------- */

function Callback({ config }: { config: Extract<WidgetConfig, { kind: "callback" }> }) {
  const [area, setArea] = useState(0);
  const [done, setDone] = useState(false);
  const id = useId();
  if (done) return <Done text={config.confirm} onReset={() => setDone(false)} />;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="space-y-5"
    >
      <fieldset>
        <legend className={label}>Rechtsgebiet</legend>
        <div className="flex flex-wrap gap-2">
          {config.areas.map((a, i) => (
            <button key={a} type="button" aria-pressed={area === i} onClick={() => setArea(i)} className={`${chip} ${area === i ? chipOn : chipOff}`}>
              {a}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={label}>Name</label>
          <input id={`${id}-name`} required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor={`${id}-tel`} className={label}>Telefon</label>
          <input id={`${id}-tel`} required type="tel" autoComplete="tel" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-msg`} className={label}>Worum geht es? (zwei, drei Sätze genügen)</label>
        <textarea id={`${id}-msg`} rows={3} className={`${input} py-3`} />
      </div>
      <button type="submit" className={primaryBtn}>Rückruf anfordern</button>
    </form>
  );
}


/* ---------- Portfolio mit Filter ---------- */

function Gallery({ config }: { config: Extract<WidgetConfig, { kind: "gallery" }> }) {
  const [filter, setFilter] = useState(config.filters[0]);
  const items = filter === config.filters[0] ? config.items : config.items.filter((i) => i.category === filter);
  const ratio = { tall: "aspect-[3/4]", wide: "aspect-[4/3]", square: "aspect-square" } as const;
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Portfolio filtern">
        {config.filters.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)} className={`${chip} ${filter === f ? chipOn : chipOff}`}>
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{items.length} Bilder</p>
      <ul className="mt-8 columns-2 gap-4 md:columns-3 [&>li]:mb-4">
        {items.map((item) => (
          <li key={item.title} className="break-inside-avoid">
            <figure
              className={`group relative overflow-hidden rounded-3xl ${ratio[item.shape]} transition-[opacity,translate] duration-500 starting:translate-y-2 starting:opacity-0 motion-reduce:transition-none`}
              style={{ background: `radial-gradient(120% 90% at 25% 20%, color-mix(in oklab, ${item.tone} 50%, white), ${item.tone} 65%, color-mix(in oklab, ${item.tone} 80%, black))` }}
            >
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 pt-10 text-sm text-white">
                <span className="block font-semibold">{item.title}</span>
                <span className="text-white/80">{item.category}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Online-Services einer Praxis ---------- */

function OnlineServices({ config }: { config: Extract<WidgetConfig, { kind: "onlineServices" }> }) {
  const [active, setActive] = useState(0);
  const [done, setDone] = useState<string | null>(null);
  const id = useId();
  const service = config.services[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="group" aria-label="Service wählen">
        {config.services.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-pressed={active === i}
            onClick={() => {
              setActive(i);
              setDone(null);
            }}
            className={`rounded-2xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--d-accent)] ${
              active === i ? "border-[color:var(--d-accent)] bg-[color:var(--d-accent)]/10" : "border-[color:var(--d-line)] hover:border-[color:var(--d-accent)]"
            }`}
          >
            <span className="block font-semibold text-[color:var(--d-ink)]">{s.name}</span>
            <span className="mt-1 block text-sm text-[color:var(--d-muted)]">{s.text}</span>
          </button>
        ))}
      </div>
      {done ? (
        <Done text={done} onReset={() => setDone(null)} />
      ) : (
        <form
          key={service.name}
          onSubmit={(e) => {
            e.preventDefault();
            setDone(service.confirm);
          }}
          className="space-y-4"
        >
          <p className="font-[family-name:var(--d-display)] text-xl font-semibold text-[color:var(--d-ink)]">{service.name} anfragen</p>
          {service.fields.map((f) => (
            <div key={f}>
              <label htmlFor={`${id}-${service.name}-${f}`} className={label}>{f}</label>
              <input id={`${id}-${service.name}-${f}`} required className={input} />
            </div>
          ))}
          <p className="text-sm text-[color:var(--d-muted)]">{config.note}</p>
          <button type="submit" className={primaryBtn}>{service.name} anfragen</button>
        </form>
      )}
    </div>
  );
}

export default function DemoWidget({ config }: { config: WidgetConfig }) {
  switch (config.kind) {
    case "beforeAfter":
      return <BeforeAfter config={config} />;
    case "booking":
      return <Booking config={config} />;
    case "calculator":
      return <Calculator config={config} />;
    case "upload":
      return <Upload config={config} />;
    case "menu":
      return <Menu config={config} />;
    case "availability":
      return <Availability config={config} />;
    case "schedule":
      return <Schedule config={config} />;
    case "reserve":
      return <Reserve config={config} />;
    case "callback":
      return <Callback config={config} />;
    case "gallery":
      return <Gallery config={config} />;
    case "onlineServices":
      return <OnlineServices config={config} />;
  }
}
