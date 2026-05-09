import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import "./FinalCTA.css";

const cooperationSteps = [
  "Rozmowa o projekcie",
  "Ustalenie potrzeb i zakresu",
  "Dobór rozwiązań",
  "Akceptacja koncepcji",
  "Realizacja i uruchomienie",
];

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__container">
        <div className="final-cta__card">
          <div className="final-cta__content">
            <span className="final-cta__eyebrow">Kontakt</span>

            <h2>Skontaktuj się z nami</h2>

            <p>
              Opisz krótko, na jakim etapie jest inwestycja i jakie systemy chcesz połączyć. Wspólnie ustalimy, co ma sens technicznie, użytkowo i
              budżetowo.
            </p>

            <div className="final-cta__actions">
              <Link to="/kontakt" className="final-cta__button final-cta__button--primary">
                Kontakt
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>

              <a href="tel:+48530128138" className="final-cta__button final-cta__button--secondary">
                <Phone size={18} strokeWidth={2.2} />
                530 128 138
              </a>
              <Link to="/kontakt#formularz" className="final-cta__button final-cta__button--secondary">
                Napisz do nas
              </Link>
            </div>
          </div>

          <div className="final-cta__process">
            <span className="final-cta__process-label">Przebieg współpracy</span>

            <div className="final-cta__steps">
              {cooperationSteps.map((step, index) => (
                <div className="final-cta__step" key={step}>
                  <span className="final-cta__step-number">{String(index + 1).padStart(2, "0")}</span>

                  <div>
                    <CheckCircle2 size={17} strokeWidth={2.1} />
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
