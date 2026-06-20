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
    tagline: "Edge-native AI  for smarter systems",
    linksLayout: "twoColumn",
    columns: [
      [
        {
          title: "Perceiva™ ARAS",
          description:
            "Making Two Wheelers safer with AI",
          href: "/product#aras",
        },
        {
          title: "Perceiva™ DMS",
          description: "Driver Monitoring with AI",
          href: "/product#dms",
        },
        {
          title: "Perceiva™ iAuto",
          description: "Factory automation with AI",
          href: "/product#iauto",
        },
        {
          title: "Imedge® Hardware",
          description:
            "Help you build the right camera hardware and ISP tuning",
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
    columns: [
      [
        {
          title: "Edge AI Approach",
          description:
            "Quantised & distilled models for low-TOPS SoCs. Sub-30ms latency on embedded hardware — no cloud dependency.",
          href: "/technology",
        },
        {
          title: "Proprietary Dataset",
          description:
            "Own perception data. Not replicable from open sources.",
          href: "/technology",
        },
      ],
      [
        {
          title: "Co-Designed Camera & ISP Pipeline",
          description:
            "Sensor, ISP & model co-optimised as a system. HDR, low-light & colour science tuned for perception — not commodity hardware.",
          href: "/technology",
        },
        {
          title: "On-Premise Active Learning",
          description:
            "Deployable at your compute — data never leaves your infrastructure. Models continuously improve on your own edge data. Sovereign AI loop.",
          href: "/technology",
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
      title: "",
      description: "",
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
