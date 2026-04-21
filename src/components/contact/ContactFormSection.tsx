import { useState } from 'react'
import styles from './contactFormSection.module.scss'

const ContactFormSection = () => {
  const [form, setForm] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    interestArea: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
    console.log('Form submitted:', form)
  }

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

            <button type="submit" className={styles.submitBtn}>
              Send Message <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>

        {/* Right: Contact info */}
        <div className={styles.infoSide}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>✉️</div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Email</h3>
              <a href="mailto:contact@edgeverse.ai" className={styles.infoLink}>
                contact@edgeverse.ai
              </a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📞</div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <a href="tel:+919845257858" className={styles.infoLink}>
                +91 9845 257 858
              </a>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>📍</div>
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
