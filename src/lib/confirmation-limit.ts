import "server-only";
import { getDb } from "@/lib/db";

// Schutz vor Missbrauch der Eingangsbestätigung: Jemand könnte fremde Adressen ins
// Formular eintragen und so über unser Gmail-Konto massenhaft E-Mails auslösen.
// Die Anfrage selbst wird immer gespeichert und an mich gemeldet – nur die
// Bestätigung an den Absender entfällt, wenn eine Grenze erreicht ist.
const PER_ADDRESS_PER_HOUR = 3;
const TOTAL_PER_HOUR = 20;

async function recent(table: "contact_requests" | "chat_requests", email: string) {
  const sql = getDb();
  const rows =
    table === "contact_requests"
      ? await sql`
          SELECT COUNT(*) FILTER (WHERE lower(email) = lower(${email})) AS same_address, COUNT(*) AS total
          FROM contact_requests WHERE created_at > now() - interval '1 hour'`
      : await sql`
          SELECT COUNT(*) FILTER (WHERE lower(email) = lower(${email})) AS same_address, COUNT(*) AS total
          FROM chat_requests WHERE created_at > now() - interval '1 hour'`;
  return { sameAddress: Number(rows[0].same_address), total: Number(rows[0].total) };
}

export async function mayConfirm(email: string, source: "contact_requests" | "chat_requests"): Promise<boolean> {
  try {
    // Die Tabelle der aktuellen Anfrage muss lesbar sein (die gerade gespeicherte Anfrage ist mitgezählt)
    const own = await recent(source, email);
    const otherTable = source === "contact_requests" ? "chat_requests" : "contact_requests";
    const other = await recent(otherTable, email).catch(() => ({ sameAddress: 0, total: 0 }));
    const sameAddress = own.sameAddress + other.sameAddress;
    const total = own.total + other.total;
    return sameAddress <= PER_ADDRESS_PER_HOUR && total <= TOTAL_PER_HOUR;
  } catch (error) {
    // Im Zweifel lieber keine Bestätigung als ein gesperrtes Mailkonto
    console.error("[confirmation-limit] Prüfung fehlgeschlagen:", error);
    return false;
  }
}
