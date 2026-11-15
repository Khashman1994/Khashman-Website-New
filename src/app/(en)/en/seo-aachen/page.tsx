import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { alternatesFor } from "@/lib/i18n";

const TITLE = "SEO Aachen: Local SEO & Search Engine Optimisation";
const DESCRIPTION =
  "SEO in Aachen, Germany, for freelancers and small businesses: a technically clean website, local SEO and a Google Business Profile. Fixed-price packages from €599, consultation also online.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/seo-aachen", "en"),
  openGraph: { type: "website", url: "/en/seo-aachen", title: TITLE, description: DESCRIPTION },
};

export default function SeoAachenEnglishPage() {
  return (
    <ServicePage
      locale="en"
      path="/en/seo-aachen"
      breadcrumb="SEO Aachen"
      label="Search engine optimisation"
      title="SEO in Aachen: so customers find your website"
      intro="A beautiful website is of little use if nobody finds it. I build websites that Google understands and set up the foundations for local searches in Aachen and the surrounding region. The goal: enquiries from people who are searching for your service right now."
      sections={[
        {
          title: "What I do for your visibility",
          paragraphs: [
            "SEO doesn't start after launch. Most mistakes happen while a website is being built, which is why I work on the foundations from the very beginning.",
          ],
          bullets: [
            "Fast loading times and good Core Web Vitals, so the site runs smoothly on phones",
            "A clear page structure with titles, descriptions and headings that match what your customers search for",
            "A Google Business Profile, so you appear in local search and on Google Maps",
            "Google Maps and contact options built in, so visitors can get in touch directly",
            "Privacy-friendly technology without unnecessary trackers",
          ],
        },
        {
          title: "Who benefits from local SEO",
          paragraphs: [
            "Local SEO is ideal for businesses that win customers on site: tradespeople, medical practices, service providers, restaurants, founders and freelancers in Aachen, Stolberg, Würselen, Eschweiler, Herzogenrath and the surrounding area. When your customers type “service + town” into Google, visibility decides who gets the enquiry.",
          ],
        },
        {
          title: "What SEO can realistically achieve",
          paragraphs: [
            "Nobody can guarantee first place on Google, and reputable providers don't promise it. New websites need weeks to months before rankings develop. A clean technical foundation, a well-maintained Google profile, reviews and good content noticeably improve your chances, and local searches often respond faster than nationwide ones.",
          ],
        },
        {
          title: "Which package includes SEO?",
          paragraphs: [
            "The Business package (from €1,199) includes basic SEO for Google and Google Maps integration. The Premium package (from €1,999) includes advanced SEO. The Starter package (from €599) is a simple business-card website without an SEO package. All prices and services are in the package overview. Special requirements can be discussed in the initial call.",
          ],
        },
        {
          title: "Beyond Aachen too",
          paragraphs: [
            "I'm based in Aachen but also work with clients across Germany and internationally. The initial call and coordination take place online if needed.",
          ],
        },
      ]}
      faq={[
        {
          q: "How much does SEO in Aachen cost?",
          a: "The basics are included in the website packages: basic SEO in the Business package from €1,199, advanced SEO in the Premium package from €1,999. All prices are fixed. Anything you need beyond that, we clarify in the free initial call.",
        },
        {
          q: "How long until my website appears on Google?",
          a: "Google often finds new pages within a few days to weeks. Ranking near the top for important search terms usually takes several months, depending on competition, content and reviews.",
        },
        {
          q: "Can you guarantee me first place on Google?",
          a: "No. No reputable provider can guarantee that, because Google decides the rankings itself. I make sure you have a technically clean, well-structured website and a well-maintained Google profile to improve your chances.",
        },
        {
          q: "What is the difference between SEO and local SEO?",
          a: "SEO makes a website generally understandable for search engines. Local SEO targets searches with a location, for example “electrician Aachen”. For that, your Google Business Profile, reviews and consistent name, address and phone details are important.",
        },
        {
          q: "Do you only work in Aachen?",
          a: "No. I'm based in Aachen but also work with clients across Germany and internationally. Calls take place online if needed.",
        },
      ]}
      ctaTitle="Let's talk about your visibility"
      ctaText="Send me a short message about what you offer and where your customers are. I usually reply within 24 hours with an honest assessment."
      related={[
        { href: "/en/ai-automation", label: "AI automation: enquiries, bookings and reviews on autopilot" },
        { href: "/en/web-design-aachen", label: "Web design in Aachen: get your website built" },
        { href: "/en/web-development-aachen", label: "Web development in Aachen: custom websites and web apps" },
      ]}
      serviceName="Search engine optimisation and local SEO"
      serviceDescription="Technically clean websites with basic SEO, local SEO and a Google Business Profile for freelancers and small businesses in Aachen and the surrounding region."
    />
  );
}
