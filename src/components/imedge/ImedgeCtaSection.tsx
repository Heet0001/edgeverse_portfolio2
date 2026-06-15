import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./imedgeCtaSection.module.scss";

const ImedgeCtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { variant: "fadeUp", y: 20, start: "top 90%" });

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Contact EdgeVerse">
      <div className={styles.inner}>
        <h2 className={styles.title}>Ready to build your edge vision platform?</h2>
        <p className={styles.text}>
          Talk to our hardware team about camera module design, ISP tuning, and
          co-development for your product roadmap.
        </p>
        <a className={styles.btn} href="/contact">
          <span>Schedule a call</span>
          <span className={styles.btnArrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default ImedgeCtaSection;
