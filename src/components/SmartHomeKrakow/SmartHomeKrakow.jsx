import { Link } from "react-router-dom";
import "./SmartHomeKrakow.css";

const smartAreas = [
  {
    eyebrow: "Energia i ogrzewanie",
    title: "Oszczędność energii",
    text: "Inteligentny dom zaczyna mieć realny sens wtedy, gdy łączy źródło ciepła, ogrzewanie podłogowe, zawory, klimatyzację, rekuperację, rolety i czujniki temperatury w jeden spójny system. Dom nie działa wtedy przypadkowo — reaguje na porę dnia, temperaturę, nasłonecznienie i obecność domowników.",
    points: [
      "integracja pompy ciepła, pieca lub innego źródła ciepła",
      "sterowanie zaworami ogrzewania i klimatyzacją",
      "wykorzystanie rolet i żaluzji do zarządzania zyskami ciepła ze słońca",
      "automatyczne dogrzewanie lub ograniczanie przegrzewania pomieszczeń",
    ],
  },
  {
    eyebrow: "PV, magazyn, EV",
    title: "Zarządzanie energią",
    text: "Jeżeli planujesz fotowoltaikę, magazyn energii, samochód elektryczny albo taryfę dynamiczną, automatyka budynkowa pozwala wykorzystać energię wtedy, kiedy jest to najbardziej opłacalne. System może koordynować pracę falownika, ładowarki, magazynu, pompy ciepła, klimatyzacji i innych odbiorników.",
    points: [
      "integracja PV, magazynu energii i ładowarki EV",
      "współpraca z taryfą dynamiczną",
      "optymalizacja zużycia energii w budynku",
      "dostęp do zarządzania energią z jednej aplikacji",
    ],
  },
  {
    eyebrow: "Światło i sceny",
    title: "Oświetlenie, które pracuje w tle",
    text: "Dobrze zaprojektowane oświetlenie nie polega na tym, że masz więcej przycisków. Chodzi o to, żeby dom rozumiał kontekst. Inaczej działa kuchnia rano, inaczej salon wieczorem, a jeszcze inaczej korytarz w nocy, kiedy ktoś idzie po wodę.",
    points: [
      "sceny świetlne dopasowane do trybu życia",
      "mniej przełączników na ścianach",
      "delikatne podświetlenie schodów i korytarzy w nocy",
      "łatwa zmiana logiki działania po czasie użytkowania",
    ],
  },
  {
    eyebrow: "Strefy audio",
    title: "Multiroom Audio",
    text: "System nagłośnienia może być częścią inteligentnego domu. Salon, kuchnia, łazienka, taras czy sypialnia mogą działać jako osobne strefy. Każdy domownik może korzystać z własnej przestrzeni audio, playlist i ulubionych serwisów streamingowych.",
    points: [
      "podział domu na niezależne strefy audio",
      "sterowanie z panelu, telefonu lub aplikacji",
      "obsługa playlist i serwisów takich jak Spotify",
      "indywidualny dostęp dla domowników",
    ],
  },
  {
    eyebrow: "Alarm, CCTV, czujniki",
    title: "Bezpieczeństwo",
    text: "Automatyka nie zastępuje profesjonalnego alarmu ani monitoringu. Te systemy powinny być niezależne i dedykowane do ochrony budynku. Rolą smart home jest ich wygodna integracja — tak, aby alarm, kamery, wideodomofon, brama, furtka i powiadomienia działały razem.",
    points: [
      "niezależny system alarmowy",
      "integracja CCTV, wideodomofonu, bramy i furtki",
      "czujniki zalania, dymu i gazów usypiających",
      "zarządzanie bezpieczeństwem z jednej aplikacji lub panelu",
    ],
  },
  {
    eyebrow: "Komfort codzienny",
    title: "Dom dopasowany do domowników",
    text: "Największą zaletą automatyki jest elastyczność. Część rozwiązań dopiero w praktyce pokazuje, czy działa idealnie. Dobrze wykonany system można później dopracować: zmienić sceny, harmonogramy, logikę przycisków, zachowanie rolet, światła, ogrzewania czy powiadomień.",
    points: [
      "system może zmieniać się razem z domownikami",
      "możliwość korekt po realnym użytkowaniu",
      "personalizowana aplikacja",
      "mniej chaosu, więcej kontroli",
    ],
  },
];

const scenarios = [
  {
    number: "01",
    title: "Poranek bez klikania",
    text: "Rolety podnoszą się stopniowo, ogrzewanie utrzymuje komfortową temperaturę, a światło w kuchni uruchamia delikatną scenę dzienną.",
  },
  {
    number: "02",
    title: "Dom wykorzystuje słońce",
    text: "Zimą system może otworzyć żaluzje, żeby dogrzać pomieszczenia. Latem zamknie je wcześniej, zanim salon zacznie się przegrzewać.",
  },
  {
    number: "03",
    title: "Tryb nocny",
    text: "Czujnik obecności wykrywa ruch, ale zamiast zapalać mocne światło, uruchamia subtelne podświetlenie korytarza lub schodów.",
  },
  {
    number: "04",
    title: "Cichy domofon",
    text: "Dzwonek nie budzi dziecka. System daje znać światłem w wybranym pomieszczeniu i powiadomieniem na telefon.",
  },
];

const processSteps = [
  "Analiza budynku, instalacji i potrzeb domowników",
  "Projekt funkcji: światło, rolety, ogrzewanie, alarm, CCTV, energia",
  "Dobór rozwiązań i przygotowanie instalacji pod automatykę",
  "Uruchomienie, testy i konfiguracja scen",
  "Dopasowanie działania systemu po realnym użytkowaniu",
];

function SmartHero() {
  return (
    <section className="sh-hero">
      <div className="sh-hero-bg" />

      <div className="sh-hero-content">
        <p className="sh-eyebrow">Smart Instalacje Kraków</p>

        <h1>
          Inteligentny dom, który działa jako <span>jeden spójny system.</span>
        </h1>

        <p className="sh-lead">
          Smart Home to nie tylko sterowanie światłem i roletami z telefonu. To przemyślana instalacja, która łączy ogrzewanie, klimatyzację,
          rekuperację, energię, bezpieczeństwo, audio i codzienny komfort domowników.
        </p>

        <div className="sh-hero-actions">
          <Link to="/kontakt#formularz" className="sh-btn sh-btn-primary">
            Zapytaj o Smart Home
          </Link>
          <a href="#jak-dziala" className="sh-btn sh-btn-secondary">
            Zobacz, jak to działa
          </a>
        </div>

        <div className="sh-hero-tags">
          <span>Loxone</span>
          <span>Energia</span>
          <span>Oświetlenie</span>
          <span>Rolety</span>
          <span>CCTV</span>
          <span>Multiroom</span>
        </div>
      </div>

      <div className="sh-hero-visual" aria-hidden="true">
        <div className="sh-orbit">
          <span className="sh-orbit-core">
            SMART
            <br />
            HOME
          </span>
          <span className="sh-orbit-dot dot-1">PV</span>
          <span className="sh-orbit-dot dot-2">HVAC</span>
          <span className="sh-orbit-dot dot-3">CCTV</span>
          <span className="sh-orbit-dot dot-4">AUDIO</span>
          <span className="sh-orbit-dot dot-5">LIGHT</span>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="sh-section sh-intro" id="jak-dziala">
      <div className="sh-section-heading">
        <p className="sh-eyebrow">Co to właściwie znaczy?</p>
        <h2>Smart Home to system naczyń połączonych</h2>
      </div>

      <div className="sh-intro-grid">
        <div className="sh-intro-card sh-intro-main">
          <h3>Nie chodzi o gadżety. Chodzi o logikę działania domu.</h3>
          <p>
            Pojedyncza aplikacja do światła albo rolet nie tworzy jeszcze inteligentnego domu. Prawdziwa automatyka zaczyna się wtedy, gdy instalacje
            w budynku wymieniają informacje i podejmują decyzje na podstawie temperatury, słońca, obecności, harmonogramu, ceny energii i potrzeb
            domowników.
          </p>
          <p>
            Dzięki temu dom może sam dobrać scenę światła, ograniczyć przegrzewanie salonu, wykorzystać tańszą energię, wyciszyć domofon wieczorem
            albo połączyć alarm, kamery i wideodomofon w jednym wygodnym panelu.
          </p>
        </div>

        <div className="sh-intro-card">
          <span className="sh-card-number">01</span>
          <h3>Komfort</h3>
          <p>Mniej ręcznego sterowania, mniej chaosu na ścianach, więcej automatycznych scen dopasowanych do życia domowników.</p>
        </div>

        <div className="sh-intro-card">
          <span className="sh-card-number">02</span>
          <h3>Energia</h3>
          <p>Ogrzewanie, chłodzenie, rolety, PV, magazyn i ładowarka EV mogą działać według jednej strategii.</p>
        </div>

        <div className="sh-intro-card">
          <span className="sh-card-number">03</span>
          <h3>Bezpieczeństwo</h3>
          <p>Alarm, CCTV, wideodomofon i czujniki pozostają dedykowanymi systemami, ale ich obsługa może być wspólna.</p>
        </div>
      </div>
    </section>
  );
}

function SmartAreaCard({ area, index }) {
  return (
    <article className="sh-area-card">
      <div className="sh-area-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <p>{area.eyebrow}</p>
      </div>

      <h3>{area.title}</h3>
      <p>{area.text}</p>

      <ul>
        {area.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}

function AreasSection() {
  return (
    <section className="sh-section sh-areas">
      <div className="sh-section-heading sh-heading-wide">
        <p className="sh-eyebrow">Zakres inteligentnej instalacji</p>
        <h2>Co możemy połączyć w jednym systemie?</h2>
        <p>
          Dobrze zaprojektowany Smart Home nie jest zbiorem przypadkowych urządzeń. To centralna logika budynku, która łączy instalacje techniczne,
          bezpieczeństwo i wygodę codziennego użytkowania.
        </p>
      </div>

      <div className="sh-areas-grid">
        {smartAreas.map((area, index) => (
          <SmartAreaCard area={area} index={index} key={area.title} />
        ))}
      </div>
    </section>
  );
}

function EnergySection() {
  return (
    <section className="sh-section sh-energy">
      <div className="sh-energy-panel">
        <div>
          <p className="sh-eyebrow">Energia w praktyce</p>
          <h2>Dom może grzać, chłodzić i oszczędzać mądrzej</h2>
          <p>
            W klasycznej instalacji każdy system działa osobno: pompa ciepła pracuje według własnej logiki, klimatyzacja według własnej, rolety
            sterowane są ręcznie, a fotowoltaika oddaje lub pobiera energię bez szerszego kontekstu.
          </p>
          <p>
            W inteligentnym domu te elementy mogą współpracować. System wie, jaka jest temperatura w pomieszczeniach, czy świeci słońce, czy dom jest
            zajęty, jaka jest cena energii i czy warto przesunąć zużycie na inny moment dnia.
          </p>
        </div>

        <div className="sh-flow-box">
          <div className="sh-flow-item">PV</div>
          <div className="sh-flow-line" />
          <div className="sh-flow-item">Magazyn</div>
          <div className="sh-flow-line" />
          <div className="sh-flow-item">Pompa ciepła</div>
          <div className="sh-flow-line" />
          <div className="sh-flow-item">Rolety</div>
          <div className="sh-flow-line" />
          <div className="sh-flow-item">Aplikacja</div>
        </div>
      </div>

      <div className="sh-note">
        <strong>Efekt:</strong> przy odpowiednio dobranym systemie automatyki budynek może ograniczyć zużycie energii, poprawić komfort cieplny i
        wykorzystać więcej energii produkowanej lokalnie — szczególnie przy PV, magazynie energii, ładowarce EV i taryfie dynamicznej.
      </div>
    </section>
  );
}

function ScenarioSection() {
  return (
    <section className="sh-section sh-scenarios">
      <div className="sh-section-heading">
        <p className="sh-eyebrow">Sceny i automatyzacje</p>
        <h2>Smart Home w praktyce</h2>
      </div>

      <div className="sh-scenario-list">
        {scenarios.map((item) => (
          <article className="sh-scenario" key={item.title}>
            <span>{item.number}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="sh-section sh-security">
      <div className="sh-security-content">
        <p className="sh-eyebrow">Bezpieczeństwo bez kompromisów</p>
        <h2>Bezpieczeństwo, które masz pod kontrolą</h2>
        <p>
          Smart Home może połączyć alarm, monitoring CCTV, wideodomofon, czujniki zalania, dymu oraz kontrolę bramy i furtki w jeden wygodny system
          obsługi. Dzięki temu najważniejsze informacje masz w jednym miejscu — na panelu lub w aplikacji.
        </p>
        <p>
          W praktyce oznacza to prostszą codzienną kontrolę nad domem. Możesz uzbroić alarm, sprawdzić obraz z kamer, odebrać wideodomofon, otworzyć
          furtkę, skontrolować bramę albo dostać powiadomienie, gdy system wykryje zdarzenie.
        </p>
      </div>

      <div className="sh-security-stack">
        <div>Alarm</div>
        <div>CCTV</div>
        <div>Wideodomofon</div>
        <div>Czujniki</div>
        <div>Brama / furtka</div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="sh-section sh-process">
      <div className="sh-section-heading">
        <p className="sh-eyebrow">Jak pracujemy</p>
        <h2>Od pomysłu do systemu, który da się normalnie używać</h2>
      </div>

      <div className="sh-process-timeline">
        {processSteps.map((step, index) => (
          <div className="sh-process-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="sh-final">
      <div>
        <p className="sh-eyebrow">Smart Home Kraków</p>
        <h2>Budujesz lub modernizujesz dom?</h2>
        <p>
          Najlepszy moment na rozmowę o automatyce jest przed wykonaniem instalacji. Wtedy można dobrze zaplanować przewody, rozdzielnię, sterowanie,
          sceny, integracje i przyszłą rozbudowę systemu.
        </p>
      </div>

      <Link to="/kontakt" className="sh-btn sh-btn-primary">
        Skontaktuj się w sprawie projektu
      </Link>
    </section>
  );
}

export default function SmartHomeKrakow() {
  return (
    <main className="smart-home-page">
      <SmartHero />
      <IntroSection />
      <AreasSection />
      <EnergySection />
      <ScenarioSection />
      <SecuritySection />
      <ProcessSection />
      <FinalCTA />
    </main>
  );
}
