import detection from "../../../assets/images/forwardcollision.png";
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
  linksLayout?: "default" | "twoColumn";
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
    tagline: "Edge-native AI for smarter system through sensor fusion",
    linksLayout: "twoColumn",
    columns: [
      [
        {
          title: "Perceiva™ ARAS",
          description: "Making Two Wheelers safer with AI",
          href: "/product#aras",
        },
        {
          title: "Perceiva™ DMS",
          description: "Driver Monitoring with AI",
          href: "/product#dms",
        },
        {
          title: "Perceiva™ iAuto",
          description: "Upcoming",
          href: "/product#iauto",
        },
        {
          title: "Imedge® Hardware Platform",
          description:
            "Help you build the right camera hardware and ISP for your application",
          href: "/product/imedge",
        },
      ],
    ],
    featured: {
      title: "",
      description: "",
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
    linksLayout: "twoColumn",
    columns: [
      [
        {
          title: "Why Perceiva",
          description:
            "Built for OEM co-development — flexible, sovereign, and optimized for the edge.",
          href: "/technology#why-perceiva",
        },
        {
          title: "Perceiva Approach",
          description:
            "End-to-end perception intelligence from sensor inputs to protected customer IP.",
          href: "/technology#perceiva-approach",
        },
        {
          title: "Active Learning Loop",
          description:
            "Deployable at your compute — Sovereign AI learning loop.",
          href: "/technology#active-learning-loop",
        },
        {
          title: "Proprietary Dataset",
          description: "Own perception data. Not replicable from open sources.",
          href: "/technology#proprietary-dataset",
        },
      ],
    ],
    featured: {
      title: "",
      description: "",
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
    tagline: "Reducing entry-barrier for edge intelligence deployment",
    linksLayout: "twoColumn",
    columns: [
      [
        {
          title: "About Us",
          description: "Our story and who we are",
          href: "/about#about",
        },
        {
          title: "Leadership",
          description: "Meet the team building EdgeVerse",
          href: "/about#leadership",
        },
        {
          title: "Partners and Investors",
          description: "Technology and OEM partners building at the edge",
          href: "/about#partners",
        },
        {
          title: "Careers",
          description: "Join us and build what matters",
          href: "/about#careers",
        },
      ],
    ],
    featured: {
      title: "",
      description: "",
      href: "/about",
      image: "",
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
