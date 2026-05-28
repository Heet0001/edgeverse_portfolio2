import styles from './industriesCtaSection.module.scss'

const IndustriesCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Call to action">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Explore integration <span className={styles.accent}>for your industry.</span>
          </h2>
          <p className={styles.subtitle}>
            We partner with OEMs, Tier-1 suppliers, and enterprise customers to deploy edge AI perception
            solutions — tailored for your infrastructure, latency, and compliance requirements.
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

export default IndustriesCtaSection
