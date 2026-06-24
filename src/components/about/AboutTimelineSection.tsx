import { Fragment } from 'react'
import styles from './aboutTimelineSection.module.scss'

const milestones = [
  {
    year: '2023',
    title: 'Founded',
    desc: 'Edgeverse founded in Bengaluru with a mission to bring ARAS technology to India’s 220M+ two-wheeler riders.',
    icon: 'rocket',
    progress: 25,
  },
  {
    year: '2024',
    title: 'Platform Development',
    desc: 'Imedge hardware prototype completed. Perceiva software stack in development. First India Perception Model trained.',
    icon: 'cube',
    progress: 50,
  },
  {
    year: '2025',
    title: 'Road testing',
    desc: 'First on-road testing and validation across Bengaluru’s complex road conditions. OEM conversations initiated.',
    icon: 'road',
    progress: 75,
  },
  {
    year: '2026',
    title: 'Market Entry',
    desc: 'Product deployment with OEM partners. Expansion into surveillance and industrial automation verticals.',
    icon: 'chart',
    progress: 100,
  },
] as const

const MilestoneIcon = ({ type }: { type: (typeof milestones)[number]['icon'] }) => {
  if (type === 'rocket') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 15l-3-6 3-2 3 2-3 6zM9 9l3-5 3 5M12 15v4M9 19h6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (type === 'cube') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zM12 12l8-4.5M12 12v9M12 12L4 7.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (type === 'road') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 18h16M7 18l2-8 3 4 2-6 3 10"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 18v-4M8 18V8M12 18v-6M16 18V6M20 18v-2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

const AboutTimelineSection = () => {
  return (
    <section className={styles.section} aria-label="From idea to product">
      <div className={styles.bgLines} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            From idea to product<span className={styles.titleDot}>.</span>
          </h2>
          <p className={styles.subtitle}>
            A journey of innovation, relentless execution, and real-world impact.
          </p>
          <span className={styles.headerRule} aria-hidden="true" />
        </div>

        <div className={styles.track}>
          {milestones.map((m, i) => (
            <Fragment key={m.year}>
              <article className={styles.card}>
                <div className={styles.cardBody}>
                  <div className={styles.yearBadge}>{m.year}</div>

                  <div className={styles.iconWrap}>
                    <MilestoneIcon type={m.icon} />
                  </div>

                  <h3 className={styles.cardTitle}>{m.title}</h3>
                  <span className={styles.titleRule} aria-hidden="true" />
                  <p className={styles.cardDesc}>{m.desc}</p>
                </div>

                <div className={styles.progressTrack} aria-hidden="true">
                  <span
                    className={styles.progressFill}
                    style={{ width: `${m.progress}%` }}
                  />
                </div>
              </article>

              {i < milestones.length - 1 ? (
                <div className={styles.connector} aria-hidden="true">
                  <span className={styles.connectorCircle}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTimelineSection
