import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, registerGsapPlugins } from '../../utils/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './techApproachSection.module.scss'
import { TECH_CLOUD_PIPELINE, TECH_EDGE_PIPELINE } from './technologyData'

const TechApproachSection = () => {
  const [mode, setMode] = useState<'edge' | 'cloud'>('edge')
  const sectionRef = useRef<HTMLElement>(null)
  const flowRef = useRef<HTMLDivElement>(null)
  const reduceMotion = usePrefersReducedMotion()
  const steps = mode === 'edge' ? TECH_EDGE_PIPELINE : TECH_CLOUD_PIPELINE
  const footer =
    mode === 'edge'
      ? 'Single neural network · <100ms latency · Zero cloud dependency'
      : 'Network round-trip · Higher latency · Cloud connectivity required'

  useScrollReveal(sectionRef, { variant: 'fadeUp', y: 24 })

  useLayoutEffect(() => {
    const flow = flowRef.current
    if (!flow || reduceMotion) return

    registerGsapPlugins()
    const steps = flow.querySelectorAll(`.${styles.step}`)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        steps,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power2.out' },
      )
    }, flow)

    return () => ctx.revert()
  }, [mode, reduceMotion])

  return (
    <section ref={sectionRef} className={styles.section} aria-label="EdgeVerse approach">
      <div className={styles.inner}>
        <p className={styles.kicker}>Pioneering the edge AI perception model</p>
        <h2 className={styles.title}>EdgeVerse&apos;s Approach</h2>
        <p className={styles.intro}>
          Our approach replaces the traditional cloud-dependent pipeline with a single on-device
          neural network that converts raw camera input into real-time safety outputs.
        </p>

        <div className={styles.toggle} role="tablist" aria-label="Pipeline comparison">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'edge'}
            className={`${styles.toggleBtn} ${mode === 'edge' ? styles.toggleBtnActive : ''}`}
            onClick={() => setMode('edge')}
          >
            Edge AI (EdgeVerse)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'cloud'}
            className={`${styles.toggleBtn} ${mode === 'cloud' ? styles.toggleBtnActive : ''}`}
            onClick={() => setMode('cloud')}
          >
            Cloud-based (Traditional)
          </button>
        </div>

        <div className={styles.diagram}>
          <div ref={flowRef} className={styles.flow}>
            {steps.map((step, index) => (
              <div key={`${mode}-${step}`} className={styles.flowItem}>
                <div
                  className={`${styles.step} ${
                    mode === 'edge' && index === 1 ? styles.stepHighlight : ''
                  }`}
                >
                  {step}
                </div>
                {index < steps.length - 1 && (
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className={styles.footer}>{footer}</p>
        </div>
      </div>
    </section>
  )
}

export default TechApproachSection
