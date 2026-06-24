import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./techPlatformAdvantagesSection.module.scss";
import headerStyles from "./techSectionHeader.module.scss";
import { TECH_PLATFORM_ADVANTAGES } from "./technologyData";

const TechPlatformAdvantagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal(sectionRef, { variant: "fadeUp", y: 20 });
  useScrollReveal(gridRef, {
    variant: "stagger",
    stagger: 0.08,
    y: 20,
    childSelector: "[data-advantage]",
  });

  return (
    <section
      ref={sectionRef}
      id="why-perceiva"
      className={styles.section}
      aria-label="Why Perceiva"
    >
      <div className={styles.inner}>
        <header className={`${headerStyles.light}`}>
          <h2 className={headerStyles.title}>Why Perceiva™</h2>
          <p className={headerStyles.subtitle}>
            Built grounds-up with &quot;adoption at scale&quot; in mind — flexible,
            sovereign, and optimized for the edge.
          </p>
        </header>
        <div ref={gridRef} className={styles.grid}>
          {TECH_PLATFORM_ADVANTAGES.map((item) => (
            <article key={item.title} className={styles.card} data-advantage>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPlatformAdvantagesSection;
