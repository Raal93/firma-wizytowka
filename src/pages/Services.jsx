import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <h1>Usługi</h1>
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
      <Link to="/">Powrót na stronę główną</Link>
    </div>
  );
}
