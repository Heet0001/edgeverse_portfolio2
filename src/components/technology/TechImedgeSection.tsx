import styles from './techImedgeSection.module.scss'
import imedgeHardware from '../../assets/images/imedge_hardware.png'

const TechImedgeSection = () => {
  return (
    <section className={styles.section} aria-label="Imedge hardware platform">
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <div className={styles.kicker}>HARDWARE PLATFORM</div>
          <h2 className={styles.heading}>
            Imedge<sup>TM</sup> — Real-Time AI<br />
            Vision Hardware
          </h2>
          <p className={styles.body}>
            Imedge™ brings the power of high-performance computer vision directly
            to the source of data, enabling instant insights, uncompromising
            privacy, and split-second decision-making. Powered by the{' '}
            <strong>Ambarella CV25 SoC</strong> with its dedicated{' '}
            <strong>CVflow® architecture</strong>, Imedge™ delivers
            industry-leading AI performance-per-watt.
          </p>
          <p className={styles.body}>
            This hardware-software synergy allows for processing of high-resolution
            video streams with minimal power overhead. Designed for the rigorous
            demands of automotive and industrial edge environments, Imedge™
            provides a secure, robust foundation for advanced perception tasks—
            including object detection, classification, and real-time hazard
            analysis—without the latency or bandwidth constraints of the cloud.
          </p>
        </div>

        <div className={styles.mediaBlock}>
          <img
            className={styles.hardwareImg}
            src={imedgeHardware}
            alt="Imedge hardware components: camera module and PCB boards"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default TechImedgeSection
