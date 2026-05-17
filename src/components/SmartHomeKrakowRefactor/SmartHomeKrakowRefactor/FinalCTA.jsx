import { Link } from "react-router-dom";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="smart-final-cta">
      <div className="smart-container smart-card smart-final-cta__box">
        <span className="smart-eyebrow">Smart Home Kraków</span>
        <h2>Budujesz lub modernizujesz dom?</h2>
        <p>
          Opisz etap inwestycji, planowany zakres i to, co chcesz osiągnąć. Sprawdzimy, jaki poziom automatyki ma sens technicznie, użytkowo i
          budżetowo.
        </p>
        <div className="smart-final-cta__actions">
          <Link to="/kontakt" className="smart-btn smart-btn--primary">
            Skontaktuj się w sprawie projektu
          </Link>
        </div>
      </div>
    </section>
  );
}
