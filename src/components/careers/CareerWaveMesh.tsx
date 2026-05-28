import { useMemo } from 'react'

const COLS = 58
const ROWS = 34
const VIEW_W = 700
const VIEW_H = 420
const DOT_COLOR = '14, 165, 164'

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

type CareerWaveMeshProps = {
  className?: string
  svgClassName?: string
}

const CareerWaveMesh = ({ className, svgClassName }: CareerWaveMeshProps) => {
  const dots = useMemo(() => {
    const items: Array<{ cx: number; cy: number; r: number; opacity: number }> = []

    for (let row = 0; row < ROWS; row += 1) {
      const v = row / (ROWS - 1)

      for (let col = 0; col < COLS; col += 1) {
        const u = col / (COLS - 1)
        const cx = 8 + u * (VIEW_W - 16)
        const waveSpine = Math.sin(u * Math.PI * 1.9 + 0.35) * 46
        const pinch = 0.58 + 0.42 * Math.abs(Math.sin(u * Math.PI))
        const vCentered = (v - 0.5) / pinch + 0.5

        if (vCentered < 0.02 || vCentered > 0.98) continue

        const rowOffset = (vCentered - 0.5) * (VIEW_H * 0.62)
        const surfaceTilt = Math.sin(vCentered * Math.PI) * waveSpine * 0.12
        const cy = VIEW_H * 0.52 + waveSpine + rowOffset + surfaceTilt

        const leftFade = smoothstep(0.02, 0.34, u)
        const edgeFade = Math.sin(vCentered * Math.PI)
        const light = 0.5 + 0.5 * Math.cos(u * Math.PI * 1.9 - vCentered * 1.4)
        const opacity = (0.14 + light * 0.52) * leftFade * edgeFade

        if (opacity < 0.04) continue

        const r = 1.05 + light * 1.1
        items.push({ cx, cy, r, opacity })
      }
    }

    return items
  }, [])

  return (
    <div className={className} aria-hidden="true">
      <svg
        className={svgClassName}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMaxYMid meet"
        aria-hidden="true"
      >
        {dots.map((dot, index) => (
          <circle
            key={index}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={`rgba(${DOT_COLOR}, ${dot.opacity})`}
          />
        ))}
      </svg>
    </div>
  )
}

export default CareerWaveMesh
