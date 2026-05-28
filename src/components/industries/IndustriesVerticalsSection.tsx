import styles from './industriesVerticalsSection.module.scss'
import stackVisual from '../../assets/images/videos1.png'

const verticals = [
  {
    number: '01',
    kicker: 'SAFE & SECURE MOBILITY',
    title: 'Two-Wheeler ARAS',
    description:
      "India's first Advanced Rider Assistance System — bringing the same safety intelligence that protects car drivers to the 220M+ two-wheeler riders across the country. Our edge AI perception system provides real-time collision alerts, blind spot detection, and accident evidence recording.",
    features: [
      { label: 'Forward Collision Warning' },
      { label: 'Blind Spot Detection' },
      { label: 'Unsafe Overtaking Alert' },
      { label: 'Continuous Dash Recording' },
      { label: 'Video Freeze on Impact' },
      { label: 'Edge AI - No Cloud Dependency' },
    ],
    media: true,
    bg: 'light',
  },
  {
    number: '02',
    kicker: 'SMART SURVEILLANCE',
    title: 'Edge-native security intelligence.',
    description:
      "Traditional surveillance records video. Ours understands it. By running Perceiva™ stack advanced object detection, face recognition, and anomaly detection directly on edge hardware — delivering real-time intelligence without cloud latency or privacy concerns.",
    features: [
      { label: 'Real-time threat detection' },
      { label: 'Privacy-first on-device processing' },
      { label: 'Multi-camera, multi-zone analytics' },
      { label: 'Instant anomaly alerting' },
    ],
    bg: 'dark',
  },
  {
    number: '03',
    kicker: 'INDUSTRIAL AUTOMATION',
    title: 'Visual quality control at the edge.',
    description:
      'Our CV pipeline runs real-time defect detection on production lines — identifying surface cracks, dimensional anomalies, and assembly errors at speeds impossible for human inspectors. Powered entirely on Imedge® hardware, with no cloud dependency.',
    checklist: [
      {
        title: 'Defect Detection',
        text: 'Surface cracks, pits, and dimensional anomalies',
      },
      {
        title: 'Assembly Verification',
        text: 'Component placement and orientation validation',
      },
      {
        title: 'Real-Time Sorting',
        text: 'Automatic reject/pass classification at line speed',
      },
      {
        title: 'Edge Deployment',
        text: 'Complete on-device processing — zero cloud or network dependency',
      },
    ],
    media: true,
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
            {v.media && (
              <div className={styles.mediaSide}>
                <img
                  src={stackVisual}
                  alt="Real-Time, Secure AI Vision + Radar Perception Platform"
                  className={styles.mediaImage}
                />
              </div>
            )}

            <div className={styles.textSide}>
              <div className={styles.number}>{v.number}</div>
              <div className={styles.kicker}>{v.kicker}</div>
              <h2 className={styles.title}>{v.title}</h2>
              <p className={styles.desc}>{v.description}</p>

              {v.features && v.features.length > 0 && (
                <div className={`${styles.features} ${v.bg === 'light' ? styles.featuresList : styles.featureGrid}`}>
                  {v.features.map((f, fi) => (
                    <div key={fi} className={styles.featureItem}>
                      <span className={styles.featureLabel}>{f.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {v.checklist && (
                <div className={styles.checklist}>
                  {v.checklist.map((item, ci) => (
                    <div key={ci} className={styles.checkItem}>
                      <span className={styles.checkIcon} aria-hidden="true">✓</span>
                      <div>
                        <div className={styles.checkTitle}>{item.title}</div>
                        <div className={styles.checkText}>{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {v.bg === 'dark' && (
                <a href="/contact" className={styles.learnBtn}>
                  Learn More <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default IndustriesVerticalsSection
