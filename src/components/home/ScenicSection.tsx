import styles from './scenicSection.module.scss'
import scenicRoad from '../../assets/images/scenic-road.png'

const ScenicSection = () => {
  return (
    <section className={styles.section} aria-label="EdgeVerse in the real world">
      <img
        className={styles.bg}
        src={scenicRoad}
        alt="Winding road through rural landscape with AI path overlay"
        loading="lazy"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.caption}>
        <span className={styles.captionLine}>Perception that scales</span>
        <span className={styles.captionLine}>from city streets to country roads.</span>
      </div>
    </section>
  )
}

export default ScenicSection
