import styles from './legal.module.scss'

const TermsOfService = () => {
  return (
    <main>
      {/* ── Hero ─────────────────────────────── */}
      <section className={styles.hero} aria-label="Terms of Service hero">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.kicker}>LEGAL</div>
          <h1 className={styles.heroHeading}>Terms of Service</h1>
          <p className={styles.heroSubtitle}>
            Please read these terms carefully before using our website or
            services. By accessing or using EdgeVerse platforms, you agree to
            be bound by these terms.
          </p>
          <div className={styles.effectiveDate}>Effective Date: 1 January 2025</div>
        </div>
      </section>

      {/* ── Content ──────────────────────────── */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>
          {/* 1 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
            <p className={styles.paragraph}>
              By accessing or using the website, mobile applications, products,
              or any other services (collectively, the "Services") provided by
              EdgeVerse India Private Limited ("EdgeVerse", "we", "us", or
              "our"), you acknowledge that you have read, understood, and agree
              to be bound by these Terms of Service ("Terms"). If you do not
              agree to these Terms, you must not access or use our Services.
            </p>
            <p className={styles.paragraph}>
              We reserve the right to update or modify these Terms at any time
              without prior notice. Your continued use of the Services
              following any changes constitutes your acceptance of the revised
              Terms.
            </p>
          </div>

          {/* 2 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Use of Services</h2>
            <p className={styles.paragraph}>
              You agree to use our Services only for lawful purposes and in
              accordance with these Terms. You are prohibited from:
            </p>
            <ul className={styles.list}>
              <li>
                Using our Services in any way that violates any applicable
                federal, state, local, or international law or regulation.
              </li>
              <li>
                Attempting to gain unauthorised access to, interfere with,
                damage, or disrupt any part of the Services, the server on
                which the Services are stored, or any server, computer, or
                database connected to the Services.
              </li>
              <li>
                Introducing any viruses, Trojan horses, worms, logic bombs, or
                other material that is malicious or technologically harmful.
              </li>
              <li>
                Using any robot, spider, or other automatic device, process, or
                means to access the Services for any purpose, including
                monitoring or copying any of the material on the Services.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Intellectual Property</h2>
            <p className={styles.paragraph}>
              The Services and their entire contents, features, and
              functionality — including but not limited to all information,
              software, text, displays, images, video, audio, design,
              selection, and arrangement thereof — are owned by EdgeVerse, its
              licensors, or other providers of such material and are protected
              by India and international copyright, trademark, patent, trade
              secret, and other intellectual property or proprietary rights
              laws.
            </p>
            <p className={styles.paragraph}>
              You may not reproduce, distribute, modify, create derivative
              works of, publicly display, publicly perform, republish,
              download, store, or transmit any of the material on our Services,
              except as generally and ordinarily permitted through the Services
              according to these Terms.
            </p>
          </div>

          {/* 4 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Product &amp; Service Descriptions</h2>
            <p className={styles.paragraph}>
              EdgeVerse attempts to be as accurate as possible in the
              descriptions of our products, technologies, and services.
              However, we do not warrant that product descriptions, technology
              specifications, or other content on the Services are accurate,
              complete, reliable, current, or error-free. All specifications
              and features are subject to change without notice.
            </p>
          </div>

          {/* 5 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
            <p className={styles.paragraph}>
              To the fullest extent permitted by applicable law, EdgeVerse
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible
              losses, resulting from:
            </p>
            <ul className={styles.list}>
              <li>Your access to or use of (or inability to access or use) the Services.</li>
              <li>Any conduct or content of any third party on the Services.</li>
              <li>Any content obtained from the Services.</li>
              <li>Unauthorised access, use, or alteration of your transmissions or content.</li>
            </ul>
          </div>

          {/* 6 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Disclaimer of Warranties</h2>
            <p className={styles.paragraph}>
              The Services are provided on an "AS IS" and "AS AVAILABLE" basis,
              without any warranties of any kind, either express or implied.
              Neither EdgeVerse nor any person associated with EdgeVerse makes
              any warranty or representation with respect to the completeness,
              security, reliability, quality, accuracy, or availability of the
              Services.
            </p>
          </div>

          {/* 7 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Governing Law</h2>
            <p className={styles.paragraph}>
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict-of-law
              provisions. Any legal suit, action, or proceeding arising out of,
              or related to, these Terms or the Services shall be instituted
              exclusively in the courts of Bengaluru, Karnataka, India.
            </p>
          </div>

          {/* 8 */}
          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>Termination</h2>
            <p className={styles.paragraph}>
              We may terminate or suspend your access to all or part of the
              Services, without prior notice or liability, for any reason,
              including without limitation if you breach any of the Terms. Upon
              termination, your right to use the Services will immediately
              cease.
            </p>
          </div>

          {/* Contact box */}
          <div className={styles.contactBox}>
            <h2 className={styles.sectionTitle}>Questions?</h2>
            <p className={styles.paragraph}>
              If you have any questions about these Terms of Service, please
              contact us at{' '}
              <a className={styles.contactLink} href="mailto:legal@edgeverse.tech">
                legal@edgeverse.tech
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermsOfService
