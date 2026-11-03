"use server";

import { getDb } from "@/lib/db";
import { sendChatNotification } from "@/lib/mailer";

export type ChatState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
  // Eingaben zurückgeben, damit der Chat sie bei Fehlern wieder anzeigt
  values?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+0-9 ()/-]{5,30}$/;

let tableReady = false;

// Legt die Tabelle beim ersten Aufruf an (idempotent), damit kein manueller Schritt nötig ist
async function ensureTable() {
  if (tableReady) return;
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS chat_requests (
      id          INTEGER      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      name        VARCHAR(100) NOT NULL,
      email       VARCHAR(254) NOT NULL,
      phone       VARCHAR(30),
      message     TEXT         NOT NULL CHECK (char_length(message) <= 2000),
      topic       VARCHAR(200),
      created_at  TIMESTAMPTZ  NOT NULL DEFAULT now()
    )
  `;
  tableReady = true;
}

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitChatLead(_prev: ChatState, formData: FormData): Promise<ChatState> {
  // Honeypot: Bots füllen das unsichtbare Feld aus – dann so tun, als wäre alles geklappt
  if (readField(formData, "website") !== "") {
    return { status: "success", message: "Danke! Deine Anfrage ist angekommen." };
  }

  const values = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    message: readField(formData, "message"),
    topic: readField(formData, "topic").slice(0, 200),
  };

  const errors: NonNullable<ChatState["errors"]> = {};
  if (!values.name || values.name.length > 100) errors.name = "Bitte gib deinen Namen an.";
  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 254)
    errors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
  if (values.phone && !PHONE_PATTERN.test(values.phone)) errors.phone = "Bitte prüfe die Telefonnummer.";
  if (values.message.length < 5) errors.message = "Bitte schreib ein, zwei Sätze zu deinem Anliegen.";
  else if (values.message.length > 2000) errors.message = "Bitte kürze deine Nachricht auf 2000 Zeichen.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Bitte prüfe deine Angaben.",
      errors,
      values: { name: values.name, email: values.email, phone: values.phone, message: values.message },
    };
  }

  const phone = values.phone || null;
  const topic = values.topic || null;

  try {
    await ensureTable();
    await getDb()`
      INSERT INTO chat_requests (name, email, phone, message, topic)
      VALUES (${values.name}, ${values.email}, ${phone}, ${values.message}, ${topic})
    `;
  } catch (error) {
    console.error("[chat] Speichern fehlgeschlagen:", error);
    return {
      status: "error",
      message: "Das hat leider nicht geklappt. Schreib mir gern direkt per E-Mail oder WhatsApp.",
    };
  }

  try {
    await sendChatNotification({ ...values, phone, topic });
  } catch (error) {
    // Anfrage ist gespeichert – für den Besucher trotzdem ein Erfolg
    console.error("[chat] Benachrichtigung fehlgeschlagen:", error);
  }

  return { status: "success", message: "Danke! Deine Anfrage ist angekommen. Ich melde mich bei dir." };
}
