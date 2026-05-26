import CareerWaveMesh from './CareerWaveMesh'
import styles from './careerCtaSection.module.scss'

const CareerCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Send resume">
      <CareerWaveMesh className={styles.waveLeft} svgClassName={styles.waveSvg} />
      <CareerWaveMesh className={styles.waveRight} svgClassName={styles.waveSvg} />

      <div className={styles.inner}>
        <div className={styles.iconWrap}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.icon}>
            <rect x="4" y="8" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M9 8V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </div>

        <h2 className={styles.title}>
          Don't see <span className={styles.accent}>your role?</span>
        </h2>

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
