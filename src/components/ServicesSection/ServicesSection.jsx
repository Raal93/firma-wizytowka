import { Link } from "react-router-dom";
import "./ServicesSection.css";

const systemModules = [
  {
    title: "Bezpieczeństwo",
    label: "Alarm + CCTV",
    desc: "Alarm, monitoring i czujniki w jednym systemie.",
    img: "/images/services/cctv.jpg",
  },
  {
    title: "Sieć LAN / Wi-Fi",
    label: "Infrastruktura",
    desc: "Stabilna sieć dla automatyki i kamer.",
    img: "/images/services/wifi.jpg",
  },
  {
    title: "Dostęp i wideodomofony",
    label: "Wejście",
    desc: "Furtka, brama i wejście z aplikacji.",
    img: "/images/services/domofony.jpg",
  },
  {
    title: "Oświetlenie",
    label: "Komfort",
    desc: "Sceny świetlne i automatyka dnia.",
    img: "/images/services/oswietlenie.jpg",
  },
  {
    title: "Ogrzewanie i klimat",
    label: "Temperatura",
    desc: "Sterowanie komfortem cieplnym domu.",
    img: "/images/services/ogrzewanie.jpg",
  },
  {
    title: "Rolety / żaluzje",
    label: "Automatyka",
    desc: "Światło, prywatność i ochrona przed słońcem.",
    img: "/images/services/rolety.jpg",
  },
  {
    title: "Multiroom Audio",
    label: "Audio",
    desc: "Muzyka w strefach całego domu.",
    img: "/images/services/audio.jpg",
  },
  {
    title: "Zarządzanie energią",
    label: "Energia",
    desc: "Kontrola zużycia, PV i magazynu.",
    img: "/images/services/energia.jpg",
  },
  {
    title: "Rekuperacja / wentylacja",
    label: "Powietrze",
    desc: "Świeże powietrze i komfort w domu.",
    img: "/images/services/rekuperacja.jpg",
  },
  {
    title: "Instalacja elektryczna",
    label: "Fundament",
    desc: "Baza pod automatykę i rozbudowę.",
    img: "/images/services/elektryka.jpg",
  },
];

const sideModules = systemModules.slice(0, 4);
const wideModules = systemModules.slice(4);

function ServiceCard({ module }) {
  return (
    <article className="service-card">
      <img src={module.img} alt={module.title} />

      <div className="service-overlay">
        <span>{module.label}</span>
        <h3>{module.title}</h3>
        <p>{module.desc}</p>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section className="services-section" id="uslugi">
      <div className="services-container">
        <div className="services-header">
          <span className="services-eyebrow">Zakres integracji</span>

          <h2>Zakres instalacji, które możemy przygotować i zintegrować</h2>

          <p>
            Wykonujemy instalacje potrzebne w nowoczesnym domu: automatykę Loxone, elektrykę, sieć LAN/Wi-Fi, alarm, CCTV, wideodomofon, sterowanie
            roletami, ogrzewaniem, audio i energią. Każdy element może działać samodzielnie, a tam gdzie ma to sens — zostać połączony w jeden wygodny
            system.
          </p>
        </div>

        <div className="services-system-layout">
          <article className="service-core-card">
            <img src="/images/services/loxone.jpg" alt="Smart Home Loxone" />

            <div className="service-core-overlay">
              <span className="service-core-badge">Nasza specjalizacja</span>

              <h3>Smart Home Loxone</h3>

              <p>
                Automatyka Loxone pozwala zaplanować logikę działania domu: sceny świetlne, temperaturę, rolety, tryby obecności, powiadomienia i
                wygodne sterowanie z panelu lub aplikacji.
              </p>

              <div className="service-core-tags">
                <span>Oświetlenie</span>
                <span>Rolety</span>
                <span>Ogrzewanie</span>
                <span>Alarm</span>
                <span>CCTV</span>
                <span>Energia</span>
              </div>

              <Link to="/smart-home-krakow" className="service-core-link">
                Zobacz Smart Home Kraków →
              </Link>
            </div>
          </article>

          <div className="services-modules-column">
            <div className="services-modules-intro">
              <span>Elementy systemu</span>

              <h3>Systemy, które łączymy w jedną instalację</h3>

              <p>Przykładowe obszary, które możemy wykonać lub przygotować pod późniejszą rozbudowę domu.</p>
            </div>

            {/* Desktop: tylko kafelki obok głównej karty */}
            <div className="services-grid services-grid--side services-grid--desktop">
              {sideModules.map((module) => (
                <ServiceCard module={module} key={module.title} />
              ))}
            </div>

            {/* Tablet / średnie ekrany: wszystkie kafelki w jednej siatce */}
            <div className="services-grid services-grid--tablet">
              {systemModules.map((module) => (
                <ServiceCard module={module} key={module.title} />
              ))}
            </div>
          </div>

          {/* Desktop: reszta kafelków pod spodem na pełnej szerokości */}
          {wideModules.length > 0 && (
            <div className="services-wide-modules services-wide-modules--desktop">
              <div className="services-grid services-grid--wide">
                {wideModules.map((module) => (
                  <ServiceCard module={module} key={module.title} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
