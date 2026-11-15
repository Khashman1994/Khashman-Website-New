import type { Metadata } from "next";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import PrefillLink from "@/components/PrefillLink";
import { SITE } from "@/lib/site";

const PATH = "/ki-automatisierung";
const TITLE = "KI-Automatisierung Aachen: Anfragen, Termine & Bewertungen automatisch";
const DESCRIPTION =
  "KI-Automatisierung für Handwerker, Praxen und kleine Betriebe in Aachen: Anfragen sofort beantworten, Termine automatisch buchen, mehr Google-Bewertungen. Kostenloses Erstgespräch.";

// Text, mit dem das Kontaktformular vorbefüllt wird
const PREFILL =
  "Hallo Khashman, ich interessiere mich für KI-Automatisierung und möchte ein kostenloses Erstgespräch vereinbaren. In meinem Betrieb kostet mich vor allem Folgendes Zeit: ";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: "website", url: PATH, title: TITLE, description: DESCRIPTION },
};

const PROBLEMS = [
  { title: "Das Telefon klingelt, während Sie beim Kunden sind", text: "Wer nicht sofort eine Antwort bekommt, fragt beim nächsten Betrieb an." },
  { title: "Anfragen bleiben im Postfach liegen", text: "Zwischen Werbung und Rechnungen geht die wichtige E-Mail unter." },
  { title: "Abends noch Papierkram", text: "Termine bestätigen, nachfassen, um Bewertungen bitten – Arbeit, die niemand gern macht." },
];

const FLOW = [
  { step: "Kunde schreibt", text: "über Ihre Website, per Formular oder Chat" },
  { step: "Antwort in Sekunden", text: "freundlich, mit den Infos aus Ihrem Betrieb" },
  { step: "Sie bekommen alles sortiert", text: "mit allen Angaben per E-Mail aufs Handy" },
];

const SOLUTIONS = [
  {
    title: "Anfragen-Autopilot",
    text: "Jede Anfrage wird sofort beantwortet und landet sortiert bei Ihnen – mit Name, Anliegen und Dringlichkeit.",
  },
  {
    title: "Terminbuchung",
    text: "Kunden buchen selbst einen freien Termin. Bestätigung und Erinnerung gehen automatisch raus.",
  },
  {
    title: "Bewertungs-Automatik",
    text: "Nach dem Auftrag bekommt Ihr Kunde eine freundliche Bitte um eine Google-Bewertung – ohne dass Sie daran denken müssen.",
  },
  {
    title: "Individuelle Abläufe",
    text: "Sie erzählen mir, wo Sie Zeit verlieren. Ich prüfe, was sich sinnvoll automatisieren lässt – und was nicht.",
  },
];

const STEPS = [
  { title: "Erstgespräch buchen", text: "Kostenlos, rund 20 Minuten, gern online. Wir schauen, wo Sie am meisten Zeit verlieren." },
  { title: "Festpreis-Angebot", text: "Sie bekommen ein klares Angebot ohne versteckte Kosten – unverbindlich." },
  { title: "Testversion", text: "Ich baue die Automatisierung und teste sie mit Ihnen, bevor echte Kunden sie nutzen." },
  { title: "Start & Betreuung", text: "Ich überwache die Abläufe, passe sie an und bin Ihr fester Ansprechpartner." },
];

const TRUST = [
  { title: "Datenschutz im Blick", text: "Ich verarbeite nur die nötigen Daten und ergänze Ihre Datenschutzerklärung." },
  { title: "KI wird gekennzeichnet", text: "Ihre Kunden erfahren klar, wenn sie mit einer KI schreiben – so wie es die KI-Verordnung verlangt." },
  { title: "Persönlich in Aachen", text: "Ein Ansprechpartner statt Hotline. Antwort in der Regel innerhalb von 24 Stunden." },
];

const FAQ = [
  {
    q: "Was kostet eine KI-Automatisierung?",
    a: "Das hängt vom Umfang ab. Nach dem kostenlosen Erstgespräch erhalten Sie ein transparentes Festpreis-Angebot für die Einrichtung, dazu eine kleine monatliche Pauschale für Betrieb, KI-Kosten und Wartung.",
  },
  {
    q: "Brauche ich dafür eine neue Website?",
    a: "Nein. Viele Automatisierungen lassen sich an Ihre bestehende Website, Ihr E-Mail-Postfach oder Ihren Kalender anbinden. Wenn Sie ohnehin eine neue Website planen, baue ich beides zusammen.",
  },
  {
    q: "Was passiert, wenn eine Automatisierung einen Fehler macht?",
    a: "Ich teste jeden Ablauf vor dem Start und überwache ihn danach. Fällt etwas aus, werde ich benachrichtigt. Bei Unsicherheit leitet die KI an Sie weiter, statt etwas zu erfinden.",
  },
  {
    q: "Ist das DSGVO-konform?",
    a: "Ich richte die Abläufe so ein, dass nur die nötigen Daten verarbeitet werden, nutze wo möglich Anbieter mit Servern in der EU und ergänze Ihre Datenschutzerklärung. Wo ein KI-Anbieter außerhalb der EU nötig ist, klären wir die rechtliche Grundlage vor dem Start.",
  },
  {
    q: "Wie viel Aufwand habe ich selbst?",
    a: "Wenig. Im Erstgespräch und bei der Testversion brauche ich Ihr Wissen über Ihren Betrieb. Danach läuft alles im Hintergrund, Änderungen schicken Sie mir einfach.",
  },
  {
    q: "Für welche Betriebe lohnt sich das?",
    a: "Vor allem dort, wo viele ähnliche Anfragen kommen und wenig Zeit fürs Büro bleibt: Handwerk, Praxen, Friseure und Kosmetik, Immobilien und Dienstleister mit vielen Terminen.",
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-accent-soft">{children}</p>;
}

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <PrefillLink
      href="/#kontakt"
      message={PREFILL}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-7 py-4 font-medium text-ink-950 transition-colors duration-300 hover:bg-accent hover:text-white"
    >
      {children}
      <span aria-hidden="true">→</span>
    </PrefillLink>
  );
}

export default function KiAutomatisierungPage() {
  const url = `${SITE.url}${PATH}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "KI-Automatisierung für kleine Betriebe",
      description: DESCRIPTION,
      url,
      serviceType: "KI-Automatisierung",
      provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url, telephone: SITE.phoneE164, email: SITE.email },
      areaServed: [
        { "@type": "City", name: "Aachen" },
        { "@type": "AdministrativeArea", name: "StädteRegion Aachen" },
        { "@type": "Country", name: "Deutschland" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: "KI-Automatisierung", item: url },
      ],
    },
  ];

  return (
    <article className="mx-auto max-w-6xl px-6 pb-24 pt-36 md:pt-44">
      <script
        type="application/ld+json"
        // "<" maskieren, damit kein Inhalt aus dem Script-Tag ausbrechen kann
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Brotkrumen" className="text-sm text-fg/60">
        <Link href="/" className="transition-colors hover:text-fg">Startseite</Link> <span aria-hidden="true">/</span>{" "}
        <span className="text-fg/70">KI-Automatisierung</span>
      </nav>

      {/* Hero */}
      <header className="mt-10 max-w-3xl">
        <Label>KI-Automatisierung für Betriebe in Aachen</Label>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Nie wieder <span className="font-serif font-normal italic text-accent-soft">verpasste</span> Anfragen.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-fg/60">
          Ich automatisiere die Routinearbeit in Ihrem Betrieb: Anfragen werden sofort beantwortet, Termine gebucht und
          Kunden nach einer Bewertung gefragt. Damit Sie sich um Ihre Kunden kümmern können statt um Ihr Postfach.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CtaButton>Kostenloses Erstgespräch buchen</CtaButton>
          <MagneticButton href="#loesungen" variant="outline">Was ich automatisiere</MagneticButton>
        </div>
      </header>

      {/* Probleme */}
      <section className="mt-28">
        <Label>Kennen Sie das?</Label>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Zeitfresser, die jeder Betrieb kennt</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROBLEMS.map((item) => (
            <div key={item.title} className="rounded-3xl border border-fg/10 bg-fg/[0.03] p-7">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-fg/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="mt-28">
        <Label>So funktioniert&apos;s</Label>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Ihr Betrieb antwortet – auch nach Feierabend</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {FLOW.map((item, i) => (
            <li key={item.step} className="relative rounded-3xl border border-fg/10 p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/15 font-mono text-sm text-accent-soft">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{item.step}</h3>
              <p className="mt-2 text-fg/60">{item.text}</p>
              {i < FLOW.length - 1 && (
                <span aria-hidden="true" className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-accent md:block">→</span>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Lösungen */}
      <section id="loesungen" className="mt-28 scroll-mt-32">
        <Label>Leistungen</Label>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Was ich für Sie automatisieren kann</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SOLUTIONS.map((item) => (
            <div key={item.title} className="rounded-3xl border border-fg/10 bg-fg/[0.03] p-8">
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-fg/60">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 via-violet/10 to-transparent p-px">
          <div className="rounded-[calc(1.5rem-1px)] bg-ink-900 p-8 md:p-12">
            <h3 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
              Jeder Betrieb ist anders – deshalb gibt es bei mir keine Lösung von der Stange.
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-fg/60">
              Im kostenlosen Erstgespräch schauen wir gemeinsam, wo Sie am meisten Zeit sparen. Danach bekommen Sie ein
              Festpreis-Angebot – ohne Verpflichtung.
            </p>
            <div className="mt-8">
              <CtaButton>Erstgespräch buchen</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="mt-28">
        <Label>Ablauf</Label>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">In vier Schritten zur Automatisierung</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <li key={item.title} className="rounded-3xl border border-fg/10 p-7">
              <span className="font-mono text-sm text-accent-soft">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg/60">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Vertrauen */}
      <section className="mt-28 grid gap-8 border-y border-fg/10 py-12 md:grid-cols-3">
        {TRUST.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg/60">{item.text}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mt-28 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Häufige Fragen</h2>
        <div className="mt-6 divide-y divide-fg/10 border-y border-fg/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="text-fg/60 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-fg/60">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Weitere Leistungen */}
      <p className="mt-16 text-sm text-fg/60">
        Weitere Leistungen:{" "}
        <Link href="/webdesign-aachen" className="text-accent-soft underline-offset-4 hover:underline">Webdesign in Aachen</Link>
        {" · "}
        <Link href="/webentwicklung-aachen" className="text-accent-soft underline-offset-4 hover:underline">Webentwicklung</Link>
        {" · "}
        <Link href="/seo-aachen" className="text-accent-soft underline-offset-4 hover:underline">SEO in Aachen</Link>
      </p>

      {/* Abschluss */}
      <section className="mt-16 rounded-3xl border border-fg/10 bg-fg/[0.03] p-8 md:p-12">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Wo verliert Ihr Betrieb Zeit?</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-fg/60">
          Erzählen Sie es mir im kostenlosen Erstgespräch. Ich schaue mir Ihre Abläufe an und sage Ihnen ehrlich, was sich
          lohnt. Ich melde mich in der Regel innerhalb von 24 Stunden.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaButton>Erstgespräch buchen</CtaButton>
          <MagneticButton href={SITE.whatsappUrl} variant="outline">WhatsApp schreiben</MagneticButton>
        </div>
      </section>
    </article>
  );
}
