// import artparkLogo from "../../assets/images/artpark.png";
import atherLogo from "../../assets/images/ather.png";
import cavilLogo from "../../assets/images/cavil.png";
import styles from "./investors.module.scss";

type Partner = {
  name: string;
  logo?: string;
};

const TECHNOLOGY_PARTNERS: Partner[] = [
  { name: "Cavil Wireless", logo: cavilLogo },
];

const OEM_PARTNERS: Partner[] = [{ name: "Ather Energy", logo: atherLogo }];


const Investors = () => {
  return (
    <main>
      <section id="page-hero" className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.kicker}>Partners and Investors</div>
            <h1 className={styles.h1}>Building together at the edge.</h1>
            <p className={styles.heroBlurb}>
              We&apos;re building edge optimized perception &amp; intelligence
              layer for resource constrained systems. The layer for India&apos;s
              mobility, industrial automation segment — and we&apos;re doing it
              with people who share that belief.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.partnersSection}
        aria-label="Technology partners"
      >
        <div className={styles.inner}>
          <div className={styles.partnerHeader}>
            <h2 className={styles.partnerTitle}>Technology Partners</h2>
          </div>
          <ul className={styles.partnerList}>
            {TECHNOLOGY_PARTNERS.map((partner) => (
              <li
                key={partner.name}
                className={`${styles.partnerItem} ${partner.logo ? styles.partnerItemLogo : ""}`}
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={styles.partnerLogo}
                    loading="lazy"
                  />
                ) : (
                  partner.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={styles.partnersSection}
        aria-label="OEM and Tier-I partners"
      >
        <div className={styles.inner}>
          <div className={styles.partnerHeader}>
            <h2 className={styles.partnerTitle}>OEM &amp; Tier-I Partners</h2>
          </div>
          <ul className={styles.partnerList}>
            {OEM_PARTNERS.map((partner) => (
              <li
                key={partner.name}
                className={`${styles.partnerItem} ${partner.logo ? styles.partnerItemLogo : ""}`}
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={styles.partnerLogo}
                    loading="lazy"
                  />
                ) : (
                  partner.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* <section className={styles.partnersSection} aria-label="Investors">
        <div className={styles.inner}>
          <div className={styles.partnerHeader}>
            <h2 className={styles.partnerTitle}>Investors</h2>
          </div>
          <ul className={styles.partnerList}>
            {INVESTOR_PARTNERS.map((partner) => (
              <li
                key={partner.name}
                className={`${styles.partnerItem} ${partner.logo ? styles.partnerItemLogo : ""}`}
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={styles.partnerLogo}
                    loading="lazy"
                  />
                ) : (
                  partner.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </section> */}
    </main>
  );
};

export default Investors;
