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
    tag: "Domofon / Alarm",
    title: "Wideodomofon + system alarmowy – dom jednorodzinny",
    desc: "Zrealizowany przez nas system kontroli dostępu i zabezpieczenia domu – komunikacja, podgląd i sterowanie wejściem z poziomu telefonu w jednym systemie.",
    details: [
      "Montaż wideodomofonu Dahua z czytnikiem RFID i szyfratorem, z bezdotykowym przyciskiem wyjścia.",
      "System z dostępem zdalnym z telefonu, z możliwością dwustronnej komunikacji oraz sterowania bramą oraz furtką.",
      "Zabezpieczenie domu systemem alarmowym Satel z czujnikami obecności oraz systemem bezprzewodowym zabezpieczającym wszystkie okna w domu z kontrolą otwarcia.",
      "Przygotowanie pod integrację z systemem automatyki budynkowej Ampio.",
    ],
    offerLink: "/oferta/domofony-alarmy",
  },
  {
    id: "cctv-dom",
    img: monitoring,
    gallery: [monitoring, monitoring1],
    tag: "Monitoring",
    title: "Monitoring CCTV – dom jednorodzinny",
    desc: "Zrealizowany przez nas system monitoringu posesji – podgląd na żywo, zapis zdarzeń i kontrola obrazu z poziomu telefonu, z dodatkowym zabezpieczeniem pracy systemu po zaniku zasilania.",
    details: [
      "Dobór lokalizacji kamer tak, aby skutecznie obejmowały kluczowe strefy posesji i wejścia do budynku.",
      "Prowadzenie okablowania oraz przygotowanie instalacji pod stabilną pracę systemu.",
      "Montaż i konfiguracja rejestratora wraz z ustawieniem nagrywania, podglądu oraz dostępu zdalnego.",
      "Uruchomienie podglądu na telefonie z możliwością bieżącej kontroli obrazu z kamer.",
      "Zabezpieczenie systemu zasilaczem UPS, dzięki czemu monitoring działa bezprzerwowo jeszcze długo po zaniku zasilania.",
    ],
    offerLink: "/oferta/cctv",
  },
  {
    id: "cctv-modernizacja-firma",
    img: sieci,
    gallery: [sieci],
    tag: "Monitoring",
    title: "Modernizacja systemu CCTV – firma produkcyjna",
    desc: "Modernizacja istniejącego systemu monitoringu – optymalizacja działania, rozbudowa oraz dostosowanie instalacji do aktualnych potrzeb i infrastruktury klienta.",
    details: [
      "Przegląd istniejącego systemu kamer IP oraz analogowych wraz z oceną stanu technicznego i możliwości dalszej rozbudowy.",
      "Naprawa niedziałających kamer, a w przypadku braku możliwości – wymiana na nowe zgodnie z założeniami klienta.",
      "Rozbudowa części analogowej w celu maksymalnego wykorzystania istniejącej infrastruktury.",
      "Rozbudowa części IP systemu wraz z wydzieleniem dedykowanej sieci dla monitoringu CCTV.",
      "Dostosowanie całego systemu do aktualnej infrastruktury klienta z zachowaniem stabilności i spójności działania.",
    ],
    offerLink: "/oferta/sieci",
  },
  {
    id: "ppoz-modernizacja-serwerownia",
    img: alarm,
    gallery: [alarm, alarm1, alarm2],
    tag: "Alarm / PPOŻ",
    title: "Modernizacja systemu wczesnego wykrywania pożaru – serwerownia",
    desc: "Modernizacja systemu zabezpieczenia serwerowni – zwiększenie niezawodności, szybsza detekcja zagrożeń oraz integracja z systemem powiadamiania.",
    details: [
      "Przegląd istniejącego systemu wczesnego wykrywania pożaru wraz z oceną stanu technicznego instalacji.",
      "Wymiana niesprawnych czujników oraz rozbudowa instalacji w celu poprawy skuteczności detekcji.",
      "Wymiana uszkodzonej centrali alarmowej Satel CA-64 na centralę Satel Integra 128.",
      "Konfiguracja systemu oraz dostosowanie do aktualnych wymagań bezpieczeństwa obiektu.",
      "Podłączenie systemu do sieci GSM oraz lokalnej grupy interwencyjnej w celu szybkiej reakcji na zdarzenia.",
    ],
    offerLink: "/oferta/alarm",
  },
  {
    id: "rozdzielnia-firma-modernizacja",
    img: rozdzielnia3,
    gallery: [rozdzielnia3],
    tag: "Elektryka",
    title: "Przeniesienie i modernizacja rozdzielni – zakład produkcyjny",
    desc: "Zrealizowane przez nas przeniesienie i modernizacja rozdzielni elektrycznej – uporządkowanie instalacji oraz dostosowanie jej do aktualnych potrzeb zakładu.",
    details: [
      "Przeniesienie rozdzielni elektrycznej do nowej lokalizacji z zachowaniem ciągłości i bezpieczeństwa instalacji.",
      "Modernizacja układu rozdzielni oraz uporządkowanie istniejących obwodów.",
      "Oznaczenie obwodów w celu poprawy czytelności oraz ułatwienia przyszłego serwisu.",
      "Dostosowanie rozdzielni do aktualnych wymagań eksploatacyjnych zakładu produkcyjnego.",
    ],
    offerLink: "/oferta/elektryka",
  },
  // {
  //   id: "loxone-ready",
  //   img: smart,
  //   gallery: [smart, smart1, smart2],
  //   tag: "Smart Home",
  //   title: "Instalacja przygotowana pod Loxone",
  //   desc: "Okablowanie i infrastruktura gotowa pod inteligentne sterowanie domem.",
  //   details: [
  //     "Okablowanie pod automatykę",
  //     "Przygotowanie pod sterowanie światłem i roletami",
  //     "Integracja z instalacją elektryczną",
  //     "Możliwość rozbudowy systemu",
  //   ],
  //   offerLink: "/oferta/smart-home",
  // },
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
        <h2>Zobacz, jak wygląda dobrze wykonana instalacja</h2>
        <p>Kilka przykładów prac z zakresu instalacji elektrycznych, niskoprądowych, sieciowych i automatyki budynkowej.</p>
      </div>
      <div className="projects__grid">
        {projects.map((p) => (
          <div className="projects__card" key={p.id} onClick={() => openModal(p)}>
            <img src={p.img} alt={p.title} />
            <div className="projects__overlay">
              <h3>{p.title}</h3>
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
              <Link to="/uslugi">
                <a href={active.offerLink} className="modal__button">
                  Zobacz ofertę
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
