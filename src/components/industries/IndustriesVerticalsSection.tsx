import styles from './industriesVerticalsSection.module.scss'

const verticals = [
  {
    number: '01',
    kicker: 'SAFE MOBILITY',
    title: 'Two-Wheeler ARAS',
    description:
      'Our full-stack ARAS with advanced AI vision and fusion delivers 30 FPS real-time collision alerts for two-wheelers — protecting riders in the most vulnerable vehicle category in Indian mobility.',
    features: [
      { label: '30 FPS', desc: 'Real-time inference' },
      { label: '3 camera', desc: 'Multi-angle perception' },
      { label: '< 100 ms', desc: 'Alert latency' },
    ],
    bg: 'light',
  },
  {
    number: '02',
    kicker: 'SMART SURVEILLANCE',
    title: 'Edge-native security intelligence.',
    description:
      'Deploy AI-powered surveillance that processes video feeds on-device — enabling real-time threat detection, anomaly identification, access control, and intelligent monitoring without cloud dependency.',
    features: [
      { label: 'Real-time threat detection', desc: '' },
      { label: 'On-device AI inference', desc: '' },
    ],
    bg: 'dark',
  },
  {
    number: '03',
    kicker: 'INDUSTRIAL AUTOMATION',
    title: 'Visual quality control at the edge.',
    description:
      'Our Edge AI vision and perception stack is engineered to power rapid, on-device defect identification — enabling manufacturers to catch flaws at the source, reduce waste, and maintain zero-defect production standards.',
    features: [],
    bg: 'light',
  },
]

const IndustriesVerticalsSection = () => {
  return (
    <section className={styles.section} aria-label="Industry verticals">
      {verticals.map((v, i) => (
        <div
          key={i}
          className={`${styles.vertical} ${v.bg === 'dark' ? styles.dark : styles.light}`}
        >
          <div className={styles.inner}>
            <div className={styles.textSide}>
              <div className={styles.number}>{v.number}</div>
              <div className={styles.kicker}>{v.kicker}</div>
              <h2 className={styles.title}>{v.title}</h2>
              <p className={styles.desc}>{v.description}</p>

              {v.features.length > 0 && (
                <div className={styles.features}>
                  {v.features.map((f, fi) => (
                    <div key={fi} className={styles.featureItem}>
                      <span className={styles.featureLabel}>{f.label}</span>
                      {f.desc && (
                        <span className={styles.featureDesc}>{f.desc}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <a href="/contact" className={styles.learnBtn}>
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default IndustriesVerticalsSection
