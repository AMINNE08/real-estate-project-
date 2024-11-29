import './Footer.css';
import logo from '../footer/logo1.png'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="footer-description">
        Your trusted partner for seamless and insightful analytics solutions
        </p>
        <button className="footer-button">Contact Us</button>
      </div>
      
      <div className="footer-right">
        <div className="footer-border">
          <div className="footer-contact">
            <div className='contact2'>
            <h3>Contact</h3>
            <p>+213 797257041</p>
            <p>hello@yaqin.com</p>
            </div>
            <div className='footer-c'> 
              <p className="footer-copyright">
            © 2024 YAQIN | All Rights Reserved. </p>
            <p> Designed by <span className='name'>SADDEDINE TAHAR AMINE</span> with trust and precision and <span className='heart'>❤</span>      </p>
            </div>
          </div>
         
          
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-icons">
              <a href="#facebook" className="icon"><FaFacebook /></a>
              <a href="#instagram" className="icon"><IoLogoInstagram/></a>
              <a href="#twitter" className="icon"><FaXTwitter/></a>
            </div>
          </div>
          
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;
