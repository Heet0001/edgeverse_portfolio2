import styles from './techFullStackSection.module.scss'

const stacks = [
  {
    num: '01',
    title: 'Software',
    text: 'Perceiva™ deep learning models for real-time object detection, classification and tracking.',
  },
  {
    num: '02',
    title: 'Imedge™',
    text: 'CV25 SoC-based hardware platform with dedicated CVflow® neural processing.',
  },
  {
    num: '03',
    title: 'Firmware AI',
    text: 'Edge-optimised firmware enabling zero-cloud inference at the sensor.',
  },
  {
    num: '04',
    title: 'Sensor Fusion',
    text: 'Patented multi-modal fusion combining camera, radar and IMU data streams.',
  },
  {
    num: '05',
    title: 'Stack + Platform',
    text: 'End-to-end vertically integrated ARAS stack ready for OEM and Tier-1 integration.',
  },
]

const TechFullStackSection = () => {
  return (
    <section className={styles.section} aria-label="The full stack">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>THE FULL STACK</div>
          <p className={styles.subtitle}>
            From tiny sensor to the riding surface — a complete perception
            platform running entirely on-the-edge.
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
