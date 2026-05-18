import { useMemo, useState } from "react";
import "./InteractiveScenariosSection.css";

const scenarioSystemsById = {
  security: {
    title: "Bezpieczeństwo",
  },
  energy: {
    title: "Energia",
  },
  lighting: {
    title: "Światło i rolety",
  },
  av: {
    title: "Audio i multimedia",
  },
  infra: {
    title: "Infrastruktura",
  },
};

const scenarios = [
  {
    id: "away",
    label: "Wyjście z domu",
    title: "Zmiana trybu zamiast obchodzenia całego domu",
    lead: "Po wyjściu dom może przełączyć się w tryb nieobecności. Nie musisz osobno sprawdzać świateł, rolet, ogrzewania i alarmu.",
    involved: ["security", "lighting", "energy", "infra"],
    steps: [
      {
        system: "Bezpieczeństwo",
        text: "Alarm przechodzi w tryb czuwania, a kamery i wideodomofon są gotowe do monitorowania zdarzeń.",
      },
      {
        system: "Oświetlenie",
        text: "Niepotrzebne światła gasną, a wybrane lampy zewnętrzne mogą działać według harmonogramu.",
      },
      {
        system: "Energia",
        text: "Ogrzewanie może obniżyć temperaturę w wybranych pomieszczeniach, żeby nie zużywać energii bez potrzeby.",
      },
      {
        system: "Aplikacja",
        text: "W razie ruchu, dymu lub nietypowego zdarzenia dostajesz powiadomienie na telefon.",
      },
    ],
  },
  {
    id: "return",
    label: "Powrót",
    title: "Dom przygotowuje się na Twój powrót",
    lead: "System może przywrócić komfortowe warunki bez ręcznego ustawiania wielu urządzeń.",
    involved: ["security", "lighting", "energy", "infra"],
    steps: [
      {
        system: "Dostęp",
        text: "System rozpoznaje uprawnionego domownika i automatycznie otwiera bramę.",
      },
      {
        system: "Oświetlenie",
        text: "Włącza się światło na podjeździe, przy drzwiach i w korytarzu — dokładnie tam, gdzie jest to potrzebne.",
      },
      {
        system: "Klimat",
        text: "Temperatura wraca do komfortowego poziomu, a wentylacja pracuje zgodnie z trybem obecności.",
      },
      {
        system: "Sterowanie",
        text: "Automatyczny tryb pracy możesz w każdej chwili zmienić z aplikacji, panelu sterującego lub przycisku na ścianie.",
      },
    ],
  },
  {
    id: "evening",
    label: "Wieczór / kino",
    title: "Scena, która łączy światło, rolety, TV i audio",
    lead: "Uruchamiasz scenę kinową, a system przygotowuje salon do seansu.",
    involved: ["lighting", "av", "energy", "infra"],
    steps: [
      {
        system: "Rolety",
        text: "Rolety lub żaluzje zasłaniają okna, ograniczając światło z zewnątrz.",
      },
      {
        system: "Oświetlenie",
        text: "Światło przygasa do ustalonego poziomu.",
      },
      {
        system: "Audio-wideo",
        text: "Telewizor i system nagłośnienia uruchamiają się i przygotowują do oglądania filmu.",
      },
      {
        system: "Sterowanie",
        text: "Po zakończeniu seansu możesz jednym kliknięciem wrócić do normalnego oświetlenia, podnieść rolety i wyłączyć sprzęt.",
      },
    ],
  },
  {
    id: "energy",
    label: "Energia i słońce",
    title: "Dom reaguje na temperaturę, słońce i produkcję energii",
    lead: "System steruje ogrzewaniem aby lepiej wykorzystywać energię.",
    involved: ["energy", "lighting", "infra"],
    steps: [
      {
        system: "Fotowoltaika",
        text: "Gdy instalacja produkuje nadwyżkę energii, system może wykorzystać ją do grzania wody, ładowania magazynu energii lub uruchomienia wybranych urządzeń.",
      },
      {
        system: "Rolety",
        text: "Rolety lub żaluzje pomagają wykorzystać słońce do dogrzania pomieszczeń i ograniczają ich nagrzewanie w upalne dni.",
      },
      {
        system: "Ogrzewanie",
        text: "Temperatura jest regulowana zależnie od obecności domowników, harmonogramu i wybranych preferencji.",
      },
      {
        system: "Wentylacja",
        text: "Rekuperacja reguluje intensywność pracy zależnie od jakości powietrza, wilgotności i trybu domu.",
      },
    ],
  },
  {
    id: "alert",
    label: "Alarm / dym",
    title: "Zdarzenie w domu uruchamia serię ustalonych reakcji",
    lead: "Czujnik nie musi tylko piszczeć. Może być częścią scenariusza, który informuje domowników i pomaga szybciej zareagować.",
    involved: ["security", "lighting", "energy", "infra"],
    steps: [
      {
        system: "Czujniki",
        text: "Czujnik dymu, ruchu lub otwarcia wykrywa zdarzenie i przekazuje informację do systemu.",
      },
      {
        system: "Powiadomienie",
        text: "Użytkownik może otrzymać alert w aplikacji, także wtedy, gdy nie ma go w domu.",
      },
      {
        system: "Oświetlenie",
        text: "Wybrane światła mogą się włączyć, żeby ułatwić orientację i dojście do wyjścia.",
      },
      {
        system: "Bezpieczeństwo",
        text: "Monitoring, alarm i wideodomofon mogą pomóc sprawdzić, co faktycznie dzieje się w budynku.",
      },
    ],
  },
  {
    id: "guest",
    label: "Gość przy drzwiach",
    title: "Wideodomofon, dostęp i światło działają razem",
    lead: "Dzwonek lub wideodomofon może być połączony z kamerą, zamkiem, oświetleniem i aplikacją.",
    involved: ["security", "lighting", "infra"],
    steps: [
      {
        system: "Dzwonek",
        text: "Gość naciska dzwonek, a Ty widzisz powiadomienie i podgląd w aplikacji.",
      },
      {
        system: "Wideodomofon",
        text: "Możesz porozmawiać z osobą przy wejściu, nawet jeśli nie ma Cię w domu.",
      },
      {
        system: "Oświetlenie",
        text: "Po zmroku system może doświetlić furtkę, podjazd lub wejście.",
      },
      {
        system: "Dostęp",
        text: "Jeśli chcesz, możesz zdalnie otworzyć furtkę, bramę lub przygotować osobny scenariusz wejścia.",
      },
    ],
  },
  {
    id: "pets",
    label: "Pupil sam w domu",
    title: "Bezpieczne warunki dla pupila, gdy jesteś poza domem",
    lead: "Smart home zadba o komfort Twojego pupila, a Tobie pozwoli w każdej chwili sprawdzić sytuację z telefonu.",
    involved: ["security", "lighting", "energy", "infra"],
    steps: [
      {
        system: "Bezpieczeństwo",
        text: "Alarm może działać w trybie przyjaznym zwierzętom, zapobiegając fałszywym alarmom od pupila.",
      },
      {
        system: "Monitoring",
        text: "Kamery pozwalają sprawdzić, czy zwierzę jest spokojne, gdzie przebywa i czy nie dzieje się nic nietypowego.",
      },
      {
        system: "Energia i klimat",
        text: "Ogrzewanie, klimatyzacja lub rolety mogą automatycznie utrzymywać bezpieczną temperaturę w pomieszczeniach.",
      },
      {
        system: "Aplikacja",
        text: "W razie otwarcia drzwi, furtki, wykrycia dymu albo nietypowej aktywności otrzymujesz powiadomienie na telefon.",
      },
    ],
  },
];

export default function InteractiveScenariosSection() {
  const [activeScenarioId, setActiveScenarioId] = useState("away");

  const activeScenario = useMemo(() => {
    return scenarios.find((scenario) => scenario.id === activeScenarioId) || scenarios[0];
  }, [activeScenarioId]);

  return (
    <section className="smart-section smart-interactive" id="scenariusze-smart-home">
      <div className="smart-container">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Smart home w praktyce</span>
          <h2>Zobacz, jak dom może reagować w konkretnych sytuacjach.</h2>
          <div className="smart-section-divider" aria-hidden="true" />
        </div>

        <div className="smart-interactive__main">
          <div className="smart-card smart-scenario-panel">
            <div className="smart-scenario-panel__heading">
              <span>Scenariusze działania</span>
            </div>

            <div className="smart-scenario-tabs" role="tablist" aria-label="Scenariusze inteligentnego domu">
              {scenarios.map((scenario, index) => (
                <button
                  type="button"
                  key={scenario.id}
                  className={`smart-scenario-tab ${activeScenarioId === scenario.id ? "is-active" : ""}`}
                  style={{ "--scenario-index": index }}
                  onClick={() => setActiveScenarioId(scenario.id)}
                  aria-pressed={activeScenarioId === scenario.id}
                >
                  {scenario.label}
                </button>
              ))}
            </div>

            <article className="smart-scenario-card">
              <div className="smart-scenario-card__content">
                <span>Aktywny scenariusz</span>
                <h3>{activeScenario.title}</h3>
                <p>{activeScenario.lead}</p>

                <div className="smart-involved-list" aria-label="Systemy biorące udział w scenariuszu">
                  {activeScenario.involved.map((systemId) => {
                    const system = scenarioSystemsById[systemId];

                    return (
                      <span className={`smart-involved-pill smart-involved-pill--${systemId}`} key={systemId}>
                        {system?.title}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="smart-timeline">
                {activeScenario.steps.map((step, index) => (
                  <div className="smart-timeline__item" key={`${activeScenario.id}-${step.system}-${index}`}>
                    <div className="smart-timeline__marker">{index + 1}</div>
                    <div>
                      <strong>{step.system}</strong>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="smart-control-column">
            <div className="smart-card smart-control-card">
              <span>Sterowanie</span>
              <h3>Wszystko w jednym miejscu</h3>

              <div className="smart-control-phone" aria-hidden="true">
                <div className="smart-control-phone__top">
                  <span />
                  <span />
                </div>

                <div className="smart-control-phone__screen">
                  <div className="smart-control-phone__status">
                    <strong>Dom</strong>
                    <span>Tryb komfort</span>
                  </div>

                  <div className="smart-control-phone__grid">
                    <span>Alarm</span>
                    <span>Światło</span>
                    <span>Rolety</span>
                    <span>Klimat</span>
                    <span>Audio</span>
                    <span>Energia</span>
                  </div>
                </div>
              </div>

              <a href="#control-methods" className="smart-inline-cta">
                Zobacz sposoby sterowania
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="smart-card smart-design-note">
              <h4>Ważne przy projektowaniu</h4>
              <p>Im więcej systemów ma współpracować, tym ważniejsze są okablowanie, sieć, rozdzielnia i jasna logika działania.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
