import styles from "./footer.module.css";
import logo from "../../../assets/images/edgeverse_newlogo.png";
import SocialLinks from "../SocialLinks";

const LinkCol = ({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) => {
  return (
    <div className={styles.block}>
      <h6 className={styles.blockTitle}>{title}</h6>
      <ul className={styles.menu}>
        {links.map((l) => (
          <li key={`${title}-${l.href}-${l.label}`} className={styles.menuItem}>
            <a className={styles.menuLink} href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.block}>
          <h6 className={styles.blockTitle}>Contact</h6>
          <p className={styles.contactLine}>
            <a className={styles.contactLink} href="/contact">
              Get Started
            </a>
          </p>
        </div>

        <LinkCol
          title="TECHNOLOGY"
          links={[
            { label: "Perceiva™", href: "/technology" },
            { label: "IMedge® Hardware", href: "/product#imedge" },

            // { label: "Safety Features", href: "/safety" },
          ]}
        />

        <LinkCol
          title="CAREERS"
          links={[
            { label: "Open Roles", href: "/about#careers" },
            { label: "Life at EdgeVerse", href: "/about#careers" },
            { label: "Apply Now", href: "/about#careers" },
          ]}
        />

        <LinkCol
          title="COMPANY"
          links={[
            { label: "About Us", href: "/about#about" },
            { label: "Leadership", href: "/about#leadership" },
            { label: "Partners", href: "/#partners" },
            { label: "Careers", href: "/about#careers" },
            { label: "News", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      </div>

      <div className={styles.subfooter}>
        <div className={styles.companyInfo}>
          <img className={styles.logo} src={logo} alt="EdgeVerse" />
          <p className={styles.legalCopy}>
            © {new Date().getFullYear()} — All rights reserved. EdgeVerse India
            Private Limited.
          </p>
        </div>

        <div className={styles.socialAndLinks}>
          <SocialLinks variant="footer" className={styles.social} />

          <ul className={styles.subfooterMenu}>
            <li className={styles.menuItem}>
              <a className={styles.subfooterLink} href="/blog">
                Press and Media
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.subfooterLink} href="/terms-of-service">
                Terms of Service
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.subfooterLink} href="/privacy-policy">
                Privacy Policy
              </a>
            </li>
          </ul>

          <p className={styles.officeSummary}>
            <span>
              <strong>Registered Office:</strong> G01, #520, 8th Cross BEML
              Layout, Thubarahalli, Bengaluru, Karnataka 560066
            </span>
            <span>
              <strong>Corporate Office:</strong> 5th Floor, Mpark, 32/1,
              Sonnenahalli, Doddanekundi Industrial Area, Mahadevapura Post,
              Bengaluru- 560048
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
