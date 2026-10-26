import Image from "next/image";
import AnimatedHero from "@/components/AnimatedHero";
import ContactForm from "@/components/ContactForm";
import { PackageLink, SpotlightCard } from "@/components/motion";
import { ProcessTimeline, Reveal, ScrollWords } from "@/components/scroll-effects";
import { getDictionary, HOME_PATH, type Dictionary, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

// Startseite für beide Sprachen – alle Texte kommen aus src/lib/dictionaries/.

/* ---------- Icons ---------- */

type IconProps = { className?: string };

function MonitorIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4M7 8l-2 2 2 2M17 8l2 2-2 2M13.5 7l-3 6" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function GaugeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 14l4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      <circle cx="12" cy="14" r="1.5" />
    </svg>
  );
}

function SparkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.81-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.9.99 6.7 2.78a9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.48 9.46zm8.06-17.53A11.33 11.33 0 0 0 12.04.63C5.76.63.65 5.74.65 12.02c0 2.01.52 3.97 1.52 5.69L.55 23.6l6.04-1.58a11.35 11.35 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05z" />
    </svg>
  );
}

function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

/* ---------- Bento-Raster der Leistungen (Reihenfolge wie im Wörterbuch) ---------- */

const SERVICE_LAYOUT = [
  { icon: MonitorIcon, className: "md:col-span-2" },
  { icon: ShieldIcon, className: "md:row-span-2" },
  { icon: GaugeIcon, className: "" },
  { icon: SparkIcon, className: "" },
];

/* ---------- Bausteine ---------- */

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm text-fg/50">
      <span className="font-mono text-accent">{number}</span>
      <span className="h-px w-8 bg-fg/20" />
      {children}
    </p>
  );
}

/* Überschrift mit einem kursiven Akzentwort, z. B. "Alles für Ihren *digitalen* Auftritt" */
function SerifTitle({ before, serif, after }: { before: string; serif: string; after: string }) {
  return (
    <>
      {before}
      <span className="font-serif font-normal italic text-accent-soft">{serif}</span>
      {after}
    </>
  );
}

/* ---------- Strukturierte Daten (JSON-LD) für Google ---------- */

function buildJsonLd(locale: Locale, t: Dictionary) {
  const pageUrl = locale === "de" ? SITE.url : `${SITE.url}${HOME_PATH[locale]}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#business`,
        name: SITE.name,
        description: t.meta.description,
        url: pageUrl,
        // Statisches Bild: Die OG-Bilder liegen in Routengruppen und bekommen einen Hash im Pfad
        image: `${SITE.url}/hero-poster.jpg`,
        email: SITE.email,
        telephone: SITE.phoneE164,
        priceRange: "299 € – 1.199 €",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: "DE",
        },
        areaServed: [
          { "@type": "City", name: "Aachen" },
          { "@type": "AdministrativeArea", name: "StädteRegion Aachen" },
          { "@type": "Country", name: t.jsonLd.country },
        ],
        founder: { "@type": "Person", name: SITE.owner, jobTitle: t.jsonLd.jobTitle },
        knowsAbout: t.jsonLd.knowsAbout,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.jsonLd.catalogName,
          itemListElement: t.pricing.packages.map((pkg) => ({
            "@type": "Offer",
            name: `${t.jsonLd.offerPrefix} ${pkg.name}`,
            description: pkg.features.join(", "),
            price: pkg.amount,
            priceCurrency: "EUR",
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        url: pageUrl,
        name: SITE.name,
        inLanguage: t.jsonLd.language,
        publisher: { "@id": `${SITE.url}/#business` },
      },
      {
        "@type": "FAQPage",
        inLanguage: t.jsonLd.language,
        mainEntity: t.faq.items.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
}

/* ---------- Seite ---------- */

export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const jsonLd = buildJsonLd(locale, t);

  return (
    <>
      <script
        type="application/ld+json"
        // "<" maskieren, damit kein Inhalt aus dem Script-Tag ausbrechen kann
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <AnimatedHero t={t.hero} />

      {/* Laufband */}
      <section aria-label={t.marqueeLabel} className="border-y border-fg/10 py-6">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center motion-reduce:animate-none">
            {[...t.marquee, ...t.marquee].map((item, i) => (
              <span key={i} className="flex items-center gap-8 pr-8 text-2xl font-medium tracking-tight text-fg/40 md:text-4xl">
                {item}
                <span className="text-accent" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:py-44">
        <SectionLabel number="00">{t.statement.label}</SectionLabel>
        <ScrollWords
          className="mt-8 text-3xl font-medium leading-[1.2] tracking-tight md:text-5xl"
          text={t.statement.text}
        />
      </section>

      {/* Leistungen – Bento-Grid */}
      <section id="leistungen" className="mx-auto max-w-6xl px-6 pb-32">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel number="01">{t.services.label}</SectionLabel>
            <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
              <SerifTitle {...t.services.title} />
            </h2>
          </div>
          <p className="max-w-sm text-fg/50">{t.services.sub}</p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {t.services.items.map(({ title, text, tags }, i) => {
            const { icon: Icon, className } = SERVICE_LAYOUT[i];
            return (
            <Reveal key={title} delay={i * 0.08} className={className}>
              <SpotlightCard className="h-full transition-transform duration-500 hover:-translate-y-1">
                <div className="flex h-full flex-col p-8">
                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-fg/10 bg-fg/5 text-accent-soft transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-fg/55">{text}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-fg/10 px-3 py-1 text-xs text-fg/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
            );
          })}
        </div>
      </section>

      {/* Prozess */}
      <section id="prozess" className="border-t border-fg/10 bg-ink-900/50">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <Reveal className="mb-20 text-center">
            <div className="flex justify-center">
              <SectionLabel number="02">{t.process.label}</SectionLabel>
            </div>
            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              <SerifTitle {...t.process.title} />
            </h2>
          </Reveal>

          <ProcessTimeline>
            <ol className="space-y-16 md:space-y-24">
              {t.process.steps.map((step, i) => (
                <li key={step.title} className="relative grid gap-4 pl-16 md:grid-cols-2 md:gap-24 md:pl-0">
                  <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-fg/15 bg-ink-950 font-mono text-sm text-accent-soft md:left-1/2 md:-translate-x-1/2">
                    0{i + 1}
                  </span>
                  <Reveal className={i % 2 === 0 ? "md:text-right" : "md:order-2"}>
                    <p className="font-mono text-sm text-fg/40">{step.time}</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight">{step.title}</h3>
                  </Reveal>
                  <Reveal delay={0.1} className={i % 2 === 0 ? "" : "md:order-1 md:text-right"}>
                    <p className="text-lg leading-relaxed text-fg/55">{step.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </ProcessTimeline>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="border-t border-fg/10">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-32 md:grid-cols-[2fr_3fr]">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="glow-hero absolute -inset-16" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-fg/10">
              <Image
                src="/khashman.jpeg"
                alt={t.about.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover object-top grayscale-[30%] transition-[filter] duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-6">
                <p className="text-sm text-fg/70">{SITE.owner}</p>
                <p className="text-xs text-fg/40">{t.about.role} · {SITE.city}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel number="03">{t.about.label}</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              <SerifTitle {...t.about.title} />
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-fg/60">{t.about.text}</p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-fg/10 pt-8">
              {t.about.facts.map((fact) => (
                <div key={fact.term}>
                  <dt className="text-sm text-fg/40">{fact.term}</dt>
                  <dd className="mt-1 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="relative border-t border-fg/10">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-40 h-[40rem] w-[70rem] max-w-full -translate-x-1/2 glow-accent" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <Reveal className="mx-auto mb-20 max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel number="04">{t.pricing.label}</SectionLabel>
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              <SerifTitle {...t.pricing.title} />
            </h2>
            <p className="mt-6 text-fg/50">{t.pricing.sub}</p>
          </Reveal>

          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {t.pricing.packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.1} className={pkg.highlighted ? "lg:-my-6" : ""}>
                <div
                  className={`relative h-full rounded-3xl p-px ${
                    pkg.highlighted ? "bg-gradient-to-b from-accent via-violet/60 to-fg/10" : "bg-fg/10"
                  }`}
                >
                  <div className={`flex h-full flex-col rounded-[calc(1.5rem-1px)] p-8 ${pkg.highlighted ? "bg-ink-800 lg:py-12" : "bg-ink-900"}`}>
                    {pkg.highlighted && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-violet px-4 py-1 text-xs font-medium uppercase tracking-wider text-white shadow-lg shadow-accent/30">
                        {t.pricing.popular}
                      </span>
                    )}

                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                    <p className="text-sm text-fg/40">{pkg.subtitle}</p>

                    <div className="mt-8 flex items-baseline gap-2">
                      <span className="text-6xl font-semibold tracking-tighter">{pkg.price}</span>
                      <span className="text-sm text-fg/40">{t.pricing.oneTime}</span>
                    </div>
                    <p className="mt-2 text-sm text-accent-soft">
                      {pkg.monthly} <span className="text-fg/40">({pkg.monthlyNote})</span>
                    </p>

                    <p className="mt-6 rounded-2xl border border-fg/5 bg-fg/[0.03] px-4 py-3 text-sm text-fg/60">
                      <span className="font-medium text-fg/80">{t.pricing.idealFor}</span> {pkg.idealFor}
                    </p>

                    <ul className="mt-8 flex-1 space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm text-fg/70">
                          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <PackageLink
                      value={pkg.value}
                      className={`mt-10 rounded-full px-6 py-3.5 text-center font-medium transition-colors duration-300 ${
                        pkg.highlighted
                          ? "bg-fg text-ink-950 hover:bg-accent hover:text-white"
                          : "border border-fg/15 text-fg hover:border-fg hover:bg-fg hover:text-ink-950"
                      }`}
                    >
                      {pkg.cta}
                    </PackageLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-16 text-center text-sm text-fg/40">{t.pricing.note}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-fg/10">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-32 md:grid-cols-[2fr_3fr]">
          <Reveal>
            <SectionLabel number="05">{t.faq.label}</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              <SerifTitle {...t.faq.title} />
            </h2>
            <p className="mt-6 text-fg/50">{t.faq.sub}</p>
          </Reveal>

          <Reveal delay={0.1} className="divide-y divide-fg/10 border-y border-fg/10">
            {t.faq.items.map((faq) => (
              <details key={faq.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {faq.q}
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fg/15 transition-colors group-open:border-accent group-open:bg-accent" aria-hidden="true">
                    <span className="absolute h-px w-3 bg-fg group-open:bg-white" />
                    <span className="absolute h-3 w-px bg-fg group-open:bg-white transition-transform duration-300 group-open:rotate-90 group-open:scale-0" />
                  </span>
                </summary>
                <p className="mt-4 max-w-xl leading-relaxed text-fg/55">{faq.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="relative overflow-hidden border-t border-fg/10">
        <div aria-hidden="true" className="pointer-events-none absolute -left-60 top-0 h-[44rem] w-[44rem] glow-violet" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <Reveal className="mb-20">
            <SectionLabel number="06">{t.contact.label}</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              {t.contact.titleLine} <br />
              <span className="text-gradient font-serif font-normal italic">{t.contact.titleSerif}</span>
            </h2>
          </Reveal>

          <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr]">
            <Reveal className="flex flex-col gap-4">
              <p className="mb-4 text-fg/55">{t.contact.intro}</p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-fg/10 bg-fg/[0.03] p-5 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-medium">{t.contact.whatsapp}</span>
                  <span className="block text-sm text-fg/50">{SITE.whatsappDisplay}</span>
                </span>
              </a>

              <a
                href={SITE.phoneUrl}
                className="group flex items-center gap-4 rounded-3xl border border-fg/10 bg-fg/[0.03] p-5 transition-colors hover:border-accent/50 hover:bg-accent/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-white">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-medium">{t.contact.call}</span>
                  <span className="block text-sm text-fg/50">{SITE.phoneDisplay}</span>
                </span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-4 rounded-3xl border border-fg/10 bg-fg/[0.03] p-5 transition-colors hover:border-accent/50 hover:bg-accent/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-fg text-ink-950">
                  <MailIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-medium">{t.contact.email}</span>
                  <span className="block text-sm text-fg/50">{SITE.email}</span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm locale={locale} t={t.form} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
