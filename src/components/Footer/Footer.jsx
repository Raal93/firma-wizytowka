import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <strong>Smart Instalacje</strong>
          <p>Instalacje elektryczne i automatyka</p>
        </div>

        <div className="footer-right">
          <p>tel: +48 000 000 000</p>
          <p>email: smartinstalacje@firma.pl</p>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} Smart Instalacje</div>
    </footer>
  );
}
