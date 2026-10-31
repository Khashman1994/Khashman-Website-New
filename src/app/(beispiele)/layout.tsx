import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/app/globals.css";
import { SITE } from "@/lib/site";

// Eigenes Root-Layout für die Beispiel-Websites unter /beispiele/…
// Ohne Header/Footer von Khashman Webdesign, damit jede Seite wie die Website
// des jeweiligen Betriebs aussieht. Alles ist fiktiv → nicht indexieren.

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Design-Beispiele", template: `%s | Design-Beispiel von ${SITE.name}` },
  robots: { index: false, follow: false },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${fraunces.variable} ${bricolage.variable} ${jakarta.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
