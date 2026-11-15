import type { Metadata } from "next";
import AutomationPage, { type AutomationContent } from "@/components/AutomationPage";
import { alternatesFor } from "@/lib/i18n";

const TITLE = "AI Automation Aachen: Enquiries, Bookings & Reviews on Autopilot";
const DESCRIPTION =
  "AI automation for tradespeople, practices and small businesses in Aachen, Germany: answer enquiries instantly, book appointments automatically, get more Google reviews. Free consultation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: alternatesFor("/ki-automatisierung", "en"),
  openGraph: { type: "website", url: "/en/ai-automation", title: TITLE, description: DESCRIPTION },
};

const CONTENT: AutomationContent = {
  path: "/en/ai-automation",
  description: DESCRIPTION,
  // Text, mit dem das Kontaktformular vorbefüllt wird
  prefill:
    "Hi Khashman, I'm interested in AI automation and would like to book a free consultation. What costs me the most time in my business: ",
  ui: {
    home: "Home",
    breadcrumb: "Breadcrumb",
    breadcrumbLabel: "AI automation",
    whatsapp: "Message on WhatsApp",
    serviceName: "AI automation for small businesses",
    serviceType: "AI automation",
    country: "Germany",
  },
  hero: {
    label: "AI automation for businesses in Aachen",
    before: "Never miss an ",
    serif: "enquiry",
    after: " again.",
    text: "I automate the routine work in your business: enquiries get answered instantly, appointments get booked and customers get asked for a review. So you can focus on your customers instead of your inbox.",
    cta: "Book a free consultation",
    secondary: "What I automate",
  },
  problems: {
    label: "Sound familiar?",
    title: "Time drains every business knows",
    items: [
      { title: "The phone rings while you're with a customer", text: "Anyone who doesn't get an answer right away asks the next business." },
      { title: "Enquiries sit in your inbox", text: "Between ads and invoices, the important email gets lost." },
      { title: "Paperwork in the evening", text: "Confirming appointments, following up, asking for reviews – work nobody enjoys." },
    ],
  },
  flow: {
    label: "How it works",
    title: "Your business replies – even after hours",
    items: [
      { step: "A customer writes", text: "via your website, a form or chat" },
      { step: "A reply in seconds", text: "friendly, using the information from your business" },
      { step: "You get everything sorted", text: "with all the details by email on your phone" },
    ],
  },
  solutions: {
    label: "Services",
    title: "What I can automate for you",
    items: [
      { title: "Enquiry autopilot", text: "Every enquiry is answered instantly and lands with you neatly sorted – with name, request and urgency." },
      { title: "Online booking", text: "Customers book a free slot themselves. Confirmation and reminder go out automatically." },
      { title: "Review requests", text: "After the job, your customer receives a friendly request for a Google review – without you having to remember." },
      { title: "Custom workflows", text: "Tell me where you lose time. I'll check what can sensibly be automated – and what can't." },
    ],
    boxTitle: "Every business is different – that's why I don't do off-the-shelf solutions.",
    boxText:
      "In a free initial call we look at where you can save the most time. Afterwards you receive a fixed-price quote – with no obligation.",
    boxCta: "Book a consultation",
  },
  steps: {
    label: "Process",
    title: "Four steps to automation",
    items: [
      { title: "Book a call", text: "Free, about 20 minutes, online if you prefer. We look at where you lose the most time." },
      { title: "Fixed-price quote", text: "You get a clear quote with no hidden costs – without obligation." },
      { title: "Test version", text: "I build the automation and test it with you before real customers use it." },
      { title: "Launch & support", text: "I monitor the workflows, adjust them and remain your direct contact." },
    ],
  },
  trust: [
    { title: "Privacy in mind", text: "I only process the data that's needed and update your privacy policy." },
    { title: "AI is clearly labelled", text: "Your customers know when they're chatting with an AI – as the EU AI Act requires." },
    { title: "Personal, in Aachen", text: "One contact person instead of a hotline. I usually reply within 24 hours." },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How much does AI automation cost?",
        a: "It depends on the scope. After the free initial call you receive a transparent fixed-price quote for the setup, plus a small monthly fee for operation, AI costs and maintenance.",
      },
      {
        q: "Do I need a new website for this?",
        a: "No. Many automations can be connected to your existing website, email inbox or calendar. If you're planning a new website anyway, I build both together.",
      },
      {
        q: "What happens if an automation makes a mistake?",
        a: "I test every workflow before launch and monitor it afterwards. If something fails, I get notified. When the AI is unsure, it passes the request on to you instead of making something up.",
      },
      {
        q: "Is it GDPR-compliant?",
        a: "I set up the workflows so that only the necessary data is processed, use providers with EU servers where possible and update your privacy policy. Where an AI provider outside the EU is needed, we clarify the legal basis before launch.",
      },
      {
        q: "How much work is it for me?",
        a: "Very little. For the initial call and the test version I need your knowledge of your business. After that everything runs in the background, and you simply send me any changes.",
      },
      {
        q: "Which businesses benefit most?",
        a: "Especially those with many similar enquiries and little time for office work: trades, medical practices, hair and beauty salons, real estate and service providers with lots of appointments.",
      },
    ],
  },
  related: {
    label: "More services:",
    links: [
      { href: "/en/web-design-aachen", label: "Web design in Aachen" },
      { href: "/en/web-development-aachen", label: "Web development" },
      { href: "/en/seo-aachen", label: "SEO in Aachen" },
      { href: "/en/blog/ai-automation-for-small-businesses", label: "Blog: AI automation for small businesses" },
    ],
  },
  closing: {
    title: "Where is your business losing time?",
    text: "Tell me in a free initial call. I'll look at your workflows and tell you honestly what's worth it. I usually reply within 24 hours.",
    cta: "Book a consultation",
  },
};

export default function AiAutomationPage() {
  return <AutomationPage locale="en" c={CONTENT} />;
}
