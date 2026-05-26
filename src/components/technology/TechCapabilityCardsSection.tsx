import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './techCapabilityCardsSection.module.scss'
import { TECH_CAPABILITY_CARDS } from './technologyData'

const TechCapabilityCardsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useScrollReveal(headerRef, { variant: 'fadeUp', y: 22 })
  useScrollReveal(gridRef, { variant: 'stagger', stagger: 0.1, y: 28 })

  return (
    <section className={styles.section} id="simulation" aria-label="Investing in core AI capabilities">
      <div className={styles.inner}>
        <div ref={headerRef}>
          <h2 className={styles.title}>Investing in core AI capabilities</h2>
          <p className={styles.subtitle}>
            Our technology opens the door to utilizing state-of-the-art AI for enhanced training,
            simulation, evaluation, and validation processes.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {TECH_CAPABILITY_CARDS.map((card) => (
            <article key={card.title} className={styles.card} data-reveal-item>
              <a className={styles.mediaLink} href={card.href}>
                <img src={card.image} alt={card.imageAlt} className={styles.image} loading="lazy" />
              </a>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
              <a className={styles.link} href={card.href}>
                {card.linkLabel}
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechCapabilityCardsSection
