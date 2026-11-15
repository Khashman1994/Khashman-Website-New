"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { PREFILL_EVENT, PREFILL_STORAGE_KEY } from "@/lib/prefill";

// Link zum Kontaktformular, der die Nachricht vorbefüllt (auch über Seitengrenzen hinweg)
export default function PrefillLink({
  href,
  message,
  className,
  children,
}: {
  href: string;
  message: string;
  className?: string;
  children: ReactNode;
}) {
  function handleClick() {
    window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: message }));
    try {
      sessionStorage.setItem(PREFILL_STORAGE_KEY, message);
    } catch {
      // Speicher nicht verfügbar (z. B. privates Fenster): Event reicht auf derselben Seite
    }
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
