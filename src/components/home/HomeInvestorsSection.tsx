import styles from './homeInvestorsSection.module.scss'

const PARTNER_LOGOS = [
  { name: 'AMD', variant: 'amd' },
  { name: 'arm', variant: 'arm' },
  { name: 'Ambarella', variant: 'default' },
  { name: 'Qualcomm', variant: 'default' },
  { name: 'NVIDIA', variant: 'nvidia' },
  { name: 'Valeo', variant: 'valeo' },
  { name: 'Bosch', variant: 'default' },
] as const

type LogoVariant = (typeof PARTNER_LOGOS)[number]['variant']

const variantClass: Record<LogoVariant, string | undefined> = {
  amd: styles.logoAmd,
  arm: styles.logoArm,
  nvidia: styles.logoNvidia,
  valeo: styles.logoValeo,
  default: undefined,
}

function LogoItem({ name, variant }: { name: string; variant: LogoVariant }) {
  const extra = variantClass[variant]
  return (
    <span className={extra ? `${styles.logoItem} ${extra}` : styles.logoItem}>{name}</span>
  )
}

const MARQUEE_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS]

const HomeInvestorsSection = () => {
  return (
    <section className={styles.section} aria-label="Investors">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.copy}>
            <h2 className={styles.title}>Investors</h2>
            <p className={styles.text}>
              EdgeVerse is backed by industry leaders and strategic partners who share our
              vision of making every road safer through edge-native perception intelligence.
            </p>
            <a className={styles.btn} href="/investors">
              Read more
              <span className={styles.btnArrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div className={styles.logoMarquee} aria-label="Partner logos">
          <div className={styles.logoFadeLeft} aria-hidden="true" />
          <div className={styles.logoFadeRight} aria-hidden="true" />
          <div className={styles.logoTrack}>
            {MARQUEE_LOGOS.map((logo, index) => (
              <LogoItem key={`${logo.name}-${index}`} name={logo.name} variant={logo.variant} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInvestorsSection
