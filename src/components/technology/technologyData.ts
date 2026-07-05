import imedgeHardware from "../../assets/images/imedge_hardware.png";
import buildCardImg from "../../assets/images/card-build-with-edgeverse.png";
import roadSafetyImg from "../../assets/images/card-road-safety.png";
import detection2Img from "../../assets/images/detection2.png";
import scenicRoadImg from "../../assets/images/scenic-road.png";
import detection1Img from "../../assets/images/detection1.png";
import techHeroImg from "../../assets/images/Imedgehardware1-cropped.svg";
import heroImg from "../../assets/images/hero.png";
import fleetArchImg from "../../assets/images/fleetarch.png";
import newsFeature1Img from "../../assets/images/news-feature-1.png";
import newsFeature2Img from "../../assets/images/news-feature-2.png";

export const TECH_HERO_IMAGE = techHeroImg;
export const TECH_STACK_SIDE_IMAGE = imedgeHardware;
export const TECH_FLEET_IMAGE = fleetArchImg;

export const TECH_PARTNER_INTRO = {
  tagline: "We are your Co-Development Partner",
  lead: "Partner with EdgeVerse to co-develop perception intelligence — from sensor integration through deployment and continuous learning.",
};

export const TECH_STACK_FEATURES = [
  {
    title: "Optimized for Indian roads",
    description:
      "Our AI models are trained exclusively on Indian road data — handling chaotic traffic, absence of lane markings,\nmixed vehicle types, and unpredictable pedestrian behaviour.",
  },
  {
    title: "Solves the edge deployment problem",
    description:
      "EdgeVerse runs all perception on-device at under 2 watts, with zero cloud dependency.\nNo latency, no connectivity issues, no data costs — just real-time safety.",
  },
  {
    title: "Efficient and scalable learning",
    description:
      "Our self-supervised learning method enables efficient, large-scale model training,\nessential for seamlessly adapting AI capabilities to new vehicles and geographies.",
  },
] as const;

export const TECH_APPROACH_ADVANTAGES = [
  {
    title: "Eliminates cloud dependency",
    description:
      "All perception runs on-device with zero network dependency.\nWorks in tunnels, rural areas, and everywhere connectivity fails.",
  },
  {
    title: "Lean hardware suite",
    description:
      "A single camera + edge processor replaces expensive multi-sensor setups.\nThis data-first approach gives OEMs freedom to choose hardware based on their needs.",
  },
  {
    title: "Mapless perception",
    description:
      "EdgeVerse doesn't rely on HD maps. AI-learned road geometry enables seamless expansion to new geographies\nthrough data-driven adaptations.",
  },
  {
    title: "Vehicle agnostic",
    description:
      "Our platform adapts to any two-wheeler — from scooters to motorcycles to three-wheelers.\nAdvances made on either vehicle type directly benefit the other.",
  },
] as const;

export const TECH_PROPRIETARY_DATASET = [
  {
    title: "India's Two Wheeler Perception Data",
    description:
      "Curated for unstructured Indian road conditions — edge cases, lighting, and traffic patterns not represented in open-source datasets.",
  },
  {
    title: "Not replicable from open sources",
    description:
      "Own perception data captured from real-world deployments, giving Perceiva™️ ARAS models a durable advantage on Indian roads.",
  },
  {
    title: "Continuously evolving",
    description:
      "Every deployment feeds the active learning loop — refining models with proprietary edge-case data while keeping customer IP protected.",
  },
  {
    title: "Sovereign data ownership",
    description:
      "Customer deployment data and tuned model intelligence remain within your infrastructure, aligned with DPDPA 2023 compliance requirements.",
  },
] as const;

export const TECH_FLEET_ADVANTAGES = [
  {
    title: "Powerful data-to-value engine",
    description:
      "Efficiently gathers real-world driving data from deployed devices, processes it in cloud training infrastructure,\nand converts it into refined perception capabilities.",
  },
  {
    title: "Builds verifiably robust performance",
    description:
      "Designed to support progressive levels of rider assistance as driving data exposure\nbuilds verifiably robust perception capabilities.",
  },
  {
    title: "Responsible model development",
    description:
      "Implements MLOps workflows for responsible model development, utilizing tools, processes, and pipelines\nto build, train, and deploy foundation models.",
  },
  {
    title: "Comprehensive evaluation",
    description:
      "Rigorously tests AI perception models across a vast array of recorded driving scenarios\nfor rapid and comprehensive safety evaluation.",
  },
] as const;

export const TECH_CAPABILITY_CARDS = [
  {
    title: "Perceiva™ Software",
    description:
      "Edge-optimised perception stack with real-time sensor fusion, neural inference engine, safety runtime, and OTA update framework.\nRuns entirely on-device at 30 FPS.",
    linkLabel: "Perceiva™ Stack",
    href: "/technology#perceiva",
    image: buildCardImg,
    imageAlt: "Motorcycle HUD with Perceiva perception overlay at night",
  },
  {
    title: "India Perception Model",
    description:
      "Foundation AI models trained exclusively on Indian road data — handling chaotic traffic, absence of lane markings,\nmixed vehicle types, and unpredictable pedestrian behaviour.",
    linkLabel: "Safety Framework",
    href: "/safety",
    image: roadSafetyImg,
    imageAlt: "Busy Indian street with pedestrian detection overlays",
  },
  {
    title: "Neural Simulator",
    description:
      "Photorealistic scenario generation enables us to automatically create thousands of simulated Indian road scenarios\nto train, test, and validate our AI models at scale.",
    linkLabel: "Simulation",
    href: "/technology#simulation",
    image: detection2Img,
    imageAlt: "Simulated Indian road scenario with perception bounding boxes",
  },
  {
    title: "Safety Architecture",
    description:
      "Multi-layer safety framework with redundant perception validation, deterministic watchdog timers, and fail-safe alert modes —\ndesigned for automotive-grade reliability.",
    linkLabel: "Safety 2.0",
    href: "/safety",
    image: scenicRoadImg,
    imageAlt: "AI lane geometry overlay on a rural road",
  },
] as const;

export const TECH_STACK_ROWS = [
  {
    title: "Imedge® Hardware",
    description:
      "A compact, weather-sealed device housing the Ambarella CV25 vision processor, 5MP camera module, and custom optics.\nPurpose-built for vibration-heavy two-wheeler environments where reliability is non-negotiable.",
    href: "/product#imedge",
    image: imedgeHardware,
    imageAlt: "Imedge hardware PCB with Ambarella CV25 vision processor",
    theme: "light" as const,
  },
  {
    title: "Perceiva™ Software",
    description:
      "A multi-task neural inference engine running object detection, depth estimation, road segmentation, and multi-object tracking simultaneously —\nall at 30 FPS on the edge with zero cloud dependency.",
    href: "/technology#perceiva",
    image: detection1Img,
    imageAlt: "Perceiva neural network with object detection outputs",
    theme: "dark" as const,
  },
] as const;

export const TECH_EDGE_PIPELINE = [
  "Camera Input",
  "On-Device AI Model",
  "Safety Output",
] as const;

export const TECH_CLOUD_PIPELINE = [
  "Camera Input",
  "Cloud Upload",
  "Remote Inference",
  "Safety Output",
] as const;

export const TECH_AI_INVESTMENT_IMAGES = {
  left: buildCardImg,
  right: detection2Img,
} as const;

export const TECH_RESEARCH_CARDS = [
  {
    tag: "Simulation",
    title: "Neural scenario generation",
    description:
      "Photorealistic synthetic data enables large-scale training and validation of perception models across rare and edge-case Indian road conditions.",
    linkLabel: "Explore simulation",
    href: "/technology#simulation",
    image: newsFeature1Img,
    imageAlt: "Simulated road scenario with AI perception overlays",
  },
  {
    tag: "Evaluation",
    title: "Rigorous model validation",
    description:
      "Comprehensive evaluation pipelines test perception models across thousands of recorded driving scenarios for safety-critical deployment readiness.",
    linkLabel: "Learn about validation",
    href: "/technology#perceiva",
    image: newsFeature2Img,
    imageAlt: "Urban traffic scene with AI detection overlays",
  },
] as const;

export type TechStackLayer = {
  id: string;
  title: string;
  description: string;
  note?: string;
};

export const TECH_STACK_LAYERS: TechStackLayer[] = [
  {
    id: "sensing",
    title: "Sensing & Input",
    description:
      "The sensing layer is hardware agnostic and designed to support diverse sensor combinations based on application requirements. The platform integrates seamlessly with computer vision cameras, radar point clouds, IMU sensors, GPS modules, and hybrid sensor configurations. This flexibility allows customers to build multiple sensor hardware prototype quickly, customize perception performance, cost, and deployment complexity for their specific operational needs.",
    note: "We also provide solutions with an integrated camera & ISP tuning.",
  },
  {
    id: "perception",
    title: "Perceiva™ Perception Stack",
    description:
      "The Perceiva™ Perception Stack delivers high-performance edge intelligence optimized for low-power silicon. Built around standalone sensors or sensor fusion and an optimized inference engine, the stack processes camera, radar, IMU, and GPS inputs in real time to achieve accurate environmental understanding. With compact edge-optimized models and real-time inference capabilities, the platform enables scalable deployment across cost-sensitive and compute-constrained hardware environments.",
  },
  {
    id: "intelligence",
    title: "Perceiva™ Intelligence & Functionality",
    description:
      "The intelligence layer transforms raw sensor data into proactive real-time functionality tailored to deployment use cases. Features such as collision alerts, blind spot detection, industrial safe zones, incident capture, occupancy analytics, object tracking, and behavior prediction work together to deliver actionable intelligence directly on the device. This enables faster decisions, lower latency, improved safety, and continuous operational awareness even in disconnected environments.",
  },
  {
    id: "deployment",
    title: "Universal Deployment",
    description:
      "Perceiva™ suite of products are designed for universal deployment across edge devices and real-world environments. From two-wheelers, commercial fleets to smart industrial and autonomous mobile platforms, the platform enables a single intelligence stack to adapt seamlessly across industries and mobility formats. Edge-optimized perception models combined with flexible sensor compatibility allow rapid deployment without dependence on cloud infrastructure.",
  },
  {
    id: "learning",
    title: "Active Learning Feedback Loop",
    description:
      "The platform continuously improves through an active learning feedback loop that enables real-world deployment data to refine perception accuracy and operational intelligence over time. Our system autonomously mines edge cases from diverse dataset, allowing models to continuously evolve and improve safety through seamless OTA updates. Customer-specific edge data remains protected while enabling iterative model enhancement, helping systems adapt to evolving environments, edge cases, and deployment scenarios without compromising privacy or compliance.",
  },
  {
    id: "compliance",
    title: "Customer IP Vault & Compliance",
    description:
      "Perceiva™ suite of products is built with enterprise-grade data ownership and compliance principles at its core. Customer deployment data, edge intelligence models, and operational insights remain securely retained within a protected vault architecture aligned with DPDPA 2023 compliance requirements. This ensures organizations maintain full control over proprietary operational intelligence and sensitive edge data. A cloud-agnostic architecture that respects OEM autonomy; you deploy on your cloud of choice and retain 100% ownership of your proprietary datasets and custom-tuned model intelligence.",
  },
];

export const TECH_PLATFORM_ADVANTAGES = [
  {
    title: "Multi-Modal Fusion Engine",
    description:
      "Combines high-resolution Camera vision with all-weather Radar reliability integrated with IMU into a proprietary standalone sensor or sensor fusion layer, specifically tuned to handle the unique physics of 2-wheelers and the high-precision needs of industrial robotics.",
  },
  {
    title: "Open Active Learning Platform",
    description:
      "Utilizing the Perceiva™ Data Flow, our system autonomously mines edge cases from diverse dataset, allowing models to continuously evolve and improve safety through seamless OTA updates.",
  },
  {
    title: "Data Sovereignty & IP Ownership",
    description:
      "A cloud-agnostic architecture that respects OEM autonomy; you deploy on your cloud of choice and retain 100% ownership of your proprietary datasets and custom-tuned model intelligence.",
  },
  {
    title: "Ultra-Efficient Edge Inference",
    description:
      "Our edge optimized foundation model is engineered for high performance on standard silicon SoC, delivering 25+ FPS on Snapdragon-class hardware for millisecond-precise safety triggers without heavy power demands.",
  },
  {
    title: "Hardware-Agnostic Agility",
    description:
      "Our decoupled stack allows OEMs to evaluate multiple CPUs and sensor platforms simultaneously, avoiding proprietary lock-in. This separation of hardware and software accelerates time-to-market, reduces development costs, and provides a resilient handle on the supply chain by enabling flexible component sourcing.",
  },
] as const;

export const TECH_ARCHITECTURE_IMAGES = {
  diagram: buildCardImg,
  side: imedgeHardware,
  fleet: heroImg,
  perception: detection1Img,
  deployment: scenicRoadImg,
} as const;
