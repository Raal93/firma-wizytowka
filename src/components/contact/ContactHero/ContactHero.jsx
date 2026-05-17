import "./ContactHero.css";

export default function ContactHero() {
  const quickContactItems = [
    "masz projekt domu,",
    "jesteś przed tynkami,",
    "planujesz Loxone lub Smart Home,",
    "chcesz połączyć światło, rolety, ogrzewanie i energię,",
    "modernizujesz dom i chcesz uporządkować instalację.",
  ];

  return (
    <section className="contact-hero">
      <div className="contact-container contact-hero__grid">
        <div className="contact-hero__content contact-surface">
          <span className="contact-eyebrow">Kontakt</span>

          <h1>Masz projekt domu? Porozmawiajmy o Smart Home.</h1>

          <p>
            Napisz, na jakim etapie jest inwestycja i co chcesz zautomatyzować. Pomogę określić sensowny kierunek, zakres systemu i najlepszy moment
            na dalsze działania.
          </p>

          <div className="contact-hero__actions">
            <a href="tel:+48530128138" className="contact-button">
              Zadzwoń: 530 128 138
            </a>

            <a href="mailto:czajkowskismart@gmail.com" className="contact-button contact-button--secondary">
              Napisz e-mail
            </a>
          </div>
        </div>

        <aside className="contact-quick-card contact-surface">
          <span>Najlepiej odezwać się, gdy:</span>

          <ul>
            {quickContactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
