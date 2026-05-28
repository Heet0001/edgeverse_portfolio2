import styles from './safetyThreatSection.module.scss'
import collisionImg from '../../assets/images/safety-collision-zones.png'

const features = [
  {
    icon: 'fcw',
    label: 'Front collision monitoring',
    sub: 'Real-time distance tracking with predictive alerting',
  },
  {
    icon: 'bsd',
    label: 'Blind spot detection',
    sub: '360° awareness for lane changes and merges',
  },
  {
    icon: 'record',
    label: 'Video Recording & Freeze',
    sub: 'Accident evidence with automatic cloud backup',
  },
]

const SafetyThreatSection = () => {
  return (
    <section className={styles.section} aria-label="360° threat awareness">
      <div className={styles.inner}>
        <div className={styles.textSide}>
          <div className={styles.kicker}>ALERT ZONES</div>
          <h2 className={styles.title}>
            360° threat<br />awareness.
          </h2>
          <p className={styles.desc}>
            Front, rear, and sideswipe zones are continuously monitored through
            multi-sensor fusion — giving riders unprecedented situational awareness.
          </p>

          <div className={styles.features}>
            {features.map((f, i) => (
              <div key={i} className={styles.feature}>
                <span className={`${styles.featureIcon} ${styles[f.icon]}`} aria-hidden="true" />
                <div>
                  <div className={styles.featureLabel}>{f.label}</div>
                  <div className={styles.featureSub}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageSide}>
          <img
            src={collisionImg}
            alt="Perceiva™ Predictive Collision Alert Zones showing front, rear, blind spot, and lane change detection zones"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

export default SafetyThreatSection
