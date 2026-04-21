import styles from './techStatsSection.module.scss'

const stats = [
  {
    value: '30',
    unit: 'FPS',
    label: 'Real-time AI inference at the edge with no cloud round-trip.',
  },
  {
    value: '<1s',
    unit: '',
    label: 'Latency from sensor input to actionable alert output.',
  },
  {
    value: '100%',
    unit: '',
    label: 'On-device processing. Zero cloud dependency.',
  },
]

const TechStatsSection = () => {
  return (
    <section className={styles.section} aria-label="Platform statistics">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Processing at the<br />
            source.{' '}
            <span className={styles.accent}>Zero cloud<br />dependency.</span>
          </h2>
        </div>

        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div className={styles.stat} key={s.value}>
              <div className={styles.statValue}>
                {s.value}
                {s.unit && <span className={styles.statUnit}>{s.unit}</span>}
              </div>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStatsSection
