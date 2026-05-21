import styles from './productIntroSection.module.scss'

const ProductIntroSection = () => {
  return (
    <section className={styles.section} aria-label="Perceiva overview">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Perceiva™ ARAS learns to perceive using data</h2>
        <p className={styles.text}>
          Equipping vehicles with advanced human-like awareness. Designed for safety, it adapts to
          unexpected and unseen situations across India&apos;s most challenging roads.
        </p>
      </div>
    </section>
  )
}

export default ProductIntroSection
