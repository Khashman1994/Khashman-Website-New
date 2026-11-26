import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import PrefillLink from "@/components/PrefillLink";
import { HOME_PATH, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

// Seite „KI-Automatisierung“ für beide Sprachen. Die Texte kommen aus den Seiten-Dateien
// (src/app/(de)/ki-automatisierung und src/app/(en)/en/ai-automation).

type Card = { title: string; text: string };
type Faq = { q: string; a: string };

export type AutomationContent = {
  path: string;
  description: string;
  prefill: string;
  ui: {
    home: string;
    breadcrumb: string;
    breadcrumbLabel: string;
    whatsapp: string;
    serviceName: string;
    serviceType: string;
    country: string;
  };
  hero: { label: string; before: string; serif: string; after: string; text: string; cta: string; secondary: string };
  problems: { label: string; title: string; items: Card[] };
  flow: { label: string; title: string; items: { step: string; text: string }[] };
  solutions: { label: string; title: string; items: Card[]; boxTitle: string; boxText: string; boxCta: string };
  steps: { label: string; title: string; items: Card[] };
  trust: Card[];
  faq: { title: string; items: Faq[] };
  related: { label: string; links: { href: string; label: string }[] };
  closing: { title: string; text: string; cta: string };
};

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-accent-soft">{children}</p>;
}

function CtaButton({ href, message, children }: { href: string; message: string; children: React.ReactNode }) {
  return (
    <PrefillLink
      href={href}
      message={message}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-7 py-4 font-medium text-ink-950 transition-colors duration-300 hover:bg-accent hover:text-white"
    >
      {children}
      <span aria-hidden="true">→</span>
    </PrefillLink>
  );
}

export default function AutomationPage({ locale, c }: { locale: Locale; c: AutomationContent }) {
  const home = HOME_PATH[locale];
  const contactHref = `${home === "/" ? "/" : home}#kontakt`;
  const url = `${SITE.url}${c.path}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.ui.serviceName,
      description: c.description,
      url,
      serviceType: c.ui.serviceType,
      provider: { "@type": "ProfessionalService", "@id": `${SITE.url}/#business`, name: SITE.name, url: SITE.url, telephone: SITE.phoneE164, email: SITE.email },
      areaServed: [
        { "@type": "City", name: "Aachen" },
        { "@type": "AdministrativeArea", name: "StädteRegion Aachen" },
        { "@type": "Country", name: c.ui.country },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: home === "/" ? SITE.url : `${SITE.url}${home}` },
        { "@type": "ListItem", position: 2, name: c.ui.breadcrumbLabel, item: url },
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

      <nav aria-label={c.ui.breadcrumb} className="text-sm text-fg/60">
        <Link href={home} className="transition-colors hover:text-fg">{c.ui.home}</Link> <span aria-hidden="true">/</span>{" "}
        <span className="text-fg/70">{c.ui.breadcrumbLabel}</span>
      </nav>

      {/* Hero */}
      <header className="mt-10 max-w-3xl">
        <Label>{c.hero.label}</Label>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          {c.hero.before}
          <span className="font-serif font-normal italic text-accent-soft">{c.hero.serif}</span>
          {c.hero.after}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-fg/60">{c.hero.text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CtaButton href={contactHref} message={c.prefill}>{c.hero.cta}</CtaButton>
          <MagneticButton href="#loesungen" variant="outline">{c.hero.secondary}</MagneticButton>
        </div>
      </header>

      {/* Probleme */}
      <section className="mt-28">
        <Label>{c.problems.label}</Label>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{c.problems.title}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {c.problems.items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-fg/10 bg-fg/[0.03] p-7">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-fg/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="mt-28">
        <Label>{c.flow.label}</Label>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{c.flow.title}</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {c.flow.items.map((item, i) => (
            <li key={item.step} className="relative rounded-3xl border border-fg/10 p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/15 font-mono text-sm text-accent-soft">
                0{i + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold">{item.step}</h3>
              <p className="mt-2 text-fg/60">{item.text}</p>
              {i < c.flow.items.length - 1 && (
                <span aria-hidden="true" className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-accent md:block">→</span>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Lösungen */}
      <section id="loesungen" className="mt-28 scroll-mt-32">
        <Label>{c.solutions.label}</Label>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{c.solutions.title}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {c.solutions.items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-fg/10 bg-fg/[0.03] p-8">
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-fg/60">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-accent/20 via-violet/10 to-transparent p-px">
          <div className="rounded-[calc(1.5rem-1px)] bg-ink-900 p-8 md:p-12">
            <h3 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">{c.solutions.boxTitle}</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-fg/60">{c.solutions.boxText}</p>
            <div className="mt-8">
              <CtaButton href={contactHref} message={c.prefill}>{c.solutions.boxCta}</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="mt-28">
        <Label>{c.steps.label}</Label>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{c.steps.title}</h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {c.steps.items.map((item, i) => (
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
        {c.trust.map((item) => (
          <div key={item.title}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg/60">{item.text}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mt-28 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{c.faq.title}</h2>
        <div className="mt-6 divide-y divide-fg/10 border-y border-fg/10">
          {c.faq.items.map((item) => (
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
        {c.related.label}{" "}
        {c.related.links.map((link, i) => (
          <span key={link.href}>
            {i > 0 && " · "}
            <Link href={link.href} className="text-accent-soft underline-offset-4 hover:underline">{link.label}</Link>
          </span>
        ))}
      </p>

      {/* Abschluss */}
      <section className="mt-16 rounded-3xl border border-fg/10 bg-fg/[0.03] p-8 md:p-12">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{c.closing.title}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-fg/60">{c.closing.text}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaButton href={contactHref} message={c.prefill}>{c.closing.cta}</CtaButton>
          <MagneticButton href={SITE.whatsappUrl} variant="outline">{c.ui.whatsapp}</MagneticButton>
        </div>
      </section>
    </article>
  );
}
