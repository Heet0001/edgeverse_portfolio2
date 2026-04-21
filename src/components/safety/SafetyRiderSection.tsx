import styles from './safetyRiderSection.module.scss'

const cards = [
  {
    number: '#1',
    title: 'Blind Spot Detection',
    desc: 'Real-time monitoring of adjacent lanes',
  },
  {
    number: '#2',
    title: 'Forward Collision Warning',
    desc: 'Predictive alerts for frontal threats',
  },
  {
    number: '#3',
    title: 'Lane Change Alerts',
    desc: 'Warnings during lane transitions',
  },
]

const SafetyRiderSection = () => {
  return (
    <section className={styles.section} aria-label="What riders ask for">
      <div className={styles.inner}>
        <div className={styles.textSide}>
          <div className={styles.kicker}>RIDER SURVEY</div>
          <h2 className={styles.title}>
            What riders <span className={styles.accent}>ask for</span><br />most.
          </h2>
          <p className={styles.desc}>
            Based on rider safety research across India.
          </p>
        </div>

        <div className={styles.cards}>
          {cards.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardNumber}>{c.number}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SafetyRiderSection
