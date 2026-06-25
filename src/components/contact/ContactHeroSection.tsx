import { useLayoutEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '../../utils/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import styles from './contactHeroSection.module.scss'
import heroImg from '../../assets/images/ChatGPT Image May 29, 2026, 03_08_18 AM.png'

const ContactHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section || reduceMotion) return

    registerGsapPlugins()

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector(`.${styles.bgImage}`), {
        scale: 1.06,
        duration: 1.4,
        ease: 'power2.out',
      })

      gsap.from(
        section.querySelectorAll(`.${styles.badge}, .${styles.heading}, .${styles.subtitle}`),
        {
          y: 24,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.12,
        },
      )
    }, section)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <section
      ref={sectionRef}
      id="page-hero"
      className={styles.section}
      aria-label="Contact hero"
    >
      <img className={styles.bgImage} src={heroImg} alt="" aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.badge}>Contact</div>
        <h1 className={styles.heading}>Get in touch.</h1>
        <p className={styles.subtitle}>
          Whether you&apos;re an OEM, fleet operator, or technology partner — we&apos;d love to
          explore how EdgeVerse can power your vision.
        </p>
      </div>
    </section>
  )
}

export default ContactHeroSection
