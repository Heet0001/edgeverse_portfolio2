import styles from "./techArchitectureIntroSection.module.scss";

const TechArchitectureIntroSection = () => {
  return (
    <section
      className={styles.section}
      aria-label="Full-stack edge AI architecture"
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Full-stack edge AI architecture
          <br />
          for real-world perception
        </h2>
        <p className={styles.text}>
          EdgeVerse specializes in building AI perception models for
          two-wheelers. Our technology equips vehicles with an intelligent
          &apos;perception brain&apos; that can see, understand, and react to
          India&apos;s chaotic roads.
        </p>

        <div className={styles.layers} aria-hidden="true">
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotCyan}`} />
          <span className={`${styles.dot} ${styles.dotPurple}`} />
        </div>
      </div>
    </section>
  );
};

export default TechArchitectureIntroSection;
