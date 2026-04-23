import styles from './contactHeroSection.module.scss'

const ContactHeroSection = () => {
  return (
    <section className={styles.section} aria-label="Contact hero">
      <div className={styles.inner}>
        <h1 className={styles.heading}>Get in touch.</h1>
        <p className={styles.subtitle}>
          Whether you're an OEM, fleet operator, or technology partner
          — we'd love to explore how EdgeVerse can power your vision.
        </p>
      </div>
    </section>
  )
}

export default ContactHeroSection
