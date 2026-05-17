import "./PlanningSection.css";

const planningPoints = [
  "łatwiej dobrać przewody, obwody, rozdzielnię i miejsce na sterowniki",
  "mniej późniejszych przeróbek, bez dokładania przypadkowych modułów",
  "czytelna logika przycisków, scen, czujników i trybów domu",
  "instalacja może być przygotowana pod rozbudowę, nawet jeśli startujesz od mniejszego zakresu",
];

export default function PlanningSection() {
  return (
    <section className="smart-section">
      <div className="smart-container smart-planning">
        <div className="smart-planning__content">
          <span className="smart-eyebrow">Najważniejsza decyzja</span>
          <h2 className="smart-title">Najlepszy smart home zaczyna się przed wykonaniem instalacji.</h2>
          <p className="smart-lead">
            Automatyka działa najlepiej wtedy, gdy jest zaplanowana razem z elektryką, siecią, bezpieczeństwem i sposobem użytkowania domu. Wtedy
            system jest spójny technicznie, a nie składany z przypadkowych dodatków.
          </p>

          <ul className="smart-planning__list">
            {planningPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="smart-card smart-planning__visual" aria-hidden="true">
          <div className="smart-planning__center">Projekt</div>
          <span>Okablowanie</span>
          <span>Rozdzielnia</span>
          <span>Sieć LAN</span>
          <span>Rolety</span>
          <span>Ogrzewanie</span>
          <span>Alarm</span>
        </div>
      </div>
    </section>
  );
}
