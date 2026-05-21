import styles from './productFeatureShowcase.module.scss'
import type { PRODUCT_SHOWCASES } from './productData'

type Showcase = (typeof PRODUCT_SHOWCASES)[number]

type ProductFeatureShowcaseProps = {
  item: Showcase
}

const ProductFeatureShowcase = ({ item }: ProductFeatureShowcaseProps) => {
  const themeClass = item.theme === 'dark' ? styles.dark : styles.light

  return (
    <section id={item.id} className={`${styles.section} ${themeClass}`} aria-label={item.kicker}>
      <div className={styles.inner}>
        <div className={styles.media}>
          <img src={item.image} alt={item.imageAlt} className={styles.image} loading="lazy" />
        </div>

        <div className={styles.copy}>
          <div className={styles.number} aria-hidden="true">
            {item.number}
          </div>
          <div className={styles.kicker}>{item.kicker}</div>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.desc}>{item.description}</p>

          <div className={styles.stats}>
            {item.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductFeatureShowcase
