import styles from './techAiInvestmentSection.module.scss'
import { TECH_AI_INVESTMENT_IMAGES } from './technologyData'

const TechAiInvestmentSection = () => {
  return (
    <section className={styles.section} aria-label="Investing in core AI capabilities">
      <div className={styles.inner}>
        <h2 className={styles.title}>Investing in core AI capabilities</h2>
        <p className={styles.subtitle}>
          Our technology opens the door to utilizing state-of-the-art AI for enhanced training,
          simulation, evaluation, and validation processes.
        </p>

        <div className={styles.grid}>
          <div className={styles.media}>
            <img
              src={TECH_AI_INVESTMENT_IMAGES.left}
              alt="Motorcycle HUD with perception overlay at night"
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={styles.media}>
            <img
              src={TECH_AI_INVESTMENT_IMAGES.right}
              alt="Urban traffic scene with AI detection overlays"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechAiInvestmentSection
