import styles from './safetyPerceptionSection.module.scss'

const steps = [
  {
    number: '01',
    title: 'Capture',
    desc: '150° FoV HDR camera + RADAR + IMU continuously stream environmental data at up to 30 FPS — capturing every vehicle, pedestrian, and obstacle in real-time.',
  },
  {
    number: '02',
    title: 'Perceive',
    desc: 'Perceiva™ CNN stack classifies vehicles, pedestrians, lanes, and hazards using our proprietary India Perception Model — trained on millions of Indian road scenarios.',
  },
  {
    number: '03',
    title: 'Predict',
    desc: 'Multi-zone collision prediction evaluates threat trajectory, closing speed, and time-to-impact. Continuous risk scoring across forward, rear, and blind-spot zones.',
  },
  {
    number: '04',
    title: 'Alert',
    desc: 'Haptic, visual, or audio alerts delivered to the rider in under 1 second — with automatic video freeze and cloud backup for accident evidence.',
  },
]

const SafetyPerceptionSection = () => {
  return (
    <section className={styles.section} aria-label="From perception to protection">
      <div className={styles.inner}>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SafetyPerceptionSection
