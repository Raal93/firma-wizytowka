import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div>
      <Link to={`/uslugi/${service.slug}`}>
        <h3>{service.title}</h3>
      </Link>
      <p>{service.short}</p>
    </div>
  );
}
