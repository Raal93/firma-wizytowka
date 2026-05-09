import { Link } from "react-router-dom";
import "./Footer.css";

const navLinks = [
  { label: "Start", to: "/" },
  { label: "Smart Home Kraków", to: "/smart-home-krakow" },
  { label: "Realizacje", to: "/realizacje" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <strong>Smart Instalacje</strong>
          <p>Inteligentne instalacje, automatyka budynkowa i systemy bezpieczeństwa dla nowoczesnych domów.</p>
        </div>

        <nav className="footer-nav" aria-label="Nawigacja w stopce">
          <span>Nawigacja</span>

          {navLinks.map((link) =>
            link.isAnchor ? (
              <a href={link.to} key={link.label}>
                {link.label}
              </a>
            ) : (
              <Link to={link.to} key={link.label}>
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="footer-contact">
          <span>Kontakt</span>

          <a href="tel:+48530128138">530 128 138</a>
          <a href="mailto:czajkowskismart@gmail.com">czajkowskismart@gmail.com</a>

          <p>
            <Link to="/kontakt">Kraków i okolice</Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Smart Instalacje</span>
        <span>Smart Home</span>
      </div>
    </footer>
  );
}
