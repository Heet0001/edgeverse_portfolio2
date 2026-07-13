import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, registerGsapPlugins } from '../../utils/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import type { ProductDemo, ProductLine } from './productData'
import styles from './productLineSection.module.scss'

type ProductLineSectionProps = {
  line: ProductLine
  index: number
}

const DemoVideo = ({ demo }: { demo: ProductDemo }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video || reduceMotion) return
    void video.play().catch(() => {})
  }, [demo.video, reduceMotion])

  return (
    <video
      ref={videoRef}
      className={styles.demoVideo}
      src={demo.video}
      poster={demo.image}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-label={demo.imageAlt}
    />
  )
}

const ProductLineSection = ({ line, index }: ProductLineSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const demosRef = useRef<HTMLDivElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useScrollReveal(sectionRef, { variant: 'fadeUp', y: 24, delay: index * 0.05 })
  useScrollReveal(demosRef, {
    variant: 'stagger',
    stagger: 0.1,
    y: 20,
    childSelector: '[data-demo-item]',
  })

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion || line.status !== 'upcoming') return

    registerGsapPlugins()
    const badge = section.querySelector(`.${styles.statusBadge}`)
    if (!badge) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        badge,
        { opacity: 0.6 },
        { opacity: 1, duration: 1.4, repeat: -1, yoyo: true, ease: 'sine.inOut' },
      )
    }, section)

    return () => ctx.revert()
  }, [line.status, reduceMotion])

  const isUpcoming = line.status === 'upcoming'

  return (
    <section
      ref={sectionRef}
      id={line.id}
      className={`${styles.section} ${isUpcoming ? styles.upcoming : ''}`}
      aria-label={line.name}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
            {isUpcoming && <span className={styles.statusBadge}>Upcoming</span>}
          </div>
          <h2 className={styles.name}>{line.name}</h2>
          <p className={styles.tagline}>{line.tagline}</p>
          {line.description && <p className={styles.description}>{line.description}</p>}
        </div>

        {line.demos.length > 0 && (
          <div ref={demosRef} className={styles.demos}>
            {line.demos.map((demo) => {
              const isAvailable = demo.status === 'available'
              const cardInner = (
                <>
                  <div className={styles.demoMedia}>
                    {demo.video ? (
                      <DemoVideo demo={demo} />
                    ) : (
                      <img src={demo.image} alt={demo.imageAlt} loading="lazy" />
                    )}
                    <span
                      className={`${styles.demoStatus} ${
                        isAvailable ? styles.demoStatusAvailable : styles.demoStatusSoon
                      }`}
                    >
                      {isAvailable ? 'Available' : 'Coming soon'}
                    </span>
                  </div>
                  <h3 className={styles.demoTitle}>{demo.title}</h3>
                  {demo.featureIcons && demo.featureIcons.length > 0 && (
                    <div className={styles.demoFeatureIcons} aria-label={`${demo.title} features`}>
                      {demo.featureIcons.map((icon) => (
                        <div key={icon.label} className={styles.demoFeatureIcon} title={icon.label}>
                          <img src={icon.src} alt="" aria-hidden="true" />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )

              if (isAvailable && demo.href && !demo.video) {
                return (
                  <Link
                    key={demo.id}
                    to={demo.href}
                    className={styles.demoCard}
                    data-demo-item
                  >
                    {cardInner}
                  </Link>
                )
              }

              return (
                <article
                  key={demo.id}
                  className={`${styles.demoCard} ${isAvailable ? '' : styles.demoCardMuted}`}
                  data-demo-item
                >
                  {cardInner}
                </article>
              )
            })}
          </div>
        )}

        {isUpcoming && (
          <p className={styles.upcomingNote}>
            Factory automation intelligence — launching soon. Contact us to join early access.
          </p>
        )}
      </div>
    </section>
  )
}

export default ProductLineSection
