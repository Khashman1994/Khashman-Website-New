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

const DICTIONARIES: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
