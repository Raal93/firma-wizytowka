import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-container">
        <div className="contact-hero__card contact-surface">
          <div className="contact-hero__content">
            <span className="contact-eyebrow">Kontakt</span>

            <h1>Porozmawiajmy o Twojej instalacji</h1>

            <p>Zadzwoń lub opisz swoją inwestycję w formularzu.</p>
          </div>

          <div className="contact-hero__visual" aria-hidden="true">
            <div className="contact-hero__glow"></div>

            <div className="contact-hero__mini-card">
              <span>Telefon</span>
              <strong>+48 530 128 138</strong>
            </div>

            <div className="contact-hero__line contact-hero__line--one"></div>
            <div className="contact-hero__line contact-hero__line--two"></div>
            <div className="contact-hero__dot contact-hero__dot--one"></div>
            <div className="contact-hero__dot contact-hero__dot--two"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
