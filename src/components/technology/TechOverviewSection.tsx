import styles from './techOverviewSection.module.scss'

const specsLeft = [
  { label: 'COMPUTE', value: 'Ambarella CV25AQ v2.0 AI Vision Processor' },
  { label: 'MEMORY', value: '2GB LPDDR4 / 8GB eMMC (On-board memory)' },
  { label: 'CAMERA INTERFACE', value: 'Dual FPD-Link III with MIPI CSI-2 2x/4-lane output' },
  { label: 'SENSORS', value: '6-Axis IMU (Inertial Measurement Unit)' },
  { label: 'POSITIONING', value: 'GNSS (GPS, Galileo, GLONASS, BeiDou)' },
]

const specsRight = [
  { label: 'OS', value: 'Yocto / Linux Kernel' },
  { label: 'CONNECTIVITY', value: 'WiFi 802.11a/b/g/n/ac & Bluetooth 5.2' },
  { label: 'PERIPHERALS', value: 'USB 2.0 / UART / SPI / I2C / GPIO' },
  { label: 'POWER / VOLTAGE', value: '12V-24V Input power supply' },
]

const TechOverviewSection = () => {
  return (
    <section className={styles.section} aria-label="Technical overview">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>SPECIFICATION</div>
          <h2 className={styles.heading}>Technical Overview</h2>
          <p className={styles.subtitle}>
            Complete hardware specification for the Imedge® platform.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            {specsLeft.map((spec, index) => (
              <div key={index} className={styles.specItem}>
                <div className={styles.specLabel}>{spec.label}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>
          <div className={styles.column}>
            {specsRight.map((spec, index) => (
              <div key={index} className={styles.specItem}>
                <div className={styles.specLabel}>{spec.label}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechOverviewSection
