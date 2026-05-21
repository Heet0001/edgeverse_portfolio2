import styles from './productHeroSection.module.scss'
import { PRODUCT_HERO_IMAGE } from './productData'

const ProductHeroSection = () => {
  return (
    <section id="page-hero" className={styles.section} aria-label="Product hero">
      <img className={styles.bgImage} src={PRODUCT_HERO_IMAGE} alt="" aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.badge}>Perceiva™ ARAS Platform</div>
        <h1 className={styles.heading}>Advanced AI technology for safer, smarter riding.</h1>
        <p className={styles.subtitle}>
          Enabling OEMs and cluster makers to unlock all levels of two-wheeler rider assistance
          at scale.
        </p>
        <a className={styles.cta} href="/contact">
          <span>Schedule a demo</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  )
}

export default ProductHeroSection
