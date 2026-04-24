import { useParams } from "react-router-dom";
import { services } from "../data/services";
import { Link } from "react-router-dom";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <div>Nie znaleziono usługi</div>;

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <Link to="/">Powrót na stronę główną</Link>
    </div>
  );
}
