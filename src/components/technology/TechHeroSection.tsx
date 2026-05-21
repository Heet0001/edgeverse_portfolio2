import styles from './techHeroSection.module.scss'
import { TECH_HERO_IMAGE } from './technologyData'

const TechHeroSection = () => {
  return (
    <section id="page-hero" className={styles.section} aria-label="Technology hero">
      <img className={styles.bgImage} src={TECH_HERO_IMAGE} alt="" aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.badge}>Technology</div>
        <h1 className={styles.heading}>
          Pioneering edge AI for
          <br />
          perception.
        </h1>
        <p className={styles.subtitle}>
          A vertically integrated hardware + software + AI platform
          <br />
          purpose-built for India&apos;s most challenging road conditions.
        </p>
      </div>
    </section>
  )
}

export default TechHeroSection
