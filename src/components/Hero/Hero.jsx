import "./Hero.css";
import hero from "../../assets/images/hero1.jpg";
import heroSm from "../../assets/images/heroSm.jpg";
import { Link } from "react-router-dom";
import { House, ShieldCheck, Zap, Settings2 } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__label">SMART INSTALACJE</p>
        <p className="hero__name"> Mateusz Czajkowski</p>

        <h1>
          Inteligentne instalacje.
          <br />
          Technologia, która pracuje <span>dla Ciebie.</span>
        </h1>

        <p className="hero__text">
          Projektujemy i wdrażamy systemy Smart Home oraz automatykę budynkową, które integrują oświetlenie, ogrzewanie, rolety, bezpieczeństwo i
          zarządzanie energią w jeden spójny ekosystem.
        </p>

        <div className="hero__tiles">
          <div className="hero__tile">
            <div className="hero__icon">
              <House size={30} strokeWidth={1.8} />
            </div>
            <h3>Smart Home</h3>
            <p>Loxone, automatyka, sceny</p>
          </div>

          <div className="hero__tile">
            <div className="hero__icon">
              <ShieldCheck size={30} strokeWidth={1.8} />
            </div>
            <h3>Bezpieczeństwo</h3>
            <p>Alarm, monitoring</p>
          </div>

          <div className="hero__tile">
            <div className="hero__icon">
              <Zap size={30} strokeWidth={1.8} />
            </div>
            <h3>Oszczędność energii</h3>
            <p>Ogrzewanie, rolety, oświetlenie</p>
          </div>

          <div className="hero__tile">
            <div className="hero__icon">
              <Settings2 size={30} strokeWidth={1.8} />
            </div>
            <h3>Kompleksowa obsługa</h3>
            <p>Projekt, montaż, serwis</p>
          </div>
        </div>

        <div className="hero__buttons">
          <Link to="/kontakt" className="hero__button hero__button--primary">
            Bezpłatna wycena
          </Link>
          <a href="tel:+48530128138" className="hero__button hero__button--secondary">
            Zadzwoń: 530 128 138
          </a>
        </div>

        <div className="hero__trust">
          <span>
            <Link to="/kontakt">Kraków i okolice</Link>
          </span>
          <span>Terminowa realizacja</span>
          <span>Estetyczne i trwałe wykonanie</span>
        </div>
      </div>

      <div className="hero__image">
        <picture>
          <source media="(max-width: 1000px)" srcSet={heroSm} />
          <img src={hero} alt="Rozdzielnia elektryczna smart home" className="hero__image" />
        </picture>
      </div>
    </section>
  );
}

export default Hero;
