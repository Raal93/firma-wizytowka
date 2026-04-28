import "./AboutSection.css";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="about-section" id="o-mnie">
      <div className="about-container">
        <div className="about-content">
          <span className="about-eyebrow">O mnie</span>

          <h2>Mateusz Czajkowski</h2>

          <p>Inżynier elektroniki (Politechnika Lubelska)</p>

          <p>
            Od 5 lat projektuję i realizuję instalacje techniczne dla domów i firm. Specjalizuję się w systemach, które działają stabilnie i są
            przygotowane na dalszą rozbudowę. Zrealizowałem kilkadziesiąt instalacji – od sieci LAN i WiFi po systemy CCTV, alarmowe oraz rozdzielnie
            elektryczne.
          </p>

          <p>
            Unikam rozwiązań, które działają tylko „na papierze”. Instalacje projektuję tak, aby były stabilne, czytelne i łatwe w serwisie po latach.
          </p>

          <div className="about-points">
            <div className="about-point">
              <span>01</span>
              <h3>Techniczne podejście</h3>
              <p>Dobór rozwiązań pod realne potrzeby budynku i użytkownika.</p>
            </div>

            <div className="about-point">
              <span>02</span>
              <h3>Estetyczne wykonanie</h3>
              <p>Porządek w instalacji, czytelność i logiczne prowadzenie przewodów.</p>
            </div>

            <div className="about-point">
              <span>03</span>
              <h3>Gotowość na rozbudowę</h3>
              <p>Instalacje projektowane tak, żeby można było je rozwijać etapami.</p>
            </div>
          </div>

          <Link to="/kontakt">
            <a href="#kontakt" className="about-button">
              Porozmawiajmy o instalacji
            </a>
          </Link>
        </div>

        <div className="about-image-wrap">
          <img src="/images/about/mati3.jpg" alt="Mateusz Czajkowski" className="about-image" />
        </div>
      </div>
    </section>
  );
}
