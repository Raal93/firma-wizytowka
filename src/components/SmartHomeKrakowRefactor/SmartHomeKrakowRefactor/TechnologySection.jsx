import "./TechnologySection.css";

const techBlocks = [
  {
    title: "Loxone jako centrum automatyki",
    text: "System może spinać światło, rolety, ogrzewanie, sceny, energię i wybrane integracje w jedną logikę działania domu.",
  },
  {
    title: "Dedykowane systemy tam, gdzie trzeba",
    text: "Alarm, monitoring, sieć czy wideodomofon powinny być dobrane technicznie do swojej funkcji, a smart home ma ułatwiać ich obsługę.",
  },
  {
    title: "Przygotowanie pod rozbudowę",
    text: "Nie wszystko musi być wykonane od razu. Ważne, żeby instalacja miała rezerwy i była zaprojektowana z myślą o kolejnych etapach.",
  },
];

export default function TechnologySection() {
  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container smart-technology">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Technologia bez chaosu</span>
          <h2>Stabilny system zamiast przypadkowych gadżetów.</h2>
          <p>
            Technologia ma być narzędziem, nie głównym tematem rozmowy. Dlatego ważniejsze od liczby urządzeń są: projekt, okablowanie, dobór
            systemów, logika sterowania i późniejszy serwis.
          </p>
        </div>

        <div className="smart-technology__grid">
          {techBlocks.map((block) => (
            <article className="smart-card smart-technology-card" key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
