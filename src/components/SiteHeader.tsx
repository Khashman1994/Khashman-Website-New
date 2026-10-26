"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";
import { HOME_PATH, type Dictionary, type Locale } from "@/lib/i18n";

export default function SiteHeader({ locale, t }: { locale: Locale; t: Dictionary["nav"] }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Anker immer auf die Startseite der aktuellen Sprache – funktioniert auch vom Impressum aus
  const home = HOME_PATH[locale];
  const anchor = (hash: string) => `${home === "/" ? "/" : home}${hash}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-4 py-3 transition-[background-color,border-color,box-shadow] duration-500 sm:px-5 ${
          scrolled || open
            ? "border-fg/10 bg-ink-900/70 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href={home} className="text-lg font-semibold tracking-tight text-fg" onClick={() => setOpen(false)}>
          Khashman<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm lg:flex">
          {t.links.map((link) => (
            <Link key={link.href} href={anchor(link.href)} className="text-fg/60 transition-colors hover:text-fg">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitch current={locale} label={t.language} />
          <ThemeToggle label={t.themeToggle} />
          <Link
            href={anchor("#kontakt")}
            className="hidden rounded-full bg-fg px-4 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-accent hover:text-white sm:block"
          >
            {t.cta}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-fg/15 lg:hidden"
          >
            <span className={`h-px w-4 bg-fg transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-fg transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-fg/10 bg-ink-900/90 p-3 backdrop-blur-xl lg:hidden"
          >
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={anchor(link.href)}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-lg text-fg/80 hover:bg-fg/5 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={anchor("#kontakt")}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-2xl bg-fg px-4 py-3 text-center text-lg font-medium text-ink-950 sm:hidden"
            >
              {t.cta}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
