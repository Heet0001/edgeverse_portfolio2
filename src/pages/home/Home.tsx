import { useLayoutEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '../../utils/gsap'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import styles from './home.module.scss'
import heroImage from '../../assets/images/hero-intersection.png'
import ScrollRevealIntro from '../../components/home/ScrollRevealIntro'
import BuildWithCardsSection from '../../components/home/BuildWithCardsSection'
import FeatureTabsSection from '../../components/home/FeatureTabsSection'
import HomeInvestorsSection from '../../components/home/HomeInvestorsSection'
import NewsInsightsSection from '../../components/home/NewsInsightsSection'
import LifeSavingCtaSection from '../../components/home/LifeSavingCtaSection'

const Home = () => {
  const heroRef = useRef<HTMLElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const hero = heroRef.current
    if (!hero || reduceMotion) return

    registerGsapPlugins()

    const ctx = gsap.context(() => {
      gsap.from(hero.querySelector(`.${styles.heroBg}`), {
        scale: 1.08,
        duration: 1.6,
        ease: 'power2.out',
      })

      gsap.from(hero.querySelectorAll(`.${styles.heroTitleLine}, .${styles.heroTitleLineAccent}`), {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      })

      gsap.from(hero.querySelector(`.${styles.heroRule}`), {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.45,
      })

      gsap.from(hero.querySelector(`.${styles.heroCta}`), {
        y: 16,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.6,
      })
    }, hero)

    return () => ctx.revert()
  }, [reduceMotion])

  return (
    <main className={styles.page}>
      <section id="page-hero" ref={heroRef} className={styles.hero}>
        <img
          className={styles.heroBg}
          src={heroImage}
          alt="Busy urban intersection with AI perception overlays"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>Any Edge Device. Any Environment.</span>
            <span className={styles.heroTitleLineAccent}>One Intelligence Layer.</span>
          </h1>
          <span className={styles.heroRule} aria-hidden="true" />
          <a className={styles.heroCta} href="/technology">
            <span>Discover more</span>
            <span className={styles.heroCtaArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </section>

      <ScrollRevealIntro />

      <div className={styles.introCardsSpacer}>
        <BuildWithCardsSection />
      </div>

      <FeatureTabsSection />
      <HomeInvestorsSection />
      <NewsInsightsSection />
      <LifeSavingCtaSection />
    </main>
  )
}

export default Home
