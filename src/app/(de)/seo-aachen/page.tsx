import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

const TITLE = "SEO Aachen: Local SEO & Suchmaschinenoptimierung";
const DESCRIPTION =
  "SEO in Aachen für Selbstständige und kleine Unternehmen: technisch saubere Website, Local SEO und Google Unternehmensprofil. Festpreis-Pakete ab 299 €, Beratung auch online.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/seo-aachen" },
  openGraph: { type: "website", url: "/seo-aachen", title: TITLE, description: DESCRIPTION },
};

export default function SeoAachenPage() {
  return (
    <ServicePage
      path="/seo-aachen"
      breadcrumb="SEO Aachen"
      label="Suchmaschinenoptimierung"
      title="SEO in Aachen: Damit Kunden Ihre Website finden"
      intro="Eine schöne Website nützt wenig, wenn niemand sie findet. Ich baue Websites so, dass Google sie versteht, und richte die Grundlagen für lokale Suchen in Aachen und der Städteregion ein. Das Ziel: Anfragen von Menschen, die gerade nach Ihrer Leistung suchen."
      sections={[
        {
          title: "Was ich für Ihre Sichtbarkeit tue",
          paragraphs: [
            "SEO beginnt nicht erst nach dem Launch. Die meisten Fehler entstehen beim Aufbau einer Website, deshalb arbeite ich an den Grundlagen von Anfang an.",
          ],
          bullets: [
            "Schnelle Ladezeit und gute Core Web Vitals, damit die Seite auf dem Handy flüssig läuft",
            "Klare Seitenstruktur mit Titeln, Beschreibungen und Überschriften, die zu den Suchbegriffen Ihrer Kunden passen",
            "Google Unternehmensprofil, damit Sie in der lokalen Suche und auf Google Maps erscheinen",
            "Einbindung von Google Maps und Kontaktwegen, damit Besucher direkt anfragen können",
            "DSGVO-freundliche Technik ohne unnötige Tracker",
          ],
        },
        {
          title: "Für wen sich lokale SEO lohnt",
          paragraphs: [
            "Lokale SEO eignet sich für Betriebe, die vor Ort Kunden gewinnen: Handwerker, Praxen, Dienstleister, Gastronomie, Gründer und Selbstständige in Aachen, Stolberg, Würselen, Eschweiler, Herzogenrath und Umgebung. Wenn Ihre Kunden „Dienstleistung + Ort“ bei Google eingeben, entscheidet die Sichtbarkeit über die Anfrage.",
          ],
        },
        {
          title: "Was SEO realistisch bringt",
          paragraphs: [
            "Niemand kann einen Platz 1 bei Google garantieren, und seriöse Anbieter versprechen ihn auch nicht. Neue Websites brauchen Wochen bis Monate, bis sich Rankings entwickeln. Eine saubere technische Basis, ein gepflegtes Google-Profil, Bewertungen und gute Inhalte verbessern die Chancen spürbar, und lokale Suchen reagieren oft schneller als bundesweite.",
          ],
        },
        {
          title: "Welches Paket enthält SEO?",
          paragraphs: [
            "Das Business-Paket (ab 649 €) enthält Basis-SEO für Google und die Einbindung von Google Maps. Das Premium-Paket (ab 1.199 €) enthält erweiterte SEO. Das Starter-Paket (ab 299 €) ist eine einfache Visitenkarte-Website ohne SEO-Paket. Alle Preise und Leistungen finden Sie in der Paketübersicht. Besondere Wünsche bespreche ich mit Ihnen im Erstgespräch.",
          ],
        },
        {
          title: "Auch außerhalb von Aachen",
          paragraphs: [
            "Ich sitze in Aachen, betreue Kunden aber auch bundesweit und international. Erstgespräch und Abstimmung laufen bei Bedarf online.",
          ],
        },
      ]}
      faq={[
        {
          q: "Was kostet SEO in Aachen?",
          a: "Die Grundlagen sind in den Website-Paketen enthalten: Basis-SEO im Business-Paket ab 649 €, erweiterte SEO im Premium-Paket ab 1.199 €. Alle Preise sind Festpreise. Was Sie darüber hinaus brauchen, klären wir im kostenlosen Erstgespräch.",
        },
        {
          q: "Wie lange dauert es, bis meine Website bei Google erscheint?",
          a: "Google findet neue Seiten oft innerhalb weniger Tage bis Wochen. Bis sie für wichtige Suchbegriffe weit vorne stehen, dauert es meist mehrere Monate. Das hängt von Konkurrenz, Inhalten und Bewertungen ab.",
        },
        {
          q: "Können Sie mir Platz 1 bei Google garantieren?",
          a: "Nein. Kein seriöser Anbieter kann das garantieren, weil Google die Rankings selbst bestimmt. Ich sorge für eine technisch saubere, gut strukturierte Website und ein gepflegtes Google-Profil, damit Ihre Chancen steigen.",
        },
        {
          q: "Was ist der Unterschied zwischen SEO und Local SEO?",
          a: "SEO macht eine Website allgemein für Suchmaschinen verständlich. Local SEO richtet sich auf Suchen mit Ortsbezug, zum Beispiel „Elektriker Aachen“. Dafür sind das Google Unternehmensprofil, Bewertungen und konsistente Angaben zu Name, Adresse und Telefon wichtig.",
        },
        {
          q: "Arbeiten Sie nur in Aachen?",
          a: "Nein. Ich sitze in Aachen, betreue Kunden aber auch bundesweit und international. Gespräche laufen bei Bedarf per Online-Meeting.",
        },
      ]}
      ctaTitle="Lassen Sie uns über Ihre Sichtbarkeit sprechen"
      ctaText="Schreiben Sie mir kurz, was Sie anbieten und wo Ihre Kunden sitzen. Ich melde mich in der Regel innerhalb von 24 Stunden mit einer ehrlichen Einschätzung."
      related={[{ href: "/webdesign-aachen", label: "Webdesign in Aachen: Website erstellen lassen" }]}
      serviceName="Suchmaschinenoptimierung und Local SEO"
      serviceDescription="Technisch saubere Websites mit Basis-SEO, Local SEO und Google Unternehmensprofil für Selbstständige und kleine Unternehmen in Aachen und der Städteregion."
    />
  );
}
