import "./ProcessSection.css";

const processSteps = [
  {
    title: "Rozmowa o potrzebach",
    text: "Ustalamy, co ma być wygodne na co dzień, co jest konieczne, a co można przygotować jako etap późniejszy.",
  },
  {
    title: "Analiza budynku lub projektu",
    text: "Sprawdzamy etap inwestycji, instalację elektryczną, sieć, rozdzielnię, systemy bezpieczeństwa i możliwości integracji.",
  },
  {
    title: "Koncepcja automatyki",
    text: "Dobieramy funkcje: światło, rolety, ogrzewanie, alarm, monitoring, energia, dostęp, multimedia i sceny użytkowe.",
  },
  {
    title: "Montaż i konfiguracja",
    text: "Wykonujemy instalację, uruchamiamy system, konfigurujemy sceny i testujemy działanie całości.",
  },
  {
    title: "Dopasowanie po użytkowaniu",
    text: "Po realnym użyciu domu można skorygować sceny, logikę przycisków, harmonogramy i powiadomienia.",
  },
];

export default function ProcessSection() {
  return (
    <section className="smart-section">
      <div className="smart-container smart-process">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Jak wygląda współpraca?</span>
          <h2>Od koncepcji do systemu, którego da się normalnie używać.</h2>
          <p>
            Proces ma prowadzić klienta krok po kroku. Bez presji na maksymalny zakres od razu i bez technicznego chaosu po stronie użytkownika.
          </p>
        </div>

        <ol className="smart-process__list">
          {processSteps.map((step, index) => (
            <li className="smart-card smart-process__item" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
