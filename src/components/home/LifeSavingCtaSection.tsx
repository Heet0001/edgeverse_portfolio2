import styles from './lifeSavingCtaSection.module.scss'

const LifeSavingCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Schedule a call">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Let&apos;s make roads <span className={styles.accent}>safer together.</span>
          </h2>
          <p className={styles.text}>
            Whether you&apos;re an OEM, Tier-1 supplier, or mobility partner — EdgeVerse
            perception intelligence integrates into any vehicle, anywhere in the world.
          </p>
        </div>

        <div className={styles.right}>
          <a className={styles.btn} href="/contact">
            <span>Schedule a Call</span>
            <span className={styles.btnArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default LifeSavingCtaSection
