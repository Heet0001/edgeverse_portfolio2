import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './techPartnerIntroSection.module.scss'
import { TECH_PARTNER_INTRO } from './technologyData'

const TechPartnerIntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollReveal(sectionRef, { variant: 'fadeUp', y: 20 })

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Co-development partner">
      <div className={styles.inner}>
        <p className={styles.kicker}>Partnership</p>
        <h2 className={styles.tagline}>{TECH_PARTNER_INTRO.tagline}</h2>
        <p className={styles.lead}>{TECH_PARTNER_INTRO.lead}</p>
      </div>
    </section>
  )
}

export default TechPartnerIntroSection
