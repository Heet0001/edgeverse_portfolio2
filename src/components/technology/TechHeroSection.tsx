import { useLayoutEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "../../utils/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import styles from "./techHeroSection.module.scss";
import { TECH_HERO_IMAGE } from "./technologyData";

const TechHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || reduceMotion) return;

    registerGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector(`.${styles.bgImage}`), {
        scale: 1.06,
        duration: 1.4,
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
      <img
        className={styles.bgImage}
        src={TECH_HERO_IMAGE}
        alt=""
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.badge}>Technology</div>
        <h1 className={styles.heading}>
          Pioneering edge AI for
          <br />
          perception.
        </h1>
        <p className={styles.subtitle}>
          A vertically integrated hardware + software + AI platform
          <br />
          purpose-built for most challenging conditions.
        </p>
      </div>
    </section>
  );
};

export default TechHeroSection;
