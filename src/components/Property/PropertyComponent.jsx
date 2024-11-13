import styles from './PropertyComponent.module.css';
import trustimg from '../Property/trustimg.webp'

const PropertyComponent = () => {
    return (
        <div className={styles.propertyComponent}>
            <h1>We are a global, boutique real estate brokerage</h1>

            <div className={styles.content}>
                <div className={styles.textSection}>
                    <h2>The transfer of real estate</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.
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

            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.number}>12+</span>
                    <span className={styles.label}>Customers</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.number}>14+</span>
                    <span className={styles.label}>Offices</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.number}>10+</span>
                    <span className={styles.label}>Students</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyComponent;
