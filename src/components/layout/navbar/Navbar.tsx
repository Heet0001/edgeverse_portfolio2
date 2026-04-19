import styles from "./navbar.module.css"
import logo from "../../../assets/images/EdgeVerselogo.png"

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/">
          <img className={styles.logo} src={logo} alt="EDGEVERSE" />
        </a>

        <nav className={styles.links} aria-label="Primary">
          <a href="/" className={styles.link}>
            Home
          </a>

          <a href="/technology" className={styles.link} aria-haspopup="menu">
            <span className={styles.linkLabel}>Technology</span>
            <span className={styles.caret} aria-hidden="true" />
          </a>

          <a href="/industries" className={styles.link} aria-haspopup="menu">
            <span className={styles.linkLabel}>Industries</span>
            <span className={styles.caret} aria-hidden="true" />
          </a>

          <a href="/safety" className={styles.link}>
            Safety
          </a>

          <a href="/about" className={styles.link}>
            About
          </a>

          <a href="/careers" className={styles.link}>
            Careers
          </a>
        </nav>

        <div className={styles.actions}>
          <a className={styles.scheduleBtn} href="/schedule">
            Schedule a Call
          </a>

          <button className={styles.iconBtn} type="button" aria-label="Toggle theme">
            <span className={styles.moonIcon} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar