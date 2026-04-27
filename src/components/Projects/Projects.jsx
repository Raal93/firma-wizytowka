// import "./Projects.css";

// import realizacje1 from "../../assets/images/realizacje1.jpg";
// import realizacje2 from "../../assets/images/realizacje2.jpg";
// import realizacje3 from "../../assets/images/realizacje3.jpg";
// import realizacje4 from "../../assets/images/realizacje4.jpg";
// import realizacje5 from "../../assets/images/realizacje5.jpg";
// import realizacje6 from "../../assets/images/realizacje6.jpg";

// const projects = [
//   {
//     img: realizacje1,
//     tag: "Monitoring",
//     title: "CCTV – dom jednorodzinny",
//     desc: "Kamery z podglądem na telefon i nagrywaniem zdarzeń.",
//   },
//   {
//     img: realizacje2,
//     tag: "Sieć",
//     title: "LAN i WiFi",
//     desc: "Stabilna infrastruktura sieciowa bez martwych stref.",
//   },
//   {
//     img: realizacje3,
//     tag: "Alarm",
//     title: "System alarmowy",
//     desc: "Czujniki, centrala i powiadomienia na telefon.",
//   },
//   {
//     img: realizacje4,
//     tag: "Elektryka",
//     title: "Rozdzielnia elektryczna",
//     desc: "Czytelna instalacja przygotowana pod dalszą rozbudowę.",
//   },
//   {
//     img: realizacje5,
//     tag: "Smart Home",
//     title: "Instalacja pod Loxone",
//     desc: "Okablowanie i logika gotowe pod automatykę budynku.",
//   },
//   {
//     img: realizacje6,
//     tag: "Domofon",
//     title: "Wideodomofon i brama",
//     desc: "Kontrola wejścia z domu oraz z telefonu.",
//   },
// ];

// function Projects() {
//   return (
//     <section className="projects">
//       <div className="projects__header">
//         <p className="projects__label">REALIZACJE</p>
//         <h2>Zobacz, jak wygląda dobrze wykonana instalacja</h2>
//         <p>
//           Kilka przykładów prac z zakresu instalacji elektrycznych,
//           niskoprądowych, sieciowych i automatyki budynkowej.
//         </p>
//       </div>

//       <div className="projects__grid">
//         {projects.map((project) => (
//           <article className="projects__card" key={project.title}>
//             <img src={project.img} alt={project.title} />

//             <div className="projects__overlay">
//               <span>{project.tag}</span>
//               <h3>{project.title}</h3>
//               <p>{project.desc}</p>
//             </div>
//           </article>
//         ))}
//       </div>

//       <div className="projects__cta">
//         <a href="#kontakt" className="projects__button">
//           Poproś o podobną realizację
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Projects;


import { useState } from "react";
import "./Projects.css";
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
    id: "cctv-dom",
    img: monitoring,
    gallery: [monitoring, monitoring1, monitoring2, monitoring3],
    tag: "Monitoring",
    title: "Monitoring CCTV – dom jednorodzinny",
    desc: "Podgląd na żywo i nagrywanie zdarzeń – pełna kontrola nad posesją z telefonu.",
    details: [
      "Dobór lokalizacji kamer",
      "Prowadzenie okablowania",
      "Montaż i konfiguracja rejestratora",
      "Podgląd na telefonie",
    ],
    offerLink: "/oferta/cctv",
  },
  {
    id: "lan-wifi",
    img: sieci,
    gallery: [sieci, sieci1, sieci2],
    tag: "Sieć",
    title: "Sieć LAN i WiFi – dom jednorodzinny",
    desc: "Stabilny i szybki internet w każdym pomieszczeniu – bez zrywających połączeń.",
    details: [
      "Rozprowadzenie okablowania LAN",
      "Montaż punktów dostępowych WiFi",
      "Konfiguracja sieci",
      "Testy zasięgu i wydajności",
    ],
    offerLink: "/oferta/sieci",
  },
  {
    id: "alarm-system",
    img: alarm,
    gallery: [alarm, alarm1, alarm2],
    tag: "Alarm",
    title: "System alarmowy – zabezpieczenie domu",
    desc: "Czujniki ruchu i powiadomienia na telefon – szybka reakcja na zagrożenie.",
    details: [
      "Instalacja czujników ruchu i otwarcia",
      "Konfiguracja centrali alarmowej",
      "Powiadomienia mobilne",
      "Integracja z innymi systemami",
    ],
    offerLink: "/oferta/alarm",
  },
  {
    id: "rozdzielnia",
    img: rozdzielnia,
    gallery: [rozdzielnia, rozdzielnia1, rozdzielnia2, rozdzielnia3, rozdzielnia4, rozdzielnia5, rozdzielnia6],
    tag: "Elektryka",
    title: "Rozdzielnia elektryczna – uporządkowana instalacja",
    desc: "Czytelna i bezpieczna instalacja przygotowana pod dalszą rozbudowę.",
    details: [
      "Montaż i konfiguracja rozdzielni",
      "Oznaczenie obwodów",
      "Zabezpieczenia instalacji",
      "Przygotowanie pod smart home",
    ],
    offerLink: "/oferta/elektryka",
  },
  {
    id: "loxone-ready",
    img: smart,
    gallery: [smart, smart1, smart2],
    tag: "Smart Home",
    title: "Instalacja przygotowana pod Loxone",
    desc: "Okablowanie i infrastruktura gotowa pod inteligentne sterowanie domem.",
    details: [
      "Okablowanie pod automatykę",
      "Przygotowanie pod sterowanie światłem i roletami",
      "Integracja z instalacją elektryczną",
      "Możliwość rozbudowy systemu",
    ],
    offerLink: "/oferta/smart-home",
  },
  {
    id: "domofon",
    img: domofon,
    gallery: [domofon, domofon1],
    tag: "Domofon",
    title: "Wideodomofon i sterowanie bramą",
    desc: "Kontrola wejścia do domu z poziomu telefonu i panelu wewnętrznego.",
    details: [
      "Montaż wideodomofonu",
      "Integracja z bramą i furtką",
      "Podgląd obrazu na telefonie",
      "Zdalne otwieranie",
    ],
    offerLink: "/oferta/domofony",
  },
];

function Projects() {
  const [active, setActive] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (project) => {
    setActive(project);
    setImageIndex(0);
  };

  const closeModal = () => {
    setActive(null);
  };

  return (
    <section className="projects">
      <div className="projects__header">
         <p className="projects__label">REALIZACJE</p>
         <h2>Zobacz, jak wygląda dobrze wykonana instalacja</h2>
         <p>
           Kilka przykładów prac z zakresu instalacji elektrycznych,
           niskoprądowych, sieciowych i automatyki budynkowej.
         </p>
       </div>
      <div className="projects__grid">
        {projects.map((p) => (
          <div
            className="projects__card"
            key={p.id}
            onClick={() => openModal(p)}
          >
            <img src={p.img} alt={p.title} />
            <div className="projects__overlay">
              <h3>{p.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {active && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" onClick={closeModal}>
              ✕
            </button>

            <div className="modal__left">
              <div className="modal__imageFrame">
              <img
                src={active.gallery[imageIndex]}
                alt="realizacja"
              />
              </div>

              <div className="modal__thumbs">
                {active.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className={i === imageIndex ? "active" : ""}
                    onClick={() => setImageIndex(i)}
                  />
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

              <a href={active.offerLink} className="modal__button">
                Zobacz ofertę
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;