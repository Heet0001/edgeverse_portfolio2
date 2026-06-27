import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import ImedgeCapabilitiesSection from "../imedge/ImedgeCapabilitiesSection";
import ImedgeSpecsSection from "../imedge/ImedgeSpecsSection";
import { IMEDGE_INTRO } from "../imedge/imedgeData";
import styles from "./productLineSection.module.scss";

type ImedgeProductSectionProps = {
  index: number;
};

const ImedgeProductSection = ({ index }: ImedgeProductSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, { variant: "fadeUp", y: 24, delay: index * 0.05 });

  return (
    <section
      ref={sectionRef}
      id="imedge"
      className={styles.section}
      aria-label="Imedge hardware platform"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h2 className={styles.name}>Imedge® Hardware Platform</h2>
          <p className={styles.tagline}>{IMEDGE_INTRO.tagline}</p>
          <p className={styles.description}>{IMEDGE_INTRO.description}</p>
        </div>

        <ImedgeCapabilitiesSection embedded />
        <ImedgeSpecsSection embedded />
      </div>
    </section>
  );
};

export default ImedgeProductSection;
