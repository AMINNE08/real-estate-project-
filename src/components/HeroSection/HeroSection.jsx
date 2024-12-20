import Typewriter from 'typewriter-effect';
import '../HeroSection/heroSection.css';
import heroimag from '../../assets/images/Final.png';
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
  const { t } = useTranslation(); // Import the translation hook
  return (
    <>
      <div className="hero-section">
        <div className="left">
        <h1>{t('Find Your Dream Property')}</h1>
          <h2 className="trust-section">
            {t('Your')} <span className="trustword">{t('Trusted')}</span> {t('Partner in Real Estate')}
            <svg
              className="blob-shape"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#6F2480"
                d="M8.5,6.2C8.5,13.1,4.2,26.2,-14.3,26.2C-32.7,26.2,-65.5,13.1,-65.5,6.2C-65.5,-0.7,-32.7,-1.3,-14.3,-1.3C4.2,-1.3,8.5,-0.7,8.5,6.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </h2>
          <h2 className="typewriter-line">
          {t('Let us help you')}{' '}
          <span className="typewriter">
              <Typewriter
                options={{
                  strings: [
                    t('buy'),
                    t('sell'),
                    t('rent'),
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                }}
              />
            </span>
          </h2>
          
        </div>
        <div className="right">
          <img src={heroimag} alt={t('Property')} className="floating-image" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
