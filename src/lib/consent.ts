import { useSyncExternalStore } from "react";

// Einwilligung für externe Inhalte (aktuell: Soro-Blog). Die Wahl wird im Browser gespeichert.
// "loading" gibt es nur auf dem Server und beim ersten Rendern, bevor der Browser gelesen wurde.

export type Consent = "accepted" | "declined";
export const CONSENT_STORAGE_KEY = "cookie-consent";

const CHANGE_EVENT = "cookie-consent-change";

// Falls localStorage nicht verfügbar ist (privater Modus o. Ä.), gilt die Wahl nur bis zum Neuladen
let fallback: Consent | null = null;

export function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "accepted" || value === "declined") return value;
    return null;
  } catch {
    return fallback;
  }
}

export function writeConsent(value: Consent | null) {
  const previous = readConsent();
  fallback = value;
  try {
    if (value === null) localStorage.removeItem(CONSENT_STORAGE_KEY);
    else localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // nicht speicherbar: die Wahl gilt trotzdem für diese Sitzung
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
  // Ein bereits geladenes externes Skript lässt sich nicht entladen – deshalb neu laden
  if (previous === "accepted" && value !== "accepted") window.location.reload();
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

export function useConsent(): Consent | null | "loading" {
  return useSyncExternalStore<Consent | null | "loading">(subscribe, readConsent, () => "loading");
}
