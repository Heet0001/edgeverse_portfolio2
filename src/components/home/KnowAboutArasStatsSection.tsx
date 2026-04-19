import styles from './knowAboutArasStatsSection.module.scss'

const KnowAboutArasStatsSection = () => {
  return (
    <section className={styles.section} aria-label="Know about ARAS">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.kicker}>KNOW ABOUT ARAS</div>
          <h2 className={styles.title}>What is ARAS?</h2>
          <p className={styles.text}>
            ARAS (Advanced Rider Assistance Systems) enhance motorcycle rider
            safety using cameras, IMUs, and intelligent algorithms to deliver{' '}
            <strong>real-time collision alerts</strong> — helping riders avoid
            accidents and reduce fatigue.
          </p>
        </div>

        <div className={styles.stats} aria-label="ARAS impact statistics">
          <div className={styles.stat}>
            <div className={styles.value}>44%</div>
            <div className={styles.label}>
              of road fatalities are motorcyclists in India
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.value}>27×</div>
            <div className={styles.label}>
              more likely to result in fatality vs cars
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.value}>70%</div>
            <div className={styles.label}>
              accident avoidance via predictive alerts
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowAboutArasStatsSection

