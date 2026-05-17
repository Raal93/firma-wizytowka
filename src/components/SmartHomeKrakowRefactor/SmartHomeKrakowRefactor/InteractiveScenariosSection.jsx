import { useMemo, useState } from "react";
import "./InteractiveScenariosSection.css";

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

const scenarios = [
  {
    id: "away",
    label: "Wyjście z domu",
    title: "Jeden tryb zamiast obchodzenia całego domu",
    lead: "Po wyjściu dom może przełączyć się w tryb nieobecności. Nie trzeba osobno sprawdzać świateł, rolet, ogrzewania i alarmu.",
    involved: ["security", "lighting", "energy", "infra"],
    steps: [
      { system: "Bezpieczeństwo", text: "Alarm przechodzi w czuwanie, a kamery i wideodomofon są gotowe do rejestracji zdarzeń." },
      { system: "Światło i rolety", text: "Niepotrzebne światła gasną, a wybrane rolety mogą ustawić się według sceny nieobecności." },
      { system: "Energia", text: "Ogrzewanie może obniżyć temperaturę w wybranych strefach, bez utraty komfortu po powrocie." },
      { system: "Powiadomienia", text: "W razie ruchu, dymu, zalania lub nietypowego zdarzenia użytkownik dostaje alert na telefon." },
    ],
  },
  {
    id: "return",
    label: "Powrót",
    title: "Dom przygotowuje wejście i przywraca komfort",
    lead: "System może reagować na powrót domownika: doświetlić wejście, otworzyć bramę i przywrócić ustawienia komfortowe.",
    involved: ["security", "lighting", "energy", "infra"],
    steps: [
      { system: "Dostęp", text: "Brama, furtka lub garaż mogą działać w ramach jednej logiki dostępu." },
      { system: "Oświetlenie", text: "Włącza się światło na podjeździe, przy drzwiach i w korytarzu — dokładnie tam, gdzie jest potrzebne." },
      { system: "Klimat", text: "Temperatura wraca do ustawień komfortowych, a wentylacja pracuje w trybie obecności." },
      { system: "Sterowanie", text: "Automatyczny tryb można zmienić z aplikacji, panelu lub przycisku sceny." },
    ],
  },
  {
    id: "evening",
    label: "Wieczór / kino",
    title: "Scena łączy światło, rolety, TV i audio",
    lead: "Zamiast kilku pilotów i przełączników uruchamiasz jedną scenę, a salon przygotowuje się do wieczoru.",
    involved: ["lighting", "av", "energy", "infra"],
    steps: [
      { system: "Rolety", text: "Rolety lub żaluzje zasłaniają okna i ograniczają światło z zewnątrz." },
      { system: "Oświetlenie", text: "Światło przygasa do ustalonego poziomu, bez ręcznego ustawiania kilku obwodów." },
      { system: "Audio-wideo", text: "Telewizor i nagłośnienie uruchamiają odpowiednią strefę lub źródło dźwięku." },
      { system: "Powrót do trybu dziennego", text: "Po zakończeniu sceny możesz jednym kliknięciem wrócić do normalnego oświetlenia i ustawień." },
    ],
  },
  {
    id: "energy",
    label: "Energia i słońce",
    title: "Dom reaguje na temperaturę, słońce i produkcję energii",
    lead: "Automatyka może ograniczać ręczne sterowanie ogrzewaniem, chłodzeniem, roletami i wybranymi odbiornikami energii.",
    involved: ["energy", "lighting", "infra"],
    steps: [
      { system: "Fotowoltaika", text: "Nadwyżka energii może zostać wykorzystana do grzania wody, ładowania magazynu lub pracy wybranych urządzeń." },
      { system: "Rolety", text: "Osłony pomagają dogrzewać pomieszczenia zimą i ograniczać przegrzewanie latem." },
      { system: "Ogrzewanie", text: "Temperatura jest regulowana zależnie od obecności, harmonogramu i preferencji domowników." },
      { system: "Wentylacja", text: "Rekuperacja może dostosować pracę do jakości powietrza, wilgotności i trybu domu." },
    ],
  },
  {
    id: "alert",
    label: "Alarm / dym",
    title: "Jedno zdarzenie uruchamia serię reakcji",
    lead: "Czujnik nie musi tylko piszczeć. Może rozpocząć scenariusz, który informuje domowników i pomaga szybciej zareagować.",
    involved: ["security", "lighting", "energy", "infra"],
    steps: [
      { system: "Czujniki", text: "Czujnik dymu, zalania, ruchu lub otwarcia wykrywa zdarzenie i przekazuje informację do systemu." },
      { system: "Powiadomienie", text: "Użytkownik otrzymuje alert w aplikacji także wtedy, gdy nie ma go w domu." },
      { system: "Oświetlenie", text: "Wybrane światła mogą się włączyć, żeby ułatwić orientację i dojście do wyjścia." },
      { system: "Monitoring", text: "Kamery, alarm i wideodomofon pomagają sprawdzić, co dzieje się w budynku." },
    ],
  },
  {
    id: "guest",
    label: "Gość przy drzwiach",
    title: "Wideodomofon, dostęp i światło działają razem",
    lead: "Dzwonek lub wideodomofon może być połączony z kamerą, furtką, bramą, oświetleniem i aplikacją.",
    involved: ["security", "lighting", "infra"],
    steps: [
      { system: "Wideodomofon", text: "Widzisz powiadomienie i podgląd osoby przy wejściu." },
      { system: "Rozmowa", text: "Możesz porozmawiać z gościem, także poza domem." },
      { system: "Oświetlenie", text: "Po zmroku system może doświetlić furtkę, podjazd lub wejście." },
      { system: "Dostęp", text: "Możesz zdalnie otworzyć furtkę, bramę albo przygotować osobny scenariusz wejścia." },
    ],
  },
  {
    id: "pets",
    label: "Pupil sam w domu",
    title: "Warunki dla pupila pod kontrolą",
    lead: "Automatyka może utrzymać bezpieczne warunki, a właściciel może sprawdzić sytuację z telefonu.",
    involved: ["security", "energy", "infra"],
    steps: [
      { system: "Alarm", text: "Ochrona może działać w trybie przyjaznym zwierzętom, ograniczając fałszywe alarmy." },
      { system: "Monitoring", text: "Kamery pozwalają sprawdzić, czy zwierzę jest spokojne i gdzie przebywa." },
      { system: "Klimat", text: "Ogrzewanie, klimatyzacja i rolety mogą utrzymywać bezpieczną temperaturę." },
      { system: "Alert", text: "W razie dymu, otwarcia drzwi lub nietypowej aktywności aplikacja może wysłać powiadomienie." },
    ],
  },
];

const flowItems = [
  { title: "Informacja", text: "Czujniki i urządzenia informują system o stanie domu." },
  { title: "Logika", text: "Automatyka sprawdza reguły, tryb domu i warunki." },
  { title: "Reakcja", text: "Instalacje wykonują zaplanowane działania." },
];

export default function InteractiveScenariosSection() {
  const [activeScenarioId, setActiveScenarioId] = useState("away");
  const [activeSystemId, setActiveSystemId] = useState("security");

  const systemsById = useMemo(() => {
    return systems.reduce((acc, system) => {
      acc[system.id] = system;
      return acc;
    }, {});
  }, []);

  const activeScenario = useMemo(() => {
    return scenarios.find((scenario) => scenario.id === activeScenarioId) || scenarios[0];
  }, [activeScenarioId]);

  const activeSystem = useMemo(() => {
    return systems.find((system) => system.id === activeSystemId) || systems[0];
  }, [activeSystemId]);

  return (
    <section className="smart-section smart-interactive" id="scenariusze-smart-home">
      <div className="smart-container">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Smart home w praktyce</span>
          <h2>Zobacz, jak dom może reagować na konkretne sytuacje.</h2>
          <p>
            Poniżej zostają dwa elementy interaktywne: scenariusze dnia oraz mapa systemów. Dzięki temu użytkownik nie czyta samej teorii, tylko może
            sprawdzić działanie automatyki na przykładach.
          </p>
        </div>

        <div className="smart-interactive__main">
          <div className="smart-card smart-scenario-panel">
            <div className="smart-scenario-panel__heading">
              <span>Scenariusze działania</span>
              <h3>Wybierz sytuację i zobacz reakcję domu</h3>
            </div>

            <div className="smart-scenario-tabs" role="tablist" aria-label="Scenariusze inteligentnego domu">
              {scenarios.map((scenario) => (
                <button
                  type="button"
                  key={scenario.id}
                  className={`smart-scenario-tab ${activeScenarioId === scenario.id ? "is-active" : ""}`}
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
                    const system = systemsById[systemId];
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
              <p>Aplikacja, panel ścienny, przycisk sceny i automatyczne reguły mogą prowadzić do tego samego celu: prostszej obsługi domu.</p>

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
            </div>

            <div className="smart-card smart-design-note">
              <h4>Ważne przy projektowaniu</h4>
              <p>Im więcej systemów ma współpracować, tym ważniejsze są okablowanie, sieć, rozdzielnia i jasna logika działania.</p>
            </div>
          </aside>
        </div>

        <div className="smart-card smart-system-map">
          <div className="smart-system-map__heading">
            <span>Obszary integracji</span>
            <h3>Kliknij system i zobacz, co wnosi do całości</h3>
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
