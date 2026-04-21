import styles from './careerWhySection.module.scss'

const reasons = [
  {
    number: '01',
    title: 'Real-World Impact',
    desc: 'Every line of code you write, every PCB layout, every model you train has a direct impact on rider safety. This isn\'t an exercise — it\'s life-saving technology for real-world riders.',
  },
  {
    number: '02',
    title: 'Deep Tech, Full Stack',
    desc: 'We build everything — custom silicon-level firmware, DSP and inference, sensor fusion algorithms, and production-hardened APIs. If you want engineering depth, this is it.',
  },
  {
    number: '03',
    title: 'Small Team, Big Ownership',
    desc: 'We value craftsmanship. You will have direct ownership of critical systems and work closely with the founding team — your skills and strategic thinking directly shape the technology.',
  },
  {
    number: '04',
    title: 'India-First Mission',
    desc: 'We\'re building technology for India\'s roads — for Indian hands, Indian conditions, and Indian riders. You become more than a builder, and each role is part of something bigger.',
  },
]

const CareerWhySection = () => {
  return (
    <section className={styles.section} aria-label="Why EdgeVerse">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>WHY EDGEVERSE</div>
          <h2 className={styles.title}>Not just another startup.</h2>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.number}>{r.number}</div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerWhySection
