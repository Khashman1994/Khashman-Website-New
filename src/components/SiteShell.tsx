import Link from "next/link";
import { Geist, Instrument_Serif } from "next/font/google";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/SiteHeader";
import SmoothScroll from "@/components/SmoothScroll";
import { getDictionary, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { DEFAULT_THEME, THEME_INIT_SCRIPT } from "@/lib/theme";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
});

// Gemeinsames Grundgerüst für beide Sprachen. Jede Sprache hat ein eigenes Root-Layout
// ((de)/layout.tsx und (en)/en/layout.tsx), damit <html lang> stimmt.
export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale);

  return (
    // suppressHydrationWarning: Das Theme-Skript ändert data-theme vor React – das ist gewollt
    <html lang={locale} data-theme={DEFAULT_THEME} suppressHydrationWarning>
      {/* Die Regel stammt aus dem Pages Router – im App-Router-Root-Layout ist <head> korrekt */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`${geist.variable} ${instrument.variable} grain bg-ink-950 font-sans text-fg antialiased`}>
        <SmoothScroll />
        <SiteHeader locale={locale} t={t.nav} />

        <main className="min-h-screen">{children}</main>

        <footer className="relative overflow-hidden border-t border-fg/10">
          <div className="mx-auto max-w-6xl px-6 pt-20">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="max-w-sm">
                <p className="text-lg font-semibold">
                  Khashman<span className="text-accent">.</span>
                </p>
                <p className="mt-3 text-sm text-fg/50">{t.footer.tagline}</p>
              </div>
              <div className="grid grid-cols-2 gap-10 text-sm">
                <div className="flex flex-col gap-3">
                  <p className="text-fg/40">{t.footer.contact}</p>
                  <a href={`mailto:${SITE.email}`} className="text-fg/70 hover:text-fg">{SITE.email}</a>
                  <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-fg/70 hover:text-fg">
                    WhatsApp
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-fg/40">{t.footer.legal}</p>
                  {/* Impressum & Datenschutz gibt es nur auf Deutsch (rechtlich maßgeblich) */}
                  <Link href="/impressum" hrefLang="de" className="text-fg/70 hover:text-fg">{t.footer.imprint}</Link>
                  <Link href="/datenschutz" hrefLang="de" className="text-fg/70 hover:text-fg">{t.footer.privacy}</Link>
                </div>
              </div>
            </div>
            <p className="mt-16 text-xs text-fg/40">© 2026 {SITE.owner}. {t.footer.rights}</p>
          </div>
          {/* Riesiger Schriftzug als Abschluss */}
          <p
            aria-hidden="true"
            className="outline-text pointer-events-none mt-6 select-none whitespace-nowrap text-center text-[19vw] font-semibold leading-[0.8] tracking-tighter"
          >
            KHASHMAN
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
