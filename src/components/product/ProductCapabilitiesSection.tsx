import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './productCapabilitiesSection.module.scss'
import { PRODUCT_CAPABILITIES, PRODUCT_CAPABILITIES_IMAGE } from './productData'

const ProductCapabilitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useScrollReveal(copyRef, { variant: 'stagger', stagger: 0.12, y: 24, childSelector: `.${styles.block}` })
  useScrollReveal(mediaRef, { variant: 'fadeUp', y: 32, delay: 0.15 })

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Product capabilities">
      <div className={styles.inner}>
        <div ref={copyRef} className={styles.copy}>
          {PRODUCT_CAPABILITIES.map((item) => (
            <div key={item.title} className={styles.block}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))}
        </div>

        <div ref={mediaRef} className={styles.media}>
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
