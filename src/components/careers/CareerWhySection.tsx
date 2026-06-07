import CareerWaveMesh from './CareerWaveMesh'
import styles from './careerWhySection.module.scss'

const CareerWhySection = () => {
  return (
    <section className={styles.section} aria-label="What it's like to work at EdgeVerse">
      <CareerWaveMesh className={styles.waveWrap} svgClassName={styles.waveSvg} />

      <div className={styles.inner}>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>What it&apos;s like to work here</h2>
          <p className={styles.blockText}>
            We&apos;re a small R&amp;D first team, which means your work ships fast and the impact
            is immediate. There&apos;s no layer between you and the problem.
          </p>
          <p className={styles.blockText}>
            We move fast, stay lean, and believe quality is non-negotiable — not because a process
            document says so, but because the stakes are real.
          </p>
        </div>

        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Who we&apos;re looking for</h2>
          <p className={styles.blockText}>
            Sharp, self-driven people who don&apos;t need to be told what to do twice. Whether
            you&apos;re an AI engineer, embedded systems developer, or AI researcher — if you&apos;re
            curious and you care about building things that genuinely matter, come talk to us.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CareerWhySection
