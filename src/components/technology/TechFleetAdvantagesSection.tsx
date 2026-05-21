import styles from './techFleetAdvantagesSection.module.scss'
import { TECH_FLEET_ADVANTAGES } from './technologyData'

const TechFleetAdvantagesSection = () => {
  return (
    <section className={styles.section} aria-label="Fleet learning advantages">
      <div className={styles.inner}>
        <h2 className={styles.title}>Advantages of EdgeVerse&apos;s Fleet Learning Loop</h2>
        <div className={styles.grid}>
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
