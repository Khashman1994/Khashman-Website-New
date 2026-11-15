import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { alternatesFor } from "@/lib/i18n";

const TITLE = "Web Designer in Aachen: Websites from €599";
const DESCRIPTION =
  "Web design in Aachen, Germany, for freelancers, tradespeople and small businesses: modern, mobile-friendly, GDPR-compliant websites at a fixed price. Personal support, also online.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/webdesign-aachen", "en"),
  openGraph: { type: "website", url: "/en/web-design-aachen", title: TITLE, description: DESCRIPTION },
};

export default function WebDesignAachenPage() {
  return (
    <ServicePage
      locale="en"
      path="/en/web-design-aachen"
      breadcrumb="Web design Aachen"
      label="Web design"
      title="Web design in Aachen: your website at a fixed price"
      intro="Your website is often the first impression new customers get of you. I design and build modern, fast websites for freelancers, tradespeople and small businesses in Aachen and the surrounding region. You talk to me directly, not to an agency team."
      sections={[
        {
          title: "What you get from me",
          bullets: [
            "A custom design that fits your business and looks clean on every device",
            "Fast loading times and a solid technical foundation, also for Google",
            "WhatsApp and contact form so visitors can reach you directly",
            "A .de domain and SSL encryption included in the Starter package",
            "GDPR-compliant technology and a privacy policy",
            "Clear fixed prices instead of hourly billing",
          ],
        },
        {
          title: "Three packages, clear prices",
          paragraphs: [
            "Starter (from €599) is a modern one-page website as your digital business card. Business (from €1,199) offers up to 5 subpages, basic SEO and Google Maps. Premium (from €1,999) includes up to 10 subpages or an online shop or booking system, plus advanced SEO. Hosting and maintenance can be added as an optional monthly plan. All details are in the package overview.",
          ],
        },
        {
          title: "How a project works",
          bullets: [
            "Initial call: free and without obligation, after which you receive a fixed-price quote",
            "Concept and design: I draft the structure and look, you give feedback until everything fits",
            "Development: built with modern technology, fast, secure and mobile-friendly",
            "Launch: your website goes live, and if you like I take care of hosting, updates and backups",
          ],
        },
        {
          title: "Personal and on equal footing",
          paragraphs: [
            "I'm Khashman, a software development student at FH Aachen University of Applied Sciences. With me you get direct communication, transparent prices and a straightforward process. I'm based in Aachen but also work with clients across Germany and internationally, with calls held online if needed.",
          ],
        },
      ]}
      faq={[
        {
          q: "How much does a website in Aachen cost?",
          a: "The Starter package costs from €599, Business from €1,199 and Premium from €1,999, each as a one-time fixed price. Hosting and maintenance are optional for a monthly fee. For special requirements I prepare an individual quote.",
        },
        {
          q: "How long until my website is online?",
          a: "A Starter project is usually live in 2 to 3 weeks, a Business project in 3 to 4 weeks and a Premium project in up to 6 weeks. The clock starts once texts, images and access details are complete, and it depends on how quickly feedback comes in.",
        },
        {
          q: "Do I have to provide texts and images myself?",
          a: "You know your business best, so you provide the content. I'm happy to help with wording and with choosing suitable images.",
        },
        {
          q: "Are there any hidden costs?",
          a: "No. You receive a fixed-price quote up front. Any additional wishes are always discussed with you first.",
        },
        {
          q: "Do you only work in Aachen?",
          a: "No. I'm based in Aachen but also work with clients across Germany and internationally. Calls take place online if needed.",
        },
      ]}
      related={[
        { href: "/en/ai-automation", label: "AI automation: enquiries, bookings and reviews on autopilot" },
        { href: "/en/web-development-aachen", label: "Web development in Aachen: custom websites and web apps" },
        { href: "/en/seo-aachen", label: "SEO in Aachen: local SEO and search engine optimisation" },
      ]}
      ctaTitle="Tell me about your project"
      ctaText="Send me a short message about what you offer and what your website should do. I usually reply within 24 hours."
      serviceName="Web design and web development"
      serviceDescription="Modern, mobile-friendly and GDPR-compliant websites at a fixed price for freelancers, tradespeople and small businesses in Aachen and the surrounding region."
    />
  );
}
