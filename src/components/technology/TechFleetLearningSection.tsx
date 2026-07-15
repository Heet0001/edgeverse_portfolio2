import { useRef, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./techFleetLearningSection.module.scss";
import headerStyles from "./techSectionHeader.module.scss";
import activeLearningVideo from "../../assets/videos/new edgverse.webm";

const HIDDEN_COSTS = [
  {
    title: "Data Leak Risks",
    text: "Shipping raw video to third-party labeling vendors.",
  },
  {
    title: "Skyhigh Egress Fees",
    text: "Uploading terabytes of uncompressed edge data to the cloud.",
  },
  {
    title: "Vendor Lock-in",
    text: "Models that can only be updated by the vendor's data science team.",
  },
] as const;

const EDGEVERSE_ADVANTAGES = [
  {
    title: "100% Data Custody",
    text: "Raw edge data never leaves your secure network.",
  },
  {
    title: "Local Active Learning",
    text: "Filter, annotate, and retrain at the source.",
  },
  {
    title: "Autonomous Evolution",
    text: "Your seed model adapts to your environment in real-time.",
  },
] as const;

const TechFleetLearningSection = () => {
  const copyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useScrollReveal(copyRef, { variant: "fadeUp", y: 24 });
  useScrollReveal(mediaRef, { variant: "fadeUp", y: 32, delay: 0.12 });
  useScrollReveal(compareRef, { variant: "fadeUp", y: 28, delay: 0.08 });

  return (
    <section
      id="active-learning-loop"
      className={styles.section}
      aria-label="Active learning loop"
    >
      <div className={styles.inner}>
        <header ref={copyRef} className={headerStyles.dark}>
          <h2 className={headerStyles.title}>
            Continuous AI Model Evolution. Zero Data Exposure.
          </h2>
          <p className={headerStyles.subtitle}>
            Edgeverse provides the seed model. You provide the environment.
            Deploy our end-to-end active learning loop directly inside your
            secure infrastructure to filter, annotate, and retrain models
            locally—without ever sharing your raw data with us.
          </p>
        </header>

        <div ref={mediaRef} className={styles.media}>
          {!videoLoaded && <div className={styles.videoPlaceholder} />}
          <video
            src={activeLearningVideo}
            className={`${styles.image} ${videoLoaded ? styles.videoVisible : styles.videoHidden}`}
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoLoaded(true)}
            onLoadedData={() => setVideoLoaded(true)}
          />
        </div>

        <div ref={compareRef} className={styles.compare}>
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th scope="col" className={styles.colCost}>
                  The Hidden Costs of Standard AI Retraining
                </th>
                <th scope="col" className={styles.colAdvantage}>
                  The EdgeVerse Advantage
                </th>
              </tr>
            </thead>
            <tbody>
              {HIDDEN_COSTS.map((cost, index) => {
                const advantage = EDGEVERSE_ADVANTAGES[index];
                return (
                  <tr key={cost.title}>
                    <td className={styles.colCost}>
                      <div className={styles.cell}>
                        <span className={styles.markNeg} aria-hidden="true">
                          ✕
                        </span>
                        <span>
                          <strong>{cost.title}:</strong> {cost.text}
                        </span>
                      </div>
                    </td>
                    <td className={styles.colAdvantage}>
                      <div className={styles.cell}>
                        <span className={styles.markPos} aria-hidden="true">
                          ✓
                        </span>
                        <span>
                          <strong>{advantage.title}:</strong> {advantage.text}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechFleetLearningSection;
