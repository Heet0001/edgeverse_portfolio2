import { useEffect, useRef, useState } from 'react'
import styles from './ScrollRevealIntro.module.scss'

type IntroWord = {
  text: string
  accent?: boolean
}

const INTRO_WORDS: IntroWord[] = [
  { text: 'EdgeVerse' },
  { text: 'is' },
  { text: 'building' },
  { text: 'a' },
  { text: 'general-purpose' },
  { text: 'perception' },
  { text: 'intelligence' },
  { text: 'that' },
  { text: 'learns' },
  { text: 'from' },
  { text: 'data', accent: true },
  { text: 'and' },
  { text: 'scales' },
  { text: 'across' },
  { text: 'vehicles,' },
  { text: 'geographies,' },
  { text: 'and' },
  { text: 'applications.', accent: true },
]

/** Brand spectrum (navbar underline + EdgeVerse teal) */
const GRADIENT_STOPS = [
  { r: 124, g: 58, b: 237 }, // #7c3aed
  { r: 99, g: 102, b: 241 }, // #6366f1
  { r: 56, g: 189, b: 248 }, // #38bdf8
  { r: 14, g: 165, b: 164 }, // #0ea5a4
  { r: 15, g: 23, b: 42 }, // #0f172a
] as const

const MUTED = { r: 15, g: 23, b: 42, a: 0.18 }
const ACCENT_TARGET = { r: 13, g: 148, b: 136 } // deeper teal when fully revealed

function mix(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t))
  return x * x * (3 - 2 * x)
}

function lerpGradientStops(position: number) {
  const p = Math.min(1, Math.max(0, position))
  const scaled = p * (GRADIENT_STOPS.length - 1)
  const i = Math.floor(scaled)
  const f = scaled - i
  const a = GRADIENT_STOPS[i]
  const b = GRADIENT_STOPS[Math.min(i + 1, GRADIENT_STOPS.length - 1)]
  return {
    r: Math.round(mix(a.r, b.r, f)),
    g: Math.round(mix(a.g, b.g, f)),
    b: Math.round(mix(a.b, b.b, f)),
  }
}

function targetRgb(index: number, total: number, accent?: boolean) {
  if (accent) return ACCENT_TARGET
  const position = total <= 1 ? 0 : index / (total - 1)
  return lerpGradientStops(position)
}

/** Scroll-scrubbed: muted gray → word's place on the brand gradient */
function wordColor(index: number, total: number, t: number, accent?: boolean): string {
  const local = smoothstep(t)
  if (local <= 0) {
    return `rgba(${MUTED.r}, ${MUTED.g}, ${MUTED.b}, ${MUTED.a})`
  }

  const target = targetRgb(index, total, accent)
  const r = Math.round(mix(MUTED.r, target.r, local))
  const g = Math.round(mix(MUTED.g, target.g, local))
  const b = Math.round(mix(MUTED.b, target.b, local))
  const a = MUTED.a + (1 - MUTED.a) * local
  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`
}

/**
 * Progress 0→1 across the intro runway.
 * Starts only after the text has been visible for a while (30% dead zone).
 * Completes within the remaining scroll distance.
 */
function computeStickyProgress(section: HTMLElement): number {
  const rect = section.getBoundingClientRect()
  const vh = window.innerHeight
  const scrollable = section.offsetHeight - vh
  if (scrollable <= 0) return 1

  // Don't start until the section top reaches the viewport top (text is pinned)
  if (rect.top > 0) return 0

  // How far we've scrolled past the pin point
  const scrolled = -rect.top

  // Dead zone: text stays fully muted for first 30% of scroll
  const deadZone = scrollable * 0.3
  if (scrolled < deadZone) return 0

  // Color fills in over the remaining 50% of scrollable distance
  const effectiveScrolled = scrolled - deadZone
  const transitionDistance = scrollable * 0.5

  return Math.min(1, Math.max(0, effectiveScrolled / transitionDistance))
}

const ScrollRevealIntro = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      setProgress(computeStickyProgress(el))
    }

    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        update()
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const total = INTRO_WORDS.length
  const slice = 1 / (total + 3)
  const overlap = 0.5
  const colorProgress = progress

  return (
    <section
      id="intro"
      ref={sectionRef}
      className={styles.scrollSection}
      aria-label="EdgeVerse mission"
    >
      <div className={styles.sticky}>
        <div
          className={styles.introInner}
          style={{
            transform: `translateY(calc((0.5 - ${progress}) * 4vh))`,
          }}
        >
          <p className={styles.introText}>
            {INTRO_WORDS.map((word, index) => {
              const start = index * slice
              const local =
                (colorProgress - start + overlap * slice) / (slice + overlap * slice)

              return (
                <span
                  key={`${word.text}-${index}`}
                  className={`${styles.word} ${word.accent ? styles.wordAccent : ''}`}
                  style={{ color: wordColor(index, total, local, word.accent) }}
                >
                  {word.text}{' '}
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ScrollRevealIntro
