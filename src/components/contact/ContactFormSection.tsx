import { useState } from 'react'
import styles from './contactFormSection.module.scss'
import { submitContactMessage } from '../../api/messages'
import { extractError } from '../../api/client'

type Status = { kind: 'idle' } | { kind: 'submitting' } | { kind: 'success' } | { kind: 'error'; message: string }

const ContactFormSection = () => {
  const [form, setForm] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    interestArea: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ kind: 'submitting' })
    try {
      await submitContactMessage({
        fullName: form.fullName.trim(),
        workEmail: form.workEmail.trim(),
        company: form.company.trim(),
        interestArea: form.interestArea,
        message: form.message.trim(),
      })
      setStatus({ kind: 'success' })
      setForm({ fullName: '', workEmail: '', company: '', interestArea: '', message: '' })
    } catch (err) {
      setStatus({ kind: 'error', message: extractError(err, 'Could not send message. Please try again.') })
    }
  }

  const submitting = status.kind === 'submitting'

  return (
    <section className={styles.section} aria-label="Contact form">
      <div className={styles.inner}>
        {/* Left: Form */}
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Send us a message</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Smith"
                  value={form.fullName}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Work Email *</label>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="john@company.com"
                  value={form.workEmail}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Company</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={form.company}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Interest Area</label>
                <select
                  name="interestArea"
                  value={form.interestArea}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Select an area</option>
                  <option value="mobility">Safe Mobility</option>
                  <option value="surveillance">Smart Surveillance</option>
                  <option value="industrial">Industrial Automation</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Message *</label>
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                required
              />
            </div>

            {status.kind === 'success' ? (
              <div
                role="status"
                style={{
                  background: 'rgba(14,165,164,.08)',
                  border: '1px solid rgba(14,165,164,.35)',
                  color: '#0c8e8d',
                  padding: '12px 16px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Thanks! Your message has been sent — we'll be in touch shortly.
              </div>
            ) : null}

            {status.kind === 'error' ? (
              <div
                role="alert"
                style={{
                  background: 'rgba(220,38,38,.06)',
                  border: '1px solid rgba(220,38,38,.35)',
                  color: '#b91c1c',
                  padding: '12px 16px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {status.message}
              </div>
            ) : null}

            <button type="submit" className={styles.submitBtn} disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Message'} <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>

        {/* Right: Contact info */}
        <div className={styles.infoSide}>
          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.emailIcon}`} aria-hidden="true" />
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Email</h3>
              <a href="mailto:contact@edgeverse.ai" className={styles.infoLink}>
                contact@edgeverse.ai
              </a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.phoneIcon}`} aria-hidden="true" />
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <a href="tel:+919845257858" className={styles.infoLink}>
                +91 9845 257 858
              </a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={`${styles.infoIcon} ${styles.locationIcon}`} aria-hidden="true" />
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Office</h3>
              <address className={styles.infoAddress}>
                5th Floor, Mpark, 32/1, Sonnenahalli<br />
                Doddanekundi Industrial Area, Mahadevapura Post<br />
                Bengaluru- 560048, Karnataka, India
              </address>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <a
              className={styles.mapLink}
              href="https://www.google.com/maps/place/EdgeVerse+India+Private+Limited/@12.9841705,77.7077724,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3f72d255aa4b:0x484b2833cd02bbc5!8m2!3d12.9841659!4d77.7100634!16s%2Fg%2F11l5wjlbd_"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps
            </a>
            <iframe
              title="EdgeVerse Office Location"
              src="https://www.google.com/maps?q=EdgeVerse+India+Private+Limited,+5th+Floor,+Mpark,+Sonnenahalli,+Mahadevapura,+Bengaluru+560048&z=15&output=embed"
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
