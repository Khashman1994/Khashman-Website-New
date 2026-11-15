// Fragen und Antworten für den Chat-Assistenten (Deutsch: CHAT_FAQ, Englisch: CHAT_FAQ_EN).
// Preise kommen aus contact-options.ts, damit Chat und Kontaktformular immer übereinstimmen.
import { PACKAGE_OPTIONS } from "@/lib/contact-options";
import { SITE } from "@/lib/site";

const price = (value: string) => PACKAGE_OPTIONS.find((p) => p.value === value)?.price ?? "";
const priceEn = (value: string) => PACKAGE_OPTIONS.find((p) => p.value === value)?.en.price ?? "";

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
    id: "automatisierung",
    question: "Automatisierst du auch Abläufe in meinem Betrieb?",
    answer: "Ja. Ich baue KI-Automatisierungen, die Anfragen sofort beantworten, Termine buchen und Kunden nach einer Google-Bewertung fragen. Im kostenlosen Erstgespräch schauen wir, was sich bei dir lohnt.",
    link: { href: "/ki-automatisierung", label: "KI-Automatisierung ansehen" },
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

export const CHAT_FAQ_EN: FaqEntry[] = [
  {
    id: "kosten",
    question: "How much does a website cost?",
    answer: `It depends on the scope: Starter ${priceEn("starter")}, Business ${priceEn("business")}, Premium ${priceEn("premium")}. For special requirements there's an individual quote.`,
    link: { href: "/en#preise", label: "View packages" },
  },
  {
    id: "paket",
    question: "Which package suits me?",
    answer: "Starter is enough for a one-page business-card website. Business suits you if you need up to 5 subpages and search engine optimisation. Premium is meant for a shop, online booking and more.",
  },
  {
    id: "dauer",
    question: "How long does it take?",
    answer: "That depends on the package and how quickly we have the content together. In the initial call I'll give you a concrete timeline.",
  },
  {
    id: "dsgvo",
    question: "Is the website GDPR-compliant?",
    answer: "Yes. I use lean, privacy-friendly technology, no advertising cookies and a complete privacy policy.",
    link: { href: "/datenschutz", label: "Privacy policy (German)" },
  },
  {
    id: "aachen",
    question: "Where are you based?",
    answer: "I'm based in Aachen, Germany, but also work with clients across Germany and internationally. The initial call, coordination and feedback can all happen online, from the first conversation to launch.",
  },
  {
    id: "automatisierung",
    question: "Do you also automate workflows in my business?",
    answer: "Yes. I build AI automations that answer enquiries instantly, book appointments and ask customers for a Google review. In a free initial call we look at what's worth it for you.",
    link: { href: "/en/ai-automation", label: "See AI automation" },
  },
  {
    id: "ki-was",
    question: "What is an AI chatbot?",
    answer: "An assistant on your website that answers visitors' questions in plain language, around the clock. It uses the information we store together for your business, such as services, prices, opening hours and process.",
  },
  {
    id: "ki-kosten",
    question: "How much does an AI chatbot cost?",
    answer: "The costs consist of a one-time setup and a monthly fee for operation and maintenance. I'll give you exact prices after a short call, because they depend on the scope and the number of visitors.",
  },
  {
    id: "ki-aufwand",
    question: "How much work is an AI chatbot for me?",
    answer: "Very little. We discuss once what the chat should know. I set it up, test it and fine-tune it. You send me any changes, for example to opening hours or prices, and I update them.",
  },
  {
    id: "ki-dsgvo",
    question: "Is an AI chatbot GDPR-compliant?",
    answer: "I set up the chat so visitors clearly know they're talking to an AI, and I update your privacy policy. Because the questions go to an AI provider in the USA, I clarify the legal basis with you before launch.",
  },
  {
    id: "ki-unbekannt",
    question: "What if the chatbot doesn't know something?",
    answer: "It says so openly and refers to you. If you like, it collects the name, contact details and question and sends them to you by email.",
  },
  {
    id: "ki-fehler",
    question: "Can an AI chatbot give wrong answers?",
    answer: "AI can make mistakes. That's why I limit it to the information you've approved and test typical questions before launch. When unsure, it refers to you instead of making something up.",
  },
  {
    id: "ki-lohnt",
    question: "Who benefits from an AI chatbot?",
    answer: "Especially businesses where many visitors ask the same questions and get in touch after hours: trades, medical practices, real estate, service providers with many services. For businesses with few visitors, a simple FAQ chat is often enough.",
  },
  {
    id: "ki-einfach",
    question: "Is there a simpler option?",
    answer: "Yes. The FAQ chat you're using right now is included in the Business and Premium packages. It answers set questions and takes enquiries, without AI.",
  },
  {
    id: "termin",
    question: "How can I book an appointment?",
    answer: "Just send me a message here in the chat, or message me directly on WhatsApp.",
    link: { href: SITE.whatsappUrl, label: "Message on WhatsApp" },
  },
];
