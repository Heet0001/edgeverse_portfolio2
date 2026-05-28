import styles from './techResearchCardsSection.module.scss'
import { TECH_RESEARCH_CARDS } from './technologyData'

const TechResearchCardsSection = () => {
  return (
    <section className={styles.section} aria-label="Research capabilities">
      <div className={styles.grid}>
        {TECH_RESEARCH_CARDS.map((card) => (
          <article key={card.title} className={styles.card}>
            <a className={styles.tagLink} href={card.href}>
              {card.tag}
              <span aria-hidden="true"> →</span>
            </a>
            <a className={styles.mediaLink} href={card.href}>
              <img src={card.image} alt={card.imageAlt} className={styles.image} loading="lazy" />
            </a>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.desc}>{card.description}</p>
            <a className={styles.link} href={card.href}>
              {card.linkLabel}
              <span aria-hidden="true"> →</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechResearchCardsSection
