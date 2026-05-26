import { useRef } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './productDeploymentSection.module.scss'
import { PRODUCT_DEPLOYMENTS } from './productData'

const ProductDeploymentSection = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useScrollReveal(headerRef, { variant: 'fadeUp', y: 22 })
  useScrollReveal(gridRef, { variant: 'stagger', stagger: 0.1, y: 24 })

  return (
    <section className={styles.section} aria-label="Deployment models">
      <div className={styles.inner}>
        <div ref={headerRef} className={styles.header}>
          <h2 className={styles.title}>Built for every deployment model</h2>
          <p className={styles.subtitle}>
            From OEM integration to fleet management, Perceiva™ scales across every use case in
            the two-wheeler ecosystem.
          </p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {PRODUCT_DEPLOYMENTS.map((item) => (
            <article key={item.title} className={styles.card} data-reveal-item>
              <div className={styles.icon} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <a className={styles.cardLink} href={item.href}>
                Learn more
                <span aria-hidden="true"> →</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductDeploymentSection
