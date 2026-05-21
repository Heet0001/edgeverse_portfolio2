import styles from './productDeploymentSection.module.scss'
import { PRODUCT_DEPLOYMENTS } from './productData'

const ProductDeploymentSection = () => {
  return (
    <section className={styles.section} aria-label="Deployment models">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Built for every deployment model</h2>
          <p className={styles.subtitle}>
            From OEM integration to fleet management, Perceiva™ scales across every use case in
            the two-wheeler ecosystem.
          </p>
        </div>

        <div className={styles.grid}>
          {PRODUCT_DEPLOYMENTS.map((item) => (
            <article key={item.title} className={styles.card}>
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
