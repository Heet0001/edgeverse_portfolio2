import styles from './industriesHeroSection.module.scss'

const IndustriesHeroSection = () => {
  return (
    <section className={styles.section} aria-label="Industries hero">
      <div className={styles.inner}>
        <div className={styles.kicker}>INDUSTRY</div>
        <h1 className={styles.heading}>
          One platform. Three<br />markets.
        </h1>
        <p className={styles.subtitle}>
          Our edge AI perception platform — Perceiva™ — deploys across mobility,
          surveillance, and industrial automation to deliver real-time, on-device
          AI inference at the point of action.
        </p>
      </div>
    </section>
  )
}

export default IndustriesHeroSection
