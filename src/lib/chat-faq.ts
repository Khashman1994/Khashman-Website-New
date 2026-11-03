// Fragen und Antworten für den Chat-Assistenten (nur Deutsch).
// Preise kommen aus contact-options.ts, damit Chat und Kontaktformular immer übereinstimmen.
import { PACKAGE_OPTIONS } from "@/lib/contact-options";
import { SITE } from "@/lib/site";

const price = (value: string) => PACKAGE_OPTIONS.find((p) => p.value === value)?.price ?? "";

export type FaqEntry = { id: string; question: string; answer: string; link?: { href: string; label: string } };

export const CHAT_FAQ: FaqEntry[] = [
  {
    id: "kosten",
    question: "Was kostet eine Website?",
    answer: `Das hängt vom Umfang ab: Starter ${price("starter")}, Business ${price("business")}, Premium ${price("premium")}. Für besondere Wünsche gibt es ein individuelles Angebot.`,
    link: { href: "/#preise", label: "Pakete ansehen" },
  },
  {
    id: "paket",
    question: "Welches Paket passt zu mir?",
    answer: "Starter reicht für eine einseitige Visitenkarte-Website. Business eignet sich, wenn du bis zu 5 Unterseiten und Suchmaschinen-Optimierung brauchst. Premium ist für Shop, Terminbuchung und mehr gedacht.",
  },
  {
    id: "dauer",
    question: "Wie lange dauert das?",
    answer: "Das hängt vom Paket und davon ab, wie schnell wir die Inhalte zusammen haben. Im Erstgespräch nenne ich dir einen konkreten Zeitplan.",
  },
  {
    id: "dsgvo",
    question: "Ist die Website datenschutzkonform?",
    answer: "Ja. Ich setze auf schlanke, datenschutzfreundliche Technik, keine Werbe-Cookies und eine vollständige Datenschutzerklärung.",
    link: { href: "/datenschutz", label: "Datenschutzerklärung" },
  },
  {
    id: "aachen",
    question: "Wo sitzt du?",
    answer: "Ich bin in Aachen und betreue meine Kunden persönlich, vom ersten Gespräch bis zum Start.",
  },
  {
    id: "termin",
    question: "Wie kann ich einen Termin machen?",
    answer: "Schreib mir einfach eine Nachricht hier im Chat, oder schick mir direkt eine WhatsApp.",
    link: { href: SITE.whatsappUrl, label: "WhatsApp schreiben" },
  },
];
