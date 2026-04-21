import styles from './aboutTimelineSection.module.scss'

const milestones = [
  {
    icon: '💡',
    title: 'Conceived',
    desc: 'The idea for an edge AI rider safety platform was born — addressing the critical gap in two-wheeler protection on Indian roads.',
  },
  {
    icon: '🔬',
    title: 'R&D and prototyping',
    desc: 'Deep R&D into computer vision, sensor fusion, and embedded AI — building the foundation for Perceiva™ on resource-constrained edge devices.',
  },
  {
    icon: '🛣️',
    title: 'Road testing',
    desc: 'Live road testing across Bengaluru — validating real-time collision detection, blind-spot monitoring, and alert responsiveness.',
  },
  {
    icon: '🚀',
    title: 'Manufacturing',
    desc: 'Scaling from prototype to production-ready hardware — Imedge® units assembled and quality-tested for OEM integration.',
  },
]

const AboutTimelineSection = () => {
  return (
    <section className={styles.section} aria-label="From idea to product">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>From idea to product.</h2>
        </div>

        <div className={styles.grid}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{m.icon}</div>
              <h3 className={styles.cardTitle}>{m.title}</h3>
              <p className={styles.cardDesc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTimelineSection
