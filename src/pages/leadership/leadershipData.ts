import type { LeaderPublic } from "../../api/leaders";
import arindamImg from "../../assets/images/Arindam-Profile Pic BW.jpg";
import subrataImg from "../../assets/images/subratha.png";
import navaneethImg from "../../assets/images/navaneet.png";
import venkateshImg from "../../assets/images/Prof Venkatesh Babu.jpg";
import ashokImg from "../../assets/images/ashokbilavada.png";
import anandImg from "../../assets/images/anand.png";

export const FALLBACK_LEADERS: LeaderPublic[] = [
  {
    _id: "1",
    name: "Arindam Ghosh",
    role: "CEO & Co-Founder",
    image: arindamImg,
    linkedIn: "",
    bio: "23+ years in semiconductor sales and customer acquisition. Led accounts at Synopsys across India and Asia.",
    order: 0,
  },
  {
    _id: "2",
    name: "Subrata Debnath",
    role: "CTO & Co-Founder",
    image: subrataImg,
    linkedIn: "",
    bio: "23+ years in system design, BSP and firmware for telecom and defence. Previously at HP and Emulex.",
    order: 1,
  },
  {
    _id: "3",
    name: "Navaneeth A",
    role: "VP & Co-Founder",
    image: navaneethImg,
    linkedIn: "",
    bio: "12+ years developing AI stacks for facial recognition and digital twin technologies at Fujitsu.",
    order: 2,
  },
];

export const FALLBACK_ADVISORS: LeaderPublic[] = [
  {
    _id: "a1",
    name: "Prof. Venkatesh Babu",
    role: "",
    image: venkateshImg,
    linkedIn: "",
    bio: "Chair, CDS IISc Bangalore · Top 2% Scientists (Stanford/Elsevier) · Top AI Researcher India (CSRankings)",
    order: 0,
  },
  {
    _id: "a2",
    name: "Ashok Balivada",
    role: "",
    image: ashokImg,
    linkedIn: "",
    bio: "Ex-COO MIPS · Ex-GM Analog Devices · BE IIT Bombay, PhD UT Austin",
    order: 1,
  },
  {
    _id: "a3",
    name: "Anand Dharmaraj",
    role: "",
    image: anandImg,
    linkedIn: "",
    bio: "Founder, India's 1st motorcycle track school (T.W.O) · indiMotard",
    order: 2,
  },
];
