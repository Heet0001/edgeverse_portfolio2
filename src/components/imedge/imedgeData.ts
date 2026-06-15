import imedgeHardwareImg from "../../assets/images/imedge_hardware.png";

export const IMEDGE_HERO_IMAGE = imedgeHardwareImg;

export const IMEDGE_INTRO = {
  tagline: "Help you build the right camera hardware and ISP tuning",
  description:
    "Partner with EdgeVerse to design, validate, and tune edge vision hardware for your platform — from sensor selection and optics through ISP configuration optimized for real-world Indian conditions.",
} as const;

export const IMEDGE_CAPABILITIES = [
  {
    title: "Camera hardware design",
    description:
      "Sensor selection, lens optics, and mechanical integration purpose-built for vibration-heavy two-wheeler and automotive edge environments.",
  },
  {
    title: "ISP tuning & calibration",
    description:
      "HDR, low-light, and motion-blur optimization tuned for Indian road lighting, weather, and traffic — so perception models get clean input.",
  },
  {
    title: "Reference edge platform",
    description:
      "Ambarella CV25 SoC with CVflow® architecture — industry-leading AI performance-per-watt for on-device inference at under 2 watts.",
  },
  {
    title: "OEM co-development",
    description:
      "Work alongside EdgeVerse engineers from prototype through production — custom configurations, validation, and BIS-ready integration support.",
  },
] as const;

export const IMEDGE_SPECS = [
  {
    left: { label: "PROCESSOR", value: "Ambarella CV25 SoC with CVflow® architecture" },
    right: { label: "CPU", value: "Arm® 64-bit quad core" },
  },
  {
    left: { label: "CAMERA", value: "Onsemi AR0147AT HDR · 150° FoV · CSI-2 Interface" },
    right: { label: "SERIALIZER", value: "FPD-Link III 3Gbps SerDes" },
  },
  {
    left: { label: "AI PROCESSING", value: "Dedicated CNN accelerator, up to 30 FPS inference" },
    right: { label: "ENCODING", value: "4KP30+ · H.264/H.265" },
  },
  {
    left: { label: "MEMORY", value: "DDR4/LPDDR4 up to 2GB" },
    right: { label: "STORAGE", value: "Micro-SD (SDHC/SDXC)" },
  },
  {
    left: { label: "CONNECTIVITY", value: "WiFi 802.11a/b/g/n/ac · BT5.2 · Micro-USB 2.0" },
    right: { label: "INTERFACES", value: "HDMI · GPS/GNSS · 6-Axis IMU · CAN Standard/Extended" },
  },
] as const;
