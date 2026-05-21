import styles from './techStackRowsSection.module.scss'
import { TECH_STACK_ROWS } from './technologyData'

const TechStackRowsSection = () => {
  return (
    <section className={styles.section} aria-label="Hardware and software stack">
      {TECH_STACK_ROWS.map((row) => {
        const themeClass = row.theme === 'dark' ? styles.dark : styles.light

        return (
          <article
            key={row.title}
            id={row.title.includes('Imedge') ? 'imedge' : 'perceiva'}
            className={`${styles.row} ${themeClass}`}
          >
            <div className={styles.media}>
              <img src={row.image} alt={row.imageAlt} className={styles.image} loading="lazy" />
            </div>
            <div className={styles.copy}>
              <h2 className={styles.title}>{row.title}</h2>
              <p className={styles.desc}>{row.description}</p>
              <a className={styles.link} href={row.href}>
                Read more
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default TechStackRowsSection
