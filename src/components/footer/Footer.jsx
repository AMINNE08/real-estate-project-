import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/path/to/logo.png" alt="Logo" className="footer-logo" />
        <p className="footer-description">
          The first free end-to-end analytics service for the site, designed to work with enterprises.
        </p>
        <button className="footer-button">Drop a line</button>
      </div>
      
      <div className="footer-right">
        <div className="footer-border">
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>+1 (323) 275-1718</p>
            <p>hello@logoipsum.com</p>
          </div>
          
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-icons">
              <a href="#instagram" className="icon">📸</a>
              <a href="#whatsapp" className="icon">📲</a>
              <a href="#telegram" className="icon">✈️</a>
            </div>
          </div>
        </div>
        
        <p className="footer-copyright">
          © 2023 — Copyright
        </p>
      </div>
    </footer>
  );
};

export default Footer;
