import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./lifeSavingCtaSection.module.scss";

const LifeSavingCtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { variant: "fadeUp", y: 20, start: "top 90%" });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="Schedule a call"
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Let&apos;s make your{" "}
            <span className={styles.accent}> edge device intelligent.</span>
          </h2>
          <p className={styles.text}>
            Whether you &apos;re an OEM, Tier-1 supplier — EdgeVerse perception
            intelligence integrates into your existing on upcoming edge device
          </p>
        </div>

        <div className={styles.right}>
          <a className={styles.btn} href="/contact">
            <span>Schedule a Call</span>
            <span className={styles.btnArrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LifeSavingCtaSection;
