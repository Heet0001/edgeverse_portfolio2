import styles from './aboutTimelineSection.module.scss'

const milestones = [
  {
    year: '2023',
    title: 'Founded',
    desc: 'Edgeverse founded in Bengaluru with a mission to bring ARAS technology to India’s 220M+ two-wheeler riders.',
  },
  {
    year: '2024',
    title: 'Platform Development',
    desc: 'Imedge hardware prototype completed. Perceiva software stack in development. First India Perception Model trained.',
  },
  {
    year: '2025',
    title: 'Road testing',
    desc: 'First on-road testing and validation across Bengaluru’s complex road conditions. OEM conversations initiated.',
  },
  {
    year: '2026',
    title: 'Market Entry',
    desc: 'Product deployment with OEM partners. Expansion into surveillance and industrial automation verticals.',
  },
]

const AboutTimelineSection = () => {
  return (
    <section className={styles.section} aria-label="From idea to product">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>OUR JOURNEY</div>
          <h2 className={styles.title}>From idea to product.</h2>
        </div>

        <div className={styles.grid}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.year}>{m.year}</div>
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
