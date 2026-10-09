import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit' 
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'], 
  variable: '--font-cormorant' 
});

export const metadata: Metadata = {
  title: "Khashman Webdesign | Test-Projekt",
  description: "Vorläufiges Next.js Setup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${outfit.variable} ${cormorant.variable} font-outfit bg-slate-50 text-slate-900`}>
        
        <nav className="p-6 border-b border-gray-200 flex justify-between items-center max-w-5xl mx-auto w-full">
          <div className="font-cormorant font-bold text-2xl">Khashman Webdesign</div>
          
          <div className="space-x-6 text-sm font-medium">
            <a href="#kontakt" className="hover:text-blue-600 transition-colors">Kontakt</a>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="p-6 text-center text-sm text-gray-500 border-t border-gray-200 mt-12">
          © 2026 Khashman Webdesign. Alle Rechte vorbehalten.
        </footer>
      </body>
    </html>
  );
}