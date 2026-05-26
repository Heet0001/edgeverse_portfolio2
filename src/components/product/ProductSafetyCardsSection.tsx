import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './productSafetyCardsSection.module.scss'
import { PRODUCT_SAFETY_CARDS } from './productData'

const ProductSafetyCardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef, { variant: 'stagger', stagger: 0.14, y: 32 })

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Safety feature cards">
      <div className={styles.grid}>
        {PRODUCT_SAFETY_CARDS.map((card) => (
          <article key={card.id} className={styles.card} data-reveal-item>
            <img className={styles.cardBg} src={card.image} alt={card.imageAlt} loading="lazy" />
            <div className={styles.cardOverlay} aria-hidden="true" />

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDesc}>{card.description}</p>
              <a className={styles.cardCta} href={card.href}>
                Learn more
                <span className={styles.cardCtaArrow} aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductSafetyCardsSection
