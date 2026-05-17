import "./BenefitsSection.css";

const benefits = [
  {
    number: "01",
    title: "Komfort bez ciągłego klikania",
    text: "Raz stawione sceny i automatyzacje przejmują powtarzalne czynności: światło, rolety, temperaturę, tryby domu i wybrane urządzenia.",
  },
  {
    number: "02",
    title: "Bezpieczeństwo w jednym widoku",
    text: "Alarm, monitoring, wideodomofon, brama i furtka w jednym systemie — z obsługą na miejscu i z aplikacji w telefonie.",
  },
  {
    number: "03",
    title: "Lepsze wykorzystanie energii",
    text: "Ogrzewanie, chłodzenie, rolety, wentylacja, PV i wybrane odbiorniki mogą pracować zależnie od obecności ludzi, pogody, trybu domu oraz dostępnej nadwyżki energii.",
  },
  {
    number: "04",
    title: "System gotowy na zmiany",
    text: "Instalacja zaprojektowana z myślą o przyszłości pozwala dostosowywać system do zmieniających się potrzeb domowników oraz rozwijać go bez ingerencji w estetykę domu.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="smart-section smart-section--soft">
      <div className="smart-container">
        <div className="smart-section__header smart-section__header--center">
          <span className="smart-eyebrow">Co zyskujesz?</span>

          <h2>Smart Home ułatwia codzienne życie zamiast dokładać kolejne aplikacje.</h2>

          <div className="smart-fade-divider smart-fade-divider--center smart-fade-divider--wide smart-fade-divider--compact" aria-hidden="true">
            <span className="smart-fade-divider__chip">Komfort</span>
            <span className="smart-fade-divider__chip">Bezpieczeństwo</span>
            <span className="smart-fade-divider__chip">Energia</span>
          </div>
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
