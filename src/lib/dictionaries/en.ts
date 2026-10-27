import type { Dictionary } from "@/lib/i18n";

// Englische Texte – gleiche Struktur wie de.ts (TypeScript prüft das über den Typ Dictionary)

const en: Dictionary = {
  meta: {
    title: "Web Design Aachen | Khashman Webdesign – Modern Websites from €299",
    description:
      "Web design from Aachen, Germany: modern, fast and GDPR-compliant websites for freelancers, small businesses and founders. Fixed prices from €299, hosting & maintenance included. Book your free consultation now.",
    keywords: [
      "web design Aachen",
      "web designer Aachen",
      "website design Germany",
      "website for small business",
      "website for freelancers",
      "web development Aachen",
      "local SEO Aachen",
    ],
    ogLocale: "en_US",
    ogImageAlt: "Khashman Webdesign – Modern websites from Aachen, Germany",
  },

  nav: {
    links: [
      { href: "#leistungen", label: "Services" },
      { href: "#prozess", label: "Process" },
      { href: "#ueber-mich", label: "About" },
      { href: "#preise", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
      // Der Blog ist nur auf Deutsch verfügbar
      { href: "/blog", label: "Blog (DE)" },
    ],
    cta: "Start a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Choose language",
    themeToggle: "Toggle light or dark mode",
  },

  hero: {
    badge: "Web design from Aachen · Available for new projects",
    headline: [
      [{ text: "Websites" }, { text: "that" }],
      [{ text: "make" }, { text: "an" }],
      [{ text: "impression.", serif: true }],
    ],
    sub: "Modern, lightning-fast, high-converting websites for small businesses & founders – built personally, at a fixed price.",
    ctaPrimary: "Free consultation",
    ctaSecondary: "View packages",
  },

  marquee: ["Web design", "Development", "Local SEO", "Hosting", "Performance", "GDPR compliant", "Online shops", "Online booking"],
  marqueeLabel: "Focus areas",

  statement: {
    label: "My approach",
    text: "Your website is often the first impression customers get of you. I make sure it sticks – with design that convinces and technology that simply works.",
  },

  services: {
    label: "Services",
    title: { before: "Everything for your ", serif: "digital", after: " presence" },
    sub: "From the first idea to day-to-day operation – from a single source, with clear responsibilities.",
    items: [
      {
        title: "Modern websites",
        text: "Responsive one-pagers and multi-page sites with clean architecture – fast, maintainable and pixel-perfect on every device.",
        tags: ["One-pager", "Multi-page", "Responsive"],
      },
      {
        title: "Maintenance & hosting",
        text: "Regular updates, daily backups, SSL encryption and GDPR security – you don't have to worry about a thing.",
        tags: ["Updates", "Backups", "SSL"],
      },
      {
        title: "Local SEO & performance",
        text: "Google Business Profile, load-time optimisation and Core Web Vitals – so customers in your area find you first.",
        tags: ["Google", "Core Web Vitals"],
      },
      {
        title: "Design with impact",
        text: "Animation, clear typography and imagery that make your brand look premium.",
        tags: ["UI", "Motion", "Branding"],
      },
    ],
  },

  process: {
    label: "Process",
    title: { before: "Online in ", serif: "four steps", after: "" },
    steps: [
      {
        title: "Initial call",
        text: "Free and without obligation: we clarify goals, audience and scope. Afterwards you receive a fixed-price quote.",
        time: "Day 1",
      },
      { title: "Concept & design", text: "I design the structure and look of your site. You give feedback until everything fits.", time: "Week 1" },
      {
        title: "Development",
        text: "Built with modern technology – fast, secure, mobile-optimised and search-engine friendly.",
        time: "Weeks 2–3",
      },
      {
        title: "Launch & support",
        text: "Your site goes live. I take care of hosting, updates and backups – you focus on your business.",
        time: "Ongoing",
      },
    ],
  },

  about: {
    label: "About me",
    title: { before: "No agency ", serif: "overhead.", after: "" },
    text: "I'm Khashman, a software engineering student at FH Aachen University of Applied Sciences. I combine solid software engineering with personal support on equal terms: transparent fixed prices, direct communication and results you can be proud of.",
    imageAlt: "Khashman Alturki – founder of Khashman Webdesign",
    role: "Founder",
    facts: [
      { term: "Your contact", value: "Direct & personal" },
      { term: "Pricing", value: "Fixed packages" },
      { term: "Response", value: "Within 24 h" },
    ],
  },

  pricing: {
    label: "Pricing",
    title: { before: "Transparent ", serif: "packages", after: "" },
    sub: "Fixed prices, no hidden costs. You know exactly where you stand from day one.",
    popular: "Most popular",
    oneTime: "one-time",
    idealFor: "Ideal for:",
    note: "No VAT is charged in accordance with § 19 UStG (German small business regulation). Custom requirements on request.",
    packages: [
      {
        value: "starter",
        name: "Starter",
        subtitle: "Business card",
        amount: 299,
        price: "€299",
        monthly: "+ €29 / month",
        monthlyNote: "hosting & maintenance",
        idealFor: "Local service providers, tradespeople, founders",
        features: [
          "1 modern one-page website",
          "Fully mobile-optimised",
          "WhatsApp & contact form",
          "Incl. 1x .de domain & SSL",
          "Monthly security updates & backups",
          "GDPR compliant",
        ],
        cta: "Choose Starter",
        highlighted: false,
      },
      {
        value: "business",
        name: "Business",
        subtitle: "For growing businesses",
        amount: 649,
        price: "€649",
        monthly: "+ €39 / month",
        monthlyNote: "hosting & care",
        idealFor: "Established businesses that want to present several services",
        features: [
          "Up to 5 subpages",
          "Everything in Starter",
          "Basic SEO for Google",
          "Google Maps integration",
          "30 min of content updates / month included",
          "1 feedback & revision round",
        ],
        cta: "Choose Business",
        highlighted: true,
      },
      {
        value: "premium",
        name: "Premium",
        subtitle: "All-in-one",
        amount: 1199,
        price: "€1,199",
        monthly: "+ €49 / month",
        monthlyNote: "hosting & care",
        idealFor: "Businesses with an online shop, booking system or a large range of services",
        features: [
          "Up to 10 subpages or online shop / booking",
          "Advanced SEO",
          "Priority support",
          "60 min of content updates / month included",
          "2 feedback rounds",
        ],
        cta: "Discuss Premium",
        highlighted: false,
      },
    ],
  },

  faq: {
    label: "FAQ",
    title: { before: "Frequently asked ", serif: "questions", after: "" },
    sub: "Your question isn't listed? Just send me a message.",
    items: [
      {
        q: "How long until my website is online?",
        a: "A Starter project usually goes live within 1–2 weeks, Business and Premium projects within 2–4 weeks – depending on how quickly content and feedback are available.",
      },
      {
        q: "What's included in the monthly fee?",
        a: "Hosting, SSL certificate, domain, security updates and backups. Business and Premium also include content updates – you send me changes, I implement them.",
      },
      {
        q: "Do I have to provide texts and images myself?",
        a: "You know your business best – so you provide the content. I'm happy to help with wording and choosing suitable images.",
      },
      {
        q: "Are there any hidden costs?",
        a: "No. You receive a fixed-price quote up front. I always discuss additional requests with you beforehand.",
      },
      {
        q: "Can I upgrade to a bigger package later?",
        a: "Yes, at any time. Your website grows with your business – the amount you've already paid is fairly taken into account.",
      },
    ],
  },

  contact: {
    label: "Contact",
    titleLine: "Let's build",
    titleSerif: "something together.",
    intro: "Message me on WhatsApp, send an email or use the form. I usually reply within 24 hours.",
    whatsapp: "WhatsApp",
    call: "Call",
    email: "Email",
  },

  form: {
    packageLegend: "Which package are you interested in?",
    budgetLabel: "Approximate budget",
    name: "Name",
    namePlaceholder: "Jane Smith",
    phone: "Phone number",
    optional: "(optional)",
    phonePlaceholder: "+49 …",
    email: "Email",
    emailPlaceholder: "mail@example.com",
    message: "Message",
    messagePlaceholder: "Briefly describe your project …",
    submit: "Send request",
    sending: "Sending …",
    consentBefore: "By submitting, you agree to the processing of your data as described in our ",
    consentLink: "privacy policy (German)",
    consentAfter: ".",
    honeypotLabel: "Website",
    messages: {
      nameRequired: "Please enter your name.",
      nameTooLong: "Your name is too long.",
      emailInvalid: "Please enter a valid email address.",
      phoneInvalid: "Please enter a valid phone number.",
      messageTooShort: "Please write at least 10 characters.",
      messageTooLong: "Your message is too long.",
      packageRequired: "Please choose a package.",
      budgetInvalid: "Please choose a valid budget.",
      checkInputs: "Please check your entries.",
      sendFailed: "Unfortunately your request could not be sent. Please try again later or message me on WhatsApp.",
      thanksShort: "Thank you for your request!",
      thanks: "Thank you for your request! I usually get back to you within 24 hours.",
    },
  },

  footer: {
    tagline: "Web design & development from Aachen, Germany. Fast, modern websites for businesses that want to stand out.",
    contact: "Contact",
    legal: "Legal",
    imprint: "Legal notice (German)",
    privacy: "Privacy policy (German)",
    rights: "All rights reserved.",
  },

  jsonLd: {
    jobTitle: "Web developer",
    knowsAbout: ["Web design", "Web development", "Local SEO", "Web hosting", "Online shops"],
    catalogName: "Web design packages",
    offerPrefix: "Website package",
    language: "en",
    country: "Germany",
  },
};

export default en;
