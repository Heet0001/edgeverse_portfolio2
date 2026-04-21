import styles from './safetyCtaSection.module.scss'

const SafetyCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Call to action">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Let's make roads <span className={styles.accent}>safer together.</span>
          </h2>
          <p className={styles.subtitle}>
            EdgeVerse's ARAS can be integrated into any two-wheeler for life-saving collision alerts — protecting riders on every commute.
          </p>
        </div>
        <div className={styles.action}>
          <a href="/contact" className={styles.button}>
            Schedule a Call <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default SafetyCtaSection
