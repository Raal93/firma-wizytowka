import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./SystemsCooperationSection.css";

const systems = [
  {
    id: "security",
    title: "Bezpieczeństwo",
    short: "Alarm, monitoring, wideodomofon, dzwonek i czujniki.",
    desc: "System bezpieczeństwa może reagować na ruch, otwarcie drzwi, dym, obecność gościa lub próbę wejścia. Po integracji nie działa osobno — może uruchamiać światło, wysyłać powiadomienia, nagrywać obraz i zmieniać tryb domu.",
  },
  {
    id: "energy",
    title: "Energia i klimat",
    short: "Ogrzewanie, rekuperacja, fotowoltaika i zużycie energii.",
    desc: "Ogrzewanie, wentylacja i energia mogą być sterowane według temperatury, obecności, pory dnia, produkcji z fotowoltaiki lub trybu domu. Celem jest komfort bez ręcznego pilnowania każdego urządzenia.",
  },
  {
    id: "lighting",
    title: "Oświetlenie i rolety",
    short: "Sceny świetlne, żaluzje, rolety i światło dzienne.",
    desc: "Oświetlenie i osłony okienne mogą reagować na porę dnia, ruch, obecność, nasłonecznienie lub scenę użytkownika. Dzięki temu dom może sam przyciemniać światło, zamykać rolety albo przygotować scenę wieczorną.",
  },
  {
    id: "av",
    title: "Audiowizualny",
    short: "Telewizor, kino domowe, multiroom audio i strefy dźwięku.",
    desc: "System audio-wideo może współpracować ze scenami domu. Jednym przyciskiem możesz uruchomić kino, przyciemnić światło, zasłonić rolety i włączyć odpowiednią strefę audio.",
  },
  {
    id: "infra",
    title: "Infrastruktura",
    short: "LAN, Wi-Fi, punkty dostępu, elektryka i baza techniczna.",
    desc: "Stabilna infrastruktura jest fundamentem. Sieć, okablowanie i rozdzielnia pozwalają połączyć urządzenia w jeden system, zapewnić niezawodność i przygotować dom pod późniejszą rozbudowę.",
  },
];

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
    lead: "System może przywrócić komfortowe ustawienia bez ręcznego ustawiania wielu urządzeń.",
    involved: ["security", "lighting", "energy", "infra"],
    steps: [
      {
        system: "Dostęp",
        text: "Brama, furtka czy garaż mogą być otwierane za pomocą aplikacji.",
      },
      {
        system: "Oświetlenie",
        text: "Włącza się światło w korytarzu, podjeździe lub strefie wejścia — tylko tam, gdzie jest to potrzebne.",
      },
      {
        system: "Klimat",
        text: "Temperatura wraca do komfortowego poziomu, a wentylacja pracuje zgodnie z trybem obecności.",
      },
      {
        system: "Sterowanie",
        text: "Całość możesz uruchomić z aplikacji, panelu, przycisku lub automatycznie według ustalonej logiki.",
      },
    ],
  },
  {
    id: "evening",
    label: "Wieczór / kino",
    title: "Scena, która łączy światło, rolety, TV i audio",
    lead: "Zamiast osobno ustawiać oświetlenie, rolety i sprzęt audio-wideo, możesz uruchomić jedną scenę.",
    involved: ["lighting", "av", "energy", "infra"],
    steps: [
      {
        system: "Rolety",
        text: "Rolety lub żaluzje zasłaniają okna, ograniczając światło z zewnątrz.",
      },
      {
        system: "Oświetlenie",
        text: "Światło przygasa do ustalonego poziomu albo przełącza się w scenę wieczorną.",
      },
      {
        system: "Audio-wideo",
        text: "Telewizor, kino domowe lub multiroom audio uruchamiają odpowiednią strefę rozrywki.",
      },
      {
        system: "Komfort",
        text: "Dom zachowuje właściwą temperaturę i nie wymaga przełączania kilku niezależnych systemów.",
      },
    ],
  },
  {
    id: "energy",
    label: "Energia i słońce",
    title: "Dom reaguje na temperaturę, słońce i produkcję energii",
    lead: "Automatyka może sterować ogrzewaniem aby lepiej wykorzystywać energię.",
    involved: ["energy", "lighting", "infra"],
    steps: [
      {
        system: "Fotowoltaika",
        text: "System może uwzględniać produkcję energii i zużycie w domu.",
      },
      {
        system: "Rolety",
        text: "Przy mocnym słońcu rolety lub żaluzje mogą ograniczyć przegrzewanie pomieszczeń.",
      },
      {
        system: "Ogrzewanie",
        text: "Temperatura może być regulowana zależnie od obecności, harmonogramu i warunków w pomieszczeniach.",
      },
      {
        system: "Rekuperacja",
        text: "Wentylacja może pracować zgodnie z potrzebami domu, a nie jako całkowicie oderwane urządzenie.",
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
];

const flowItems = [
  {
    title: "Czujniki i urządzenia",
    text: "Ruch, temperatura, dym, nasłonecznienie, przyciski, wideodomofon, termostaty i inne elementy zbierają informacje.",
  },
  {
    title: "Logika automatyki",
    text: "System analizuje warunki: porę dnia, obecność, harmonogram, tryb domu i reguły ustawione przez użytkownika.",
  },
  {
    title: "Reakcja domu",
    text: "Światła, rolety, ogrzewanie, alarm, audio, wentylacja i powiadomienia wykonują zaplanowane działania.",
  },
];

export default function SystemsCooperationSection() {
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
    <section className="systems-coop-section" id="wspolpraca-systemow">
      <div className="systems-coop-container">
        <div className="systems-coop-header">
          <span className="systems-coop-eyebrow">Jeden dom, jeden system</span>

          <h2>System który współpracuje z Tobą</h2>

          <p>
            Inteligentny dom zaczyna się wtedy, gdy alarm, monitoring, oświetlenie, rolety, ogrzewanie, audio, energia i sieć są połączone w jeden
            logiczny system.
          </p>
        </div>

        <div className="systems-coop-flow" aria-label="Schemat działania inteligentnego domu">
          {flowItems.map((item, index) => (
            <div className="systems-flow-card" key={item.title}>
              <div className="systems-flow-number">{String(index + 1).padStart(2, "0")}</div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="systems-coop-main">
          <div className="systems-scenarios-panel">
            <div className="systems-panel-heading">
              <span>Scenariusze działania</span>
              <h3>Wybierz sytuację i zobacz, jak dom może reagować</h3>
            </div>

            <div className="systems-scenario-buttons" role="tablist" aria-label="Scenariusze inteligentnego domu">
              {scenarios.map((scenario) => (
                <button
                  type="button"
                  key={scenario.id}
                  className={`systems-scenario-button ${activeScenarioId === scenario.id ? "is-active" : ""}`}
                  onClick={() => setActiveScenarioId(scenario.id)}
                  aria-pressed={activeScenarioId === scenario.id}
                >
                  {scenario.label}
                </button>
              ))}
            </div>

            <article className="systems-scenario-card">
              <div className="systems-scenario-content">
                <div className="systems-scenario-topline">Aktywny scenariusz</div>

                <h3>{activeScenario.title}</h3>
                <p>{activeScenario.lead}</p>

                <div className="systems-involved-list" aria-label="Systemy biorące udział w scenariuszu">
                  {activeScenario.involved.map((systemId) => {
                    const system = systemsById[systemId];

                    return (
                      <span className={`systems-involved-pill systems-involved-pill--${systemId}`} key={systemId}>
                        {system?.title}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="systems-scenario-timeline">
                {activeScenario.steps.map((step, index) => (
                  <div className="systems-timeline-item" key={`${activeScenario.id}-${step.system}-${index}`}>
                    <div className="systems-timeline-marker">{index + 1}</div>

                    <div>
                      <strong>{step.system}</strong>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="systems-control-panel">
            <div className="systems-control-card">
              <span className="systems-control-label">Sterowanie</span>

              <h3>Wszystko w jednym miejscu</h3>

              <p>
                Zamiast kilku niezależnych aplikacji, dom może mieć jeden spójny punkt sterowania: aplikację, panel ścienny, przycisk sceny albo
                automatyczne reguły działające w tle.
              </p>

              <div className="systems-control-phone" aria-hidden="true">
                <div className="systems-phone-header">
                  <span></span>
                  <span></span>
                </div>

                <div className="systems-phone-screen">
                  <div className="systems-phone-status">
                    <strong>Dom</strong>
                    <span>Tryb komfort</span>
                  </div>

                  <div className="systems-phone-grid">
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

            <div className="systems-warning-card">
              <h4>Ważne przy projektowaniu</h4>

              <p>
                Im więcej systemów ma ze sobą współpracować, tym ważniejsze są: stabilna sieć, dobre okablowanie, przemyślana rozdzielnia i jasna
                logika działania.
              </p>
            </div>
          </aside>
        </div>

        <div className="systems-map-section">
          <div className="systems-map-heading">
            <span>Obszary integracji</span>
            <h3>Kliknij system i zobacz, co wnosi do całości</h3>
          </div>

          <div className="systems-map-layout">
            <div className="systems-map-grid">
              {systems.map((system) => (
                <button
                  type="button"
                  key={system.id}
                  className={`systems-map-button systems-map-button--${system.id} ${activeSystemId === system.id ? "is-active" : ""}`}
                  onClick={() => setActiveSystemId(system.id)}
                  aria-pressed={activeSystemId === system.id}
                >
                  <strong>{system.title}</strong>
                  <span>{system.short}</span>
                </button>
              ))}
            </div>

            <article className={`systems-detail-card systems-detail-card--${activeSystem.id}`}>
              <span>Wybrany obszar</span>

              <h3>{activeSystem.title}</h3>

              <p>{activeSystem.desc}</p>

              <div className="systems-detail-result">
                <strong>Efekt integracji:</strong>
                <span>mniej ręcznego sterowania, więcej automatycznych reakcji i jedna spójna logika działania domu.</span>
              </div>
            </article>
          </div>
        </div>

        <div className="systems-coop-cta">
          <div>
            <span>Od pojedynczych urządzeń do spójnego domu</span>
            <h3>Najlepiej zaplanować integrację już na etapie instalacji</h3>
          </div>

          <Link to="/kontakt" className="systems-coop-link">
            Porozmawiajmy o Twojej instalacji →
          </Link>
        </div>
      </div>
    </section>
  );
}
