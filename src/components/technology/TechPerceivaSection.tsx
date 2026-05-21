import styles from './techPerceivaSection.module.scss'
import detection from '../../assets/images/detection.png'
import detection1 from '../../assets/images/detection1.png'
import detection2 from '../../assets/images/detection2.png'

const TechPerceivaSection = () => {
  return (
    <section id="perceiva" className={styles.section} aria-label="Perceiva platform">
      <div className={styles.inner}>
        <div className={styles.mediaBlock}>
          <div className={styles.screenGrid}>
            <img src={detection} alt="Object detection output" className={styles.screenMain} loading="lazy" />
            <div className={styles.screenSub}>
              <img src={detection1} alt="Detection view 1" className={styles.screenSmall} loading="lazy" />
              <img src={detection2} alt="Detection view 2" className={styles.screenSmall} loading="lazy" />
            </div>
          </div>
        </div>

        <div className={styles.textBlock}>
          <div className={styles.kicker}>PERCEPTION PLATFORM</div>
          <h2 className={styles.heading}>
            Perceiva™ — AI Vision + Radar<br />
            Perception Platform
          </h2>
          <p className={styles.body}>
            Perceiva™ is the software intelligence layer of EdgeVerse's ARAS stack.
            Built specifically for two-wheeler and mobility safety, it delivers
            real-time perception using patented sensor fusion — combining front
            camera, rear camera, and radar inputs into a unified threat model.
          </p>

          <ul className={styles.list}>
            {[
              'Real-time object detection and classification',
              'Patented radar + camera sensor fusion',
              'India Perception Model (IPM) for local road conditions',
              'Forward collision, blind-spot and lane-change alerts',
              'Privacy-first: all processing on-device, zero cloud upload',
            ].map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.bullet} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechPerceivaSection
