import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Start</Link>
        <Link to="/uslugi">Usługi</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}
