import type { Metadata } from "next";
import Link from "next/link";
import IndustryShowcase from "@/components/IndustryShowcase";
import { SITE } from "@/lib/site";

const TITLE = "Website-Beispiele für Branchen: Designs für Handwerk, Praxen & mehr";
const DESCRIPTION =
  "So kann Ihre Website aussehen: Design-Beispiele für Handwerker, Praxen, Kanzleien, Gastronomie, Immobilien und mehr. Von Khashman Webdesign aus Aachen.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/beispiele" },
  openGraph: { type: "website", url: "/beispiele", title: TITLE, description: DESCRIPTION },
};

export default function BeispielePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Beispiele", item: `${SITE.url}/beispiele` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // "<" maskieren, damit kein Inhalt aus dem Script-Tag ausbrechen kann
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="mx-auto max-w-3xl px-6 pt-36 md:pt-44">
        <nav aria-label="Brotkrumen" className="text-sm text-fg/50">
          <Link href="/" className="transition-colors hover:text-fg">Startseite</Link> <span aria-hidden="true">/</span>{" "}
          <span className="text-fg/70">Beispiele</span>
        </nav>
        <h1 className="mt-10 text-4xl font-semibold tracking-tight md:text-6xl">Website-Beispiele für Ihre Branche</h1>
        <p className="mt-6 text-lg leading-relaxed text-fg/60">
          Hier sehen Sie, wie eine moderne Website für Handwerker, Praxen, Kanzleien, Gastronomie, Immobilien und viele weitere Branchen aussehen kann.
          Jedes Konzept zeigt die Funktionen, die Kunden in dem jeweiligen Bereich wirklich nutzen.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-fg/50">
          Wichtig: Alle Beispiele sind fiktive Design-Konzepte, keine Webseiten echter Kunden. Sie zeigen, was möglich ist. Ihre Seite gestalte ich passend zu
          Ihrem Betrieb. Mehr zu meinem Angebot finden Sie unter <Link href="/webdesign-aachen" className="text-accent-soft underline underline-offset-4">Webdesign in Aachen</Link>.
        </p>
      </header>

      <IndustryShowcase number="01" contactHref="/#kontakt" />
    </>
  );
}
