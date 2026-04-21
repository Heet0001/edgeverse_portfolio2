import styles from './aboutAdvisorsSection.module.scss'

const advisors = [
  {
    name: 'Aditya Sharma',
    role: 'Advisor — Strategy',
    link: '#',
  },
  {
    name: 'Kris Gopalakrishnan',
    role: 'Advisor — Technology',
    link: '#',
  },
  {
    name: 'Linda Sun',
    role: 'Advisor — Operations',
    link: '#',
  },
  {
    name: 'Chris D\'Souza',
    role: 'Advisor — Growth',
    link: '#',
  },
]

const AboutAdvisorsSection = () => {
  return (
    <section className={styles.section} aria-label="Guided by experience">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>ADVISORS</div>
          <h2 className={styles.title}>Guided by experience.</h2>
        </div>

        <div className={styles.grid}>
          {advisors.map((a, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardLeft}>
                <div className={styles.avatar}>
                  <span className={styles.avatarIcon}>👤</span>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{a.name}</h3>
                  <p className={styles.role}>{a.role}</p>
                </div>
              </div>
              <a href={a.link} className={styles.linkedIn} aria-label={`${a.name} LinkedIn`}>
                in
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutAdvisorsSection
