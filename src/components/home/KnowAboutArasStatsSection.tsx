import styles from './knowAboutArasStatsSection.module.scss'

const processSteps = [
  {
    number: '01',
    title: 'Capture',
    description:
      '150° FoV HDR camera + RADAR + IMU continuously stream environmental data at up to 30 FPS — capturing every vehicle, pedestrian, and obstacle in real-time.',
  },
  {
    number: '02',
    title: 'Perceive',
    description:
      'Perceiva™ CNN stack classifies vehicles, pedestrians, lanes, and hazards using our proprietary India Perception Model — trained on millions of Indian road scenarios.',
  },
  {
    number: '03',
    title: 'Predict',
    description:
      'Multi-zone collision prediction evaluates threat trajectory, closing speed, and time-to-impact. Continuous risk scoring across forward, rear, and blind-spot zones.',
  },
  {
    number: '04',
    title: 'Alert',
    description:
      'Haptic, visual, or audio alerts delivered to the rider in under 1 second — with automatic video freeze and cloud backup for accident evidence.',
  },
]

const KnowAboutArasStatsSection = () => {
  return (
    <section className={styles.section} aria-label="Know about ARAS">
      <div className={styles.inner}>
        <div className={styles.list} aria-label="ARAS workflow steps">
          {processSteps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.badge}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KnowAboutArasStatsSection

