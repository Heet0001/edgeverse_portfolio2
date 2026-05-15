import styles from './investors.module.scss'

const investors = [
  {
    name: 'Aditya Sharma',
    role: 'Investor — Strategy',
    link: '#',
  },
  {
    name: 'Kris Gopalakrishnan',
    role: 'Investor — Technology',
    link: '#',
  },
  {
    name: 'Linda Sun',
    role: 'Investor — Operations',
    link: '#',
  },
  {
    name: "Chris D'Souza",
    role: 'Investor — Growth',
    link: '#',
  },
]

const Investors = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.kicker}>INVESTORS</div>
            <h1 className={styles.h1}>
              Backed by <span className={styles.accent}>visionaries</span>.
            </h1>
            <p className={styles.heroBlurb}>
              Industry leaders and visionary investors who guide our strategic direction
              and accelerate our mission to make roads safer.
            </p>
          </div>
        </div>
      </section>

      {/* Investors Grid */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {investors.map((a, i) => (
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
    </main>
  )
}

export default Investors
