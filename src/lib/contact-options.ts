// Gemeinsame Auswahl-Optionen für Kontaktformular, Server Action und E-Mail.
// Die `value`-Werte landen in der Datenbank – nur ändern, wenn auch die DB-Daten angepasst werden.
// Deutsche Texte direkt am Objekt (für die Benachrichtigungs-Mail), englische unter `en`.

export const PACKAGE_OPTIONS = [
  {
    value: "starter",
    label: "Starter",
    price: "ab 299 €",
    tagline: "One-Page Visitenkarte",
    en: { label: "Starter", price: "from €299", tagline: "One-page business card" },
  },
  {
    value: "business",
    label: "Business",
    price: "ab 649 €",
    tagline: "Bis zu 5 Unterseiten & SEO",
    en: { label: "Business", price: "from €649", tagline: "Up to 5 subpages & SEO" },
  },
  {
    value: "premium",
    label: "Premium",
    price: "ab 1.199 €",
    tagline: "Shop, Buchung & mehr",
    en: { label: "Premium", price: "from €1,199", tagline: "Shop, booking & more" },
  },
  {
    value: "individuell",
    label: "Individuell",
    price: "auf Anfrage",
    tagline: "Maßgeschneiderte Lösung",
    en: { label: "Custom", price: "on request", tagline: "Tailor-made solution" },
  },
] as const;

export const BUDGET_OPTIONS = [
  { value: "unklar", label: "Noch unklar", en: { label: "Not sure yet" } },
  { value: "bis-500", label: "bis 500 €", en: { label: "up to €500" } },
  { value: "500-1000", label: "500 – 1.000 €", en: { label: "€500 – 1,000" } },
  { value: "1000-2500", label: "1.000 – 2.500 €", en: { label: "€1,000 – 2,500" } },
  { value: "ueber-2500", label: "über 2.500 €", en: { label: "over €2,500" } },
] as const;

export type PackageValue = (typeof PACKAGE_OPTIONS)[number]["value"];
export type BudgetValue = (typeof BUDGET_OPTIONS)[number]["value"];

export function findPackage(value: string) {
  return PACKAGE_OPTIONS.find((option) => option.value === value);
}

export function findBudget(value: string) {
  return BUDGET_OPTIONS.find((option) => option.value === value);
}

// Texte einer Option in der gewünschten Sprache
export function localized<T extends { label: string; en: { label: string } }>(option: T, locale: "de" | "en") {
  return locale === "en" ? { ...option, ...option.en } : option;
}
