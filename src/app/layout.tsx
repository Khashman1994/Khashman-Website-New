import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/SiteHeader";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Webdesign Aachen",
    "Webdesigner Aachen",
    "Website erstellen lassen Aachen",
    "Homepage erstellen lassen",
    "Webentwicklung Aachen",
    "Website für Handwerker",
    "Website für Selbstständige",
    "Local SEO Aachen",
  ],
  authors: [{ name: SITE.owner, url: SITE.url }],
  creator: SITE.owner,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Sonst macht iOS aus Preisen/Zahlen ungewollt Telefon-Links
  formatDetection: { telephone: false },
  category: "Webdesign",
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geist.variable} ${instrument.variable} grain bg-ink-950 font-sans text-white antialiased`}>
        <SmoothScroll />
        <SiteHeader />

        <main className="min-h-screen">{children}</main>

        <footer className="relative overflow-hidden border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 pt-20">
            <div className="flex flex-col justify-between gap-10 md:flex-row">
              <div className="max-w-sm">
                <p className="text-lg font-semibold">
                  Khashman<span className="text-accent">.</span>
                </p>
                <p className="mt-3 text-sm text-white/50">
                  Webdesign &amp; Entwicklung aus {SITE.city}. Schnelle, moderne Webseiten für Unternehmen, die
                  auffallen wollen.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-10 text-sm">
                <div className="flex flex-col gap-3">
                  <p className="text-white/40">Kontakt</p>
                  <a href={`mailto:${SITE.email}`} className="text-white/70 hover:text-white">{SITE.email}</a>
                  <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                    WhatsApp
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-white/40">Rechtliches</p>
                  <Link href="/impressum" className="text-white/70 hover:text-white">Impressum</Link>
                  <Link href="/datenschutz" className="text-white/70 hover:text-white">Datenschutz</Link>
                </div>
              </div>
            </div>
            <p className="mt-16 text-xs text-white/40">© 2026 {SITE.owner}. Alle Rechte vorbehalten.</p>
          </div>
          {/* Riesiger Schriftzug als Abschluss */}
          <p
            aria-hidden="true"
            className="pointer-events-none mt-6 select-none whitespace-nowrap text-center text-[19vw] font-semibold leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.12)]"
          >
            KHASHMAN
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
