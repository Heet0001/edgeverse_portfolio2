import { useMemo, useState } from 'react'
import styles from './contact.module.scss'

type FormState = {
  fullName: string
  workEmail: string
  company: string
  interestArea: string
  message: string
}

const INTEREST_AREAS = [
  'ARAS / Rider safety',
  'OEM partnership',
  'Technology / Platform',
  'Industrial automation',
  'Media / Press',
  'Careers',
  'Other',
] as const

const DEFAULT_FORM: FormState = {
  fullName: '',
  workEmail: '',
  company: '',
  interestArea: '',
  message: '',
}

function encodeMailto(value: string) {
  return encodeURIComponent(value).replace(/%20/g, '+')
}

const Contact = () => {
  const [form, setForm] = useState<FormState>(DEFAULT_FORM)

  const mailtoHref = useMemo(() => {
    const subjectBits = [
      'EdgeVerse contact',
      form.interestArea ? `(${form.interestArea})` : '',
      form.company ? `- ${form.company}` : '',
    ].filter(Boolean)

    const lines = [
      `Name: ${form.fullName || '-'}`,
      `Email: ${form.workEmail || '-'}`,
      `Company: ${form.company || '-'}`,
      `Interest: ${form.interestArea || '-'}`,
      '',
      form.message || '',
    ]

    const subject = subjectBits.join(' ')
    const body = lines.join('\n')
    return `mailto:contact@edgeverse.ai?subject=${encodeMailto(subject)}&body=${encodeMailto(body)}`
  }, [form])

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Contact">
        <div className={styles.heroInner}>
          <h1 className={styles.h1}>Get in touch.</h1>
          <p className={styles.heroBlurb}>
            Whether you&apos;re an OEM, fleet operator, or technology partner — we&apos;d
            love to explore how EdgeVerse can power your vision.
          </p>
        </div>
      </section>

      <section className={styles.body} aria-label="Contact form and details">
        <div className={styles.inner}>
          <div className={styles.leftCard}>
            <div className={styles.cardTitle}>Send us a message</div>

            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = mailtoHref
              }}
            >
              <div className={styles.grid2}>
                <label className={styles.field}>
                  <span className={styles.label}>
                    Full Name <span className={styles.req}>*</span>
                  </span>
                  <input
                    className={styles.input}
                    value={form.fullName}
                    onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                    placeholder="John Smith"
                    required
                    autoComplete="name"
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>
                    Work Email <span className={styles.req}>*</span>
                  </span>
                  <input
                    className={styles.input}
                    type="email"
                    value={form.workEmail}
                    onChange={(e) => setForm((p) => ({ ...p, workEmail: e.target.value }))}
                    placeholder="john@company.com"
                    required
                    autoComplete="email"
                  />
                </label>
              </div>

              <div className={styles.grid2}>
                <label className={styles.field}>
                  <span className={styles.label}>Company</span>
                  <input
                    className={styles.input}
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.label}>Interest Area</span>
                  <select
                    className={styles.select}
                    value={form.interestArea}
                    onChange={(e) => setForm((p) => ({ ...p, interestArea: e.target.value }))}
                  >
                    <option value="">Select an area</option>
                    {INTEREST_AREAS.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className={styles.field}>
                <span className={styles.label}>
                  Message <span className={styles.req}>*</span>
                </span>
                <textarea
                  className={styles.textarea}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell us about your project..."
                  required
                  rows={6}
                />
              </label>

              <button className={styles.submit} type="submit">
                Send Message <span className={styles.arrow} aria-hidden="true">→</span>
              </button>
            </form>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoRow}>
                <div className={styles.iconTile} aria-hidden="true">
                  <span className={`${styles.infoIcon} ${styles.iconMail}`} />
                </div>
                <div className={styles.infoStack}>
                  <div className={styles.infoTitle}>Email</div>
                  <a className={styles.infoLink} href="mailto:contact@edgeverse.ai">
                    contact@edgeverse.ai
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoRow}>
                <div className={styles.iconTile} aria-hidden="true">
                  <span className={`${styles.infoIcon} ${styles.iconPhone}`} />
                </div>
                <div className={styles.infoStack}>
                  <div className={styles.infoTitle}>Phone</div>
                  <a className={styles.infoLink} href="tel:+919184552756">
                    +91 91845 52756
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoRow}>
                <div className={styles.iconTile} aria-hidden="true">
                  <span className={`${styles.infoIcon} ${styles.iconPin}`} />
                </div>
                <div className={styles.infoStack}>
                  <div className={styles.infoTitle}>Office</div>
                  <div className={styles.infoText}>
                    G01, #520, 8th Cross, BEML Layout
                    <br />
                    Thubarahalli, Bengaluru 560066
                    <br />
                    Karnataka, India
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.mapFrame}>
              <div className={styles.mapTop}>
                <a
                  className={styles.mapLink}
                  href="https://www.google.com/maps?q=EdgeVerse%20India%20Private%20Limited%20Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps <span aria-hidden="true">↗</span>
                </a>
              </div>
              <iframe
                className={styles.map}
                title="EdgeVerse office map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=EdgeVerse%20India%20Private%20Limited%20Bengaluru&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact

