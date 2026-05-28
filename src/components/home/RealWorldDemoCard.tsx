import styles from './realWorldDemosSection.module.scss'

type RealWorldDemoCardProps = {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  title: string
  href?: string
}

const RealWorldDemoCard = ({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  href = '/videos',
}: RealWorldDemoCardProps) => {
  return (
    <a className={styles.card} href={href}>
      <div className={styles.cardMedia}>
        <img className={styles.cardImg} src={imageSrc} alt={imageAlt} loading="lazy" />
        <span className={styles.playBtn} aria-hidden="true" />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardEyebrow}>{eyebrow}</div>
        <div className={styles.cardTitle}>{title}</div>
      </div>
    </a>
  )
}

export default RealWorldDemoCard

