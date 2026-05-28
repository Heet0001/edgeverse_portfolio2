import { useLayoutEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '../../utils/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
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

const GRADIENT_STOPS = [
  { t: 0, r: 26, g: 26, b: 26 },
  { t: 0.15, r: 45, g: 74, b: 124 },
  { t: 0.35, r: 94, g: 124, b: 198 },
  { t: 0.55, r: 123, g: 156, b: 198 },
  { t: 0.75, r: 179, g: 153, b: 212 },
  { t: 1, r: 212, g: 165, b: 154 },
] as const

const MUTED = { r: 211, g: 211, b: 211 }

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

function targetColor(index: number, total: number) {
  const position = total <= 1 ? 0 : index / (total - 1)
  const { r, g, b } = sampleGradient(position)
  return `rgb(${r}, ${g}, ${b})`
}

const ScrollRevealIntro = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    registerGsapPlugins()
    const words = section.querySelectorAll<HTMLElement>(`.${styles.word}`)
    const total = words.length

    if (reduceMotion) {
      words.forEach((word, index) => {
        word.style.color = targetColor(index, total)
      })
      return
    }

    const ctx = gsap.context(() => {
      words.forEach((word) => {
        gsap.set(word, { color: `rgb(${MUTED.r}, ${MUTED.g}, ${MUTED.b})` })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      })

      words.forEach((word, index) => {
        tl.to(
          word,
          {
            color: targetColor(index, total),
            duration: 1,
            ease: 'none',
          },
          index * 0.55,
        )
      })
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      id="intro"
      ref={sectionRef}
      className={styles.scrollSection}
      aria-label="EdgeVerse mission"
    >
      <div className={styles.sticky}>
        <div className={styles.introInner}>
          <p className={styles.introText}>
            {INTRO_WORDS.map((word, index) => (
              <span key={`${word}-${index}`} className={styles.word}>
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
