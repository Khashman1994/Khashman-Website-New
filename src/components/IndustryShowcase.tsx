"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { Reveal } from "@/components/scroll-effects";
import { PREFILL_EVENT, PREFILL_STORAGE_KEY } from "@/lib/prefill";

/* ============================================================
   Branchen-Konzepte
   Zeigt Besuchern aus 14 Branchen, wie eine moderne Website für
   ihren Bereich aussehen kann. Filterbar, Bento-Grid, CTA je Karte.
   Die Mockups sind gezeichnete Platzhalter – sobald es echte
   Screenshots gibt, einfach `image` am Eintrag setzen.
   ============================================================ */

/* ---------- Ereignis: Nachricht im Kontaktformular vorbefüllen ---------- */

function sendPrefill(text: string) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: text }));
  try {
    sessionStorage.setItem(PREFILL_STORAGE_KEY, text);
  } catch {
    // Speicher nicht verfügbar (z. B. privates Fenster): Event reicht auf der Startseite
  }
}

/* ---------- Typen ---------- */

type CategoryId = "handwerk" | "gesundheit" | "beratung" | "gastro" | "lifestyle" | "handel" | "kreativ";

type Industry = {
  id: string;
  category: CategoryId;
  title: string;
  /** Kurzer Satz unter dem Titel: für wen das Konzept gedacht ist */
  audience: string;
  features: [string, string, string];
  /** Inhalt des gezeichneten Mockups */
  mock: {
    domain: string;
    headline: string;
    /** Das eine Element, an dem man die Branche sofort erkennt */
    signature: string;
  };
  /** Farbton des Mockups (HSL-Hue), damit jede Branche eigenständig wirkt */
  hue: number;
  /** Große Karte im Bento-Grid (nur in der Ansicht „Alle“) */
  featured?: boolean;
  /** Optional: echter Screenshot unter /public, z. B. "/konzepte/handwerk.jpg" */
  image?: string;
};

/* ---------- Dummy-Daten ---------- */

const CATEGORIES: { id: CategoryId | "alle"; label: string }[] = [
  { id: "alle", label: "Alle" },
  { id: "handwerk", label: "Handwerk" },
  { id: "gesundheit", label: "Praxen & Gesundheit" },
  { id: "beratung", label: "Kanzleien & Beratung" },
  { id: "gastro", label: "Gastro & Hotel" },
  { id: "lifestyle", label: "Beauty & Fitness" },
  { id: "handel", label: "Handel & Immobilien" },
  { id: "kreativ", label: "Fotografie & Kreative" },
];

const INDUSTRIES: Industry[] = [
  {
    id: "handwerk",
    category: "handwerk",
    title: "Handwerksbetrieb",
    audience: "Maler, Elektriker, Sanitär, Dachdecker",
    features: ["Vorher-Nachher-Slider für Referenzen", "Notdienst-Button mit Direktanruf", "Anfrage mit Foto-Upload"],
    mock: { domain: "malerbetrieb-schmitz.de", headline: "Ihr Malermeister in Aachen", signature: "Notdienst 24/7" },
    hue: 28,
    featured: true,
  },
  {
    id: "kfz",
    category: "handwerk",
    title: "Kfz-Werkstatt",
    audience: "Freie Werkstätten, Reifen- und Lackservice",
    features: ["Online-Terminbuchung für Inspektion & TÜV", "Festpreis-Übersicht pro Leistung", "Google-Bewertungen eingebunden"],
    mock: { domain: "autoservice-brand.de", headline: "Inspektion zum Festpreis", signature: "Termin buchen" },
    hue: 210,
  },
  {
    id: "reinigung",
    category: "handwerk",
    title: "Gebäudereinigung",
    audience: "Reinigung, Hausmeister- und Gartenservice",
    features: ["Angebotsrechner nach Quadratmetern", "Leistungspakete für Gewerbe & Privat", "Einzugsgebiet auf der Karte"],
    mock: { domain: "glanzwerk-aachen.de", headline: "Sauber. Pünktlich. Zuverlässig.", signature: "Preis berechnen" },
    hue: 175,
  },
  {
    id: "arztpraxis",
    category: "gesundheit",
    title: "Hausarztpraxis",
    audience: "Allgemeinmedizin, Innere Medizin, Fachärzte",
    features: ["Online-Services für Rezept und Überweisung", "Sprechzeiten-Karte mit „heute“-Markierung", "Hinweisleiste für Urlaub und Vertretung"],
    mock: { domain: "praxis-dr-weber.de", headline: "Ihre Hausarztpraxis in Burtscheid", signature: "Rezept anfragen" },
    hue: 195,
    featured: true,
  },
  {
    id: "physio",
    category: "gesundheit",
    title: "Physiotherapie",
    audience: "Physio, Ergotherapie, Osteopathie",
    features: ["Kurs- und Behandlungsübersicht", "Rezept-Anfrage per Formular", "Team-Vorstellung mit Schwerpunkten"],
    mock: { domain: "physio-am-markt.de", headline: "Wieder schmerzfrei bewegen", signature: "Rezept einreichen" },
    hue: 150,
  },
  {
    id: "steuerberater",
    category: "beratung",
    title: "Steuerberatung",
    audience: "Steuerkanzleien, Lohnbüros",
    features: ["Sicherer Dokumenten-Upload", "Mandanten-Login und DATEV-Hinweise", "Fristen-Kalender für Mandanten"],
    mock: { domain: "stb-hoffmann.de", headline: "Steuern klar geregelt", signature: "Unterlagen hochladen" },
    hue: 222,
    featured: true,
  },
  {
    id: "kanzlei",
    category: "beratung",
    title: "Rechtsanwaltskanzlei",
    audience: "Einzelanwälte und Sozietäten",
    features: ["Rechtsgebiete mit eigenen Unterseiten", "Ersteinschätzung per Rückruf-Formular", "Impressum nach BRAO-Vorgaben"],
    mock: { domain: "kanzlei-becker-partner.de", headline: "Arbeitsrecht. Familienrecht.", signature: "Rückruf anfordern" },
    hue: 240,
  },
  {
    id: "coaching",
    category: "beratung",
    title: "Coaching & Beratung",
    audience: "Business-Coaches, Unternehmensberater",
    features: ["Kalender-Buchung fürs Erstgespräch", "Fallstudien mit Ergebnissen", "Newsletter-Anmeldung"],
    mock: { domain: "klarheit-coaching.de", headline: "Führen ohne Dauerstress", signature: "Erstgespräch buchen" },
    hue: 265,
  },
  {
    id: "restaurant",
    category: "gastro",
    title: "Restaurant & Café",
    audience: "Restaurants, Cafés, Bistros",
    features: ["Tischreservierung online", "Speisekarte ohne PDF, mobil lesbar", "Mittagstisch pflegt das Team selbst"],
    mock: { domain: "trattoria-dom.de", headline: "Pasta wie in Bologna", signature: "Tisch reservieren" },
    hue: 12,
    featured: true,
  },
  {
    id: "hotel",
    category: "gastro",
    title: "Hotel & Ferienwohnung",
    audience: "Pensionen, Hotels, Ferienwohnungen",
    features: ["Direktbuchung ohne Portalgebühr", "Zimmer-Galerie mit Belegungskalender", "Ausflugstipps aus der Region"],
    mock: { domain: "eifel-auszeit.de", headline: "Ankommen in der Eifel", signature: "Verfügbarkeit prüfen" },
    hue: 95,
  },
  {
    id: "friseur",
    category: "lifestyle",
    title: "Friseur & Kosmetik",
    audience: "Friseursalons, Kosmetik- und Nagelstudios",
    features: ["Online-Termine mit Mitarbeiterwahl", "Preisliste nach Behandlung", "Instagram-Galerie eingebunden"],
    mock: { domain: "salon-lina.de", headline: "Schnitt, Farbe, Pflege", signature: "Termin wählen" },
    hue: 335,
  },
  {
    id: "fitness",
    category: "lifestyle",
    title: "Fitness & Yoga",
    audience: "Studios, Personal Trainer, Yogaschulen",
    features: ["Live-Kursplan mit freien Plätzen", "Probetraining in zwei Klicks", "Mitgliedschaften im Vergleich"],
    mock: { domain: "studio-flow.de", headline: "Dein Kursplan für diese Woche", signature: "Probetraining" },
    hue: 85,
  },
  {
    id: "einzelhandel",
    category: "handel",
    title: "Einzelhandel & Shop",
    audience: "Fachgeschäfte, Boutiquen, Hofläden",
    features: ["Kleiner Online-Shop mit Click & Collect", "Öffnungszeiten und Anfahrt prominent", "Aktionen auf der Startseite"],
    mock: { domain: "buchladen-pontstrasse.de", headline: "Neu im Laden diese Woche", signature: "Reservieren & abholen" },
    hue: 45,
  },
  {
    id: "immobilien",
    category: "handel",
    title: "Immobilienmakler",
    audience: "Makler, Hausverwaltungen",
    features: ["Animiertes Hochhaus, das sich im Hero aufbaut", "Objektsuche mit Filter nach Ort und Zimmern", "Online-Wertermittlung als Lead-Formular"],
    mock: { domain: "immo-lindner.de", headline: "Ihr neues Zuhause in Aachen", signature: "Objekte entdecken" },
    hue: 38,
    featured: true,
  },
  {
    id: "zahnarzt",
    category: "gesundheit",
    title: "Zahnarztpraxis",
    audience: "Zahnärzte, Kieferorthopäden, Oralchirurgen",
    features: ["Bild-Slider durch die Praxisräume", "Termin-Knopf immer sichtbar", "Sprechzeiten mit „heute“-Markierung"],
    mock: { domain: "zahnarzt-behrendt.de", headline: "Ihr gesundes Lachen, ein Leben lang", signature: "Termine online buchen" },
    hue: 95,
  },
  {
    id: "fotografie",
    category: "kreativ",
    title: "Fotografie",
    audience: "Hochzeits-, Familien- und Business-Fotografen",
    features: ["Portfolio mit Filter nach Anlass", "Kennenlern-Angebot mit Preis", "Kontaktknöpfe für WhatsApp, Telefon, Mail"],
    mock: { domain: "lenasommer-fotografie.de", headline: "Hallo, ich bin Lena", signature: "Schnupper-Shooting" },
    hue: 35,
    featured: true,
  },
];

/* ---------- Mockup-Platzhalter ---------- */

function MockupPlaceholder({ industry, wide = false }: { industry: Industry; wide?: boolean }) {
  const { mock, hue, image, title } = industry;

  if (image) {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-fg/10 ${wide ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10]"}`}>
        <Image
          src={image}
          alt={`Design-Konzept für ${title}`}
          fill
          sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
    );
  }

  // Gezeichnetes Browserfenster: Farbe pro Branche, Inhalte aus den Dummy-Daten
  const tint = `hsl(${hue} 70% 60%)`;
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden rounded-2xl border border-fg/10 bg-ink-950 ${wide ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10]"}`}
      style={{ ["--tint" as string]: tint }}
    >
      {/* Browser-Leiste */}
      <div className="flex items-center gap-2 border-b border-fg/10 px-3 py-2">
        <span className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-fg/15" />
          <span className="h-2 w-2 rounded-full bg-fg/15" />
          <span className="h-2 w-2 rounded-full bg-fg/15" />
        </span>
        <span className="ml-1 truncate rounded-md bg-fg/5 px-2 py-0.5 font-mono text-[10px] text-fg/50">{mock.domain}</span>
      </div>

      {/* Seiteninhalt – wird beim Hover leicht hochgeschoben, als würde man scrollen */}
      <div className="flex flex-col gap-3 p-4 transition-transform duration-700 ease-out group-hover:-translate-y-3 motion-reduce:transition-none sm:p-5">
        <div className="flex items-center justify-between">
          <span className="h-2 w-14 rounded-full bg-[color:var(--tint)] opacity-80" />
          <span className="flex gap-2">
            <span className="h-1.5 w-6 rounded-full bg-fg/15" />
            <span className="h-1.5 w-6 rounded-full bg-fg/15" />
            <span className="h-1.5 w-6 rounded-full bg-fg/15" />
          </span>
        </div>
        <p className="mt-2 max-w-[85%] text-sm font-semibold leading-tight tracking-tight text-fg sm:text-base">{mock.headline}</p>
        <span className="h-1.5 w-3/4 rounded-full bg-fg/10" />
        <span className="h-1.5 w-1/2 rounded-full bg-fg/10" />
        <span className="mt-1 inline-flex w-fit items-center rounded-full bg-[color:var(--tint)] px-3 py-1 text-[11px] font-semibold text-ink-950">
          {mock.signature}
        </span>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <span className="aspect-[4/3] rounded-lg bg-fg/[0.06]" />
          <span className="aspect-[4/3] rounded-lg bg-fg/[0.06]" />
          <span className="aspect-[4/3] rounded-lg bg-fg/[0.06]" />
        </div>
      </div>

      {/* Farbschimmer der Branche am unteren Rand */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[color:var(--tint)]/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

/* ---------- Karte ---------- */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function requestSimilar(industry: Industry) {
  sendPrefill(`Hallo, mir gefällt das Konzept „${industry.title}“. Ich hätte gern eine ähnliche Website für meinen Betrieb.`);
}

function IndustryCard({ industry, large, contactHref }: { industry: Industry; large: boolean; contactHref: string }) {
  const headingId = useId();
  const href = `/beispiele/${industry.id}`;
  return (
    <article
      aria-labelledby={headingId}
      className="group flex h-full flex-col gap-6 rounded-3xl border border-fg/10 bg-ink-900 p-5 transition-[border-color,translate] duration-500 hover:-translate-y-1 hover:border-fg/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6"
    >
      {/* Klick aufs Mockup öffnet die Beispiel-Website in einem neuen Tab */}
      <Link
        href={href}
        target="_blank"
        aria-label={`Beispiel-Website ${industry.title} ansehen (öffnet in neuem Tab)`}
        className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
      >
        <MockupPlaceholder industry={industry} wide={large} />
      </Link>

      <div className={`flex min-w-0 flex-1 flex-col ${large ? "md:grid md:grid-cols-2 md:gap-x-8" : ""}`}>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-fg/60">
            {CATEGORIES.find((c) => c.id === industry.category)?.label}
          </p>
          <h3 id={headingId} className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
            {industry.title}
          </h3>
          <p className="mt-1 text-sm text-fg/60">{industry.audience}</p>
        </div>

        <ul className={`mt-5 space-y-2.5 ${large ? "md:mt-0" : ""}`}>
          {industry.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-sm text-fg/75">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
              {feature}
            </li>
          ))}
        </ul>

        <div className={`mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8 ${large ? "md:col-span-2" : ""}`}>
          <Link
            href={href}
            target="_blank"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900"
          >
            Beispiel ansehen
            <ExternalIcon className="h-4 w-4" />
            <span className="sr-only">(öffnet in neuem Tab)</span>
          </Link>
          <a
            href={contactHref}
            onClick={() => requestSimilar(industry)}
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-medium text-fg/70 transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Ähnliches Design anfragen
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

/* ---------- Abschnitt ---------- */

// contactHref: Ziel der Kontakt-Buttons. Auf der Startseite "#kontakt", auf anderen Seiten "/#kontakt".
export default function IndustryShowcase({ number = "02", contactHref = "#kontakt" }: { number?: string; contactHref?: string }) {
  const [active, setActive] = useState<CategoryId | "alle">("alle");

  const visible = useMemo(
    () => (active === "alle" ? INDUSTRIES : INDUSTRIES.filter((i) => i.category === active)),
    [active],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { alle: INDUSTRIES.length };
    for (const i of INDUSTRIES) map[i.category] = (map[i.category] ?? 0) + 1;
    return map;
  }, []);

  return (
    <section id="branchen" aria-labelledby="branchen-title" className="border-t border-fg/10">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-3 text-sm text-fg/60">
              <span className="font-mono text-accent">{number}</span>
              <span className="h-px w-8 bg-fg/20" />
              Branchen-Konzepte
            </p>
            <h2 id="branchen-title" className="mt-6 max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
              So kann Ihre <span className="font-serif font-normal italic text-accent-soft">Branche</span> aussehen
            </h2>
          </div>
          <p className="max-w-sm text-fg/60">
            {INDUSTRIES.length} Konzepte mit den Funktionen, die Ihre Kunden in Ihrer Branche wirklich nutzen. Wählen Sie Ihren Bereich.
          </p>
        </Reveal>

        {/* Filter-Leiste: auf dem Handy horizontal scrollbar */}
        <div className="-mx-6 mb-10 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div role="group" aria-label="Nach Branche filtern" className="flex w-max gap-2">
            {CATEGORIES.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(id)}
                  className={`inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${
                    isActive
                      ? "border-fg bg-fg text-ink-950"
                      : "border-fg/15 text-fg/70 hover:border-fg/40 hover:text-fg"
                  }`}
                >
                  {label}
                  <span className={`font-mono text-xs ${isActive ? "text-ink-950/60" : "text-fg/40"}`}>{counts[id]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {visible.length} Konzepte angezeigt
        </p>

        {/* Bento-Grid: große Karten nur in der Ansicht „Alle“ */}
        <div className="grid grid-flow-dense gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((industry) => {
            const large = active === "alle" && !!industry.featured;
            return (
              <div
                key={`${active}-${industry.id}`}
                className={`transition-[opacity,translate] duration-500 starting:translate-y-3 starting:opacity-0 motion-reduce:transition-none ${
                  large ? "md:col-span-2" : ""
                }`}
              >
                <IndustryCard industry={industry} large={large} contactHref={contactHref} />
              </div>
            );
          })}
        </div>

        {/* Abschluss-CTA */}
        <Reveal className="mt-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-fg/10 bg-ink-900/60 p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">Ihre Branche ist nicht dabei?</h3>
              <p className="mt-2 text-fg/60">Ich erstelle Ihnen ein individuelles Konzept, abgestimmt auf Ihre Kunden und Abläufe.</p>
            </div>
            <a
              href={contactHref}
              onClick={() => sendPrefill("Hallo, meine Branche ist: … Ich hätte gern ein individuelles Website-Konzept.")}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-fg px-6 py-3.5 font-medium text-ink-950 transition-colors duration-300 hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            >
              Individuelles Konzept anfragen
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
