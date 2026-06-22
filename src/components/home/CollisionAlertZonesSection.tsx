import styles from "./collisionAlertZonesSection.module.scss";
import collisionImg from "../../assets/images/collision.png";
import { useHomeContent } from "../../api/useHomeContent";
import { resolveMediaUrl } from "../../api/resolveMediaUrl";

const CollisionAlertZonesSection = () => {
  const { home } = useHomeContent();
  const resolved = resolveMediaUrl(home?.collisionImage);
  const imgSrc = resolved || collisionImg;
  const imgAlt =
    home?.collisionImageAlt || "Collision alert zones visualization";

  return (
    <section className={styles.section} aria-label="Core capability">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.kicker}>CORE CAPABILITY</div>
          <h2 className={styles.title}>
            Perceiva&trade;
            <br />
            Predictive
            <br />
            Collision Alert
            <br />
            Zones
          </h2>
          <p className={styles.text}>
            Multi-zone threat detection using front &amp; rear camera combined
            with RADAR. Real-time alerts for Forward Collision, Blind Spot, and
            Lane Change scenarios.
          </p>

          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.icon} aria-hidden="true" />
              <div>
                <div className={styles.itemTitle}>
                  Forward Collision Warning
                </div>
                <div className={styles.itemText}>
                  Real-time distance tracking with predictive alerting
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <span className={styles.icon} aria-hidden="true" />
              <div>
                <div className={styles.itemTitle}>Blind Spot Detection</div>
                <div className={styles.itemText}>
                  360&deg; awareness for lane changes and merges
                </div>
              </div>
            </li>
            <li className={styles.item}>
              <span className={styles.icon} aria-hidden="true" />
              <div>
                <div className={styles.itemTitle}>
                  Video Recording &amp; Freeze
                </div>
                <div className={styles.itemText}>
                  Accident evidence with automatic cloud backup
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <img
            className={styles.image}
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CollisionAlertZonesSection;
