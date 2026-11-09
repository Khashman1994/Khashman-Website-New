// Deutsche Texte – Hauptsprache. Die englische Fassung (en.ts) muss dieselbe Struktur haben.

const de = {
  meta: {
    title: "Webdesign Aachen | Khashman Webdesign – Moderne Webseiten ab 599 €",
    description:
      "Webdesign aus Aachen: Moderne, schnelle und DSGVO-konforme Webseiten für Selbstständige, KMU und Gründer. Festpreise ab 599 €, Hosting & Wartung optional. Jetzt kostenloses Erstgespräch sichern.",
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
      { href: "/beispiele", label: "Beispiele" },
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
        text: "Optional buchbar: regelmäßige Updates, tägliche Backups, SSL-Verschlüsselung und DSGVO-Sicherheit – dann müssen Sie sich um nichts kümmern.",
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
        text: "Ihre Seite geht live. Auf Wunsch übernehme ich Hosting, Updates und Backups – Sie konzentrieren sich auf Ihr Geschäft.",
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
        amount: 599,
        price: "599 €",
        monthly: "+ 29 € / Monat",
        monthlyNote: "optional: Hosting & Wartung",
        idealFor: "Lokale Dienstleister, Handwerker, Gründer",
        features: [
          "1 moderne One-Page Website",
          "Voll mobiloptimiert",
          "WhatsApp- & Kontaktformular",
          "Inkl. 1x .de-Domain & SSL",
          "Sicherheitsupdates & Backups mit Hosting & Wartung",
          "DSGVO-konform",
        ],
        cta: "Starter wählen",
        highlighted: false,
      },
      {
        value: "business",
        name: "Business",
        subtitle: "Für wachsende Betriebe",
        amount: 1199,
        price: "1.199 €",
        monthly: "+ 39 € / Monat",
        monthlyNote: "optional: Hosting & Pflege",
        idealFor: "Etablierte Betriebe, die mehrere Leistungen präsentieren wollen",
        features: [
          "Bis zu 5 Unterseiten",
          "Alles aus Starter",
          "Basis-SEO für Google",
          "Google Maps Integration",
          "Kontakt-Chat mit Anfragen-Speicherung",
          "Zusatz: KI-Assistent für deine Website, auf Anfrage",
          "30 Min. Inhaltspflege / Monat mit Hosting & Pflege",
          "1 Feedback- & Revisionsrunde",
        ],
        cta: "Business wählen",
        highlighted: true,
      },
      {
        value: "premium",
        name: "Premium",
        subtitle: "All-in-One",
        amount: 1999,
        price: "1.999 €",
        monthly: "+ 49 € / Monat",
        monthlyNote: "optional: Hosting & Pflege",
        idealFor: "Unternehmen mit Shop, Terminbuchung oder großem Angebot",
        features: [
          "Bis zu 10 Unterseiten oder Online-Shop / Terminbuchung",
          "Erweiterte SEO",
          "Kontakt-Chat mit Anfragen-Speicherung",
          "Zusatz: KI-Assistent für deine Website, auf Anfrage",
          "Prioritäts-Support",
          "60 Min. Inhaltspflege / Monat mit Hosting & Pflege",
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
        a: "Ein Starter-Projekt ist in der Regel in 2–3 Wochen live, ein Business-Projekt in 3–4 Wochen und ein Premium-Projekt in bis zu 6 Wochen. Die Zeit beginnt, sobald Texte, Bilder und Zugangsdaten vollständig vorliegen, und hängt davon ab, wie schnell Feedback kommt.",
      },
      {
        q: "Muss ich die monatliche Gebühr zahlen?",
        a: "Nein, die monatliche Gebühr ist optional. Wenn Sie sie buchen, übernehme ich Hosting, SSL-Zertifikat, Domain, Sicherheitsupdates und Backups, bei Business und Premium zusätzlich die Inhaltspflege – Sie schicken mir Änderungen, ich setze sie um. Ohne Monatsgebühr zahlen Sie nur den einmaligen Preis und kümmern sich selbst um Hosting und Pflege.",
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
      {
        q: "Was ist ein KI-Chatbot für die Website?",
        a: "Ein Assistent auf Ihrer Website, der Fragen von Besuchern in normaler Sprache beantwortet, rund um die Uhr. Er nutzt die Informationen, die ich gemeinsam mit Ihnen für Ihren Betrieb hinterlege, zum Beispiel Leistungen, Preise, Öffnungszeiten und Ablauf.",
      },
      {
        q: "Was kostet ein KI-Chatbot?",
        a: "Die Kosten bestehen aus einer einmaligen Einrichtung und einer monatlichen Pauschale für Betrieb und Pflege. Die genauen Preise nenne ich Ihnen nach einem kurzen Gespräch, weil sie vom Umfang und vom Besucheraufkommen abhängen.",
      },
      {
        q: "Wie viel Aufwand habe ich mit einem KI-Chatbot?",
        a: "Wenig. Wir besprechen einmal gemeinsam, was der Chat wissen soll. Ich richte ihn ein, teste ihn und passe ihn an. Änderungen, etwa bei Öffnungszeiten oder Preisen, schicken Sie mir, und ich pflege sie ein.",
      },
      {
        q: "Ist ein KI-Chatbot DSGVO-konform?",
        a: "Ich richte den Chat so ein, dass Besucher klar erfahren, dass sie mit einer KI sprechen, und ergänze Ihre Datenschutzerklärung. Weil die Fragen an einen KI-Anbieter in den USA gehen, kläre ich die rechtliche Grundlage vor dem Start mit Ihnen.",
      },
      {
        q: "Was passiert, wenn der Chatbot eine Frage nicht beantworten kann?",
        a: "Er sagt das offen und verweist auf Sie. Auf Wunsch sammelt er den Namen, die Kontaktdaten und die Frage und schickt sie Ihnen per E-Mail.",
      },
      {
        q: "Kann ein KI-Chatbot falsche Antworten geben?",
        a: "KI kann sich irren. Deshalb beschränke ich ihn auf die Informationen, die Sie freigegeben haben, und teste typische Fragen vor dem Start. Bei Unsicherheit verweist er auf Sie, statt etwas zu erfinden.",
      },
      {
        q: "Für welche Betriebe lohnt sich ein KI-Chatbot?",
        a: "Vor allem dort, wo viele Besucher dieselben Fragen stellen und nach Feierabend anfragen: Handwerk, Praxen, Immobilien, Dienstleister mit vielen Leistungen. Bei Betrieben mit wenigen Besuchern reicht oft ein einfacher FAQ-Chat.",
      },
      {
        q: "Arbeiten Sie nur in Aachen?",
        a: "Nein. Ich betreue Kunden auch bundesweit und international, Gespräche laufen bei Bedarf online.",
      },
      {
        q: "Gibt es eine einfachere Variante als einen KI-Chatbot?",
        a: "Ja. Der FAQ-Chat ist in den Paketen Business und Premium enthalten. Er beantwortet feste Fragen und nimmt Anfragen entgegen, ohne KI.",
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
    google: "Google-Profil",
    googleHint: "Bewertungen lesen und schreiben",
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
    google: "Google-Profil & Bewertungen",
    rights: "Alle Rechte vorbehalten.",
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
