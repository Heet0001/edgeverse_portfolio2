import styles from './aboutHeroSection.module.scss'
import heroImg from '../../assets/images/imedge_hardware.png'

const AboutHeroSection = () => {
  return (
    <section id="page-hero" className={styles.section} aria-label="About hero">
      <div className={styles.bgComposite} aria-hidden="true">
        <img src={heroImg} alt="" className={styles.bgImage} />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>Building the future</span>
          <span className={styles.heroTitleLineAccent}>of perception.</span>
        </h1>
        <span className={styles.heroRule} aria-hidden="true" />
      </div>
    </section>
  )
}

export default AboutHeroSection
