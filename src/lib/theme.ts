// Hell/Dunkel-Modus. Hell ist der Standard auf allen Seiten; wer manuell auf Dunkel
// umschaltet, behält die Wahl (im Browser gespeichert).

export type Theme = "dark" | "light";

export const DEFAULT_THEME: Theme = "light";
// Neuer Schlüssel, seit Hell der Standard ist: alte Einstellungen aus der Dunkel-Zeit gelten nicht mehr
export const THEME_STORAGE_KEY = "theme-v2";

// Farbe der Browserleiste auf dem Handy – entspricht --ink-950 in globals.css
export const THEME_COLORS: Record<Theme, string> = { dark: "#05060a", light: "#f5f6fa" };

// Läuft im <head>, bevor die Seite gezeichnet wird: setzt das gespeicherte Theme,
// damit beim Laden nichts von Dunkel auf Hell (oder umgekehrt) springt.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}if(t==="dark"){document.addEventListener("DOMContentLoaded",function(){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",${JSON.stringify(THEME_COLORS.dark)});});}}catch(e){}})();`;
