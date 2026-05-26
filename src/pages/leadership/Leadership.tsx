import { useEffect, useMemo, useState } from 'react'
import { getPublicLeaders, type LeaderPublic } from '../../api/leaders'
import { API_ORIGIN } from '../../api/client'
import CareerWaveMesh from '../../components/careers/CareerWaveMesh'
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

const FALLBACK_LEADERS: LeaderPublic[] = [
  {
    _id: '1',
    name: 'Vasanth Prabhu',
    role: 'Co-Founder & CEO',
    image: '',
    linkedIn: '',
    bio: "Leads EdgeVerse with a focus on building India's first Advanced Rider Assistance System — combining product vision, engineering depth, and go-to-market strategy.",
    order: 0,
  },
  {
    _id: '2',
    name: 'Susanth Gunnam',
    role: 'Co-Founder & CTO',
    image: '',
    linkedIn: '',
    bio: 'Drives the technical architecture behind EdgeVerse perception intelligence — from embedded firmware and sensor fusion to on-device inference at scale.',
    order: 1,
  },
  {
    _id: '3',
    name: 'Pallavi Banthia',
    role: 'Co-Founder & COO',
    image: '',
    linkedIn: '',
    bio: 'Oversees operations, partnerships, and execution — ensuring EdgeVerse delivers production-ready technology for OEMs and fleet operators across India.',
    order: 2,
  },
  {
    _id: '4',
    name: 'Rahul Verma',
    role: 'VP, Engineering',
    image: '',
    linkedIn: '',
    bio: 'Leads embedded systems and platform engineering — shipping reliable perception software from prototype to production across diverse hardware targets.',
    order: 3,
  },
  {
    _id: '5',
    name: 'Ananya Iyer',
    role: 'Head of AI Research',
    image: '',
    linkedIn: '',
    bio: 'Advances EdgeVerse model training and evaluation — pushing the boundaries of on-device perception for unstructured roads and edge environments.',
    order: 4,
  },
]

const Leadership = () => {
  const [leaders, setLeaders] = useState<LeaderPublic[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    getPublicLeaders()
      .then(setLeaders)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const displayLeaders = useMemo(() => {
    const list = leaders.length > 0 ? leaders : loading ? [] : FALLBACK_LEADERS
    return [...list].sort((a, b) => a.order - b.order)
  }, [leaders, loading])

  useEffect(() => {
    if (displayLeaders.length === 0) return
    setSelectedId((prev) =>
      prev && displayLeaders.some((leader) => leader._id === prev)
        ? prev
        : displayLeaders[0]._id,
    )
  }, [displayLeaders])

  const selected =
    displayLeaders.find((leader) => leader._id === selectedId) ?? displayLeaders[0]

  return (
    <main>
      <section id="page-hero" className={styles.hero} aria-label="Leadership hero">
        <CareerWaveMesh className={styles.waveWrap} svgClassName={styles.waveSvg} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Leadership</p>
            <h1 className={styles.h1}>
              Meet the <span className={styles.accent}>team.</span>
            </h1>
            <p className={styles.heroBlurb}>
              Engineers, researchers, and builders creating India's first ARAS — spanning AI,
              embedded systems, hardware design, and product development.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="Our leadership team">
        <div className={styles.inner}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Leadership Team</h2>
            <span className={styles.sectionRule} aria-hidden="true" />
          </header>

          {loading ? (
            <div className={styles.loading}>Loading…</div>
          ) : selected ? (
            <div className={styles.teamLayout}>
              <article className={styles.profilePanel} aria-live="polite">
                <h3 className={styles.profileName}>{selected.name}</h3>
                <p className={styles.profileRole}>{selected.role}</p>

                {selected.linkedIn ? (
                  <ul className={styles.profileLinks}>
                    <li>
                      <a
                        href={selected.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                ) : null}

                {selected.bio ? <p className={styles.profileBio}>{selected.bio}</p> : null}
              </article>

              <div className={styles.memberGrid} role="list">
                {displayLeaders.map((leader) => {
                  const isActive = leader._id === selected._id

                  return (
                    <button
                      key={leader._id}
                      type="button"
                      role="listitem"
                      className={`${styles.memberCard} ${
                        isActive ? styles.memberCardActive : styles.memberCardInactive
                      }`}
                      onClick={() => setSelectedId(leader._id)}
                      aria-pressed={isActive}
                      aria-label={`View profile for ${leader.name}`}
                    >
                      <div className={styles.memberPhotoWrap}>
                        {leader.image ? (
                          <img
                            src={resolveImg(leader.image)}
                            alt=""
                            className={styles.memberPhoto}
                          />
                        ) : (
                          <span className={styles.memberInitials}>{getInitials(leader.name)}</span>
                        )}
                        {isActive ? (
                          <span className={styles.memberPhotoGradient} aria-hidden="true" />
                        ) : null}
                      </div>
                      <span className={styles.memberName}>{leader.name}</span>
                      <span className={styles.memberRole}>{leader.role}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}

export default Leadership
