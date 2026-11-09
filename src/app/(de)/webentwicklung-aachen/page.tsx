import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

const TITLE = "Webentwicklung Aachen: Individuelle Websites & Web-Apps";
const DESCRIPTION =
  "Webentwicklung in Aachen: Individuell programmierte Websites mit Next.js und React, Kontaktformular, Terminbuchung, Online-Shop und Chat-Funktionen. Schnell, sicher, DSGVO-konform, persönlich betreut.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/webentwicklung-aachen" },
  openGraph: { type: "website", url: "/webentwicklung-aachen", title: TITLE, description: DESCRIPTION },
};

export default function WebentwicklungAachenPage() {
  return (
    <ServicePage
      path="/webentwicklung-aachen"
      breadcrumb="Webentwicklung Aachen"
      label="Webentwicklung"
      title="Webentwicklung in Aachen: individuell programmiert statt Baukasten"
      intro="Wenn Ihre Website mehr können soll als ein Baukasten erlaubt, programmiere ich sie für Sie: schnell, sicher und genau auf Ihren Betrieb zugeschnitten. Ich entwickle für Selbstständige, Handwerker und kleine Unternehmen aus Aachen und der Region, und Sie sprechen direkt mit mir."
      sections={[
        {
          title: "Was ich entwickle",
          bullets: [
            "Firmenwebsites mit modernem Aufbau, die auf Handy und Desktop schnell laden",
            "Kontaktformulare mit Datenbank-Speicherung und E-Mail-Benachrichtigung",
            "Online-Terminbuchung und Anfrage-Strecken für Dienstleister",
            "Online-Shops für kleine Sortimente",
            "Chat-Funktionen mit häufigen Fragen, auf Wunsch ein KI-Assistent für Ihre Website",
            "Anbindung externer Dienste wie Google Maps, WhatsApp oder Kalender",
          ],
        },
        {
          title: "Technik, die für Sie arbeitet",
          paragraphs: [
            "Ich arbeite mit modernen Werkzeugen wie Next.js und React. Das sorgt für kurze Ladezeiten, saubere Technik für Google und eine Basis, die sich später erweitern lässt. Schnelle Seiten werden von Besuchern und von Suchmaschinen besser bewertet. Auf Wunsch übernehme ich Hosting, Updates und Backups.",
          ],
        },
        {
          title: "Von der Idee bis zum Launch",
          bullets: [
            "Erstgespräch: Wir klären Ziel, Umfang und Budget, kostenlos und unverbindlich",
            "Festpreis-Angebot: Sie wissen vorab, was es kostet",
            "Entwicklung in Etappen: Sie sehen früh Zwischenstände und geben Feedback",
            "Launch und Betreuung: Test, Livegang und auf Wunsch laufende Pflege",
          ],
        },
        {
          title: "Preise und Pakete",
          paragraphs: [
            "Die meisten Projekte passen in eines meiner drei Pakete: Starter ab 599 €, Business ab 1.199 € und Premium ab 1.999 €. Für Sonderfunktionen erstelle ich ein individuelles Festpreis-Angebot. Hosting und Pflege sind optional.",
          ],
        },
        {
          title: "Persönlich und auch online",
          paragraphs: [
            "Ich bin Khashman, Student der Software-Entwicklung an der FH Aachen. Ich sitze in Aachen, betreue Kunden aber auch bundesweit und international. Gespräche und Abstimmung laufen bei Bedarf per Online-Meeting.",
          ],
        },
      ]}
      faq={[
        {
          q: "Was ist der Unterschied zwischen Webdesign und Webentwicklung?",
          a: "Webdesign beschreibt Gestaltung und Aufbau Ihrer Website, Webentwicklung die technische Umsetzung dahinter. Bei mir bekommen Sie beides aus einer Hand: ein Design, das zu Ihnen passt, und saubere Technik.",
        },
        {
          q: "Warum individuell programmieren statt Baukasten?",
          a: "Individuell entwickelte Websites laden meist schneller, sind flexibler erweiterbar und gehören ganz Ihnen. Sie sind nicht an die Grenzen eines Baukastens oder dessen Preismodell gebunden.",
        },
        {
          q: "Was kostet individuelle Webentwicklung in Aachen?",
          a: "Die meisten Projekte decken meine Pakete ab, ab 599 € bis ab 1.999 €. Für besondere Funktionen wie Buchungssysteme oder Shops erstelle ich ein Festpreis-Angebot nach dem Erstgespräch.",
        },
        {
          q: "Kann ich meine Website später selbst erweitern lassen?",
          a: "Ja. Die Technik ist so aufgebaut, dass neue Seiten und Funktionen später ergänzt werden können, von mir oder einem anderen Entwickler.",
        },
        {
          q: "Arbeiten Sie nur in Aachen?",
          a: "Nein. Ich betreue Kunden bundesweit und international. Gespräche laufen bei Bedarf per Online-Meeting.",
        },
      ]}
      related={[
        { href: "/webdesign-aachen", label: "Webdesign in Aachen: Website erstellen lassen" },
        { href: "/seo-aachen", label: "SEO in Aachen: Local SEO und Suchmaschinenoptimierung" },
      ]}
      ctaTitle="Erzählen Sie mir, was Ihre Website können soll"
      ctaText="Schreiben Sie mir kurz Ihr Vorhaben. Ich melde mich in der Regel innerhalb von 24 Stunden."
      serviceName="Webentwicklung"
      serviceDescription="Individuell programmierte Websites und Web-Anwendungen mit Next.js und React für Selbstständige, Handwerker und kleine Unternehmen in Aachen und der Städteregion."
    />
  );
}
