import "./Benefits.css";

function Benefits() {
  const benefits = [
    {
      title: "Pełne bezpieczeństwo",
      text: "Alarm, monitoring CCTV i kontrola dostępu – większa kontrola nad domem lub firmą.",
      icon: "🛡️",
    },
    {
      title: "Stabilna infrastruktura",
      text: "Profesjonalna sieć LAN i WiFi, przygotowana pod kamery, automatykę i codzienne użytkowanie.",
      icon: "🌐",
    },
    {
      title: "Wygoda na co dzień",
      text: "Domofony, bramy, dostęp z telefonu i systemy połączone w jedną wygodną całość.",
      icon: "📱",
    },
    {
      title: "Smart Home Loxone",
      text: "Automatyczne sterowanie światłem, ogrzewaniem i roletami dopasowane do trybu życia.",
      icon: "⚙️",
    },
    {
      title: "Gotowe na przyszłość",
      text: "Instalacja elektryczna i niskoprądowa zaplanowana tak, aby można ją było łatwo rozbudować.",
      icon: "🔌",
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits__header">
        <p className="benefits__label">CO ZYSKUJESZ</p>
        <h2>Instalacja, która działa stabilnie dziś i jest gotowa na jutro</h2>
        <p>
          Łączymy instalacje elektryczne, systemy bezpieczeństwa, sieci oraz
          automatykę Loxone w praktyczne rozwiązania dla domu i firmy.
        </p>
      </div>

      <div className="benefits__grid">
        {benefits.map((item) => (
          <div className="benefits__card" key={item.title}>
            <div className="benefits__icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="benefits__cta">
  <a href="/uslugi" className="benefits__button">
    Zobacz szczegółową ofertę
  </a>
</div>
    </section>
  );
}

export default Benefits;