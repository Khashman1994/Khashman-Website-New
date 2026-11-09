import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

const TITLE = "Webdesigner Aachen: Website erstellen lassen ab 599 €";
const DESCRIPTION =
  "Webdesign in Aachen für Selbstständige, Handwerker und kleine Unternehmen: moderne, mobiloptimierte und DSGVO-konforme Websites zum Festpreis. Persönlich betreut, auch online.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/webdesign-aachen" },
  openGraph: { type: "website", url: "/webdesign-aachen", title: TITLE, description: DESCRIPTION },
};

export default function WebdesignAachenPage() {
  return (
    <ServicePage
      path="/webdesign-aachen"
      breadcrumb="Webdesign Aachen"
      label="Webdesign"
      title="Webdesign in Aachen: Ihre Website zum Festpreis"
      intro="Ihre Website ist oft der erste Eindruck, den neue Kunden von Ihnen bekommen. Ich gestalte und programmiere moderne, schnelle Websites für Selbstständige, Handwerker und kleine Unternehmen aus Aachen und der Region. Sie sprechen direkt mit mir, nicht mit einem Agenturteam."
      sections={[
        {
          title: "Was Sie von mir bekommen",
          bullets: [
            "Individuell gestaltetes Design, das zu Ihrem Betrieb passt, auf jedem Gerät sauber dargestellt",
            "Schnelle Ladezeiten und eine saubere technische Basis, auch für Google",
            "WhatsApp- und Kontaktformular, damit Besucher Sie direkt erreichen",
            "Inklusive .de-Domain und SSL-Verschlüsselung im Starter-Paket",
            "DSGVO-konforme Technik und eine Datenschutzerklärung",
            "Klare Festpreise statt Stundenabrechnung",
          ],
        },
        {
          title: "Drei Pakete, klare Preise",
          paragraphs: [
            "Starter (ab 599 €) ist eine moderne One-Page-Website als digitale Visitenkarte. Business (ab 1.199 €) bietet bis zu 5 Unterseiten, Basis-SEO und Google Maps. Premium (ab 1.999 €) umfasst bis zu 10 Unterseiten oder einen Online-Shop beziehungsweise eine Terminbuchung, dazu erweiterte SEO. Hosting und Pflege können Sie optional monatlich dazubuchen. Alle Details stehen in der Paketübersicht.",
          ],
        },
        {
          title: "So läuft ein Projekt ab",
          bullets: [
            "Erstgespräch: kostenlos und unverbindlich, danach erhalten Sie ein Festpreis-Angebot",
            "Konzept und Design: Ich entwerfe Struktur und Gestaltung, Sie geben Feedback, bis alles passt",
            "Entwicklung: Umsetzung mit moderner Technik, schnell, sicher und mobiloptimiert",
            "Launch: Ihre Website geht live, auf Wunsch übernehme ich Hosting, Updates und Backups",
          ],
        },
        {
          title: "Persönlich und auf Augenhöhe",
          paragraphs: [
            "Ich bin Khashman, Student der Software-Entwicklung an der FH Aachen. Bei mir gibt es direkte Kommunikation, transparente Preise und eine Umsetzung ohne Umwege. Ich sitze in Aachen und betreue Kunden aber auch bundesweit und international, Gespräche laufen bei Bedarf online.",
          ],
        },
      ]}
      faq={[
        {
          q: "Was kostet eine Website in Aachen?",
          a: "Das Starter-Paket kostet ab 599 €, Business ab 1.199 € und Premium ab 1.999 €, jeweils als einmaliger Festpreis. Hosting und Pflege sind optional gegen eine monatliche Gebühr buchbar. Für besondere Wünsche erstelle ich ein individuelles Angebot.",
        },
        {
          q: "Wie lange dauert es, bis meine Website online ist?",
          a: "Ein Starter-Projekt ist in der Regel in 2 bis 3 Wochen live, ein Business-Projekt in 3 bis 4 Wochen und ein Premium-Projekt in bis zu 6 Wochen. Die Zeit beginnt, sobald Texte, Bilder und Zugangsdaten vollständig vorliegen, und hängt davon ab, wie schnell Feedback kommt.",
        },
        {
          q: "Muss ich Texte und Bilder selbst liefern?",
          a: "Am besten kennen Sie Ihr Geschäft, deshalb liefern Sie die Inhalte. Ich helfe gern beim Formulieren und bei der Auswahl passender Bilder.",
        },
        {
          q: "Gibt es versteckte Kosten?",
          a: "Nein. Sie erhalten vorab ein Festpreis-Angebot. Zusätzliche Wünsche bespreche ich immer vorher mit Ihnen.",
        },
        {
          q: "Arbeiten Sie nur in Aachen?",
          a: "Nein. Ich sitze in Aachen, betreue Kunden aber auch bundesweit und international. Gespräche laufen bei Bedarf per Online-Meeting.",
        },
      ]}
      related={[
        { href: "/webentwicklung-aachen", label: "Webentwicklung in Aachen: individuelle Websites und Web-Apps" },
        { href: "/seo-aachen", label: "SEO in Aachen: Local SEO und Suchmaschinenoptimierung" },
      ]}
      ctaTitle="Erzählen Sie mir von Ihrem Projekt"
      ctaText="Schreiben Sie mir kurz, was Sie anbieten und was Ihre Website leisten soll. Ich melde mich in der Regel innerhalb von 24 Stunden."
      serviceName="Webdesign und Webentwicklung"
      serviceDescription="Moderne, mobiloptimierte und DSGVO-konforme Websites zum Festpreis für Selbstständige, Handwerker und kleine Unternehmen in Aachen und der Städteregion."
    />
  );
}
