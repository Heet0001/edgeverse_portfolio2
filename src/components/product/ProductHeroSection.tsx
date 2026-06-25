import { useLayoutEffect, useRef } from "react";
import { gsap, registerGsapPlugins } from "../../utils/gsap";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import styles from "./productHeroSection.module.scss";
import { PRODUCT_HERO_IMAGE } from "./productData";

const ProductHeroSection = () => {
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
          `.${styles.badge}, .${styles.heading}, .${styles.subtitle}, .${styles.cta}`,
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
      aria-label="Product hero"
    >
      <img
        className={styles.bgImage}
        src={PRODUCT_HERO_IMAGE}
        alt=""
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.badge}>Perceiva™ ARAS Platform</div>
        <h1 className={styles.heading}>
          Advanced AI technology for safer, smarter riding.
        </h1>
        <p className={styles.subtitle}>
          {/* Enabling OEMs and cluster makers to unlock all levels of two-wheeler rider assistance at
          scale. */}
          Edge-native AI for smarter system through sensor fusion
        </p>
        <a className={styles.cta} href="/contact">
          <span>Schedule a demo</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default ProductHeroSection;
