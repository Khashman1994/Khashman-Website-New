import React from 'react';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      {/* Hero & Leistungs-Bereich */}
      <section className="text-center py-16 md:py-24">
        <h1 className="font-cormorant text-5xl md:text-7xl font-bold mb-6 text-slate-900">
          Digitale Lösungen, <br/>
          <span className="text-blue-600">die Ihr Geschäft voranbringen.</span>
        </h1>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Wir entwickeln maßgeschneiderte, performante und conversion-starke digitale Auftritte für Ihren Erfolg.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Webseiten</h3>
            <p className="text-slate-600">
              Moderne, schnelle und ansprechende Unternehmenswebsites, die auf allen Geräten perfekt funktionieren.
            </p>
          </div>
          
          <div className="p-8 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl mb-4">🛒</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Online-Shops</h3>
            <p className="text-slate-600">
              Umsatzstarke E-Commerce-Plattformen mit reibungsloser Benutzererfahrung.
            </p>
          </div>
          
          <div className="p-8 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">SEO</h3>
            <p className="text-slate-600">
              Zielgerichtete Suchmaschinenoptimierung für bessere Rankings auf Google.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt-Bereich */}
      <section id="kontakt" className="py-20 border-t border-slate-200 mt-8 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-cormorant text-4xl font-bold mb-4 text-slate-900">Lassen Sie uns starten</h2>
          <p className="text-slate-600">
            Schreiben Sie direkt per WhatsApp, senden Sie eine E-Mail oder nutzen Sie das Kontaktformular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-4">
            {/* HINWEIS: Hier können Sie später noch die Telefonnummer für WhatsApp anpassen */}
            <a 
              href="https://wa.me/491735434710" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-lg transition-colors shadow-sm"
            >
              Direkt per WhatsApp schreiben
            </a>
            
            <a 
              href="mailto:khashman123123@outlook.de" 
              className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-900 text-white font-medium py-4 px-6 rounded-lg transition-colors shadow-sm"
            >
              E-Mail senden
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            {/* Formspree-Link wurde hier eingebaut */}
            <form action="https://formspree.io/f/myekwrol" method="POST" className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Ihr Name</label>
                <input type="text" name="name" id="name" required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Max Mustermann" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Ihre E-Mail</label>
                <input type="email" name="email" id="email" required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="mail@beispiel.de" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Wie kann ich Ihnen helfen?</label>
                <textarea name="message" id="message" rows={4} required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Beschreiben Sie kurz Ihr Projekt..."></textarea>
              </div>
              
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors mt-2 shadow-sm">
                Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}