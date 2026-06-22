import styles from "./realWorldDemosSection.module.scss";
import detection from "../../assets/images/detection.png";
import detection1 from "../../assets/images/detection1.png";
import detection2 from "../../assets/images/detection2.png";
import RealWorldDemoCard from "./RealWorldDemoCard";

const DEMOS = [
  {
    id: "demo-1",
    eyebrow: "PERCEIVA™",
    title: "Blind Spot Detection & Lane Change Assist",
    imageSrc: detection,
    imageAlt: "Blind spot detection demo",
  },
  {
    id: "demo-2",
    eyebrow: "PERCEIVA™",
    title: "Forward Collision Warning with real-time tracking",
    imageSrc: detection1,
    imageAlt: "Forward collision warning demo",
  },
  {
    id: "demo-3",
    eyebrow: "PERCEIVA™",
    title: "No False Overtaking Alerts",
    imageSrc: detection2,
    imageAlt: "Overtaking alerts demo",
  },
] as const;

const RealWorldDemosSection = () => {
  return (
    <section
      id="road-trip"
      className={styles.section}
      aria-label="Perceiva road test demos"
    >
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.kicker}>PERCEIVA™ ROAD TEST</div>
          <h2 className={styles.title}>
            Real-world tested.
            <br />
            Real-time proven.
          </h2>
          <a className={styles.browseLink} href="/videos">
            Browse all demos <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.grid}>
          {DEMOS.map((demo) => (
            <RealWorldDemoCard
              key={demo.id}
              eyebrow={demo.eyebrow}
              title={demo.title}
              imageSrc={demo.imageSrc}
              imageAlt={demo.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWorldDemosSection;
