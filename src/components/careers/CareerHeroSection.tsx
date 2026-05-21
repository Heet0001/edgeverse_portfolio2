import styles from './careerHeroSection.module.scss'

const CareerHeroSection = () => {
  return (
    <section id="page-hero" className={styles.section} aria-label="Careers hero">
      <div className={styles.inner}>
        <div className={styles.kicker}>CAREERS</div>
        <h1 className={styles.heading}>
          Build technology<br />that saves lives.
        </h1>
        <p className={styles.subtitle}>
          Join a team of engineers, researchers, and builders creating
          India's first Advanced Rider Assistance System. We're solving
          one of the most impactful problems in mobility safety.
        </p>
      </div>
    </section>
  )
}

export default CareerHeroSection
