import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, registerGsapPlugins } from '../../utils/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { TECH_ARCHITECTURE_IMAGES, TECH_STACK_LAYERS } from './technologyData'
import styles from './techArchitectureStackSection.module.scss'
import platformArchitectureVideo from '../../assets/videos/Comp a.webm'

const LAYER_LABELS = [
  'Input',
  'Perception',
  'Intelligence',
  'Deploy',
  'Learning',
  'Vault',
]

const TechArchitectureStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const diagramRef = useRef<HTMLDivElement>(null)
  const layersScrollRef = useRef<HTMLDivElement>(null)
  const layerBlockRefs = useRef<(HTMLElement | null)[]>([])
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeLayer, setActiveLayer] = useState(0)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(true)
  const reduceMotion = usePrefersReducedMotion()

  useScrollReveal(sectionRef, { variant: 'fadeUp', y: 20 })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (reduceMotion) {
      video.pause()
      return
    }

    void video.play().catch(() => {})
  }, [reduceMotion])

  const updateActiveFromScroll = useCallback(() => {
    const container = layersScrollRef.current
    if (!container) return

    const { scrollTop, scrollHeight, clientHeight } = container
    setCanScrollUp(scrollTop > 8)
    setCanScrollDown(scrollTop + clientHeight < scrollHeight - 8)

    const marker = scrollTop + clientHeight * 0.38
    let nextActive = 0

    layerBlockRefs.current.forEach((block, index) => {
      if (!block) return
      if (block.offsetTop <= marker) {
        nextActive = index
      }
    })

    setActiveLayer(nextActive)
  }, [])

  const scrollToLayer = useCallback(
    (index: number) => {
      const container = layersScrollRef.current
      const block = layerBlockRefs.current[index]
      if (!container || !block) return

      const targetTop = block.offsetTop - 12
      container.scrollTo({
        top: Math.max(0, targetTop),
        behavior: reduceMotion ? 'auto' : 'smooth',
      })
      setActiveLayer(index)
    },
    [reduceMotion],
  )

  useEffect(() => {
    const container = layersScrollRef.current
    if (!container) return

    updateActiveFromScroll()
    container.addEventListener('scroll', updateActiveFromScroll, { passive: true })
    window.addEventListener('resize', updateActiveFromScroll)

    return () => {
      container.removeEventListener('scroll', updateActiveFromScroll)
      window.removeEventListener('resize', updateActiveFromScroll)
    }
  }, [updateActiveFromScroll])

  useLayoutEffect(() => {
    const section = sectionRef.current
    const diagram = diagramRef.current
    if (!section || !diagram || reduceMotion) return

    registerGsapPlugins()

    const stackBars = diagram.querySelectorAll(`.${styles.stackBar}`)

    const ctx = gsap.context(() => {
      gsap.from(stackBars, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: diagram,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Perceiva architecture stack">
      <div className={styles.inner}>
        <div className={styles.videoWrap}>
          <video
            ref={videoRef}
            className={styles.video}
            src={platformArchitectureVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Platform architecture overview"
          />
        </div>

        <div className={styles.header}>
          <p className={styles.kicker}>Platform architecture</p>
          <h2 className={styles.title}>End-to-end perception intelligence</h2>
          <p className={styles.lead}>
            From diverse sensor inputs to protected customer IP — Perceiva™ is structured as a
            modular stack designed for co-development with OEM partners.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.diagramCol}>
            <div ref={diagramRef} className={styles.diagram} aria-hidden="true">
              <div className={styles.diagramInner}>
                <p className={styles.diagramLabel}>High-level structure</p>
                <div className={styles.stack}>
                  {TECH_STACK_LAYERS.map((layer, index) => (
                    <button
                      key={layer.id}
                      type="button"
                      className={`${styles.stackRow} ${activeLayer === index ? styles.stackRowActive : ''}`}
                      onClick={() => scrollToLayer(index)}
                      aria-current={activeLayer === index ? 'true' : undefined}
                      aria-label={`View ${layer.title}`}
                    >
                      <span className={styles.stackLabel}>{LAYER_LABELS[index]}</span>
                      <span className={styles.stackBar} />
                    </button>
                  ))}
                </div>
                <p className={styles.diagramNote}>
                  Select a layer or scroll the panel to explore
                </p>
              </div>
              <img
                className={styles.diagramImage}
                src={TECH_ARCHITECTURE_IMAGES.diagram}
                alt=""
                loading="lazy"
              />
            </div>
          </div>

          <div
            className={`${styles.layersPanel} ${canScrollUp ? styles.layersPanelCanScrollUp : ''} ${canScrollDown ? styles.layersPanelCanScrollDown : ''}`}
          >
            <div ref={layersScrollRef} className={styles.layersScroll}>
              <div className={styles.layers}>
                {TECH_STACK_LAYERS.map((layer, index) => (
                  <article
                    key={layer.id}
                    id={layer.id}
                    ref={(el) => {
                      layerBlockRefs.current[index] = el
                    }}
                    className={`${styles.layerBlock} ${activeLayer === index ? styles.layerBlockActive : ''}`}
                    onMouseEnter={() => setActiveLayer(index)}
                    onFocus={() => setActiveLayer(index)}
                  >
                    <div className={styles.layerMeta}>
                      <span className={styles.layerIndex}>{String(index + 1).padStart(2, '0')}</span>
                      <span className={styles.layerRule} aria-hidden="true" />
                    </div>
                    <h3 className={styles.layerTitle}>{layer.title}</h3>
                    <p className={styles.layerDesc}>{layer.description}</p>
                    {layer.note ? <p className={styles.layerNote}>{layer.note}</p> : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechArchitectureStackSection
