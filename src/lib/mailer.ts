import "server-only";
import nodemailer from "nodemailer";
import { findBudget, findPackage, type BudgetValue, type PackageValue } from "@/lib/contact-options";

export const CONTACT_RECIPIENT = "khashman123123@gmail.com";

export type ContactMail = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  packageValue: PackageValue;
  budgetValue: BudgetValue;
  locale: "de" | "en";
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:6px 0;width:110px;color:#64748b;font-size:14px;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;color:#0f172a;font-size:14px;font-weight:600;">${value}</td>
    </tr>`;
}

export async function sendContactNotification(data: ContactMail): Promise<void> {
  const phone = data.phone ?? "–";
  const pkg = findPackage(data.packageValue);
  const budget = findBudget(data.budgetValue)?.label ?? data.budgetValue;
  const packageLabel = pkg?.label ?? data.packageValue;

  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);

  await transporter.sendMail({
    from: `"Khashman Webdesign – Website" <${process.env.EMAIL_USER}>`,
    to: CONTACT_RECIPIENT,
    // "Antworten" im Mailprogramm geht direkt an den Kunden
    replyTo: { name: data.name, address: data.email },
    // [EN] markiert Anfragen von der englischen Seite – dann am besten auf Englisch antworten
    subject: `${data.locale === "en" ? "[EN] " : ""}Neue Anfrage #${data.id} · ${packageLabel} · ${data.name}`,
    text: [
      `Paket:   ${packageLabel}${pkg ? ` (${pkg.price})` : ""}`,
      `Budget:  ${budget}`,
      "",
      `Name:    ${data.name}`,
      `E-Mail:  ${data.email}`,
      `Telefon: ${phone}`,
      "",
      data.message,
    ].join("\n"),
    html: `
<!DOCTYPE html>
<html lang="de">
  <body style="margin:0;padding:24px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="background:#0f172a;padding:24px 32px;">
          <p style="margin:0;color:#94a3b8;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Neue Kontaktanfrage #${data.id}</p>
          <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;">${name}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 32px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eff6ff;border:2px solid #2563eb;border-radius:12px;">
            <tr>
              <td style="padding:18px 20px;">
                <p style="margin:0;color:#2563eb;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Gewähltes Paket</p>
                <p style="margin:6px 0 0;">
                  <span style="display:inline-block;background:#2563eb;color:#ffffff;font-size:18px;font-weight:700;padding:6px 16px;border-radius:999px;">${escapeHtml(packageLabel)}</span>
                  ${pkg ? `<span style="margin-left:8px;color:#0f172a;font-size:15px;font-weight:600;">${escapeHtml(pkg.price)}</span>` : ""}
                </p>
                <p style="margin:12px 0 0;color:#334155;font-size:14px;">Ungefähres Budget: <strong>${escapeHtml(budget)}</strong></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 32px 0;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${detailRow("E-Mail", `<a href="mailto:${email}" style="color:#2563eb;">${email}</a>`)}
            ${detailRow("Telefon", escapeHtml(phone))}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 32px 32px;">
          <p style="margin:0 0 8px;color:#64748b;font-size:14px;">Nachricht</p>
          <div style="background:#f8fafc;border-left:4px solid #2563eb;border-radius:8px;padding:16px;color:#0f172a;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  });
}
