import "server-only";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let sql: NeonQueryFunction<false, false> | undefined;

// Lazy initialisiert, damit der Build nicht ohne Umgebungsvariablen abbricht
export function getDb(): NeonQueryFunction<false, false> {
  if (!sql) {
    const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
    if (!url) throw new Error("Umgebungsvariable DATABASE_URL bzw. POSTGRES_URL fehlt.");
    sql = neon(url);
  }
  return sql;
}
