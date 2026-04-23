import styles from './techOverviewSection.module.scss'

const specRows = [
  {
    left: { label: 'PROCESSOR', value: 'Ambarella CV25 SoC with CVflow® architecture' },
    right: { label: 'CPU', value: 'Arm® 64-bit quad core' },
  },
  {
    left: { label: 'CAMERA', value: 'Onsemi AR0147AT HDR · 150° FoV · CSI-2 Interface' },
    right: { label: 'SERIALIZER', value: 'FPD-Link III 3Gbps SerDes' },
  },
  {
    left: { label: 'AI PROCESSING', value: 'Dedicated CNN accelerator, up to 30 FPS inference' },
    right: { label: 'ENCODING', value: '4KP30+ · H.264/H.265' },
  },
  {
    left: { label: 'MEMORY', value: 'DDR4/LPDDR4 up to 2GB' },
    right: { label: 'STORAGE', value: 'Micro-SD (SDHC/SDXC)' },
  },
  {
    left: { label: 'CONNECTIVITY', value: 'WiFi 802.11a/b/g/n/ac · BT5.2 · Micro-USB 2.0' },
    right: { label: 'INTERFACES', value: 'HDMI · GPS/GNSS · 6-Axis IMU · CAN Standard/Extended' },
  },
]

const TechOverviewSection = () => {
  return (
    <section className={styles.section} aria-label="Technical overview">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>SPECIFICATIONS</div>
          <h2 className={styles.heading}>Technical Overview</h2>
          <p className={styles.subtitle}>
            Complete hardware specification for the Imedge® edge AI platform.
          </p>
        </div>

        <div className={styles.table}>
          {specRows.map((row, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.cell}>
                <div className={styles.specLabel}>{row.left.label}</div>
                <div className={styles.specValue}>{row.left.value}</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.specLabel}>{row.right.label}</div>
                <div className={styles.specValue}>{row.right.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechOverviewSection
