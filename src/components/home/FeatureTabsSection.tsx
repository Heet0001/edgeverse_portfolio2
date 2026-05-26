import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, registerGsapPlugins } from '../../utils/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './featureTabsSection.module.scss'
import dataDrivenImg from '../../assets/images/feature-data-driven.png'
import safetyImg from '../../assets/images/feature-safety.png'
import maplessImg from '../../assets/images/feature-mapless.png'
import universalAiImg from '../../assets/images/feature-universal-ai.png'

const FEATURES = [
  {
    id: 'data-driven',
    title: 'Data-driven',
    description:
      'EdgeVerse AI perception software learns to see using real-world data, equipping vehicles with advanced human-like awareness capabilities.',
    image: dataDrivenImg,
  },
  {
    id: 'safety',
    title: 'Unparalleled safety',
    description:
      "Every EdgeVerse perception model is built with safety at its core, validated rigorously across India's most demanding road scenarios.",
    image: safetyImg,
  },
  {
    id: 'mapless',
    title: 'Mapless',
    description:
      'Our perception intelligence navigates without HD maps, adapting in real-time to any road — from highways to unstructured village lanes.',
    image: maplessImg,
  },
  {
    id: 'universal-ai',
    title: 'Universal AI',
    description:
      'One AI model that generalises across vehicle types, sensor configurations, and geographies — truly universal perception.',
    image: universalAiImg,
  },
] as const

type FeatureId = (typeof FEATURES)[number]['id']

const FeatureTabsSection = () => {
  const [activeId, setActiveId] = useState<FeatureId>('data-driven')
  const sectionRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const bgRefs = useRef<Record<FeatureId, HTMLImageElement | null>>({
    'data-driven': null,
    safety: null,
    mapless: null,
    'universal-ai': null,
  })
  const reduceMotion = usePrefersReducedMotion()
  const active = FEATURES.find((f) => f.id === activeId) ?? FEATURES[0]
  const inactiveFeatures = FEATURES.filter((f) => f.id !== activeId)

  useScrollReveal(sectionRef, { variant: 'fadeUp', y: 24, start: 'top 85%' })

  useLayoutEffect(() => {
    if (reduceMotion) return

    registerGsapPlugins()

    FEATURES.forEach((feature) => {
      const img = bgRefs.current[feature.id]
      if (!img) return
      gsap.set(img, { opacity: feature.id === 'data-driven' ? 1 : 0, scale: 1.08 })
    })
  }, [reduceMotion])

  useLayoutEffect(() => {
    const panel = panelRef.current
    if (!panel || reduceMotion) return

    registerGsapPlugins()

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
      )
    }, panel)

    return () => ctx.revert()
  }, [activeId, reduceMotion])

  const handleTabChange = (id: FeatureId) => {
    if (id === activeId) return

    const prevImg = bgRefs.current[activeId]
    const nextImg = bgRefs.current[id]

    if (!reduceMotion && prevImg && nextImg) {
      registerGsapPlugins()
      gsap.to(prevImg, { opacity: 0, duration: 0.5, ease: 'power2.inOut' })
      gsap.fromTo(
        nextImg,
        { opacity: 0, scale: 1.12 },
        { opacity: 1, scale: 1.08, duration: 0.65, ease: 'power2.out' },
      )
    }

    setActiveId(id)
  }

  return (
    <section ref={sectionRef} className={styles.section} aria-label="EdgeVerse capabilities">
      <div className={styles.bgStack} aria-hidden="true">
        {FEATURES.map((feature) => (
          <img
            key={feature.id}
            ref={(el) => {
              bgRefs.current[feature.id] = el
            }}
            className={`${styles.bgImage} ${activeId === feature.id ? styles.bgImageActive : ''}`}
            src={feature.image}
            alt=""
          />
        ))}
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.rail} aria-hidden="true" />

        <div className={styles.panel}>
          <div ref={panelRef} key={activeId} className={styles.activePanel}>
            <h2 className={styles.activeTitle}>{active.title}</h2>
            <p className={styles.activeDesc}>{active.description}</p>
            <span className={styles.activeRule} aria-hidden="true" />
          </div>

          <div className={styles.inactiveList} role="tablist" aria-label="Capabilities">
            {inactiveFeatures.map((feature) => (
              <button
                key={feature.id}
                type="button"
                className={styles.inactiveBtn}
                role="tab"
                aria-selected={false}
                onClick={() => handleTabChange(feature.id)}
              >
                <span className={styles.bullet} aria-hidden="true" />
                {feature.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureTabsSection
