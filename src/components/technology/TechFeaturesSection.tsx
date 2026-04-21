import styles from './techFeaturesSection.module.scss'

const features = [
  {
    icon: '💡', // Placeholder for Customizable Solution icon
    title: 'Customizable\nSolution',
    items: [
      'Commercial/Auto/Industrial Grade',
      'Upto triple camera support',
      '4KP30+ encoding performance',
      'H.264 / H.265 recording',
      'CAN Standard and Extended',
      'DDR4/LPDDR4 upto 2GB',
      'Industry-leading image sensors support',
    ],
  },
  {
    icon: '👁️', // Placeholder for hardware eye/gear icon
    title: 'Edge AI Vision\nHardware',
    items: [
      'Ambarella® CV25 SoC',
      'Arm® 64-bit quad core',
      'Onsemi AR0142AT HDR Camera',
      'FPD-Link III 3Gbps SerDes',
      'Wi-Fi CSI-2 Interface',
      'Up to 504 MPixels input rate',
      'Superior low-light processing',
    ],
  },
  {
    icon: '🖥️', // Placeholder for interface icon
    title: 'Industry Standard\nInterfaces',
    items: [
      'WiFi 802.11a/b/g/n/ac',
      'BT5.2',
      'Micro-USB 2.0',
      'HDMI',
      'GPS/GNSS',
      '6-Axis IMU',
      'Micro-SD SDHC/SDXC',
    ],
  },
]

const TechFeaturesSection = () => {
  return (
    <section className={styles.section} aria-label="Key features">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <ul className={styles.list}>
                {f.items.map((item, j) => (
                  <li key={j} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechFeaturesSection
