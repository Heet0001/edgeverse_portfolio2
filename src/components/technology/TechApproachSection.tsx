import { useState } from 'react'
import styles from './techApproachSection.module.scss'
import { TECH_CLOUD_PIPELINE, TECH_EDGE_PIPELINE } from './technologyData'

const TechApproachSection = () => {
  const [mode, setMode] = useState<'edge' | 'cloud'>('edge')
  const steps = mode === 'edge' ? TECH_EDGE_PIPELINE : TECH_CLOUD_PIPELINE
  const footer =
    mode === 'edge'
      ? 'Single neural network · <100ms latency · Zero cloud dependency'
      : 'Network round-trip · Higher latency · Cloud connectivity required'

  return (
    <section className={styles.section} aria-label="EdgeVerse approach">
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
          <div className={styles.flow}>
            {steps.map((step, index) => (
              <div key={step} className={styles.flowItem}>
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
