import styles from './industriesStatsSection.module.scss'

const stats = [
  { value: '3', label: 'Verticals Served' },
  { value: '1', label: 'Unified Platform' },
  { value: '30 FPS', label: 'Real-Time AI' },
  { value: '100%', label: 'Edge-Native' },
]

const IndustriesStatsSection = () => {
  return (
    <section className={styles.section} aria-label="Platform stats">
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.value}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IndustriesStatsSection
