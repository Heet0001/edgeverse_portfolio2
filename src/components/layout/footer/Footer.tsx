import styles from "./footer.module.css"
import footerMark from "../../../assets/images/EdgeVersefooter.png"
import footerlogo from "../../../assets/images/EdgeVersefooter.png"

const LinkCol = ({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; href: string }>
}) => {
  return (
    <div className={styles.col}>
      <div className={styles.colTitle}>{title}</div>
      {links.map((l) => (
        <a key={`${title}-${l.href}-${l.label}`} className={styles.colLink} href={l.href}>
          {l.label}
        </a>
      ))}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.bgMark} src={footerMark} alt="" aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.cols} aria-label="Footer links">
          <LinkCol
            title="TECHNOLOGY"
            links={[
              { label: "Perceiva™", href: "/technology" },
              { label: "IMedge® Hardware", href: "/technology" },
              { label: "India Perception Model", href: "/technology" },
              { label: "Safety Features", href: "/safety" },
            ]}
          />
          <LinkCol
            title="SOLUTIONS"
            links={[
              { label: "Two-wheeler OEMs", href: "/industries" },
              { label: "Tier-1 Suppliers", href: "/industries" },
              { label: "Fleet & Mobility", href: "/industries" },
              { label: "Aftermarket", href: "/industries" },
            ]}
          />
          <LinkCol
            title="CAREERS"
            links={[
              { label: "Open Roles", href: "/careers" },
              { label: "Life at EdgeVerse", href: "/careers" },
              { label: "Apply Now", href: "/careers" },
            ]}
          />
          <LinkCol
            title="COMPANY"
            links={[
              { label: "About Us", href: "/about" },
              { label: "Leadership", href: "/leadership" },
              { label: "Investors", href: "/investors" },
              { label: "News", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>

        <div className={styles.side}>
          <a className={styles.primaryBtn} href="/contact">
            Get Started
          </a>

          <div className={styles.socialRow} aria-label="Social links">
            <a className={styles.socialBtn} href="/" aria-label="X">
              <span className={styles.socialX} aria-hidden="true" />
            </a>
            <a className={styles.socialBtn} href="/" aria-label="LinkedIn">
              <span className={styles.socialIn} aria-hidden="true" />
            </a>
          </div>

          <address className={styles.address}>
            G01, #520, 8th Cross BEML Layout,
            <br />
            Thubarahalli, Bengaluru, Karnataka 560066
          </address>
        </div>
      </div>

      <div className={styles.footer_logo}>
        <img src={footerlogo} alt="EdgeVerse" />
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} — All rights reserved. EdgeVerse India Private Limited.</span>
        <span className={styles.bottomRight}>
          <a className={styles.bottomLink} href="/blog">
            Press and Media
          </a>
          <a className={styles.bottomLink} href="/terms-of-service">
            Terms of Service
          </a>
          <a className={styles.bottomLink} href="/privacy-policy">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
