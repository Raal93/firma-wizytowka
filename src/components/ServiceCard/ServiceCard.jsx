import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({ service }) {
  return (
    <div>
      <Link className="service-link" to={`/uslugi/${service.slug}`}>
        <h3>{service.title}</h3>
      </Link>
      <p>{service.short}</p>
    </div>
  );
}
