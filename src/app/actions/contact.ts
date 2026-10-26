"use server";

import { getDb } from "@/lib/db";
import { findBudget, findPackage, type BudgetValue, type PackageValue } from "@/lib/contact-options";
import { sendContactNotification } from "@/lib/mailer";
import { DEFAULT_LOCALE, getDictionary, isLocale } from "@/lib/i18n";

export type ContactField = "name" | "email" | "phone" | "message" | "package" | "budget";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<ContactField, string>>;
  // Eingaben zurückgeben, damit das Formular bei Fehlern nicht geleert wird
  values?: Partial<Record<ContactField, string>>;
};

const LIMITS = { name: 100, email: 254, phone: 30, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+0-9 ()/-]{5,30}$/;

function readField(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Sprache des Formulars bestimmt die Sprache der Meldungen (Fallback: Deutsch)
  const rawLocale = readField(formData, "lang");
  const locale = isLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const t = getDictionary(locale).form.messages;

  // Honeypot: Für Menschen unsichtbares Feld – Bots füllen es aus.
  // Wir tun so, als wäre alles geklappt, speichern aber nichts.
  if (readField(formData, "website") !== "") {
    return { status: "success", message: t.thanksShort };
  }

  const values = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    phone: readField(formData, "phone"),
    message: readField(formData, "message"),
    package: readField(formData, "package"),
    budget: readField(formData, "budget") || "unklar",
  };

  const errors: ContactFormState["errors"] = {};
  if (!values.name) errors.name = t.nameRequired;
  else if (values.name.length > LIMITS.name) errors.name = t.nameTooLong;

  if (!EMAIL_PATTERN.test(values.email) || values.email.length > LIMITS.email)
    errors.email = t.emailInvalid;

  if (values.phone && !PHONE_PATTERN.test(values.phone))
    errors.phone = t.phoneInvalid;

  if (values.message.length < 10) errors.message = t.messageTooShort;
  else if (values.message.length > LIMITS.message) errors.message = t.messageTooLong;

  // Nur bekannte Werte akzeptieren – manipulierte Requests werden abgewiesen
  const selectedPackage = findPackage(values.package);
  if (!selectedPackage) errors.package = t.packageRequired;

  const selectedBudget = findBudget(values.budget);
  if (!selectedBudget) errors.budget = t.budgetInvalid;

  if (!selectedPackage || !selectedBudget || Object.keys(errors).length > 0) {
    return { status: "error", message: t.checkInputs, errors, values };
  }

  const phone = values.phone || null;
  const packageValue: PackageValue = selectedPackage.value;
  const budgetValue: BudgetValue = selectedBudget.value;

  let insertId: number;
  try {
    // Tagged Template: Neon sendet die Werte als Parameter ($1, $2, …) getrennt vom SQL
    // → kein SQL-Injection-Risiko. Niemals Strings selbst ins SQL konkatenieren!
    const sql = getDb();
    const rows = await sql`
      INSERT INTO contact_requests (name, email, phone, message, package, budget)
      VALUES (${values.name}, ${values.email}, ${phone}, ${values.message}, ${packageValue}, ${budgetValue})
      RETURNING id
    `;
    insertId = Number(rows[0].id);
  } catch (error) {
    console.error("[contact] Speichern fehlgeschlagen:", error);
    return {
      status: "error",
      message: t.sendFailed,
      values,
    };
  }

  try {
    await sendContactNotification({
      id: insertId,
      name: values.name,
      email: values.email,
      phone,
      message: values.message,
      packageValue,
      budgetValue,
      locale,
    });
  } catch (error) {
    // Anfrage ist bereits gespeichert – für den Kunden trotzdem ein Erfolg
    console.error(`[contact] Benachrichtigung für Anfrage #${insertId} fehlgeschlagen:`, error);
  }

  return {
    status: "success",
    message: t.thanks,
  };
}
