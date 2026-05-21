import { useState } from 'react'
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
  const active = FEATURES.find((f) => f.id === activeId) ?? FEATURES[0]
  const inactiveFeatures = FEATURES.filter((f) => f.id !== activeId)

  return (
    <section className={styles.section} aria-label="EdgeVerse capabilities">
      <div className={styles.bgStack} aria-hidden="true">
        {FEATURES.map((feature) => (
          <img
            key={feature.id}
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
          <div key={activeId} className={styles.activePanel}>
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
                onClick={() => setActiveId(feature.id)}
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
