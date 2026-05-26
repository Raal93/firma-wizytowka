import { useRef, useState } from "react";
import "./ContactFormSection.css";

export default function ContactFormSection() {
  const startedAtRef = useRef(Date.now());

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
    website: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
    errors: [],
  });

  const [isSending, setIsSending] = useState(false);

  const contactTips = [
    "gdzie znajduje się inwestycja",
    "czy to nowy dom, remont czy modernizacja istniejącej instalacji",
    "na jakim etapie są prace: projekt, stan surowy, przed tynkami, wykończenie",
    "co chcesz zautomatyzować: światło, rolety, ogrzewanie, alarm, monitoring, audio lub energię",
    "czy masz projekt domu albo projekt instalacji elektrycznej",
    "kiedy planujesz rozpocząć prace",
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSending(true);
    setFormStatus({
      type: "",
      message: "",
      errors: [],
    });

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error("Brak VITE_API_URL w konfiguracji frontendu.");
      }

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          message: formData.message,
          website: formData.website,
          startedAt: startedAtRef.current,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setFormStatus({
          type: "error",
          message: data.message || "Formularz zawiera błędy.",
          errors: data.errors || [],
        });

        return;
      }

      setFormStatus({
        type: "success",
        message: data.message || "Wiadomość została wysłana.",
        errors: [],
      });

      setFormData({
        name: "",
        contact: "",
        message: "",
        website: "",
      });

      startedAtRef.current = Date.now();
    } catch (error) {
      console.error("Błąd formularza:", error);

      setFormStatus({
        type: "error",
        message: "Nie udało się wysłać formularza. Spróbuj ponownie później.",
        errors: [],
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="contact-form-section">
      <div className="contact-container contact-form-layout">
        <form id="formularz" className="contact-form contact-surface" onSubmit={handleSubmit} noValidate>
          <span className="contact-eyebrow">Formularz</span>

          <h2>Napisz do nas</h2>

          <div className="contact-fade-line" aria-hidden="true" />

          <div className="contact-tips contact-tips--mobile">
            <p>W wiadomości możesz krótko dopisać:</p>

            <ul>
              {contactTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="contact-hidden-field" aria-hidden="true">
            <label>
              Website
              <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex="-1" autoComplete="off" />
            </label>
          </div>

          <div className="contact-form-grid">
            <label>
              Imię
              <input type="text" name="name" placeholder="Wpisz imię" value={formData.name} onChange={handleChange} />
            </label>

            <label>
              Telefon lub e-mail
              <input type="text" name="contact" placeholder="Jak możemy się z Tobą skontaktować?" value={formData.contact} onChange={handleChange} />
            </label>
          </div>

          <label className="contact-message-field">
            Wiadomość
            <textarea
              name="message"
              rows="6"
              placeholder="Np. buduję dom pod Krakowem i chcę przygotować instalację pod smart home. Interesuje mnie światło, rolety i ogrzewanie..."
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          {formStatus.message && (
            <div className={`contact-form-status contact-form-status--${formStatus.type}`}>
              <p>{formStatus.message}</p>

              {formStatus.errors.length > 0 && (
                <ul>
                  {formStatus.errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <button type="submit" className="contact-button" disabled={isSending}>
            {isSending ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>

          <p className="contact-form__note">
            Twoja wiadomość zostanie przesłana w na naszą pocztę w postaci e-maila. Regularnie sprawdzamy skrzynkę i odpowiadamy w ciągu 24 godzin.
          </p>
          <p className="contact-form__note">Coś nie działa? Będziemy wdzięczni, jeśli dasz nam znać przy okazji najbliższej rozmowy.</p>

          <div className="contact-direct-box contact-direct-box--mobile">
            <p>Kontakt bezpośredni</p>
            <a href="mailto:czajkowskismart@gmail.com">czajkowskismart@gmail.com</a>
            <a href="tel:+48530128138">530 128 138</a>
          </div>
        </form>

        <aside className="contact-form-aside contact-surface">
          <div className="contact-tips">
            <p>W wiadomości możesz krótko dopisać:</p>

            <ul>
              {contactTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="contact-direct-box">
            {/* <p>Kontakt bezpośredni</p> */}
            <a href="mailto:czajkowskismart@gmail.com">czajkowskismart@gmail.com</a>
            <a href="tel:+48530128138">tel: +48 530 128 138</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
