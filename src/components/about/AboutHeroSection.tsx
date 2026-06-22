import styles from './aboutHeroSection.module.scss'
import heroImg from '../../assets/images/ChatGPT Image May 29, 2026, 03_08_18 AM.png'

const AboutHeroSection = () => {
  return (
    <section id="page-hero" className={styles.section} aria-label="About hero">
      <div className={styles.bgComposite} aria-hidden="true">
        <img src={heroImg} alt="" className={styles.bgImage} />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.badge}>Company</div>
        <h1 className={styles.heroTitle}>About Us</h1>
        <p className={styles.heroSubtitle}>
          Pioneering edge-native perception intelligence for mobility, industrial
          automation, and resource-constrained systems.
        </p>
        <span className={styles.heroRule} aria-hidden="true" />
      </div>
    </section>
  )
}

export default AboutHeroSection
