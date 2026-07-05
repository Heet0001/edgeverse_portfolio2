import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { IMEDGE_CAPABILITIES } from "./imedgeData";
import imedgeHardwareImg from "../../assets/images/Imedgehardware1-cropped.svg";
import styles from "./imedgeCapabilitiesSection.module.scss";

const ImedgeCapabilitiesSection = ({ embedded = false }: { embedded?: boolean }) => {
  const copyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useScrollReveal(copyRef, {
    variant: "stagger",
    stagger: 0.1,
    y: 20,
    childSelector: `.${styles.capability}`,
  });
  useScrollReveal(mediaRef, { variant: "fadeUp", y: 32, delay: 0.1 });

  return (
    <section
      className={`${styles.section} ${embedded ? styles.sectionEmbedded : ""}`}
      aria-label="Imedge hardware capabilities"
    >
      <div className={styles.inner}>
        <div className={styles.split}>
          <div className={styles.content}>
            {!embedded && (
              <header className={styles.header}>
                <span className={styles.kicker}>Hardware platform</span>
                <h2 className={styles.title}>
                  Real-time AI vision hardware for the edge
                </h2>
                <p className={styles.lead}>
                  The fastest and most reliable way to realise your Edge AI Vision
                  application lies in building a system where camera design and
                  calibration. AI model tuning for Edge Processor and Intelligence
                  layer are vertically integrated. Imedge™ platform accomplishes
                  this goal by integrating high-performance computer vision
                  directly to the source of data — enabling instant insights,
                  uncompromising privacy, and split-second decision-making without
                  cloud latency.
                </p>
              </header>
            )}

            <div ref={copyRef} className={styles.capabilities}>
              {IMEDGE_CAPABILITIES.map((item) => (
                <div key={item.title} className={styles.capability}>
                  <h3 className={styles.capabilityTitle}>{item.title}</h3>
                  <p className={styles.capabilityDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={mediaRef} className={styles.media}>
            <img
              src={imedgeHardwareImg}
              alt="Imedge hardware components: camera module and PCB boards"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImedgeCapabilitiesSection;
