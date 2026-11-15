// Sprachen der Website. Deutsch ist die Hauptsprache und liegt unter "/",
// Englisch unter "/en". Texte stehen in src/lib/dictionaries/.

import de from "@/lib/dictionaries/de";
import en from "@/lib/dictionaries/en";

export const LOCALES = ["de", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "de";

// Startseite je Sprache – für Sprachumschalter, hreflang und Sitemap
export const HOME_PATH: Record<Locale, string> = { de: "/", en: "/en" };

export type Dictionary = typeof de;

// Seiten, die es in beiden Sprachen gibt – für Sprachumschalter, hreflang und Sitemap.
// Blogartikel kommen dynamisch dazu (siehe getPagePairs in SiteShell).
export type PagePair = Record<Locale, string>;

export const PAGE_PAIRS: PagePair[] = [
  { de: "/", en: "/en" },
  { de: "/ki-automatisierung", en: "/en/ai-automation" },
  { de: "/webdesign-aachen", en: "/en/web-design-aachen" },
  { de: "/webentwicklung-aachen", en: "/en/web-development-aachen" },
  { de: "/seo-aachen", en: "/en/seo-aachen" },
  { de: "/beispiele", en: "/en/examples" },
  { de: "/blog", en: "/en/blog" },
];

/** Pfad einer Seite in der anderen Sprache (für Seiten aus PAGE_PAIRS) */
export function pathFor(dePath: string, locale: Locale): string {
  return PAGE_PAIRS.find((pair) => pair.de === dePath)?.[locale] ?? HOME_PATH[locale];
}

/** hreflang-Angaben für die Metadaten einer zweisprachigen Seite */
export function languageAlternates(pair: PagePair) {
  return { de: pair.de, en: pair.en, "x-default": pair.de };
}

/** canonical + hreflang für eine Seite aus PAGE_PAIRS (dePath = deutsche Adresse) */
export function alternatesFor(dePath: string, locale: Locale) {
  const pair = PAGE_PAIRS.find((p) => p.de === dePath);
  if (!pair) throw new Error(`Seite fehlt in PAGE_PAIRS: ${dePath}`);
  return { canonical: pair[locale], languages: languageAlternates(pair) };
}

const DICTIONARIES: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
