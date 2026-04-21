import styles from './techCtaSection.module.scss'

const TechCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Call to action">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Want to integrate our stack{' '}
            <span className={styles.accent}>into your product?</span>
          </h2>
          <p className={styles.subtitle}>
            We partner with OEMs and Tier-1s to co-develop custom perception solutions.
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
