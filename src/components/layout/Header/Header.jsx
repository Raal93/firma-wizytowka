import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { label: "Start", to: "/" },
  { label: "Smart Home Kraków", to: "/smart-home-krakow" },
  { label: "Realizacje", to: "/realizacje" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link to="/" className="site-header__brand" onClick={closeMenu}>
          <span>Smart</span> Instalacje
        </Link>

        <button
          className={`site-header__menu-button ${isOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Otwórz menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-header__nav ${isOpen ? "is-open" : ""}`}>
          <div className="site-header__links">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "site-header__link site-header__link--active" : "site-header__link")}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link to="/kontakt#formularz" className="site-header__cta" onClick={closeMenu}>
            Zapytaj o wycenę
          </Link>
        </nav>
      </div>
    </header>
  );
}
