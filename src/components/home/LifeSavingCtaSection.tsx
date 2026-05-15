import styles from './lifeSavingCtaSection.module.scss'

const LifeSavingCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Schedule a call">
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Life-saving intelligence for <span className={styles.accent}>every two-wheeler</span> on the road.
          </h2>
          <p className={styles.text}>
            Whether you're an OEM, Tier-1 supplier, cluster maker, or fleet operator — EdgeVerse's
            full-stack ARAS integrates directly into your vehicles. Real-time collision alerts, blind-spot
            detection, and predictive safety — all at the edge.
          </p>
        </div>

        <div className={styles.right}>
          <a className={styles.btn} href="/contact">
            <span>Schedule a Call</span>
            <span className={styles.btnIcon} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default LifeSavingCtaSection

