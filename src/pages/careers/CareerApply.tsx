import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './careerApply.module.scss'
import { getPublicOpeningBySlug } from '../../api/openings'
import { uploadResume, submitApplication } from '../../api/applications'
import { extractError } from '../../api/client'
import type { Opening } from '../../types/models'
import { buildCareerApplySeo } from '../../seo/pageSeo'
import { useSeo } from '../../seo/useSeo'

type FormState = {
  fullName: string
  email: string
  phone: string
  resumeUrl: string
  resumeFilename: string
  education: string
  college: string
  degree: string
  gradYear: string
  skills: string
  experience: string
  projectLink: string
  linkedin: string
  portfolio: string
}

const EMPTY: FormState = {
  fullName: '',
  email: '',
  phone: '',
  resumeUrl: '',
  resumeFilename: '',
  education: '',
  college: '',
  degree: '',
  gradYear: '',
  skills: '',
  experience: '',
  projectLink: '',
  linkedin: '',
  portfolio: '',
}

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'error'; message: string }

const isValidUrl = (s: string) => {
  if (!s.trim()) return true
  try {
    const u = new URL(s.trim())
    return u.protocol === 'http:' || u.protocol === 'https:'
  } catch {
    return false
  }
}

const parseSkills = (raw: string): string[] =>
  raw
    .split(/[,\n;]/g)
    .map((s) => s.trim())
    .filter(Boolean)

const CareerApply = () => {
  const { slug = '' } = useParams<{ slug: string }>()
  const [opening, setOpening] = useState<Opening | null | undefined>(undefined)
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [resumeUploading, setResumeUploading] = useState(false)

  useEffect(() => {
    let alive = true
    setOpening(undefined)
    void getPublicOpeningBySlug(slug).then((o) => {
      if (alive) setOpening(o ?? null)
    })
    return () => {
      alive = false
    }
  }, [slug])

  const seo = useMemo(() => buildCareerApplySeo(opening, slug), [opening, slug])
  useSeo(seo)

  const handleChange = (k: keyof FormState, v: string) => {
    setForm((prev) => ({ ...prev, [k]: v }))
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }))
  }

  const handleResume = async (file: File | undefined) => {
    if (!file) return
    if (file.size > 10 * 1024 * 1024) {
      setErrors((p) => ({ ...p, resumeUrl: 'File too large — max 10 MB' }))
      return
    }
    const ext = file.name.toLowerCase().split('.').pop() || ''
    if (!['pdf', 'doc', 'docx'].includes(ext)) {
      setErrors((p) => ({ ...p, resumeUrl: 'Only PDF, DOC or DOCX files are allowed' }))
      return
    }
    setResumeUploading(true)
    setErrors((p) => ({ ...p, resumeUrl: undefined }))
    try {
      const res = await uploadResume(file)
      setForm((prev) => ({
        ...prev,
        resumeUrl: res.url,
        resumeFilename: res.filename,
      }))
    } catch (err) {
      setErrors((p) => ({
        ...p,
        resumeUrl: extractError(err, 'Resume upload failed. Try again.'),
      }))
    } finally {
      setResumeUploading(false)
    }
  }

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.resumeUrl.trim()) e.resumeUrl = 'Resume is required'
    if (!form.education.trim()) e.education = 'Required'
    if (!form.college.trim()) e.college = 'Required'
    if (!form.degree.trim()) e.degree = 'Required'
    if (!form.gradYear.trim()) e.gradYear = 'Required'
    if (parseSkills(form.skills).length === 0) e.skills = 'List at least one skill'
    if (!form.experience.trim()) e.experience = 'Required'
    if (!isValidUrl(form.projectLink)) e.projectLink = 'Enter a valid URL or leave blank'
    if (!isValidUrl(form.linkedin)) e.linkedin = 'Enter a valid URL or leave blank'
    if (!isValidUrl(form.portfolio)) e.portfolio = 'Enter a valid URL or leave blank'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) {
      const firstKey = Object.keys(errors)[0]
      if (firstKey) {
        const el = document.querySelector<HTMLElement>(`[data-field="${firstKey}"]`)
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }
    setStatus({ kind: 'submitting' })
    try {
      await submitApplication({
        openingSlug: slug,
        openingTitle: opening?.title || '',
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        resumeUrl: form.resumeUrl,
        resumeFilename: form.resumeFilename,
        education: form.education.trim(),
        college: form.college.trim(),
        degree: form.degree.trim(),
        gradYear: form.gradYear.trim(),
        skills: parseSkills(form.skills),
        experience: form.experience.trim(),
        projectLink: form.projectLink.trim(),
        linkedin: form.linkedin.trim(),
        portfolio: form.portfolio.trim(),
      })
      setStatus({ kind: 'success' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setStatus({
        kind: 'error',
        message: extractError(err, 'Application could not be submitted. Try again.'),
      })
    }
  }

  const tags = useMemo(
    () =>
      [opening?.location, opening?.employmentType, opening?.department].filter(
        (t): t is string => Boolean(t && t.trim()),
      ),
    [opening],
  )

  if (opening === undefined) {
    return (
      <main className={styles.page}>
        <div className={styles.skeletonHero} aria-hidden="true" />
      </main>
    )
  }

  if (status.kind === 'success') {
    return (
      <main className={styles.page}>
        <section className={styles.successWrap}>
          <div className={styles.successCard}>
            <div className={styles.successCheck} aria-hidden="true" />
            <h1 className={styles.successTitle}>Application received</h1>
            <p className={styles.successText}>
              Thanks{form.fullName ? `, ${form.fullName.split(' ')[0]}` : ''}!
              We've got your application
              {opening ? (
                <>
                  {' '}
                  for <strong>{opening.title}</strong>
                </>
              ) : null}
              . Our team will review it and reach out at the email you provided
              if there's a fit.
            </p>
            <div className={styles.successActions}>
              <Link to="/about#careers" className={styles.btnPrimary}>
                View other openings
              </Link>
              <Link to="/" className={styles.btnGhost}>
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <section id="page-hero" className={styles.hero} aria-label="Application hero">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.crumbs}>
            <Link to="/about#careers" className={styles.crumb}>
              Careers
            </Link>
            <span aria-hidden="true">/</span>
            <span className={styles.crumbCurrent}>Apply</span>
          </div>

          {opening ? (
            <>
              <div className={styles.kicker}>YOU'RE APPLYING FOR</div>
              <h1 className={styles.heroTitle}>{opening.title}</h1>
              {tags.length > 0 ? (
                <div className={styles.heroTags}>
                  {tags.map((t, i) => (
                    <span key={i} className={styles.heroTag}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
              {opening.description ? (
                <p className={styles.heroDesc}>{opening.description}</p>
              ) : null}
            </>
          ) : (
            <>
              <div className={styles.kicker}>WE COULDN'T FIND THIS OPENING</div>
              <h1 className={styles.heroTitle}>
                It may have been closed.
              </h1>
              <p className={styles.heroDesc}>
                You can still submit a general application below — we'll keep it
                on file for future roles.
              </p>
            </>
          )}
        </div>
      </section>

      <section className={styles.formSection} aria-label="Application form">
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          {status.kind === 'error' ? (
            <div className={styles.banner} role="alert">
              {status.message}
            </div>
          ) : null}

          <fieldset className={styles.group}>
            <legend className={styles.groupTitle}>About you</legend>
            <div className={styles.row}>
              <Field
                label="Full name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                error={errors.fullName}
                placeholder="Your full name"
              />
              <Field
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                error={errors.email}
                placeholder="you@example.com"
              />
            </div>
            <div className={styles.row}>
              <Field
                label="Phone number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
                error={errors.phone}
                placeholder="+91 98765 43210"
              />
              <ResumeField
                value={form.resumeFilename}
                uploading={resumeUploading}
                error={errors.resumeUrl}
                uploaded={Boolean(form.resumeUrl)}
                onPick={(file) => void handleResume(file)}
              />
            </div>
          </fieldset>

          <fieldset className={styles.group}>
            <legend className={styles.groupTitle}>Education</legend>
            <Field
              label="Education details"
              name="education"
              value={form.education}
              onChange={handleChange}
              required
              error={errors.education}
              hint="Most recent degree and a short summary"
              textarea
              rows={3}
              placeholder="e.g. B.Tech in Computer Science, GPA 8.7/10"
            />
            <div className={styles.row}>
              <Field
                label="College / University"
                name="college"
                value={form.college}
                onChange={handleChange}
                required
                error={errors.college}
                placeholder="e.g. IIT Bombay"
              />
              <Field
                label="Degree"
                name="degree"
                value={form.degree}
                onChange={handleChange}
                required
                error={errors.degree}
                placeholder="e.g. B.Tech CSE"
              />
            </div>
            <div className={styles.row}>
              <Field
                label="Current year or graduation year"
                name="gradYear"
                value={form.gradYear}
                onChange={handleChange}
                required
                error={errors.gradYear}
                placeholder="e.g. 2025 / Final year"
              />
              <div />
            </div>
          </fieldset>

          <fieldset className={styles.group}>
            <legend className={styles.groupTitle}>Skills &amp; experience</legend>
            <Field
              label="Skills"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              required
              error={errors.skills}
              hint="Comma-separated. Example: Python, Java, React, DSA, SQL"
              placeholder="Python, Java, React, DSA, SQL, …"
            />
            <Field
              label="Experience / Projects"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              required
              error={errors.experience}
              hint="Briefly describe your most relevant experience and projects (1–3 paragraphs)"
              textarea
              rows={6}
              placeholder="Describe the most relevant project or role you've worked on, what you built, the impact, and the tech you used."
            />
          </fieldset>

          <fieldset className={styles.group}>
            <legend className={styles.groupTitle}>Links (optional)</legend>
            <Field
              label="Project link"
              name="projectLink"
              type="url"
              value={form.projectLink}
              onChange={handleChange}
              error={errors.projectLink}
              hint="Optional — a link to a hosted project, demo, or repo"
              placeholder="https://"
            />
            <div className={styles.row}>
              <Field
                label="LinkedIn profile"
                name="linkedin"
                type="url"
                value={form.linkedin}
                onChange={handleChange}
                error={errors.linkedin}
                hint="Recommended"
                placeholder="https://linkedin.com/in/your-handle"
              />
              <Field
                label="GitHub / Portfolio website"
                name="portfolio"
                type="url"
                value={form.portfolio}
                onChange={handleChange}
                error={errors.portfolio}
                hint="For coding or design roles"
                placeholder="https://github.com/your-handle"
              />
            </div>
          </fieldset>

          <div className={styles.actions}>
            <Link to="/about#careers" className={styles.btnGhost}>
              Cancel
            </Link>
            <button
              type="submit"
              className={styles.btnPrimary}
              disabled={status.kind === 'submitting' || resumeUploading}
            >
              {status.kind === 'submitting' ? 'Submitting…' : 'Submit application'}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

type FieldProps = {
  label: string
  name: keyof FormState
  value: string
  onChange: (k: keyof FormState, v: string) => void
  required?: boolean
  error?: string
  hint?: string
  textarea?: boolean
  rows?: number
  placeholder?: string
  type?: string
}

const Field = ({
  label,
  name,
  value,
  onChange,
  required,
  error,
  hint,
  textarea,
  rows,
  placeholder,
  type = 'text',
}: FieldProps) => (
  <div className={styles.field} data-field={name}>
    <label className={styles.label} htmlFor={name}>
      {label}
      {required ? <span className={styles.required}> *</span> : null}
    </label>
    {textarea ? (
      <textarea
        id={name}
        name={name}
        rows={rows || 4}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className={`${styles.input} ${styles.textarea} ${error ? styles.invalid : ''}`}
      />
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.invalid : ''}`}
      />
    )}
    {error ? <div className={styles.errorMsg}>{error}</div> : hint ? <div className={styles.hint}>{hint}</div> : null}
  </div>
)

type ResumeFieldProps = {
  value: string
  uploading: boolean
  uploaded: boolean
  error?: string
  onPick: (file: File | undefined) => void
}

const ResumeField = ({ value, uploading, uploaded, error, onPick }: ResumeFieldProps) => (
  <div className={styles.field} data-field="resumeUrl">
    <label className={styles.label} htmlFor="resume">
      Upload Resume / CV<span className={styles.required}> *</span>
    </label>
    <div className={`${styles.uploadBox} ${error ? styles.invalid : ''} ${uploaded ? styles.uploadedBox : ''}`}>
      <input
        id="resume"
        type="file"
        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        onChange={(e) => onPick(e.target.files?.[0] || undefined)}
        className={styles.fileInput}
      />
      <div className={styles.uploadInner}>
        {uploading ? (
          <span className={styles.uploadStatus}>Uploading…</span>
        ) : uploaded ? (
          <span className={styles.uploadStatus}>
            <span className={styles.uploadCheck} aria-hidden="true" /> Uploaded · {value || 'resume'} (click to replace)
          </span>
        ) : (
          <>
            <span className={styles.uploadIcon} aria-hidden="true" />
            <span className={styles.uploadText}>
              <strong>Click to upload</strong> or drag a file here
            </span>
            <span className={styles.uploadHint}>PDF, DOC or DOCX · max 10 MB</span>
          </>
        )}
      </div>
    </div>
    {error ? <div className={styles.errorMsg}>{error}</div> : null}
  </div>
)

export default CareerApply
