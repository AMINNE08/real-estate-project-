import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import styles from "./PropertyComponent.module.css";
import trustimg from "../Property/trustimg.webp";

const PropertyComponent = () => {
  // Hook to detect when the stats section comes into view
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  return (
    <div className={styles.propertyComponent}>
      <h1>Empowering Trust in Real Estate Transactions</h1>

      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2>Your Gateway to Reliable Properties</h2>
          <p>
            Discover a platform designed to simplify property transactions and
            build confidence at every step. Whether your buying, selling, or
            exploring opportunities, our commitment to transparency and
            reliability ensures your experience is seamless and trustworthy. Let
            us guide you to your dream property with ease and certainty.
          </p>
          <div className={styles.buttons}>
            <button className={styles.bookNow}>Book Now!</button>
            <button className={styles.readMore}>Read More</button>
          </div>
        </div>

        <div className={styles.imageSection}>
          <img src={trustimg} alt="People discussing real estate" />
        </div>
      </div>

      {/* Stats Section with Counter */}
      <div className={styles.stats} ref={statsRef}>
        <div className={styles.statItem}>
          <span className={styles.number}>
            {statsInView && <CountUp start={0} end={600} duration={2} />}+
          </span>
          <span className={styles.label}>Properties</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.number}>
            {statsInView && <CountUp start={0} end={40} duration={2} />}+
          </span>
          <span className={styles.label}>Agents</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.number}>
            {statsInView && <CountUp start={0} end={800} duration={2} />}+
          </span>
          <span className={styles.label}>Users</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyComponent;
