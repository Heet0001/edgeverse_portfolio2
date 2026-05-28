import { useLayoutEffect, useRef } from 'react'
import { gsap, registerGsapPlugins, ScrollTrigger } from '../../utils/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { TECH_ARCHITECTURE_IMAGES, TECH_STACK_LAYERS } from './technologyData'
import styles from './techArchitectureStackSection.module.scss'

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
  const layersRef = useRef<HTMLDivElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useScrollReveal(sectionRef, { variant: 'fadeUp', y: 20 })

  useLayoutEffect(() => {
    const section = sectionRef.current
    const diagram = diagramRef.current
    const layers = layersRef.current
    if (!section || !diagram || !layers || reduceMotion) return

    registerGsapPlugins()

    const blocks = layers.querySelectorAll(`.${styles.layerBlock}`)
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

      blocks.forEach((block, index) => {
        gsap.from(block, {
          opacity: 0,
          x: -16,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })

        ScrollTrigger.create({
          trigger: block,
          start: 'top 55%',
          end: 'bottom 45%',
          onEnter: () => highlightStack(index),
          onEnterBack: () => highlightStack(index),
        })
      })
    }, section)

    function highlightStack(activeIndex: number) {
      stackBars.forEach((bar, i) => {
        gsap.to(bar, {
          opacity: i === activeIndex ? 1 : 0.35,
          scaleX: i === activeIndex ? 1 : 0.92,
          duration: 0.35,
          ease: 'power2.out',
        })
      })
    }

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Perceiva architecture stack">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Platform architecture</p>
          <h2 className={styles.title}>End-to-end perception intelligence</h2>
          <p className={styles.lead}>
            From diverse sensor inputs to protected customer IP — Perceiva™ is structured as a
            modular stack designed for co-development with OEM partners.
          </p>
        </div>

        <div className={styles.layout}>
          <div ref={diagramRef} className={styles.diagram} aria-hidden="true">
            <div className={styles.diagramInner}>
              <p className={styles.diagramLabel}>High-level structure</p>
              <div className={styles.stack}>
                {TECH_STACK_LAYERS.map((layer, index) => (
                  <div key={layer.id} className={styles.stackRow}>
                    <span className={styles.stackLabel}>{LAYER_LABELS[index]}</span>
                    <span className={styles.stackBar} />
                  </div>
                ))}
              </div>
              <p className={styles.diagramNote}>
                Architecture diagram — detailed structure in progress
              </p>
            </div>
            <img
              className={styles.diagramImage}
              src={TECH_ARCHITECTURE_IMAGES.diagram}
              alt=""
              loading="lazy"
            />
          </div>

          <div ref={layersRef} className={styles.layers}>
            {TECH_STACK_LAYERS.map((layer, index) => (
              <article key={layer.id} id={layer.id} className={styles.layerBlock}>
                <div className={styles.layerMeta}>
                  <span className={styles.layerIndex}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.layerRule} aria-hidden="true" />
                </div>
                <h3 className={styles.layerTitle}>{layer.title}</h3>
                <p className={styles.layerDesc}>{layer.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechArchitectureStackSection
