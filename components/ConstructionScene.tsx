import React, { useEffect, useRef } from 'react';

const W = 1600;
const H = 700;

interface CraneData {
  x: number;
  mastH: number;
  jibLen: number;
  counterLen: number;
  speed: number;
  phase: number;
  op: number;
  sw: number;
}

const CRANES: CraneData[] = [
  { x: 120,  mastH: 480, jibLen: 220, counterLen: 70,  speed: 0.06,  phase: 0,              op: 0.28, sw: 1.2 },
  { x: 380,  mastH: 540, jibLen: 260, counterLen: 80,  speed: 0.04,  phase: Math.PI * 0.5,   op: 0.35, sw: 1.5 },
  { x: 680,  mastH: 420, jibLen: 190, counterLen: 60,  speed: 0.07,  phase: Math.PI * 1.1,   op: 0.22, sw: 1.0 },
  { x: 950,  mastH: 560, jibLen: 280, counterLen: 85,  speed: 0.035, phase: Math.PI * 1.7,   op: 0.38, sw: 1.6 },
  { x: 1250, mastH: 380, jibLen: 200, counterLen: 65,  speed: 0.055, phase: Math.PI * 0.3,   op: 0.25, sw: 1.1 },
  { x: 1480, mastH: 500, jibLen: 240, counterLen: 75,  speed: 0.045, phase: Math.PI * 2.1,   op: 0.30, sw: 1.3 },
];

interface BuildingData {
  x: number; w: number; h: number; floors: number; cols: number; op: number;
}

const BUILDINGS: BuildingData[] = [
  { x: 30,   w: 90,  h: 260, floors: 9,  cols: 4, op: 0.18 },
  { x: 140,  w: 70,  h: 180, floors: 6,  cols: 3, op: 0.14 },
  { x: 240,  w: 120, h: 350, floors: 12, cols: 5, op: 0.22 },
  { x: 310,  w: 60,  h: 140, floors: 5,  cols: 3, op: 0.12 },
  { x: 420,  w: 100, h: 300, floors: 10, cols: 4, op: 0.20 },
  { x: 540,  w: 80,  h: 220, floors: 8,  cols: 3, op: 0.16 },
  { x: 640,  w: 110, h: 280, floors: 9,  cols: 5, op: 0.19 },
  { x: 770,  w: 65,  h: 160, floors: 6,  cols: 3, op: 0.13 },
  { x: 850,  w: 130, h: 400, floors: 13, cols: 6, op: 0.24 },
  { x: 1000, w: 75,  h: 200, floors: 7,  cols: 3, op: 0.15 },
  { x: 1090, w: 100, h: 320, floors: 11, cols: 4, op: 0.21 },
  { x: 1210, w: 85,  h: 240, floors: 8,  cols: 4, op: 0.17 },
  { x: 1310, w: 60,  h: 150, floors: 5,  cols: 3, op: 0.12 },
  { x: 1390, w: 110, h: 360, floors: 12, cols: 5, op: 0.23 },
  { x: 1520, w: 70,  h: 190, floors: 7,  cols: 3, op: 0.14 },
];

const ConstructionScene: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let t = 0;
    const animate = () => {
      t += 0.04;
      const svg = svgRef.current;
      if (svg) {
        CRANES.forEach((c, i) => {
          const jib = svg.querySelector(`#j${i}`) as SVGGElement;
          if (!jib) return;
          const angle = Math.sin(t * c.speed + c.phase) * 18;
          const top = H - c.mastH;
          jib.setAttribute('transform', `rotate(${angle}, ${c.x}, ${top})`);

          const cable = svg.querySelector(`#c${i}`) as SVGLineElement;
          if (cable) {
            const tipX = c.x + c.jibLen * 0.75;
            const rad = (angle * Math.PI) / 180;
            const rx = c.x + (tipX - c.x) * Math.cos(rad);
            const ry = top + (tipX - c.x) * Math.sin(rad);
            const sway = Math.sin(t * c.speed * 1.8 + c.phase) * 8;
            cable.setAttribute('x1', String(rx));
            cable.setAttribute('y1', String(ry));
            cable.setAttribute('x2', String(rx + sway));
            cable.setAttribute('y2', String(ry + 55 + Math.sin(t * c.speed + c.phase * 0.5) * 12));
          }
        });
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const bracing = (x: number, top: number, bot: number, mw: number) => {
    const segs: React.ReactNode[] = [];
    const step = 20;
    const hw = mw / 2;
    for (let y = top; y < bot - step; y += step) {
      segs.push(
        <React.Fragment key={`b${x}-${y}`}>
          <line x1={x - hw} y1={y} x2={x + hw} y2={y + step} stroke="currentColor" strokeWidth="0.4" />
          <line x1={x + hw} y1={y} x2={x - hw} y2={y + step} stroke="currentColor" strokeWidth="0.4" />
        </React.Fragment>
      );
    }
    return segs;
  };

  const building = (b: BuildingData, idx: number) => {
    const lines: React.ReactNode[] = [];
    const fh = b.h / b.floors;
    const cw = b.w / b.cols;
    const baseY = H;
    const topY = baseY - b.h;

    lines.push(
      <rect key={`bo${idx}`} x={b.x} y={topY} width={b.w} height={b.h}
        fill="none" stroke="currentColor" strokeWidth="0.7" />
    );

    for (let f = 1; f < b.floors; f++) {
      const fy = baseY - f * fh;
      lines.push(
        <line key={`fh${idx}-${f}`} x1={b.x} y1={fy} x2={b.x + b.w} y2={fy}
          stroke="currentColor" strokeWidth="0.5" />
      );
    }

    for (let c = 1; c < b.cols; c++) {
      const cx = b.x + c * cw;
      lines.push(
        <line key={`fv${idx}-${c}`} x1={cx} y1={topY} x2={cx} y2={baseY}
          stroke="currentColor" strokeWidth="0.4" />
      );
    }

    const windowPad = 2;
    const ww = cw - windowPad * 2;
    const wh = fh * 0.45;
    for (let f = 0; f < Math.min(b.floors, 8); f++) {
      for (let c = 0; c < b.cols; c++) {
        const wx = b.x + c * cw + windowPad;
        const wy = baseY - (f + 1) * fh + fh * 0.3;
        lines.push(
          <rect key={`w${idx}-${f}-${c}`} x={wx} y={wy} width={ww} height={wh}
            fill="none" stroke="currentColor" strokeWidth="0.3" />
        );
      }
    }

    return <g key={`bld${idx}`} opacity={b.op}>{lines}</g>;
  };

  const crane = (c: CraneData, i: number) => {
    const top = H - c.mastH;
    const mw = 8;
    const hw = mw / 2;
    return (
      <g key={`cr${i}`} opacity={c.op}>
        {/* Mast verticals */}
        <line x1={c.x - hw} y1={top} x2={c.x - hw} y2={H} stroke="currentColor" strokeWidth={c.sw} />
        <line x1={c.x + hw} y1={top} x2={c.x + hw} y2={H} stroke="currentColor" strokeWidth={c.sw} />
        {bracing(c.x, top, H, mw)}

        {/* Base plate */}
        <line x1={c.x - 20} y1={H} x2={c.x + 20} y2={H} stroke="currentColor" strokeWidth={c.sw * 1.3} />
        {/* Base supports */}
        <line x1={c.x - 18} y1={H} x2={c.x - hw} y2={H - 30} stroke="currentColor" strokeWidth="0.6" />
        <line x1={c.x + 18} y1={H} x2={c.x + hw} y2={H - 30} stroke="currentColor" strokeWidth="0.6" />

        {/* Rotating jib */}
        <g id={`j${i}`}>
          {/* Apex */}
          <line x1={c.x} y1={top - 25} x2={c.x} y2={top} stroke="currentColor" strokeWidth={c.sw} />
          {/* Jib arm */}
          <line x1={c.x - c.counterLen} y1={top} x2={c.x + c.jibLen} y2={top}
            stroke="currentColor" strokeWidth={c.sw * 0.9} />
          {/* Support cables */}
          <line x1={c.x} y1={top - 25} x2={c.x + c.jibLen} y2={top} stroke="currentColor" strokeWidth="0.4" />
          <line x1={c.x} y1={top - 25} x2={c.x + c.jibLen * 0.5} y2={top} stroke="currentColor" strokeWidth="0.3" />
          <line x1={c.x} y1={top - 25} x2={c.x - c.counterLen} y2={top} stroke="currentColor" strokeWidth="0.4" />
          {/* Jib lattice */}
          {Array.from({ length: Math.floor(c.jibLen / 20) }, (_, k) => {
            const lx = c.x + k * 20;
            return (
              <React.Fragment key={`jl${i}-${k}`}>
                <line x1={lx} y1={top - 2} x2={lx + 20} y2={top + 2} stroke="currentColor" strokeWidth="0.25" />
                <line x1={lx + 20} y1={top - 2} x2={lx} y2={top + 2} stroke="currentColor" strokeWidth="0.25" />
              </React.Fragment>
            );
          })}
          {/* Counterweight */}
          <rect x={c.x - c.counterLen - 3} y={top - 1} width={12} height={8}
            fill="none" stroke="currentColor" strokeWidth="0.6" />
          <rect x={c.x - c.counterLen + 10} y={top - 1} width={10} height={7}
            fill="none" stroke="currentColor" strokeWidth="0.5" />
          {/* Trolley */}
          <rect x={c.x + c.jibLen * 0.72} y={top - 1} width={8} height={4}
            fill="none" stroke="currentColor" strokeWidth="0.4" />
        </g>

        {/* Hanging cable + hook */}
        <line id={`c${i}`}
          x1={c.x + c.jibLen * 0.75} y1={top}
          x2={c.x + c.jibLen * 0.75} y2={top + 55}
          stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      </g>
    );
  };

  const ibeamStack = (bx: number, by: number, count: number, w: number, h: number, op: number) => {
    const beams: React.ReactNode[] = [];
    for (let n = 0; n < count; n++) {
      const y = by - n * (h + 1);
      const xo = n * 1.5;
      const wo = w - n * 2;
      beams.push(
        <g key={`ib-${bx}-${n}`}>
          <rect x={bx + xo} y={y} width={wo} height={h * 0.25} fill="none" stroke="currentColor" strokeWidth="0.5" />
          <rect x={bx + xo + wo * 0.38} y={y + h * 0.25} width={wo * 0.24} height={h * 0.5}
            fill="none" stroke="currentColor" strokeWidth="0.5" />
          <rect x={bx + xo} y={y + h * 0.75} width={wo} height={h * 0.25} fill="none" stroke="currentColor" strokeWidth="0.5" />
        </g>
      );
    }
    return <g opacity={op}>{beams}</g>;
  };

  const groundDetails = () => (
    <g opacity="0.12">
      {/* Ground line */}
      <line x1={0} y1={H} x2={W} y2={H} stroke="currentColor" strokeWidth="0.8" />
      {/* Scattered construction barriers */}
      {[160, 500, 780, 1150, 1420].map(x => (
        <g key={`br-${x}`}>
          <line x1={x} y1={H} x2={x} y2={H - 12} stroke="currentColor" strokeWidth="0.5" />
          <line x1={x + 15} y1={H} x2={x + 15} y2={H - 12} stroke="currentColor" strokeWidth="0.5" />
          <line x1={x - 1} y1={H - 10} x2={x + 16} y2={H - 10} stroke="currentColor" strokeWidth="0.6" />
          <line x1={x - 1} y1={H - 6} x2={x + 16} y2={H - 6} stroke="currentColor" strokeWidth="0.6" />
        </g>
      ))}
      {/* Small equipment outlines */}
      {[300, 720, 1100].map(x => (
        <rect key={`eq-${x}`} x={x} y={H - 8} width={18} height={8}
          fill="none" stroke="currentColor" strokeWidth="0.4" rx="1" />
      ))}
    </g>
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMax slice"
        className="text-neutral-400"
      >
        <defs>
          <linearGradient id="scnFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="15%" stopColor="white" stopOpacity="0" />
            <stop offset="45%" stopColor="white" stopOpacity="0.6" />
            <stop offset="70%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="sideFadeL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="8%" stopColor="white" stopOpacity="1" />
            <stop offset="92%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="sceneMask">
            <rect x="0" y="0" width={W} height={H} fill="url(#scnFade)" />
          </mask>
          <mask id="edgeMask">
            <rect x="0" y="0" width={W} height={H} fill="url(#sideFadeL)" />
          </mask>
        </defs>

        <g mask="url(#sceneMask)">
          <g mask="url(#edgeMask)">
            {/* Buildings layer (behind cranes) */}
            {BUILDINGS.map((b, i) => building(b, i))}

            {/* I-beam stacks scattered around */}
            {ibeamStack(195, H - 5, 4, 28, 10, 0.2)}
            {ibeamStack(560, H - 5, 3, 24, 9, 0.16)}
            {ibeamStack(830, H - 5, 5, 30, 11, 0.22)}
            {ibeamStack(1170, H - 5, 3, 26, 10, 0.18)}
            {ibeamStack(1440, H - 5, 4, 27, 10, 0.19)}

            {/* Ground details */}
            {groundDetails()}

            {/* Cranes on top */}
            {CRANES.map((c, i) => crane(c, i))}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ConstructionScene;
