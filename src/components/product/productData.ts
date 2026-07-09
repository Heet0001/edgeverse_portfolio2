import buildCardImg from "../../assets/images/card-build-with-edgeverse.png";
import roadSafetyImg from "../../assets/images/card-road-safety.png";
import imedgeHardwareImg from "../../assets/images/imedge_hardware.png";
import scenicRoadImg from "../../assets/images/scenic-road.png";
import detectionImg from "../../assets/images/forwardcollision.png";
import detection1Img from "../../assets/images/detection1.png";
import detection2Img from "../../assets/images/detection2.png";
import heroImg from "../../assets/images/product.png";
import frontCollisionVideo from "../../assets/videos/Front_collision.mp4";
import rearCollisionVideo from "../../assets/videos/Rear_collision .mp4";
import drowsinessVideo from "../../assets/videos/Drowsiness.mp4";
import driverDistractionVideo from "../../assets/videos/Driver_distraction.mp4";

export const PRODUCT_SAFETY_CARDS = [
  {
    id: "fcw",
    title: "Forward Collision Warning",
    description:
      "Detects vehicles, pedestrians, and obstacles up to 100 meters ahead with real-time visual and haptic alerts.",
    href: "#fcw",
    image: buildCardImg,
    imageAlt: "Motorcycle HUD showing forward collision warning at night",
  },
  {
    id: "bsd",
    title: "Blind Spot Detection",
    description:
      "360° awareness monitors adjacent lanes and blind zones, providing instant directional alerts.",
    href: "#bsd",
    image: imedgeHardwareImg,
    imageAlt: "Edge sensor mounted on a motorcycle handlebar",
  },
  {
    id: "lsa",
    title: "Lane & Speed Advisory",
    description:
      "AI-learned road geometry and context-aware speed intelligence — even without lane markings.",
    href: "#lsa",
    image: roadSafetyImg,
    imageAlt: "Busy urban crossing with perception overlays",
  },
] as const;

export const PRODUCT_CAPABILITIES = [
  {
    title: "Real-time perception",
    description:
      "Multi-task neural inference for detection, depth, segmentation, and tracking —\nall running simultaneously at 30 FPS on the edge.",
  },
  {
    title: "Zero cloud dependency",
    description:
      "Everything runs on-device — no latency, data costs, or connectivity issues.\nWorks everywhere, from tunnels and highways to rural roads.",
  },
  {
    title: "OEM-ready integration",
    description:
      "White-label Perceiva™ SDK for instrument clusters and ECUs.\nPre-certified for BIS compliance with plug-and-play OEM APIs.",
  },
] as const;

export const PRODUCT_SHOWCASES = [
  {
    id: "fcw",
    number: "01",
    kicker: "FORWARD COLLISION WARNING",
    title: "See what's ahead. React before it's too late.",
    description:
      "Multi-sensor fusion detects vehicles, pedestrians, and obstacles up to 100 meters ahead. The system alerts the rider with visual and haptic warnings before a collision becomes inevitable.",
    stats: [
      { value: "100m", label: "Detection range" },
      { value: "<100ms", label: "Alert latency" },
    ],
    image: buildCardImg,
    imageAlt: "Forward collision warning overlay on a night ride",
    theme: "light" as const,
  },
  {
    id: "bsd",
    number: "02",
    kicker: "BLIND SPOT DETECTION",
    title: "360° awareness for every lane change.",
    description:
      "Peripheral perception monitors adjacent lanes and blind zones. When a vehicle enters the danger zone, the system provides instant directional alerts to prevent side-swipe collisions.",
    stats: [
      { value: "170°", label: "Field of view" },
      { value: "24/7", label: "Day & night operation" },
    ],
    image: detectionImg,
    imageAlt: "Blind spot detection bounding boxes on urban traffic",
    theme: "dark" as const,
  },
  {
    id: "lsa",
    number: "03",
    kicker: "LANE DEPARTURE + SPEED ADVISORY",
    title: "Stay in lane. Stay alive.",
    description:
      "Even on Indian roads where lane markings are faded or non-existent, Perceiva™ infers road boundaries using AI-learned road geometry and analyses traffic density for real-time speed advisories.",
    stats: [
      { value: "No Maps", label: "Required for operation" },
      { value: "30 FPS", label: "Continuous analysis" },
    ],
    image: scenicRoadImg,
    imageAlt: "AI lane path overlay on a winding rural road",
    theme: "light" as const,
  },
] as const;

export const PRODUCT_DEPLOYMENTS = [
  {
    title: "OEM Integration",
    description:
      "White-label Perceiva™ SDK for direct integration into instrument clusters and ECUs. Pre-certified for BIS compliance.",
    href: "/contact",
  },
  {
    title: "Fleet Management",
    description:
      "Cloud-connected fleet intelligence with real-time driver behaviour scoring, route safety analytics, and predictive risk assessment.",
    href: "/contact",
  },
  {
    title: "Aftermarket Retrofit",
    description:
      "Standalone Imedge® device for retrofitting existing two-wheelers. Universal mount system compatible with 95% of India's fleet.",
    href: "/contact",
  },
] as const;

export const PRODUCT_HERO_IMAGE = heroImg;
export const PRODUCT_CAPABILITIES_IMAGE = buildCardImg;

export type DemoStatus = "available" | "coming-soon";

export type ProductDemo = {
  id: string;
  title: string;
  status: DemoStatus;
  image: string;
  imageAlt: string;
  video?: string;
  href?: string;
};

export type ProductLine = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status?: "available" | "upcoming";
  demos: ProductDemo[];
};

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: "aras",
    name: "Perceiva™ ARAS",
    tagline: "Making Two Wheelers safer with AI",
    description:
      "Enabling Two-Wheeler automakers to enable Level 0 & Level 1 ARAS at scale through sensor fusion - CAMERA. RADAR. IMU. GPS",
    status: "available",
    demos: [
      {
        id: "rear-collision",
        title: "Rear ARAS",
        status: "available",
        image: detectionImg,
        imageAlt:
          "Rear collision warning demo with real-time detection overlays",
        video: rearCollisionVideo,
      },
      {
        id: "front-collision",
        title: "Forward ARAS",
        status: "available",
        image: buildCardImg,
        imageAlt:
          "Forward collision warning demo with real-time detection overlays",
        video: frontCollisionVideo,
      },
    ],
  },
  {
    id: "dms",
    name: "Perceiva™ DMS",
    tagline: "Driver Monitoring with AI",
    description: "",
    status: "available",
    demos: [
      {
        id: "drowsiness-dms",
        title: "Drowsiness detection demo",
        status: "available",
        image: detection1Img,
        imageAlt: "Drowsiness detection demo with captured video",
        video: drowsinessVideo,
      },
      {
        id: "driver-distraction-dms",
        title: "Driver distraction demo",
        status: "available",
        image: detection2Img,
        imageAlt: "Driver distraction monitoring demo with captured video",
        video: driverDistractionVideo,
      },
    ],
  },
  {
    id: "iauto",
    name: "Perceiva™ iAuto",
    tagline: "Factory automation with AI",
    description: "",
    status: "upcoming",
    demos: [],
  },
];
