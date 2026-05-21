import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './blogDetail.module.scss'
import { getPublicBlogBySlug, getPublicBlogs } from '../../api/blogs'
import type { Blog as BlogPost } from '../../types/models'
import { renderMarkdown } from './markdown'

const formatDate = (iso: string | null | undefined) => {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}

const readingTime = (content: string | undefined) => {
  if (!content) return '1 min read'
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const mins = Math.max(1, Math.round(words / 220))
  return `${mins} min read`
}

const BlogDetail = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined)
  const [related, setRelated] = useState<BlogPost[]>([])

  useEffect(() => {
    let alive = true
    setPost(undefined)
    void getPublicBlogBySlug(slug).then((p) => {
      if (alive) setPost(p ?? null)
    })
    void getPublicBlogs(8).then((items) => {
      if (alive) setRelated(items.filter((i) => i.slug !== slug).slice(0, 3))
    })
    return () => {
      alive = false
    }
  }, [slug])

  const html = useMemo(() => renderMarkdown(post?.content || ''), [post?.content])

  if (post === undefined) {
    return (
      <main className={styles.page}>
        <div className={styles.loadingHero} aria-hidden="true" />
        <div className={styles.loadingBody} aria-hidden="true">
          <div className={styles.loadingLine} />
          <div className={styles.loadingLine} />
          <div className={styles.loadingLine} style={{ width: '60%' }} />
        </div>
      </main>
    )
  }

  if (post === null) {
    return (
      <main className={styles.page}>
        <section className={styles.notFound}>
          <div className={styles.notFoundInner}>
            <div className={styles.kicker}>404</div>
            <h1 className={styles.notFoundTitle}>This story could not be found.</h1>
            <p className={styles.notFoundHint}>
              It may have been unpublished or the link is incorrect.
            </p>
            <Link className={styles.notFoundBtn} to="/blog">
              ← Back to all posts
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <header id="page-hero" className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.crumbs}>
              <Link to="/" className={styles.crumb}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog" className={styles.crumb}>Blog</Link>
            </div>

            {post.tags?.[0] ? (
              <div className={styles.tagPill}>{post.tags[0].toUpperCase()}</div>
            ) : null}

            <h1 className={styles.title}>{post.title}</h1>

            {post.excerpt ? <p className={styles.excerpt}>{post.excerpt}</p> : null}

            <div className={styles.metaRow}>
              <div className={styles.author}>
                <div className={styles.authorAvatar} aria-hidden="true">
                  {(post.author || 'EV').slice(0, 2).toUpperCase()}
                </div>
                <div className={styles.authorMeta}>
                  <div className={styles.authorName}>{post.author || 'EdgeVerse Team'}</div>
                  <div className={styles.authorSub}>
                    {formatDate(post.publishedAt || post.createdAt)} · {readingTime(post.content)}
                  </div>
                </div>
              </div>

              {post.tags && post.tags.length > 1 ? (
                <div className={styles.tagList}>
                  {post.tags.slice(0, 4).map((t) => (
                    <span key={t} className={styles.tag}>
                      #{t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </header>

        {post.coverImage ? (
          <div className={styles.coverWrap}>
            <img className={styles.cover} src={post.coverImage} alt={post.title} />
          </div>
        ) : null}

        <div className={styles.bodyWrap}>
          <div
            className={styles.content}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className={styles.shareBar}>
            <span className={styles.shareLabel}>Share</span>
            <a
              className={styles.shareBtn}
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Share on X"
            >
              X
            </a>
            <a
              className={styles.shareBtn}
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Share on LinkedIn"
            >
              in
            </a>
            <button
              type="button"
              className={styles.shareBtn}
              onClick={() => {
                if (typeof navigator !== 'undefined' && navigator.clipboard) {
                  void navigator.clipboard.writeText(window.location.href)
                }
              }}
              aria-label="Copy link"
              title="Copy link"
            >
              ⧉
            </button>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className={styles.related} aria-label="Related posts">
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedTitle}>Continue reading</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r._id} to={`/blog/${r.slug}`} className={styles.relCard}>
                  <div className={styles.relMedia}>
                    {r.coverImage ? (
                      <img src={r.coverImage} alt={r.title} className={styles.relImg} />
                    ) : (
                      <div className={styles.relPlaceholder} aria-hidden="true" />
                    )}
                  </div>
                  <div className={styles.relBody}>
                    {r.tags?.[0] ? (
                      <div className={styles.relTag}>{r.tags[0].toUpperCase()}</div>
                    ) : null}
                    <div className={styles.relName}>{r.title}</div>
                    <div className={styles.relMeta}>
                      {formatDate(r.publishedAt || r.createdAt)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.cta} aria-label="Call to action">
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Want to put Perceiva&trade; on the road?</h2>
          <p className={styles.ctaText}>
            Talk to the EdgeVerse team about pilots, integrations, and partnerships.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>
            Schedule a Call <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default BlogDetail
