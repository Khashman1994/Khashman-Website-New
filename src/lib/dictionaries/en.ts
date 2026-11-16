import type { Dictionary } from "@/lib/i18n";

// Englische Texte – gleiche Struktur wie de.ts (TypeScript prüft das über den Typ Dictionary)

const en: Dictionary = {
  meta: {
    title: "Web Design Aachen | Khashman Webdesign – Modern Websites from €599",
    description:
      "Web design & AI automation from Aachen, Germany: modern, fast and GDPR-compliant websites for freelancers, small businesses and founders – with automations for enquiries and bookings on request. Fixed prices from €599. Book your free consultation now.",
    keywords: [
      "web design Aachen",
      "web designer Aachen",
      "website design Germany",
      "website for small business",
      "website for freelancers",
      "web development Aachen",
      "local SEO Aachen",
      "AI automation Aachen",
    ],
    ogLocale: "en_US",
    ogImageAlt: "Khashman Webdesign – Modern websites from Aachen, Germany",
  },

  nav: {
    links: [
      { href: "/en/ai-automation", label: "AI automation" },
      { href: "#leistungen", label: "Services" },
      { href: "/en/examples", label: "Examples" },
      { href: "#prozess", label: "Process" },
      { href: "#ueber-mich", label: "About" },
      { href: "#preise", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
      { href: "/en/blog", label: "Blog" },
    ],
    cta: "Start a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Choose language",
    themeToggle: "Toggle light or dark mode",
  },

  hero: {
    badge: "Web design & AI automation from Aachen",
    headline: [
      [{ text: "Websites" }, { text: "that" }],
      [{ text: "make" }, { text: "an" }],
      [{ text: "impression.", serif: true }],
    ],
    sub: "Modern, lightning-fast websites for small businesses & founders – with AI automations that answer enquiries and book appointments on request. Built personally.",
    ctaPrimary: "Free consultation",
    ctaSecondary: "View packages",
  },

  marquee: ["Web design", "Development", "Local SEO", "Hosting", "Performance", "GDPR compliant", "Online shops", "Online booking", "AI automation"],
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
        text: "Available as an option: regular updates, daily backups, SSL encryption and GDPR security – so you don't have to worry about a thing.",
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

  automation: {
    label: "AI automation",
    badge: "New",
    title: { before: "Your website can do more than ", serif: "look good.", after: "" },
    sub: "I build automations that take routine work off your business – so no enquiry gets lost again.",
    items: [
      { title: "Replies in seconds", text: "Every enquiry gets an instant answer – even after hours." },
      { title: "Customers book themselves", text: "With automatic confirmation and reminders." },
      { title: "More Google reviews", text: "After each job, customers are asked for a review automatically." },
    ],
    cta: "Free consultation",
    more: "Learn more",
    prefill:
      "Hi Khashman, I'm interested in AI automation and would like to book a free consultation. What costs me the most time in my business: ",
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
        text: "Your site goes live. If you like, I take care of hosting, updates and backups – you focus on your business.",
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
        amount: 599,
        price: "€599",
        monthly: "+ €29 / month",
        monthlyNote: "optional: hosting & maintenance",
        idealFor: "Local service providers, tradespeople, founders",
        features: [
          "1 modern one-page website",
          "Fully mobile-optimised",
          "WhatsApp & contact form",
          "Incl. 1x .de domain & SSL",
          "Security updates & backups with hosting & maintenance",
          "GDPR compliant",
        ],
        cta: "Choose Starter",
        highlighted: false,
      },
      {
        value: "business",
        name: "Business",
        subtitle: "For growing businesses",
        amount: 1199,
        price: "€1,199",
        monthly: "+ €39 / month",
        monthlyNote: "optional: hosting & care",
        idealFor: "Established businesses that want to present several services",
        features: [
          "Up to 5 subpages",
          "Everything in Starter",
          "Basic SEO for Google",
          "Google Maps integration",
          "Contact chat with saved enquiries",
          "Add-on: AI assistant & automations, on request",
          "30 min of content updates / month with hosting & care",
          "1 feedback & revision round",
        ],
        cta: "Choose Business",
        highlighted: true,
      },
      {
        value: "premium",
        name: "Premium",
        subtitle: "All-in-one",
        amount: 1999,
        price: "€1,999",
        monthly: "+ €49 / month",
        monthlyNote: "optional: hosting & care",
        idealFor: "Businesses with an online shop, booking system or a large range of services",
        features: [
          "Up to 10 subpages or online shop / booking",
          "Advanced SEO",
          "Contact chat with saved enquiries",
          "Add-on: AI assistant & automations, on request",
          "Priority support",
          "60 min of content updates / month with hosting & care",
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
        a: "A Starter project usually goes live within 2–3 weeks, a Business project within 3–4 weeks and a Premium project within up to 6 weeks. The clock starts once all texts, images and access details are in, and depends on how quickly feedback comes back.",
      },
      {
        q: "Do I have to pay the monthly fee?",
        a: "No, the monthly fee is optional. If you choose it, I take care of hosting, SSL certificate, domain, security updates and backups, and with Business and Premium also content updates – you send me changes, I implement them. Without the monthly fee you only pay the one-time price and handle hosting and maintenance yourself.",
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
      {
        q: "What is an AI chatbot for a website?",
        a: "An assistant on your website that answers visitors' questions in plain language, around the clock. It uses the information we store together for your business, such as services, prices, opening hours and process.",
      },
      {
        q: "How much does an AI chatbot cost?",
        a: "The costs consist of a one-time setup and a monthly fee for operation and maintenance. I'll give you exact prices after a short call, because they depend on the scope and the number of visitors.",
      },
      {
        q: "How much work is an AI chatbot for me?",
        a: "Very little. We discuss once what the chat should know. I set it up, test it and fine-tune it. You send me any changes, for example to opening hours or prices, and I update them.",
      },
      {
        q: "Is an AI chatbot GDPR-compliant?",
        a: "I set up the chat so visitors clearly know they're talking to an AI, and I update your privacy policy. Because the questions go to an AI provider in the USA, I clarify the legal basis with you before launch.",
      },
      {
        q: "What happens if the chatbot can't answer a question?",
        a: "It says so openly and refers to you. If you like, it collects the name, contact details and question and sends them to you by email.",
      },
      {
        q: "Can an AI chatbot give wrong answers?",
        a: "AI can make mistakes. That's why I limit it to the information you've approved and test typical questions before launch. When unsure, it refers to you instead of making something up.",
      },
      {
        q: "Which businesses benefit from an AI chatbot?",
        a: "Especially those where many visitors ask the same questions and get in touch after hours: trades, medical practices, real estate, service providers with many services. For businesses with few visitors, a simple FAQ chat is often enough.",
      },
      {
        q: "Can you also automate workflows in my business?",
        a: "Yes. I build AI automations that answer enquiries instantly, book appointments and ask customers for a Google review – even for businesses that don't need a new website. In a free initial call we look at what's worth it for you. More on the AI automation page.",
      },
      {
        q: "Do you only work in Aachen?",
        a: "No. I also work with clients across Germany and internationally, with calls held online if needed.",
      },
      {
        q: "Is there a simpler option than an AI chatbot?",
        a: "Yes. The FAQ chat is included in the Business and Premium packages. It answers set questions and takes enquiries, without AI.",
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
    google: "Google profile",
    googleHint: "Read and write reviews",
    instagram: "Instagram",
    instagramHint: "Insights, tips and projects",
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
    services: "Services",
    serviceLinks: [
      { href: "/en/ai-automation", label: "AI automation" },
      { href: "/en/web-design-aachen", label: "Web design Aachen" },
      { href: "/en/web-development-aachen", label: "Web development Aachen" },
      { href: "/en/seo-aachen", label: "SEO Aachen" },
      { href: "/en/examples", label: "Examples" },
    ],
    legal: "Legal",
    imprint: "Legal notice (German)",
    privacy: "Privacy policy (German)",
    google: "Google profile & reviews",
    rights: "All rights reserved.",
  },

  jsonLd: {
    jobTitle: "Web developer",
    knowsAbout: ["Web design", "Web development", "Local SEO", "Web hosting", "Online shops", "AI automation"],
    catalogName: "Web design packages",
    offerPrefix: "Website package",
    language: "en",
    country: "Germany",
  },
};

export default en;
