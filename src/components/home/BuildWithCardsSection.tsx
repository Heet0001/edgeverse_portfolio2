import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./buildWithCardsSection.module.scss";
import buildImg from "../../assets/images/buildp.png";
import investorsImg from "../../assets/images/sh.png";
import safetyImg from "../../assets/images/al.png";

const CARDS = [
  {
    id: "perceiva",
    title: "Build with Perceiva",
    description:
      "Learn about Perceiva™ — our full-stack ARAS platform for OEMs and Tier-1 partners building safer mobility at scale.",
    cta: "Product",
    href: "/product",
    image: buildImg,
    imageAlt: "Perceiva full-stack platform diagram",
  },
  {
    id: "active-learning",
    title: "Active learning",
    description:
      "Explore how EdgeVerse perception models continuously improve from real-world edge data across diverse environments.",
    cta: "Technology",
    href: "/technology",
    image: safetyImg,
    imageAlt: "Active learning loop diagram",
  },
  {
    id: "imedge-hardware",
    title: "Imedge Hardware",
    description:
      "Explore how EdgeVerse can help you build camera hardware and ISP tuning for your application.",
    cta: "Product",
    href: "/product/imedge",
    image: investorsImg,
    imageAlt: "Sensor hardware integration diagram",
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

            <div className={styles.cardMedia}>
              <img
                className={styles.cardImage}
                src={card.image}
                alt={card.imageAlt}
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BuildWithCardsSection;
