import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./buildWithCardsSection.module.scss";
import buildImg from "../../assets/images/buildp.png";
import investorsImg from "../../assets/images/sensorhardware.png";
import safetyImg from "../../assets/images/al.png";

type Card = {
  id: string;
  title: ReactNode;
  description: ReactNode;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
};

const CARDS: Card[] = [
  {
    id: "perceiva",
    title: (
      <>
        Build with Perceiva<sup className={styles.tm}>TM</sup>
      </>
    ),
    description: (
      <>
        Learn about Perceiva<sup className={styles.tm}>TM</sup> — Our vertically
        integrated Full Stack Perception Intelligence platform for mobility,
        industrial automation and resource constrained Edge AI applications
      </>
    ),
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
    href: "/product#imedge",
    image: investorsImg,
    imageAlt: "Sensor hardware integration diagram",
  },
];

const BuildWithCardsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { variant: "stagger", stagger: 0.14, y: 32 });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="Explore EdgeVerse"
    >
      <div className={styles.inner}>
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
      </div>
    </section>
  );
};

export default BuildWithCardsSection;
