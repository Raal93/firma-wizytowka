import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <h1>Smart Instalacje Mateusz Czajkowski</h1>
        <h3>Instalacje elektryczne i inteligentna automatyka budynkowa</h3>
        <p>Solidne wykonanie, nowoczesne rozwiązania.</p>
        <Link to="/kontakt">Kontakt</Link>
      </section>

      <section>
        <h2>Usługi</h2>
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
        <Link to="/uslugi">Zobacz wszystkie</Link>
      </section>
    </>
  );
}
