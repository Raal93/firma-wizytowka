import "./PlanningSection.css";

const planningPoints = [
  "miejsce w rozdzielni na automatykę, zasilacze, zabezpieczenia i przyszłe moduły",
  "przewody do rolet, bram, furtki, czujników, przycisków scen, audio i multimediów",
  "punkty LAN, przewody pod kamery IP, miejsca pod access pointy Wi-Fi, wideodomofon i szafka teletechniczna",
];

export default function PlanningSection() {
  return (
    <section id="planning-section" className="smart-section">
      <div className="smart-container smart-planning">
        <div className="smart-planning__content">
          <span className="smart-eyebrow">Infrastruktura</span>
          <h2 className="smart-title">Dobrze zaplanowana instalacja daje więcej możliwości później</h2>
          <p className="smart-lead">
            System smart home można wdrażać etapami. Kluczowe jest to, żeby już na etapie instalacji przygotować dom pod późniejszą rozbudowę —
            szczególnie w tych trzech obszarach:
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
          <span>Audio</span>
          <span>Wi-Fi</span>
          <span>Sieć LAN</span>
          <span>Szafa tech.</span>
        </div>
      </div>
    </section>
  );
}
