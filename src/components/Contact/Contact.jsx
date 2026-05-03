import { Link } from "react-router-dom";
import "./Contact.css";

export default function Kontakt() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="contact-eyebrow">Kontakt</span>

          <h1>Masz projekt? Skontaktuj się.</h1>

          <p>Doradzę rozwiązanie, wstępnie ocenię zakres prac i pomogę dobrać odpowiedni kierunek realizacji.</p>

          <div className="contact-hero__actions">
            <a href="tel:+48123456789" className="contact-button">
              Zadzwoń: 530 128 138
            </a>

            <a href="mailto:kontakt@smartinstalacje.pl" className="contact-button contact-button--secondary">
              Napisz e-mail: czajkowskismart@gmail.com
            </a>
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-info">
            <span className="contact-eyebrow">Jak wygląda kontakt?</span>

            <h2>Krótko i konkretnie</h2>

            <div className="contact-steps">
              <div className="contact-step">
                <strong>01</strong>
                <p>Wysyłasz zapytanie lub dzwonisz.</p>
              </div>

              <div className="contact-step">
                <strong>02</strong>
                <p>Ustalamy potrzeby, lokalizację i zakres prac.</p>
              </div>

              <div className="contact-step">
                <strong>03</strong>
                <p>Przygotowuję wstępną wycenę lub umawiamy wizję lokalną.</p>
              </div>

              <div className="contact-step">
                <strong>04</strong>
                <p>Po akceptacji ustalamy termin realizacji.</p>
              </div>
            </div>

            <div className="contact-area">
              <h3>Obszar działania</h3>
              <p>Działam na terenie Krakowa oraz w promieniu około 100 km od Krakowa.</p>
            </div>

            <div className="contact-projects-box">
              <h3>Czy widziałeś już moje realizacje?</h3>
              <p>Zobacz przykładowe wykonane instalacje i sprawdź, jak wygląda podejście do pracy w praktyce.</p>

              <Link to="/realizacje" className="contact-link">
                Zobacz realizacje
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-section">
        <div className="contact-container">
          <form className="contact-form">
            <span className="contact-eyebrow">Formularz</span>
            <h2>Napisz do nas</h2>

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
              Rodzaj usługi
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Wybierz usługę
                </option>
                <option value="cctv">Monitoring CCTV</option>
                <option value="alarm">System alarmowy</option>
                <option value="domofon">Domofon / wideodomofon</option>
                <option value="lan">Sieć LAN / Wi-Fi</option>
                <option value="elektryka">Instalacja elektryczna</option>
                <option value="smart-home">Smart Home</option>
                <option value="inne">Inne</option>
              </select>
            </label>

            <label>
              Opis zlecenia
              <textarea name="message" rows="5" placeholder="Krótko opisz, czego dotyczy zapytanie..." />
            </label>

            <button type="submit" className="contact-button">
              Wyślij zapytanie
            </button>

            <p className="contact-form__note">Formularz jest obecnie przygotowany jako frontend. Obsługę wysyłki można podpiąć później.</p>
          </form>
        </div>
      </section>
      <Link to="/">Powrót na stronę główną</Link>
    </>
  );
}
