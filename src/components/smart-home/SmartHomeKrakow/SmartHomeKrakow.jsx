// src/components/SmartHomeKrakow/SmartHomeKrakow.jsx

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
    title: "Poranek",
    text: "Rolety podnoszą się stopniowo, temperatura jest utrzymana w wybranych strefach, a światło w kuchni uruchamia delikatną scenę dzienną.",
  },
  {
    number: "02",
    title: "Upalny dzień",
    text: "System wcześniej przymyka rolety od nasłonecznionej strony, aby ograniczyć przegrzewanie salonu i odciążyć klimatyzację.",
  },
  {
    number: "03",
    title: "Tryb nocny",
    text: "Ruch w korytarzu nie włącza mocnego światła. Uruchamia się tylko subtelne podświetlenie, które nie wybudza domowników.",
  },
  {
    number: "04",
    title: "Wyjście z domu",
    text: "Jedna scena może wyłączyć wybrane światła, obniżyć temperaturę, zamknąć rolety, uzbroić alarm i przełączyć dom w tryb nieobecności.",
  },
];

const processSteps = [
  "Analiza budynku, etapu inwestycji i potrzeb domowników",
  "Ustalenie funkcji: światło, rolety, ogrzewanie, energia, alarm, CCTV",
  "Projekt instalacji, tras kablowych, rozdzielni i logiki sterowania",
  "Montaż, uruchomienie, testy i konfiguracja scen",
  "Dopasowanie działania systemu po realnym użytkowaniu",
];

function SmartHero() {
  return (
    <section className="smart-hero">
      <div className="smart-container smart-hero__grid">
        <div className="smart-hero__content">
          <span className="smart-eyebrow">Smart Home Kraków / okolice</span>

          <h1>Automatyka domu zaplanowana od instalacji po codzienne sceny.</h1>

          <p>
            Projektujemy i wykonujemy systemy Smart Home oparte o Loxone: od koncepcji i okablowania, przez rozdzielnię i montaż, po uruchomienie
            automatyki w gotowym domu.
          </p>

          <div className="smart-hero__actions">
            <Link to="/kontakt" className="smart-btn smart-btn--primary">
              Zapytaj o projekt
            </Link>

            <a href="#smart-home-dzialanie" className="smart-btn smart-btn--ghost">
              Zobacz, jak to działa
            </a>
          </div>

          <div className="smart-hero__tags" aria-label="Zakres Smart Home">
            <span>Loxone</span>
            <span>Oświetlenie</span>
            <span>Rolety</span>
            <span>Ogrzewanie</span>
            <span>Energia</span>
            <span>CCTV</span>
          </div>
        </div>

        <div className="smart-hero__visual" aria-hidden="true">
          <div className="smart-orbit smart-orbit--one" />
          <div className="smart-orbit smart-orbit--two" />

          <div className="smart-panel">
            <div className="smart-panel__top">
              <span>HOME STATUS</span>
              <strong>ACTIVE</strong>
            </div>

            <div className="smart-panel__main">
              <span>SMART</span>
              <strong>HOME</strong>
            </div>

            <div className="smart-panel__chips">
              <span>LIGHT</span>
              <span>HVAC</span>
              <span>PV</span>
              <span>CCTV</span>
              <span>AUDIO</span>
              <span>EV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="smart-section" id="smart-home-dzialanie">
      <div className="smart-container smart-intro">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Co to właściwie znaczy?</span>
          <h2>Smart Home to nie aplikacja. To logika działania domu.</h2>
        </div>

        <div className="smart-intro__content">
          <div className="smart-intro__text">
            <p>
              Prawdziwa automatyka zaczyna się wtedy, gdy instalacje w budynku wymieniają informacje i działają według ustalonej logiki. Dom nie jest
              wtedy zbiorem osobnych aplikacji, pilotów i przypadkowych modułów, ale systemem dopasowanym do codziennego życia.
            </p>

            <p>
              Dzięki temu światło, temperatura, rolety, bezpieczeństwo i energia mogą pracować razem — bez ręcznego sterowania każdym elementem
              osobno.
            </p>
          </div>

          <div className="smart-intro__cards">
            <article>
              <span>01</span>
              <h3>Komfort</h3>
              <p>Mniej klikania, prostsza obsługa i sceny dopasowane do rytmu dnia.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Energia</h3>
              <p>Lepsza współpraca ogrzewania, chłodzenia, rolet, PV i odbiorników.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Bezpieczeństwo</h3>
              <p>Dedykowane systemy ochrony z wygodną obsługą z jednego miejsca.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function SmartAreaCard({ area, index }) {
  return (
    <article className="smart-area-card">
      <div className="smart-area-card__number">{String(index + 1).padStart(2, "0")}</div>

      <div>
        <span className="smart-area-card__eyebrow">{area.eyebrow}</span>
        <h3>{area.title}</h3>
        <p>{area.text}</p>

        <ul>
          {area.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function AreasSection() {
  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container">
        <div className="smart-section__header smart-section__header--center">
          <span className="smart-eyebrow">Zakres planowania</span>
          <h2>Jakie obszary warto przewidzieć?</h2>
          <p>
            Im wcześniej zaplanuje się automatykę, tym łatwiej uniknąć prowizorek, nadmiaru sterowników, nieczytelnych przycisków i późniejszych
            przeróbek instalacji.
          </p>
        </div>

        <div className="smart-areas-grid">
          {smartAreas.map((area, index) => (
            <SmartAreaCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EnergySection() {
  return (
    <section className="smart-section">
      <div className="smart-container smart-feature">
        <div className="smart-feature__content">
          <span className="smart-eyebrow">Przykład działania</span>
          <h2>Energia, ogrzewanie i rolety w jednej strategii.</h2>

          <p>
            W klasycznej instalacji każdy system działa według własnych zasad: pompa ciepła, klimatyzacja, rolety, fotowoltaika i ładowarka EV nie
            zawsze biorą pod uwagę ten sam kontekst.
          </p>

          <p>
            W dobrze zaprojektowanym Smart Home można zbudować logikę, która uwzględnia temperaturę, nasłonecznienie, obecność domowników, produkcję z
            PV, magazyn energii i zapotrzebowanie budynku.
          </p>

          <p className="smart-feature__note">
            Efekt: większy komfort cieplny, mniej ręcznej obsługi i lepsze wykorzystanie energii tam, gdzie ma to techniczny sens.
          </p>
        </div>

        <div className="smart-energy-map" aria-hidden="true">
          <span>PV</span>
          <span>Magazyn</span>
          <span>Pompa ciepła</span>
          <span>Rolety</span>
          <span>EV</span>
          <strong>Loxone</strong>
        </div>
      </div>
    </section>
  );
}

function ScenarioSection() {
  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Sceny i automatyzacje</span>
          <h2>Smart Home w praktyce</h2>
          <p>Dobrze zaprojektowana automatyka jest najbardziej odczuwalna w prostych, codziennych sytuacjach.</p>
        </div>

        <div className="smart-scenarios">
          {scenarios.map((item) => (
            <article className="smart-scenario-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="smart-section">
      <div className="smart-container smart-security">
        <div className="smart-security__content">
          <span className="smart-eyebrow">Bezpieczeństwo</span>
          <h2>Dedykowane systemy ochrony, wygodna obsługa domu.</h2>

          <p>
            Smart Home nie powinien zastępować profesjonalnego alarmu ani monitoringu. Te systemy muszą być stabilne i zaprojektowane do ochrony
            budynku.
          </p>

          <p>
            Automatyka może natomiast uprościć ich codzienną obsługę: podgląd z kamer, wideodomofon, brama, furtka, powiadomienia i tryby obecności
            mogą być dostępne w jednym, czytelnym systemie.
          </p>
        </div>

        <div className="smart-security__items" aria-label="Systemy bezpieczeństwa">
          <span>Alarm</span>
          <span>CCTV</span>
          <span>Wideodomofon</span>
          <span>Czujniki</span>
          <span>Brama / furtka</span>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container smart-process">
        <div className="smart-section__header">
          <span className="smart-eyebrow">Jak pracujemy</span>
          <h2>Od koncepcji do systemu, którego da się normalnie używać.</h2>
          <p>
            Najlepsze efekty daje rozmowa o automatyce przed wykonaniem instalacji. Wtedy można dobrze zaplanować przewody, rozdzielnię, sterowanie i
            późniejszą rozbudowę.
          </p>
        </div>

        <ol className="smart-process__list">
          {processSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="smart-final-cta">
      <div className="smart-container smart-final-cta__box">
        <span className="smart-eyebrow">Smart Home Kraków</span>
        <h2>Budujesz lub modernizujesz dom?</h2>

        <p>
          Opisz krótko inwestycję, etap prac i to, co chcesz osiągnąć. Sprawdzimy, jaki zakres automatyki ma sens technicznie, użytkowo i budżetowo.
        </p>

        <div className="smart-final-cta__actions">
          <Link to="/kontakt" className="smart-btn smart-btn--primary">
            Skontaktuj się w sprawie projektu
          </Link>
        </div>
      </div>
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
