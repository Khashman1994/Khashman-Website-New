import MagneticButton from "@/components/MagneticButton";
import HeroCanvas from "@/components/three/HeroCanvas";

// Server-Komponente: Alle Animationen im Hero laufen als CSS (.hero-word, .hero-fade,
// .hero-scroll-out, .scene-scroll-out in globals.css). Nur Buttons & 3D-Szene sind Client-Code.

/* ---------- Timing ---------- */

const HEADLINE_DELAY = 0.1;
const WORD_STAGGER = 0.07;
const WORD_DURATION = 1.1;

type Word = { text: string; serif?: boolean };
type HeadlineLine = Word[];

const HEADLINE: HeadlineLine[] = [
  [{ text: "Webseiten," }, { text: "die" }],
  [{ text: "Eindruck", serif: true }],
  [{ text: "hinterlassen." }],
];

const TOTAL_WORDS = HEADLINE.reduce((sum, line) => sum + line.length, 0);
// Subtext startet, kurz bevor das letzte Wort zur Ruhe kommt
const REVEAL_END = HEADLINE_DELAY + (TOTAL_WORDS - 1) * WORD_STAGGER + WORD_DURATION * 0.75;

function delayStyle(seconds: number) {
  return { animationDelay: `${seconds}s` };
}

/* ---------- Masked Headline ---------- */

function MaskedHeadline() {
  let wordIndex = 0;

  return (
    <h1 className="text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
      {HEADLINE.map((line) => (
        // pb/-mb geben Unterlängen (g, ä, ,) Platz, ohne den Zeilenabstand zu verändern
        <span key={line.map((w) => w.text).join(" ")} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
          {line.map((word, i) => {
            const delay = HEADLINE_DELAY + wordIndex++ * WORD_STAGGER;
            return (
              <span key={word.text}>
                <span
                  className={`hero-word inline-block ${
                    word.serif ? "text-gradient pr-[0.08em] font-serif font-normal italic tracking-[-0.02em]" : ""
                  }`}
                  style={{ ...delayStyle(delay), animationDuration: `${WORD_DURATION}s` }}
                >
                  {word.text}
                </span>
                {i < line.length - 1 && " "}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/* ---------- Hero ---------- */

export default function AnimatedHero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 md:pb-24">
      {/* Raster im Hintergrund, zu den Rändern hin ausgeblendet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      {/* Beim Wegscrollen zoomt die Szene leicht heran und blendet aus. Unter lg nur die obere Hälfte. */}
      <div className="scene-scroll-out absolute inset-x-0 top-0 h-[58%] lg:inset-y-0 lg:left-[30%] lg:h-auto">
        <HeroCanvas />
      </div>

      {/* Unten abdunkeln, damit der Text immer lesbar bleibt */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950 via-ink-950/60 to-transparent" />

      <div className="hero-scroll-out relative mx-auto w-full max-w-6xl px-6">
        <span className="hero-fade inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Webdesign aus Aachen · Verfügbar für neue Projekte
        </span>

        <div className="mt-8">
          <MaskedHeadline />
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="hero-fade max-w-md text-lg leading-relaxed text-white/60" style={delayStyle(REVEAL_END)}>
            Moderne, blitzschnelle und conversion-starke Webseiten für KMU &amp; Gründer – persönlich umgesetzt, zum
            Festpreis.
          </p>

          <div className="hero-fade flex flex-col gap-3 sm:flex-row" style={delayStyle(REVEAL_END + 0.15)}>
            <MagneticButton href="#kontakt" variant="primary">
              Kostenloses Erstgespräch
            </MagneticButton>
            <MagneticButton href="#preise" variant="outline">
              Pakete ansehen
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll-Hinweis */}
      <div aria-hidden="true" className="hero-fade absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block" style={delayStyle(REVEAL_END + 0.6)}>
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <span className="h-2 w-px animate-bounce bg-white/70" />
        </div>
      </div>
    </section>
  );
}
