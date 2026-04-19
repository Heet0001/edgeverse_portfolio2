import styles from './newsInsightsSection.module.scss'

export type NewsInsightCardProps = {
  category: string
  title: string
  imageSrc: string
  imageAlt: string
  href?: string
}

const NewsInsightCard = ({
  category,
  title,
  imageSrc,
  imageAlt,
  href = '/news',
}: NewsInsightCardProps) => {
  return (
    <a className={styles.card} href={href}>
      <div className={styles.cardMedia}>
        <img className={styles.cardImg} src={imageSrc} alt={imageAlt} loading="lazy" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardCategory}>{category}</div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardLink}>
          Read Blog <span aria-hidden="true">→</span>
        </div>
      </div>
    </a>
  )
}

export default NewsInsightCard

