import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

import domofona from "../../assets/images/domofona.jpg";
import domofona1 from "../../assets/images/domofona1.jpg";
import domofona2 from "../../assets/images/domofona2.jpg";
import domofona3 from "../../assets/images/domofona3.jpg";
import domofona4 from "../../assets/images/domofona4.jpg";

import monitoring from "../../assets/images/monitoring.jpg";
import monitoring1 from "../../assets/images/monitoring1.jpg";
import monitoring2 from "../../assets/images/monitoring2.jpg";
import monitoring3 from "../../assets/images/monitoring3.jpg";

import sieci from "../../assets/images/sieci.jpg";
import sieci1 from "../../assets/images/sieci1.jpg";
import sieci2 from "../../assets/images/sieci2.jpg";

import alarm from "../../assets/images/alarm.jpg";
import alarm1 from "../../assets/images/alarm1.jpg";
import alarm2 from "../../assets/images/alarm2.jpg";

import rozdzielnia from "../../assets/images/rozdzielnia.jpg";
import rozdzielnia1 from "../../assets/images/rozdzielnia1.jpg";
import rozdzielnia2 from "../../assets/images/rozdzielnia2.jpg";
import rozdzielnia3 from "../../assets/images/rozdzielnia3.jpg";
import rozdzielnia4 from "../../assets/images/rozdzielnia4.jpg";
import rozdzielnia5 from "../../assets/images/rozdzielnia5.jpg";
import rozdzielnia6 from "../../assets/images/rozdzielnia6.jpg";

import smart from "../../assets/images/smart.jpg";
import smart1 from "../../assets/images/smart1.jpg";
import smart2 from "../../assets/images/smart2.jpg";

import domofon from "../../assets/images/domofon.jpg";
import domofon1 from "../../assets/images/domofon1.jpg";

const projects = [
  {
    id: "domofon-alarm-dom",
    img: domofona2,
    gallery: [domofona, domofona1, domofona2, domofona3, domofona4],
    tag: "Dostęp + bezpieczeństwo",
    title: "Wideodomofon i alarm jako element inteligentnego domu",
    cardDesc: "Kontrola wejścia, alarm i dostęp z telefonu.",
    desc: "Realizacja pokazuje, jak system wejścia i zabezpieczenia domu może stać się częścią szerszej inteligentnej instalacji — z kontrolą dostępu, komunikacją, podglądem i możliwością dalszej integracji z automatyką budynkową.",
    details: [
      "Montaż wideodomofonu Dahua z czytnikiem RFID, szyfratorem i bezdotykowym przyciskiem wyjścia.",
      "Dostęp zdalny z telefonu, dwustronna komunikacja oraz sterowanie bramą i furtką.",
      "System alarmowy Satel z czujnikami obecności oraz zabezpieczeniem okien.",
      "Przygotowanie pod integrację z systemem automatyki budynkowej Ampio.",
    ],
    offerLink: "/uslugi",
  },
  {
    id: "cctv-dom",
    img: monitoring,
    gallery: [monitoring, monitoring1],
    tag: "Bezpieczeństwo",
    title: "Monitoring CCTV jako moduł bezpieczeństwa domu",
    cardDesc: "Podgląd posesji i kontrola zdarzeń.",
    desc: "Monitoring CCTV nie musi być osobnym systemem oderwanym od reszty instalacji. Może stanowić jeden z modułów bezpieczeństwa domu — z podglądem na żywo, zapisem zdarzeń i możliwością powiązania z alarmem lub automatyką.",
    details: [
      "Dobór lokalizacji kamer dla kluczowych stref posesji i wejść do budynku.",
      "Prowadzenie okablowania oraz przygotowanie stabilnej infrastruktury pod CCTV.",
      "Konfiguracja rejestratora, nagrywania, podglądu i dostępu zdalnego.",
      "Uruchomienie podglądu na telefonie.",
      "Zabezpieczenie systemu zasilaczem UPS na wypadek zaniku zasilania.",
    ],
    offerLink: "/uslugi",
  },
  {
    id: "cctv-modernizacja-firma",
    img: sieci,
    gallery: [sieci],
    tag: "Infrastruktura",
    title: "Modernizacja CCTV i sieci monitoringu",
    cardDesc: "Stabilna infrastruktura pod systemy bezpieczeństwa.",
    desc: "Ta realizacja pokazuje techniczne podejście do systemów niskoprądowych: porządek w infrastrukturze, stabilną sieć dla monitoringu i przygotowanie systemu pod dalszą rozbudowę.",
    details: [
      "Przegląd istniejących kamer IP i analogowych oraz ocena możliwości rozbudowy.",
      "Naprawa niedziałających kamer lub wymiana na nowe zgodnie z założeniami klienta.",
      "Rozbudowa części analogowej z wykorzystaniem istniejącej infrastruktury.",
      "Rozbudowa części IP wraz z wydzieleniem dedykowanej sieci dla CCTV.",
      "Dostosowanie systemu do aktualnej infrastruktury klienta.",
    ],
    offerLink: "/uslugi",
  },
  {
    id: "ppoz-modernizacja-serwerownia",
    img: alarm,
    gallery: [alarm, alarm1, alarm2],
    tag: "Bezpieczeństwo techniczne",
    title: "System wczesnego wykrywania zagrożeń",
    cardDesc: "Detekcja, powiadamianie i szybka reakcja.",
    desc: "Systemy bezpieczeństwa technicznego powinny działać niezależnie i niezawodnie. W inteligentnym budynku mogą dodatkowo przekazywać informacje do automatyki, powiadomień lub scen awaryjnych.",
    details: [
      "Przegląd istniejącego systemu wczesnego wykrywania pożaru.",
      "Wymiana niesprawnych czujników oraz rozbudowa instalacji.",
      "Wymiana uszkodzonej centrali Satel CA-64 na Satel Integra 128.",
      "Konfiguracja systemu pod wymagania bezpieczeństwa obiektu.",
      "Podłączenie systemu do sieci GSM oraz lokalnej grupy interwencyjnej.",
    ],
    offerLink: "/uslugi",
  },
  {
    id: "rozdzielnia-firma-modernizacja",
    img: rozdzielnia3,
    gallery: [rozdzielnia3],
    tag: "Fundament instalacji",
    title: "Rozdzielnia jako baza pod automatykę",
    cardDesc: "Porządek, opis i gotowość do rozbudowy.",
    desc: "Dobrze wykonana i opisana rozdzielnia to fundament nowoczesnej instalacji. Ułatwia serwis, rozbudowę oraz późniejszą integrację z automatyką budynkową, pomiarami energii i systemami sterowania.",
    details: [
      "Przeniesienie rozdzielni elektrycznej do nowej lokalizacji.",
      "Modernizacja układu rozdzielni oraz uporządkowanie obwodów.",
      "Oznaczenie obwodów dla łatwiejszego serwisu i diagnostyki.",
      "Dostosowanie rozdzielni do aktualnych wymagań eksploatacyjnych.",
      "Przygotowanie instalacji pod przyszłą rozbudowę i integrację.",
    ],
    offerLink: "/uslugi",
  },
];

function Projects() {
  const [active, setActive] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [closing, setClosing] = useState(false);

  const openModal = (project) => {
    setActive(project);
    setImageIndex(0);
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => {
      setActive(null);
      setClosing(false);
    }, 200);
  };

  const nextImage = () => {
    if (!active) return;
    setImageIndex((prev) => (prev === active.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!active) return;
    setImageIndex((prev) => (prev === 0 ? active.gallery.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <section className="projects">
      <div className="projects__header">
        <p className="projects__label">REALIZACJE</p>
        <h2>Realizacje, które budują inteligentną instalację</h2>
        <p>Przykłady prac z zakresu bezpieczeństwa, dostępu, sieci i elektryki — czyli elementów, które mogą tworzyć spójny system Smart Home.</p>
      </div>
      <div className="projects__grid">
        {projects.map((p) => (
          <div className="projects__card" key={p.id} onClick={() => openModal(p)}>
            <img src={p.img} alt={p.title} />
            <div className="projects__overlay">
              <span>{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.cardDesc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div className={`modal ${closing ? "modal--closing" : ""}`} onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>
              ✕
            </button>

            <div className="modal__left">
              <div className="modal__imageFrame">
                {active.gallery.length > 1 && (
                  <button className="modal__arrow modal__arrow--left" onClick={prevImage} aria-label="Poprzednie zdjęcie">
                    <span className="arrow-icon">‹</span>
                  </button>
                )}

                <img src={active.gallery[imageIndex]} alt="realizacja" />

                {active.gallery.length > 1 && (
                  <button className="modal__arrow modal__arrow--right" onClick={nextImage} aria-label="Następne zdjęcie">
                    <span className="arrow-icon">›</span>
                  </button>
                )}
              </div>

              <div className="modal__thumbs">
                {active.gallery.map((img, i) => (
                  <img key={i} src={img} className={i === imageIndex ? "active" : ""} onClick={() => setImageIndex(i)} />
                ))}
              </div>
            </div>

            <div className="modal__right">
              <span>{active.tag}</span>
              <h3>{active.title}</h3>
              <p>{active.desc}</p>

              <ul>
                {active.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <Link to={active.offerLink} className="modal__button">
                Zobacz ofertę
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
