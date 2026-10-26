-- Tabelle für Kundenanfragen aus dem Kontaktformular (Postgres / Neon)
-- Vollständiges Schema für ein frisches Setup. Für die bestehende Tabelle:
-- siehe db/migrations/001_add_package_budget.sql

CREATE TABLE IF NOT EXISTS contact_requests (
  id          INTEGER      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(254) NOT NULL,
  phone       VARCHAR(30),
  message     TEXT         NOT NULL CHECK (char_length(message) <= 5000),
  package     VARCHAR(20)
    CONSTRAINT contact_requests_package_check
    CHECK (package IN ('starter', 'business', 'premium', 'individuell')),
  budget      VARCHAR(20),
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at
  ON contact_requests (created_at DESC);
