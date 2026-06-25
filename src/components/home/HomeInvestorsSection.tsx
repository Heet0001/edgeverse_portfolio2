import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import artparkLogo from "../../assets/images/artpark.png";
import styles from "./homeInvestorsSection.module.scss";

const INVESTOR_LOGOS = [{ name: "ARTPARK", logo: artparkLogo }] as const;

const MARQUEE_LOGOS = [
  ...INVESTOR_LOGOS,
];

const SHOULD_MARQUEE = MARQUEE_LOGOS.length > 4;

const HomeInvestorsSection = () => {
  const copyRef = useRef<HTMLDivElement>(null);

  useScrollReveal(copyRef, { variant: "fadeUp", y: 24 });

  return (
    <section className={styles.section} aria-label="Investors">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div ref={copyRef} className={styles.copy}>
            <h2 className={styles.title}>Investors</h2>
            <a className={styles.btn} href="#partners">
              Read more
              <span className={styles.btnArrow} aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div
          className={`${styles.logoMarquee} ${SHOULD_MARQUEE ? "" : styles.logoMarqueeStatic}`}
          aria-label="Investor logos"
        >
          {SHOULD_MARQUEE && (
            <>
              <div className={styles.logoFadeLeft} aria-hidden="true" />
              <div className={styles.logoFadeRight} aria-hidden="true" />
            </>
          )}
          <div
            className={`${styles.logoTrack} ${SHOULD_MARQUEE ? "" : styles.logoTrackStatic}`}
          >
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
