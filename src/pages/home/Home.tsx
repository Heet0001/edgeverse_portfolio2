import styles from './home.module.scss'
import heroImage from '../../assets/images/hero-intersection.png'
import ScrollRevealIntro from '../../components/home/ScrollRevealIntro'
import BuildWithCardsSection from '../../components/home/BuildWithCardsSection'
import FeatureTabsSection from '../../components/home/FeatureTabsSection'
import HomeInvestorsSection from '../../components/home/HomeInvestorsSection'
import NewsInsightsSection from '../../components/home/NewsInsightsSection'
import LifeSavingCtaSection from '../../components/home/LifeSavingCtaSection'

const Home = () => {
  return (
    <main className={styles.page}>
      <section id="page-hero" className={styles.hero}>
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
