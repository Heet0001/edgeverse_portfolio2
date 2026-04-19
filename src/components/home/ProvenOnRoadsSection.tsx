import styles from './provenOnRoadsSection.module.scss'
import videos from '../../assets/images/videos.png'
import videos1 from '../../assets/images/videos1.png'

const ProvenOnRoadsSection = () => {
  return (
    <section className={styles.section} aria-label="Proven on Indian roads">
      <div className={styles.inner}>
        <div className={styles.panelDark}>
          <img className={styles.mediaImg} src={videos} alt="Perceiva road test videos collage" loading="lazy" />
        </div>

        <div className={styles.panelLight}>
          <div className={styles.kicker}>PROVEN ON INDIAN ROADS</div>
          <h2 className={styles.title}>
            Tested in the world’s most
            <br />
            challenging driving
            <br />
            environment.
          </h2>
          <p className={styles.text}>
            Our Perceiva&trade; stack is trained and validated on Indian road
            conditions — dense traffic, mixed vehicles, unpredictable behaviour,
            and low-light scenarios.
          </p>

          <ul className={styles.bullets}>
            <li>Blind Spot Detection (BSD) &amp; Lane Change Assist</li>
            <li>Forward Collision Warning (FCW)</li>
            <li>No False Overtaking Alerts</li>
            <li>Video Recording with Accident Freeze</li>
          </ul>

          <a className={styles.primaryBtn} href="/safety">
            Explore Safe
          </a>
        </div>

        <div className={styles.panelLight}>
          <div className={styles.kicker}>HARDWARE SPECS</div>
          <h2 className={styles.title}>
            Built for the edge. Ready for
            <br />
            integration.
          </h2>
          <p className={styles.text}>
            Imedge&reg; is designed for automotive and industrial edge environments.
            Customizable form factors with industry-standard interfaces.
          </p>

          <ul className={styles.bullets}>
            <li>Ambarella&reg; CV25 SoC · Arm&reg; 64-bit quad core</li>
            <li>Omni AR0147AT HDR Camera · 150&deg; FoV</li>
            <li>WiFi · BT5.2 · HDMI · GPS/GNSS · 6-Axis IMU</li>
            <li>DDR4/LPDDR4 up to 2GB · Micro-SD Support</li>
          </ul>

          <a className={styles.ghostBtn} href="/technology">
            Full Tech Specs <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.panelDark}>
          <img className={styles.mediaImg} src={videos1} alt="Perceiva perception platform overview" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default ProvenOnRoadsSection

