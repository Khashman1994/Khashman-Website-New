import type { Metadata } from "next";
import Link from "next/link";
import IndustryShowcase from "@/components/IndustryShowcase";
import { alternatesFor } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const TITLE = "Website Examples by Industry: Designs for Trades, Practices & More";
const DESCRIPTION =
  "What your website could look like: design examples for tradespeople, medical practices, law firms, restaurants, real estate and more. By Khashman Webdesign from Aachen, Germany.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/beispiele", "en"),
  openGraph: { type: "website", url: "/en/examples", title: TITLE, description: DESCRIPTION },
};

export default function ExamplesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: SITE.name, item: `${SITE.url}/en` },
      { "@type": "ListItem", position: 2, name: "Examples", item: `${SITE.url}/en/examples` },
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
        <nav aria-label="Breadcrumb" className="text-sm text-fg/60">
          <Link href="/en" className="transition-colors hover:text-fg">Home</Link> <span aria-hidden="true">/</span>{" "}
          <span className="text-fg/70">Examples</span>
        </nav>
        <h1 className="mt-10 text-4xl font-semibold tracking-tight md:text-6xl">Website examples for your industry</h1>
        <p className="mt-6 text-lg leading-relaxed text-fg/60">
          See what a modern website could look like for tradespeople, medical practices, law firms, restaurants, real estate and many other
          industries. Each concept shows the features customers in that field actually use.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-fg/60">
          Please note: all examples are fictional design concepts, not websites of real clients. They show what&apos;s possible, and the example sites
          themselves are in German, as they are designed for businesses in Germany. I design your site to fit your business. Learn more about my
          services under <Link href="/en/web-design-aachen" className="text-accent-soft underline underline-offset-4">Web design in Aachen</Link>.
        </p>
      </header>

      <IndustryShowcase number="01" contactHref="/en#kontakt" lang="en" />
    </>
  );
}
