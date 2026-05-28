import styles from './arasTechnologySection.module.scss'
import aras1 from '../../assets/images/aras1.png'
import aras2 from '../../assets/images/aras2.png'

const ArasTechnologySection = () => {
  return (
    <section className={styles.section} aria-label="Our platform">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>OUR PLATFORM</div>
          <h2 className={styles.title}>
            Full-stack <span className={styles.accent}>ARAS technology</span>.
          </h2>
          <p className={styles.subtitle}>
            A vertically integrated hardware-software ecosystem engineered for the
            edge — delivering real-time perception without cloud dependency.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardMedia}>
              <img className={styles.cardImg} src={aras2} alt="Hardware platform overview" loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardKicker}>HARDWARE PLATFORM</div>
              <div className={styles.cardTitle}>Imedge&reg;</div>
              <p className={styles.cardText}>
                Real-time, secure AI vision hardware powered by dedicated CVflow&reg;
                architecture.
              </p>
              <div className={styles.pills} aria-label="Hardware highlights">
                <span className={styles.pill}>Ambarella CV25 SoC</span>
                <span className={styles.pill}>150&deg; FoV HDR Camera</span>
                <span className={styles.pill}>WiFi / BT5.2</span>
                <span className={styles.pill}>6-Axis IMU</span>
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardMedia}>
              <img className={styles.cardImg} src={aras1} alt="Perception platform overview" loading="lazy" />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardKicker}>PERCEPTION PLATFORM</div>
              <div className={styles.cardTitle}>Perceiva&trade;</div>
              <p className={styles.cardText}>
                Edge-native AI mobility stack with patented sensor fusion, India
                Perception Model, and real-time object tracking.
              </p>
              <div className={styles.pills} aria-label="Perception highlights">
                <span className={styles.pill}>Sensor Fusion</span>
                <span className={styles.pill}>India Perception Model</span>
                <span className={styles.pill}>Object Detection</span>
                <span className={styles.pill}>Privacy-First</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ArasTechnologySection

