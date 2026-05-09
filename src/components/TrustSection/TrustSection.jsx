import "./TrustSection.css";
import { Link } from "react-router-dom";

const trustCards = [
  {
    label: "Warsztat techniczny",
    title: "Nie tylko montaż, ale zrozumienie systemu",
    text: "Za realizację odpowiada Mateusz Czajkowski — inżynier elektrotechniki po AGH, z doświadczeniem w elektronice embedded. Dzięki temu instalacja jest spójnym systemem dopasowanym do budynku, automatyki i codziennego użytkowania.",
  },
  {
    label: "Dopasowanie i prostota",
    title: "System dopasowany do domowników",
    text: "Projektujemy automatykę wokół codziennego sposobu korzystania z domu. Funkcje, sceny i sterowanie dobieramy tak, aby system był logiczny, wygodny i prosty w obsłudze. Dzięki temu technologia wspiera domowników, zamiast wymagać od nich zmiany nawyków.",
  },
  {
    label: "Oszczędność energii",
    title: "Komfort, który pomaga obniżać koszty",
    text: "Projektujemy automatykę tak, aby dom działał efektywnie. Ogrzewanie, rolety, oświetlenie i wentylacja współpracują ze sobą, zamiast działać niezależnie. To przekłada się na większy komfort, lepszą kontrolę i realne oszczędności energii.",
  },
];

export default function TrustSection() {
  return (
    <section className="trust-section" id="dlaczego-smart-instalacje">
      <div className="trust-container">
        <div className="trust-layout">
          <div className="trust-impact">
            <span className="trust-eyebrow">Dlaczego warto nam zaufać?</span>

            <h2>
              Dlaczego <span>Smart Instalacje Mateusz Czajkowski</span> to dobry wybór?
            </h2>

            <p>
              Bo dobra instalacja smart home nie zaczyna się od aplikacji. Zaczyna się od poprawnego projektu, przemyślanego okablowania, stabilnej
              komunikacji i osoby, która rozumie cały system.
            </p>

            <div className="trust-impact-bottom">
              <Link to="/kontakt" className="trust-button">
                Porozmawiajmy o Twojej instalacji
              </Link>

              <p>Projekt • wykonanie • uruchomienie • dalsza rozbudowa</p>
            </div>
          </div>

          <div className="trust-cards">
            {trustCards.map((card) => (
              <article className="trust-card" key={card.label}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
