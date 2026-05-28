import CareerWaveMesh from './CareerWaveMesh'
import styles from './careerWhySection.module.scss'

type ReasonIcon = 'globe' | 'chip' | 'team' | 'india'

type Reason = {
  number: string
  title: string
  desc: string
  icon: ReasonIcon
}

const reasons: Reason[] = [
  {
    number: '01',
    icon: 'globe',
    title: 'Real-World Impact',
    desc: "Every line of code you write, every PCB layout, every model you train has a direct impact on rider safety. This isn't an exercise — it's life-saving technology for real-world riders.",
  },
  {
    number: '02',
    icon: 'chip',
    title: 'Deep Tech, Full Stack',
    desc: 'We build everything — custom silicon-level firmware, DSP and inference, sensor fusion algorithms, and production-hardened APIs. If you want engineering depth, this is it.',
  },
  {
    number: '03',
    icon: 'team',
    title: 'Small Team, Big Ownership',
    desc: 'We value craftsmanship. You will have direct ownership of critical systems and work closely with the founding team — your skills and strategic thinking directly shape the technology.',
  },
  {
    number: '04',
    icon: 'india',
    title: 'India-First Mission',
    desc: "We're building technology for India's roads — for Indian hands, Indian conditions, and Indian riders. You become more than a builder, and each role is part of something bigger.",
  },
]

function ReasonIconGraphic({ icon }: { icon: ReasonIcon }) {
  switch (icon) {
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.icon}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3c2.8 3.2 2.8 14.8 0 18M12 3c-2.8 3.2-2.8 14.8 0 18"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'chip':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.icon}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'team':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.icon}>
          <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16.5" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4.5 19c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5M14 19c0-1.8 1.4-3.2 3.2-3.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'india':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.icon}>
          <path
            d="M6.5 4.5c2.2-.8 4.8-.8 7 0 2.5 1 4.5 3.2 5.2 5.8.4 1.4.4 2.9 0 4.3-.7 2.6-2.7 4.8-5.2 5.8-2.2.8-4.8.8-7 0-2.5-1-4.5-3.2-5.2-5.8-.4-1.4-.4-2.9 0-4.3.7-2.6 2.7-4.8 5.2-5.8z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8.5 9.5c.8 1.2 2.2 2 3.8 2.2M12 11.7V16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
  }
}

const CareerWhySection = () => {
  return (
    <section className={styles.section} aria-label="Why EdgeVerse">
      <CareerWaveMesh className={styles.waveWrap} svgClassName={styles.waveSvg} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>Why EdgeVerse</div>
          <h2 className={styles.title}>
            Not just another startup<span className={styles.accent}>.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason) => (
            <article key={reason.number} className={styles.card}>
              <span className={styles.cardAccent} aria-hidden="true" />

              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <ReasonIconGraphic icon={reason.icon} />
                </div>
                <span className={styles.number} aria-hidden="true">
                  {reason.number}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDesc}>{reason.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerWhySection
