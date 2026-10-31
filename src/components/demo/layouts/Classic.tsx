import DemoIcon from "@/components/demo/DemoIcon";
import DemoWidget from "@/components/demo/DemoWidget";
import { HeroSlider, HoursTable } from "@/components/demo/interactive";
import { DemoPhoto, accentText, ink, line, muted, primaryBtn, serif, surface } from "@/components/demo/ui";
import type { ClassicContent, DemoSite } from "@/lib/demo-sites";

/* Klassisch zentriertes Praxis-Layout: Logo und Menü mittig, Bild-Slider über
   die ganze Breite, Begrüßungsbrief, Infos in drei Spalten am Ende. */

const caps = "text-xs font-semibold uppercase tracking-[0.18em]";

export default function ClassicLayout({ site, content }: { site: DemoSite; content: ClassicContent }) {
  const ids = ["top", "behandlung", "team", "rundgang", "kontakt"];
  return (
    <>
      <header className="px-4 pt-10 text-center sm:px-6">
        <a href="#top" className="inline-flex flex-col items-center">
          <DemoIcon name={site.icon} className="h-12 w-12 text-[color:var(--d-accent-text)]" />
          <span className={`mt-3 text-xl font-semibold uppercase leading-tight tracking-[0.12em] ${ink}`}>
            {site.name.split(" & ")[0]}
          </span>
          <span className={`mt-2 border-t ${line} pt-2 text-[11px] uppercase tracking-[0.2em] ${muted}`}>{content.subline}</span>
        </a>
        <nav aria-label="Hauptnavigation" className="mx-auto mt-8 max-w-4xl overflow-x-auto">
          <ul className="flex min-w-max justify-center gap-6 pb-4 sm:gap-9">
            {site.nav.map((item, i) => (
              <li key={item}>
                <a
                  href={`#${ids[i]}`}
                  aria-current={i === 0 ? "page" : undefined}
                  className={`${caps} inline-flex min-h-11 items-center border-b-2 transition-colors ${
                    i === 0 ? "border-[color:var(--d-accent)] text-[color:var(--d-ink)]" : `border-transparent ${muted} hover:text-[color:var(--d-ink)]`
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Fester Termin-Knopf, bleibt beim Scrollen sichtbar */}
      <a
        href="#termin"
        className={`${primaryBtn} fixed right-[max(1rem,env(safe-area-inset-right))] top-16 z-40 min-h-11 rounded-lg px-4 text-sm shadow-lg`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="mr-2 h-4 w-4" aria-hidden="true">
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M4 10h16M9 3v4M15 3v4" />
        </svg>
        {site.hero.primary}
      </a>

      <main id="top" className="scroll-mt-16">
        <HeroSlider slides={content.slides} />

        {/* Begrüßungsbrief */}
        <section className={surface}>
          <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
            <article className={`rounded-2xl border ${line} bg-[color:var(--d-bg)] p-8 shadow-sm sm:p-12`}>
              <h1 className={`text-center text-3xl font-semibold tracking-tight ${ink} sm:text-4xl`}>
                Willkommen in Ihrer Zahnarztpraxis in Aachen
              </h1>
              <p className={`mt-8 font-semibold ${ink}`}>{content.letter.salutation}</p>
              {content.letter.paragraphs.map((p) => (
                <p key={p} className={`mt-4 leading-relaxed ${muted}`}>{p}</p>
              ))}
              <p className={`mt-8 ${serif} text-xl italic ${accentText}`}>{content.letter.signature}</p>
            </article>
          </div>
        </section>

        {/* Behandlungen */}
        <section id="behandlung" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6">
          <p className={`${caps} text-center ${accentText}`}>Behandlung</p>
          <h2 className={`mt-3 text-center text-3xl font-semibold tracking-tight ${ink}`}>{site.servicesTitle}</h2>
          <div className={`mt-12 grid gap-px overflow-hidden rounded-2xl border ${line} bg-[color:var(--d-line)] sm:grid-cols-2 lg:grid-cols-3`}>
            {content.treatments.map((t) => (
              <article key={t.title} className="bg-[color:var(--d-bg)] p-7">
                <span aria-hidden="true" className="mb-4 block h-1 w-10 rounded-full bg-[color:var(--d-accent)]" />
                <h3 className={`text-lg font-semibold ${ink}`}>{t.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{t.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Online-Termin */}
        <section id="termin" className={`scroll-mt-16 border-y ${line} ${surface}`}>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className={`${caps} ${accentText}`}>Zum Ausprobieren</p>
              <h2 className={`mt-3 text-3xl font-semibold tracking-tight ${ink}`}>{site.widget.title}</h2>
              <p className={`mt-4 max-w-md leading-relaxed ${muted}`}>{site.widget.text}</p>
            </div>
            <div className={`min-w-0 rounded-2xl border ${line} bg-[color:var(--d-bg)] p-5 sm:p-8`}>
              <DemoWidget config={site.widget.config} />
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-20 sm:px-6">
          <p className={`${caps} text-center ${accentText}`}>Das Team</p>
          <h2 className={`mt-3 text-center text-3xl font-semibold tracking-tight ${ink}`}>Wer Sie behandelt</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {content.team.map((p) => (
              <figure key={p.name} className="text-center">
                <DemoPhoto label={p.name} className="mx-auto aspect-square w-40 rounded-full" />
                <figcaption className="mt-4">
                  <span className={`block font-semibold ${ink}`}>{p.name}</span>
                  <span className={`text-sm ${muted}`}>{p.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Stimmen */}
        <section id="rundgang" className={`scroll-mt-16 border-t ${line}`}>
          <div className="mx-auto grid max-w-5xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
            {site.testimonials.map((t) => (
              <figure key={t.name} className="text-center">
                <blockquote className={`${serif} text-xl italic leading-snug ${ink}`}>„{t.quote}“</blockquote>
                <figcaption className={`mt-4 text-sm ${muted}`}>
                  {t.name} · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      {/* Info-Footer in drei Spalten */}
      <footer id="kontakt" className={`scroll-mt-16 border-t ${line} ${surface}`}>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
          <div>
            <h2 className={`${caps} ${ink}`}>Adresse</h2>
            <p className={`mt-4 leading-relaxed ${muted}`}>
              {site.name}
              <br />
              {site.contact.address}
            </p>
            <p className={`mt-4 text-sm ${muted}`}>Telefon und E-Mail stehen auf der echten Website hier.</p>
          </div>
          <div>
            <h2 className={`${caps} ${ink}`}>Sprechzeiten</h2>
            <div className={`mt-4 ${ink}`}>
              <HoursTable headers={["Tag", "Uhrzeit"]} rows={content.hours.map((h) => ({ day: h.day, cols: [h.time] }))} />
            </div>
            <p className={`mt-3 text-sm ${muted}`}>Sowie nach Vereinbarung.</p>
          </div>
          <div>
            <h2 className={`${caps} ${ink}`}>Unsere Leistungen</h2>
            <ul className={`mt-4 space-y-2 ${muted}`}>
              {content.treatments.slice(0, 5).map((t) => (
                <li key={t.title}>
                  <a href="#behandlung" className="transition-colors hover:text-[color:var(--d-ink)]">{t.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`border-t ${line}`}>
          <div className={`mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:justify-between sm:px-6 ${muted}`}>
            <p>{site.domain} · Impressum · Datenschutz</p>
            <a href="#top" className="hover:text-[color:var(--d-ink)]">↑ Zurück nach oben</a>
          </div>
        </div>
      </footer>
    </>
  );
}
