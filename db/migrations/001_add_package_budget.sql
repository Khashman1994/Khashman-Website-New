-- Paket- und Budget-Auswahl zum Kontaktformular hinzufügen.
-- In der Neon SQL Console ausführen, BEVOR der neue Code deployt wird.
-- Spalten sind nullable, damit bestehende Anfragen gültig bleiben.

ALTER TABLE contact_requests
  ADD COLUMN IF NOT EXISTS package VARCHAR(20)
    CONSTRAINT contact_requests_package_check
    CHECK (package IN ('starter', 'business', 'premium', 'individuell')),
  ADD COLUMN IF NOT EXISTS budget VARCHAR(20);
