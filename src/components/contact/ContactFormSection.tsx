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
                G01, #520, 8th Cross, BEML Layout<br />
                Thubarahalli, Bengaluru 560066<br />
                Karnataka, India
              </address>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <a
              className={styles.mapLink}
              href="https://maps.google.com/?q=G01,+520,+8th+Cross,+BEML+Layout,+Thubarahalli,+Bengaluru"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps
            </a>
            <iframe
              title="EdgeVerse Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.72!3d12.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzM2LjAiTiA3N8KwNDMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
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
