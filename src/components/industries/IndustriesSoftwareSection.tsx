import styles from './industriesSoftwareSection.module.scss'
import stackImg from '../../assets/images/detection.png'

const layers = [
  {
    label: 'Application',
    color: '#c4b5fd',
    desc: 'Manages alert generation, LED control logic, and system-level decisions based on fused sensor input.',
  },
  {
    label: 'Sensor Fusion',
    color: '#a78bfa',
    desc: 'Combines data from multiple sensors like gyroscope, accelerometer etc to generate a reliable model.',
  },
  {
    label: 'Perception –\nVision Model',
    color: '#fbbf24',
    desc: 'Runs neural networks (e.g., object detection, lane detection) on the VPU using optimized models.',
  },
  {
    label: 'ISP – HDR Merge',
    color: '#f59e0b',
    desc: 'Preprocesses raw camera input to produce high-quality frames with high dynamic range under varying lighting.',
  },
  {
    label: 'Linux Board Support Packages',
    color: '#67e8f9',
    desc: 'Provides low-level drivers, bootloader, and kernel configurations for camera, VPU, CAN, and other peripherals.',
  },
]

const IndustriesSoftwareSection = () => {
  return (
    <section className={styles.section} aria-label="Software stack">
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Real-Time, Secure AI Vision + Radar Perception Platform
          </h2>
          <div className={styles.divider} />
          <p className={styles.desc}>
            A layered suite of software components designed to enable and manage real-time, sensor-based applications on edge
            devices. Unlike traditional cloud-centric models that require sending all data to remote servers for processing, this
            optimized software stack facilitates the high-performance processing of visual data (images, video streams) directly
            at the source. Specifically engineered for the constraints of <strong>edge devices</strong>, this layered architecture promotes
            streamlined development, and the efficient execution of complex computer vision and radar tasks—
            ideal for applications that demand immediate responsiveness, data privacy, and low bandwidth consumption.
          </p>
        </div>

        <div className={styles.stackWrapper}>
          <div className={styles.stackVisual}>
            <img src={stackImg} alt="Software stack funnel diagram" className={styles.stackImg} />
          </div>
          <div className={styles.layersList}>
            {layers.map((layer, i) => (
              <div key={i} className={styles.layerRow}>
                <div className={styles.layerDot} style={{ background: layer.color }} />
                <div className={styles.layerContent}>
                  <div className={styles.layerLabel} style={{ color: layer.color }}>
                    {layer.label}
                  </div>
                  <p className={styles.layerDesc}>{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSoftwareSection
