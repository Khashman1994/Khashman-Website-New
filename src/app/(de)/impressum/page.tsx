import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum" },
  robots: { index: false },
};

export default function Impressum() {
  return (
    <LegalPage title="Impressum" subtitle="Angaben gemäß § 5 DDG">
      <h2>Angaben zum Diensteanbieter</h2>
      <p>Khashman Alturki</p>
      <p>Aachen, Deutschland</p>

      <h2>Kontakt</h2>
      <p>Telefon: +49 173 5434710</p>
      <p>
        E-Mail: <a href="mailto:kontakt@khashman-webdesign.de">kontakt@khashman-webdesign.de</a>
      </p>

      <h2>Berufsbezeichnung</h2>
      <p>Freiberuflicher Webentwickler</p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>Khashman Alturki, Aachen</p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        Ich bin als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann
        ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
        jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalPage>
  );
}
