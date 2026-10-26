import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz" },
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
        <li>Das gewählte Paket und Ihr ungefähres Budget</li>
      </ul>

      <h2>3. Zweck und Rechtsgrundlage der Datenverarbeitung</h2>
      <p>
        Die erhobenen Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage, zur Erstellung eines Angebots und zur
        Kontaktaufnahme mit Ihnen verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen),
        soweit Ihre Anfrage auf einen Vertragsabschluss gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an der Beantwortung von Anfragen). Ihre Daten werden nicht verkauft und nicht zu Werbezwecken an Dritte
        weitergegeben. Zur technischen Abwicklung setze ich die in Abschnitt 4 genannten Dienstleister als
        Auftragsverarbeiter ein.
      </p>

      <h2>4. Kontaktformular, Hosting und Datenspeicherung</h2>
      <p>
        Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben verschlüsselt (HTTPS/TLS) übertragen und wie folgt
        verarbeitet:
      </p>
      <h3>Hosting (Vercel)</h3>
      <p>
        Diese Website und die Verarbeitung des Kontaktformulars werden bei der Vercel Inc., 440 N Barranca Ave #4133,
        Covina, CA 91723, USA, gehostet. Beim Absenden des Formulars werden Ihre Angaben sowie technisch notwendige Daten
        (z. B. IP-Adresse, Zeitpunkt der Anfrage) über die Server von Vercel verarbeitet. Weitere Informationen:{" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          vercel.com/legal/privacy-policy
        </a>
        .
      </p>
      <h3>Speicherung in einer Datenbank (Neon / Vercel Postgres)</h3>
      <p>
        Ihre Anfrage wird in einer Postgres-Datenbank gespeichert, die über Vercel bei der Neon Inc., San Francisco, USA,
        betrieben wird. Der Serverstandort der Datenbank befindet sich in den USA. Die Daten werden verschlüsselt übertragen
        und gespeichert; Zugriff habe ausschließlich ich. Weitere Informationen:{" "}
        <a href="https://neon.com/privacy-policy" target="_blank" rel="noopener noreferrer">
          neon.com/privacy-policy
        </a>
        .
      </p>
      <h3>E-Mail-Benachrichtigung (Google Mail)</h3>
      <p>
        Unmittelbar nach dem Speichern erhalte ich eine Benachrichtigung mit dem Inhalt Ihrer Anfrage per E-Mail. Der
        Versand und Empfang erfolgt über Google Mail (Gmail), einen Dienst der Google Ireland Limited, Gordon House, Barrow
        Street, Dublin 4, Irland. Dabei können Daten auch an die Google LLC in den USA übermittelt werden. Weitere
        Informationen:{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>
        .
      </p>
      <h3>Übermittlung in die USA</h3>
      <p>
        Die genannten Anbieter verarbeiten Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage des
        Angemessenheitsbeschlusses der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO), soweit der jeweilige
        Anbieter danach zertifiziert ist, und ergänzend auf Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit.
        c DSGVO).
      </p>
      <h3>Speicherdauer</h3>
      <p>
        Ihre Anfrage wird gelöscht, sobald sie abschließend bearbeitet ist und kein Vertrag zustande kommt, spätestens
        jedoch nach 6 Monaten. Kommt ein Vertrag zustande, gelten die gesetzlichen Aufbewahrungsfristen (z. B. nach HGB und
        AO).
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
