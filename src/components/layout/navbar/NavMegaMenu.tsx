import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import type { NavMegaMenuConfig } from "./navConfig"
import { NAV_QUICK_LINKS } from "./navConfig"
import SocialLinks from "../SocialLinks"

export type NavMegaTheme = "hero" | "solid"

type NavMegaMenuProps = {
  menu: NavMegaMenuConfig
  open: boolean
  navMode: NavMegaTheme
  onContentMouseEnter?: () => void
  onContentMouseLeave?: () => void
  onNavigate?: () => void
}

const NavMegaMenu = ({
  menu,
  open,
  navMode,
  onContentMouseEnter,
  onContentMouseLeave,
  onNavigate,
}: NavMegaMenuProps) => {
  const hasFeaturedText = Boolean(menu.featured.title || menu.featured.description);

  return (
    <div
      className={`${styles.megaPanel} ${open ? styles.megaPanelOpen : ""}`}
      role="region"
      aria-label={`${menu.label} menu`}
      aria-hidden={!open}
    >
      <div
        className={`${styles.megaInner} ${navMode === "hero" ? styles.megaThemeHero : ""}`}
        onMouseEnter={onContentMouseEnter}
        onMouseLeave={onContentMouseLeave}
      >
        <div className={styles.megaColIntro}>
          <h2 className={styles.megaHeading}>{menu.heading}</h2>
          <p className={styles.megaTagline}>{menu.tagline}</p>
        </div>

        <div
          className={`${styles.megaColLinks} ${
            menu.linksLayout === "twoColumn" ? styles.megaColLinksTwoColumn : ""
          }`}
        >
          {menu.linksLayout === "twoColumn" ? (
            menu.columns.flat().map((item) => (
              <Link
                key={item.href + item.title}
                to={item.href}
                className={styles.megaLinkBlock}
                onClick={onNavigate}
              >
                <span className={styles.megaLinkTitle}>{item.title}</span>
                <span className={styles.megaLinkDesc}>{item.description}</span>
              </Link>
            ))
          ) : (
            menu.columns.map((column, colIdx) => (
              <div key={colIdx} className={styles.megaSubCol}>
                {column.map((item) => (
                  <Link
                    key={item.href + item.title}
                    to={item.href}
                    className={styles.megaLinkBlock}
                    onClick={onNavigate}
                  >
                    <span className={styles.megaLinkTitle}>{item.title}</span>
                    <span className={styles.megaLinkDesc}>{item.description}</span>
                  </Link>
                ))}
              </div>
            ))
          )}
        </div>

        <div
          className={`${styles.megaColFeatured} ${hasFeaturedText ? "" : styles.megaColFeaturedMediaOnly}`}
        >
          {hasFeaturedText && (
            <Link
              to={menu.featured.href}
              className={styles.megaFeaturedText}
              onClick={onNavigate}
            >
              <span className={styles.megaLinkTitle}>{menu.featured.title}</span>
              <span className={styles.megaLinkDesc}>{menu.featured.description}</span>
            </Link>
          )}
          <Link
            to={menu.featured.href}
            className={`${styles.megaFeaturedMedia} ${
              menu.featured.imageFit === "contain" ? styles.megaFeaturedMediaContain : ""
            }`}
            onClick={onNavigate}
          >
            <img src={menu.featured.image} alt={menu.featured.imageAlt} loading="lazy" />
          </Link>
        </div>

        <aside className={styles.megaColAside} aria-label="Quick links">
          <nav className={styles.megaQuickLinks}>
            {NAV_QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={styles.megaQuickLink}
                onClick={onNavigate}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialLinks
            variant="navbar"
            heroTheme={navMode === "hero"}
            className={styles.megaSocial}
          />
        </aside>
      </div>
    </div>
  )
}

export default NavMegaMenu
