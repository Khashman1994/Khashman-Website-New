// Deutsche Texte – Hauptsprache. Die englische Fassung (en.ts) muss dieselbe Struktur haben.

const de = {
  meta: {
    title: "Webdesign Aachen | Khashman Webdesign – Moderne Webseiten ab 299 €",
    description:
      "Webdesign aus Aachen: Moderne, schnelle und DSGVO-konforme Webseiten für Selbstständige, KMU und Gründer. Festpreise ab 299 €, Hosting & Wartung inklusive. Jetzt kostenloses Erstgespräch sichern.",
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
    ogLocale: "de_DE",
    ogImageAlt: "Khashman Webdesign – Moderne Webseiten aus Aachen",
  },

  nav: {
    links: [
      { href: "#leistungen", label: "Leistungen" },
      { href: "#prozess", label: "Prozess" },
      { href: "#ueber-mich", label: "Über mich" },
      { href: "#preise", label: "Preise" },
      { href: "#faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
    ],
    cta: "Projekt starten",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache wählen",
    themeToggle: "Hell- oder Dunkelmodus umschalten",
  },

  hero: {
    badge: "Webdesign aus Aachen · Verfügbar für neue Projekte",
    headline: [
      [{ text: "Webseiten," }, { text: "die" }],
      [{ text: "Eindruck", serif: true }],
      [{ text: "hinterlassen." }],
    ] as { text: string; serif?: boolean }[][],
    sub: "Moderne, blitzschnelle und conversion-starke Webseiten für KMU & Gründer – persönlich umgesetzt, zum Festpreis.",
    ctaPrimary: "Kostenloses Erstgespräch",
    ctaSecondary: "Pakete ansehen",
  },

  marquee: ["Webdesign", "Entwicklung", "Local SEO", "Hosting", "Performance", "DSGVO-konform", "Online-Shops", "Terminbuchung"],
  marqueeLabel: "Schwerpunkte",

  statement: {
    label: "Mein Ansatz",
    text: "Ihre Website ist oft der erste Eindruck, den Kunden von Ihnen bekommen. Ich sorge dafür, dass er hängen bleibt – mit Design, das überzeugt, und Technik, die einfach funktioniert.",
  },

  services: {
    label: "Leistungen",
    title: { before: "Alles für Ihren ", serif: "digitalen", after: " Auftritt" },
    sub: "Von der ersten Idee bis zum laufenden Betrieb – aus einer Hand und mit klaren Zuständigkeiten.",
    items: [
      {
        title: "Moderne Webseiten",
        text: "Responsive One-Pager und Mehrseiter mit sauberer Architektur – schnell, wartbar und auf jedem Gerät pixelgenau.",
        tags: ["One-Pager", "Mehrseiter", "Responsive"],
      },
      {
        title: "Wartung & Hosting",
        text: "Regelmäßige Updates, tägliche Backups, SSL-Verschlüsselung und DSGVO-Sicherheit – Sie müssen sich um nichts kümmern.",
        tags: ["Updates", "Backups", "SSL"],
      },
      {
        title: "Local SEO & Performance",
        text: "Google Unternehmensprofil, Ladezeitoptimierung und Core Web Vitals – damit Kunden aus Ihrer Region Sie zuerst finden.",
        tags: ["Google", "Core Web Vitals"],
      },
      {
        title: "Design mit Wirkung",
        text: "Animationen, klare Typografie und eine Bildsprache, die Ihre Marke hochwertig wirken lässt.",
        tags: ["UI", "Motion", "Branding"],
      },
    ],
  },

  process: {
    label: "Prozess",
    title: { before: "In vier Schritten ", serif: "online", after: "" },
    steps: [
      {
        title: "Erstgespräch",
        text: "Kostenlos und unverbindlich: Wir klären Ziele, Zielgruppe und Umfang. Danach erhalten Sie ein Festpreis-Angebot.",
        time: "Tag 1",
      },
      { title: "Konzept & Design", text: "Ich entwerfe Struktur und Design Ihrer Seite. Sie geben Feedback, bis alles passt.", time: "Woche 1" },
      {
        title: "Entwicklung",
        text: "Umsetzung mit modernster Technik – schnell, sicher, mobiloptimiert und suchmaschinenfreundlich.",
        time: "Woche 2–3",
      },
      {
        title: "Launch & Betreuung",
        text: "Ihre Seite geht live. Hosting, Updates und Backups übernehme ich – Sie konzentrieren sich auf Ihr Geschäft.",
        time: "Laufend",
      },
    ],
  },

  about: {
    label: "Über mich",
    title: { before: "Kein Agentur-", serif: "Wasserkopf.", after: "" },
    text: "Ich bin Khashman, Student der Software-Entwicklung an der FH Aachen. Ich verbinde fundiertes Software-Engineering mit persönlicher Betreuung auf Augenhöhe: transparente Festpreise, direkte Kommunikation und eine Umsetzung, die sich sehen lassen kann.",
    imageAlt: "Khashman Alturki – Gründer von Khashman Webdesign",
    role: "Gründer",
    facts: [
      { term: "Ansprechpartner", value: "Direkt & persönlich" },
      { term: "Preise", value: "Feste Pakete" },
      { term: "Antwort", value: "Innerhalb 24 h" },
    ],
  },

  pricing: {
    label: "Preise",
    title: { before: "Transparente ", serif: "Pakete", after: "" },
    sub: "Feste Preise, keine versteckten Kosten. Sie wissen von Anfang an, woran Sie sind.",
    popular: "Beliebteste Wahl",
    oneTime: "einmalig",
    idealFor: "Ideal für:",
    note: "Alle Preise gemäß § 19 UStG ohne Ausweis der Umsatzsteuer. Individuelle Anforderungen auf Anfrage.",
    packages: [
      {
        value: "starter",
        name: "Starter",
        subtitle: "Visitenkarte",
        amount: 299,
        price: "299 €",
        monthly: "+ 29 € / Monat",
        monthlyNote: "Hosting & Wartung",
        idealFor: "Lokale Dienstleister, Handwerker, Gründer",
        features: [
          "1 moderne One-Page Website",
          "Voll mobiloptimiert",
          "WhatsApp- & Kontaktformular",
          "Inkl. 1x .de-Domain & SSL",
          "Monatliche Sicherheitsupdates & Backups",
          "DSGVO-konform",
        ],
        cta: "Starter wählen",
        highlighted: false,
      },
      {
        value: "business",
        name: "Business",
        subtitle: "Für wachsende Betriebe",
        amount: 649,
        price: "649 €",
        monthly: "+ 39 € / Monat",
        monthlyNote: "Hosting & Pflege",
        idealFor: "Etablierte Betriebe, die mehrere Leistungen präsentieren wollen",
        features: [
          "Bis zu 5 Unterseiten",
          "Alles aus Starter",
          "Basis-SEO für Google",
          "Google Maps Integration",
          "30 Min. Inhaltspflege / Monat inklusive",
          "1 Feedback- & Revisionsrunde",
        ],
        cta: "Business wählen",
        highlighted: true,
      },
      {
        value: "premium",
        name: "Premium",
        subtitle: "All-in-One",
        amount: 1199,
        price: "1.199 €",
        monthly: "+ 49 € / Monat",
        monthlyNote: "Hosting & Pflege",
        idealFor: "Unternehmen mit Shop, Terminbuchung oder großem Angebot",
        features: [
          "Bis zu 10 Unterseiten oder Online-Shop / Terminbuchung",
          "Erweiterte SEO",
          "Prioritäts-Support",
          "60 Min. Inhaltspflege / Monat inklusive",
          "2 Feedbackrunden",
        ],
        cta: "Premium besprechen",
        highlighted: false,
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: { before: "Häufige ", serif: "Fragen", after: "" },
    sub: "Ihre Frage ist nicht dabei? Schreiben Sie mir einfach.",
    items: [
      {
        q: "Wie lange dauert es, bis meine Website online ist?",
        a: "Ein Starter-Projekt ist in der Regel in 1–2 Wochen live, Business- und Premium-Projekte in 2–4 Wochen – abhängig davon, wie schnell Inhalte und Feedback vorliegen.",
      },
      {
        q: "Was ist in der monatlichen Gebühr enthalten?",
        a: "Hosting, SSL-Zertifikat, Domain, Sicherheitsupdates und Backups. Bei Business und Premium zusätzlich Inhaltspflege – Sie schicken mir Änderungen, ich setze sie um.",
      },
      {
        q: "Muss ich Texte und Bilder selbst liefern?",
        a: "Am besten kennen Sie Ihr Geschäft – deshalb liefern Sie die Inhalte. Ich helfe gern beim Formulieren und beim Auswählen passender Bilder.",
      },
      {
        q: "Gibt es versteckte Kosten?",
        a: "Nein. Sie erhalten vorab ein Festpreis-Angebot. Zusätzliche Wünsche bespreche ich immer vorher mit Ihnen.",
      },
      {
        q: "Kann ich später ein größeres Paket wählen?",
        a: "Ja, jederzeit. Ihre Website wächst mit Ihrem Unternehmen – der bereits gezahlte Betrag wird dabei fair berücksichtigt.",
      },
    ],
  },

  contact: {
    label: "Kontakt",
    titleLine: "Lassen Sie uns",
    titleSerif: "etwas bauen.",
    intro:
      "Schreiben Sie direkt per WhatsApp, senden Sie eine E-Mail oder nutzen Sie das Formular. Ich melde mich in der Regel innerhalb von 24 Stunden.",
    whatsapp: "WhatsApp",
    call: "Anrufen",
    email: "E-Mail",
  },

  form: {
    packageLegend: "Welches Paket interessiert Sie?",
    budgetLabel: "Ungefähres Budget",
    name: "Name",
    namePlaceholder: "Max Mustermann",
    phone: "Telefonnummer",
    optional: "(optional)",
    phonePlaceholder: "+49 …",
    email: "E-Mail",
    emailPlaceholder: "mail@beispiel.de",
    message: "Nachricht",
    messagePlaceholder: "Beschreiben Sie kurz Ihr Projekt …",
    submit: "Anfrage senden",
    sending: "Wird gesendet …",
    consentBefore: "Mit dem Absenden stimmen Sie der Datenverarbeitung gemäß unserer ",
    consentLink: "Datenschutzerklärung",
    consentAfter: " zu.",
    honeypotLabel: "Website",
    messages: {
      nameRequired: "Bitte geben Sie Ihren Namen an.",
      nameTooLong: "Der Name ist zu lang.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      phoneInvalid: "Bitte geben Sie eine gültige Telefonnummer an.",
      messageTooShort: "Bitte schreiben Sie mindestens 10 Zeichen.",
      messageTooLong: "Die Nachricht ist zu lang.",
      packageRequired: "Bitte wählen Sie ein Paket aus.",
      budgetInvalid: "Bitte wählen Sie ein gültiges Budget aus.",
      checkInputs: "Bitte prüfen Sie Ihre Eingaben.",
      sendFailed:
        "Ihre Anfrage konnte leider nicht gesendet werden. Bitte versuchen Sie es später erneut oder schreiben Sie uns per WhatsApp.",
      thanksShort: "Vielen Dank für Ihre Anfrage!",
      thanks: "Vielen Dank für Ihre Anfrage! Ich melde mich in der Regel innerhalb von 24 Stunden bei Ihnen.",
    },
  },

  footer: {
    tagline: "Webdesign & Entwicklung aus Aachen. Schnelle, moderne Webseiten für Unternehmen, die auffallen wollen.",
    contact: "Kontakt",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    cookieSettings: "Cookie-Einstellungen",
    rights: "Alle Rechte vorbehalten.",
  },

  // Einwilligungs-Banner (src/components/CookieBanner.tsx) und Platzhalter für den Blog
  cookie: {
    title: "Externe Inhalte & Einstellungen",
    text: "Für den Blog laden wir Inhalte eines externen Dienstes. Dabei kann Ihre IP-Adresse an dessen Anbieter übertragen werden. Das geschieht nur mit Ihrer Zustimmung. Technisch notwendige Einstellungen wie Ihre Hell-/Dunkel-Wahl speichern wir lokal in Ihrem Browser.",
    privacyLink: "Datenschutz",
    imprintLink: "Impressum",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    blogTitle: "Der Blog braucht Ihre Zustimmung",
    blogText: "Die Beiträge werden von einem externen Dienst bereitgestellt. Zum Anzeigen müssen Sie dem Laden dieser Inhalte zustimmen.",
    blogButton: "Blog laden",
  },

  jsonLd: {
    jobTitle: "Webentwickler",
    knowsAbout: ["Webdesign", "Webentwicklung", "Local SEO", "Webhosting", "Online-Shops"],
    catalogName: "Webdesign-Pakete",
    offerPrefix: "Website-Paket",
    language: "de-DE",
    country: "Deutschland",
  },
};

export default de;
