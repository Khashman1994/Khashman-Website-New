import DemoWidget from "@/components/demo/DemoWidget";
import { FloatingContact } from "@/components/demo/interactive";
import { DemoFooter, DemoPhoto, accentText, ghostBtn, ink, line, muted, primaryBtn, serif, surface, textLink } from "@/components/demo/ui";
import type { AtelierContent, DemoSite } from "@/lib/demo-sites";

/* Luftiges Layout für Kreative: viel Weißraum, leichte Schrift, eine große
   abgerundete Sandfläche im Hero, Monogramm als Wasserzeichen. */

const light = "font-light tracking-[0.01em]";

function Monogram({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex items-center justify-center rounded-full border border-[color:var(--d-accent)] ${serif} italic text-[color:var(--d-accent-text)] ${className}`}
    >
      {text}
    </span>
  );
}

export default function AtelierLayout({ site, content }: { site: DemoSite; content: AtelierContent }) {
  const ids = ["leistungen", "portfolio", "angebot", "kontakt"];
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-6 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Monogram text={site.logoMark} className="h-12 w-12 shrink-0 text-lg" />
          <span className="min-w-0">
            <span className={`block truncate text-lg ${light} ${ink}`}>{site.name}</span>
            <span className={`block text-xs uppercase tracking-[0.2em] ${muted}`}>Fotografie · Aachen</span>
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
          <a href="#angebot" className={`${ghostBtn} min-h-11 text-sm`}>
            {site.hero.primary}
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero: große Sandfläche mit runder Ecke, Porträt ragt heraus */}
        <section className="px-4 sm:px-6">
          <div className={`relative mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[2.5rem] rounded-tr-[9rem] ${surface} px-6 py-14 sm:px-12 md:grid-cols-[1.1fr_1fr] md:items-end md:py-20`}>
            <Monogram text={site.logoMark} className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-[10rem] opacity-[0.07]" />
            <div className="relative">
              <h1 className={`text-5xl ${light} leading-[1.05] ${ink} sm:text-6xl lg:text-7xl`}>{site.hero.title}</h1>
              <p className={`mt-6 max-w-md text-lg ${muted}`}>{content.greeting}</p>
              <p className={`mt-3 max-w-md leading-relaxed ${muted}`}>{site.hero.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#angebot" className={primaryBtn}>{site.hero.primary}</a>
                <a href="#portfolio" className={ghostBtn}>{site.hero.secondary}</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <DemoPhoto label="Porträt der Fotografin" tone="#cdbfae" icon="camera" className="aspect-[4/5] rounded-[2rem] shadow-2xl" />
              <div className={`absolute -bottom-5 -left-4 rounded-2xl border ${line} bg-[color:var(--d-bg)] px-5 py-3 shadow-lg`}>
                <p className={`text-xs uppercase tracking-[0.15em] ${muted}`}>{site.hero.badge.label}</p>
                <p className={`mt-1 ${serif} text-lg italic ${ink}`}>{site.hero.badge.value}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Einleitung + drei Bereiche */}
        <section id="leistungen" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
          <div className="max-w-3xl">
            <p className={`text-sm ${accentText}`}>{content.intro.eyebrow}</p>
            <h2 className={`mt-4 text-3xl ${light} leading-tight ${ink} sm:text-4xl`}>{content.intro.title}</h2>
            <p className={`mt-6 leading-relaxed ${muted}`}>{content.intro.text}</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {content.categories.map((c) => (
              <article key={c.title} className="group">
                <DemoPhoto label={c.title} tone={c.tone} className="aspect-[4/5] rounded-[1.75rem] transition-transform duration-500 group-hover:-translate-y-1 motion-reduce:transition-none" />
                <h3 className={`mt-6 text-xl ${ink}`}>{c.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{c.text}</p>
                <a href="#angebot" className={`${textLink} mt-2 text-sm`}>
                  Mehr erfahren <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Stil-Aussage mit großem Zitat */}
        <section className={`border-y ${line}`}>
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.3fr] md:items-center">
            <div>
              <p className={`text-xs uppercase tracking-[0.2em] ${accentText}`}>{content.statement.eyebrow}</p>
              <h2 className={`mt-4 ${serif} text-4xl italic leading-tight ${ink} sm:text-5xl`}>{content.statement.title}</h2>
            </div>
            <div>
              <p className={`text-lg leading-relaxed ${muted}`}>{content.statement.text}</p>
              <dl className="mt-10 grid grid-cols-3 gap-4">
                {site.facts.map(([value, label]) => (
                  <div key={label} className="flex flex-col-reverse">
                    <dt className={`mt-1 text-xs ${muted}`}>{label}</dt>
                    <dd className={`text-2xl ${light} tabular-nums ${ink} sm:text-3xl`}>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Portfolio zum Filtern */}
        <section id="portfolio" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className={`text-3xl ${light} ${ink} sm:text-4xl`}>{site.widget.title}</h2>
            <p className={`mt-3 ${muted}`}>{site.widget.text}</p>
          </div>
          <DemoWidget config={site.widget.config} />
        </section>

        {/* Kennenlern-Angebot */}
        <section id="angebot" className="scroll-mt-16 px-4 sm:px-6">
          <div className={`mx-auto grid max-w-6xl gap-8 rounded-[2.5rem] rounded-bl-[7rem] ${surface} px-6 py-14 sm:px-12 md:grid-cols-[1.4fr_1fr] md:items-center`}>
            <div>
              <p className={`text-xs uppercase tracking-[0.2em] ${accentText}`}>{content.offer.eyebrow}</p>
              <h2 className={`mt-3 text-3xl ${light} ${ink} sm:text-4xl`}>{content.offer.title}</h2>
              <p className={`mt-4 max-w-xl leading-relaxed ${muted}`}>{content.offer.text}</p>
              <p className={`mt-6 text-sm ${muted}`}>{content.contactLine}</p>
            </div>
            <div className={`rounded-[2rem] border ${line} bg-[color:var(--d-bg)] p-8 text-center`}>
              <p className={`${serif} text-6xl italic ${ink}`}>{content.offer.price}</p>
              <p className={`mt-2 text-sm ${muted}`}>ca. 15 Minuten · 5 bearbeitete Bilder</p>
              <a href="#kontakt" className={`${primaryBtn} mt-6 w-full`}>{content.offer.cta}</a>
            </div>
          </div>
        </section>

        {/* Stimmen */}
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            {site.testimonials.map((t) => (
              <figure key={t.name}>
                <blockquote className={`${serif} text-2xl italic leading-snug ${ink}`}>„{t.quote}“</blockquote>
                <figcaption className={`mt-4 text-sm ${muted}`}>
                  {t.name} · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Abschluss */}
        <section id="kontakt" className={`scroll-mt-16 border-t ${line}`}>
          <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
            <Monogram text={site.logoMark} className="mx-auto h-16 w-16 text-2xl" />
            <h2 className={`mt-8 text-4xl ${light} ${ink} sm:text-5xl`}>{content.closing.title}</h2>
            <p className={`mx-auto mt-5 max-w-xl leading-relaxed ${muted}`}>{content.closing.text}</p>
            <a href="#angebot" className={`${primaryBtn} mt-8`}>{content.closing.cta}</a>
            <p className={`mt-6 text-sm ${muted}`}>{site.contact.address}</p>
          </div>
        </section>
      </main>

      <DemoFooter name={site.name} domain={site.domain} />
      <FloatingContact contactLine={content.contactLine} />
    </>
  );
}
