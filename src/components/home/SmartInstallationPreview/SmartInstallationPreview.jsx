import { Link } from "react-router-dom";
import "./SmartInstallationPreview.css";

const smartBenefits = [
  {
    title: "Niższe zużycie energii",
    text: "Ogrzewanie, klimatyzacja, rekuperacja i rolety mogą pracować razem, aby ograniczać straty ciepła i lepiej wykorzystywać energię w domu.",
  },
  {
    title: "Większy komfort na co dzień",
    text: "Światło, rolety, temperatura, audio i sceny domowe można dopasować do rytmu dnia, obecności domowników oraz konkretnych sytuacji.",
  },
  {
    title: "Bezpieczeństwo",
    text: "Alarm, monitoring, wideodomofon, czujniki i powiadomienia tworzą spójny system, który pomaga szybciej reagować na zdarzenia.",
  },
  {
    title: "Jedno miejsce obsługi",
    text: "Dom może być sterowany z panelu, telefonu, przycisków ściennych lub za pomocą automatycznych scen — zamiast wielu osobnych aplikacji i pilotów.",
  },
  {
    title: "Kontrola nad energią",
    text: "Integracja PV, magazynu energii, ładowarki EV i taryf dynamicznych pozwala świadomie zarządzać produkcją oraz zużyciem energii.",
  },
  {
    title: "Gotowość na rozbudowę",
    text: "Dobrze zaprojektowana instalacja pozwala łatwiej dodawać kolejne funkcje bez chaotycznych przeróbek i przypadkowych rozwiązań.",
  },
];

export default function SmartInstallationPreview() {
  return (
    <section className="smart-preview">
      <div className="smart-preview__background" />

      <div className="smart-preview__glow smart-preview__glow--one" />
      <div className="smart-preview__glow smart-preview__glow--two" />

      <div className="smart-preview__inner">
        <div className="smart-preview__top">
          <div className="smart-preview__content">
            <span className="smart-preview__label">KORZYŚCI SMART HOME</span>

            <h2>Co zmienia dobrze zaprojektowany Smart Home?</h2>

            <div className="smart-preview__fade-divider smart-preview__fade-divider--wide" aria-hidden="true" />
          </div>

          <div className="smart-preview__visual" aria-hidden="true">
            <div className="smart-preview__core">
              <span>SMART</span>
              <strong>HOME</strong>
            </div>

            <div className="smart-preview__orbit smart-preview__orbit--one" />
            <div className="smart-preview__orbit smart-preview__orbit--two" />
            <div className="smart-preview__orbit smart-preview__orbit--three" />

            <span className="smart-preview__node smart-preview__node--comfort">Komfort</span>
            <span className="smart-preview__node smart-preview__node--energy">Energia</span>
            <span className="smart-preview__node smart-preview__node--security">Bezpieczeństwo</span>
            <span className="smart-preview__node smart-preview__node--control">Sterowanie</span>
          </div>
        </div>

        <div className="smart-preview__grid">
          {smartBenefits.map((benefit, index) => (
            <article className="smart-preview__card" key={benefit.title}>
              <span className="smart-preview__number">{String(index + 1).padStart(2, "0")}</span>

              <h3>{benefit.title}</h3>

              <p>{benefit.text}</p>
            </article>
          ))}
        </div>

        <div className="smart-preview__bottom">
          <p>
            System może reagować na temperaturę, porę dnia, obecność domowników, nasłonecznienie, stan alarmu, zużycie energii lub tryb pracy domu.
          </p>

          <Link to="/smart-home-krakow" className="smart-preview__link">
            Zobacz więcej o Smart Home Kraków →
          </Link>
        </div>
      </div>
    </section>
  );
}
