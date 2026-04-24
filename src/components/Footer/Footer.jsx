import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <strong>Twoja Firma</strong>
          <p>Instalacje elektryczne i automatyka</p>
        </div>

        <div className="footer-right">
          <p>tel: +48 000 000 000</p>
          <p>email: kontakt@firma.pl</p>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} Twoja Firma</div>
    </footer>
  );
}
