import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz | Khashman Webdesign",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung" subtitle="Zuletzt aktualisiert: Oktober 2026">
      <h2>1. Verantwortlicher</h2>
      <p>
        Khashman Alturki
        <br />
        Aachen, Deutschland
        <br />
        E-Mail: <a href="mailto:kontakt@khashman-webdesign.de">kontakt@khashman-webdesign.de</a>
        <br />
        Telefon: +49 173 5434710
      </p>

      <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>
        Ich erhebe personenbezogene Daten nur, wenn Sie mir diese freiwillig über das Kontaktformular mitteilen. Dies
        umfasst:
      </p>
      <ul>
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>Telefonnummer</li>
        <li>Ihre Nachricht / Projektbeschreibung</li>
      </ul>

      <h2>3. Zweck der Datenverarbeitung</h2>
      <p>
        Die erhobenen Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verwendet. Eine
        Weitergabe an Dritte findet nicht statt.
      </p>

      <h2>4. Formspree (Kontaktformular)</h2>
      <p>
        Das Kontaktformular dieser Website wird über den Dienst Formspree (formspree.io) betrieben. Beim Absenden des
        Formulars werden Ihre Daten an Server von Formspree in den USA übertragen. Formspree verarbeitet diese Daten gemäß
        seiner eigenen Datenschutzrichtlinie (
        <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          formspree.io/legal/privacy-policy
        </a>
        ).
      </p>

      <h2>5. Schriftarten</h2>
      <p>
        Diese Website verwendet die Schriftarten „Outfit“ und „Cormorant Garamond“. Die Schriftdateien werden lokal vom
        Server dieser Website ausgeliefert. Beim Aufruf der Seite findet keine Verbindung zu Servern von Google statt.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
        <a href="mailto:kontakt@khashman-webdesign.de">kontakt@khashman-webdesign.de</a>
      </p>

      <h2>7. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren. In NRW ist dies die Landesbeauftragte
        für Datenschutz und Informationsfreiheit NRW:{" "}
        <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
          www.ldi.nrw.de
        </a>
      </p>

      <h2>8. Speicherdauer</h2>
      <p>
        Ihre Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage notwendig ist, bzw. solange
        gesetzliche Aufbewahrungspflichten bestehen.
      </p>

      <h2>9. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version ist auf dieser
        Seite abrufbar.
      </p>
    </LegalPage>
  );
}
