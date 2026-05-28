import styles from './techVerticalsSection.module.scss'
import roadBg from '../../assets/images/verticals_road_bg.png'

const verticals = [
  {
    icon: '🛡️',
    title: 'Safe/Secure Mobility',
    text: 'Real-time object detection, pedestrian recognition, lane keeping, forward collision avoidance, safety enhancement.',
  },
  {
    icon: '👁️',
    title: 'Smart Surveillance & Security',
    text: 'Instantaneous detection of intruders, suspicious behaviour, crowd analysis, and access control.',
  },
  {
    icon: '⚙️',
    title: 'Industrial Automation & Quality Control',
    text: 'Real-time defect detection, predictive maintenance, safety / robotic guidance, automation.',
  },
]

const TechVerticalsSection = () => {
  return (
    <section className={styles.section} aria-label="Verticals we focus on">
      <div className={styles.bgWrapper}>
        <img src={roadBg} alt="" className={styles.bgImage} aria-hidden="true" />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.inner}>
        <p className={styles.description}>
          Edgeverse's Edge AI Sensor Perception Platform brings the power of AI to
          the source of sensor data, enabling real-time, secure, and efficient
          insights in a wide array of applications that demand immediate action
          and data privacy. Verticals we focus on.
        </p>

        <div className={styles.grid}>
          {verticals.map((v, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{v.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardText}>{v.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechVerticalsSection
