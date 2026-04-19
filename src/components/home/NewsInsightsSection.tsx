import styles from './newsInsightsSection.module.scss'
import news from '../../assets/images/news.png'
import news1 from '../../assets/images/news1.png'
import news2 from '../../assets/images/news2.png'
import news3 from '../../assets/images/news3.png'
import NewsInsightCard from './NewsInsightCard'

const ITEMS = [
  {
    id: 'insight-1',
    category: 'SAFETY',
    title: 'Two-Wheeler Safety: Why India Needs ARAS Now',
    imageSrc: news,
    imageAlt: 'Traffic safety in Indian city',
    href: '/news',
  },
  {
    id: 'insight-2',
    category: 'TECHNOLOGY',
    title: 'How Perceiva™ Detects Blind Spots in Under 1 Second',
    imageSrc: news1,
    imageAlt: 'Camera module close-up',
    href: '/news',
  },
  {
    id: 'insight-3',
    category: 'NEWS',
    title: 'EdgeVerse Partners with OEMs to Bring ARAS to Market',
    imageSrc: news2,
    imageAlt: 'Team working in a lab',
    href: '/news',
  },
  {
    id: 'insight-4',
    category: 'PRODUCT',
    title: 'Mobile App for Ride Configurability Video Playback',
    imageSrc: news3,
    imageAlt: 'Collision alert visualization',
    href: '/news',
  },
] as const

const NewsInsightsSection = () => {
  return (
    <section className={styles.section} aria-label="News and insights">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>LATEST FROM EDGEVERSE</div>
          <div className={styles.headRow}>
            <h2 className={styles.title}>News &amp; Insights</h2>
            <a className={styles.viewAll} href="/news">
              View all <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <NewsInsightCard
              key={item.id}
              category={item.category}
              title={item.title}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsInsightsSection

