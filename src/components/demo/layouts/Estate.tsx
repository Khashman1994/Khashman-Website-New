import DemoWidget from "@/components/demo/DemoWidget";
import IsoBuilding from "@/components/demo/IsoBuilding";
import { PropertySearch, Replay } from "@/components/demo/interactive";
import { DemoFooter, accentText, display, ghostBtn, ink, line, muted, primaryBtn, surface } from "@/components/demo/ui";
import type { DemoSite, EstateContent } from "@/lib/demo-sites";

/* Immobilien-Layout: helle, ruhige Fläche, große Serifen-Überschrift und rechts
   ein Hochhaus, das sich beim Laden Etage für Etage aufbaut. */

const caps = "text-xs font-semibold uppercase tracking-[0.18em]";

function HouseMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round" className="h-9 w-9" aria-hidden="true">
      <path d="M4 15 16 5l12 10" />
      <path d="M7 13v14h18V13" />
      <path d="M12 27v-8h3v8M17 27v-11h3v11" />
    </svg>
  );
}

export default function EstateLayout({ site, content }: { site: DemoSite; content: EstateContent }) {
  const ids = ["objekte", "verkaufen", "bewertung", "kontakt"];
  return (
    <>
      <header className={`border-b ${line}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <a href="#top" className={`flex min-w-0 items-center gap-3 ${accentText}`}>
            <HouseMark />
            <span className="min-w-0">
              <span className={`block truncate text-sm font-bold uppercase tracking-[0.14em] ${ink}`}>{site.name}</span>
              <span className={`block text-[11px] uppercase tracking-[0.2em] ${muted}`}>Aachen · seit 1996</span>
            </span>
          </a>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 text-sm lg:flex">
            {site.nav.map((item, i) => (
              <a key={item} href={`#${ids[i]}`} className={`${muted} transition-colors hover:text-[color:var(--d-ink)]`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden shrink-0 sm:block">
            <a href="#bewertung" className={`${primaryBtn} min-h-11 rounded-md px-5 text-sm`}>
              {site.hero.secondary}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero mit wachsendem Hochhaus */}
        <section className="relative overflow-hidden">
          {/* Blasse Gebäude-Silhouetten im Hintergrund */}
          <svg aria-hidden="true" viewBox="0 0 600 400" className="pointer-events-none absolute right-0 top-0 h-full w-2/3 opacity-[0.06]">
            <path d="M80 400V120l90-40v320M200 400V60l110 50v290M340 400V160l80-30v270M450 400V90l100 40v270" fill="currentColor" className={ink} />
          </svg>
          <div className="relative mx-auto grid max-w-6xl items-center gap-6 px-4 pb-10 pt-12 sm:px-6 md:grid-cols-[1fr_1.1fr] md:pt-16">
            <div>
              <p className={`${caps} ${accentText}`}>{site.hero.eyebrow}</p>
              <h1 className={`${display} mt-5 text-5xl leading-[1.02] tracking-tight ${ink} sm:text-6xl lg:text-7xl`}>{site.hero.title}</h1>
              <p className={`mt-6 max-w-md text-lg leading-relaxed ${muted}`}>{site.hero.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#objekte" className={`${primaryBtn} rounded-md`}>
                  {site.hero.primary} <span aria-hidden="true" className="ml-2">›</span>
                </a>
                <a href="#bewertung" className={`${ghostBtn} rounded-md`}>{site.hero.secondary}</a>
              </div>
            </div>
            <Replay label="Neu bauen">
              <IsoBuilding className="mx-auto w-full max-w-xl" />
            </Replay>
          </div>

          {/* Kartenreihe unter dem Hero */}
          <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
            <div aria-hidden="true" className="mb-6 flex gap-1.5">
              <span className="h-1 w-8 rounded-full bg-[color:var(--d-ink)]" />
              <span className="h-1 w-4 rounded-full bg-[color:var(--d-line)]" />
              <span className="h-1 w-4 rounded-full bg-[color:var(--d-line)]" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {content.heroCards.map((c, i) => (
                <a
                  key={c.title}
                  href={`#${["objekte", "verkaufen", "bewertung"][i]}`}
                  className={`group rounded-2xl border ${line} bg-[color:var(--d-bg)] p-5 transition-colors hover:border-[color:var(--d-accent)]`}
                >
                  <p className={`${caps} ${accentText}`}>{c.eyebrow}</p>
                  <p className={`${display} mt-2 text-xl ${ink}`}>
                    {c.title} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Kennzahlen */}
        <section aria-label="Kennzahlen" className={`border-y ${line} ${surface}`}>
          <dl className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
            {site.facts.map(([value, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className={`text-sm ${muted}`}>{label}</dt>
                <dd className={`${display} text-4xl tabular-nums ${ink}`}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Objektsuche */}
        <section id="objekte" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6">
          <p className={`${caps} ${accentText}`}>Zum Ausprobieren</p>
          <h2 className={`${display} mt-3 text-4xl tracking-tight ${ink}`}>Aktuelle Objekte</h2>
          <p className={`mt-3 max-w-xl ${muted}`}>Filtern Sie nach Ort, Objektart und Zimmern. Die Liste passt sich sofort an.</p>
          <div className="mt-10">
            <PropertySearch listings={content.listings} places={content.places} />
          </div>
        </section>

        {/* Ablauf beim Verkauf */}
        <section id="verkaufen" className={`scroll-mt-16 border-y ${line} ${surface}`}>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className={`${display} text-4xl tracking-tight ${ink}`}>So verkaufen wir Ihre Immobilie</h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {content.process.map((p, i) => (
                <li key={p.title}>
                  <span className={`${display} text-5xl ${accentText}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={`mt-3 text-lg font-semibold ${ink}`}>{p.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Wertermittlung */}
        <section id="bewertung" className="mx-auto grid max-w-6xl scroll-mt-16 gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.3fr]">
          <div>
            <p className={`${caps} ${accentText}`}>Für Eigentümer</p>
            <h2 className={`${display} mt-3 text-4xl tracking-tight ${ink}`}>{site.widget.title}</h2>
            <p className={`mt-4 max-w-md leading-relaxed ${muted}`}>{site.widget.text}</p>
          </div>
          <div className={`min-w-0 rounded-3xl border ${line} bg-[color:var(--d-bg)] p-5 shadow-sm sm:p-8`}>
            <DemoWidget config={site.widget.config} />
          </div>
        </section>

        {/* Stimmen */}
        <section className={`border-t ${line}`}>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
            {site.testimonials.map((t) => (
              <figure key={t.name}>
                <blockquote className={`${display} text-2xl leading-snug ${ink}`}>„{t.quote}“</blockquote>
                <figcaption className={`mt-4 text-sm ${muted}`}>
                  {t.name} · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="scroll-mt-16 px-4 pb-20 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl bg-[color:var(--d-ink)] p-8 text-[color:var(--d-bg)] sm:p-12 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className={`${display} text-4xl tracking-tight`}>Persönlich beraten lassen</h2>
              <p className="mt-3 opacity-80">{site.contact.address}</p>
              <p className="opacity-80">{site.contact.hours.join(" · ")}</p>
            </div>
            <a href="#bewertung" className={`${primaryBtn} rounded-md`}>{site.contact.cta}</a>
          </div>
        </section>
      </main>

      <DemoFooter name={site.name} domain={site.domain} />
    </>
  );
}
