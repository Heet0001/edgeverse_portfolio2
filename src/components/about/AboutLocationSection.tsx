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
              5th Floor, Mpark, 32/1, Sonnenahalli<br />
              Doddanekundi Industrial Area, Mahadevapura Post<br />
              Bengaluru- 560048, Karnataka, India
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
              src="https://www.google.com/maps?q=EdgeVerse+India+Private+Limited,+5th+Floor,+Mpark,+Sonnenahalli,+Mahadevapura,+Bengaluru+560048&z=15&output=embed"
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
