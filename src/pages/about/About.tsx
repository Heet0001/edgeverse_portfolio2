import AboutHeroSection from "../../components/about/AboutHeroSection";
import AboutTimelineSection from "../../components/about/AboutTimelineSection";
import AboutLocationSection from "../../components/about/AboutLocationSection";
import AboutCtaSection from "../../components/about/AboutCtaSection";
import LeadershipTeamSection from "../../components/leadership/LeadershipTeamSection";
import styles from "./aboutPage.module.scss";

const About = () => {
  return (
    <main className={styles.page}>
      <AboutHeroSection />

      <section id="about" className={styles.pageSection} aria-label="About us">
        <div className={styles.sectionIntro}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <span className={styles.sectionRule} aria-hidden="true" />
          </header>
        </div>
        <AboutTimelineSection />
        <AboutLocationSection />
      </section>

      <section
        id="leadership"
        className={styles.pageSection}
        aria-label="Leadership"
      >
        <div className={styles.sectionIntro}>
          <header className={styles.sectionHeader}>
            {/* <h2 className={styles.sectionTitle}>Leadership</h2> */}
            {/* <span className={styles.sectionRule} aria-hidden="true" /> */}
          </header>
        </div>
        <LeadershipTeamSection embedded />
      </section>

      <AboutCtaSection />
    </main>
  );
};

export default About;
