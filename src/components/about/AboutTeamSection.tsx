import styles from './aboutTeamSection.module.scss'

const team = [
  {
    initials: 'VP',
    name: 'Vasanth Prabhu',
    role: 'Co-Founder & CEO',
  },
  {
    initials: 'SG',
    name: 'Susanth Gunnam',
    role: 'Co-Founder & CTO',
  },
  {
    initials: 'PB',
    name: 'Pallavi Banthia',
    role: 'Co-Founder & COO',
  },
]

const AboutTeamSection = () => {
  return (
    <section className={styles.section} aria-label="Meet the team">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>OUR TEAM</div>
          <h2 className={styles.title}>Meet the team.</h2>
          <p className={styles.subtitle}>
            Engineers, researchers, and builders creating India's first ARAS — spanning AI, embedded systems,
            hardware design, and product development.
          </p>
        </div>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.avatar}>
                <span className={styles.initials}>{member.initials}</span>
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeamSection
