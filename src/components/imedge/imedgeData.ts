import imedgeHardwareImg from "../../assets/images/imedge_hardware.png";

export const IMEDGE_HERO_IMAGE = imedgeHardwareImg;

export const IMEDGE_INTRO = {
  tagline: "Sensor, Calibration & Edge optimization co-design ",
  description:
    "Partner with EdgeVerse to design, validate, and tune edge vision hardware for your platform — from sensor selection and optics through ISP configuration optimized for real-world Indian conditions.",
} as const;

export const IMEDGE_CAPABILITIES = [
  {
    title: "Camera hardware design",
    description:
      "Sensor selection, lens optics, and mechanical integration purpose-built for mobility, industrial automation and all applications with demanding environmental and throughput requirements. ",
  },
  {
    title: "ISP tuning & calibration",
    description:
      "HDR, low-light, color correction and motion-blur optimization so perception models get clean and accurate input for safety critical applications",
  },
  // {
  //   title: "Reference edge platform",
  //   description:
  //     "Ambarella CV25 SoC with CVflow® architecture — industry-leading AI performance-per-watt for on-device inference at under 2 watts.",
  // },
  {
    title: "OEM co-development",
    description:
      "Work alongside EdgeVerse engineers from prototype through production — custom configurations, validation, and BIS-ready integration support.",
  },
] as const;

export const IMEDGE_SPECS = [
  {
    left: { label: "PROCESSOR", value: "Qualcomm SM6115/2290, Ambarella CV25 SoC" },
    // right: { label: "CPU", value: "Arm® 64-bit quad core" },
    right: { label: "CAMERA  INTERFACE", value: "FPD-Link III 3Gbps SerDes UVC AHD" },
  },
  {
    left: { label: "CAMERA", value: "Onsemi AR0147AT,OnSemi AR0246" },
    right: { label: "SERIALIZER", value: "FPD-Link III 3Gbps SerDes" },
  },
  {
    left: { label: "AI PROCESSING", value: "Dedicated CNN accelerator, up to 30 FPS inference" },
    right: { label: "ENCODING", value: "2KP30+ · H.264/H.265" },
  },
  {
    left: { label: "MEMORY", value: "DDR4/LPDDR4 up to 2GB" },
    right: { label: "STORAGE", value: "Micro-SD (SDHC/SDXC)" },
  },
  {
    left: { label: "CONNECTIVITY", value: "WiFi 802.11a/b/g/n/ac · BT5.2 · Micro-USB 2.0" },
    right: { label: "INTERFACES", value: "HDMI ·6-Axis IMU · CAN Standard/Extended" },
  },
] as const;
