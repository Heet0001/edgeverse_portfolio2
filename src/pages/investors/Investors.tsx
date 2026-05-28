import imedgeHardware from '../../assets/images/imedge_hardware.png'
import styles from './investors.module.scss'

const ABOUT_FEATURES = [
  {
    title: 'AI-Powered',
    desc: 'Perception & Safety',
    icon: 'shield' as const,
  },
  {
    title: 'India-First',
    desc: 'Built for Indian Roads',
    icon: 'chip' as const,
  },
  {
    title: 'Global Vision',
    desc: 'Solving a global problem',
    icon: 'car' as const,
  },
]

function AboutFeatureIcon({ icon }: { icon: (typeof ABOUT_FEATURES)[number]['icon'] }) {
  switch (icon) {
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.featureIconSvg}>
          <path
            d="M12 3L5 6v6c0 4.2 3 7.8 7 9 4-1.2 7-4.8 7-9V6l-7-3z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M12 8v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'chip':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.featureIconSvg}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'car':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={styles.featureIconSvg}>
          <path
            d="M5 16h14l-1.2-4.5a2 2 0 0 0-1.9-1.5H8.1a2 2 0 0 0-1.9 1.5L5 16z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="17" r="1.2" fill="currentColor" />
          <circle cx="16" cy="17" r="1.2" fill="currentColor" />
          <path d="M9 10V8h6v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
  }
}

const GLOBAL_INVESTORS = [
  { name: 'Blume Ventures', variant: 'blume' },
  { name: 'Accel', variant: 'accel' },
  { name: 'Lightspeed', variant: 'lightspeed' },
  { name: 'Sequoia', variant: 'sequoia' },
  { name: 'Norwest Venture Partners', variant: 'norwest' },
  { name: 'GSR Ventures', variant: 'gsr' },
] as const

type InvestorVariant = (typeof GLOBAL_INVESTORS)[number]['variant']

const variantClass: Record<InvestorVariant, string | undefined> = {
  blume: styles.logoBlume,
  accel: styles.logoAccel,
  lightspeed: styles.logoLightspeed,
  sequoia: styles.logoSequoia,
  norwest: styles.logoNorwest,
  gsr: styles.logoGsr,
}

function InvestorLogo({ name, variant }: { name: string; variant: InvestorVariant }) {
  const extra = variantClass[variant]
  return (
    <span className={extra ? `${styles.logoItem} ${extra}` : styles.logoItem}>{name}</span>
  )
}

const MARQUEE_INVESTORS = [...GLOBAL_INVESTORS, ...GLOBAL_INVESTORS]

const Investors = () => {
  return (
    <main>
      <section id="page-hero" className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.kicker}>Investors</div>
            <h1 className={styles.h1}>
              Backed by <span className={styles.accent}>visionaries</span>.
            </h1>
            <p className={styles.heroBlurb}>
              We're supported by leading investors and industry pioneers who share our mission
              to build a future where every road is safe.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection} aria-label="About EdgeVerse">
        <div className={styles.inner}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCopy}>
              <p className={styles.aboutKicker}>About EdgeVerse</p>
              <h2 className={styles.aboutTitle}>Building intelligence for India's roads.</h2>
              <span className={styles.aboutRule} aria-hidden="true" />
              <p className={styles.aboutText}>
                EdgeVerse is developing next-generation AI systems that perceive, predict, and
                protect. Our technology combines on-device AI with real-world engineering to help
                OEMs and mobility partners create safer, smarter vehicles at scale.
              </p>

              <div className={styles.featureGrid}>
                {ABOUT_FEATURES.map((feature) => (
                  <div key={feature.title} className={styles.featureItem}>
                    <div className={styles.featureIconWrap}>
                      <AboutFeatureIcon icon={feature.icon} />
                    </div>
                    <div>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <p className={styles.featureDesc}>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.aboutMedia}>
              <img
                src={imedgeHardware}
                alt="EdgeVerse-branded vehicle with roof-mounted perception hardware"
                className={styles.aboutImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.globalSection} aria-label="Global investors">
        <div className={styles.inner}>
          <div className={styles.globalHeader}>
            <div className={styles.globalIntro}>
              <p className={styles.globalKicker}>Global investors</p>
              <h2 className={styles.globalTitle}>Backed by global leaders</h2>
            </div>
            <p className={styles.globalDesc}>
              Our investors bring deep expertise across AI, mobility, semiconductors, and
              enterprise technology.
            </p>
          </div>

          <div className={styles.reelWrap} aria-label="Investor logos">
            <div className={styles.reelFadeLeft} aria-hidden="true" />
            <div className={styles.reelFadeRight} aria-hidden="true" />
            <div className={styles.reelTrack}>
              {MARQUEE_INVESTORS.map((investor, index) => (
                <InvestorLogo
                  key={`${investor.name}-${index}`}
                  name={investor.name}
                  variant={investor.variant}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Investors
