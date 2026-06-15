import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import artparkLogo from "../../assets/images/artpark.png";
import styles from "./homeInvestorsSection.module.scss";

const INVESTOR_LOGOS = [{ name: "ARTPARK", logo: artparkLogo }] as const;

const MARQUEE_LOGOS = [
  ...INVESTOR_LOGOS,
  ...INVESTOR_LOGOS,
  ...INVESTOR_LOGOS,
  ...INVESTOR_LOGOS,
];

const HomeInvestorsSection = () => {
  const copyRef = useRef<HTMLDivElement>(null);

  useScrollReveal(copyRef, { variant: "fadeUp", y: 24 });

  return (
    <section className={styles.section} aria-label="Investors">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div ref={copyRef} className={styles.copy}>
            <h2 className={styles.title}>Investors</h2>
            <p className={styles.text}>
              EdgeVerse is backed by industry leaders and strategic partners who
              share our vision of making every road safer through edge-native
              perception intelligence.
            </p>
            <a className={styles.btn} href="/investors">
              Read more
              <span className={styles.btnArrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div className={styles.logoMarquee} aria-label="Investor logos">
          <div className={styles.logoFadeLeft} aria-hidden="true" />
          <div className={styles.logoFadeRight} aria-hidden="true" />
          <div className={styles.logoTrack}>
            {MARQUEE_LOGOS.map((item, index) => (
              <img
                key={`${item.name}-${index}`}
                src={item.logo}
                alt={item.name}
                className={styles.logoImage}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeInvestorsSection;
