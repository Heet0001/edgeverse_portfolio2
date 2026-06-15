import detection from "../../../assets/images/detection.png";
// import collisionImg from "../../../assets/images/collision.png"
import heroImg from "../../../assets/images/hero.png";

export type NavMegaMenuKey =
  | "technology"
  | "industries" /* | "safety" */
  | "company";

export type NavMegaLink = {
  title: string;
  description: string;
  href: string;
};

export type NavMegaMenuConfig = {
  key: NavMegaMenuKey;
  label: string;
  heading: string;
  tagline: string;
  columns: NavMegaLink[][];
  featured: {
    title: string;
    description: string;
    href: string;
    image: string;
    imageAlt: string;
  };
};

export const NAV_MEGA_MENUS: NavMegaMenuConfig[] = [
  {
    key: "technology",
    label: "Product",
    heading: "Product",
    tagline: "Edge-native AI  for smarter systems",
    columns: [
      [
        {
          title: "Perceiva™",
          description:
            "Full-stack Advanced Rider Assistance System for OEMs and Tier-1s",
          href: "/product",
        },
        {
          title: "Imedge® Hardware",
          description:
            "Help you build the right camera hardware and ISP tuning",
          href: "/product/imedge",
        },
      ],
      [],
    ],
    featured: {
      title: "Perceiva™",
      description: "Predict. Alert. Protect — intelligence at the edge.",
      href: "/product",
      image: detection,
      imageAlt: "AI perception overlay on road scene",
    },
  },
  {
    key: "industries",
    label: "Technology",
    heading: "Technology",
    tagline: "We are your Co-Development Partner ",
    columns: [
      [
        {
          title: "Edge AI approach",
          description: "On-device perception with zero cloud dependency",
          href: "/technology",
        },
        {
          title: "India Perception Model",
          description:
            "Foundation models trained exclusively on Indian road data",
          href: "/technology",
        },
      ],
      [
        {
          title: "Fleet learning loop",
          description: "Continuous model improvement from deployed devices",
          href: "/technology",
        },
        {
          title: "Neural simulator",
          description: "Photorealistic scenario generation at scale",
          href: "/technology#simulation",
        },
      ],
    ],
    featured: {
      title: "Co-Development Partner",
      description: "Partner with EdgeVerse from sensor integration through deployment.",
      href: "/technology",
      image: heroImg,
      imageAlt: "EdgeVerse technology and co-development",
    },
  },
  // {
  //   key: "safety",
  //   label: "Safety",
  //   heading: "Safety",
  //   tagline: "Designed for real-world unpredictability",
  //   columns: [
  //     [
  //       {
  //         title: "Collision alert zones",
  //         description: "Front, rear, and blind-spot threat detection",
  //         href: "/safety",
  //       },
  //       {
  //         title: "Predictive alerts",
  //         description: "Turn critical milliseconds into life-saving seconds",
  //         href: "/safety",
  //       },
  //     ],
  //     [
  //       {
  //         title: "Ride recording",
  //         description: "Intelligent incident capture for fleet and rider safety",
  //         href: "/safety",
  //       },
  //       {
  //         title: "Safety framework",
  //         description: "Validation and testing for production deployment",
  //         href: "/safety",
  //       },
  //     ],
  //   ],
  //   featured: {
  //     title: "Safety by design",
  //     description: "Up to 70% accident avoidance with edge AI inference.",
  //     href: "/safety",
  //     image: collisionImg,
  //     imageAlt: "Collision alert visualization",
  //   },
  // },
  {
    key: "company",
    label: "Company",
    heading: "Company",
    tagline: "",
    columns: [
      [
        {
          title: "About",
          description: "Our mission, vision, and story",
          href: "/about",
        },
        {
          title: "Leadership",
          description: "Meet the team building EdgeVerse",
          href: "/leadership",
        },
      ],
      [
        {
          title: "Partners and Investors",
          description: "Technology and OEM partners building at the edge",
          href: "/investors",
        },
        {
          title: "Careers",
          description: "Join us and build what matters",
          href: "/careers",
        },
      ],
    ],
    featured: {
      title: "Blog & insights",
      description: "Research, product updates, and industry perspectives.",
      href: "/blog",
      image: heroImg,
      imageAlt: "EdgeVerse team and technology",
    },
  },
];

export const NAV_QUICK_LINKS = [
  { label: "Product", href: "/product" },
  { label: "Technology", href: "/technology" },
  // { label: "Safety", href: "/safety" },
  { label: "Contact", href: "/contact" },
] as const;
