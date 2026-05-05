import "./Benefits.css";

function Benefits() {
  const benefits = [
    {
      title: "Oszczędność energii",
      text: "Integracja ogrzewania, klimatyzacji, rekuperacji oraz rolet pozwala lepiej zarządzać temperaturą i ograniczać zużycie energii.",
      icon: "🌿",
      featured: true,
    },
    {
      title: "Inteligentne oświetlenie",
      text: "Sceny świetlne i automatyzacje dopasowane do codziennego życia domowników — wygodnie i bez zbędnych włączników.",
      icon: "💡",
    },
    {
      title: "Multiroom Audio",
      text: "Muzyka w różnych strefach domu, sterowanie z telefonu oraz dostęp do ulubionych serwisów streamingowych.",
      icon: "🎵",
    },
    {
      title: "Bezpieczeństwo",
      text: "Alarm, monitoring, wideodomofon i czujniki mogą działać razem w jednej wygodnej i przejrzystej aplikacji.",
      icon: "🛡️",
    },
    {
      title: "Elastyczny system",
      text: "Automatyka może rozwijać się razem z domem i łatwo dostosowywać do zmieniających się potrzeb użytkowników.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits__header">
        <p className="benefits__label">INTELIGENTNA INSTALACJA</p>

        <h2>Smart Home to coś więcej niż sterowanie światłem z telefonu</h2>

        <p>Nowoczesna automatyka budynkowa łączy komfort, oszczędność energii, bezpieczeństwo i codzienną wygodę w jednym spójnym systemie.</p>
      </div>

      <div className="benefits__layout">
        {benefits.map((item) => (
          <div className={`benefits__card ${item.featured ? "benefits__card--featured" : ""}`} key={item.title}>
            <div className="benefits__icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="benefits__summary">
        <h3>Jeden system, wiele możliwości</h3>

        <p>Smart Home integruje urządzenia i instalacje w domu, tworząc wygodny, nowoczesny i łatwy w obsłudze system dopasowany do domowników.</p>

        <a href="/uslugi" className="benefits__more">
          Dowiedz się więcej o inteligentnym domu →
        </a>
      </div>

      {/* <div className="benefits__cta">
        <a href="/uslugi" className="benefits__button">
          Zobacz szczegółową ofertę
        </a>
      </div> */}
    </section>
  );
}

export default Benefits;
