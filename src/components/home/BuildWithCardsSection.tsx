import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./buildWithCardsSection.module.scss";
import buildImg from "../../assets/images/card-build-with-edgeverse.png";
import investorsImg from "../../assets/images/card-investors.png";
import safetyImg from "../../assets/images/image.png";

const CARDS = [
  {
    id: "perceiva",
    title: "Build with Perceiva",
    description:
      "Learn about Perceiva™ — our full-stack ARAS platform for OEMs and Tier-1 partners building safer mobility at scale.",
    cta: "Product",
    href: "/product",
    image: buildImg,
    imageAlt: "Motorcycle HUD with real-time Perceiva perception data",
  },
  {
    id: "active-learning",
    title: "Active learning",
    description:
      "Explore how EdgeVerse perception models continuously improve from real-world edge data across diverse environments.",
    cta: "Technology",
    href: "/technology",
    image: safetyImg,
    imageAlt: "Edge AI perception adapting to complex road conditions",
  },
  {
    id: "imedge hardware",
    title: "Imedge Hardware",
    description:
      "	Explore how Edgeverse can help you build camera hardware and ISP tuning for your application ",
    cta: "Company",
    href: "/about",
    image: investorsImg,
    imageAlt: "EdgeVerse perception hardware mounted on a motorcycle",
  },
] as const;

const BuildWithCardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { variant: "stagger", stagger: 0.14, y: 32 });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="Explore EdgeVerse"
    >
      <div className={styles.grid}>
        {CARDS.map((card) => (
          <article
            key={card.id}
            className={styles.card}
            data-reveal-item
            tabIndex={0}
          >
            <img
              className={styles.cardBg}
              src={card.image}
              alt={card.imageAlt}
              loading="lazy"
            />
            <div className={styles.cardOverlay} aria-hidden="true" />

            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDesc}>{card.description}</p>
              <a className={styles.cardCta} href={card.href}>
                {card.cta}
                <span className={styles.cardCtaArrow} aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BuildWithCardsSection;
