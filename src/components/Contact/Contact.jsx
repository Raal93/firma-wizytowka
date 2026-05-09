import { Link } from "react-router-dom";
import "./Contact.css";

const contactSteps = [
  {
    number: "01",
    title: "Wysyłasz zapytanie",
    text: "Krótko opisujesz dom, etap inwestycji i to, co chcesz zautomatyzować.",
  },
  {
    number: "02",
    title: "Ustalamy kontekst",
    text: "Rozmawiamy o projekcie, lokalizacji, instalacji, oczekiwaniach i możliwościach.",
  },
  {
    number: "03",
    title: "Dobieramy kierunek",
    text: "Określamy, czy potrzebna jest koncepcja, wizja lokalna, czy wstępna wycena.",
  },
  {
    number: "04",
    title: "Przechodzimy do konkretów",
    text: "Po akceptacji ustalamy zakres, priorytety i następny krok realizacji.",
  },
];

const contactHints = [
  "Czy budujesz nowy dom, czy modernizujesz istniejący?",
  "Na jakim etapie jest inwestycja?",
  "Czy masz projekt instalacji elektrycznej?",
  "Czy interesuje Cię Loxone?",
  "Co chcesz zautomatyzować: światło, rolety, ogrzewanie, energia, alarm, audio?",
];

export default function Kontakt() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container contact-hero__grid">
          <div className="contact-hero__content">
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

          <aside className="contact-quick-card">
            <span>Najlepiej odezwać się, gdy:</span>

            <ul>
              <li>masz projekt domu,</li>
              <li>jesteś przed tynkami,</li>
              <li>planujesz Loxone lub Smart Home,</li>
              <li>chcesz połączyć światło, rolety, ogrzewanie i energię,</li>
              <li>modernizujesz dom i chcesz uporządkować instalację.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-info">
            <span className="contact-eyebrow">Jak wygląda kontakt?</span>

            <h2>Krótko, konkretnie i bez zgadywania</h2>

            <div className="contact-steps">
              {contactSteps.map((step) => (
                <article className="contact-step" key={step.number}>
                  <strong>{step.number}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="contact-panels">
              <div className="contact-area">
                <h3>Obszar działania</h3>
                <p>Kraków i okolice do około 100 km. Dokładny dojazd i zakres prac ustalam indywidualnie, zależnie od inwestycji.</p>
              </div>

              <div className="contact-projects-box">
                <h3>Zobacz realizacje techniczne</h3>
                <p>
                  Realizacje pokazują podejście do instalacji, rozdzielni, monitoringu, wideodomofonów i infrastruktury potrzebnej pod nowoczesny
                  Smart Home.
                </p>

                <Link to="/realizacje" className="contact-link">
                  Zobacz realizacje
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-container contact-form-layout">
          <form id="formularz" className="contact-form">
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

          <aside className="contact-form-aside">
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
    </main>
  );
}
