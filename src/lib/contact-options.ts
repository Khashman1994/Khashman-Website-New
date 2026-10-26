// Gemeinsame Auswahl-Optionen für Kontaktformular, Server Action und E-Mail.
// Die `value`-Werte landen in der Datenbank – nur ändern, wenn auch die DB-Daten angepasst werden.

export const PACKAGE_OPTIONS = [
  { value: "starter", label: "Starter", price: "ab 299 €", tagline: "One-Page Visitenkarte" },
  { value: "business", label: "Business", price: "ab 649 €", tagline: "Bis zu 5 Unterseiten & SEO" },
  { value: "premium", label: "Premium", price: "ab 1.199 €", tagline: "Shop, Buchung & mehr" },
  { value: "individuell", label: "Individuell", price: "auf Anfrage", tagline: "Maßgeschneiderte Lösung" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "unklar", label: "Noch unklar" },
  { value: "bis-500", label: "bis 500 €" },
  { value: "500-1000", label: "500 – 1.000 €" },
  { value: "1000-2500", label: "1.000 – 2.500 €" },
  { value: "ueber-2500", label: "über 2.500 €" },
] as const;

export type PackageValue = (typeof PACKAGE_OPTIONS)[number]["value"];
export type BudgetValue = (typeof BUDGET_OPTIONS)[number]["value"];

export function findPackage(value: string) {
  return PACKAGE_OPTIONS.find((option) => option.value === value);
}

export function findBudget(value: string) {
  return BUDGET_OPTIONS.find((option) => option.value === value);
}
