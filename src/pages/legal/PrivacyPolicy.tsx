import styles from './legal.module.scss'

const PrivacyPolicy = () => {
  return (
    <main>
      {/* ── Hero ─────────────────────────────── */}
      <section className={styles.hero} aria-label="Privacy Policy hero">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.kicker}>LEGAL</div>
          <h1 className={styles.heroHeading}>Privacy Policy</h1>
          <p className={styles.heroSubtitle}>
            Your privacy is important to us. This policy explains how EdgeVerse
            collects, uses, and protects your personal information when you use
            our website and services.
          </p>
          <div className={styles.effectiveDate}>Effective Date: 1 January 2025</div>
        </div>
      </section>

      {/* ── Content ──────────────────────────── */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>
          {/* 1 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <p className={styles.paragraph}>
              EdgeVerse India Private Limited ("EdgeVerse", "we", "us", or
              "our") collects information to provide and improve our Services.
              The types of information we may collect include:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, postal address, and other identifiers you
                voluntarily provide when you contact us, apply for careers, or
                subscribe to our newsletter.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access
                and use our website, including your IP address, browser type,
                operating system, referring URLs, pages viewed, and the date
                and time of your visit.
              </li>
              <li>
                <strong>Device Information:</strong> Information about the
                device you use to access our Services, including hardware
                model, operating system version, and unique device identifiers.
              </li>
              <li>
                <strong>Cookies &amp; Tracking:</strong> We use cookies and
                similar tracking technologies to track activity on our Services
                and hold certain information to enhance your experience.
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
            <p className={styles.paragraph}>
              We use the information we collect for the following purposes:
            </p>
            <ul className={styles.list}>
              <li>To provide, maintain, and improve our Services.</li>
              <li>To process and respond to your enquiries and requests.</li>
              <li>To send you technical notices, updates, and administrative messages.</li>
              <li>
                To communicate with you about products, services, offers, and
                events offered by EdgeVerse, and to provide news and
                information we think will be of interest to you.
              </li>
              <li>
                To monitor and analyse trends, usage, and activities in
                connection with our Services.
              </li>
              <li>
                To detect, investigate, and prevent fraudulent transactions and
                other illegal activities and protect the rights and property of
                EdgeVerse and others.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Data Sharing &amp; Disclosure</h2>
            <p className={styles.paragraph}>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except in the following
              circumstances:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party vendors, consultants, and other
                service providers who need access to such information to carry
                out work on our behalf.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale of company assets, financing, or acquisition
                of all or a portion of our business.
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Data Security</h2>
            <p className={styles.paragraph}>
              We implement a variety of security measures to maintain the
              safety of your personal information when you enter, submit, or
              access your personal information. These measures include
              encryption, access controls, secure servers, and regular security
              audits.
            </p>
            <p className={styles.paragraph}>
              However, no method of transmission over the Internet or method of
              electronic storage is 100% secure. While we strive to use
              commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
          </div>

          {/* 5 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Cookies &amp; Tracking Technologies</h2>
            <p className={styles.paragraph}>
              Our website uses cookies — small data files stored on your device
              — to enhance your browsing experience. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our Services.
            </p>
            <p className={styles.paragraph}>
              We may also use web beacons, pixel tags, and similar technologies
              to collect information about your interactions with our emails
              and website.
            </p>
          </div>

          {/* 6 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Your Rights</h2>
            <p className={styles.paragraph}>
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className={styles.list}>
              <li>The right to access the personal information we hold about you.</li>
              <li>The right to request correction of inaccurate personal information.</li>
              <li>The right to request deletion of your personal information.</li>
              <li>The right to object to processing of your personal information.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent at any time.</li>
            </ul>
            <p className={styles.paragraph}>
              To exercise any of these rights, please contact us using the
              information provided below. We will respond to your request
              within a reasonable timeframe.
            </p>
          </div>

          {/* 7 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Data Retention</h2>
            <p className={styles.paragraph}>
              We will retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy. We
              will retain and use your information to the extent necessary to
              comply with our legal obligations, resolve disputes, and enforce
              our policies.
            </p>
          </div>

          {/* 8 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Children&apos;s Privacy</h2>
            <p className={styles.paragraph}>
              Our Services are not intended for individuals under the age of
              18. We do not knowingly collect personal information from
              children under 18. If we become aware that we have collected
              personal information from a child under 18 without verification
              of parental consent, we will take steps to remove that
              information from our servers.
            </p>
          </div>

          {/* 9 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Effective Date" above. You are
              advised to review this Privacy Policy periodically for any
              changes.
            </p>
          </div>

          {/* Contact box */}
          <div className={styles.contactBox}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions or concerns about this Privacy Policy,
              please reach out to us at{' '}
              <a className={styles.contactLink} href="mailto:privacy@edgeverse.tech">
                privacy@edgeverse.tech
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy
