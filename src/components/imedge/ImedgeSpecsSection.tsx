import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { IMEDGE_SPECS } from "./imedgeData";
import styles from "./imedgeSpecsSection.module.scss";

const ImedgeSpecsSection = ({ embedded = false }: { embedded?: boolean }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { variant: "fadeUp", y: 24 });

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${embedded ? styles.sectionEmbedded : ""}`}
      aria-label="Imedge reference platform specifications"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          {!embedded && <span className={styles.kicker}>Specifications</span>}
          {embedded ? (
            <h3 className={styles.title}>Reference platform overview</h3>
          ) : (
            <h2 className={styles.title}>Reference platform overview</h2>
          )}
          {!embedded && (
            <p className={styles.lead}>
              A production-ready edge vision reference built for automotive-grade
              reliability in two-wheeler and industrial environments.
            </p>
          )}
        </header>

        <div className={styles.table}>
          {IMEDGE_SPECS.map((row, index) => (
            <div key={index} className={styles.row}>
              <div className={styles.cell}>
                <div className={styles.label}>{row.left.label}</div>
                <div className={styles.value}>{row.left.value}</div>
              </div>
              <div className={styles.cell}>
                <div className={styles.label}>{row.right.label}</div>
                <div className={styles.value}>{row.right.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImedgeSpecsSection;
