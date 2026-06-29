import styles from "./legal.module.scss";
import LegalDocumentBody from "./LegalDocumentBody";
import { TERMS_OF_SERVICE_CONTENT } from "./termsContent";

const TermsOfService = () => {
  return (
    <main>
      <section id="page-hero" className={styles.hero} aria-label="Terms of Service hero">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.kicker}>LEGAL</div>
          <h1 className={styles.heroHeading}>Terms of Service</h1>
          <p className={styles.heroSubtitle}>{TERMS_OF_SERVICE_CONTENT.heroSubtitle}</p>
          <div className={styles.effectiveDate}>
            Last Updated: {TERMS_OF_SERVICE_CONTENT.lastUpdated}
          </div>
        </div>
      </section>

      <LegalDocumentBody content={TERMS_OF_SERVICE_CONTENT} />
    </main>
  );
};

export default TermsOfService;
