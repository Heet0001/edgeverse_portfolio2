import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "../../utils/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import styles from "./home.module.scss";
import heroImage from "../../assets/images/ChatGPT Image May 29, 2026, 03_13_52 AM.png";
import heroVideo from "../../assets/videos/edgeverse_video.mp4";
import ScrollRevealIntro from "../../components/home/ScrollRevealIntro";
import BuildWithCardsSection from "../../components/home/BuildWithCardsSection";
// import FeatureTabsSection from "../../components/home/FeatureTabsSection";
import HomeInvestorsSection from "../../components/home/HomeInvestorsSection";
import NewsInsightsSection from "../../components/home/NewsInsightsSection";
import LifeSavingCtaSection from "../../components/home/LifeSavingCtaSection";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    void video.play().catch(() => {});
  }, [reduceMotion]);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const cta = ctaRef.current;
    if (!hero || reduceMotion) return;

    registerGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.from(hero.querySelector(`.${styles.heroBg}`), {
        scale: 1.08,
        duration: 1.6,
        ease: "power2.out",
      });

      gsap.from(
        hero.querySelectorAll(
          `.${styles.heroTitleLine}`,
        ),
        {
          y: 36,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        },
      );

      gsap.from(hero.querySelector(`.${styles.heroRule}`), {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.7,
        ease: "power2.out",
        delay: 0.45,
      });

      if (cta) {
        gsap.fromTo(
          cta,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.6,
            clearProps: "transform,opacity",
          },
        );
      }
    }, hero);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <main className={styles.page}>
      <section id="page-hero" ref={heroRef} className={styles.hero}>
        {reduceMotion ? (
          <img
            className={styles.heroBg}
            src={heroImage}
            alt=""
            aria-hidden="true"
          />
        ) : (
          <video
            ref={videoRef}
            className={styles.heroBg}
            src={heroVideo}
            poster={heroImage}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        )}
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>
              Any Edge Device. Any Environment.
            </span>
            <span className={styles.heroTitleLine}>
              One Intelligence Layer.
            </span>
          </h1>
          <span className={styles.heroRule} aria-hidden="true" />
          <a ref={ctaRef} className={styles.heroCta} href="/product">
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

      {/* <FeatureTabsSection /> */}
      <HomeInvestorsSection />
      <NewsInsightsSection />
      <LifeSavingCtaSection />
    </main>
  );
};

export default Home;
