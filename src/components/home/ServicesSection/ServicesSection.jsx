import { Link } from "react-router-dom";
import "./ServicesSection.css";

const systemModules = [
  // Bezpieczeństwo
  {
    title: "Bezpieczeństwo",
    category: "security",
    desc: "Monitoring",
    img: "/images/services/cctv.jpg",
  },
  {
    title: "Bezpieczeństwo",
    category: "security",
    desc: "System alarmowy",
    img: "/images/services/alarm.jpg",
  },
  {
    title: "Bezpieczeństwo",
    category: "security",
    desc: "Wideodomofon",
    img: "/images/services/domofony.jpg",
  },
  {
    title: "Bezpieczeństwo",
    category: "security",
    desc: "Kontrola dostępu",
    img: "/images/services/kontrola-dostepu.jpg",
  },
  {
    title: "Bezpieczeństwo",
    category: "security",
    desc: "Czujniki dymu",
    img: "/images/services/czujniki-dymu.jpg",
  },

  // Energia
  {
    title: "Energia",
    category: "energy",
    desc: "Instalacja fotowoltaiczna",
    img: "/images/services/energia.jpg",
  },
  {
    title: "Energia",
    category: "energy",
    desc: "Urządzenia grzewcze",
    img: "/images/services/ogrzewanie.jpg",
  },
  {
    title: "Energia",
    category: "energy",
    desc: "Rekuperacja / wentylacja",
    img: "/images/services/rekuperacja.jpg",
  },

  // Oświetlenie
  {
    title: "Oświetlenie",
    category: "lighting",
    desc: "Zaawansowane oświetlenie",
    img: "/images/services/oswietlenie.jpg",
  },
  {
    title: "Oświetlenie",
    category: "lighting",
    desc: "Rolety / żaluzje",
    img: "/images/services/rolety.jpg",
  },

  // Audiowizualny
  {
    title: "Audiowizualny",
    category: "av",
    desc: "Multiroom Audio",
    img: "/images/services/audio.jpg",
  },
  {
    title: "Audiowizualny",
    category: "av",
    desc: "Telewizor / kino domowe",
    img: "/images/services/telewizor.jpg",
  },

  // Infrastruktura
  {
    title: "Infrastruktura",
    category: "infra",
    desc: "Wi-Fi",
    img: "/images/services/wifi.jpg",
  },
  {
    title: "Infrastruktura",
    category: "infra",
    desc: "Sieć LAN",
    img: "/images/services/lan.jpg",
  },
  {
    title: "Infrastruktura",
    category: "infra",
    desc: "Instalacja elektryczna",
    img: "/images/services/elektryka.jpg",
  },
];

const sideModules = systemModules.slice(0, 4);
const wideModules = systemModules.slice(4);

function ServiceCard({ module }) {
  const categoryClass = `service-category-pill service-category-pill--${module.category || "other"}`;

  return (
    <article className="service-card">
      <img src={module.img} alt={module.desc} />

      <div className="service-overlay">
        <span className={categoryClass}>{module.title}</span>

        <h3 className="service-card-heading">{module.desc}</h3>
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

          <h2>Co możemy zautomatyzować?</h2>

          <p>
            Wykonujemy pełen wachlarz instalacji potrzebnych w nowoczesnym domu. Zobacz przykładowe systemy, które możemy zintegrować. Oczywiście nie
            jest to pełna lista - jeśli masz pomysł na coś innego, skontaktuj się z nami aby sprawdzić możliwości implementacji.
          </p>
        </div>

        <div className="services-system-layout">
          <article className="service-core-card">
            <img src="/images/services/loxone.jpg" alt="Smart Home Loxone" />

            <div className="service-core-overlay">
              <span className="service-core-badge">Nasza specjalizacja</span>

              <h3>Smart Home Loxone</h3>

              <p>
                Automatyka Loxone pozwala zsynchronizować wiele elementów domu w jeden spójny system tak, abyś mógł wygodnie kontrolować całość w
                jednej aplikacji.
              </p>

              <div className="service-core-tags">
                <span>Bezpieczeństwo</span>
                <span>Energia</span>
                <span>Oświetlenie</span>
                <span>Audiowizualny</span>
                <span>Infrastruktura</span>
              </div>

              <Link to="/smart-home-krakow" className="service-core-link">
                Zobacz Smart Home Kraków →
              </Link>
            </div>
          </article>

          <div className="services-modules-column">
            <div className="services-modules-intro">
              <span>Elementy systemu</span>

              <h3>Instalacje, które łączymy w jeden system</h3>

              <p>Przykładowe obszary, które możemy wykonać lub przygotować pod późniejszą rozbudowę instalacji.</p>
            </div>

            <div className="services-grid services-grid--side services-grid--desktop">
              {sideModules.map((module) => (
                <ServiceCard module={module} key={`${module.category}-${module.desc}`} />
              ))}
            </div>

            <div className="services-grid services-grid--tablet">
              {systemModules.map((module) => (
                <ServiceCard module={module} key={`${module.category}-${module.desc}`} />
              ))}
            </div>
          </div>

          {wideModules.length > 0 && (
            <div className="services-wide-modules services-wide-modules--desktop">
              <div className="services-grid services-grid--wide">
                {wideModules.map((module) => (
                  <ServiceCard module={module} key={`${module.category}-${module.desc}`} />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="services-cta">
          <Link to="/smart-home-krakow#wspolpraca-systemow" className="services-cta-link">
            Zobacz, jak te systemy mogą pracować razem →
          </Link>
        </div>
      </div>
    </section>
  );
}
