import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './newsInsightsSection.module.scss'
import news from '../../assets/images/news.png'
import news1 from '../../assets/images/news1.png'
import news2 from '../../assets/images/news2.png'
import news3 from '../../assets/images/news3.png'
import NewsInsightCard from './NewsInsightCard'
import { getPublicBlogs } from '../../api/blogs'
import type { Blog } from '../../types/models'

const FALLBACK_ITEMS = [
  {
    id: 'insight-1',
    category: 'SAFETY',
    title: 'Two-Wheeler Safety: Why India Needs ARAS Now',
    imageSrc: news,
    imageAlt: 'Traffic safety in Indian city',
    href: '/blog',
  },
  {
    id: 'insight-2',
    category: 'TECHNOLOGY',
    title: 'How Perceiva™ Detects Blind Spots in Under 1 Second',
    imageSrc: news1,
    imageAlt: 'Camera module close-up',
    href: '/blog',
  },
  {
    id: 'insight-3',
    category: 'NEWS',
    title: 'EdgeVerse Partners with OEMs to Bring ARAS to Market',
    imageSrc: news2,
    imageAlt: 'Team working in a lab',
    href: '/blog',
  },
  {
    id: 'insight-4',
    category: 'PRODUCT',
    title: 'Mobile App for Ride Configurability Video Playback',
    imageSrc: news3,
    imageAlt: 'Collision alert visualization',
    href: '/blog',
  },
] as const

const PLACEHOLDERS = [news, news1, news2, news3]

const NewsInsightsSection = () => {
  const [blogs, setBlogs] = useState<Blog[] | null>(null)

  useEffect(() => {
    let alive = true
    void getPublicBlogs(4).then((items) => {
      if (alive) setBlogs(items)
    })
    return () => {
      alive = false
    }
  }, [])

  const items =
    blogs && blogs.length > 0
      ? blogs.slice(0, 4).map((b, idx) => ({
          id: b._id,
          category: (b.tags && b.tags[0] ? b.tags[0] : 'BLOG').toUpperCase(),
          title: b.title,
          imageSrc: b.coverImage || PLACEHOLDERS[idx % PLACEHOLDERS.length],
          imageAlt: b.title,
          href: `/blog/${b.slug}`,
        }))
      : FALLBACK_ITEMS

  return (
    <section className={styles.section} aria-label="News and insights">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>LATEST FROM EDGEVERSE</div>
          <div className={styles.headRow}>
            <h2 className={styles.title}>News &amp; Insights</h2>
            <Link className={styles.viewAll} to="/blog">
              View all <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
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
