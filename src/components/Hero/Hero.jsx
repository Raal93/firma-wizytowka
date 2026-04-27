import "./Hero.css";
import hero from "../../assets/images/hero.jpg";
import heroSm from "../../assets/images/heroSm.jpg";
import { Link } from "react-router-dom";



function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__label">SMART INSTALLATIONS</p>
        <p className="hero__name"> Mateusz Czajkowski</p>

        <h1>
          Inteligentne instalacje.
          <br />
          Technologia, która pracuje <span>dla Ciebie.</span>
        </h1>

        <p className="hero__text">
          Projektujemy i wykonujemy nowoczesne instalacje elektryczne oraz
          systemy Smart Home, zapewniające komfort, bezpieczeństwo i oszczędność
          energii.
        </p>

        <div className="hero__tiles">
          <div className="hero__tile">
            <div className="hero__icon">⌂</div>
            <h3>Smart Home</h3>
            <p>Loxone</p>
          </div>

          <div className="hero__tile">
            <div className="hero__icon">🛡</div>
            <h3>Bezpieczeństwo</h3>
            <p>Alarm, monitoring</p>
          </div>

          <div className="hero__tile">
            <div className="hero__icon">♻</div>
            <h3>Oszczędność energii</h3>
            <p>Ogrzewanie i światło</p>
          </div>

          <div className="hero__tile">
            <div className="hero__icon">⚙</div>
            <h3>Kompleksowa obsługa</h3>
            <p>Projekt, montaż, serwis</p>
          </div>
        </div>
        
        <div className="hero__buttons">
          <Link to="/kontakt">
          <a href="#kontakt" className="hero__button hero__button--primary">
            Bezpłatna wycena
          </a>
</Link>
          <a href="tel:+31612345678" className="hero__button hero__button--secondary">
            Zadzwoń: 530 128 138
          </a>
        </div>

        <div className="hero__trust">
          <span>Lublin / Kraków / okolice</span>
          <span>Szybka realizacja</span>
          <span>Gwarancja jakości</span>
        </div>
      </div>

      <div className="hero__image">
        <picture>
          <source
            media="(max-width: 1000px)"
            srcSet={heroSm}
          />
        <img
          src={hero}
          alt="Rozdzielnia elektryczna smart home"
          className="hero__image"
        />
        </picture>
      </div>
    </section>
  );
}

export default Hero;