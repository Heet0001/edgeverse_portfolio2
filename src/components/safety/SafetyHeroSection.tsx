import styles from './safetyHeroSection.module.scss'
import heroBg from '../../assets/images/hero.png'

const SafetyHeroSection = () => {
  return (
    <section className={styles.section} aria-label="Safety hero">
      <div className={styles.bgComposite} aria-hidden="true">
        <img src={heroBg} alt="" className={styles.bgImage} />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.kicker}>SAFETY</div>
        <h1 className={styles.heading}>
          Every millisecond<br />counts.
        </h1>
        <p className={styles.subtitle}>
          Our Perceiva™ ARAS detects threats and delivers life-saving
          alerts in under one second — leveraging edge AI for real-time
          situational awareness in the most demanding road conditions.
        </p>
      </div>
    </section>
  )
}

export default SafetyHeroSection
