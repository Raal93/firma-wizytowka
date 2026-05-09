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

          <h2>Smart Home Loxone jako centrum instalacji</h2>

          <p>
            Monitoring, alarm, sieć, domofon i instalacja elektryczna nie muszą być osobnymi systemami. Mogą tworzyć jeden spójny ekosystem domu, w
            którym automatyka odpowiada za komfort, bezpieczeństwo i wygodę codziennego użytkowania.
          </p>
        </div>

        <div className="services-system-layout">
          <article className="service-core-card">
            <img src="/images/services/loxone.jpg" alt="Smart Home Loxone" />

            <div className="service-core-overlay">
              <span className="service-core-badge">Nasza specjalizacja</span>

              <h3>Smart Home Loxone</h3>

              <p>
                Centralny system inteligentnego domu, który może integrować oświetlenie, ogrzewanie, rolety, bezpieczeństwo, audio, zarządzanie
                energią i codzienne scenariusze domowników.
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

              <h3>Instalacje, które mogą pracować razem</h3>

              <p>Każdy system może działać samodzielnie. Największą wartość daje jednak ich przemyślana integracja z automatyką budynkową.</p>
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
