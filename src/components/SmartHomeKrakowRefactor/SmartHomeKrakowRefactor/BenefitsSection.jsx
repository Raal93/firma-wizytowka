import "./BenefitsSection.css";

const benefits = [
  {
    number: "01",
    title: "Komfort bez ciągłego klikania",
    text: "Sceny i automatyzacje przejmują powtarzalne czynności: światło, rolety, temperatura, tryby domu i wybrane urządzenia.",
  },
  {
    number: "02",
    title: "Bezpieczeństwo w jednym widoku",
    text: "Alarm, monitoring, wideodomofon, brama, furtka i czujniki mogą być wygodnie obsługiwane z jednego miejsca.",
  },
  {
    number: "03",
    title: "Lepsze wykorzystanie energii",
    text: "Ogrzewanie, chłodzenie, rolety, wentylacja, PV i odbiorniki mogą pracować według obecności, pogody i zapotrzebowania domu.",
  },
  {
    number: "04",
    title: "System gotowy na zmiany",
    text: "Logikę scen, przycisków, harmonogramów i powiadomień można dopracować po realnym użytkowaniu domu.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container">
        <div className="smart-section__header smart-section__header--center">
          <span className="smart-eyebrow">Co zyskujesz?</span>
          <h2>Smart Home ułatwia codzienne życie zamiast dokładać kolejne aplikacje.</h2>
          <p>
            Największą wartością nie jest sama technologia. Ważne jest to, że dom działa logicznie, przewidywalnie i pasuje do Twojego stylu życia.
          </p>
        </div>

        <div className="smart-benefits-grid">
          {benefits.map((benefit) => (
            <article className="smart-card smart-benefit-card" key={benefit.number}>
              <span>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
