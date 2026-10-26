import type { MetadataRoute } from "next";
import { HOME_PATH, LOCALES } from "@/lib/i18n";
import { SITE } from "@/lib/site";

// Beide Sprachfassungen mit gegenseitigem hreflang-Verweis.
// Impressum & Datenschutz sind bewusst "noindex" und fehlen deshalb hier.
export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);
  const languages = Object.fromEntries(LOCALES.map((locale) => [locale, absolute(HOME_PATH[locale])]));

  return LOCALES.map((locale) => ({
    url: absolute(HOME_PATH[locale]),
    lastModified: new Date("2026-10-26"),
    changeFrequency: "monthly" as const,
    priority: locale === "de" ? 1 : 0.8,
    alternates: { languages },
  }));
}
