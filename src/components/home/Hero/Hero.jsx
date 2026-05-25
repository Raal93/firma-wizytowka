import "./Hero.css";
import hero from "../../../assets/images/hero1.jpg";
import heroSm from "../../../assets/images/heroSm.jpg";
import { Link } from "react-router-dom";
import { House, ShieldCheck, Zap, Settings2, ArrowRight, MapPin } from "lucide-react";

const heroTiles = [
  {
    icon: House,
    title: "Smart Home",
    text: "Loxone, sceny, oświetlenie",
  },
  {
    icon: ShieldCheck,
    title: "Bezpieczeństwo",
    text: "Alarm, CCTV, wideodomofon",
  },
  {
    icon: Zap,
    title: "Energia",
    text: "Ogrzewanie, rolety, PV",
  },
  {
    icon: Settings2,
    title: "Infrastruktura",
    text: "Okablowanie, sieć, rozdzielnia",
  },
];

function Hero() {
  return (
    <section className="hero">
      <div className="hero__decor hero__decor--one" />
      <div className="hero__decor hero__decor--two" />

      <div className="hero__content">
        <div className="hero__eyebrow-row">
          <p className="hero__label">SMART INSTALACJE</p>

          <Link to="/kontakt" className="hero__location">
            <MapPin size={15} strokeWidth={2} />
            Kraków i okolice
          </Link>
        </div>

        <p className="hero__name">Mateusz Czajkowski</p>

        <h1>
          Smart Home - instalacje, które pracują <span>jako jeden system.</span>
        </h1>

        <p className="hero__text">
          Projektujemy i wykonujemy automatykę Loxone oraz instalacje techniczne dla nowoczesnych domów — od koncepcji, przez okablowanie i montaż, po
          uruchomienie systemu.
        </p>

        <div className="hero__buttons">
          <Link to="/kontakt#formularz" className="hero__button hero__button--primary">
            Poproś o wycenę
            <ArrowRight size={18} strokeWidth={2.2} />
          </Link>

          <a href="tel:+48530128138" className="hero__button hero__button--secondary">
            Zadzwoń: 530 128 138
          </a>
        </div>

        <div className="hero__tiles">
          {heroTiles.map(({ icon: Icon, title, text }) => (
            <article className="hero__tile" key={title}>
              <div className="hero__icon">
                <Icon size={28} strokeWidth={1.8} />
              </div>

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="hero__trust">
          <span>Projekt techniczny</span>
          <span>Estetyczny montaż</span>
          <span>Uruchomienie i rozbudowa</span>
        </div>
      </div>

      <div className="hero__media">
        <div className="hero__media-card">
          <picture>
            <source media="(max-width: 1000px)" srcSet={heroSm} />
            <img src={hero} alt="Panel sterowania inteligentną instalacją smart home" className="hero__img" />
          </picture>

          <div className="hero__media-overlay" />

          <div className="hero__floating-card hero__floating-card--top">
            <span>Loxone</span>
            <strong>centrum automatyki</strong>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <span>Dom</span>
            <strong>światło · rolety · alarm · energia</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
