import "./SmartAreasSection.css";

const areas = [
  {
    number: "01",
    eyebrow: "Światło i sceny",
    title: "Oświetlenie, które rozumie kontekst",
    text: "Inaczej działa kuchnia rano, inaczej salon wieczorem, a jeszcze inaczej korytarz w nocy.",
    points: ["sceny świetlne", "czujniki ruchu", "mniej przypadkowych przełączników"],
  },
  {
    number: "02",
    eyebrow: "Rolety i żaluzje",
    title: "Osłony jako część klimatu domu",
    text: "Rolety mogą wspierać komfort cieplny, prywatność i tryby dnia bez ręcznego sterowania każdym oknem.",
    points: ["ochrona przed przegrzaniem", "prywatność", "sceny poranne i wieczorne"],
  },
  {
    number: "03",
    eyebrow: "Ogrzewanie i chłodzenie",
    title: "Temperatura według obecności i stref",
    text: "System może sterować komfortem cieplnym zależnie od harmonogramu, obecności i sposobu używania pomieszczeń.",
    points: ["strefy grzewcze", "pompa ciepła / piec", "klimatyzacja i rekuperacja"],
  },
  {
    number: "04",
    eyebrow: "Energia",
    title: "PV, magazyn i odbiorniki w jednej strategii",
    text: "Fotowoltaika, magazyn energii, ładowarka EV i wybrane urządzenia mogą pracować bardziej świadomie.",
    points: ["wykorzystanie nadwyżek", "taryfy dynamiczne", "podgląd zużycia"],
  },
  {
    number: "05",
    eyebrow: "Bezpieczeństwo",
    title: "Alarm, CCTV i dostęp bez chaosu",
    text: "System ochrony powinien być dedykowany, ale jego obsługa może być wygodnie połączona ze smart home.",
    points: ["alarm i monitoring", "wideodomofon", "brama i furtka"],
  },
  {
    number: "06",
    eyebrow: "Infrastruktura",
    title: "Sieć, rozdzielnia i przewody pod rozbudowę",
    text: "Stabilny smart home zaczyna się od dobrze zaplanowanej instalacji, a nie od przypadkowych modułów dokładanych po fakcie.",
    points: ["LAN i Wi-Fi", "rozdzielnia", "rezerwy na przyszłość"],
  },
];

export default function SmartAreasSection() {
  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container">
        <div className="smart-section__header smart-section__header--center">
          <span className="smart-eyebrow">Zakres planowania</span>
          <h2>Jakie systemy warto przewidzieć już na starcie?</h2>
          <p>
            Ta sekcja porządkuje zakres rozmowy z klientem. Nie trzeba od razu robić wszystkiego, ale warto przygotować dom tak, aby późniejsza
            rozbudowa nie oznaczała kucia i prowizorek.
          </p>
        </div>

        <div className="smart-areas-grid">
          {areas.map((area) => (
            <article className="smart-card smart-area-card" key={area.number}>
              <div className="smart-area-card__number">{area.number}</div>
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
          ))}
        </div>
      </div>
    </section>
  );
}
