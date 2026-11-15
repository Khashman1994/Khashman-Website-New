import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { alternatesFor } from "@/lib/i18n";

const TITLE = "Web Development Aachen: Custom Websites & Web Apps";
const DESCRIPTION =
  "Web development in Aachen, Germany: custom-built websites with Next.js and React, contact forms, online booking, online shops and chat features. Fast, secure, GDPR-compliant and personally supported.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/webentwicklung-aachen", "en"),
  openGraph: { type: "website", url: "/en/web-development-aachen", title: TITLE, description: DESCRIPTION },
};

export default function WebDevelopmentAachenPage() {
  return (
    <ServicePage
      locale="en"
      path="/en/web-development-aachen"
      breadcrumb="Web development Aachen"
      label="Web development"
      title="Web development in Aachen: custom-built instead of website builders"
      intro="When your website needs to do more than a website builder allows, I build it for you: fast, secure and tailored to your business. I develop for freelancers, tradespeople and small businesses in Aachen and the region, and you talk to me directly."
      sections={[
        {
          title: "What I build",
          bullets: [
            "Business websites with a modern structure that load quickly on phone and desktop",
            "Contact forms with database storage and email notifications",
            "Online booking and enquiry flows for service providers",
            "Online shops for small product ranges",
            "Chat features with frequently asked questions, or an AI assistant for your website on request",
            "Integration of external services such as Google Maps, WhatsApp or calendars",
          ],
        },
        {
          title: "Technology that works for you",
          paragraphs: [
            "I work with modern tools like Next.js and React. That means short loading times, clean technology for Google and a foundation that can be extended later. Fast pages are rated better by visitors and search engines alike. If you like, I take care of hosting, updates and backups.",
          ],
        },
        {
          title: "From idea to launch",
          bullets: [
            "Initial call: we clarify goals, scope and budget, free and without obligation",
            "Fixed-price quote: you know the cost up front",
            "Development in stages: you see progress early and give feedback",
            "Launch and support: testing, go-live and ongoing maintenance on request",
          ],
        },
        {
          title: "Prices and packages",
          paragraphs: [
            "Most projects fit one of my three packages: Starter from €599, Business from €1,199 and Premium from €1,999. For special features I prepare an individual fixed-price quote. Hosting and maintenance are optional.",
          ],
        },
        {
          title: "Personal, and online too",
          paragraphs: [
            "I'm Khashman, a software development student at FH Aachen University of Applied Sciences. I'm based in Aachen but also work with clients across Germany and internationally. Calls and coordination take place online if needed.",
          ],
        },
      ]}
      faq={[
        {
          q: "What is the difference between web design and web development?",
          a: "Web design covers the look and structure of your website, web development the technical implementation behind it. With me you get both from a single source: a design that suits you and clean technology.",
        },
        {
          q: "Why custom development instead of a website builder?",
          a: "Custom-built websites usually load faster, are more flexible to extend and belong entirely to you. You're not tied to the limits of a builder or its pricing model.",
        },
        {
          q: "How much does custom web development in Aachen cost?",
          a: "Most projects are covered by my packages, from €599 to from €1,999. For special features such as booking systems or shops I prepare a fixed-price quote after the initial call.",
        },
        {
          q: "Can my website be extended later?",
          a: "Yes. The technology is set up so that new pages and features can be added later, by me or by another developer.",
        },
        {
          q: "Do you only work in Aachen?",
          a: "No. I work with clients across Germany and internationally. Calls take place online if needed.",
        },
      ]}
      related={[
        { href: "/en/ai-automation", label: "AI automation: enquiries, bookings and reviews on autopilot" },
        { href: "/en/web-design-aachen", label: "Web design in Aachen: get your website built" },
        { href: "/en/seo-aachen", label: "SEO in Aachen: local SEO and search engine optimisation" },
      ]}
      ctaTitle="Tell me what your website should be able to do"
      ctaText="Send me a short description of your project. I usually reply within 24 hours."
      serviceName="Web development"
      serviceDescription="Custom-built websites and web applications with Next.js and React for freelancers, tradespeople and small businesses in Aachen and the surrounding region."
    />
  );
}
