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
        <h3>Nie widziałeś jeszcze naszych realizacji?</h3>
        <p>Zobacz, jak podchodzimy do instalacji, rozdzielni, monitoringu, wideodomofonów i infrastruktury pod nowoczesny Smart Home.</p>

        <Link to="/realizacje" className="contact-link">
          Zobacz realizacje
        </Link>
      </div>
    </div>
  );
}
