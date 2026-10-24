import type { Metadata } from "next";
import Link from "next/link";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Khashman Webdesign | Professionelle Webseiten für Unternehmen",
  description:
    "Maßgeschneiderte Webseiten & Webhosting für KMU und Gründer aus Aachen. Transparent, modern und DSGVO-konform ab 299 €.",
};

const navLinks = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#preise", label: "Preise" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${cormorant.variable} font-sans bg-slate-50 text-slate-900 antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight">
              Khashman<span className="text-blue-600">.</span>
            </Link>

            <div className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hidden text-slate-600 transition-colors hover:text-slate-900 md:inline"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#kontakt"
                className="rounded-full bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                Kontakt
              </Link>
            </div>
          </nav>
        </header>

        <main className="min-h-screen">{children}</main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">
            <p>© 2026 Khashman Alturki. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="/impressum" className="transition-colors hover:text-slate-900">
                Impressum
              </Link>
              <Link href="/datenschutz" className="transition-colors hover:text-slate-900">
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
