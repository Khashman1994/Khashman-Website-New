// Fiktive Beispiel-Websites für die Branchen-Konzepte (/beispiele/[slug]).
// Alle Betriebe, Namen, Adressen und Bewertungen sind erfunden – jede Seite
// zeigt das oben in einem Hinweisbalken an und ist für Suchmaschinen gesperrt.
// Die `slug`-Werte müssen zu den `id`s in IndustryShowcase.tsx passen.

export type DemoFont = "serif" | "grotesk" | "sans";

export type DemoIcon =
  | "brush" | "car" | "sparkle" | "stethoscope" | "activity" | "file" | "scale"
  | "compass" | "utensils" | "bed" | "scissors" | "dumbbell" | "bag" | "home";

export type DemoTheme = {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  line: string;
  /** Flächenfarbe für Buttons und Markierungen */
  accent: string;
  /** Text auf der Akzentfläche */
  onAccent: string;
  /** Akzent als Schriftfarbe – so abgestimmt, dass er auf bg/surface lesbar ist */
  accentText: string;
};

export type DemoWidget =
  | { kind: "beforeAfter"; before: string; after: string; beforeTone: string; afterTone: string }
  | {
      kind: "booking";
      services: { name: string; detail: string }[];
      staff?: string[];
      days: string[];
      slots: string[];
      confirm: string;
    }
  | {
      kind: "calculator";
      inputLabel: string;
      unit: string;
      min: number;
      max: number;
      step: number;
      initial: number;
      rate: number;
      options: { label: string; factor: number }[];
      optionsLabel: string;
      resultLabel: string;
      spread?: number;
      note: string;
    }
  | { kind: "upload"; dropLabel: string; hint: string; fields: string[]; confirm: string }
  | { kind: "menu"; tabs: { name: string; items: { name: string; text: string; price: string }[] }[] }
  | { kind: "availability"; month: string; startWeekday: number; days: number; booked: number[]; pricePerNight: number }
  | { kind: "schedule"; days: { name: string; classes: { time: string; name: string; spots: number }[] }[] }
  | { kind: "reserve"; products: { name: string; text: string; price: string; stock: number }[] }
  | { kind: "callback"; areas: string[]; confirm: string };

export type DemoSite = {
  slug: string;
  industry: string;
  name: string;
  logoMark: string;
  domain: string;
  icon: DemoIcon;
  font: DemoFont;
  /** Seiten öffnen immer hell, dunkel nur per Schalter */
  palettes: { light: DemoTheme; dark: DemoTheme };
  nav: string[];
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    badge: { label: string; value: string };
  };
  facts: [string, string][];
  servicesTitle: string;
  services: { title: string; text: string }[];
  widget: { title: string; text: string; config: DemoWidget };
  testimonials: { quote: string; name: string; role: string }[];
  contact: { address: string; hours: string[]; cta: string };
};

export const DEMO_SITES: DemoSite[] = [
  {
    slug: "handwerk",
    industry: "Handwerksbetrieb",
    name: "Malerbetrieb Schmitz",
    logoMark: "S",
    domain: "malerbetrieb-schmitz.de",
    icon: "brush",
    font: "grotesk",
    palettes: {
      light: { bg: "#ffffff", surface: "#f4f4f2", ink: "#1d2125", muted: "#5b636b", line: "#e2e3e0", accent: "#c2410c", onAccent: "#ffffff", accentText: "#c2410c" },
      dark: { bg: "#171010", surface: "#241b1c", ink: "#f0ecec", muted: "#aaa4a8", line: "#3a3031", accent: "#df4b0e", onAccent: "#171010", accentText: "#ef5215" },
    },
    nav: ["Leistungen", "Referenzen", "Über uns", "Kontakt"],
    hero: {
      eyebrow: "Meisterbetrieb seit 1998 · Aachen und Umgebung",
      title: "Saubere Wände. Pünktliche Handwerker. Fester Preis.",
      text: "Innen- und Fassadenarbeiten, Tapezieren und Bodenbeläge. Wir kommen zur Besichtigung, Sie bekommen innerhalb von 48 Stunden ein verbindliches Angebot.",
      primary: "Besichtigung anfragen",
      secondary: "Referenzen ansehen",
      badge: { label: "Notdienst", value: "24/7 erreichbar" },
    },
    facts: [["26", "Jahre Erfahrung"], ["1.400+", "Projekte"], ["48 h", "bis zum Angebot"]],
    servicesTitle: "Was wir für Sie machen",
    services: [
      { title: "Innenanstrich", text: "Wände und Decken, auch in bewohnten Räumen mit Abdeckung und Endreinigung." },
      { title: "Fassade", text: "Reinigung, Rissanierung und Anstrich mit Gerüst aus einer Hand." },
      { title: "Tapezierarbeiten", text: "Vlies, Raufaser und Designtapeten, sauber auf Stoß geklebt." },
      { title: "Bodenbeläge", text: "Vinyl, Laminat und Teppich inklusive Sockelleisten." },
    ],
    widget: {
      title: "Vorher und nachher",
      text: "Ziehen Sie den Regler. Wohnzimmer in Burtscheid, zwei Tage Arbeit.",
      config: { kind: "beforeAfter", before: "Vorher", after: "Nachher", beforeTone: "#9a8f7e", afterTone: "#dfe7e4" },
    },
    testimonials: [
      { quote: "Pünktlich, ordentlich und am Ende genau der Preis aus dem Angebot. Gerne wieder.", name: "Familie Kurth", role: "Aachen-Brand" },
      { quote: "Die Fassade sieht aus wie neu. Kommunikation lief komplett per WhatsApp, sehr angenehm.", name: "Hausverwaltung Pütz", role: "Eschweiler" },
    ],
    contact: { address: "Musterweg 12, 52062 Aachen", hours: ["Mo–Fr 7:00–17:00", "Notdienst rund um die Uhr"], cta: "Angebot anfordern" },
  },
  {
    slug: "kfz",
    industry: "Kfz-Werkstatt",
    name: "Autoservice Brand",
    logoMark: "AB",
    domain: "autoservice-brand.de",
    icon: "car",
    font: "grotesk",
    palettes: {
      light: { bg: "#fffef9", surface: "#f4f3eb", ink: "#262419", muted: "#60615b", line: "#e4e2d6", accent: "#f5c400", onAccent: "#262419", accentText: "#876c00" },
      dark: { bg: "#0e1013", surface: "#181b20", ink: "#f3f4f6", muted: "#a2a8b2", line: "#2a2f37", accent: "#f5c400", onAccent: "#111111", accentText: "#f5c400" },
    },
    nav: ["Leistungen", "Preise", "Termin", "Kontakt"],
    hero: {
      eyebrow: "Freie Meisterwerkstatt für alle Marken",
      title: "Inspektion, TÜV und Reifen. Zum Festpreis.",
      text: "Herstellergerechte Wartung ohne Verlust der Garantie. Sie buchen online, wir rufen nur an, wenn wir etwas finden.",
      primary: "Termin buchen",
      secondary: "Preise ansehen",
      badge: { label: "Nächster freier Termin", value: "Morgen, 8:30 Uhr" },
    },
    facts: [["ab 149 €", "Inspektion"], ["4,9 ★", "aus 312 Bewertungen"], ["1 Tag", "übliche Standzeit"]],
    servicesTitle: "Leistungen mit festen Preisen",
    services: [
      { title: "Inspektion", text: "Nach Herstellervorgabe, mit Stempel im Serviceheft. Ab 149 €." },
      { title: "HU/AU", text: "TÜV-Prüfer kommt zweimal pro Woche ins Haus. 139 €." },
      { title: "Reifenservice", text: "Wechsel, Wuchten und Einlagerung. Wechsel ab 39 €." },
      { title: "Klimaservice", text: "Desinfektion und Befüllung. 89 €." },
    ],
    widget: {
      title: "Termin in 30 Sekunden",
      text: "Leistung wählen, Tag und Uhrzeit antippen. Fertig.",
      config: {
        kind: "booking",
        services: [
          { name: "Inspektion", detail: "ab 149 € · ca. 3 Std." },
          { name: "HU/AU", detail: "139 € · ca. 1 Std." },
          { name: "Reifenwechsel", detail: "ab 39 € · ca. 30 Min." },
        ],
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        slots: ["7:30", "8:30", "10:00", "13:00", "14:30", "16:00"],
        confirm: "Termin vorgemerkt. Sie bekommen eine Bestätigung per SMS.",
      },
    },
    testimonials: [
      { quote: "Online gebucht, morgens abgegeben, mittags fertig. Preis wie angekündigt.", name: "Marco D.", role: "VW Golf" },
      { quote: "Endlich eine Werkstatt, die vorher fragt, bevor sie etwas tauscht.", name: "Sandra L.", role: "Opel Corsa" },
    ],
    contact: { address: "Gewerbering 4, 52078 Aachen", hours: ["Mo–Fr 7:30–18:00", "Sa 9:00–13:00"], cta: "Rückruf anfordern" },
  },
  {
    slug: "reinigung",
    industry: "Gebäudereinigung",
    name: "Glanzwerk",
    logoMark: "G",
    domain: "glanzwerk-aachen.de",
    icon: "sparkle",
    font: "sans",
    palettes: {
      light: { bg: "#f3faf9", surface: "#ffffff", ink: "#0f2a2a", muted: "#4a6362", line: "#d5e7e5", accent: "#0b7568", onAccent: "#ffffff", accentText: "#0b7568" },
      dark: { bg: "#0c1315", surface: "#151f23", ink: "#e9eeef", muted: "#9ba9b0", line: "#28353a", accent: "#0e9181", onAccent: "#0c1315", accentText: "#0f9988" },
    },
    nav: ["Leistungen", "Preisrechner", "Gewerbe", "Kontakt"],
    hero: {
      eyebrow: "Gebäudereinigung für Büros, Praxen und Treppenhäuser",
      title: "Sauber. Pünktlich. Zuverlässig.",
      text: "Feste Reinigungskräfte, feste Zeiten, ein Ansprechpartner. Den Preis sehen Sie sofort, ohne Besichtigungstermin.",
      primary: "Preis berechnen",
      secondary: "Leistungen",
      badge: { label: "Feste Teams", value: "Immer dieselben Gesichter" },
    },
    facts: [["180+", "betreute Objekte"], ["98 %", "Vertragsverlängerung"], ["2 Std.", "Reaktionszeit"]],
    servicesTitle: "Leistungen",
    services: [
      { title: "Unterhaltsreinigung", text: "Büros und Praxen, täglich oder wöchentlich, auch abends." },
      { title: "Treppenhausreinigung", text: "Für Hausverwaltungen mit Protokoll nach jedem Einsatz." },
      { title: "Glasreinigung", text: "Fenster, Rahmen und Wintergärten bis 12 Meter Höhe." },
      { title: "Grundreinigung", text: "Nach Umbau, Auszug oder vor der Neueröffnung." },
    ],
    widget: {
      title: "Ihr Preis in Sekunden",
      text: "Fläche einstellen und Rhythmus wählen. Der Richtwert gilt für normale Verschmutzung.",
      config: {
        kind: "calculator",
        inputLabel: "Fläche",
        unit: "m²",
        min: 50,
        max: 1000,
        step: 10,
        initial: 200,
        rate: 0.62,
        optionsLabel: "Rhythmus",
        options: [
          { label: "1× pro Woche", factor: 4.3 },
          { label: "2× pro Woche", factor: 8.2 },
          { label: "Täglich (Mo–Fr)", factor: 19.5 },
        ],
        resultLabel: "pro Monat, zzgl. MwSt.",
        note: "Richtwert. Das verbindliche Angebot folgt nach einer kurzen Begehung.",
      },
    },
    testimonials: [
      { quote: "Seit zwei Jahren dasselbe Team, null Ausfälle. Genau das wollten wir.", name: "Dr. Albrecht", role: "Zahnarztpraxis" },
      { quote: "Die Protokolle nach jedem Einsatz sparen uns viele Nachfragen von Mietern.", name: "Immobilien Weiden", role: "Hausverwaltung" },
    ],
    contact: { address: "Kaiserplatz 7, 52062 Aachen", hours: ["Büro Mo–Fr 8:00–16:00", "Einsätze auch abends und am Wochenende"], cta: "Begehung vereinbaren" },
  },
  {
    slug: "arztpraxis",
    industry: "Arzt- & Zahnarztpraxis",
    name: "Hausarztpraxis Dr. Weber",
    logoMark: "W",
    domain: "praxis-dr-weber.de",
    icon: "stethoscope",
    font: "sans",
    palettes: {
      light: { bg: "#ffffff", surface: "#f2f6fb", ink: "#122033", muted: "#4f5d70", line: "#dfe6ef", accent: "#1d5fd1", onAccent: "#ffffff", accentText: "#1d5fd1" },
      dark: { bg: "#0d121c", surface: "#171e2b", ink: "#e9edf4", muted: "#9da7b8", line: "#2a3345", accent: "#2b6ee2", onAccent: "#ffffff", accentText: "#4f86e6" },
    },
    nav: ["Praxis", "Leistungen", "Team", "Termine"],
    hero: {
      eyebrow: "Allgemeinmedizin · Burtscheid",
      title: "Ihre Hausarztpraxis in Burtscheid",
      text: "Termine online buchen, Rezepte bestellen und alle Infos zur Praxis an einem Ort. Neue Patientinnen und Patienten sind willkommen.",
      primary: "Termin online buchen",
      secondary: "Sprechzeiten",
      badge: { label: "Heute geöffnet", value: "8:00–12:00 · 15:00–18:00" },
    },
    facts: [["3", "Ärztinnen und Ärzte"], ["< 3 Tage", "Wartezeit auf Termin"], ["barrierefrei", "Zugang mit Aufzug"]],
    servicesTitle: "Unsere Leistungen",
    services: [
      { title: "Hausärztliche Versorgung", text: "Akute Beschwerden, chronische Erkrankungen und Hausbesuche." },
      { title: "Vorsorge", text: "Check-up ab 35, Hautkrebs-Screening und Gesundheitsberatung." },
      { title: "Impfungen", text: "Standard- und Reiseimpfungen nach STIKO-Empfehlung." },
      { title: "Labor und EKG", text: "Blutentnahme, Ruhe-EKG und Langzeit-Blutdruck vor Ort." },
    ],
    widget: {
      title: "Termin online",
      text: "Wählen Sie den Anlass. Akute Beschwerden: bitte rufen Sie an.",
      config: {
        kind: "booking",
        services: [
          { name: "Sprechstunde", detail: "Bekannte Beschwerden, Kontrolle" },
          { name: "Vorsorge", detail: "Check-up, Screening" },
          { name: "Impfung", detail: "Bitte Impfpass mitbringen" },
        ],
        staff: ["Dr. Weber", "Dr. Yilmaz", "Egal"],
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        slots: ["8:15", "9:00", "10:30", "15:15", "16:00", "17:30"],
        confirm: "Termin reserviert. Die Bestätigung kommt per E-Mail.",
      },
    },
    testimonials: [
      { quote: "Termin am Abend online gebucht, am nächsten Morgen dran. Sehr freundliches Team.", name: "Petra M.", role: "Patientin" },
      { quote: "Rezept online bestellt und am selben Tag in der Apotheke abgeholt.", name: "Hans-Jürgen K.", role: "Patient" },
    ],
    contact: { address: "Kurparkstraße 3, 52066 Aachen", hours: ["Mo, Di, Do 8:00–12:00 und 15:00–18:00", "Mi, Fr 8:00–12:00"], cta: "Rezept bestellen" },
  },
  {
    slug: "physio",
    industry: "Physiotherapie",
    name: "Physio am Markt",
    logoMark: "P",
    domain: "physio-am-markt.de",
    icon: "activity",
    font: "sans",
    palettes: {
      light: { bg: "#f4f8f3", surface: "#ffffff", ink: "#16261b", muted: "#506055", line: "#dbe6dc", accent: "#2e7d4f", onAccent: "#ffffff", accentText: "#2e7d4f" },
      dark: { bg: "#0e1414", surface: "#182021", ink: "#eaeeee", muted: "#9ea9ae", line: "#2b3638", accent: "#36935d", onAccent: "#0e1414", accentText: "#3a9963" },
    },
    nav: ["Therapien", "Kurse", "Team", "Rezept"],
    hero: {
      eyebrow: "Physiotherapie · Manuelle Therapie · Kurse",
      title: "Wieder schmerzfrei bewegen",
      text: "Rezept fotografieren, hochladen, fertig. Wir melden uns innerhalb eines Werktags mit Ihrer Terminserie.",
      primary: "Rezept einreichen",
      secondary: "Unsere Therapien",
      badge: { label: "Alle Kassen", value: "und Privatpatienten" },
    },
    facts: [["8", "Therapeutinnen und Therapeuten"], ["1 Werktag", "bis zur Rückmeldung"], ["12", "Kurse pro Woche"]],
    servicesTitle: "Therapien",
    services: [
      { title: "Krankengymnastik", text: "Nach Operationen, Unfällen und bei chronischen Rückenschmerzen." },
      { title: "Manuelle Therapie", text: "Gezielte Mobilisation von Gelenken und Wirbelsäule." },
      { title: "Lymphdrainage", text: "Auch als Hausbesuch für Patienten mit eingeschränkter Mobilität." },
      { title: "Präventionskurse", text: "Rückenfit und Pilates, von Krankenkassen bezuschusst." },
    ],
    widget: {
      title: "Rezept einreichen",
      text: "Foto oder PDF genügt. Ihre Daten werden verschlüsselt übertragen.",
      config: {
        kind: "upload",
        dropLabel: "Rezept hierher ziehen oder auswählen",
        hint: "JPG, PNG oder PDF, bis 10 MB",
        fields: ["Name", "Telefon"],
        confirm: "Danke. Wir melden uns innerhalb eines Werktags mit Terminvorschlägen.",
      },
    },
    testimonials: [
      { quote: "Nach dem Kreuzband-Riss super begleitet. Die Übungen für zu Hause waren Gold wert.", name: "Lukas B.", role: "Patient" },
      { quote: "Rezept hochgeladen, am nächsten Tag kam der Anruf mit allen Terminen.", name: "Ingrid S.", role: "Patientin" },
    ],
    contact: { address: "Am Markt 21, 52062 Aachen", hours: ["Mo–Fr 7:00–20:00", "Sa 8:00–12:00"], cta: "Rezept einreichen" },
  },
  {
    slug: "steuerberater",
    industry: "Steuerberatung",
    name: "Steuerberatung Hoffmann",
    logoMark: "H",
    domain: "stb-hoffmann.de",
    icon: "file",
    font: "serif",
    palettes: {
      light: { bg: "#fbfbfd", surface: "#ffffff", ink: "#141a33", muted: "#4f566e", line: "#e1e3ec", accent: "#22306b", onAccent: "#ffffff", accentText: "#22306b" },
      dark: { bg: "#0d0f15", surface: "#171a23", ink: "#eaebef", muted: "#9da3b0", line: "#2a2e3a", accent: "#6e80d3", onAccent: "#0d0f15", accentText: "#6e80d3" },
    },
    nav: ["Leistungen", "Für Unternehmen", "Mandantenportal", "Kontakt"],
    hero: {
      eyebrow: "Steuerkanzlei für Selbstständige und Mittelstand",
      title: "Steuern klar geregelt.",
      text: "Belege hochladen statt Ordner bringen. Sie sehen jederzeit, woran wir arbeiten und welche Frist als nächste ansteht.",
      primary: "Unterlagen hochladen",
      secondary: "Erstgespräch vereinbaren",
      badge: { label: "Nächste Frist", value: "USt-VA am 10. des Monats" },
    },
    facts: [["DATEV", "Unternehmen online"], ["350+", "Mandanten"], ["24 h", "Antwortzeit"]],
    servicesTitle: "Leistungen",
    services: [
      { title: "Finanzbuchhaltung", text: "Digital mit DATEV, monatliche Auswertungen inklusive." },
      { title: "Jahresabschluss", text: "Bilanz oder EÜR, mit verständlicher Erläuterung im Gespräch." },
      { title: "Lohnbuchhaltung", text: "Für Betriebe ab einem Mitarbeiter, inklusive Meldungen." },
      { title: "Existenzgründung", text: "Rechtsform, Businessplan und Anmeldung beim Finanzamt." },
    ],
    widget: {
      title: "Belege sicher übermitteln",
      text: "Laden Sie Rechnungen und Kontoauszüge hoch. Übertragung Ende-zu-Ende verschlüsselt.",
      config: {
        kind: "upload",
        dropLabel: "Belege hierher ziehen oder auswählen",
        hint: "Mehrere Dateien möglich, PDF oder Foto",
        fields: ["Mandantennummer", "Zeitraum"],
        confirm: "Belege eingegangen. Sie finden sie im Mandantenportal unter „Eingang“.",
      },
    },
    testimonials: [
      { quote: "Seit dem Wechsel kein Schuhkarton mehr. Belege fotografieren, fertig.", name: "Julia R.", role: "Grafikdesignerin" },
      { quote: "Bei der Gründung hat uns Herr Hoffmann vor einem teuren Fehler bewahrt.", name: "Tim & Kai", role: "Café-Gründer" },
    ],
    contact: { address: "Theaterstraße 50, 52062 Aachen", hours: ["Mo–Do 8:30–17:00", "Fr 8:30–14:00"], cta: "Erstgespräch vereinbaren" },
  },
  {
    slug: "kanzlei",
    industry: "Rechtsanwaltskanzlei",
    name: "Becker & Partner",
    logoMark: "B&P",
    domain: "kanzlei-becker-partner.de",
    icon: "scale",
    font: "serif",
    palettes: {
      light: { bg: "#fefdfb", surface: "#f2f1ef", ink: "#222120", muted: "#5c5e62", line: "#e1e0de", accent: "#c8a45a", onAccent: "#222120", accentText: "#80682a" },
      dark: { bg: "#0f1626", surface: "#172036", ink: "#eef0f5", muted: "#a5adbf", line: "#283350", accent: "#c8a45a", onAccent: "#0f1626", accentText: "#c8a45a" },
    },
    nav: ["Rechtsgebiete", "Anwälte", "Kosten", "Kontakt"],
    hero: {
      eyebrow: "Rechtsanwälte · Fachanwälte für Arbeits- und Familienrecht",
      title: "Arbeitsrecht. Familienrecht. Klar beraten.",
      text: "Schildern Sie Ihr Anliegen in wenigen Sätzen. Ein Anwalt ruft Sie innerhalb von 24 Stunden zurück und schätzt Ihre Lage kostenlos ein.",
      primary: "Rückruf anfordern",
      secondary: "Rechtsgebiete",
      badge: { label: "Ersteinschätzung", value: "kostenlos am Telefon" },
    },
    facts: [["4", "Fachanwälte"], ["30 Jahre", "Kanzleierfahrung"], ["24 h", "Rückruf"]],
    servicesTitle: "Rechtsgebiete",
    services: [
      { title: "Arbeitsrecht", text: "Kündigung, Abfindung, Arbeitszeugnis. Für Arbeitnehmer und Arbeitgeber." },
      { title: "Familienrecht", text: "Trennung, Scheidung, Unterhalt und Sorgerecht." },
      { title: "Mietrecht", text: "Nebenkosten, Mängel und Eigenbedarf." },
      { title: "Verkehrsrecht", text: "Unfallregulierung und Bußgeldverfahren." },
    ],
    widget: {
      title: "Rückruf anfordern",
      text: "Ihre Angaben unterliegen der anwaltlichen Schweigepflicht.",
      config: {
        kind: "callback",
        areas: ["Arbeitsrecht", "Familienrecht", "Mietrecht", "Verkehrsrecht", "Sonstiges"],
        confirm: "Danke. Ein Anwalt aus dem passenden Rechtsgebiet ruft Sie innerhalb von 24 Stunden zurück.",
      },
    },
    testimonials: [
      { quote: "Nach der Kündigung sofort einen Termin bekommen. Die Abfindung war deutlich höher als angeboten.", name: "M. Hansen", role: "Mandant, Arbeitsrecht" },
      { quote: "Einfühlsam und trotzdem sehr klar. Das hat in einer schwierigen Zeit geholfen.", name: "S. Wagner", role: "Mandantin, Familienrecht" },
    ],
    contact: { address: "Friedrich-Wilhelm-Platz 6, 52062 Aachen", hours: ["Mo–Fr 9:00–18:00", "Termine nach Vereinbarung"], cta: "Termin vereinbaren" },
  },
  {
    slug: "coaching",
    industry: "Coaching & Beratung",
    name: "Klarheit Coaching",
    logoMark: "K",
    domain: "klarheit-coaching.de",
    icon: "compass",
    font: "serif",
    palettes: {
      light: { bg: "#faf8fc", surface: "#ffffff", ink: "#1f1830", muted: "#5d5670", line: "#e7e2ef", accent: "#6a47d6", onAccent: "#ffffff", accentText: "#6a47d6" },
      dark: { bg: "#12101c", surface: "#1d1c2c", ink: "#edecf4", muted: "#a3a5b9", line: "#313045", accent: "#7e60dc", onAccent: "#ffffff", accentText: "#9477e2" },
    },
    nav: ["Ansatz", "Programme", "Fallstudien", "Erstgespräch"],
    hero: {
      eyebrow: "Coaching für Führungskräfte im Mittelstand",
      title: "Führen ohne Dauerstress.",
      text: "In zwölf Wochen zu klaren Prioritäten, einem Team, das selbst entscheidet, und Abenden ohne Laptop.",
      primary: "Erstgespräch buchen",
      secondary: "Fallstudien lesen",
      badge: { label: "Erstgespräch", value: "30 Minuten · kostenlos" },
    },
    facts: [["120+", "begleitete Führungskräfte"], ["12 Wochen", "Programmdauer"], ["9,4 / 10", "Weiterempfehlung"]],
    servicesTitle: "Programme",
    services: [
      { title: "Einzelcoaching", text: "Wöchentlich 60 Minuten, online oder in Aachen." },
      { title: "Team-Workshop", text: "Ein Tag zu Rollen, Entscheidungen und Meeting-Kultur." },
      { title: "Führungs-Kompass", text: "12-Wochen-Programm mit Selbsttests und Begleitung." },
      { title: "Impulsvortrag", text: "45 Minuten für Ihre Führungskräfte-Tagung." },
    ],
    widget: {
      title: "Erstgespräch buchen",
      text: "Wählen Sie einen Termin. Sie erhalten den Videolink per E-Mail.",
      config: {
        kind: "booking",
        services: [
          { name: "Erstgespräch", detail: "30 Min. · kostenlos" },
          { name: "Einzelsitzung", detail: "60 Min. · 180 €" },
        ],
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        slots: ["8:00", "9:30", "12:00", "17:00", "18:30"],
        confirm: "Termin gebucht. Der Videolink kommt per E-Mail.",
      },
    },
    testimonials: [
      { quote: "Nach drei Monaten zum ersten Mal zwei Wochen Urlaub ohne Anruf aus der Firma.", name: "Thomas E.", role: "Geschäftsführer, 40 Mitarbeiter" },
      { quote: "Die Fragen waren unbequem und genau richtig.", name: "Nina F.", role: "Bereichsleiterin" },
    ],
    contact: { address: "Jakobstraße 14, 52064 Aachen", hours: ["Sitzungen Mo–Fr 8:00–20:00", "Online deutschlandweit"], cta: "Erstgespräch buchen" },
  },
  {
    slug: "restaurant",
    industry: "Restaurant & Café",
    name: "Trattoria al Duomo",
    logoMark: "D",
    domain: "trattoria-dom.de",
    icon: "utensils",
    font: "serif",
    palettes: {
      light: { bg: "#fefbfa", surface: "#f3edee", ink: "#241b1e", muted: "#5e5860", line: "#e3d9db", accent: "#c7351e", onAccent: "#ffffff", accentText: "#c7351e" },
      dark: { bg: "#1b1311", surface: "#261b18", ink: "#f6ece6", muted: "#c3ada2", line: "#3a2b26", accent: "#e2553f", onAccent: "#1b1311", accentText: "#e35d48" },
    },
    nav: ["Speisekarte", "Mittagstisch", "Feiern", "Reservieren"],
    hero: {
      eyebrow: "Cucina italiana · zwei Minuten vom Dom",
      title: "Pasta wie in Bologna.",
      text: "Frische Pasta aus der eigenen Manufaktur, Weine von kleinen Winzern und ein Mittagstisch, der jeden Tag wechselt.",
      primary: "Tisch reservieren",
      secondary: "Speisekarte",
      badge: { label: "Mittagstisch heute", value: "Tagliatelle al ragù · 12,50 €" },
    },
    facts: [["täglich", "frische Pasta"], ["80", "Plätze, Terrasse mit 30"], ["Di–So", "geöffnet"]],
    servicesTitle: "Bei uns",
    services: [
      { title: "Mittagstisch", text: "Wochentags 12–14:30 Uhr, Hauptgang mit Espresso für 12,50 €." },
      { title: "Abendkarte", text: "Antipasti, hausgemachte Pasta, Fisch und Fleisch vom Grill." },
      { title: "Feiern", text: "Separater Raum für bis zu 30 Gäste mit eigenem Menü." },
      { title: "Catering", text: "Pasta-Buffet für Büro und Familienfeier ab 20 Personen." },
    ],
    widget: {
      title: "Speisekarte",
      text: "Immer aktuell, auf dem Handy lesbar. Kein PDF.",
      config: {
        kind: "menu",
        tabs: [
          {
            name: "Antipasti",
            items: [
              { name: "Burrata", text: "Kirschtomaten, Basilikum, Olivenöl aus Apulien", price: "12,50" },
              { name: "Vitello tonnato", text: "Kalbsrücken, Thunfischcreme, Kapernäpfel", price: "14,00" },
              { name: "Carpaccio di manzo", text: "Rucola, Parmesan, Zitrone", price: "13,50" },
            ],
          },
          {
            name: "Pasta",
            items: [
              { name: "Tagliatelle al ragù", text: "Sechs Stunden geschmort, nach Nonnas Rezept", price: "16,50" },
              { name: "Cacio e pepe", text: "Tonnarelli, Pecorino Romano, schwarzer Pfeffer", price: "14,50" },
              { name: "Ravioli al tartufo", text: "Ricotta-Füllung, Salbeibutter, Trüffel", price: "21,00" },
            ],
          },
          {
            name: "Dolci",
            items: [
              { name: "Tiramisù", text: "Klassisch, mit Savoiardi aus Piemont", price: "7,50" },
              { name: "Panna cotta", text: "Waldbeeren", price: "6,50" },
            ],
          },
        ],
      },
    },
    testimonials: [
      { quote: "Die beste Carbonara in Aachen. Und der Service merkt sich, was man trinkt.", name: "Giulia & Ben", role: "Stammgäste" },
      { quote: "Firmenfeier mit 25 Leuten, alles lief perfekt.", name: "Agentur Nordlicht", role: "Weihnachtsfeier" },
    ],
    contact: { address: "Domhof 3, 52062 Aachen", hours: ["Di–Fr 12:00–14:30 und 17:30–22:30", "Sa–So 12:00–22:30"], cta: "Tisch reservieren" },
  },
  {
    slug: "hotel",
    industry: "Hotel & Ferienwohnung",
    name: "Eifel Auszeit",
    logoMark: "E",
    domain: "eifel-auszeit.de",
    icon: "bed",
    font: "serif",
    palettes: {
      light: { bg: "#f5f6f1", surface: "#ffffff", ink: "#1e2619", muted: "#59634f", line: "#dfe3d5", accent: "#4b6a3a", onAccent: "#ffffff", accentText: "#4b6a3a" },
      dark: { bg: "#101313", surface: "#1a1f1f", ink: "#ebeeee", muted: "#a1a8ac", line: "#2e3436", accent: "#597e45", onAccent: "#ffffff", accentText: "#699452" },
    },
    nav: ["Zimmer", "Region", "Anreise", "Buchen"],
    hero: {
      eyebrow: "Landhotel mit 12 Zimmern · Nationalpark Eifel",
      title: "Ankommen in der Eifel.",
      text: "Direkt am Wanderweg, mit Sauna im Garten und Frühstück aus der Region. Wer direkt bucht, zahlt keine Portalgebühr.",
      primary: "Verfügbarkeit prüfen",
      secondary: "Zimmer ansehen",
      badge: { label: "Direktbucher-Vorteil", value: "10 % günstiger als auf Portalen" },
    },
    facts: [["12", "Zimmer und Suiten"], ["4,8 ★", "Gästebewertung"], ["5 Min.", "zum Rursee"]],
    servicesTitle: "Für Ihren Aufenthalt",
    services: [
      { title: "Doppelzimmer", text: "22 m², Blick ins Tal, ab 109 € inklusive Frühstück." },
      { title: "Suite mit Kamin", text: "40 m², eigener Kamin und Balkon, ab 169 €." },
      { title: "Gartensauna", text: "Täglich ab 16 Uhr, für Hausgäste kostenlos." },
      { title: "Wanderpakete", text: "Lunchpaket, Karte und Gepäcktransfer zur nächsten Etappe." },
    ],
    widget: {
      title: "Verfügbarkeit",
      text: "Anreise und Abreise antippen. Grau markierte Tage sind ausgebucht.",
      config: { kind: "availability", month: "November 2026", startWeekday: 6, days: 30, booked: [6, 7, 13, 14, 20, 21, 27], pricePerNight: 109 },
    },
    testimonials: [
      { quote: "Ruhig, herzlich und das beste Frühstück, das wir in Deutschland hatten.", name: "Familie de Vries", role: "aus Maastricht" },
      { quote: "Direkt gebucht, Zimmer-Upgrade bekommen. Kommen im Frühjahr wieder.", name: "Anke & Rolf", role: "Wanderurlaub" },
    ],
    contact: { address: "Talweg 8, 52152 Simmerath", hours: ["Rezeption 7:00–21:00", "Check-in ab 15:00"], cta: "Jetzt direkt buchen" },
  },
  {
    slug: "friseur",
    industry: "Friseur & Kosmetik",
    name: "Salon Lina",
    logoMark: "L",
    domain: "salon-lina.de",
    icon: "scissors",
    font: "serif",
    palettes: {
      light: { bg: "#fbf6f4", surface: "#ffffff", ink: "#2a1b20", muted: "#6c5a60", line: "#efe1dd", accent: "#a63e62", onAccent: "#ffffff", accentText: "#a63e62" },
      dark: { bg: "#151015", surface: "#221b23", ink: "#efecef", muted: "#a8a4af", line: "#37303a", accent: "#bb4870", onAccent: "#ffffff", accentText: "#c96b8d" },
    },
    nav: ["Leistungen", "Preise", "Team", "Termin"],
    hero: {
      eyebrow: "Friseur & Kosmetik in Aachen-Frankenberg",
      title: "Schnitt, Farbe, Pflege.",
      text: "Wählen Sie Ihre Stylistin und einen freien Termin, auch abends. Ohne Anruf, ohne Warteschleife.",
      primary: "Termin wählen",
      secondary: "Preisliste",
      badge: { label: "Heute noch frei", value: "17:30 bei Mara" },
    },
    facts: [["5", "Stylistinnen"], ["bis 20 Uhr", "Do und Fr"], ["Olaplex", "& vegane Pflege"]],
    servicesTitle: "Leistungen und Preise",
    services: [
      { title: "Damenschnitt", text: "Waschen, Schneiden, Föhnen. Ab 49 €." },
      { title: "Herrenschnitt", text: "Inklusive Nackenrasur. 29 €." },
      { title: "Balayage", text: "Natürliche Verläufe, inklusive Pflege. Ab 129 €." },
      { title: "Kosmetik", text: "Gesichtsbehandlung, Wimpern und Brauen. Ab 39 €." },
    ],
    widget: {
      title: "Termin wählen",
      text: "Behandlung, Stylistin, Uhrzeit. Bestätigung kommt sofort.",
      config: {
        kind: "booking",
        services: [
          { name: "Damenschnitt", detail: "ab 49 € · 60 Min." },
          { name: "Herrenschnitt", detail: "29 € · 30 Min." },
          { name: "Farbe & Schnitt", detail: "ab 89 € · 120 Min." },
        ],
        staff: ["Lina", "Mara", "Elif", "Egal"],
        days: ["Di", "Mi", "Do", "Fr", "Sa"],
        slots: ["9:00", "10:30", "13:00", "15:30", "17:30", "19:00"],
        confirm: "Ihr Termin ist gebucht. Wir erinnern Sie einen Tag vorher per SMS.",
      },
    },
    testimonials: [
      { quote: "Endlich ein Salon, bei dem ich nachts um elf einen Termin buchen kann.", name: "Lea K.", role: "Kundin seit 2023" },
      { quote: "Meine Balayage war genau wie auf dem Inspirationsfoto.", name: "Christina P.", role: "Kundin" },
    ],
    contact: { address: "Bismarckstraße 70, 52066 Aachen", hours: ["Di, Mi 9:00–18:00", "Do, Fr 9:00–20:00", "Sa 8:00–14:00"], cta: "Termin wählen" },
  },
  {
    slug: "fitness",
    industry: "Fitness & Yoga",
    name: "Studio Flow",
    logoMark: "F",
    domain: "studio-flow.de",
    icon: "dumbbell",
    font: "grotesk",
    palettes: {
      light: { bg: "#fefffa", surface: "#f2f5ed", ink: "#22281d", muted: "#5c645f", line: "#e1e6da", accent: "#c6f432", onAccent: "#22281d", accentText: "#5b7506" },
      dark: { bg: "#0d0f0b", surface: "#171a13", ink: "#f2f5ec", muted: "#a7ae9b", line: "#2a2f22", accent: "#c6f432", onAccent: "#10120c", accentText: "#c6f432" },
    },
    nav: ["Kursplan", "Mitgliedschaft", "Trainer", "Probetraining"],
    hero: {
      eyebrow: "Functional Training & Yoga · Aachen-Zentrum",
      title: "Dein Kursplan für diese Woche.",
      text: "Kleine Gruppen, echte Trainer, keine Laufbänder in Reihe. Freie Plätze siehst du live und buchst mit einem Tipp.",
      primary: "Probetraining buchen",
      secondary: "Mitgliedschaften",
      badge: { label: "Gerade frei", value: "18:00 Mobility · 3 Plätze" },
    },
    facts: [["max. 12", "Personen pro Kurs"], ["40+", "Kurse pro Woche"], ["0 €", "Aufnahmegebühr"]],
    servicesTitle: "Mitgliedschaften",
    services: [
      { title: "Flex", text: "8 Kurse im Monat, monatlich kündbar. 59 €." },
      { title: "Unlimited", text: "Alle Kurse, Open Gym inklusive. 89 €." },
      { title: "10er-Karte", text: "Ohne Vertrag, 12 Monate gültig. 160 €." },
      { title: "Personal Training", text: "60 Minuten mit Trainingsplan. 75 €." },
    ],
    widget: {
      title: "Kursplan live",
      text: "Tag wählen und Platz sichern. Die Zahl zeigt die freien Plätze.",
      config: {
        kind: "schedule",
        days: [
          { name: "Mo", classes: [{ time: "7:00", name: "Morning Flow", spots: 4 }, { time: "18:00", name: "Functional", spots: 0 }, { time: "19:15", name: "Yin Yoga", spots: 6 }] },
          { name: "Di", classes: [{ time: "12:15", name: "Lunch HIIT", spots: 2 }, { time: "18:00", name: "Mobility", spots: 3 }, { time: "19:30", name: "Kettlebell", spots: 5 }] },
          { name: "Mi", classes: [{ time: "7:00", name: "Morning Flow", spots: 7 }, { time: "18:30", name: "Functional", spots: 1 }] },
          { name: "Do", classes: [{ time: "12:15", name: "Lunch HIIT", spots: 0 }, { time: "18:00", name: "Vinyasa", spots: 4 }, { time: "19:30", name: "Core", spots: 8 }] },
          { name: "Fr", classes: [{ time: "17:00", name: "Functional", spots: 6 }, { time: "18:15", name: "Yin Yoga", spots: 9 }] },
        ],
      },
    },
    testimonials: [
      { quote: "Kleine Gruppen machen den Unterschied. Die Trainer kennen meinen Namen und meine alte Knieverletzung.", name: "Jonas", role: "Mitglied Unlimited" },
      { quote: "Kurs auf dem Heimweg gebucht und um 18 Uhr auf der Matte.", name: "Aylin", role: "Mitglied Flex" },
    ],
    contact: { address: "Annuntiatenbach 2, 52062 Aachen", hours: ["Mo–Fr 6:30–22:00", "Sa–So 9:00–18:00"], cta: "Probetraining buchen" },
  },
  {
    slug: "einzelhandel",
    industry: "Einzelhandel & Shop",
    name: "Buchladen Pontstraße",
    logoMark: "B",
    domain: "buchladen-pontstrasse.de",
    icon: "bag",
    font: "serif",
    palettes: {
      light: { bg: "#f7f3ea", surface: "#fffdf8", ink: "#24201a", muted: "#625a4c", line: "#e6dece", accent: "#9c4a1a", onAccent: "#ffffff", accentText: "#9c4a1a" },
      dark: { bg: "#151111", surface: "#211c1d", ink: "#efecec", muted: "#a7a5aa", line: "#363132", accent: "#b6561e", onAccent: "#ffffff", accentText: "#db6621" },
    },
    nav: ["Neu im Laden", "Lesungen", "Bestellen", "Besuchen"],
    hero: {
      eyebrow: "Unabhängige Buchhandlung seit 1984",
      title: "Neu im Laden diese Woche.",
      text: "Online reservieren, am nächsten Tag abholen. Was wir nicht vorrätig haben, bestellen wir bis 18 Uhr für den nächsten Morgen.",
      primary: "Reservieren & abholen",
      secondary: "Lesungen",
      badge: { label: "Bestellt bis 18 Uhr", value: "morgen ab 10 Uhr abholbereit" },
    },
    facts: [["12.000", "Titel im Laden"], ["über Nacht", "Bestellservice"], ["2× im Monat", "Lesungen"]],
    servicesTitle: "Bei uns",
    services: [
      { title: "Beratung", text: "Persönliche Empfehlungen, auch für Kinder- und Jugendbücher." },
      { title: "Bestellservice", text: "Jedes lieferbare Buch, über Nacht im Laden." },
      { title: "Lesungen", text: "Autorinnen und Autoren aus der Region, zweimal im Monat." },
      { title: "Geschenkservice", text: "Eingepackt und auf Wunsch mit Karte, kostenlos." },
    ],
    widget: {
      title: "Diese Woche neu",
      text: "Zum Abholen reservieren. Bezahlt wird im Laden.",
      config: {
        kind: "reserve",
        products: [
          { name: "Der Sommer am Lousberg", text: "Roman, Hardcover", price: "24,00 €", stock: 3 },
          { name: "Aachen von oben", text: "Bildband, 180 Seiten", price: "39,90 €", stock: 5 },
          { name: "Kochen mit Printen", text: "Kochbuch, regional", price: "22,00 €", stock: 1 },
          { name: "Das Rätsel im Dom", text: "Kinderbuch ab 8", price: "14,00 €", stock: 0 },
        ],
      },
    },
    testimonials: [
      { quote: "Abends reserviert, am nächsten Tag in der Mittagspause abgeholt.", name: "Frank O.", role: "Kunde" },
      { quote: "Die Empfehlungen hier sind besser als jeder Algorithmus.", name: "Miriam H.", role: "Stammkundin" },
    ],
    contact: { address: "Pontstraße 88, 52062 Aachen", hours: ["Mo–Fr 10:00–19:00", "Sa 10:00–16:00"], cta: "Buch bestellen" },
  },
  {
    slug: "immobilien",
    industry: "Immobilienmakler",
    name: "Immobilien Lindner",
    logoMark: "IL",
    domain: "immo-lindner.de",
    icon: "home",
    font: "grotesk",
    palettes: {
      light: { bg: "#ffffff", surface: "#f3f6f5", ink: "#0f1a17", muted: "#4f5d58", line: "#dfe6e3", accent: "#0a6b4f", onAccent: "#ffffff", accentText: "#0a6b4f" },
      dark: { bg: "#0c1314", surface: "#151f21", ink: "#e9eeee", muted: "#9ba8ae", line: "#283438", accent: "#0f9872", onAccent: "#0c1314", accentText: "#0f9872" },
    },
    nav: ["Kaufen", "Verkaufen", "Bewertung", "Über uns"],
    hero: {
      eyebrow: "Immobilienmakler für Aachen und die Städteregion",
      title: "Ihr Haus. Richtig bewertet.",
      text: "Erste Einschätzung in einer Minute, persönliche Bewertung vor Ort innerhalb einer Woche. Verkauft im Schnitt in 9 Wochen.",
      primary: "Wert ermitteln",
      secondary: "Aktuelle Objekte",
      badge: { label: "Zuletzt verkauft", value: "EFH Laurensberg · 6 Wochen" },
    },
    facts: [["9 Wochen", "durchschnittliche Vermarktung"], ["97 %", "des Angebotspreises erzielt"], ["240+", "verkaufte Objekte"]],
    servicesTitle: "Leistungen",
    services: [
      { title: "Verkauf", text: "Bewertung, Exposé mit Profi-Fotos, Besichtigungen und Notartermin." },
      { title: "Vermietung", text: "Bonitätsprüfung, Mietvertrag und Übergabeprotokoll." },
      { title: "Bewertung", text: "Kostenlos für Eigentümer mit Verkaufsabsicht." },
      { title: "Suchauftrag", text: "Sie bekommen passende Objekte, bevor sie online gehen." },
    ],
    widget: {
      title: "Schnelle Wertermittlung",
      text: "Wohnfläche und Objektart wählen. Sie sehen eine erste Spanne für Ihre Lage.",
      config: {
        kind: "calculator",
        inputLabel: "Wohnfläche",
        unit: "m²",
        min: 40,
        max: 300,
        step: 5,
        initial: 120,
        rate: 3150,
        optionsLabel: "Objektart",
        options: [
          { label: "Wohnung", factor: 1 },
          { label: "Reihenhaus", factor: 0.95 },
          { label: "Einfamilienhaus", factor: 1.08 },
        ],
        resultLabel: "geschätzter Marktwert",
        spread: 0.08,
        note: "Erste Spanne auf Basis regionaler Durchschnittswerte. Die genaue Bewertung machen wir vor Ort.",
      },
    },
    testimonials: [
      { quote: "Die Bewertung lag am Ende exakt beim Verkaufspreis. Sehr professionell.", name: "Ehepaar Schneider", role: "Verkauf EFH" },
      { quote: "Über den Suchauftrag unsere Wohnung gefunden, bevor sie online war.", name: "Daniel & Sophie", role: "Käufer" },
    ],
    contact: { address: "Hubertusstraße 1, 52064 Aachen", hours: ["Mo–Fr 9:00–18:00", "Besichtigungen auch samstags"], cta: "Bewertung anfragen" },
  },
];

export function getDemoSite(slug: string) {
  return DEMO_SITES.find((site) => site.slug === slug);
}
