import styles from './careerOpeningsSection.module.scss'

const openings = [
  {
    title: 'Embedded Systems Engineer',
    tags: ['Bengaluru', 'Full-time'],
    desc: 'Work on EdgeVerse\'s platform — firmware, BSP, and driver development for Perceiva™ embedded stack designed to operate on edge.',
  },
  {
    title: 'Computer Vision / AI Engineer',
    tags: ['Bengaluru', 'Full-time'],
    desc: 'Train and deploy DNN models for the Perceiva™ stack — object detection, tracking, and sensor fusion on devices. Build any pipeline from the ground up.',
  },
  {
    title: 'Product Designer',
    tags: ['Bengaluru, Remote', 'Full-time'],
    desc: 'Design rider dashboards, alert systems, and end-to-end experiences for ARAS-equipped two-wheelers. Shape visual identity between edge AI and safety in UX design.',
  },
]

const CareerOpeningsSection = () => {
  return (
    <section className={styles.section} aria-label="Current openings">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>OPEN POSITIONS</div>
          <h2 className={styles.title}>Current openings</h2>
        </div>

        <div className={styles.list}>
          {openings.map((job, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardInfo}>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <div className={styles.tags}>
                    {job.tags.map((tag, ti) => (
                      <span key={ti} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a href="/contact" className={styles.applyBtn}>
                  Apply <span aria-hidden="true">→</span>
                </a>
              </div>
              <p className={styles.jobDesc}>{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerOpeningsSection
