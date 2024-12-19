import './Footer.css';
import logo from '../../assets/images/logo1.png';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt={t("Logo")} className="footer-logo" />
        <p className="footer-description">
          {t("Your trusted partner for seamless and insightful analytics solutions")}
        </p>
        <button className="footer-button">{t("Contact Us")}</button>
      </div>

      <div className="footer-right">
        <div className="footer-border">
          <div className="footer-contact">
            <div className='contact2'>
              <h3>{t("Contact")}</h3>
              <p>+213 797257041</p>
              <p>hello@yaqin.com</p>
            </div>
            <div className='footer-c'> 
              <p className="footer-copyright">
                {t("© 2024 YAQIN | All Rights Reserved.")}
              </p>
              <p>
                {t("Designed by")} <span className='name'>{t("SADDEDINE TAHAR AMINE")}</span> {t("with trust and precision and")} <span className='heart'>❤</span>
              </p>
            </div>
          </div>

          <div className="footer-social">
            <h3>{t("Follow Us")}</h3>
            <div className="footer-icons">
              <a href="#facebook" className="icon"><FaFacebook /></a>
              <a href="#instagram" className="icon"><IoLogoInstagram /></a>
              <a href="#twitter" className="icon"><FaXTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
