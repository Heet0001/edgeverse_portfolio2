import styles from './aboutHeroSection.module.scss'
import heroImg from '../../assets/images/imedge_hardware.png'

const AboutHeroSection = () => {
  return (
    <section className={styles.section} aria-label="About hero">
      <div className={styles.bgComposite} aria-hidden="true">
        <img src={heroImg} alt="" className={styles.bgImage} />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        <div className={styles.kicker}>ABOUT US</div>
        <h1 className={styles.heading}>
          Building the future<br />of perception.
        </h1>
        <p className={styles.subtitle}>
          EdgeVerse is a vertically integrated edge AI company
          building India's first Advanced Rider Assistance System (ARAS)
          for two-wheelers — and perception platforms for industrial use.
        </p>
      </div>
    </section>
  )
}

export default AboutHeroSection
