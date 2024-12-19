import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import styles from "./PropertyComponent.module.css";
import trustimg from "../../assets/images/trustimg.webp";
import { useTranslation } from "react-i18next";

const PropertyComponent = () => {
  const { t } = useTranslation(); // Import the translation hook
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  return (
    <div className={styles.propertyComponent}>
      <h1>{t('Empowering Trust in Real Estate Transactions')}</h1>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2>{t('Your Gateway to Reliable Properties')}</h2>
          <p>
            {t(
              'Discover a platform designed to simplify property transactions and build confidence at every step. Whether your buying, selling, or exploring opportunities, our commitment to transparency and reliability ensures your experience is seamless and trustworthy. Let us guide you to your dream property with ease and certainty.'
            )}
          </p>
          <div className={styles.buttons}>
            <button className={styles.bookNow}>{t('Book Now!')}</button>
            <button className={styles.readMore}>{t('Read More')}</button>
          </div>
        </div>

        <div className={styles.imageSection}>
          <img src={trustimg} alt={t('People discussing real estate')} />
        </div>
      </div>

      <div className={styles.stats} ref={statsRef}>
        <div className={styles.statItem}>
          <span className={styles.number}>
            {statsInView && <CountUp start={0} end={600} duration={2} />}+
          </span>
          <span className={styles.label}>{t('Properties')}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.number}>
            {statsInView && <CountUp start={0} end={40} duration={2} />}+
          </span>
          <span className={styles.label}>{t('Agents')}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.number}>
            {statsInView && <CountUp start={0} end={800} duration={2} />}+
          </span>
          <span className={styles.label}>{t('Users')}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyComponent;
