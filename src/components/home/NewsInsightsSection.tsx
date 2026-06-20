import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./newsInsightsSection.module.scss";
import newsFeature1 from "../../assets/images/Nasscom_Mobility_Award.png";
// import newsFeature2 from "../../assets/images/news-feature-2.png";
// import newsSmall1 from "../../assets/images/news-small-1.png";
// import newsSmall2 from "../../assets/images/news-small-2.png";
// import newsSmall3 from "../../assets/images/news-small-3.png";
// import { getPublicBlogs } from "../../api/blogs";
// import type { Blog } from "../../types/models";

type NewsItem = {
  id: string;
  title: string;
  imageSrc?: string;
  imageAlt: string;
  href: string;
  variant: "featured" | "solid" | "standard";
};

// const FALLBACK_ITEMS: NewsItem[] = [
//   {
//     id: "news-1",
//     title:
//       "EdgeVerse raises pre-seed $2.5M to bring AI to any vehicle across the globe.",
//     imageSrc: newsFeature1,
//     imageAlt: "Motorcycle with perception HUD overlay",
//     href: "/blog",
//     variant: "featured",
//   },
//   {
//     id: "news-2",
//     title:
//       "How EdgeVerse is using edge AI to make Indian roads safer for everyone.",
//     imageSrc: newsFeature2,
//     imageAlt: "Busy Indian street with AI vehicle detection",
//     href: "/blog",
//     variant: "featured",
//   },
//   {
//     id: "news-3",
//     title:
//       "The Deep-tech startup building a first-of-its-kind AI for Indian roads.",
//     imageSrc: newsSmall1,
//     imageAlt: "Highway with connected vehicle network overlay",
//     href: "/blog",
//     variant: "solid",
//   },
//   {
//     id: "news-4",
//     title:
//       "EdgeVerse scales to any road, for any vehicle, for any environment.",
//     imageSrc: newsSmall2,
//     imageAlt: "Motorcycle HUD in urban night traffic",
//     href: "/blog",
//     variant: "standard",
//   },
//   {
//     id: "news-5",
//     title:
//       "EdgeVerse's road safety revolution: From Indian cities to the rest of the world.",
//     imageSrc: newsSmall3,
//     imageAlt: "Pedestrian safety detection at a city crosswalk",
//     href: "/blog",
//     variant: "standard",
//   },
// ];

const RECOGNITION_ITEM: NewsItem = {
  id: "news-1",
  title:
    "Nasscom Mobility Challenge 2025 Winner",
  imageSrc: newsFeature1,
  imageAlt: "Motorcycle with perception HUD overlay",
  href: "/",
  variant: "featured",
};

// const PLACEHOLDERS = [
//   newsFeature1,
//   newsFeature2,
//   newsSmall1,
//   newsSmall2,
//   newsSmall3,
// ];

// function toNewsItems(blogs: Blog[]): NewsItem[] {
//   return blogs.slice(0, 5).map((b, idx) => ({
//     id: b._id,
//     title: b.title,
//     imageSrc: b.coverImage || PLACEHOLDERS[idx % PLACEHOLDERS.length],
//     imageAlt: b.title,
//     href: `/blog/${b.slug}`,
//     variant: idx < 2 ? "featured" : idx === 2 ? "solid" : "standard",
//   }));
// }

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

  // useEffect(() => {
  //   let alive = true;
  //   void getPublicBlogs(5).then((blogs) => {
  //     if (alive && blogs.length > 0) {
  //       setItems(toNewsItems(blogs));
  //     }
  //   });
  //   return () => {
  //     alive = false;
  //   };
  // }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="In the news"
    >
      <div className={styles.inner}>
        <h2 ref={titleRef} className={styles.title}>
          Recognition
        </h2>
      </div>

      <div ref={gridRef} className={styles.fullWidthGrid}>
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
          </div>
          <div className={styles.featuredBody}>
            <p className={styles.featuredTitle}>{RECOGNITION_ITEM.title}</p>
            {/* <span className={styles.readMore}>
              Read more <span aria-hidden="true">→</span>
            </span> */}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NewsInsightsSection;
