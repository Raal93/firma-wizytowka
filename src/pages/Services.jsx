import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import ServicesSmartHome from "../components/ServicesSmartHome/ServicesSmartHome.jsx";

export default function Services() {
  return (
    <div>
      <ServicesSmartHome />
      <Link to="/">Powrót na stronę główną</Link>
    </div>
  );
}
