import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kontaktai</h3>
          <p>El. paštas: info@imone.lt</p>
          <p>Telefonas: +370 6XX XXXXX</p>
        </div>
        
        <div className="footer-section">
          <h3>Socialiniai tinklai</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Įmonės pavadinimas. Visos teisės saugomos.</p>
      </div>
    </footer>
  );
};

export default Footer;