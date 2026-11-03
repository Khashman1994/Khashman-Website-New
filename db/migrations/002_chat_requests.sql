-- Anfragen aus dem Chat-Assistenten (FAQ-Chat)
-- Wird beim ersten Absenden automatisch angelegt (siehe src/app/actions/chat.ts);
-- diese Datei dient der Dokumentation und kann auch manuell im Neon SQL Editor ausgeführt werden.

CREATE TABLE IF NOT EXISTS chat_requests (
  id          INTEGER      GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(254) NOT NULL,
  phone       VARCHAR(30),
  message     TEXT         NOT NULL CHECK (char_length(message) <= 2000),
  topic       VARCHAR(200),
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT now()
);
