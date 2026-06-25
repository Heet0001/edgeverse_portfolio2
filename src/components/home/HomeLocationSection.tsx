import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./homeLocationSection.module.scss";

const MAP_W = 1000;
const MAP_H = 700;

type LandmarkIcon = "airport" | "train" | "building";

interface PinPos {
  x: number; // percentage 0-100
  y: number; // percentage 0-100
}

const OFFICE = {
  pin: { x: 55, y: 49 } as PinPos,
  addressLines: [
    "G01, #520, 8th Cross BEML Layout,",
    "Thubarahalli, Bengaluru,",
    "Karnataka 560066, India",
  ],
  directionsUrl:
    "https://www.google.com/maps/dir//5th+Floor,+Mpark,+EdgeVerse+India+Private+Limited,+32%2F1,+near+Wix+Co-Living,+Hoodi,+Doddanakundi+Industrial+Area+2,+Sonnenahalli,+Mahadevapura,+Bengaluru,+Karnataka+560048/@12.9841659,77.7100634,17z/data=!4m17!1m7!3m6!1s0x3bae3f72d255aa4b:0x484b2833cd02bbc5!2sEdgeVerse+India+Private+Limited!8m2!3d12.9841659!4d77.7100634!16s%2Fg%2F11l5wjlbd_!4m8!1m0!1m5!1m1!1s0x3bae3f72d255aa4b:0x484b2833cd02bbc5!2m2!1d77.7100601!2d12.9841654!3e0",
  viewOnMapUrl:
    "https://www.google.com/maps/place/EdgeVerse+India+Private+Limited/@12.9841705,77.7077724,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3f72d255aa4b:0x484b2833cd02bbc5!8m2!3d12.9841659!4d77.7100634!16s%2Fg%2F11l5wjlbd_",
};

interface Landmark {
  name: string;
  shortName: string;
  distance: string;
  duration: string;
  icon: LandmarkIcon;
  pin: PinPos;
  side: "left" | "right";
}

const LANDMARKS: ReadonlyArray<Landmark> = [
  {
    name: "Kempegowda International Airport",
    shortName: "Kempegowda\nInternational Airport",
    distance: "36.6 km",
    duration: "1 hr 10 min",
    icon: "airport",
    pin: { x: 52, y: 11 },
    side: "right",
  },
  {
    name: "Yeswanthpur Railway Station",
    shortName: "Yeswanthpur\nRailway Station",
    distance: "26.1 km",
    duration: "1 hr 18 min",
    icon: "train",
    pin: { x: 24, y: 37 },
    side: "left",
  },
  {
    name: "Manyata Tech Park",
    shortName: "Manyata\nTech Park",
    distance: "16.7 km",
    duration: "50 min",
    icon: "building",
    pin: { x: 81, y: 42 },
    side: "right",
  },
  {
    name: "Electronic City",
    shortName: "Electronic\nCity",
    distance: "29.6 km",
    duration: "1 hr 2 min",
    icon: "building",
    pin: { x: 67, y: 83 },
    side: "right",
  },
];

const toXY = (p: PinPos) => ({
  x: (p.x / 100) * MAP_W,
  y: (p.y / 100) * MAP_H,
});

// Build an elegant curved path between the office and a target pin.
const buildRoute = (from: PinPos, to: PinPos) => {
  const o = toXY(from);
  const t = toXY(to);
  const horizontal = Math.abs(t.x - o.x) > Math.abs(t.y - o.y);

  let c1x: number;
  let c1y: number;
  let c2x: number;
  let c2y: number;

  if (horizontal) {
    const mx = (o.x + t.x) / 2;
    c1x = mx;
    c1y = o.y;
    c2x = mx;
    c2y = t.y;
  } else {
    const my = (o.y + t.y) / 2;
    c1x = o.x;
    c1y = my;
    c2x = t.x;
    c2y = my;
  }

  const path = `M ${o.x} ${o.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${t.x} ${t.y}`;

  // De Casteljau midpoint of the cubic bezier (t = 0.5) for badge placement.
  const mid = {
    x: 0.125 * o.x + 0.375 * c1x + 0.375 * c2x + 0.125 * t.x,
    y: 0.125 * o.y + 0.375 * c1y + 0.375 * c2y + 0.125 * t.y,
  };

  return {
    path,
    end: t,
    badge: { x: (mid.x / MAP_W) * 100, y: (mid.y / MAP_H) * 100 },
  };
};

const ROUTES = LANDMARKS.map((l) => ({
  landmark: l,
  ...buildRoute(OFFICE.pin, l.pin),
}));

const LandmarkGlyph = ({ icon, size = 16 }: { icon: LandmarkIcon; size?: number }) => {
  switch (icon) {
    case "airport":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "train":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2c-4 0-8 .5-8 4v9.5A3.5 3.5 0 0 0 7.5 19L6 20.5V21h12v-.5L16.5 19a3.5 3.5 0 0 0 3.5-3.5V6c0-3.5-4-4-8-4Zm-4.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM18 11H6V6h12v5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "building":
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 21V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14H3Zm10 0V11h6a2 2 0 0 1 2 2v8h-8ZM6 9h2v2H6V9Zm0 4h2v2H6v-2Zm0 4h2v2H6v-2Zm10-2h2v2h-2v-2Zm0 4h2v2h-2v-2Z"
            fill="currentColor"
          />
        </svg>
      );
  }
};

const HomeLocationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, { variant: "fadeUp", y: 24, start: "top 88%" });

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-label="Visit our office"
    >
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.kicker}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                fill="currentColor"
              />
            </svg>
            <span>OUR LOCATION</span>
          </div>

          <h2 className={styles.title}>
            Visit us in <span className={styles.accent}>Bengaluru, India.</span>
          </h2>

          <p className={styles.text}>
            EdgeVerse AI is headquartered in Bengaluru. We&apos;d love to welcome
            you to our office.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.btnPrimary}
              href={OFFICE.directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Get Directions</span>
              <span className={styles.btnArrow} aria-hidden="true">→</span>
            </a>
            <a
              className={styles.btnGhost}
              href={OFFICE.viewOnMapUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>View on Map</span>
              <span className={styles.btnExternal} aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className={styles.landmarks}>
            {LANDMARKS.map((item) => (
              <li key={item.name} className={styles.landmarkItem}>
                <span className={styles.landmarkIcon} aria-hidden="true">
                  <LandmarkGlyph icon={item.icon} />
                </span>
                <span className={styles.landmarkBody}>
                  <span className={styles.landmarkName}>{item.name}</span>
                  <span className={styles.landmarkMeta}>
                    {item.distance} · {item.duration}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <div
            className={styles.mapCard}
            role="img"
            aria-label="Map of Bengaluru showing EdgeVerse office and nearby landmarks"
          >
            <svg
              className={styles.mapSvg}
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="hmlBase" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f4f7fb" />
                  <stop offset="55%" stopColor="#eef2f7" />
                  <stop offset="100%" stopColor="#e7edf4" />
                </linearGradient>
                <linearGradient id="hmlRoute" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#22d3c5" />
                </linearGradient>
                <radialGradient id="hmlGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(13,148,136,0.18)" />
                  <stop offset="100%" stopColor="rgba(13,148,136,0)" />
                </radialGradient>
                <radialGradient id="hmlVignette" cx="50%" cy="46%" r="72%">
                  <stop offset="62%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="100%" stopColor="rgba(231,237,244,0.9)" />
                </radialGradient>
                <filter id="hmlRouteShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0d9488" floodOpacity="0.25" />
                </filter>
              </defs>

              <rect width={MAP_W} height={MAP_H} fill="url(#hmlBase)" />

              {/* faint dotted texture */}
              <g fill="#d7dfe9" opacity="0.5">
                {Array.from({ length: 13 }).map((_, r) =>
                  Array.from({ length: 18 }).map((__, c) => (
                    <circle key={`${r}-${c}`} cx={20 + c * 56} cy={24 + r * 54} r="1.4" />
                  )),
                )}
              </g>

              {/* water bodies */}
              <g fill="#c7e3ef" opacity="0.85">
                <path d="M120 300 q40 -30 86 -10 q34 16 10 46 q-30 32 -78 16 q-40 -16 -18 -52 Z" />
                <ellipse cx="250" cy="205" rx="40" ry="16" />
                <ellipse cx="790" cy="155" rx="46" ry="18" />
                <ellipse cx="868" cy="320" rx="30" ry="16" />
                <ellipse cx="370" cy="560" rx="42" ry="17" />
                <ellipse cx="660" cy="612" rx="48" ry="18" />
              </g>

              {/* parks */}
              <g fill="#d4e9d6" opacity="0.75">
                <ellipse cx="520" cy="250" rx="40" ry="18" />
                <ellipse cx="690" cy="470" rx="50" ry="22" />
                <ellipse cx="300" cy="430" rx="30" ry="14" />
              </g>

              {/* ring road + radial roads */}
              <g fill="none" stroke="#d3dbe6" strokeWidth="6" opacity="0.9">
                <ellipse cx="520" cy="370" rx="300" ry="220" />
              </g>
              <g fill="none" stroke="#dde4ee" strokeWidth="3" opacity="0.9">
                <path d="M520 0 C 540 180, 500 320, 540 700" />
                <path d="M0 360 C 220 340, 420 388, 620 364 S 900 384, 1000 350" />
                <path d="M120 90 C 320 240, 560 300, 940 250" />
                <path d="M90 600 C 320 520, 560 560, 960 600" />
                <path d="M220 0 C 300 200, 360 460, 300 700" />
                <path d="M780 30 C 720 240, 760 470, 840 700" />
              </g>

              {/* area labels */}
              <g
                fill="#9aa7b6"
                fontFamily="Inter, system-ui, sans-serif"
                fontSize="13"
                fontWeight="600"
                letterSpacing="0.04em"
              >
                <text x="92" y="196">NELAMANGALA</text>
                <text x="430" y="186">YELAHANKA</text>
                <text x="772" y="78">DEVANAHALLI</text>
                <text x="440" y="262">HEBBAL</text>
                <text x="812" y="232">HOSKOTE</text>
                <text x="452" y="392" fontSize="22" fontWeight="700" fill="#7c8a9c">
                  Bengaluru
                </text>
                <text x="760" y="372">WHITEFIELD</text>
                <text x="330" y="498">JAYANAGAR</text>
                <text x="500" y="452">KORAMANGALA</text>
                <text x="436" y="556">HSR LAYOUT</text>
                <text x="190" y="556">BANASHANKARI</text>
                <text x="540" y="660">BOMMASANDRA</text>
                <text x="820" y="592">ANEKAL</text>
              </g>

              {/* soft glow under office */}
              <circle
                cx={(OFFICE.pin.x / 100) * MAP_W}
                cy={(OFFICE.pin.y / 100) * MAP_H}
                r="150"
                fill="url(#hmlGlow)"
              />

              {/* route casings (white halo) */}
              <g fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" opacity="0.95">
                {ROUTES.map((r) => (
                  <path key={`casing-${r.landmark.name}`} d={r.path} />
                ))}
              </g>

              {/* route lines */}
              <g
                fill="none"
                stroke="url(#hmlRoute)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#hmlRouteShadow)"
              >
                {ROUTES.map((r) => (
                  <path key={`route-${r.landmark.name}`} d={r.path} />
                ))}
              </g>

              {/* animated flow dashes */}
              <g
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeDasharray="2 16"
                opacity="0.85"
                className={styles.flow}
              >
                {ROUTES.map((r) => (
                  <path key={`flow-${r.landmark.name}`} d={r.path} />
                ))}
              </g>

              {/* route end dots */}
              <g>
                {ROUTES.map((r) => (
                  <g key={`dot-${r.landmark.name}`}>
                    <circle cx={r.end.x} cy={r.end.y} r="9" fill="#ffffff" />
                    <circle cx={r.end.x} cy={r.end.y} r="5.5" fill="#0d9488" />
                  </g>
                ))}
              </g>

              <rect width={MAP_W} height={MAP_H} fill="url(#hmlVignette)" />
            </svg>

            {/* distance badges at route midpoints */}
            {ROUTES.map((r) => (
              <div
                key={`badge-${r.landmark.name}`}
                className={styles.routeBadge}
                style={{ left: `${r.badge.x}%`, top: `${r.badge.y}%` }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11m-14 0h14m-14 0v6h2m12-6v6h-2m-8 0h4m-6 0a1.5 1.5 0 1 0 0 .01M17 17a1.5 1.5 0 1 0 0 .01"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{r.landmark.distance}</span>
              </div>
            ))}

            {/* labelled landmark pills */}
            {LANDMARKS.map((item) => (
              <div
                key={`pill-${item.name}`}
                className={`${styles.pill} ${
                  item.side === "left" ? styles.pillLeft : styles.pillRight
                }`}
                style={{ left: `${item.pin.x}%`, top: `${item.pin.y}%` }}
              >
                <span className={styles.pillIcon} aria-hidden="true">
                  <LandmarkGlyph icon={item.icon} size={15} />
                </span>
                <span className={styles.pillText}>
                  {item.shortName.split("\n").map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </span>
              </div>
            ))}

            {/* central office marker */}
            <div
              className={styles.officePin}
              style={{ left: `${OFFICE.pin.x}%`, top: `${OFFICE.pin.y}%` }}
            >
              <div className={styles.officePinLabel}>
                EdgeVerse AI<br />Bengaluru Office
              </div>
              <span className={styles.officePinMarker} aria-hidden="true">
                <span className={styles.officePinPulse} />
                <span className={styles.officePinPulse2} />
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                    fill="#0d9488"
                  />
                </svg>
              </span>
            </div>

            {/* registered office floating card */}
            <div className={styles.officeCard}>
              <span className={styles.officeIcon} aria-hidden="true">
                <LandmarkGlyph icon="building" size={18} />
              </span>
              <div className={styles.officeBody}>
                <div className={styles.officeLabel}>Registered Office</div>
                <address className={styles.officeAddress}>
                  {OFFICE.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </div>
            </div>

            {/* decorative zoom controls */}
            <div className={styles.zoomCtrls} aria-hidden="true">
              <button type="button" tabIndex={-1}>+</button>
              <button type="button" tabIndex={-1}>−</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLocationSection;
