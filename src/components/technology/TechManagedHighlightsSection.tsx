import { useEffect, useState } from 'react'
import { getPublicTechnologies } from '../../api/technologies'
import { resolveMediaUrl } from '../../api/resolveMediaUrl'
import type { Technology } from '../../types/models'
import styles from './techManagedHighlightsSection.module.scss'

const TechManagedHighlightsSection = () => {
  const [items, setItems] = useState<Technology[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let alive = true
    void getPublicTechnologies().then((list) => {
      if (!alive) return
      setItems(list)
      setLoaded(true)
    })
    return () => {
      alive = false
    }
  }, [])

  if (!loaded || items.length === 0) return null

  return (
    <section className={styles.section} aria-label="Technology highlights">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>HIGHLIGHTS</div>
          <h2 className={styles.title}>
            <span className={styles.accent}>Technology</span> in focus
          </h2>
          <p className={styles.subtitle}>
            Key capabilities and building blocks — kept current as we ship new perception and hardware
            milestones.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((it) => {
            const src = resolveMediaUrl(it.image)
            return (
              <article key={it._id} className={styles.card}>
                {src ? (
                  <div className={styles.cardMedia}>
                    <img className={styles.cardImg} src={src} alt="" loading="lazy" />
                  </div>
                ) : null}
                <div className={styles.cardBody}>
                  {it.subtitle ? <div className={styles.cardKicker}>{it.subtitle}</div> : null}
                  <h3 className={styles.cardTitle}>{it.title}</h3>
                  {it.description ? <p className={styles.cardText}>{it.description}</p> : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechManagedHighlightsSection
