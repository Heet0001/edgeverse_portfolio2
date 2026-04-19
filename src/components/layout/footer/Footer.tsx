import styles from "./footer.module.css"
import footerMark from "../../../assets/images/EdgeVersefooter.png"

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
            title="PLATFORM"
            links={[
              { label: "Technology", href: "/technology" },
              { label: "Imedge® Hardware", href: "/technology" },
              { label: "Perceiva™ Software", href: "/technology" },
              { label: "Safety Features", href: "/safety" },
            ]}
          />
          <LinkCol
            title="INDUSTRIES"
            links={[
              { label: "Safe Mobility", href: "/industries" },
              { label: "Smart Surveillance", href: "/industries" },
              { label: "Industrial Automation", href: "/industries" },
            ]}
          />
          <LinkCol
            title="COMPANY"
            links={[
              { label: "About Us", href: "/about" },
              { label: "Leadership", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/about" },
            ]}
          />
          <LinkCol
            title="RESOURCES"
            links={[
              { label: "Documentation", href: "/" },
              { label: "Case Studies", href: "/" },
              { label: "Blog", href: "/news" },
            ]}
          />
        </div>

        <div className={styles.side}>
          <a className={styles.primaryBtn} href="/careers">
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

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} — All rights reserved. EdgeVerse India Private Limited.</span>
        <span className={styles.bottomRight}>
          <a className={styles.bottomLink} href="/">
            Press and Media
          </a>
          <a className={styles.bottomLink} href="/">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer