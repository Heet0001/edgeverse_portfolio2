import styles from './techStackIntroSection.module.scss'
import { TECH_STACK_FEATURES, TECH_STACK_SIDE_IMAGE } from './technologyData'

const TechStackIntroSection = () => {
  return (
    <section className={styles.section} aria-label="Full-stack edge AI architecture">
      <div className={styles.inner}>
        <div className={styles.header}>
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
          <div className={styles.copy}>
            {TECH_STACK_FEATURES.map((item) => (
              <div key={item.title} className={styles.block}>
                <h3 className={styles.blockTitle}>{item.title}</h3>
                <p className={styles.blockDesc}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.media}>
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
