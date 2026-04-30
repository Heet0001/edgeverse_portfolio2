import styles from "./navbar.module.css"
import logo from "../../../assets/images/EdgeVerselogo.png"
import { useEffect, useId, useState } from "react"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuId = useId()

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

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

          <button
            type="button"
            className={styles.hamburgerBtn}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={styles.hamburgerIcon} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      >
        <div className={styles.mobileBackdrop} aria-hidden="true" />
        <div
          id={mobileMenuId}
          className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileHeader}>
            <span className={styles.mobileTitle}>Menu</span>
            <button
              type="button"
              className={styles.closeBtn}
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <span className={styles.closeIcon} aria-hidden="true" />
            </button>
          </div>
          <nav className={styles.mobileLinks} aria-label="Mobile primary">
            <a href="/" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              Home
            </a>
            <a
              href="/technology"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              Technology
            </a>
            <a
              href="/industries"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              Industries
            </a>
            <a href="/safety" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              Safety
            </a>
            <a href="/about" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
              About
            </a>
            <a
              href="/careers"
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              Careers
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar