import styles from './aboutLocationSection.module.scss'

const AboutLocationSection = () => {
  return (
    <section className={styles.section} aria-label="Our location">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>OUR LOCATION</div>
          <h2 className={styles.title}>Bengaluru, India.</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.addressCard}>
            <h3 className={styles.companyName}>EdgeVerse India Private Limited</h3>
            <address className={styles.address}>
              G01, #520, 8th Cross, BEML Layout<br />
              Thubarahalli, Bengaluru 560066<br />
              Karnataka, India
            </address>
            <div className={styles.contactInfo}>
              <a href="tel:+919845257858" className={styles.phone}>
                📞 +91 9845 257 858
              </a>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              title="EdgeVerse Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.72!3d12.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzM2LjAiTiA3N8KwNDMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutLocationSection
