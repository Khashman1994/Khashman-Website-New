import { FlagDE, FlagUS } from "@/components/Flags";
import { HOME_PATH, type Locale } from "@/lib/i18n";

const OPTIONS: { locale: Locale; code: string; name: string; Flag: typeof FlagDE }[] = [
  { locale: "de", code: "DE", name: "Deutsch", Flag: FlagDE },
  { locale: "en", code: "EN", name: "English", Flag: FlagUS },
];

// Umschalter Deutsch/Englisch. Normale Links (kein <Link>): Die Sprachen haben getrennte
// Root-Layouts, ein Wechsel lädt die Seite ohnehin komplett neu.
export default function LanguageSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center rounded-full border border-fg/15 p-0.5">
      {OPTIONS.map(({ locale, code, name, Flag }) => {
        const active = locale === current;
        return (
          <a
            key={locale}
            href={HOME_PATH[locale]}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? "page" : undefined}
            title={name}
            className={`flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium transition-colors ${
              active ? "bg-fg/10 text-fg" : "text-fg/50 hover:text-fg"
            }`}
          >
            <Flag className="h-3 w-[1.125rem] rounded-[2px] shadow-[0_0_0_1px_rgb(0_0_0/0.15)]" />
            <span className="hidden sm:inline">{code}</span>
            <span className="sr-only sm:hidden">{name}</span>
          </a>
        );
      })}
    </nav>
  );
}
