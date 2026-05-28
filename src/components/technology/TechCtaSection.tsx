import styles from './techCtaSection.module.scss'

const TechCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Call to action">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Ready to co-develop{' '}
            <span className={styles.accent}>with Perceiva™?</span>
          </h2>
          <p className={styles.subtitle}>
            We are your co-development partner — from sensing to deployment, built for OEM scale.
          </p>
        </div>
        <div className={styles.action}>
          <a href="/contact" className={styles.button}>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default TechCtaSection
