import styles from './productCapabilitiesSection.module.scss'
import { PRODUCT_CAPABILITIES, PRODUCT_CAPABILITIES_IMAGE } from './productData'

const ProductCapabilitiesSection = () => {
  return (
    <section className={styles.section} aria-label="Product capabilities">
      <div className={styles.inner}>
        <div className={styles.copy}>
          {PRODUCT_CAPABILITIES.map((item) => (
            <div key={item.title} className={styles.block}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.media}>
          <img
            src={PRODUCT_CAPABILITIES_IMAGE}
            alt="Motorcycle rider HUD with Perceiva perception overlay at night"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductCapabilitiesSection
