import styles from './twoWheelerSurveySection.module.scss'

const initials = ['PC', 'VC', 'AP', 'AK'] as const

const TwoWheelerSurveySection = () => {
  return (
    <section className={styles.section} aria-label="Two-wheeler safety survey">
      <div className={styles.inner}>
        <div className={styles.kicker}>Two-Wheeler Safety Survey</div>

        <div className={styles.quoteMark} aria-hidden="true">
          “
        </div>

        <h2 className={styles.quote}>
          An alert for cars in your blind spot would be
          <br />
          very helpful.
        </h2>

        <div className={styles.metaRow}>
          <div className={styles.author}>
            Vivek C <span className={styles.sep} aria-hidden="true">—</span> Avid Rider
          </div>

          <a className={styles.cta} href="/safety">
            <span className={styles.ctaDot} aria-hidden="true" />
            Learn how ARAS protects riders
          </a>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.avatars} aria-label="Survey participants">
            {initials.map((s) => (
              <span key={s} className={styles.avatar} aria-hidden="true">
                {s}
              </span>
            ))}
          </div>

          <div className={styles.pager} aria-label="Carousel position">
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.dotActive} aria-hidden="true" />
            <span className={styles.dot} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoWheelerSurveySection

