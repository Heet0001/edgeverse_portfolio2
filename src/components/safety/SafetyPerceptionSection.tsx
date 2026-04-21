import styles from './safetyPerceptionSection.module.scss'

const steps = [
  {
    icon: '📷',
    title: 'Capture',
    desc: 'Our multi-camera system — front, rear, and wide-angle — captures a comprehensive view of the rider\'s surroundings in real-time, covering every critical blind spot.',
  },
  {
    icon: '🧠',
    title: 'Perceive',
    desc: 'Perceiva™ runs real-time AI models with low-latency sensor fusion, object detection, lane analysis, and trajectory prediction — all processed on-device.',
  },
  {
    icon: '⚡',
    title: 'Decide',
    desc: 'Our patented collision prediction algorithm evaluates threat levels in real-time — factoring in object speed, trajectory, distance, and rider behavior to make split-second safety decisions.',
  },
  {
    icon: '🔔',
    title: 'Alert',
    desc: 'Multimodal alerts — haptic vibration, LED indicators, and audio warnings — instantly notify the rider of detected threats, enabling proactive collision avoidance.',
  },
]

const SafetyPerceptionSection = () => {
  return (
    <section className={styles.section} aria-label="From perception to protection">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>HOW IT WORKS</div>
          <h2 className={styles.title}>From perception to protection.</h2>
          <p className={styles.subtitle}>
            Our AI-powered safety pipeline processes every frame in under 33ms — from raw sensor capture to
            life-saving alert delivery. Here's how Perceiva™ protects riders in real-time.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepIcon}>{step.icon}</div>
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
