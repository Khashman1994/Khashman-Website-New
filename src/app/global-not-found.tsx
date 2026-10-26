import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";
import { DEFAULT_THEME, THEME_INIT_SCRIPT } from "@/lib/theme";

// 404 für die ganze Website. Nötig, weil es zwei Root-Layouts gibt (Deutsch und Englisch)
// und damit kein gemeinsames Layout, aus dem Next eine 404-Seite bauen könnte.

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "404 – Seite nicht gefunden | Page not found",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="de" data-theme={DEFAULT_THEME} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`${geist.variable} flex min-h-screen items-center justify-center bg-ink-950 px-6 font-sans text-fg antialiased`}>
        <main className="text-center">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">Seite nicht gefunden</h1>
          <p className="mt-3 text-fg/50">Page not found</p>
          <div className="mt-10 flex justify-center gap-3">
            <Link href="/" className="rounded-full bg-fg px-6 py-3 font-medium text-ink-950 transition-colors hover:bg-accent hover:text-white">
              Zur Startseite
            </Link>
            <Link href="/en" hrefLang="en" className="rounded-full border border-fg/15 px-6 py-3 font-medium transition-colors hover:border-fg">
              Go to homepage
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
