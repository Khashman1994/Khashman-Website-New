import DemoIcon from "@/components/demo/DemoIcon";
import DemoShell from "@/components/demo/DemoShell";
import DemoWidget from "@/components/demo/DemoWidget";
import AtelierLayout from "@/components/demo/layouts/Atelier";
import ClassicLayout from "@/components/demo/layouts/Classic";
import PortalLayout from "@/components/demo/layouts/Portal";
import { DISPLAY_FONT, DemoFooter, display, ghostBtn, ink, line, muted, primaryBtn } from "@/components/demo/ui";
import type { DemoSite as Site } from "@/lib/demo-sites";

/* Vorlage für alle Beispiel-Websites. Farben und Schriften kommen pro Branche
   aus demo-sites.ts und werden als CSS-Variablen (--d-*) gesetzt.
   Manche Branchen haben einen eigenen Seitenaufbau (layout). */

const SECTION_IDS = ["leistungen", "funktion", "stimmen", "kontakt"];

/* ---------- Seite ---------- */

export default function DemoSite({ site }: { site: Site }) {
  return (
    <DemoShell industry={site.industry} palettes={site.palettes} display={DISPLAY_FONT[site.font]}>
      {site.layout === "atelier" && site.atelier ? (
        <AtelierLayout site={site} content={site.atelier} />
      ) : site.layout === "classic" && site.classic ? (
        <ClassicLayout site={site} content={site.classic} />
      ) : site.layout === "portal" && site.portal ? (
        <PortalLayout site={site} content={site.portal} />
      ) : (
        <StandardLayout site={site} />
      )}
    </DemoShell>
  );
}

function StandardLayout({ site }: { site: Site }) {
  return (
    <>
      {/* Kopfzeile des fiktiven Betriebs */}
      <header className={`border-b ${line}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--d-accent)] px-2 text-sm font-bold text-[color:var(--d-on-accent)]">
              {site.logoMark}
            </span>
            <span className={`${display} truncate text-lg font-semibold tracking-tight sm:text-xl`}>{site.name}</span>
          </a>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 text-sm font-medium md:flex">
            {site.nav.map((item, i) => (
              <a key={item} href={`#${SECTION_IDS[i]}`} className={`${muted} transition-colors hover:text-[color:var(--d-ink)]`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden sm:block">
            <a href="#funktion" className={`${primaryBtn} min-h-11 px-5 text-sm`}>
              {site.hero.primary}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-[1.1fr_1fr] md:pb-24 md:pt-20">
          <div>
            <p className={`text-sm font-medium ${muted}`}>{site.hero.eyebrow}</p>
            <h1 className={`${display} mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl`}>
              {site.hero.title}
            </h1>
            <p className={`mt-6 max-w-xl text-lg leading-relaxed ${muted}`}>{site.hero.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#funktion" className={primaryBtn}>{site.hero.primary}</a>
              <a href="#leistungen" className={ghostBtn}>{site.hero.secondary}</a>
            </div>
          </div>

          {/* Bildfläche: Platzhalter für ein Foto des Betriebs */}
          <div className="relative">
            <div
              className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] sm:aspect-[5/4] md:aspect-[4/5]"
              style={{
                background:
                  "radial-gradient(120% 80% at 80% 10%, color-mix(in oklab, var(--d-accent) 55%, var(--d-bg)), var(--d-accent) 70%)",
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-25"
                style={{ backgroundImage: "radial-gradient(var(--d-on-accent) 1px, transparent 1px)", backgroundSize: "22px 22px" }}
              />
              <DemoIcon name={site.icon} className="relative h-32 w-32 text-[color:var(--d-on-accent)] opacity-90 sm:h-40 sm:w-40" />
            </div>
            <div className={`absolute -bottom-6 left-4 right-4 rounded-2xl border ${line} bg-[color:var(--d-surface)] p-4 shadow-xl sm:left-auto sm:right-6 sm:w-72`}>
              <p className={`text-xs font-medium uppercase tracking-wider ${muted}`}>{site.hero.badge.label}</p>
              <p className="mt-1 font-semibold">{site.hero.badge.value}</p>
            </div>
          </div>
        </section>

        {/* Kennzahlen */}
        <section aria-label="Kennzahlen" className={`border-y ${line} bg-[color:var(--d-surface)]`}>
          <dl className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-3 sm:px-6">
            {site.facts.map(([value, label]) => (
              <div key={label}>
                <dt className={`text-sm ${muted}`}>{label}</dt>
                <dd className={`${display} mt-1 text-3xl font-semibold tracking-tight tabular-nums`}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6 md:py-28">
          <h2 className={`${display} max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl`}>{site.servicesTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.services.map((s) => (
              <article key={s.title} className={`rounded-2xl border ${line} bg-[color:var(--d-surface)] p-6`}>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Kernfunktion zum Ausprobieren */}
        <section id="funktion" className={`scroll-mt-16 border-y ${line} bg-[color:var(--d-surface)]`}>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.4fr] md:py-28">
            <div>
              <p className="inline-flex rounded-full bg-[color:var(--d-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--d-accent-text)]">
                Zum Ausprobieren
              </p>
              <h2 className={`${display} mt-4 text-3xl font-semibold tracking-tight sm:text-4xl`}>{site.widget.title}</h2>
              <p className={`mt-4 max-w-md leading-relaxed ${muted}`}>{site.widget.text}</p>
            </div>
            <div className={`min-w-0 rounded-3xl border ${line} bg-[color:var(--d-bg)] p-5 sm:p-8`}>
              <DemoWidget config={site.widget.config} />
            </div>
          </div>
        </section>

        {/* Stimmen */}
        <section id="stimmen" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6 md:py-28">
          <h2 className={`${display} text-3xl font-semibold tracking-tight sm:text-4xl`}>Was Kundinnen und Kunden sagen</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {site.testimonials.map((t) => (
              <figure key={t.name} className={`rounded-3xl border ${line} p-8`}>
                <blockquote className={`${display} text-xl leading-snug sm:text-2xl`}>„{t.quote}“</blockquote>
                <figcaption className={`mt-6 text-sm ${muted}`}>
                  <span className={`font-semibold ${ink}`}>{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="scroll-mt-16 px-4 pb-20 sm:px-6 md:pb-28">
          <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[2rem] bg-[color:var(--d-accent)] p-8 text-[color:var(--d-on-accent)] sm:p-12 md:grid-cols-2">
            <div>
              <h2 className={`${display} text-3xl font-semibold tracking-tight sm:text-4xl`}>So erreichen Sie uns</h2>
              <p className="mt-4 opacity-80">{site.contact.address}</p>
              <ul className="mt-4 space-y-1 opacity-80">
                {site.contact.hours.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-end gap-3 md:items-end">
              <a
                href="#funktion"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--d-on-accent)] px-6 font-semibold text-[color:var(--d-accent)] transition-opacity hover:opacity-90"
              >
                {site.contact.cta}
              </a>
              <p className="text-sm opacity-70">Telefon und E-Mail stehen auf der echten Website hier.</p>
            </div>
          </div>
        </section>
      </main>

      <DemoFooter name={site.name} domain={site.domain} />
    </>
  );
}
