import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './careerOpeningsSection.module.scss'
import { getPublicOpenings } from '../../api/openings'
import type { Opening } from '../../types/models'

const CareerOpeningsSection = () => {
  const [openings, setOpenings] = useState<Opening[] | null>(null)

  useEffect(() => {
    let alive = true
    void getPublicOpenings().then((items) => {
      if (alive) setOpenings(items)
    })
    return () => {
      alive = false
    }
  }, [])

  return (
    <section className={styles.section} aria-label="Current openings">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3 className={styles.title}>Current openings</h3>
        </div>

        {openings === null ? (
          <div className={styles.list} aria-busy="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className={styles.card} aria-hidden="true">
                <div className={styles.cardTop}>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.jobTitle}>&nbsp;</h3>
                    <div className={styles.tags} />
                  </div>
                </div>
                <p className={styles.jobDesc}>&nbsp;</p>
              </div>
            ))}
          </div>
        ) : openings.length === 0 ? (
          <div className={styles.empty} role="status">
            <div className={styles.emptyIcon} aria-hidden="true" />
            <h3 className={styles.emptyTitle}>No open roles right now</h3>
            <p className={styles.emptyHint}>
              We're not hiring for any specific role at the moment, but we're
              always interested in hearing from talented engineers, designers
              and operators. Reach out and we'll keep your details on file.
            </p>
            <Link to="/contact" className={styles.emptyBtn}>
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : (
          <div className={styles.list}>
            {openings.map((job) => {
              const tags = [job.location, job.employmentType, job.department].filter(
                (t): t is string => Boolean(t && t.trim()),
              )
              return (
                <div key={job._id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardInfo}>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <div className={styles.tags}>
                        {tags.map((tag, ti) => (
                          <span key={ti} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={`/careers/${job.slug}/apply`}
                      className={styles.applyBtn}
                    >
                      Apply <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  {job.description ? (
                    <p className={styles.jobDesc}>{job.description}</p>
                  ) : null}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default CareerOpeningsSection
