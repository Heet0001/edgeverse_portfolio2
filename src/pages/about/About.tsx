import styles from './about.module.scss'

type JourneyItem = {
  year: string
  title: string
  description: string
}

type PersonCard = {
  initials: string
  name: string
  role: string
  description: string
}

type AdvisorRow = {
  initials: string
  name: string
  role: string
  tag: string
}

const JOURNEY: JourneyItem[] = [
  {
    year: '2023',
    title: 'Founded',
    description:
      'EdgeVerse founded in Bangalore with a mission to bring ARAS technology to India’s 220M+ two-wheeler riders.',
  },
  {
    year: '2024',
    title: 'Platform Development',
    description:
      'Integrated a hardware prototype and built Perceiva’s software stack in development. First India Perception Model trained.',
  },
  {
    year: '2025',
    title: 'Road Testing',
    description:
      'First on-road testing and validation across Bengaluru’s complex road conditions. OEM conversations initiated.',
  },
  {
    year: '2026',
    title: 'Market Entry',
    description:
      'Production deployment with OEM partners. Expansion into new markets and industrial automation verticals.',
  },
]

const LEADERSHIP: PersonCard[] = [
  {
    initials: 'YP',
    name: 'Yakshith Putrevu',
    role: 'CEO & Co-Founder',
    description:
      'Product strategy, business development, and fundraising. Driving EdgeVerse from concept to market.',
  },
  {
    initials: 'SS',
    name: 'Sourabh Suman',
    role: 'CTO & Co-Founder',
    description:
      'Leading hardware and embedded systems engineering, full-stack perception platform architecture.',
  },
  {
    initials: 'HV',
    name: 'Harsha Vardhan',
    role: 'Head of Engineering',
    description:
      'AI/ML systems, computer vision in perception, and edge deployment optimization.',
  },
]

const ADVISORS: AdvisorRow[] = [
  {
    initials: 'RK',
    name: 'Dr. Rajiv Kishore',
    role: 'Fmr. CTO, Valeo Vision System | Ex-Bosch',
    tag: 'Automotive',
  },
  {
    initials: 'SR',
    name: 'Srinivasan R',
    role: 'Principal Architect, Amberalla - 25+ yrs embedded',
    tag: 'Embedded Systems',
  },
  {
    initials: 'AJ',
    name: 'Amit Jain',
    role: 'Investor - Ex VP, Qualcomm Ventures',
    tag: 'Venture Capital',
  },
  {
    initials: 'PD',
    name: 'Pooja Dhawan',
    role: 'Regulatory Expert - Automotive Standards & BIS',
    tag: 'Regulatory',
  },
]

const About = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="About EdgeVerse">
        <div className={styles.heroInner}>
          <div className={styles.heroBackdrop} aria-hidden="true">
            <div className={styles.backdropTile} />
            <div className={styles.backdropTile} />
            <div className={styles.backdropTile} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.heroKicker}>COMPANY</div>
            <h1 className={styles.h1}>
              Building the future
              <br />
              of perception.
            </h1>
            <p className={styles.heroBlurb}>
              EdgeVerse is a vertically-integrated deep technology startup building
              India&apos;s first Advanced Rider Assistance System (ARAS) — engineering
              proprietary perception platforms to save lives.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.purpose} aria-label="Our purpose">
        <div className={styles.sectionInner}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerLine} aria-hidden="true" />
            <span className={styles.kicker}>OUR PURPOSE</span>
          </div>

          <h2 className={styles.h2}>
            We exist to save lives through{' '}
            <span className={styles.accent}>intelligent perception.</span>
          </h2>

          <div className={styles.twoCol}>
            <div className={styles.col}>
              <div className={styles.colLabel}>MISSION</div>
              <p className={styles.p}>
                To develop and deploy edge AI perception products that save lives.
                We engineer the full stack — hardware, software, and algorithms —
                to make advanced rider assistance accessible, affordable, and
                effective.
              </p>
            </div>

            <div className={styles.col}>
              <div className={styles.colLabel}>VISION</div>
              <p className={styles.p}>
                A world where every rider is protected by intelligent perception
                technology. We envision ARAS becoming as fundamental to
                two-wheeler safety as ABS is to cars — a standard, not a luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.journey} aria-label="Our journey">
        <div className={styles.sectionInner}>
          <div className={styles.kickerRow}>
            <span className={styles.kickerLine} aria-hidden="true" />
            <span className={styles.kicker}>OUR JOURNEY</span>
          </div>

          <h2 className={styles.h2}>From idea to product.</h2>

          <div className={styles.journeyGrid}>
            {JOURNEY.map((item) => (
              <article key={item.year} className={styles.journeyCard}>
                <div className={styles.year}>{item.year}</div>
                <div className={styles.cardTitle}>{item.title}</div>
                <p className={styles.cardText}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.leadership} aria-label="Leadership">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeadCenter}>
            <div className={styles.kickerRow}>
              <span className={styles.kickerLine} aria-hidden="true" />
              <span className={styles.kicker}>LEADERSHIP</span>
            </div>
            <h2 className={styles.h2Center}>Meet the team.</h2>
            <p className={styles.leadCenter}>
              Deep domain expertise in embedded systems, AI, automotive technology,
              and product commercialization.
            </p>
          </div>

          <div className={styles.leadGrid}>
            {LEADERSHIP.map((p) => (
              <article key={p.name} className={styles.profileCard}>
                <div className={styles.avatar} aria-hidden="true">
                  {p.initials}
                </div>
                <div className={styles.profileName}>{p.name}</div>
                <div className={styles.profileRole}>{p.role}</div>
                <p className={styles.profileText}>{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.advisors} aria-label="Advisors">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeadCenter}>
            <div className={styles.kickerRow}>
              <span className={styles.kickerLine} aria-hidden="true" />
              <span className={styles.kicker}>ADVISORS</span>
            </div>
            <h2 className={styles.h2Center}>Guided by experience.</h2>
          </div>

          <div className={styles.advisorGrid}>
            {ADVISORS.map((a) => (
              <div key={a.name} className={styles.advisorRow}>
                <div className={styles.advisorLeft}>
                  <div className={styles.advisorAvatar} aria-hidden="true">
                    {a.initials}
                  </div>
                  <div className={styles.advisorTextBlock}>
                    <div className={styles.advisorName}>{a.name}</div>
                    <div className={styles.advisorRole}>{a.role}</div>
                  </div>
                </div>
                <div className={styles.advisorTag}>{a.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.hq} aria-label="Headquarters">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeadCenter}>
            <div className={styles.kickerRow}>
              <span className={styles.kickerLine} aria-hidden="true" />
              <span className={styles.kicker}>HEADQUARTERS</span>
            </div>
            <h2 className={styles.h2Center}>Bengaluru, India.</h2>
          </div>

          <div className={styles.hqGrid}>
            <div className={styles.hqCard}>
              <div className={styles.hqCompany}>EdgeVerse India Private Limited</div>

              <div className={styles.hqDetails} aria-label="Contact details">
                <div className={styles.hqRow}>
                  <span className={`${styles.hqIcon} ${styles.hqIconPin}`} aria-hidden="true" />
                  <div className={styles.hqRowText}>
                    G01, #520, 8th Cross, BEML Layout, Thubarahalli, Bengaluru,
                    Karnataka 560066
                  </div>
                </div>

                <div className={styles.hqRow}>
                  <span className={`${styles.hqIcon} ${styles.hqIconMail}`} aria-hidden="true" />
                  <a className={styles.hqLink} href="mailto:contact@edgeverse.ai">
                    contact@edgeverse.ai
                  </a>
                </div>

                <div className={styles.hqRow}>
                  <span className={`${styles.hqIcon} ${styles.hqIconPhone}`} aria-hidden="true" />
                  <a className={styles.hqLink} href="tel:+919184552756">
                    +91 9845 257 658
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.mapFrame}>
              <div className={styles.mapTop}>
                <a
                  className={styles.mapLink}
                  href="https://www.google.com/maps?q=EdgeVerse%20India%20Private%20Limited%20Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps <span aria-hidden="true">↗</span>
                </a>
              </div>

              <iframe
                className={styles.map}
                title="EdgeVerse headquarters map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=EdgeVerse%20India%20Private%20Limited%20Bengaluru&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-label="Get in touch">
        <div className={styles.ctaInner}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaTitle}>
              Let&apos;s build the future <span className={styles.accent}>together</span>.
            </h2>
            <p className={styles.ctaText}>
              Join us in our mission to bring advanced perception technology to every
              road in India.
            </p>
          </div>

          <a className={styles.ctaBtn} href="mailto:contact@edgeverse.ai">
            Get in Touch <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default About