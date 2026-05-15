import styles from "./navbar.module.css"
import logo from "../../../assets/images/EdgeVerselogo.png"
import { useEffect, useId, useRef, useState } from "react"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const mobileMenuId = useId()
  const companyBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!companyOpen) return
    const onDoc = (e: MouseEvent) => {
      const el = companyBtnRef.current
      if (el && !el.contains(e.target as Node)) setCompanyOpen(false)
    }
    document.addEventListener("mousedown", onDoc)
    return () => document.removeEventListener("mousedown", onDoc)
  }, [companyOpen])

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

          <a href="/technology" className={styles.link}>
            Technology
          </a>

          <a href="/industries" className={styles.link}>
            Industries
          </a>

          <a href="/safety" className={styles.link}>
            Safety
          </a>

          <div className={`${styles.dropdown} ${companyOpen ? styles.dropdownOpen : ""}`}>
            <button
              type="button"
              ref={companyBtnRef}
              className={`${styles.link} ${styles.dropdownTrigger}`}
              aria-expanded={companyOpen}
              aria-haspopup="menu"
              id="nav-company-trigger"
              onClick={() => setCompanyOpen((v) => !v)}
            >
              <span className={styles.linkLabel}>Company</span>
              <span className={styles.caret} aria-hidden="true" />
            </button>
            <ul className={styles.dropdownMenu} role="menu" aria-labelledby="nav-company-trigger">
              <li role="none">
                <a href="/about" className={styles.dropdownItem} role="menuitem">
                  About
                </a>
              </li>
              <li role="none">
                <a href="/leadership" className={styles.dropdownItem} role="menuitem">
                  Leadership
                </a>
              </li>
              <li role="none">
                <a href="/investors" className={styles.dropdownItem} role="menuitem">
                  Investors
                </a>
              </li>
              <li role="none">
                <a href="/blog" className={styles.dropdownItem} role="menuitem">
                  Blog
                </a>
              </li>
              <li role="none">
                <a href="/careers" className={styles.dropdownItem} role="menuitem">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className={styles.actions}>
          <a className={styles.scheduleBtn} href="/contact">
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
            <div className={styles.mobileGroupLabel}>Company</div>
            <a href="/about" className={styles.mobileLinkSub} onClick={() => setMobileOpen(false)}>
              About
            </a>
            <a href="/leadership" className={styles.mobileLinkSub} onClick={() => setMobileOpen(false)}>
              Leadership
            </a>
            <a href="/investors" className={styles.mobileLinkSub} onClick={() => setMobileOpen(false)}>
              Investors
            </a>
            <a href="/blog" className={styles.mobileLinkSub} onClick={() => setMobileOpen(false)}>
              Blog
            </a>
            <a href="/careers" className={styles.mobileLinkSub} onClick={() => setMobileOpen(false)}>
              Careers
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
