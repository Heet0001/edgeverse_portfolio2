import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./techProprietaryDatasetSection.module.scss";
import { TECH_PROPRIETARY_DATASET } from "./technologyData";

const TechProprietaryDatasetSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal(titleRef, { variant: "fadeUp", y: 20 });
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
        <h2 ref={titleRef} className={styles.title}>
          Proprietary Dataset
        </h2>
        <p className={styles.subtitle}>
          Own perception data. Not replicable from open sources.
        </p>
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
