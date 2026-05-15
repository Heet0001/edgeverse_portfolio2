import { useEffect, useState } from 'react'
import { getPublicLeaders, type LeaderPublic } from '../../api/leaders'
import { API_ORIGIN } from '../../api/client'
import styles from './leadership.module.scss'

const resolveImg = (src: string) => {
  if (!src) return ''
  if (/^https?:\/\//i.test(src)) return src
  return `${API_ORIGIN}${src.startsWith('/') ? '' : '/'}${src}`
}

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const Leadership = () => {
  const [leaders, setLeaders] = useState<LeaderPublic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPublicLeaders()
      .then(setLeaders)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  // Hardcoded fallback in case no data from API yet
  const fallback: LeaderPublic[] = [
    { _id: '1', name: 'Vasanth Prabhu', role: 'Co-Founder & CEO', image: '', linkedIn: '', bio: '', order: 0 },
    { _id: '2', name: 'Susanth Gunnam', role: 'Co-Founder & CTO', image: '', linkedIn: '', bio: '', order: 1 },
    { _id: '3', name: 'Pallavi Banthia', role: 'Co-Founder & COO', image: '', linkedIn: '', bio: '', order: 2 },
  ]

  const displayLeaders = leaders.length > 0 ? leaders : (loading ? [] : fallback)

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.kicker}>LEADERSHIP</div>
            <h1 className={styles.h1}>
              Meet the <span className={styles.accent}>team</span>.
            </h1>
            <p className={styles.heroBlurb}>
              Engineers, researchers, and builders creating India's first ARAS — spanning AI,
              embedded systems, hardware design, and product development.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.section}>
        <div className={styles.inner}>
          {loading ? (
            <div className={styles.loading}>Loading…</div>
          ) : (
            <div className={styles.grid}>
              {displayLeaders.map((leader) => (
                <div key={leader._id} className={styles.card}>
                  <div className={styles.avatar}>
                    {leader.image ? (
                      <img
                        src={resolveImg(leader.image)}
                        alt={leader.name}
                        className={styles.avatarImg}
                      />
                    ) : (
                      <span className={styles.initials}>{getInitials(leader.name)}</span>
                    )}
                  </div>
                  <h3 className={styles.name}>{leader.name}</h3>
                  <p className={styles.role}>{leader.role}</p>
                  {leader.bio && <p className={styles.bio}>{leader.bio}</p>}
                  {leader.linkedIn && (
                    <a
                      href={leader.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedIn}
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      in
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Leadership
