import CareerWaveMesh from './CareerWaveMesh'
import styles from './careerHeroSection.module.scss'

const CareerHeroSection = () => {
  return (
    <section
      id="page-hero"
      data-hero-theme="light"
      className={styles.section}
      aria-label="Careers hero"
    >
      <CareerWaveMesh className={styles.waveWrap} svgClassName={styles.waveSvg} />
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.kicker}>Careers</div>
          <h1 className={styles.heading}>
            <span className={styles.headingLine}>Build technology</span>
            <span className={styles.headingLine}>
              that saves lives<span className={styles.accent}>.</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default CareerHeroSection
