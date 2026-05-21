import styles from './techFleetLearningSection.module.scss'
import { TECH_FLEET_IMAGE } from './technologyData'

const TechFleetLearningSection = () => {
  return (
    <section className={styles.section} aria-label="Fleet learning loop">
      <div className={styles.inner}>
        <p className={styles.kicker}>Fleet Learning Loop</p>
        <h2 className={styles.title}>The data flywheel for Indian roads.</h2>
        <p className={styles.text}>
          Every device deployed contributes to a continuously improving perception model — trained,
          evaluated, and deployed
          <br />
          through our fleet learning loop.
        </p>

        <div className={styles.media}>
          <img
            src={TECH_FLEET_IMAGE}
            alt="Indian highway at night with fleet learning data network overlay"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default TechFleetLearningSection
