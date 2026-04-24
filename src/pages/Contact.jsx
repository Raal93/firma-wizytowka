import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>
      <p>tel: +48 000 000 000</p>
      <p>email: smartinstalacje@firma.pl</p>
      <Link to="/">Powrót na stronę główną</Link>
    </div>
  );
}
