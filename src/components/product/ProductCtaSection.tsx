import styles from './productCtaSection.module.scss'

const ProductCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Schedule a call">
      <div className={styles.inner}>
        <h2 className={styles.title}>Ready to make riding safer?</h2>
        <p className={styles.text}>
          Talk to our team about integrating Perceiva™ ARAS into your vehicles, fleet, or product
          roadmap.
        </p>
        <a className={styles.btn} href="/contact">
          <span>Schedule a call</span>
          <span className={styles.btnArrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  )
}

export default ProductCtaSection
