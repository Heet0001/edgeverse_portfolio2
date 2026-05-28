import styles from './knowAboutArasStatsSection.module.scss'

const stats = [
  {
    value: '44%',
    label: 'of road fatalities are motorcyclists in India',
  },
  {
    value: '27×',
    label: 'more likely to result in fatality vs cars',
  },
  {
    value: '70%',
    label: 'accident avoidance via predictive alerts',
  },
] as const

const KnowAboutArasStatsSection = () => {
  return (
    <section className={styles.section} aria-label="Know about ARAS">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.kicker}>KNOW ABOUT ARAS</p>
            <h2 className={styles.title}>What is ARAS?</h2>
            <p className={styles.description}>
              ARAS (Advanced Rider Assistance Systems) enhance motorcycle rider safety using cameras,
              IMUs, and intelligent algorithms to deliver <strong>real-time collision alerts</strong>{' '}
              — helping riders avoid accidents and reduce fatigue.
            </p>
          </div>

          <div className={styles.stats} aria-label="ARAS impact statistics">
            {stats.map((stat) => (
              <div key={stat.value} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowAboutArasStatsSection

