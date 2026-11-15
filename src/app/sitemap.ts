import type { MetadataRoute } from "next";
import { getAllPosts, getBlogPairs } from "@/lib/blog";
import { HOME_PATH, LOCALES, PAGE_PAIRS } from "@/lib/i18n";
import { SITE } from "@/lib/site";

// Beide Sprachfassungen mit gegenseitigem hreflang-Verweis.
// Impressum & Datenschutz sind bewusst "noindex" und fehlen deshalb hier. Der Blog ist enthalten.
export default function sitemap(): MetadataRoute.Sitemap {
  const absolute = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);
  const languages = Object.fromEntries(LOCALES.map((locale) => [locale, absolute(HOME_PATH[locale])]));

  const pages: MetadataRoute.Sitemap = LOCALES.map((locale) => ({
    url: absolute(HOME_PATH[locale]),
    lastModified: new Date("2026-10-26"),
    changeFrequency: "monthly" as const,
    priority: locale === "de" ? 1 : 0.8,
    alternates: { languages },
  }));

  // Zweisprachige Seiten (Leistungen, Beispiele, Blog-Übersicht) mit hreflang
  const PRIORITY: Record<string, number> = { "/beispiele": 0.6, "/blog": 0.7 };
  for (const pair of PAGE_PAIRS.filter((p) => p.de !== "/")) {
    const languages = { de: absolute(pair.de), en: absolute(pair.en) };
    for (const locale of LOCALES) {
      pages.push({
        url: absolute(pair[locale]),
        lastModified: new Date("2026-11-15"),
        changeFrequency: pair.de === "/blog" ? ("weekly" as const) : ("monthly" as const),
        priority: (PRIORITY[pair.de] ?? 0.8) - (locale === "en" ? 0.2 : 0),
        alternates: { languages },
      });
    }
  }

  // Jeder Blog-Artikel mit eigener Adresse
  const blogPairs = getBlogPairs();
  for (const post of getAllPosts()) {
    const pair = blogPairs.find((p) => p.de === `/blog/${post.slug}`);
    pages.push({
      url: absolute(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      alternates: pair ? { languages: { de: absolute(pair.de), en: absolute(pair.en) } } : undefined,
    });
  }

  // Englische Artikel
  for (const post of getAllPosts("en")) {
    const pair = blogPairs.find((p) => p.en === `/en/blog/${post.slug}`);
    pages.push({
      url: absolute(`/en/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
      alternates: pair ? { languages: { de: absolute(pair.de), en: absolute(pair.en) } } : undefined,
    });
  }

  return pages;
}
