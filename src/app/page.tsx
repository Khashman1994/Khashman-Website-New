import Image from "next/image";
import AnimatedHero from "@/components/AnimatedHero";
import ContactForm from "@/components/ContactForm";
import { PackageLink, SpotlightCard } from "@/components/motion";
import { ProcessTimeline, Reveal, ScrollWords } from "@/components/scroll-effects";
import { SITE } from "@/lib/site";

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

/* ---------- Daten ---------- */

const marqueeItems = ["Webdesign", "Entwicklung", "Local SEO", "Hosting", "Performance", "DSGVO-konform", "Online-Shops", "Terminbuchung"];

const services = [
  {
    icon: MonitorIcon,
    title: "Moderne Webseiten",
    text: "Responsive One-Pager und Mehrseiter mit sauberer Architektur – schnell, wartbar und auf jedem Gerät pixelgenau.",
    tags: ["One-Pager", "Mehrseiter", "Responsive"],
    className: "md:col-span-2",
  },
  {
    icon: ShieldIcon,
    title: "Wartung & Hosting",
    text: "Regelmäßige Updates, tägliche Backups, SSL-Verschlüsselung und DSGVO-Sicherheit – Sie müssen sich um nichts kümmern.",
    tags: ["Updates", "Backups", "SSL"],
    className: "md:row-span-2",
  },
  {
    icon: GaugeIcon,
    title: "Local SEO & Performance",
    text: "Google Unternehmensprofil, Ladezeitoptimierung und Core Web Vitals – damit Kunden aus Ihrer Region Sie zuerst finden.",
    tags: ["Google", "Core Web Vitals"],
    className: "",
  },
  {
    icon: SparkIcon,
    title: "Design mit Wirkung",
    text: "Animationen, klare Typografie und eine Bildsprache, die Ihre Marke hochwertig wirken lässt.",
    tags: ["UI", "Motion", "Branding"],
    className: "",
  },
];

const steps = [
  { title: "Erstgespräch", text: "Kostenlos und unverbindlich: Wir klären Ziele, Zielgruppe und Umfang. Danach erhalten Sie ein Festpreis-Angebot.", time: "Tag 1" },
  { title: "Konzept & Design", text: "Ich entwerfe Struktur und Design Ihrer Seite. Sie geben Feedback, bis alles passt.", time: "Woche 1" },
  { title: "Entwicklung", text: "Umsetzung mit modernster Technik – schnell, sicher, mobiloptimiert und suchmaschinenfreundlich.", time: "Woche 2–3" },
  { title: "Launch & Betreuung", text: "Ihre Seite geht live. Hosting, Updates und Backups übernehme ich – Sie konzentrieren sich auf Ihr Geschäft.", time: "Laufend" },
];

const packages = [
  {
    value: "starter",
    name: "Starter",
    subtitle: "Visitenkarte",
    price: "299 €",
    monthly: "+ 29 € / Monat",
    monthlyNote: "Hosting & Wartung",
    idealFor: "Lokale Dienstleister, Handwerker, Gründer",
    features: [
      "1 moderne One-Page Website",
      "Voll mobiloptimiert",
      "WhatsApp- & Kontaktformular",
      "Inkl. 1x .de-Domain & SSL",
      "Monatliche Sicherheitsupdates & Backups",
      "DSGVO-konform",
    ],
    cta: "Starter wählen",
    highlighted: false,
  },
  {
    value: "business",
    name: "Business",
    subtitle: "Für wachsende Betriebe",
    price: "649 €",
    monthly: "+ 39 € / Monat",
    monthlyNote: "Hosting & Pflege",
    idealFor: "Etablierte Betriebe, die mehrere Leistungen präsentieren wollen",
    features: [
      "Bis zu 5 Unterseiten",
      "Alles aus Starter",
      "Basis-SEO für Google",
      "Google Maps Integration",
      "30 Min. Inhaltspflege / Monat inklusive",
      "1 Feedback- & Revisionsrunde",
    ],
    cta: "Business wählen",
    highlighted: true,
  },
  {
    value: "premium",
    name: "Premium",
    subtitle: "All-in-One",
    price: "1.199 €",
    monthly: "+ 49 € / Monat",
    monthlyNote: "Hosting & Pflege",
    idealFor: "Unternehmen mit Shop, Terminbuchung oder großem Angebot",
    features: [
      "Bis zu 10 Unterseiten oder Online-Shop / Terminbuchung",
      "Erweiterte SEO",
      "Prioritäts-Support",
      "60 Min. Inhaltspflege / Monat inklusive",
      "2 Feedbackrunden",
    ],
    cta: "Premium besprechen",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Wie lange dauert es, bis meine Website online ist?",
    a: "Ein Starter-Projekt ist in der Regel in 1–2 Wochen live, Business- und Premium-Projekte in 2–4 Wochen – abhängig davon, wie schnell Inhalte und Feedback vorliegen.",
  },
  {
    q: "Was ist in der monatlichen Gebühr enthalten?",
    a: "Hosting, SSL-Zertifikat, Domain, Sicherheitsupdates und Backups. Bei Business und Premium zusätzlich Inhaltspflege – Sie schicken mir Änderungen, ich setze sie um.",
  },
  {
    q: "Muss ich Texte und Bilder selbst liefern?",
    a: "Am besten kennen Sie Ihr Geschäft – deshalb liefern Sie die Inhalte. Ich helfe gern beim Formulieren und beim Auswählen passender Bilder.",
  },
  {
    q: "Gibt es versteckte Kosten?",
    a: "Nein. Sie erhalten vorab ein Festpreis-Angebot. Zusätzliche Wünsche bespreche ich immer vorher mit Ihnen.",
  },
  {
    q: "Kann ich später ein größeres Paket wählen?",
    a: "Ja, jederzeit. Ihre Website wächst mit Ihrem Unternehmen – der bereits gezahlte Betrag wird dabei fair berücksichtigt.",
  },
];

/* ---------- Bausteine ---------- */

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm text-white/50">
      <span className="font-mono text-accent">{number}</span>
      <span className="h-px w-8 bg-white/20" />
      {children}
    </p>
  );
}

/* ---------- Strukturierte Daten (JSON-LD) für Google ---------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      description: SITE.description,
      url: SITE.url,
      image: `${SITE.url}/opengraph-image`,
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
        { "@type": "Country", name: "Deutschland" },
      ],
      founder: { "@type": "Person", name: SITE.owner, jobTitle: "Webentwickler" },
      knowsAbout: ["Webdesign", "Webentwicklung", "Local SEO", "Webhosting", "Online-Shops"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Webdesign-Pakete",
        itemListElement: packages.map((pkg) => ({
          "@type": "Offer",
          name: `Website-Paket ${pkg.name}`,
          description: pkg.features.join(", "),
          price: pkg.price.replace(/[^\d,]/g, "").replace(",", "."),
          priceCurrency: "EUR",
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE.url}/#business` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

/* ---------- Seite ---------- */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // "<" maskieren, damit kein Inhalt aus dem Script-Tag ausbrechen kann
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <AnimatedHero />

      {/* Laufband */}
      <section aria-label="Schwerpunkte" className="border-y border-white/10 py-6">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center motion-reduce:animate-none">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8 pr-8 text-2xl font-medium tracking-tight text-white/40 md:text-4xl">
                {item}
                <span className="text-accent" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="mx-auto max-w-6xl px-6 py-32 md:py-44">
        <SectionLabel number="00">Mein Ansatz</SectionLabel>
        <ScrollWords
          className="mt-8 text-3xl font-medium leading-[1.2] tracking-tight md:text-5xl"
          text="Ihre Website ist oft der erste Eindruck, den Kunden von Ihnen bekommen. Ich sorge dafür, dass er hängen bleibt – mit Design, das überzeugt, und Technik, die einfach funktioniert."
        />
      </section>

      {/* Leistungen – Bento-Grid */}
      <section id="leistungen" className="mx-auto max-w-6xl px-6 pb-32">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel number="01">Leistungen</SectionLabel>
            <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
              Alles für Ihren <span className="font-serif font-normal italic text-accent-soft">digitalen</span> Auftritt
            </h2>
          </div>
          <p className="max-w-sm text-white/50">
            Von der ersten Idee bis zum laufenden Betrieb – aus einer Hand und mit klaren Zuständigkeiten.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {services.map(({ icon: Icon, title, text, tags, className }, i) => (
            <Reveal key={title} delay={i * 0.08} className={className}>
              <SpotlightCard className="h-full transition-transform duration-500 hover:-translate-y-1">
                <div className="flex h-full flex-col p-8">
                  <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent-soft transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-white/55">{text}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Prozess */}
      <section id="prozess" className="border-t border-white/10 bg-ink-900/50">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <Reveal className="mb-20 text-center">
            <div className="flex justify-center">
              <SectionLabel number="02">Prozess</SectionLabel>
            </div>
            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              In vier Schritten <span className="font-serif font-normal italic text-accent-soft">online</span>
            </h2>
          </Reveal>

          <ProcessTimeline>
            <ol className="space-y-16 md:space-y-24">
              {steps.map((step, i) => (
                <li key={step.title} className="relative grid gap-4 pl-16 md:grid-cols-2 md:gap-24 md:pl-0">
                  <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink-950 font-mono text-sm text-accent-soft md:left-1/2 md:-translate-x-1/2">
                    0{i + 1}
                  </span>
                  <Reveal className={i % 2 === 0 ? "md:text-right" : "md:order-2"}>
                    <p className="font-mono text-sm text-white/40">{step.time}</p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight">{step.title}</h3>
                  </Reveal>
                  <Reveal delay={0.1} className={i % 2 === 0 ? "" : "md:order-1 md:text-right"}>
                    <p className="text-lg leading-relaxed text-white/55">{step.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </ProcessTimeline>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-32 md:grid-cols-[2fr_3fr]">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="glow-hero absolute -inset-16" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/khashman.jpeg"
                alt="Khashman Alturki – Gründer von Khashman Webdesign"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover object-top grayscale-[30%] transition-[filter] duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-6">
                <p className="text-sm text-white/70">{SITE.owner}</p>
                <p className="text-xs text-white/40">Gründer · {SITE.city}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionLabel number="03">Über mich</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Kein Agentur-<span className="font-serif font-normal italic text-accent-soft">Wasserkopf.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/60">
              Ich bin Khashman, Student der Software-Entwicklung an der FH Aachen. Ich verbinde fundiertes
              Software-Engineering mit persönlicher Betreuung auf Augenhöhe: transparente Festpreise, direkte
              Kommunikation und eine Umsetzung, die sich sehen lassen kann.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-sm text-white/40">Ansprechpartner</dt>
                <dd className="mt-1 font-medium">Direkt &amp; persönlich</dd>
              </div>
              <div>
                <dt className="text-sm text-white/40">Preise</dt>
                <dd className="mt-1 font-medium">Feste Pakete</dd>
              </div>
              <div>
                <dt className="text-sm text-white/40">Antwort</dt>
                <dd className="mt-1 font-medium">Innerhalb 24 h</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="relative border-t border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-40 h-[40rem] w-[70rem] max-w-full -translate-x-1/2 glow-accent" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <Reveal className="mx-auto mb-20 max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel number="04">Preise</SectionLabel>
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Transparente <span className="font-serif font-normal italic text-accent-soft">Pakete</span>
            </h2>
            <p className="mt-6 text-white/50">Feste Preise, keine versteckten Kosten. Sie wissen von Anfang an, woran Sie sind.</p>
          </Reveal>

          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.1} className={pkg.highlighted ? "lg:-my-6" : ""}>
                <div
                  className={`relative h-full rounded-3xl p-px ${
                    pkg.highlighted ? "bg-gradient-to-b from-accent via-violet/60 to-white/10" : "bg-white/10"
                  }`}
                >
                  <div className={`flex h-full flex-col rounded-[calc(1.5rem-1px)] p-8 ${pkg.highlighted ? "bg-ink-800 lg:py-12" : "bg-ink-900"}`}>
                    {pkg.highlighted && (
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-violet px-4 py-1 text-xs font-medium uppercase tracking-wider text-white shadow-lg shadow-accent/30">
                        Beliebteste Wahl
                      </span>
                    )}

                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                    <p className="text-sm text-white/40">{pkg.subtitle}</p>

                    <div className="mt-8 flex items-baseline gap-2">
                      <span className="text-6xl font-semibold tracking-tighter">{pkg.price}</span>
                      <span className="text-sm text-white/40">einmalig</span>
                    </div>
                    <p className="mt-2 text-sm text-accent-soft">
                      {pkg.monthly} <span className="text-white/40">({pkg.monthlyNote})</span>
                    </p>

                    <p className="mt-6 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white/60">
                      <span className="font-medium text-white/80">Ideal für:</span> {pkg.idealFor}
                    </p>

                    <ul className="mt-8 flex-1 space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm text-white/70">
                          <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <PackageLink
                      value={pkg.value}
                      className={`mt-10 rounded-full px-6 py-3.5 text-center font-medium transition-colors duration-300 ${
                        pkg.highlighted
                          ? "bg-white text-ink-950 hover:bg-accent hover:text-white"
                          : "border border-white/15 text-white hover:border-white hover:bg-white hover:text-ink-950"
                      }`}
                    >
                      {pkg.cta}
                    </PackageLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-16 text-center text-sm text-white/40">
            Alle Preise gemäß § 19 UStG ohne Ausweis der Umsatzsteuer. Individuelle Anforderungen auf Anfrage.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-32 md:grid-cols-[2fr_3fr]">
          <Reveal>
            <SectionLabel number="05">FAQ</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Häufige <span className="font-serif font-normal italic text-accent-soft">Fragen</span>
            </h2>
            <p className="mt-6 text-white/50">Ihre Frage ist nicht dabei? Schreiben Sie mir einfach.</p>
          </Reveal>

          <Reveal delay={0.1} className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {faq.q}
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors group-open:border-accent group-open:bg-accent" aria-hidden="true">
                    <span className="absolute h-px w-3 bg-white" />
                    <span className="absolute h-3 w-px bg-white transition-transform duration-300 group-open:rotate-90 group-open:scale-0" />
                  </span>
                </summary>
                <p className="mt-4 max-w-xl leading-relaxed text-white/55">{faq.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="relative overflow-hidden border-t border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute -left-60 top-0 h-[44rem] w-[44rem] glow-violet" />
        <div className="relative mx-auto max-w-6xl px-6 py-32">
          <Reveal className="mb-20">
            <SectionLabel number="06">Kontakt</SectionLabel>
            <h2 className="mt-6 text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              Lassen Sie uns <br />
              <span className="text-gradient font-serif font-normal italic">etwas bauen.</span>
            </h2>
          </Reveal>

          <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr]">
            <Reveal className="flex flex-col gap-4">
              <p className="mb-4 text-white/55">
                Schreiben Sie direkt per WhatsApp, senden Sie eine E-Mail oder nutzen Sie das Formular. Ich melde mich in
                der Regel innerhalb von 24 Stunden.
              </p>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-emerald-400/50 hover:bg-emerald-400/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-medium">WhatsApp</span>
                  <span className="block text-sm text-white/50">{SITE.whatsappDisplay}</span>
                </span>
              </a>

              <a
                href={SITE.phoneUrl}
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/50 hover:bg-accent/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-white">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-medium">Anrufen</span>
                  <span className="block text-sm text-white/50">{SITE.phoneDisplay}</span>
                </span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/50 hover:bg-accent/5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-ink-950">
                  <MailIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-medium">E-Mail</span>
                  <span className="block text-sm text-white/50">{SITE.email}</span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
