import type { Metadata, Viewport } from "next";
import { getDictionary, HOME_PATH, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { THEME_COLORS } from "@/lib/theme";

// Metadaten der Startseite je Sprache – inkl. hreflang, damit Google beide Fassungen verknüpft
export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta;
  const otherLocale: Locale = locale === "de" ? "en" : "de";

  return {
    metadataBase: new URL(SITE.url),
    title: { default: t.title, template: `%s | ${SITE.name}` },
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: SITE.owner, url: SITE.url }],
    creator: SITE.owner,
    alternates: {
      canonical: HOME_PATH[locale],
      languages: { de: HOME_PATH.de, en: HOME_PATH.en, "x-default": HOME_PATH.de },
    },
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      alternateLocale: getDictionary(otherLocale).meta.ogLocale,
      url: HOME_PATH[locale],
      siteName: SITE.name,
      title: t.title,
      description: t.description,
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    // Sonst macht iOS aus Preisen/Zahlen ungewollt Telefon-Links
    formatDetection: { telephone: false },
    category: "Webdesign",
  };
}

export const viewport: Viewport = {
  themeColor: THEME_COLORS.dark,
  colorScheme: "dark light",
};
