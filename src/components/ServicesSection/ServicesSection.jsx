import "./ServicesSection.css";

const services = [
  {
    title: "CCTV / monitoring",
    desc: "Podgląd na żywo, nagrywanie zdarzeń i kontrola bezpieczeństwa posesji.",
    img: "/images/services/cctv.jpg",
  },
  {
    title: "Alarmy",
    desc: "Systemy SSWiN z czujnikami, sygnalizacją i powiadomieniami.",
    img: "/images/services/alarm.jpg",
  },
  {
    title: "Sieci LAN",
    desc: "Okablowanie strukturalne, punkty sieciowe i stabilna infrastruktura.",
    img: "/images/services/lan.jpg",
  },
  {
    title: "WiFi",
    desc: "Punkty dostępowe, dobre pokrycie sygnałem i brak martwych stref.",
    img: "/images/services/wifi.jpg",
  },
  {
    title: "Kontrola dostępu",
    desc: "Czytniki, zamki, karty, breloki i zarządzanie dostępem.",
    img: "/images/services/kontrola-dostepu.jpg",
  },
  {
    title: "Domofony",
    desc: "Domofony i wideodomofony do domów, biur i małych obiektów.",
    img: "/images/services/domofony.jpg",
  },
  {
    title: "Smart Home Loxone",
    desc: "Sterowanie oświetleniem, roletami, ogrzewaniem i scenami domu.",
    img: "/images/services/loxone.jpg",
  },
  {
    title: "Instalacje elektryczne",
    desc: "Kompletne instalacje, rozdzielnie, modernizacje i przygotowanie pod rozbudowę.",
    img: "/images/services/elektryka.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="uslugi">
      <div className="services-container">
        <div className="services-header">
          <span className="services-eyebrow">Zakres usług</span>
          <h2>Instalacje techniczne dla domu i małych obiektów</h2>
          <p>Projektuję i wykonuję systemy bezpieczeństwa, sieci oraz automatykę budynkową — od okablowania po konfigurację i uruchomienie.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <img src={service.img} alt={service.title} />

              <div className="service-overlay">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
