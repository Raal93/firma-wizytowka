// src/components/SmartHomeKrakow/SmartHero.jsx

import { Link } from "react-router-dom";
import "./SmartHero.css";

const heroChips = ["Loxone", "Oświetlenie", "Rolety", "Ogrzewanie", "Energia", "Alarm / CCTV"];

const panelItems = ["Światło", "Klimat", "PV", "CCTV", "Audio", "EV"];

export default function SmartHero() {
  return (
    <section className="smart-hero">
      <div className="smart-container smart-hero__grid">
        <div className="smart-hero__content">
          <span className="smart-eyebrow">Smart Home Kraków</span>

          <h1>Automatyka domu zaplanowana od instalacji po codzienne sceny.</h1>

          <div className="smart-hero__scope" aria-label="Zakres automatyki domu">
            <div className="smart-chip-list smart-hero__tags">
              {heroChips.map((chip) => (
                <span className="smart-chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="smart-hero__visual" aria-hidden="true">
          <div className="smart-hero__orbit smart-hero__orbit--one" />
          <div className="smart-hero__orbit smart-hero__orbit--two" />

          <div className="smart-home-panel">
            <div className="smart-home-panel__top">
              <span>LOGIKA DOMU</span>
              <strong>AKTYWNY</strong>
            </div>

            <div className="smart-home-panel__main">
              <span>SMART</span>
              <strong>HOME</strong>
            </div>

            <div className="smart-home-panel__grid">
              {panelItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="smart-hero__actions">
          <Link to="/kontakt" className="smart-btn smart-btn--primary">
            Zapytaj o projekt
          </Link>

          <a href="#scenariusze-smart-home" className="smart-btn smart-btn--ghost smart-btn--with-icon">
            <span>Smart Home w praktyce</span>

            <span className="smart-btn__arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path className="smart-btn__arrow-line" d="M12 4V17" />
                <path className="smart-btn__arrow-head" d="M7 12L12 17L17 12" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
