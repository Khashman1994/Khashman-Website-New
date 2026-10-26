// Zentrale Kontaktdaten – hier ändern, nicht in den einzelnen Seiten.
// WhatsApp und Telefon sind bewusst zwei verschiedene Nummern.

// Kanonische Adresse für SEO: eigene Variable > Produktions-Domain von Vercel > Fallback
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://khashman-webdesign.de";
}

export const SITE = {
  name: "Khashman Webdesign",
  owner: "Khashman Alturki",
  city: "Aachen",
  region: "Nordrhein-Westfalen",
  url: resolveSiteUrl(),
  title: "Webdesign Aachen | Khashman Webdesign – Moderne Webseiten ab 299 €",
  description:
    "Webdesign aus Aachen: Moderne, schnelle und DSGVO-konforme Webseiten für Selbstständige, KMU und Gründer. Festpreise ab 299 €, Hosting & Wartung inklusive. Jetzt kostenloses Erstgespräch sichern.",
  email: "kontakt@khashman-webdesign.de",
  phoneDisplay: "+49 173 5434710",
  phoneUrl: "tel:+491735434710",
  phoneE164: "+491735434710",
  whatsappDisplay: "+49 159 08048034",
  whatsappUrl: "https://wa.me/4915908048034",
} as const;
