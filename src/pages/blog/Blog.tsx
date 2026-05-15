import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './blog.module.scss'
import { getPublicBlogs } from '../../api/blogs'
import type { Blog as BlogPost } from '../../types/models'

const formatDate = (iso: string | null | undefined) => {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}

const readingTime = (content: string | undefined) => {
  if (!content) return '1 min read'
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const mins = Math.max(1, Math.round(words / 220))
  return `${mins} min read`
}

const initialsOf = (name: string) =>
  (name || 'EV')
    .split(' ')
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let alive = true
    void getPublicBlogs(50)
      .then((items) => {
        if (!alive) return
        setPosts(items)
      })
      .catch(() => {
        if (!alive) return
        setError('Could not load posts.')
        setPosts([])
      })
    return () => {
      alive = false
    }
  }, [])

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Blog hero">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.kicker}>EDGEVERSE BLOG</div>
          <h1 className={styles.heroTitle}>
            Stories, insight &amp; engineering
            <br />
            from the edge of mobility.
          </h1>
          <p className={styles.heroSubtitle}>
            Deep dives into perception, sensor fusion, road safety in India, and
            the engineering that powers Perceiva&trade; — written by the
            EdgeVerse team.
          </p>
        </div>
      </section>

      <section className={styles.body} aria-label="Posts">
        <div className={styles.bodyInner}>
          {posts === null ? (
            <div className={styles.grid}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.skeletonCard} aria-hidden="true">
                  <div className={styles.skeletonMedia} />
                  <div className={styles.skeletonLine} />
                  <div className={styles.skeletonLineShort} />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className={styles.empty} role="status">
              <div className={styles.emptyIcon} aria-hidden="true" />
              <h2 className={styles.emptyTitle}>
                {error ? 'Could not load posts' : 'No posts published yet'}
              </h2>
              <p className={styles.emptyHint}>
                {error
                  ? 'Please make sure the backend is running and try again.'
                  : "We're working on something. Check back soon!"}
              </p>
              <Link to="/" className={styles.emptyBtn}>
                Back to home <span aria-hidden="true">→</span>
              </Link>
            </div>
          ) : (
            <div className={styles.grid}>
              {posts.map((p) => (
                <Link to={`/blog/${p.slug}`} key={p._id} className={styles.card}>
                  <div className={styles.cardMedia}>
                    {p.coverImage ? (
                      <img src={p.coverImage} alt={p.title} className={styles.cardImg} />
                    ) : (
                      <div className={styles.cardPlaceholder} aria-hidden="true" />
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    {p.excerpt ? <p className={styles.cardExcerpt}>{p.excerpt}</p> : null}
                    <div className={styles.cardMeta}>
                      <div className={styles.authorAvatar} aria-hidden="true">
                        {initialsOf(p.author || 'EdgeVerse')}
                      </div>
                      <span className={styles.authorName}>{p.author || 'EdgeVerse Team'}</span>
                      <span className={styles.dot} aria-hidden="true">·</span>
                      <span>{formatDate(p.publishedAt || p.createdAt)}</span>
                      <span className={styles.dot} aria-hidden="true">·</span>
                      <span>{readingTime(p.content)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Blog
