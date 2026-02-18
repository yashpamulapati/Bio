import React, { useEffect, useRef } from 'react';

const SVG_WIDTH = 1400;
const SVG_HEIGHT = 300;
const STEP = 5;

interface Ribbon {
  baseY: number;
  thickness: number;
  wavelength: number;
  amplitude: number;
  speed: number;
  phase: number;
  color: string;
  opacity: number;
}

interface WavyLinesProps {
  ribbons?: Ribbon[];
  className?: string;
  style?: React.CSSProperties;
}

const defaultRibbons: Ribbon[] = [
  { baseY: SVG_HEIGHT * 0.52, thickness: 35, wavelength: 500, amplitude: 50, speed: 0.25, phase: 0, color: 'rgba(180, 180, 185, OPACITY)', opacity: 0.18 },
  { baseY: SVG_HEIGHT * 0.48, thickness: 50, wavelength: 420, amplitude: 55, speed: 0.32, phase: 1.2, color: 'rgba(190, 190, 195, OPACITY)', opacity: 0.22 },
  { baseY: SVG_HEIGHT * 0.50, thickness: 45, wavelength: 380, amplitude: 60, speed: 0.28, phase: 2.5, color: 'rgba(170, 170, 178, OPACITY)', opacity: 0.16 },
  { baseY: SVG_HEIGHT * 0.46, thickness: 55, wavelength: 460, amplitude: 45, speed: 0.2, phase: 3.8, color: 'rgba(195, 195, 200, OPACITY)', opacity: 0.2 },
];

const WavyLines: React.FC<WavyLinesProps> = ({ ribbons = defaultRibbons, className, style }) => {
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let time = 0;

    const buildRibbonPath = (r: Ribbon, t: number) => {
      const topPoints: string[] = [];
      const bottomPoints: string[] = [];

      for (let x = 0; x <= SVG_WIDTH; x += STEP) {
        const xNorm = x / SVG_WIDTH;
        const edgeFade = Math.pow(Math.sin(xNorm * Math.PI), 1.2);

        const wave1 = Math.sin((x / r.wavelength) * Math.PI * 2 + r.phase + t * r.speed);
        const wave2 = Math.sin((x / (r.wavelength * 2.3)) * Math.PI * 2 - t * r.speed * 0.5 + r.phase * 0.6) * 0.35;
        const wave3 = Math.sin((x / (r.wavelength * 3.8)) * Math.PI * 2 + t * r.speed * 0.3) * 0.15;

        const combined = wave1 + wave2 + wave3;
        const amp = r.amplitude * edgeFade;
        const thk = r.thickness * edgeFade * (0.6 + 0.4 * Math.abs(Math.sin((x / r.wavelength) * Math.PI + t * r.speed * 0.5)));

        const centerY = r.baseY + amp * combined;
        topPoints.push(`${x},${(centerY - thk / 2).toFixed(1)}`);
        bottomPoints.push(`${x},${(centerY + thk / 2).toFixed(1)}`);
      }

      bottomPoints.reverse();
      return `M ${topPoints.join(' L ')} L ${bottomPoints.join(' L ')} Z`;
    };

    const animate = () => {
      time += 0.008;
      for (let i = 0; i < ribbons.length; i++) {
        const path = pathRefs.current[i];
        if (!path) continue;
        path.setAttribute('d', buildRibbonPath(ribbons[i], time));
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ribbons]);

  return (
    <div
      className={`overflow-hidden pointer-events-none ${className ?? ''}`}
      style={style}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        preserveAspectRatio="none"
      >
        {ribbons.map((r, i) => (
          <path
            key={i}
            ref={(el) => { pathRefs.current[i] = el; }}
            d=""
            fill={r.color.replace('OPACITY', String(r.opacity))}
            stroke={r.color.replace('OPACITY', String(r.opacity * 1.5))}
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  );
};

export default WavyLines;
