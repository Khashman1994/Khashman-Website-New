import DemoIcon from "@/components/demo/DemoIcon";
import DemoWidget from "@/components/demo/DemoWidget";
import { HoursTable, TabbedList } from "@/components/demo/interactive";
import { DemoFooter, DemoPhoto, accentText, ghostBtn, ink, line, muted, primaryBtn, surface } from "@/components/demo/ui";
import type { DemoSite, PortalContent } from "@/lib/demo-sites";

/* Praxis-Portal: Hinweisleiste ganz oben, Sprechzeiten-Karte direkt im Hero,
   Online-Services als zentrale Funktion, Fachbereiche als Reiter. */

export default function PortalLayout({ site, content }: { site: DemoSite; content: PortalContent }) {
  const ids = ["ueber-uns", "online", "fachbereiche", "aerzte"];
  return (
    <>
      {/* Hinweisleiste */}
      <div className="bg-[color:var(--d-accent)] text-[color:var(--d-on-accent)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2.5 text-center text-sm sm:px-6">
          <span className="inline-flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M3 11v2l13 5V6L3 11zM16 9a3 3 0 0 1 0 6M6 13l1 6h3l-1-5" />
            </svg>
            {content.announcement.text}
          </span>
          <a href="#hinweise" className="font-semibold underline underline-offset-4">{content.announcement.link}</a>
        </div>
      </div>

      <header className={`border-b ${line}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[40%_40%_40%_8px] bg-[color:var(--d-accent)] text-[color:var(--d-on-accent)]">
              <DemoIcon name={site.icon} className="h-6 w-6" />
            </span>
            <span className={`text-sm font-bold leading-tight ${ink}`}>
              Gemeinschaftspraxis
              <br />
              für Allgemeinmedizin
            </span>
          </a>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {site.nav.map((item, i) => (
              <a key={item} href={`#${ids[i]}`} className={`${ink} transition-colors hover:text-[color:var(--d-accent-text)]`}>
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden shrink-0 sm:block">
            <a href="#kontakt" className={`${primaryBtn} min-h-11 rounded-lg px-5 text-sm`}>
              {site.hero.secondary}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero mit Foto und Sprechzeiten-Karte */}
        <section className="relative">
          <DemoPhoto label="Empfang der Praxis" icon="stethoscope" className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-[color:var(--d-bg)]/90 md:bg-transparent md:bg-gradient-to-r md:from-[color:var(--d-bg)] md:via-[color:var(--d-bg)]/85 md:to-transparent" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
            <div>
              <p className={`text-sm font-semibold ${accentText}`}>{site.hero.eyebrow}</p>
              <h1 className={`mt-4 text-4xl font-bold leading-[1.05] tracking-tight ${ink} sm:text-5xl lg:text-6xl`}>{site.hero.title}</h1>
              <p className={`mt-6 max-w-lg text-lg leading-relaxed ${muted}`}>{site.hero.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#online" className={`${primaryBtn} rounded-lg`}>{site.hero.primary}</a>
                <a href="#kontakt" className={`${ghostBtn} rounded-lg bg-[color:var(--d-bg)]`}>{site.hero.secondary}</a>
              </div>
            </div>
            <div className="rounded-2xl bg-[color:var(--d-accent)] p-6 text-[color:var(--d-on-accent)] shadow-2xl sm:p-8">
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <h2 className="text-xl font-bold">Sprech- und Telefonzeiten</h2>
              </div>
              <div className="mt-5">
                <HoursTable
                  tone="onAccent"
                  headers={["", "Sprechstunde", "Telefon"]}
                  rows={content.hours.map((h) => ({ day: h.day, cols: [h.consult, h.phone] }))}
                />
              </div>
              <p className="mt-4 text-sm opacity-85">{content.hoursNote}</p>
            </div>
          </div>
        </section>

        {/* Wichtiger Hinweis */}
        <section id="hinweise" className="mx-auto max-w-6xl scroll-mt-16 px-4 pt-16 sm:px-6">
          <div className={`flex flex-col gap-4 rounded-2xl border ${line} ${surface} p-6 sm:flex-row sm:items-start sm:p-8`}>
            <span className="inline-flex w-fit shrink-0 rounded-full bg-[color:var(--d-accent)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[color:var(--d-on-accent)]">
              {content.notice.label}
            </span>
            <div>
              <h2 className={`text-lg font-bold ${ink}`}>{content.notice.title}</h2>
              <p className={`mt-2 leading-relaxed ${muted}`}>{content.notice.text}</p>
            </div>
          </div>
        </section>

        {/* Über uns */}
        <section id="ueber-uns" className="mx-auto grid max-w-6xl scroll-mt-16 gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <h2 className={`text-3xl font-bold tracking-tight ${ink} sm:text-4xl`}>{content.intro.title}</h2>
            {content.intro.paragraphs.map((p) => (
              <p key={p} className={`mt-4 max-w-2xl leading-relaxed ${muted}`}>{p}</p>
            ))}
          </div>
          <dl className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {site.facts.map(([value, label]) => (
              <div key={label} className={`flex flex-col-reverse rounded-2xl border ${line} p-5`}>
                <dt className={`mt-1 text-sm ${muted}`}>{label}</dt>
                <dd className={`text-2xl font-bold tabular-nums ${accentText}`}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Online-Services */}
        <section id="online" className={`scroll-mt-16 border-y ${line} ${surface}`}>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="max-w-2xl">
              <p className={`text-sm font-semibold uppercase tracking-wider ${accentText}`}>Zum Ausprobieren</p>
              <h2 className={`mt-3 text-3xl font-bold tracking-tight ${ink} sm:text-4xl`}>{site.widget.title}</h2>
              <p className={`mt-3 ${muted}`}>{site.widget.text}</p>
            </div>
            <div className={`mt-10 min-w-0 rounded-2xl border ${line} bg-[color:var(--d-bg)] p-5 sm:p-8`}>
              <DemoWidget config={site.widget.config} />
            </div>
          </div>
        </section>

        {/* Fachbereiche */}
        <section id="fachbereiche" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6">
          <h2 className={`mb-10 text-3xl font-bold tracking-tight ${ink} sm:text-4xl`}>Unsere Fachbereiche</h2>
          <TabbedList tabs={content.departments} />
        </section>

        {/* Ärzte */}
        <section id="aerzte" className={`scroll-mt-16 border-t ${line}`}>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 className={`text-3xl font-bold tracking-tight ${ink} sm:text-4xl`}>Unsere Ärztinnen und Ärzte</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {content.doctors.map((d) => (
                <article key={d.name} className={`overflow-hidden rounded-2xl border ${line}`}>
                  <DemoPhoto label={d.name} className="aspect-[4/3]" />
                  <div className="p-5">
                    <h3 className={`font-bold ${ink}`}>{d.name}</h3>
                    <p className={`text-sm ${muted}`}>{d.role}</p>
                    <p className={`mt-3 text-sm ${accentText}`}>{d.focus}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="scroll-mt-16 px-4 pb-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-2xl bg-[color:var(--d-accent)] p-8 text-[color:var(--d-on-accent)] sm:p-12 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Kontakt und Anfahrt</h2>
              <p className="mt-4 opacity-85">{site.contact.address}</p>
              <ul className="mt-3 space-y-1 opacity-85">
                {site.contact.hours.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
            <p className="text-sm opacity-80 md:text-right">
              Bushaltestelle und Parkplätze direkt vor der Praxis. Telefon und E-Mail stehen auf der echten Website hier.
            </p>
          </div>
        </section>
      </main>

      <DemoFooter name={site.name} domain={site.domain} />
    </>
  );
}
