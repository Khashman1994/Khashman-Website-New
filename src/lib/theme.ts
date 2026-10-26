// Hell/Dunkel-Modus. Dunkel ist der Standard (Markenauftritt), die Wahl wird im Browser gespeichert.

export type Theme = "dark" | "light";

export const DEFAULT_THEME: Theme = "dark";
export const THEME_STORAGE_KEY = "theme";

// Farbe der Browserleiste auf dem Handy – entspricht --ink-950 in globals.css
export const THEME_COLORS: Record<Theme, string> = { dark: "#05060a", light: "#f5f6fa" };

// Läuft im <head>, bevor die Seite gezeichnet wird: setzt das gespeicherte Theme,
// damit beim Laden nichts von Dunkel auf Hell (oder umgekehrt) springt.
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}if(t==="light"){document.addEventListener("DOMContentLoaded",function(){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",${JSON.stringify(THEME_COLORS.light)});});}}catch(e){}})();`;
