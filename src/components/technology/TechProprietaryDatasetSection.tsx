import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./techProprietaryDatasetSection.module.scss";
import headerStyles from "./techSectionHeader.module.scss";
import { TECH_PROPRIETARY_DATASET } from "./technologyData";

const TechProprietaryDatasetSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal(headerRef, { variant: "fadeUp", y: 20 });
  useScrollReveal(gridRef, {
    variant: "stagger",
    stagger: 0.08,
    y: 22,
    childSelector: `.${styles.card}`,
  });

  return (
    <section
      id="proprietary-dataset"
      className={styles.section}
      aria-label="Proprietary dataset"
    >
      <div className={styles.inner}>
        <header ref={headerRef} className={headerStyles.dark}>
          <h2 className={headerStyles.title}>Proprietary Dataset</h2>
          <p className={headerStyles.subtitle}>
            Own perception data. Not replicable from open sources.
          </p>
        </header>
        <div ref={gridRef} className={styles.grid}>
          {TECH_PROPRIETARY_DATASET.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechProprietaryDatasetSection;
