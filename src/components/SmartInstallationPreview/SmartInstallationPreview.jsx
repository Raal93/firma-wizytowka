import { Link } from "react-router-dom";
import "./SmartInstallationPreview.css";

const smartFeatures = [
  {
    title: "Oszczędność energii",
    text: "Sterowanie ogrzewaniem, klimatyzacją, rekuperacją i roletami pomaga lepiej zarządzać temperaturą oraz ograniczać straty energii.",
  },
  {
    title: "Zarządzanie energią",
    text: "Integracja PV, magazynu energii, ładowarki samochodu elektrycznego i taryf dynamicznych pozwala świadomie kontrolować zużycie energii.",
  },
  {
    title: "Oświetlenie",
    text: "Sceny świetlne, tryb nocny i automatyzacje dopasowane do obecności domowników zwiększają wygodę codziennego użytkowania.",
  },
  {
    title: "Bezpieczeństwo",
    text: "Alarm, monitoring, wideodomofon i czujniki mogą działać niezależnie, ale być wygodnie zintegrowane w jednej aplikacji.",
  },
  {
    title: "Multiroom Audio",
    text: "Nagłośnienie podzielone na strefy pozwala sterować muzyką z panelu, telefonu lub ulubionych serwisów streamingowych.",
  },
  {
    title: "Elastyczność",
    text: "Dobrze zaprojektowany system może być rozbudowywany i dopasowywany do zmieniających się potrzeb domowników.",
  },
];

export default function SmartInstallationPreview() {
  return (
    <section className="smart-preview">
      <div className="smart-preview__background" />

      <div className="smart-preview__inner">
        <div className="smart-preview__top">
          <div className="smart-preview__content">
            <span className="smart-preview__label">INTELIGENTNA INSTALACJA</span>

            <h2>Smart Home to system naczyń połączonych</h2>

            <p>
              Inteligentna instalacja nie jest zbiorem osobnych urządzeń. To przemyślany ekosystem, w którym energia, komfort, bezpieczeństwo,
              oświetlenie, audio i codzienne scenariusze domu działają razem.
            </p>
          </div>

          <div className="smart-preview__visual" aria-hidden="true">
            <div className="smart-preview__core">
              <span>SMART</span>
              <strong>HOME</strong>
            </div>

            <div className="smart-preview__orbit smart-preview__orbit--one" />
            <div className="smart-preview__orbit smart-preview__orbit--two" />

            <span className="smart-preview__node smart-preview__node--energy">Energia</span>
            <span className="smart-preview__node smart-preview__node--light">Światło</span>
            <span className="smart-preview__node smart-preview__node--security">Alarm</span>
            <span className="smart-preview__node smart-preview__node--audio">Audio</span>
          </div>
        </div>

        <div className="smart-preview__grid">
          {smartFeatures.map((feature, index) => (
            <article className="smart-preview__card" key={feature.title}>
              <span className="smart-preview__number">{String(index + 1).padStart(2, "0")}</span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </article>
          ))}
        </div>

        <div className="smart-preview__bottom">
          <p>System może reagować na temperaturę, porę dnia, obecność domowników, nasłonecznienie, stan alarmu czy aktualne zużycie energii.</p>

          <Link to="/smart-home-krakow" className="smart-preview__link">
            Zobacz Więcej o Smart Home Kraków →
          </Link>
        </div>
      </div>
    </section>
  );
}
