import visionImg from '../../assets/images/detection.png'
import missionImg from '../../assets/images/imedge_hardware.png'
import styles from './aboutMissionSection.module.scss'

const VisionIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
  </svg>
)

const MissionIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
)

const AboutMissionSection = () => {
  return (
    <section className={styles.section} aria-label="Vision and mission">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            We exist to save lives through{' '}
            <span className={styles.accent}>intelligent perception.</span>
          </h2>
        </div>

        <div className={styles.panel}>
          <div className={styles.media}>
            <img
              src={visionImg}
              alt="Edge AI perception overlay on urban road scene"
              className={styles.image}
            />
          </div>

          <div className={`${styles.content} ${styles.contentVision}`}>
            <div className={styles.contentInner}>
              <div className={styles.iconWrap}>
                <VisionIcon />
              </div>
              <h3 className={styles.colTitle}>Vision</h3>
              <p className={styles.colText}>
                To become the global standard in edge AI perception for mobility — making
                every ride, drive, and journey safer through{' '}
                <strong className={styles.highlight}>
                  intelligent, real-time awareness
                </strong>{' '}
                at the device level.
              </p>
            </div>
          </div>

          <div className={`${styles.content} ${styles.contentMission}`}>
            <div className={styles.contentInner}>
              <div className={styles.iconWrap}>
                <MissionIcon />
              </div>
              <h3 className={styles.colTitle}>Mission</h3>
              <p className={styles.colText}>
                Enable OEMs and cluster makers with Perceiva™ — a vertically integrated{' '}
                <strong className={styles.highlight}>full-stack ARAS platform.</strong>{' '}
                We leverage patented sensor fusion to transform critical milliseconds into{' '}
                <strong className={styles.highlight}>life-saving seconds.</strong>
              </p>
            </div>
          </div>

          <div className={styles.media}>
            <img
              src={missionImg}
              alt="EdgeVerse Imedge hardware platform"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMissionSection
