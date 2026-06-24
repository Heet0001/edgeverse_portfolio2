import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./newsInsightsSection.module.scss";

const RECOGNITION_IMAGE = "/images/nasscom_mobility_award.png";

const RECOGNITION_ITEM = {
  id: "news-1",
  title: "Nasscom Mobility Challenge 2025 Winner",
  imageSrc: RECOGNITION_IMAGE,
  imageAlt:
    "EdgeVerse team receiving the Nasscom Mobility Innovation Challenge 2025 award",
  href: "/",
};

const NewsInsightsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal(titleRef, { variant: "fadeUp", y: 20 });
  useScrollReveal(gridRef, {
    variant: "stagger",
    stagger: 0.08,
    y: 24,
    start: "top 88%",
  });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="Recognition"
    >
      <div className={styles.inner}>
        <h2 ref={titleRef} className={styles.title}>
          Recognition
        </h2>

        <div ref={gridRef} className={styles.cardWrap}>
          <Link
            className={styles.featuredCard}
            to={RECOGNITION_ITEM.href}
            data-reveal-item
          >
            <div className={styles.featuredMedia}>
              {RECOGNITION_ITEM.imageSrc && (
                <img
                  className={styles.featuredImg}
                  src={RECOGNITION_ITEM.imageSrc}
                  alt={RECOGNITION_ITEM.imageAlt}
                  loading="lazy"
                />
              )}
              <div className={styles.featuredOverlay} aria-hidden="true" />
              <div className={styles.featuredBody}>
                <p className={styles.featuredTitle}>{RECOGNITION_ITEM.title}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsInsightsSection;
