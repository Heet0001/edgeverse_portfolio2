import { useEffect, useRef, useState } from 'react'
import styles from './ScrollRevealIntro.module.scss'

const INTRO_WORDS = [
  'EdgeVerse',
  'is',
  'building',
  'a',
  'general-purpose',
  'perception',
  'intelligence',
  'that',
  'learns',
  'from',
  'data',
  'and',
  'scales',
  'across',
  'vehicles,',
  'geographies,',
  'and',
  'applications.',
] as const

/** Wayve gradient stops (top → bottom of paragraph) */
const GRADIENT_STOPS = [
  { t: 0, r: 26, g: 26, b: 26 },
  { t: 0.15, r: 45, g: 74, b: 124 },
  { t: 0.35, r: 94, g: 124, b: 198 },
  { t: 0.55, r: 123, g: 156, b: 198 },
  { t: 0.75, r: 179, g: 153, b: 212 },
  { t: 1, r: 212, g: 165, b: 154 },
] as const

const MUTED = { r: 211, g: 211, b: 211 }

/** Viewport multiples — absolute scroll distance while text is pinned */
const REVEAL = {
  startAfterPinVh: 0.1,
  lengthVh: 0.1,
} as const

function clamp(v: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, v))
}

function sampleGradient(position: number) {
  const p = clamp(position)
  const scaled = p * (GRADIENT_STOPS.length - 1)
  const i = Math.floor(scaled)
  const f = scaled - i
  const a = GRADIENT_STOPS[i]
  const b = GRADIENT_STOPS[Math.min(i + 1, GRADIENT_STOPS.length - 1)]
  return {
    r: Math.round(a.r + (b.r - a.r) * f),
    g: Math.round(a.g + (b.g - a.g) * f),
    b: Math.round(a.b + (b.b - a.b) * f),
  }
}

function wordColor(index: number, total: number, scrollProgress: number): string {
  const position = total <= 1 ? 0 : index / (total - 1)
  const target = sampleGradient(position)

  const step = 1 / total
  const lead = 0.06
  const start = lead + index * step * 0.72
  const local = clamp((scrollProgress - start) / (step * 0.42))

  if (local <= 0) {
    return `rgb(${MUTED.r}, ${MUTED.g}, ${MUTED.b})`
  }

  const r = Math.round(MUTED.r + (target.r - MUTED.r) * local)
  const g = Math.round(MUTED.g + (target.g - MUTED.g) * local)
  const b = Math.round(MUTED.b + (target.b - MUTED.b) * local)
  return `rgb(${r}, ${g}, ${b})`
}

/**
 * Progress 0→1 from document scroll while the block is pinned.
 * Uses fixed viewport distances so timing is predictable on every screen.
 */
function computeScrollProgress(section: HTMLElement): number {
  const vh = window.visualViewport?.height ?? window.innerHeight
  const scrollY = window.scrollY
  const rect = section.getBoundingClientRect()
  const sectionDocTop = scrollY + rect.top
  const scrollPastPin = scrollY - sectionDocTop

  if (scrollPastPin <= 0) return 0

  const revealStart = vh * REVEAL.startAfterPinVh
  const revealLength = vh * REVEAL.lengthVh

  if (scrollPastPin <= revealStart) return 0

  return clamp((scrollPastPin - revealStart) / revealLength)
}

const ScrollRevealIntro = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [progress, setProgress] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReduceMotion(mq.matches)
    syncMotion()
    mq.addEventListener('change', syncMotion)
    return () => mq.removeEventListener('change', syncMotion)
  }, [])

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      if (!section) return
      setProgress(computeScrollProgress(section))
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
    window.visualViewport?.addEventListener('resize', onScroll)
    window.visualViewport?.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.visualViewport?.removeEventListener('resize', onScroll)
      window.visualViewport?.removeEventListener('scroll', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const total = INTRO_WORDS.length
  const scrollProgress = reduceMotion ? 1 : progress

  return (
    <section
      id="intro"
      ref={sectionRef}
      className={styles.scrollSection}
      aria-label="EdgeVerse mission"
    >
      <div className={styles.sticky}>
        <div className={styles.introInner}>
          <p ref={textRef} className={styles.introText}>
            {INTRO_WORDS.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className={styles.word}
                data-word-index={index}
                style={{ color: wordColor(index, total, scrollProgress) }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ScrollRevealIntro
