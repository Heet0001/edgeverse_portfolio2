import styles from './techHeroSection.module.scss'
import imedgeHardware from '../../assets/images/imedge_hardware.png'

const TechHeroSection = () => {
  return (
    <section className={styles.section} aria-label="Technology hero">
      <div className={styles.bgComposite} aria-hidden="true">
        <img src={imedgeHardware} alt="" className={styles.bgHardware} />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.kicker}>TECHNOLOGY</div>
        <h1 className={styles.heading}>
          Edge AI ×<br />
          Perception.
        </h1>
        <p className={styles.subtitle}>
          A vertically integrated hardware-software ecosystem —<br />
          delivering real-time AI perception on-device for mobility,<br />
          security, and industrial automation.
        </p>
      </div>
    </section>
  )
}

export default TechHeroSection
