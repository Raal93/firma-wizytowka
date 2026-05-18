import { useMemo, useState } from "react";
import "./SmartSystemMap.css";

const systems = [
  {
    id: "security",
    title: "Bezpieczeństwo",
    short: "Alarm, monitoring, wideodomofon, brama, furtka i czujniki.",
    desc: "System bezpieczeństwa może działać niezależnie, a jednocześnie przekazywać informacje do automatyki. Po integracji zdarzenia mogą uruchamiać światło, powiadomienia, podgląd z kamer lub zmianę trybu domu.",
  },
  {
    id: "energy",
    title: "Energia i klimat",
    short: "Ogrzewanie, rekuperacja, klimatyzacja, PV i odbiorniki.",
    desc: "Ogrzewanie, wentylacja, chłodzenie i energia mogą reagować na obecność, temperaturę, nasłonecznienie, produkcję z fotowoltaiki oraz harmonogram domowników.",
  },
  {
    id: "lighting",
    title: "Światło i rolety",
    short: "Sceny świetlne, żaluzje, rolety i światło dzienne.",
    desc: "Oświetlenie i osłony okienne mogą pracować według pory dnia, ruchu, scen, nasłonecznienia i trybu domu. To ogranicza liczbę ręcznych czynności i porządkuje obsługę pomieszczeń.",
  },
  {
    id: "av",
    title: "Audio i multimedia",
    short: "Multiroom audio, TV, kino domowe i sceny pomieszczeń.",
    desc: "Audio i multimedia mogą być częścią scen. Jedno kliknięcie może przygotować salon do filmu, wyciszyć strefę, uruchomić muzykę lub połączyć światło, rolety i sprzęt AV.",
  },
  {
    id: "infra",
    title: "Infrastruktura",
    short: "Elektryka, LAN, Wi-Fi, rozdzielnia i okablowanie.",
    desc: "To fundament stabilnego smart home. Dobre okablowanie, sieć, rozdzielnia i rezerwy pod rozbudowę decydują o tym, czy system będzie czytelny, trwały i łatwy w serwisie.",
  },
];

export default function SmartSystemMap() {
  const [activeSystemId, setActiveSystemId] = useState("security");

  const activeSystem = useMemo(() => {
    return systems.find((system) => system.id === activeSystemId) || systems[0];
  }, [activeSystemId]);

  return (
    <section className="smart-section smart-system-map-section" id="mapa-systemow-smart-home">
      <div className="smart-container">
        <div className="smart-card smart-system-map">
          <div className="smart-system-map__heading">
            <span>Obszary integracji</span>
            <h2>Kliknij system i zobacz, co wnosi do całości</h2>
            <p>
              Inteligentny dom nie polega na dokładaniu przypadkowych urządzeń. Największy sens ma wtedy, gdy instalacje współpracują w jednej
              logicznej strukturze.
            </p>
          </div>

          <div className="smart-system-map__layout">
            <div className="smart-system-map__buttons">
              {systems.map((system) => (
                <button
                  type="button"
                  key={system.id}
                  className={`smart-system-button smart-system-button--${system.id} ${activeSystemId === system.id ? "is-active" : ""}`}
                  onClick={() => setActiveSystemId(system.id)}
                  aria-pressed={activeSystemId === system.id}
                >
                  <strong>{system.title}</strong>
                  <span>{system.short}</span>
                </button>
              ))}
            </div>

            <article className={`smart-system-detail smart-system-detail--${activeSystem.id}`}>
              <span>Wybrany obszar</span>
              <h3>{activeSystem.title}</h3>
              <p>{activeSystem.desc}</p>

              <div className="smart-system-detail__result">
                <strong>Efekt integracji:</strong>
                <span>mniej ręcznego sterowania, więcej automatycznych reakcji i jedna spójna logika działania domu.</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
