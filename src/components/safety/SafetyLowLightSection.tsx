import styles from './safetyLowLightSection.module.scss'

const SafetyLowLightSection = () => {
  return (
    <section className={styles.section} aria-label="Low-light safety">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Alerts in Low-Light scenarios are extremely critical. This technology could save thousands
          of lives on Indian highways every year.
        </h2>
        <p className={styles.source}>
          — Dr. K.S. Radhakrishnan, Former ISRO Chief
        </p>
      </div>
    </section>
  )
}

export default SafetyLowLightSection
