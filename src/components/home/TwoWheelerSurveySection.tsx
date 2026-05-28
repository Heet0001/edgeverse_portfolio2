import styles from './twoWheelerSurveySection.module.scss'
import { useHomeContent } from '../../api/useHomeContent'

const initials = ['PC', 'VC', 'AP', 'AK'] as const

const FALLBACK = {
  kicker: 'Two-Wheeler Safety Survey',
  quote:
    'Alerts in Low-Light scenarios are extremely critical. This technology could save thousands of lives on Indian highways every year.',
  author: 'Pranay C Nath',
  authorRole: 'Avid Rider',
}

const TwoWheelerSurveySection = () => {
  const { home } = useHomeContent()
  const kicker = home?.surveyKicker?.trim() || FALLBACK.kicker
  const quote = home?.surveyQuote?.trim() || FALLBACK.quote
  const author = home?.surveyAuthor?.trim() || FALLBACK.author
  const authorRole = home?.surveyAuthorRole?.trim() || FALLBACK.authorRole

  return (
    <section className={styles.section} aria-label="Two-wheeler safety survey">
      <div className={styles.inner}>
        <div className={styles.kicker}>{kicker}</div>

        <div className={styles.quoteMark} aria-hidden="true">
          “
        </div>

        <h2 className={styles.quote}>{quote}</h2>

        <div className={styles.metaRow}>
          <div className={styles.author}>
            {author} <span className={styles.sep} aria-hidden="true">—</span> {authorRole}
          </div>
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
