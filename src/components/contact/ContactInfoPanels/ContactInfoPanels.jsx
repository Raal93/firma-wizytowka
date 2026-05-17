import { Link } from "react-router-dom";
import "./ContactInfoPanels.css";

export default function ContactInfoPanels() {
  return (
    <div className="contact-panels">
      <div className="contact-area">
        <h3>Obszar działania</h3>
        <p>Kraków i okolice do około 100 km. Dokładny dojazd i zakres prac ustalam indywidualnie, zależnie od inwestycji.</p>
      </div>

      <div className="contact-projects-box">
        <h3>Zobacz realizacje techniczne</h3>
        <p>
          Realizacje pokazują podejście do instalacji, rozdzielni, monitoringu, wideodomofonów i infrastruktury potrzebnej pod nowoczesny Smart Home.
        </p>

        <Link to="/realizacje" className="contact-link">
          Zobacz realizacje
        </Link>
      </div>
    </div>
  );
}
