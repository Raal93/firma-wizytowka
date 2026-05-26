import ContactInfoPanels from "../ContactInfoPanels/ContactInfoPanels";
import "./ContactProcess.css";

export default function ContactProcess() {
  const contactSteps = [
    {
      number: "01",
      title: "Wysyłasz zapytanie",
      text: "Opis domu, etap inwestycji i to, co chcesz zautomatyzować.",
    },
    {
      number: "02",
      title: "Ustalamy kontekst",
      text: "Rozmawiamy o projekcie, lokalizacji, instalacji, oczekiwaniach i możliwościach.",
    },
    {
      number: "03",
      title: "Ustalamy, co dalej",
      text: "Sprawdzamy, czy wystarczy rozmowa i wstępna wycena, czy potrzebna będzie wizja lokalna.",
    },
    {
      number: "04",
      title: "Przechodzimy do konkretów",
      text: "Po akceptacji ustalamy zakres, priorytety i następny krok realizacji.",
    },
  ];

  return (
    <section className="contact-info-section">
      <div className="contact-container">
        <div className="contact-info contact-surface">
          <span className="contact-eyebrow">Jak wygląda kontakt?</span>

          <h2>Najpierw poznajemy potrzeby, potem dobieramy rozwiązania</h2>

          <div className="contact-steps">
            {contactSteps.map((step) => (
              <article className="contact-step" key={step.number}>
                <strong>{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <ContactInfoPanels />
        </div>
      </div>
    </section>
  );
}
