import type { Metadata } from "next";
import AutomationPage, { type AutomationContent } from "@/components/AutomationPage";
import { alternatesFor } from "@/lib/i18n";

const TITLE = "KI-Automatisierung Aachen: Anfragen, Termine & Bewertungen automatisch";
const DESCRIPTION =
  "KI-Automatisierung für Handwerker, Praxen und kleine Betriebe in Aachen: Anfragen sofort beantworten, Termine automatisch buchen, mehr Google-Bewertungen. Kostenloses Erstgespräch.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/ki-automatisierung", "de"),
  openGraph: { type: "website", url: "/ki-automatisierung", title: TITLE, description: DESCRIPTION },
};

const CONTENT: AutomationContent = {
  path: "/ki-automatisierung",
  description: DESCRIPTION,
  // Text, mit dem das Kontaktformular vorbefüllt wird
  prefill:
    "Hallo Khashman, ich interessiere mich für KI-Automatisierung und möchte ein kostenloses Erstgespräch vereinbaren. In meinem Betrieb kostet mich vor allem Folgendes Zeit: ",
  ui: {
    home: "Startseite",
    breadcrumb: "Brotkrumen",
    breadcrumbLabel: "KI-Automatisierung",
    whatsapp: "WhatsApp schreiben",
    serviceName: "KI-Automatisierung für kleine Betriebe",
    serviceType: "KI-Automatisierung",
    country: "Deutschland",
  },
  hero: {
    label: "KI-Automatisierung für Betriebe in Aachen",
    before: "Nie wieder ",
    serif: "verpasste",
    after: " Anfragen.",
    text: "Ich automatisiere die Routinearbeit in Ihrem Betrieb: Anfragen werden sofort beantwortet, Termine gebucht und Kunden nach einer Bewertung gefragt. Damit Sie sich um Ihre Kunden kümmern können statt um Ihr Postfach.",
    cta: "Kostenloses Erstgespräch buchen",
    secondary: "Was ich automatisiere",
  },
  problems: {
    label: "Kennen Sie das?",
    title: "Zeitfresser, die jeder Betrieb kennt",
    items: [
      { title: "Das Telefon klingelt, während Sie beim Kunden sind", text: "Wer nicht sofort eine Antwort bekommt, fragt beim nächsten Betrieb an." },
      { title: "Anfragen bleiben im Postfach liegen", text: "Zwischen Werbung und Rechnungen geht die wichtige E-Mail unter." },
      { title: "Abends noch Papierkram", text: "Termine bestätigen, nachfassen, um Bewertungen bitten – Arbeit, die niemand gern macht." },
    ],
  },
  flow: {
    label: "So funktioniert's",
    title: "Ihr Betrieb antwortet – auch nach Feierabend",
    items: [
      { step: "Kunde schreibt", text: "über Ihre Website, per Formular oder Chat" },
      { step: "Antwort in Sekunden", text: "freundlich, mit den Infos aus Ihrem Betrieb" },
      { step: "Sie bekommen alles sortiert", text: "mit allen Angaben per E-Mail aufs Handy" },
    ],
  },
  solutions: {
    label: "Leistungen",
    title: "Was ich für Sie automatisieren kann",
    items: [
      { title: "Anfragen-Autopilot", text: "Jede Anfrage wird sofort beantwortet und landet sortiert bei Ihnen – mit Name, Anliegen und Dringlichkeit." },
      { title: "Terminbuchung", text: "Kunden buchen selbst einen freien Termin. Bestätigung und Erinnerung gehen automatisch raus." },
      { title: "Bewertungs-Automatik", text: "Nach dem Auftrag bekommt Ihr Kunde eine freundliche Bitte um eine Google-Bewertung – ohne dass Sie daran denken müssen." },
      { title: "Individuelle Abläufe", text: "Sie erzählen mir, wo Sie Zeit verlieren. Ich prüfe, was sich sinnvoll automatisieren lässt – und was nicht." },
    ],
    boxTitle: "Jeder Betrieb ist anders – deshalb gibt es bei mir keine Lösung von der Stange.",
    boxText:
      "Im kostenlosen Erstgespräch schauen wir gemeinsam, wo Sie am meisten Zeit sparen. Danach bekommen Sie ein Festpreis-Angebot – ohne Verpflichtung.",
    boxCta: "Erstgespräch buchen",
  },
  steps: {
    label: "Ablauf",
    title: "In vier Schritten zur Automatisierung",
    items: [
      { title: "Erstgespräch buchen", text: "Kostenlos, rund 20 Minuten, gern online. Wir schauen, wo Sie am meisten Zeit verlieren." },
      { title: "Festpreis-Angebot", text: "Sie bekommen ein klares Angebot ohne versteckte Kosten – unverbindlich." },
      { title: "Testversion", text: "Ich baue die Automatisierung und teste sie mit Ihnen, bevor echte Kunden sie nutzen." },
      { title: "Start & Betreuung", text: "Ich überwache die Abläufe, passe sie an und bin Ihr fester Ansprechpartner." },
    ],
  },
  trust: [
    { title: "Datenschutz im Blick", text: "Ich verarbeite nur die nötigen Daten und ergänze Ihre Datenschutzerklärung." },
    { title: "KI wird gekennzeichnet", text: "Ihre Kunden erfahren klar, wenn sie mit einer KI schreiben – so wie es die KI-Verordnung verlangt." },
    { title: "Persönlich in Aachen", text: "Ein Ansprechpartner statt Hotline. Antwort in der Regel innerhalb von 24 Stunden." },
  ],
  faq: {
    title: "Häufige Fragen",
    items: [
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
    ],
  },
  related: {
    label: "Weitere Leistungen:",
    links: [
      { href: "/webdesign-aachen", label: "Webdesign in Aachen" },
      { href: "/webentwicklung-aachen", label: "Webentwicklung" },
      { href: "/seo-aachen", label: "SEO in Aachen" },
      { href: "/blog/ki-automatisierung-fuer-kleine-betriebe", label: "Blog: KI-Automatisierung für kleine Betriebe" },
    ],
  },
  closing: {
    title: "Wo verliert Ihr Betrieb Zeit?",
    text: "Erzählen Sie es mir im kostenlosen Erstgespräch. Ich schaue mir Ihre Abläufe an und sage Ihnen ehrlich, was sich lohnt. Ich melde mich in der Regel innerhalb von 24 Stunden.",
    cta: "Erstgespräch buchen",
  },
};

export default function KiAutomatisierungPage() {
  return <AutomationPage locale="de" c={CONTENT} />;
}
