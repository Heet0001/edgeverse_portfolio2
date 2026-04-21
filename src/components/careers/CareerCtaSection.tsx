import styles from './careerCtaSection.module.scss'

const CareerCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Send resume">
      <div className={styles.inner}>
        <h2 className={styles.title}>Don't see your role?</h2>
        <p className={styles.subtitle}>
          We're always looking for exceptional talent. Send us your resume and tell us how
          you'd contribute to creating something world-class.
        </p>
        <a href="mailto:careers@edgeverse.ai" className={styles.button}>
          Send Resume <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default CareerCtaSection
