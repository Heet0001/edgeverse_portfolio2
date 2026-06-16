import { useEffect, useState } from 'react'
import { getPublicAdvisors, type AdvisorPublic } from '../../api/advisors'
import { API_ORIGIN } from '../../api/client'
import styles from './advisors.module.scss'

const resolveImg = (src: string) => {
  if (!src) return ''
  if (/^https?:\/\//i.test(src)) return src
  return `${API_ORIGIN}${src.startsWith('/') ? '' : '/'}${src}`
}

const AdvisorsInvestors = () => {
  const [advisors, setAdvisors] = useState<AdvisorPublic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPublicAdvisors()
      .then(setAdvisors)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // Hardcoded fallback
  const fallback: AdvisorPublic[] = [
    { _id: '1', name: 'Aditya Sharma', role: 'Advisor — Strategy', type: 'advisor', image: '', linkedIn: '#', bio: '', order: 0 },
    { _id: '2', name: 'Kris Gopalakrishnan', role: 'Advisor — Technology', type: 'advisor', image: '', linkedIn: '#', bio: '', order: 1 },
    { _id: '3', name: 'Linda Sun', role: 'Advisor — Operations', type: 'advisor', image: '', linkedIn: '#', bio: '', order: 2 },
    { _id: '4', name: "Chris D'Souza", role: 'Advisor — Growth', type: 'advisor', image: '', linkedIn: '#', bio: '', order: 3 },
  ]

  const displayItems = advisors.length > 0 ? advisors : (loading ? [] : fallback)
  const advisorList = displayItems.filter((a) => a.type === 'advisor')
  const investorList = displayItems.filter((a) => a.type === 'investor')

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.kicker}>ADVISORS & INVESTORS</div>
            <h1 className={styles.h1}>Guided by experience.</h1>
            <p className={styles.heroBlurb}>
              Industry leaders and visionary investors who guide our strategic direction
              and accelerate our mission to make roads safer.
            </p>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      {(advisorList.length > 0 || loading) && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionKicker}>ADVISORS</div>
              <h2 className={styles.sectionTitle}>Our Advisors</h2>
            </div>

            {loading ? (
              <div className={styles.loading}>Loading…</div>
            ) : (
              <div className={styles.grid}>
                {advisorList.map((a) => (
                  <div key={a._id} className={styles.card}>
                    <div className={styles.cardLeft}>
                      <div className={styles.avatar}>
                        {a.image ? (
                          <img
                            src={resolveImg(a.image)}
                            alt={a.name}
                            className={styles.avatarImg}
                          />
                        ) : (
                          <span className={styles.avatarIcon}>👤</span>
                        )}
                      </div>
                      <div className={styles.info}>
                        <h3 className={styles.name}>{a.name}</h3>
                        <p className={styles.role}>{a.role}</p>
                        {a.bio && <p className={styles.bio}>{a.bio}</p>}
                      </div>
                    </div>
                    {a.linkedIn && a.linkedIn !== '#' && (
                      <a
                        href={a.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedIn}
                        aria-label={`${a.name} LinkedIn`}
                      >
                        in
                      </a>
                    )}
                    {a.linkedIn === '#' && (
                      <span className={styles.linkedIn} aria-label={`${a.name} LinkedIn`}>
                        in
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Investors Section */}
      {investorList.length > 0 && (
        <section className={`${styles.section} ${styles.investorSection}`}>
          <div className={styles.inner}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionKicker}>INVESTORS</div>
              <h2 className={styles.sectionTitle}>Our Investors</h2>
            </div>

            <div className={styles.grid}>
              {investorList.map((a) => (
                <div key={a._id} className={styles.card}>
                  <div className={styles.cardLeft}>
                    <div className={`${styles.avatar} ${styles.investorAvatar}`}>
                      {a.image ? (
                        <img
                          src={resolveImg(a.image)}
                          alt={a.name}
                          className={styles.avatarImg}
                        />
                      ) : (
                        <span className={styles.avatarIcon}>💰</span>
                      )}
                    </div>
                    <div className={styles.info}>
                      <h3 className={styles.name}>{a.name}</h3>
                      <p className={styles.role}>{a.role}</p>
                      {a.bio && <p className={styles.bio}>{a.bio}</p>}
                    </div>
                  </div>
                  {a.linkedIn && a.linkedIn !== '#' && (
                    <a
                      href={a.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedIn}
                      aria-label={`${a.name} LinkedIn`}
                    >
                      in
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state when no advisors or investors from API and fallback */}
      {!loading && advisorList.length === 0 && investorList.length === 0 && (
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.loading}>
              No advisors or investors have been added yet.
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default AdvisorsInvestors
