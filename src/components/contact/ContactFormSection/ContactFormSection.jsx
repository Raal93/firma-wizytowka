import "./ContactFormSection.css";

export default function ContactFormSection() {
  const contactHints = [
    "Czy budujesz nowy dom, czy modernizujesz istniejący?",
    "Na jakim etapie jest inwestycja?",
    "Czy masz projekt instalacji elektrycznej?",
    "Czy interesuje Cię Loxone?",
    "Co chcesz zautomatyzować: światło, rolety, ogrzewanie, energia, alarm, audio?",
  ];

  return (
    <section className="contact-form-section">
      <div className="contact-container contact-form-layout">
        <form id="formularz" className="contact-form contact-surface">
          <span className="contact-eyebrow">Formularz</span>
          <h2>Napisz do nas</h2>

          <div className="contact-form-grid">
            <label>
              Imię
              <input type="text" name="name" placeholder="Wpisz imię" />
            </label>

            <label>
              Telefon
              <input type="tel" name="phone" placeholder="Wpisz numer telefonu" />
            </label>

            <label>
              E-mail
              <input type="email" name="email" placeholder="Wpisz adres e-mail" />
            </label>

            <label>
              Lokalizacja inwestycji
              <input type="text" name="location" placeholder="Np. Kraków, Wieliczka, Niepołomice" />
            </label>

            <label>
              Etap inwestycji
              <select name="stage" defaultValue="">
                <option value="" disabled>
                  Wybierz etap
                </option>
                <option value="projekt">Mam projekt domu</option>
                <option value="przed-tynkami">Jestem przed tynkami</option>
                <option value="budowa">Dom jest w budowie</option>
                <option value="remont">Robię generalny remont</option>
                <option value="gotowy-dom">Dom jest już zamieszkany</option>
                <option value="inne">Inny etap</option>
              </select>
            </label>

            <label>
              Główny temat
              <select name="topic" defaultValue="">
                <option value="" disabled>
                  Wybierz temat
                </option>
                <option value="smart-home-loxone">Kompletny Smart Home / Loxone</option>
                <option value="projekt-koncepcja">Koncepcja inteligentnej instalacji</option>
                <option value="przygotowanie-instalacji">Przygotowanie instalacji pod Smart Home</option>
                <option value="energia">Energia, PV, pompa ciepła, klimatyzacja</option>
                <option value="modernizacja">Modernizacja istniejącego domu</option>
                <option value="konsultacja">Konsultacja / nie wiem od czego zacząć</option>
              </select>
            </label>
          </div>

          <label>
            Opis inwestycji
            <textarea name="message" rows="6" placeholder="Opisz krótko dom, etap prac, oczekiwane funkcje i to, z czym potrzebujesz pomocy..." />
          </label>

          <button type="submit" className="contact-button">
            Wyślij zapytanie
          </button>

          <p className="contact-form__note">Formularz jest obecnie przygotowany jako frontend. Obsługę wysyłki można podpiąć później.</p>
        </form>

        <aside className="contact-form-aside contact-surface">
          <span className="contact-eyebrow">Co warto dopisać?</span>

          <h3>Im więcej konkretów, tym szybciej można ocenić temat.</h3>

          <ul>
            {contactHints.map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ul>

          <div className="contact-direct-box">
            <p>Wolisz bez formularza?</p>
            <a href="mailto:czajkowskismart@gmail.com">czajkowskismart@gmail.com</a>
            <a href="tel:+48530128138">530 128 138</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
