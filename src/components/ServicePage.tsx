import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import { SITE } from "@/lib/site";

// Gemeinsame Vorlage für Leistungsseiten (z. B. /seo-aachen). Reiner Server-Code, keine Animation.

export type ServiceSection = { title: string; paragraphs?: string[]; bullets?: string[] };
export type ServiceFaq = { q: string; a: string };

export type ServicePageProps = {
  path: string; // z. B. "/seo-aachen"
  label: string;
  title: string;
  intro: string;
  sections: ServiceSection[];
  faq: ServiceFaq[];
  ctaTitle: string;
  ctaText: string;
  breadcrumb: string;
  serviceName: string;
  serviceDescription: string;
};

export default function ServicePage(props: ServicePageProps) {
  const url = `${SITE.url}${props.path}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: props.serviceName,
      description: props.serviceDescription,
      url,
      serviceType: props.serviceName,
      provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url, telephone: SITE.phoneE164, email: SITE.email },
      areaServed: [
        { "@type": "City", name: "Aachen" },
        { "@type": "AdministrativeArea", name: "StädteRegion Aachen" },
        { "@type": "Country", name: "Deutschland" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: props.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: props.breadcrumb, item: url },
      ],
    },
  ];

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:pt-44">
      <script
        type="application/ld+json"
        // "<" maskieren, damit kein Inhalt aus dem Script-Tag ausbrechen kann
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <nav aria-label="Brotkrumen" className="text-sm text-fg/50">
        <Link href="/" className="transition-colors hover:text-fg">Startseite</Link> <span aria-hidden="true">/</span>{" "}
        <span className="text-fg/70">{props.breadcrumb}</span>
      </nav>

      <p className="mt-10 text-sm text-fg/50">{props.label}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">{props.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-fg/60">{props.intro}</p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <MagneticButton href="/#kontakt" variant="primary">Kostenloses Erstgespräch</MagneticButton>
        <MagneticButton href="/#preise" variant="outline">Pakete ansehen</MagneticButton>
      </div>

      <div className="mt-16 space-y-12">
        {props.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{section.title}</h2>
            {section.paragraphs?.map((text) => (
              <p key={text} className="mt-4 leading-relaxed text-fg/60">{text}</p>
            ))}
            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-fg/60">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Häufige Fragen</h2>
          <div className="mt-4 divide-y divide-fg/10 border-y border-fg/10">
            {props.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="text-fg/40 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-fg/60">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-fg/10 bg-fg/[0.03] p-8">
          <h2 className="text-2xl font-semibold tracking-tight">{props.ctaTitle}</h2>
          <p className="mt-3 leading-relaxed text-fg/60">{props.ctaText}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="/#kontakt" variant="primary">Anfrage senden</MagneticButton>
            <MagneticButton href={SITE.whatsappUrl} variant="outline">WhatsApp schreiben</MagneticButton>
          </div>
        </section>
      </div>
    </article>
  );
}
