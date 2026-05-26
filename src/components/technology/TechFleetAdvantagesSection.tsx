import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './techFleetAdvantagesSection.module.scss'
import { TECH_FLEET_ADVANTAGES } from './technologyData'

const TechFleetAdvantagesSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useScrollReveal(titleRef, { variant: 'fadeUp', y: 20 })
  useScrollReveal(gridRef, { variant: 'stagger', stagger: 0.08, y: 22, childSelector: `.${styles.card}` })

  return (
    <section className={styles.section} aria-label="Fleet learning advantages">
      <div className={styles.inner}>
        <h2 ref={titleRef} className={styles.title}>
          Advantages of EdgeVerse&apos;s Fleet Learning Loop
        </h2>
        <div ref={gridRef} className={styles.grid}>
          {TECH_FLEET_ADVANTAGES.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechFleetAdvantagesSection
