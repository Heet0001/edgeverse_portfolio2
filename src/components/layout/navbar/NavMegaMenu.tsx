import styles from "./navbar.module.css"
import type { NavMegaMenuConfig } from "./navConfig"
import { NAV_QUICK_LINKS } from "./navConfig"

type NavMegaMenuProps = {
  menu: NavMegaMenuConfig
  open: boolean
  onContentMouseEnter?: () => void
  onContentMouseLeave?: () => void
}

const NavMegaMenu = ({ menu, open, onContentMouseEnter, onContentMouseLeave }: NavMegaMenuProps) => {
  return (
    <div
      className={`${styles.megaPanel} ${open ? styles.megaPanelOpen : ""}`}
      role="region"
      aria-label={`${menu.label} menu`}
      aria-hidden={!open}
    >
      <div
        className={styles.megaInner}
        onMouseEnter={onContentMouseEnter}
        onMouseLeave={onContentMouseLeave}
      >
        <div className={styles.megaColIntro}>
          <h2 className={styles.megaHeading}>{menu.heading}</h2>
          <p className={styles.megaTagline}>{menu.tagline}</p>
        </div>

        <div className={styles.megaColLinks}>
          {menu.columns.map((column, colIdx) => (
            <div key={colIdx} className={styles.megaSubCol}>
              {column.map((item) => (
                <a key={item.href + item.title} href={item.href} className={styles.megaLinkBlock}>
                  <span className={styles.megaLinkTitle}>{item.title}</span>
                  <span className={styles.megaLinkDesc}>{item.description}</span>
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.megaColFeatured}>
          <a href={menu.featured.href} className={styles.megaFeaturedText}>
            <span className={styles.megaLinkTitle}>{menu.featured.title}</span>
            <span className={styles.megaLinkDesc}>{menu.featured.description}</span>
          </a>
          <a href={menu.featured.href} className={styles.megaFeaturedMedia}>
            <img src={menu.featured.image} alt={menu.featured.imageAlt} loading="lazy" />
          </a>
        </div>

        <aside className={styles.megaColAside} aria-label="Quick links">
          <nav className={styles.megaQuickLinks}>
            {NAV_QUICK_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={styles.megaQuickLink}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.megaSocial} aria-label="Social media">
            <a
              href="https://www.linkedin.com"
              className={styles.megaSocialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://twitter.com"
              className={styles.megaSocialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              X
            </a>
            <a
              href="https://www.youtube.com"
              className={styles.megaSocialIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              ▶
            </a>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default NavMegaMenu
