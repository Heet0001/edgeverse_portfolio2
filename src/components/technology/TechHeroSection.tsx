import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "../../utils/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import styles from "./techHeroSection.module.scss";
import { TECH_HERO_IMAGE } from "./technologyData";
import techHeroVideo from "../../assets/edgeverse_t.mp4";

const TechHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    void video.play().catch(() => {});
  }, [reduceMotion]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reduceMotion) return;

    registerGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector(`.${styles.bgImage}`), {
        scale: 1.03,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(
        section.querySelectorAll(
          `.${styles.badge}, .${styles.heading}, .${styles.subtitle}`,
        ),
        {
          y: 24,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.12,
        },
      );
    }, section);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="page-hero"
      className={styles.section}
      aria-label="Technology hero"
    >
      <div className={styles.mediaFrame}>
        {reduceMotion ? (
          <img
            className={styles.bgImage}
            src={TECH_HERO_IMAGE}
            alt=""
            aria-hidden="true"
          />
        ) : (
          <video
            ref={videoRef}
            className={styles.bgImage}
            src={techHeroVideo}
            poster={TECH_HERO_IMAGE}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        )}
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.inner}>
        <div className={styles.badge}>Technology</div>
        <h1 className={styles.heading}>We are your Co-Development Partner</h1>
        <p className={styles.subtitle}>
          Partner with EdgeVerse to co-develop perception intelligence
          {/* <br /> */}
          from sensor integration through deployment and continuous learning.
        </p>
      </div>
    </section>
  );
};

export default TechHeroSection;
