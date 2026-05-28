import styles from './techFullStackSection.module.scss'

const stacks = [
  {
    num: '01',
    title: 'Sensors',
    text: 'Camera + RADAR + IMU capture environmental data at 30 FPS with 150° FoV HDR imaging.',
  },
  {
    num: '02',
    title: 'Imedge®',
    text: 'Edge hardware platform powered by Ambarella CV25 with dedicated CVflow® CNN accelerator.',
  },
  {
    num: '03',
    title: 'Perceiva™',
    text: 'AI perception stack - object detection, classification, and India Perception Model inference.',
  },
  {
    num: '04',
    title: 'Sensor Fusion',
    text: 'Multi-sensor data merge for depth estimation, trajectory prediction, and threat scoring.',
  },
  {
    num: '05',
    title: 'Real-Time Alerts',
    text: 'Haptic, audio, and visual alerts delivered to the rider in under 1 second with video freeze.',
  },
]

const TechFullStackSection = () => {
  return (
    <section className={styles.section} aria-label="The full stack">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>SYSTEM ARCHITECTURE</div>
          <h2 className={styles.title}>The Full Stack</h2>
          <p className={styles.subtitle}>
            From raw sensor input to life-saving alerts - a complete perception
            pipeline running entirely on the edge.
          </p>
        </div>

        <div className={styles.grid}>
          {stacks.map((s) => (
            <article className={styles.card} key={s.num}>
              <div className={styles.cardNum}>{s.num}</div>
              <div className={styles.cardTitle}>{s.title}</div>
              <p className={styles.cardText}>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechFullStackSection
