import Link from "next/link";

const WHATSAPP_URL = "https://wa.me/491735434710";
const EMAIL = "kontakt@khashman-webdesign.de";
const FORMSPREE_URL = "https://formspree.io/f/myekwrol";

/* ---------- Icons ---------- */

type IconProps = { className?: string };

function MonitorIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4M7 8l-2 2 2 2M17 8l2 2-2 2M13.5 7l-3 6" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function GaugeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 14l4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      <circle cx="12" cy="14" r="1.5" />
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

function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

/* ---------- Daten ---------- */

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
    text: "Google My Business, Ladezeitoptimierung und Core Web Vitals – damit Kunden aus Ihrer Region Sie zuerst finden.",
    tags: ["Google My Business", "Core Web Vitals"],
    className: "md:col-span-2",
  },
];

const packages = [
  {
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

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500";

/* ---------- Seite ---------- */

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--color-blue-100),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Verfügbar für neue Projekte im Quartal
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Digitale Lösungen, <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                die Ihr Geschäft voranbringen.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Moderne, performante und conversion-starke Webseiten für KMU &amp; Startups – ohne Technik-Stress.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-full bg-blue-600 px-7 py-3.5 text-center font-medium text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Kostenloses Erstgespräch
              </a>
              <a
                href="#preise"
                className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-center font-medium text-slate-900 transition-all hover:-translate-y-0.5 hover:border-slate-900"
              >
                Pakete ansehen
              </a>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-blue-400/30 to-indigo-300/30 blur-3xl" />

            {/* Laptop */}
            <div className="rounded-t-2xl border border-slate-200 bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/20">
              <div className="overflow-hidden rounded-lg bg-white">
                <div className="flex items-center gap-1.5 border-b border-slate-100 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="ml-3 h-3 flex-1 rounded bg-slate-100" />
                </div>
                <div className="space-y-3 p-5">
                  <div className="h-3 w-1/3 rounded bg-slate-200" />
                  <div className="h-6 w-4/5 rounded bg-slate-800" />
                  <div className="h-6 w-3/5 rounded bg-blue-500" />
                  <div className="h-2.5 w-2/3 rounded bg-slate-200" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-7 w-24 rounded-full bg-blue-600" />
                    <div className="h-7 w-20 rounded-full border border-slate-300" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-3">
                    <div className="h-14 rounded-lg bg-slate-100" />
                    <div className="h-14 rounded-lg bg-blue-50" />
                    <div className="h-14 rounded-lg bg-slate-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-3 w-[110%] -translate-x-[4.5%] rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-lg" />

            {/* Smartphone */}
            <div className="absolute -bottom-8 -right-2 w-28 rounded-[1.4rem] border border-slate-200 bg-slate-900 p-1.5 shadow-2xl shadow-slate-900/30 sm:-right-6 sm:w-32">
              <div className="space-y-2 overflow-hidden rounded-[1.1rem] bg-white p-3">
                <div className="mx-auto h-1.5 w-10 rounded-full bg-slate-200" />
                <div className="h-3 w-4/5 rounded bg-slate-800" />
                <div className="h-3 w-3/5 rounded bg-blue-500" />
                <div className="h-2 w-full rounded bg-slate-200" />
                <div className="h-5 w-16 rounded-full bg-blue-600" />
                <div className="h-12 rounded-lg bg-slate-100" />
                <div className="h-8 rounded-lg bg-blue-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen – Bento-Grid */}
      <section id="leistungen" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Leistungen</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Alles für Ihren digitalen Auftritt</h2>
          <p className="mt-4 text-slate-600">
            Von der ersten Idee bis zum laufenden Betrieb – aus einer Hand und mit klaren Zuständigkeiten.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {services.map(({ icon: Icon, title, text, tags, className }) => (
            <article
              key={title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/5 ${className}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 ring-1 ring-blue-600/20 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-slate-600">{text}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber-mich" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-[2fr_3fr]">
          {/* Platzhalter Profilbild – später ersetzen durch:
              <Image src="/khashman.jpg" alt="Khashman Alturki" fill className="object-cover" /> */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute -inset-3 -z-0 rounded-3xl bg-gradient-to-tr from-blue-200 to-indigo-100 blur-xl" />
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 text-slate-400">
              <UserIcon className="h-24 w-24" />
              <span className="mt-3 text-sm">Profilbild folgt</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Ihr Partner</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Khashman Alturki</h2>
            <p className="mt-2 text-slate-500">Gründer · Student der FH Aachen · Software Engineering</p>

            <blockquote className="mt-8 border-l-4 border-blue-600 pl-6 text-lg leading-relaxed text-slate-700">
              Ich verbinde fundiertes Software-Engineering der FH Aachen mit persönlicher Betreuung auf Augenhöhe.
              Bei mir gibt es keinen anonymen Agentur-Wasserkopf, sondern transparente Festpreise und direkte
              Umsetzung.
            </blockquote>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              <div>
                <dt className="text-sm text-slate-500">Ansprechpartner</dt>
                <dd className="mt-1 font-semibold">Direkt &amp; persönlich</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Preise</dt>
                <dd className="mt-1 font-semibold">Feste Pakete</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-500">Standort</dt>
                <dd className="mt-1 font-semibold">Aachen</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Preise</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Transparente Pakete</h2>
          <p className="mt-4 text-slate-600">Feste Preise, keine versteckten Kosten. Sie wissen von Anfang an, woran Sie sind.</p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-slate-900 text-white shadow-2xl shadow-blue-900/20 ring-2 ring-blue-500 lg:-my-4 lg:py-12"
                  : "border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                  Beliebteste Wahl
                </span>
              )}

              <h3 className="text-xl font-semibold">{pkg.name}</h3>
              <p className={`text-sm ${pkg.highlighted ? "text-slate-400" : "text-slate-500"}`}>{pkg.subtitle}</p>

              <div className="mt-6">
                <span className="font-display text-5xl font-bold">{pkg.price}</span>
                <span className={`ml-2 text-sm ${pkg.highlighted ? "text-slate-400" : "text-slate-500"}`}>einmalig</span>
              </div>
              <p className={`mt-1 text-sm ${pkg.highlighted ? "text-blue-300" : "text-blue-600"}`}>
                {pkg.monthly} <span className={pkg.highlighted ? "text-slate-400" : "text-slate-500"}>({pkg.monthlyNote})</span>
              </p>

              <p className={`mt-6 rounded-lg px-4 py-3 text-sm ${pkg.highlighted ? "bg-white/5 text-slate-300" : "bg-slate-50 text-slate-600"}`}>
                <span className="font-semibold">Ideal für:</span> {pkg.idealFor}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <CheckIcon className={`mt-0.5 h-5 w-5 shrink-0 ${pkg.highlighted ? "text-blue-400" : "text-blue-600"}`} />
                    <span className={pkg.highlighted ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`mt-10 rounded-full px-6 py-3 text-center font-medium transition-colors ${
                  pkg.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "border border-slate-300 text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Alle Preise gemäß § 19 UStG ohne Ausweis der Umsatzsteuer. Individuelle Anforderungen auf Anfrage.
        </p>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Kontakt</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Lassen Sie uns starten</h2>
            <p className="mt-4 text-slate-600">
              Schreiben Sie direkt per WhatsApp, senden Sie eine E-Mail oder nutzen Sie das Kontaktformular. Ich melde
              mich in der Regel innerhalb von 24 Stunden.
            </p>
          </div>

          <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr]">
            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-semibold">WhatsApp</span>
                  <span className="block text-sm text-slate-500">+49 173 5434710</span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <MailIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-semibold">E-Mail</span>
                  <span className="block text-sm text-slate-500">{EMAIL}</span>
                </span>
              </a>
            </div>

            <form
              action={FORMSPREE_URL}
              method="POST"
              className="grid gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:grid-cols-2"
            >
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input type="text" name="name" id="name" required autoComplete="name" className={inputClass} placeholder="Max Mustermann" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                  Telefonnummer <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <input type="tel" name="phone" id="phone" autoComplete="tel" className={inputClass} placeholder="+49 …" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">E-Mail</label>
                <input type="email" name="email" id="email" required autoComplete="email" className={inputClass} placeholder="mail@beispiel.de" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Nachricht</label>
                <textarea name="message" id="message" rows={5} required className={inputClass} placeholder="Beschreiben Sie kurz Ihr Projekt …" />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 py-3.5 font-medium text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-700"
                >
                  Anfrage senden
                </button>
                <p className="mt-3 text-center text-xs text-slate-500">
                  Mit dem Absenden stimmen Sie der Datenverarbeitung gemäß unserer{" "}
                  <Link href="/datenschutz" className="underline hover:text-slate-900">Datenschutzerklärung</Link> zu.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
