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
    answer: "Ich sitze in Aachen, betreue Kunden aber auch bundesweit und international. Erstgespräch, Abstimmung und Feedback laufen bei Bedarf per Online-Meeting, vom ersten Gespräch bis zum Start.",
  },
  {
    id: "ki-was",
    question: "Was ist ein KI-Chatbot?",
    answer: "Ein Assistent auf deiner Website, der Fragen von Besuchern in normaler Sprache beantwortet, rund um die Uhr. Er nutzt die Informationen, die ich gemeinsam mit dir für deinen Betrieb hinterlege, zum Beispiel Leistungen, Preise, Öffnungszeiten und Ablauf.",
  },
  {
    id: "ki-kosten",
    question: "Was kostet ein KI-Chatbot?",
    answer: "Die Kosten bestehen aus einer einmaligen Einrichtung und einer monatlichen Pauschale für Betrieb und Pflege. Die genauen Preise nenne ich dir nach einem kurzen Gespräch, weil sie vom Umfang und vom Besucheraufkommen abhängen.",
  },
  {
    id: "ki-aufwand",
    question: "Wie viel Aufwand habe ich mit einem KI-Chatbot?",
    answer: "Wenig. Wir besprechen einmal gemeinsam, was der Chat wissen soll. Ich richte ihn ein, teste ihn und passe ihn an. Änderungen, etwa bei Öffnungszeiten oder Preisen, schickst du mir, und ich pflege sie ein.",
  },
  {
    id: "ki-dsgvo",
    question: "Ist ein KI-Chatbot DSGVO-konform?",
    answer: "Ich richte den Chat so ein, dass Besucher klar erfahren, dass sie mit einer KI sprechen, und ergänze deine Datenschutzerklärung. Weil die Fragen an einen KI-Anbieter in den USA gehen, kläre ich die rechtliche Grundlage vor dem Start mit dir.",
  },
  {
    id: "ki-unbekannt",
    question: "Was, wenn der Chatbot etwas nicht weiß?",
    answer: "Er sagt das offen und verweist auf dich. Auf Wunsch sammelt er den Namen, die Kontaktdaten und die Frage und schickt sie dir per E-Mail.",
  },
  {
    id: "ki-fehler",
    question: "Kann ein KI-Chatbot falsche Antworten geben?",
    answer: "KI kann sich irren. Deshalb beschränke ich ihn auf die Informationen, die du freigegeben hast, und teste typische Fragen vor dem Start. Bei Unsicherheit verweist er auf dich, statt etwas zu erfinden.",
  },
  {
    id: "ki-lohnt",
    question: "Für wen lohnt sich ein KI-Chatbot?",
    answer: "Vor allem dort, wo viele Besucher dieselben Fragen stellen und nach Feierabend anfragen: Handwerk, Praxen, Immobilien, Dienstleister mit vielen Leistungen. Bei Betrieben mit wenigen Besuchern reicht oft ein einfacher FAQ-Chat.",
  },
  {
    id: "ki-einfach",
    question: "Gibt es eine einfachere Variante?",
    answer: "Ja. Der FAQ-Chat, den du gerade benutzt, ist in den Paketen Business und Premium enthalten. Er beantwortet feste Fragen und nimmt Anfragen entgegen, ohne KI.",
  },
  {
    id: "termin",
    question: "Wie kann ich einen Termin machen?",
    answer: "Schreib mir einfach eine Nachricht hier im Chat, oder schick mir direkt eine WhatsApp.",
    link: { href: SITE.whatsappUrl, label: "WhatsApp schreiben" },
  },
];
