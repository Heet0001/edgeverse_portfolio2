import AboutHeroSection from "../../components/about/AboutHeroSection";
import AboutTimelineSection from "../../components/about/AboutTimelineSection";
import AboutLocationSection from "../../components/about/AboutLocationSection";
import AboutCtaSection from "../../components/about/AboutCtaSection";
import LeadershipTeamSection from "../../components/leadership/LeadershipTeamSection";
import CompanyPartnersSection from "../../components/company/CompanyPartnersSection";
import CareerWhySection from "../../components/careers/CareerWhySection";
import CareerOpeningsSection from "../../components/careers/CareerOpeningsSection";
import CareerCtaSection from "../../components/careers/CareerCtaSection";
import { useHashScroll } from "../../hooks/useHashScroll";
import headerStyles from "../../components/technology/techSectionHeader.module.scss";
import styles from "./aboutPage.module.scss";

const About = () => {
  useHashScroll();

  return (
    <main className={styles.page}>
      <AboutHeroSection />

      <section id="about" className={styles.pageSection} aria-label="About us">
        <div className={styles.sectionInner}>
          <header className={headerStyles.light}>
            <h2 className={headerStyles.title}>About Us</h2>
            <p className={headerStyles.subtitle}>Our story and who we are.</p>
          </header>
          <AboutTimelineSection />
          <AboutLocationSection />
        </div>
      </section>

      <section id="leadership" className={styles.pageSection} aria-label="Leadership">
        <div className={styles.sectionInner}>
          <header className={headerStyles.light}>
            <h2 className={headerStyles.title}>Leadership</h2>
            <p className={headerStyles.subtitle}>Meet the team building EdgeVerse.</p>
          </header>
          <LeadershipTeamSection embedded />
        </div>
      </section>

      <CompanyPartnersSection />

      <section id="careers" className={styles.pageSection} aria-label="Careers">
        <div className={styles.sectionInner}>
          <header className={headerStyles.light}>
            <h2 className={headerStyles.title}>Careers</h2>
            <p className={headerStyles.subtitle}>Join us and build what matters.</p>
          </header>
        </div>
        <CareerWhySection />
        <CareerOpeningsSection />
        <CareerCtaSection />
      </section>

      <AboutCtaSection />
    </main>
  );
};

export default About;
