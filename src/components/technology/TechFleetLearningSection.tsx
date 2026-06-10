import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './techFleetLearningSection.module.scss'
import { TECH_FLEET_IMAGE } from './technologyData'

const TechFleetLearningSection = () => {
  const copyRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useScrollReveal(copyRef, { variant: 'fadeUp', y: 24 })
  useScrollReveal(mediaRef, { variant: 'fadeUp', y: 32, delay: 0.12 })

  return (
    <section className={styles.section} aria-label="Fleet learning loop">
      <div className={styles.inner}>
        <div ref={copyRef}>
          <p className={styles.kicker}>Fleet Learning Loop</p>
          <h2 className={styles.title}>The data flywheel for Indian roads.</h2>
          <p className={styles.text}>
            Every device deployed contributes to a continuously improving perception model — trained,
            evaluated, and deployed
            <br />
            through our fleet learning loop.
          </p>
        </div>

        <div ref={mediaRef} className={styles.media}>
          <img
            src={TECH_FLEET_IMAGE}
            alt="EdgeVerse active learning loop and fleet architecture diagram"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default TechFleetLearningSection
