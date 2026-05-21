import styles from './techAdvantagesSection.module.scss'
import { TECH_APPROACH_ADVANTAGES } from './technologyData'

const TechAdvantagesSection = () => {
  return (
    <section className={styles.section} aria-label="Advantages of EdgeVerse approach">
      <div className={styles.inner}>
        <h2 className={styles.title}>Advantages of EdgeVerse&apos;s approach</h2>
        <div className={styles.grid}>
          {TECH_APPROACH_ADVANTAGES.map((item) => (
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

export default TechAdvantagesSection
