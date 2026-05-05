import "./ServicesSmartHome.css";

function ServicesSmartHome() {
  const sections = [
    {
      eyebrow: "Energia",
      title: "Oszczędność energii bez rezygnacji z komfortu",
      icon: "🌿",
      text: [
        "Inteligentna instalacja pozwala połączyć ogrzewanie, klimatyzację, rekuperację, rolety, żaluzje i harmonogramy pracy budynku w jeden spójny system.",
        "Dom może reagować na temperaturę, porę dnia, obecność domowników i warunki zewnętrzne. System może otworzyć rolety, gdy słońce pomaga dogrzać pomieszczenie, albo zamknąć je wtedy, gdy pomieszczenie zaczyna się przegrzewać.",
        "To praktyczne podejście do zarządzania energią — zarówno zimą, jak i latem.",
      ],
      points: [
        "integrację pompy ciepła, pieca lub innego źródła ciepła",
        "sterowanie temperaturą w poszczególnych strefach",
        "współpracę z klimatyzacją i rekuperacją",
        "automatyczne sterowanie roletami i żaluzjami",
      ],
    },
    {
      eyebrow: "Światło",
      title: "Oświetlenie dopasowane do codziennego życia",
      icon: "💡",
      text: [
        "Dobrze zaprojektowane oświetlenie nie wymaga ciągłego klikania przełącznikami. System działa w tle i uruchamia odpowiednie sceny wtedy, gdy są potrzebne.",
        "Inne światło sprawdzi się rano, inne podczas gotowania, inne wieczorem, a jeszcze inne w nocy, gdy ktoś przechodzi korytarzem lub schodami.",
        "Automatyka pozwala ograniczyć liczbę włączników na ścianach i zastąpić je logicznymi scenami, które można później łatwo zmienić.",
      ],
      points: [
        "sceny świetlne dla kuchni, salonu, sypialni i korytarzy",
        "delikatne światło nocne po wykryciu obecności",
        "mniej przełączników i prostszą obsługę",
        "możliwość zmiany ustawień bez przerabiania instalacji",
      ],
    },
    {
      eyebrow: "Audio",
      title: "Multiroom Audio w wybranych strefach domu",
      icon: "🎵",
      text: [
        "System multiroom pozwala wygodnie zarządzać muzyką w różnych częściach domu. Salon, kuchnia, łazienka, taras czy sypialnia mogą działać jako osobne strefy audio.",
        "Domownicy mogą korzystać z panelu, telefonu lub ulubionych serwisów streamingowych, takich jak Spotify.",
        "To rozwiązanie, które poprawia codzienny komfort — od spokojnej muzyki rano, przez playlistę podczas gotowania, aż po nagłośnienie spotkania ze znajomymi.",
      ],
      points: [
        "podział domu na wygodne strefy audio",
        "sterowanie z aplikacji lub panelu",
        "obsługę playlist i serwisów streamingowych",
        "indywidualne ustawienia dla domowników",
      ],
    },
    {
      eyebrow: "Bezpieczeństwo",
      title: "Bezpieczeństwo oparte na dedykowanych systemach",
      icon: "🛡️",
      text: [
        "Podstawą zabezpieczenia domu powinny być systemy stworzone do tego celu. Dlatego alarm, monitoring CCTV, wideodomofon oraz czujniki zagrożeń powinny działać stabilnie i niezależnie.",
        "Rolą automatyki budynkowej jest ich wygodna integracja. Dzięki temu z jednej aplikacji możesz uzbroić alarm, podejrzeć kamery, sprawdzić wideodomofon, otworzyć furtkę albo bramę.",
        "Elementy systemów mogą też współpracować ze sobą. Czujki alarmowe mogą pomagać w wykrywaniu obecności, a dzwonek domofonu w trybie cichym może uruchomić tylko subtelne światło i powiadomienie na telefon.",
      ],
      points: [
        "alarm jako niezależny system bezpieczeństwa",
        "integrację CCTV, wideodomofonu, bramy i furtki",
        "czujniki zalania, dymu i gazów",
        "tryb cichy dla domowników i dzieci",
      ],
    },
  ];

  return (
    <section className="smart-details">
      <div className="smart-details__introText">
        <p className="smart-details__label">SZCZEGÓŁY OFERTY SMART HOME</p>

        <h1>Co daje inteligentna instalacja w praktyce?</h1>

        <p>
          Na tej podstronie znajdziesz szerszy opis możliwości systemu Smart Home. Poniżej pokazuję, jak automatyka może wspierać codzienne życie: od
          zarządzania energią, przez oświetlenie i audio, aż po integrację systemów bezpieczeństwa.
        </p>
      </div>

      <div className="smart-details__sections">
        {sections.map((section) => (
          <article className="smart-details__section" key={section.title}>
            <div className="smart-details__content">
              <p className="smart-details__eyebrow">{section.eyebrow}</p>

              <h2>
                <span>{section.icon}</span>
                {section.title}
              </h2>

              {section.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="smart-details__card">
              <h3>Co zyskujesz?</h3>

              <ul>
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="smart-details__wideBox">
        <div>
          <p className="smart-details__label">JEDNA APLIKACJA</p>

          <h2>Cały dom w jednym, przejrzystym systemie</h2>

          <p>
            Największą zaletą inteligentnej instalacji jest to, że poszczególne elementy domu nie działają osobno. Ogrzewanie, klimatyzacja,
            rekuperacja, rolety, światło, alarm, kamery i audio mogą ze sobą współpracować.
          </p>

          <p>
            Dzięki temu zarządzanie domem staje się prostsze, bardziej przewidywalne i łatwiejsze w dopasowaniu do zmieniających się potrzeb
            domowników.
          </p>
        </div>

        <div className="smart-details__appCard">
          <h3>Przykładowe sceny</h3>

          <div>
            <strong>Wyjście z domu</strong>
            <p>Gaszenie świateł, obniżenie temperatury i uzbrojenie alarmu.</p>
          </div>

          <div>
            <strong>Tryb nocny</strong>
            <p>Delikatne światło w korytarzu i ograniczone powiadomienia.</p>
          </div>

          <div>
            <strong>Upalny dzień</strong>
            <p>Zamknięcie rolet i wsparcie klimatyzacji, zanim dom się nagrzeje.</p>
          </div>
        </div>
      </div>

      <div className="smart-details__cta">
        <p className="smart-details__label">POROZMAWIAJMY O TWOIM DOMU</p>

        <h2>Chcesz przygotować dom pod inteligentną instalację?</h2>

        <p>
          Najlepszy moment na zaplanowanie automatyki to etap projektu, remontu lub modernizacji instalacji elektrycznej. Dzięki temu system można
          wykonać estetycznie, logicznie i z myślą o dalszej rozbudowie.
        </p>

        <a href="/kontakt" className="smart-details__button">
          Skontaktuj się i opowiedz o projekcie
        </a>
      </div>
    </section>
  );
}

export default ServicesSmartHome;
