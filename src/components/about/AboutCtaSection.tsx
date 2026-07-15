import styles from "./aboutCtaSection.module.scss";

const AboutCtaSection = () => {
  return (
    <section className={styles.section} aria-label="Call to action">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Let's build the future{" "}
            <span className={styles.accent}>together.</span>
          </h2>
          <p className={styles.subtitle}>
            We're always looking for partners, investors, and collaborators who
            share our vision of making pervasive edge AI perception.
          </p>
        </div>
        <div className={styles.action}>
          <a href="/contact" className={styles.button}>
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutCtaSection;
