import styles from './aboutMissionSection.module.scss'

const AboutMissionSection = () => {
  return (
    <section className={styles.section} aria-label="Our mission">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>OUR MISSION</div>
          <h2 className={styles.title}>
            We exist to save lives through{' '}
            <span className={styles.accent}>intelligent perception.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.colTitle}>VISION</h3>
            <p className={styles.colText}>
              To become the global standard in edge AI perception for mobility — making
              every ride, drive, and journey safer through intelligent, real-time
              awareness at the device level.
            </p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.colTitle}>MISSION</h3>
            <p className={styles.colText}>
              Enable OEMs and cluster makers with Perceiva™ — a vertically integrated
              full-stack ARAS platform. We leverage patented sensor fusion to transform
              critical milliseconds into life-saving seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMissionSection
