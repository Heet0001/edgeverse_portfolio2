import imedgeHardware from '../../assets/images/imedge_hardware.png'
import buildCardImg from '../../assets/images/card-build-with-edgeverse.png'
import roadSafetyImg from '../../assets/images/card-road-safety.png'
import detection2Img from '../../assets/images/detection2.png'
import scenicRoadImg from '../../assets/images/scenic-road.png'
import detection1Img from '../../assets/images/detection1.png'
import heroImg from '../../assets/images/hero.png'

export const TECH_HERO_IMAGE = imedgeHardware
export const TECH_STACK_SIDE_IMAGE = imedgeHardware
export const TECH_FLEET_IMAGE = heroImg

export const TECH_STACK_FEATURES = [
  {
    title: 'Optimized for Indian roads',
    description:
      'Our AI models are trained exclusively on Indian road data — handling chaotic traffic, absence of lane markings,\nmixed vehicle types, and unpredictable pedestrian behaviour.',
  },
  {
    title: 'Solves the edge deployment problem',
    description:
      'EdgeVerse runs all perception on-device at under 2 watts, with zero cloud dependency.\nNo latency, no connectivity issues, no data costs — just real-time safety.',
  },
  {
    title: 'Efficient and scalable learning',
    description:
      'Our self-supervised learning method enables efficient, large-scale model training,\nessential for seamlessly adapting AI capabilities to new vehicles and geographies.',
  },
] as const

export const TECH_APPROACH_ADVANTAGES = [
  {
    title: 'Eliminates cloud dependency',
    description:
      'All perception runs on-device with zero network dependency.\nWorks in tunnels, rural areas, and everywhere connectivity fails.',
  },
  {
    title: 'Lean hardware suite',
    description:
      'A single camera + edge processor replaces expensive multi-sensor setups.\nThis data-first approach gives OEMs freedom to choose hardware based on their needs.',
  },
  {
    title: 'Mapless perception',
    description:
      "EdgeVerse doesn't rely on HD maps. AI-learned road geometry enables seamless expansion to new geographies\nthrough data-driven adaptations.",
  },
  {
    title: 'Vehicle agnostic',
    description:
      'Our platform adapts to any two-wheeler — from scooters to motorcycles to three-wheelers.\nAdvances made on either vehicle type directly benefit the other.',
  },
] as const

export const TECH_FLEET_ADVANTAGES = [
  {
    title: 'Powerful data-to-value engine',
    description:
      'Efficiently gathers real-world driving data from deployed devices, processes it in cloud training infrastructure,\nand converts it into refined perception capabilities.',
  },
  {
    title: 'Builds verifiably robust performance',
    description:
      'Designed to support progressive levels of rider assistance as driving data exposure\nbuilds verifiably robust perception capabilities.',
  },
  {
    title: 'Responsible model development',
    description:
      'Implements MLOps workflows for responsible model development, utilizing tools, processes, and pipelines\nto build, train, and deploy foundation models.',
  },
  {
    title: 'Comprehensive evaluation',
    description:
      'Rigorously tests AI perception models across a vast array of recorded driving scenarios\nfor rapid and comprehensive safety evaluation.',
  },
] as const

export const TECH_CAPABILITY_CARDS = [
  {
    title: 'Perceiva™ Software',
    description:
      'Edge-optimised perception stack with real-time sensor fusion, neural inference engine, safety runtime, and OTA update framework.\nRuns entirely on-device at 30 FPS.',
    linkLabel: 'Perceiva™ Stack',
    href: '/technology#perceiva',
    image: buildCardImg,
    imageAlt: 'Motorcycle HUD with Perceiva perception overlay at night',
  },
  {
    title: 'India Perception Model',
    description:
      'Foundation AI models trained exclusively on Indian road data — handling chaotic traffic, absence of lane markings,\nmixed vehicle types, and unpredictable pedestrian behaviour.',
    linkLabel: 'Safety Framework',
    href: '/safety',
    image: roadSafetyImg,
    imageAlt: 'Busy Indian street with pedestrian detection overlays',
  },
  {
    title: 'Neural Simulator',
    description:
      'Photorealistic scenario generation enables us to automatically create thousands of simulated Indian road scenarios\nto train, test, and validate our AI models at scale.',
    linkLabel: 'Simulation',
    href: '/technology#simulation',
    image: detection2Img,
    imageAlt: 'Simulated Indian road scenario with perception bounding boxes',
  },
  {
    title: 'Safety Architecture',
    description:
      'Multi-layer safety framework with redundant perception validation, deterministic watchdog timers, and fail-safe alert modes —\ndesigned for automotive-grade reliability.',
    linkLabel: 'Safety 2.0',
    href: '/safety',
    image: scenicRoadImg,
    imageAlt: 'AI lane geometry overlay on a rural road',
  },
] as const

export const TECH_STACK_ROWS = [
  {
    title: 'Imedge® Hardware',
    description:
      'A compact, weather-sealed device housing the Ambarella CV25 vision processor, 5MP camera module, and custom optics.\nPurpose-built for vibration-heavy two-wheeler environments where reliability is non-negotiable.',
    href: '/technology#imedge',
    image: imedgeHardware,
    imageAlt: 'Imedge hardware PCB with Ambarella CV25 vision processor',
    theme: 'light' as const,
  },
  {
    title: 'Perceiva™ Software',
    description:
      'A multi-task neural inference engine running object detection, depth estimation, road segmentation, and multi-object tracking simultaneously —\nall at 30 FPS on the edge with zero cloud dependency.',
    href: '/technology#perceiva',
    image: detection1Img,
    imageAlt: 'Perceiva neural network with object detection outputs',
    theme: 'dark' as const,
  },
] as const

export const TECH_EDGE_PIPELINE = [
  'Camera Input',
  'On-Device AI Model',
  'Safety Output',
] as const

export const TECH_CLOUD_PIPELINE = [
  'Camera Input',
  'Cloud Upload',
  'Remote Inference',
  'Safety Output',
] as const
