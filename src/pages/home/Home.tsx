import styles from './home.module.scss'
import heroImg from '../../assets/images/hero.png'
import ArasTechnologySection from '../../components/home/ArasTechnologySection'
import CollisionAlertZonesSection from '../../components/home/CollisionAlertZonesSection'
import KnowAboutArasStatsSection from '../../components/home/KnowAboutArasStatsSection'
import RealWorldDemosSection from '../../components/home/RealWorldDemosSection'
import ProvenOnRoadsSection from '../../components/home/ProvenOnRoadsSection'
import TwoWheelerSurveySection from '../../components/home/TwoWheelerSurveySection'
import NewsInsightsSection from '../../components/home/NewsInsightsSection'
import LifeSavingCtaSection from '../../components/home/LifeSavingCtaSection'

const Home = () => {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTop}>
            <div className={styles.heroLeft}>
              <h1 className={styles.h1}>
                Empowering every
                <br />
                commute with{' '}
                <span className={styles.accent}>Life-Saving Intelligence</span>
              </h1>
            </div>

            <div className={styles.heroRight}>
              <p className={styles.heroBlurb}>
                We enable OEMs and Cluster makers with Perceive&trade;—an
                edge-native vertically integrated AI mobility stack. With patented
                sensor fusion and India Perception Model, we turn critical
                milliseconds into life-saving seconds.
              </p>

              <div className={styles.heroCtas}>
                <a className={styles.heroPrimaryBtn} href="/schedule">
                  Schedule a Call
                </a>

                <a className={styles.heroPlayLink} href="/videos">
                  <span className={styles.playIcon} aria-hidden="true" />
                  <span>See it in action</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.heroMediaFrame}>
            <img
              className={styles.heroImg}
              src={heroImg}
              alt="Road scene with AI overlays"
              loading="eager"
            />
          </div>

          <div className={styles.heroFeatures} aria-label="Key capabilities">
            <div className={styles.heroFeature}>Upto 70% Accident Avoidance</div>
            <div className={styles.heroFeature}>30 FPS AI Inference</div>
            <div className={styles.heroFeature}>Predictive Collision Alerts</div>
            <div className={styles.heroFeature}>Front/Rear Camera + RADAR</div>
          </div>
        </div>
      </section>

      <section className={styles.who}>
        <div className={styles.whoInner}>
          <div className={styles.whoLeft}>
            <div className={styles.whoKickerRow}>
              <span className={styles.whoKickerLine} aria-hidden="true" />
              <span className={styles.whoKicker}>WHO WE ARE</span>
            </div>

            <h2 className={styles.whoTitle}>
              Full Stack ARAS —
              <br />
              <span className={styles.accent}>Predict.</span>{' '}
              <span className={styles.accent}>Alert.</span>
              <br />
              <span className={styles.accent}>Protect.</span>
            </h2>
          </div>

          <div className={styles.whoRight}>
            <p className={styles.whoText}>
              EdgeVerse is a vertically integrated edge AI company enabling OEMs and
              Tier-1s with <strong>Perceiva&trade;</strong> — a full-stack Advanced Rider Assistance System.
              Our patented sensor fusion and <strong>India Perception Model</strong> powers real-time collision
              alerts, blind-spot detection, and intelligent ride recording.
            </p>

            <a className={styles.whoBtn} href="/technology">
              Explore our technology <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <ArasTechnologySection />
      <CollisionAlertZonesSection />
      <KnowAboutArasStatsSection />
      <RealWorldDemosSection />
      <ProvenOnRoadsSection />
      <TwoWheelerSurveySection />
      <NewsInsightsSection />
      <LifeSavingCtaSection />
    </main>
  )
}

export default Home