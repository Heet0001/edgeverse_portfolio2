import styles from './safetyThreatSection.module.scss'
import collisionImg from '../../assets/images/collision.png'

const features = [
  {
    icon: '🎯',
    label: 'Front collision monitoring',
  },
  {
    icon: '👁️',
    label: 'Blind spot detection',
  },
  {
    icon: '🔄',
    label: 'Lane change collision alerts',
  },
]

const SafetyThreatSection = () => {
  return (
    <section className={styles.section} aria-label="360° threat awareness">
      <div className={styles.inner}>
        <div className={styles.textSide}>
          <div className={styles.kicker}>360° COVERAGE</div>
          <h2 className={styles.title}>
            360° threat<br />awareness.
          </h2>
          <p className={styles.desc}>
            Perceiva™ delivers complete situational awareness through multi-camera
            monitoring — covering front collision zones, blind spots, and
            lane change collision zones for comprehensive rider protection.
          </p>

          <div className={styles.features}>
            {features.map((f, i) => (
              <div key={i} className={styles.feature}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <span className={styles.featureLabel}>{f.label}</span>
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
