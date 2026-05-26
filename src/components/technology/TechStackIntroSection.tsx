import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './techStackIntroSection.module.scss'
import { TECH_STACK_FEATURES, TECH_STACK_SIDE_IMAGE } from './technologyData'

const TechStackIntroSection = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useScrollReveal(headerRef, { variant: 'fadeUp', y: 24 })
  useScrollReveal(copyRef, { variant: 'stagger', stagger: 0.12, y: 22, childSelector: `.${styles.block}` })
  useScrollReveal(mediaRef, { variant: 'fadeUp', y: 28, delay: 0.12 })

  return (
    <section className={styles.section} aria-label="Full-stack edge AI architecture">
      <div className={styles.inner}>
        <div ref={headerRef} className={styles.header}>
          <h2 className={styles.title}>
            Full-stack edge AI architecture
            <br />
            for real-world perception
          </h2>
          <p className={styles.lead}>
            EdgeVerse specializes in building AI perception models for two-wheelers. Our technology
            equips vehicles with an intelligent &apos;perception brain&apos; that can see, understand,
            and react to India&apos;s chaotic roads.
          </p>
        </div>

        <div className={styles.split}>
          <div ref={copyRef} className={styles.copy}>
            {TECH_STACK_FEATURES.map((item) => (
              <div key={item.title} className={styles.block}>
                <h3 className={styles.blockTitle}>{item.title}</h3>
                <p className={styles.blockDesc}>{item.description}</p>
              </div>
            ))}
          </div>

          <div ref={mediaRef} className={styles.media}>
            <img
              src={TECH_STACK_SIDE_IMAGE}
              alt="Imedge sensor unit mounted on a motorcycle handlebar"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackIntroSection
