// src/components/SmartHomeKrakow/SmartIntro.jsx

import "./SmartIntro.css";

const flowItems = [
  {
    title: "Informacja",
    text: "Czujniki, przyciski, termostaty i urządzenia techniczne przekazują systemowi dane o stanie domu.",
  },
  {
    title: "Logika",
    text: "Automatyka sprawdza reguły, tryb domu, obecność, temperaturę, harmonogram i warunki pogodowe.",
  },
  {
    title: "Reakcja",
    text: "Światło, rolety, ogrzewanie, alarm i powiadomienia wykonują zaplanowane działania.",
  },
];

export default function SmartIntro() {
  return (
    <section className="smart-section smart-intro-section" id="smart-home-dzialanie">
      <div className="smart-container smart-intro">
        <div className="smart-section__header smart-intro__header">
          <span className="smart-eyebrow">Jak działa smart home?</span>

          <h2>Dom zbiera informacje, podejmuje decyzje i uruchamia właściwe reakcje.</h2>

          <div className="smart-intro__divider" aria-hidden="true">
            <span>Czujniki</span>
            <span>Automatyka</span>
            <span>Reakcja domu</span>
          </div>
        </div>

        <div className="smart-flow" aria-label="Schemat działania smart home">
          {flowItems.map((item, index) => (
            <article className="smart-card smart-flow__card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
