import styles from "./legal.module.scss";
import LegalDocumentBody from "./LegalDocumentBody";
import { PRIVACY_POLICY_CONTENT } from "./privacyContent";

const PrivacyPolicy = () => {
  return (
    <main>
      <section id="page-hero" className={styles.hero} aria-label="Privacy Policy hero">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.kicker}>LEGAL</div>
          <h1 className={styles.heroHeading}>Privacy Policy</h1>
          <p className={styles.heroSubtitle}>{PRIVACY_POLICY_CONTENT.heroSubtitle}</p>
          <div className={styles.effectiveDate}>
            Last Updated: {PRIVACY_POLICY_CONTENT.lastUpdated}
          </div>
        </div>
      </section>

      <LegalDocumentBody content={PRIVACY_POLICY_CONTENT} />
    </main>
  );
};

export default PrivacyPolicy;
