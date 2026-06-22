import { useRef, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./techFleetLearningSection.module.scss";
import activeLearningVideo from "../../assets/videos/Active Learning Technology Loop.mp4";

const TechFleetLearningSection = () => {
  const copyRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useScrollReveal(copyRef, { variant: "fadeUp", y: 24 });
  useScrollReveal(mediaRef, { variant: "fadeUp", y: 32, delay: 0.12 });

  return (
    <section
      id="active-learning-loop"
      className={styles.section}
      aria-label="Active learning loop"
    >
      <div className={styles.inner}>
        <div ref={copyRef}>
          <p className={styles.kicker}>Active Learning Loop</p>
          <h2 className={styles.title}>The data flywheel for Indian roads.</h2>
          <p className={styles.text}>
            Every device deployed contributes to a continuously improving
            perception model — trained, evaluated, and deployed
            <br />
            through our active learning loop.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default TechFleetLearningSection;
