import headerStyles from "../technology/techSectionHeader.module.scss";
import { COMPANY_TRUSTED_PARTNERS } from "./companyPartnersData";
import styles from "./companyPartnersSection.module.scss";

const CompanyPartnersSection = () => {
  return (
    <section
      id="partners"
      className={styles.section}
      aria-label="Partners and investors"
    >
      <div className={styles.inner}>
        <header className={headerStyles.light}>
          <h2 className={headerStyles.title}>Partners and Investors</h2>
          <p className={headerStyles.subtitle}>
            Technology and OEM partners building at the edge with EdgeVerse.
          </p>
        </header>

        <ul className={styles.partnerList}>
          {COMPANY_TRUSTED_PARTNERS.map((partner) => (
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
  );
};

export default CompanyPartnersSection;
