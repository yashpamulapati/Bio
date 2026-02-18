import React from 'react';

const W = 1200;
const H = 500;

/**
 * Experience: Scaffolding framework rising upward — vertical pipes,
 * horizontal rails, and X-bracing like a building skeleton.
 * Light bg section, so uses neutral-400 strokes.
 */
export const ScaffoldingBg: React.FC = () => {
  const cols = 14;
  const rows = 8;
  const cw = W / cols;
  const rh = H / rows;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="text-neutral-400">
        <defs>
          <linearGradient id="scaffFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="30%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="scaffSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="15%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="scaffMask">
            <rect width={W} height={H} fill="url(#scaffFade)" />
          </mask>
          <mask id="scaffEdge">
            <rect width={W} height={H} fill="url(#scaffSide)" />
          </mask>
        </defs>
        <g mask="url(#scaffMask)">
          <g mask="url(#scaffEdge)" opacity="0.12">
            {Array.from({ length: cols + 1 }, (_, c) => (
              <line key={`sv${c}`} x1={c * cw} y1={0} x2={c * cw} y2={H}
                stroke="currentColor" strokeWidth="0.8" />
            ))}
            {Array.from({ length: rows + 1 }, (_, r) => (
              <line key={`sh${r}`} x1={0} y1={r * rh} x2={W} y2={r * rh}
                stroke="currentColor" strokeWidth="0.6" />
            ))}
            {Array.from({ length: cols }, (_, c) =>
              Array.from({ length: rows }, (_, r) => {
                if ((c + r) % 3 !== 0) return null;
                const x1 = c * cw; const y1 = r * rh;
                return (
                  <React.Fragment key={`xb${c}-${r}`}>
                    <line x1={x1} y1={y1} x2={x1 + cw} y2={y1 + rh} stroke="currentColor" strokeWidth="0.4" />
                    <line x1={x1 + cw} y1={y1} x2={x1} y2={y1 + rh} stroke="currentColor" strokeWidth="0.4" />
                  </React.Fragment>
                );
              })
            )}
            {[2, 5, 9, 12].map(c => (
              <g key={`pipe${c}`}>
                <circle cx={c * cw} cy={H * 0.4} r="3" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx={c * cw} cy={H * 0.7} r="3" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </g>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

/**
 * FeaturedProjects: Blueprint grid with building footprints.
 * Dark bg section, so uses lighter strokes (white-ish).
 */
export const BlueprintBg: React.FC = () => {
  const gridStep = 40;
  const lines: React.ReactNode[] = [];
  for (let x = 0; x <= W; x += gridStep) {
    lines.push(<line key={`bv${x}`} x1={x} y1={0} x2={x} y2={H} stroke="currentColor" strokeWidth="0.3" />);
  }
  for (let y = 0; y <= H; y += gridStep) {
    lines.push(<line key={`bh${y}`} x1={0} y1={y} x2={W} y2={y} stroke="currentColor" strokeWidth="0.3" />);
  }

  const floorPlan = (px: number, py: number, pw: number, ph: number, rooms: number) => {
    const elems: React.ReactNode[] = [];
    elems.push(<rect key={`fp-${px}`} x={px} y={py} width={pw} height={ph} fill="none" stroke="currentColor" strokeWidth="0.7" />);
    const rw = pw / rooms;
    for (let i = 1; i < rooms; i++) {
      elems.push(<line key={`fpd-${px}-${i}`} x1={px + i * rw} y1={py} x2={px + i * rw} y2={py + ph} stroke="currentColor" strokeWidth="0.5" />);
    }
    elems.push(<line key={`fpm-${px}`} x1={px} y1={py + ph / 2} x2={px + pw} y2={py + ph / 2} stroke="currentColor" strokeWidth="0.4" />);
    const doorX = px + rw * 0.5;
    elems.push(
      <path key={`fpdr-${px}`} d={`M ${doorX} ${py + ph} A 8 8 0 0 1 ${doorX + 8} ${py + ph - 8}`}
        fill="none" stroke="currentColor" strokeWidth="0.5" />
    );
    return elems;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="text-blue-200">
        <defs>
          <linearGradient id="bpSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="12%" stopColor="white" stopOpacity="1" />
            <stop offset="88%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="bpMask">
            <rect width={W} height={H} fill="url(#bpSide)" />
          </mask>
        </defs>
        <g mask="url(#bpMask)">
          <g opacity="0.08">{lines}</g>
          <g opacity="0.12">
            {floorPlan(120, 80, 200, 120, 4)}
            {floorPlan(500, 200, 160, 100, 3)}
            {floorPlan(800, 100, 240, 140, 5)}
            {floorPlan(300, 320, 180, 110, 3)}
            {floorPlan(700, 340, 200, 100, 4)}
            {floorPlan(1000, 280, 140, 90, 3)}
          </g>
          <g opacity="0.06">
            <circle cx="220" cy="140" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 3" />
            <circle cx="880" cy="170" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 3" />
            <line x1="100" y1="60" x2="100" y2="80" stroke="currentColor" strokeWidth="0.6" />
            <line x1="90" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="0.6" />
            <line x1="1050" y1="60" x2="1050" y2="80" stroke="currentColor" strokeWidth="0.6" />
            <line x1="1040" y1="70" x2="1060" y2="70" stroke="currentColor" strokeWidth="0.6" />
          </g>
        </g>
      </svg>
    </div>
  );
};

/**
 * Research: Engineering drafting — protractor arcs, ruler ticks,
 * dimension lines, and technical drawing elements.
 * Neutral-200 bg, so uses neutral-400/500 strokes.
 */
export const DraftingBg: React.FC = () => {
  const rulerTicks = (rx: number, ry: number, len: number, vertical: boolean) => {
    const ticks: React.ReactNode[] = [];
    const step = 12;
    const count = Math.floor(len / step);
    for (let i = 0; i <= count; i++) {
      const major = i % 5 === 0;
      const tickLen = major ? 8 : 4;
      if (vertical) {
        ticks.push(<line key={`rt-v${rx}-${i}`} x1={rx} y1={ry + i * step} x2={rx + tickLen} y2={ry + i * step}
          stroke="currentColor" strokeWidth={major ? '0.5' : '0.3'} />);
      } else {
        ticks.push(<line key={`rt-h${ry}-${i}`} x1={rx + i * step} y1={ry} x2={rx + i * step} y2={ry + tickLen}
          stroke="currentColor" strokeWidth={major ? '0.5' : '0.3'} />);
      }
    }
    return ticks;
  };

  const protractor = (cx: number, cy: number, r: number) => {
    const arcs: React.ReactNode[] = [];
    arcs.push(
      <path key={`pa-${cx}`}
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none" stroke="currentColor" strokeWidth="0.5" />
    );
    for (let deg = 0; deg <= 180; deg += 15) {
      const rad = (deg * Math.PI) / 180;
      const inner = r - (deg % 45 === 0 ? 10 : 5);
      arcs.push(
        <line key={`pt-${cx}-${deg}`}
          x1={cx + Math.cos(Math.PI - rad) * inner}
          y1={cy - Math.sin(rad) * inner}
          x2={cx + Math.cos(Math.PI - rad) * r}
          y2={cy - Math.sin(rad) * r}
          stroke="currentColor" strokeWidth={deg % 45 === 0 ? '0.5' : '0.3'} />
      );
    }
    return arcs;
  };

  const dimensionLine = (x1: number, y1: number, x2: number, y2: number) => (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.4" />
      <line x1={x1} y1={y1 - 4} x2={x1} y2={y1 + 4} stroke="currentColor" strokeWidth="0.5" />
      <line x1={x2} y1={y2 - 4} x2={x2} y2={y2 + 4} stroke="currentColor" strokeWidth="0.5" />
      <polygon points={`${x1},${y1} ${x1 + 5},${y1 - 1.5} ${x1 + 5},${y1 + 1.5}`}
        fill="currentColor" opacity="0.5" />
      <polygon points={`${x2},${y2} ${x2 - 5},${y2 - 1.5} ${x2 - 5},${y2 + 1.5}`}
        fill="currentColor" opacity="0.5" />
    </g>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="text-neutral-400">
        <defs>
          <linearGradient id="draftSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="10%" stopColor="white" stopOpacity="1" />
            <stop offset="90%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="draftMask">
            <rect width={W} height={H} fill="url(#draftSide)" />
          </mask>
        </defs>
        <g mask="url(#draftMask)" opacity="0.15">
          {rulerTicks(60, 30, 400, false)}
          {rulerTicks(60, 30, 350, true)}
          {rulerTicks(700, 380, 400, false)}
          {rulerTicks(1100, 100, 300, true)}

          {protractor(300, 280, 80)}
          {protractor(900, 180, 65)}

          {dimensionLine(150, 120, 400, 120)}
          {dimensionLine(600, 350, 850, 350)}
          {dimensionLine(950, 80, 1100, 80)}

          <rect x="500" y="150" width="160" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 3" />
          <line x1="500" y1="150" x2="660" y2="250" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4 4" />
          <line x1="660" y1="150" x2="500" y2="250" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4 4" />

          <circle cx="180" cy="400" r="40" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <line x1="180" y1="360" x2="180" y2="440" stroke="currentColor" strokeWidth="0.3" />
          <line x1="140" y1="400" x2="220" y2="400" stroke="currentColor" strokeWidth="0.3" />

          <rect x="800" y="300" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <line x1="800" y1="300" x2="830" y2="270" stroke="currentColor" strokeWidth="0.4" />
          <line x1="920" y1="300" x2="950" y2="270" stroke="currentColor" strokeWidth="0.4" />
          <line x1="830" y1="270" x2="950" y2="270" stroke="currentColor" strokeWidth="0.4" />
          <line x1="950" y1="270" x2="920" y2="300" stroke="currentColor" strokeWidth="0.4" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Contact: Crane skyline on dark background — two tower cranes
 * with lattice masts, jib arms, cables, and scattered scaffolding.
 * Light strokes on dark bg.
 */
export const CraneBg: React.FC = () => {
  const craneGroup = (
    cx: number, mastH: number, jibLen: number, counterLen: number,
    op: number, sw: number
  ) => {
    const top = H - mastH;
    const mw = 8;
    const hw = mw / 2;
    const step = 18;

    const braces: React.ReactNode[] = [];
    for (let y = top; y < H - step; y += step) {
      braces.push(
        <React.Fragment key={`cb-${cx}-${y}`}>
          <line x1={cx - hw} y1={y} x2={cx + hw} y2={y + step} stroke="currentColor" strokeWidth="0.3" />
          <line x1={cx + hw} y1={y} x2={cx - hw} y2={y + step} stroke="currentColor" strokeWidth="0.3" />
        </React.Fragment>
      );
    }

    const jibLattice: React.ReactNode[] = [];
    for (let k = 0; k < Math.floor(jibLen / 18); k++) {
      const lx = cx + k * 18;
      jibLattice.push(
        <React.Fragment key={`jl-${cx}-${k}`}>
          <line x1={lx} y1={top - 1.5} x2={lx + 18} y2={top + 1.5} stroke="currentColor" strokeWidth="0.2" />
          <line x1={lx + 18} y1={top - 1.5} x2={lx} y2={top + 1.5} stroke="currentColor" strokeWidth="0.2" />
        </React.Fragment>
      );
    }

    return (
      <g opacity={op}>
        {/* Mast */}
        <line x1={cx - hw} y1={top} x2={cx - hw} y2={H} stroke="currentColor" strokeWidth={sw} />
        <line x1={cx + hw} y1={top} x2={cx + hw} y2={H} stroke="currentColor" strokeWidth={sw} />
        {braces}
        {/* Base */}
        <line x1={cx - 20} y1={H} x2={cx + 20} y2={H} stroke="currentColor" strokeWidth={sw * 1.2} />
        <line x1={cx - 18} y1={H} x2={cx - hw} y2={H - 25} stroke="currentColor" strokeWidth="0.5" />
        <line x1={cx + 18} y1={H} x2={cx + hw} y2={H - 25} stroke="currentColor" strokeWidth="0.5" />
        {/* Apex */}
        <line x1={cx} y1={top - 22} x2={cx} y2={top} stroke="currentColor" strokeWidth={sw} />
        {/* Jib */}
        <line x1={cx - counterLen} y1={top} x2={cx + jibLen} y2={top} stroke="currentColor" strokeWidth={sw * 0.9} />
        {/* Support cables */}
        <line x1={cx} y1={top - 22} x2={cx + jibLen} y2={top} stroke="currentColor" strokeWidth="0.35" />
        <line x1={cx} y1={top - 22} x2={cx + jibLen * 0.5} y2={top} stroke="currentColor" strokeWidth="0.25" />
        <line x1={cx} y1={top - 22} x2={cx - counterLen} y2={top} stroke="currentColor" strokeWidth="0.35" />
        {jibLattice}
        {/* Counterweight */}
        <rect x={cx - counterLen - 2} y={top - 1} width={10} height={7} fill="none" stroke="currentColor" strokeWidth="0.5" />
        {/* Trolley */}
        <rect x={cx + jibLen * 0.7} y={top - 1} width={7} height={3.5} fill="none" stroke="currentColor" strokeWidth="0.35" />
        {/* Hanging cable + hook */}
        <line x1={cx + jibLen * 0.72} y1={top} x2={cx + jibLen * 0.72} y2={top + 50}
          stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" />
        <path d={`M ${cx + jibLen * 0.72 - 3} ${top + 50} Q ${cx + jibLen * 0.72} ${top + 56} ${cx + jibLen * 0.72 + 3} ${top + 50}`}
          fill="none" stroke="currentColor" strokeWidth="0.5" />
      </g>
    );
  };

  const scaffolding = (sx: number, sw: number, sh: number, floors: number, op: number) => {
    const fh = sh / floors;
    const cols = Math.max(2, Math.floor(sw / 22));
    const cw = sw / cols;
    const elems: React.ReactNode[] = [];
    elems.push(<rect key={`scr-${sx}`} x={sx} y={H - sh} width={sw} height={sh} fill="none" stroke="currentColor" strokeWidth="0.5" />);
    for (let f = 1; f < floors; f++) {
      elems.push(<line key={`sfh-${sx}-${f}`} x1={sx} y1={H - f * fh} x2={sx + sw} y2={H - f * fh} stroke="currentColor" strokeWidth="0.35" />);
    }
    for (let c = 1; c < cols; c++) {
      elems.push(<line key={`sfv-${sx}-${c}`} x1={sx + c * cw} y1={H - sh} x2={sx + c * cw} y2={H} stroke="currentColor" strokeWidth="0.3" />);
    }
    return <g opacity={op}>{elems}</g>;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" className="text-neutral-500">
        <defs>
          <linearGradient id="craneFadeV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="25%" stopColor="white" stopOpacity="0.5" />
            <stop offset="60%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="craneFadeH" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="12%" stopColor="white" stopOpacity="1" />
            <stop offset="88%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="craneMaskV">
            <rect width={W} height={H} fill="url(#craneFadeV)" />
          </mask>
          <mask id="craneMaskH">
            <rect width={W} height={H} fill="url(#craneFadeH)" />
          </mask>
        </defs>
        <g mask="url(#craneMaskV)">
          <g mask="url(#craneMaskH)">
            {/* Scaffolding / buildings */}
            {scaffolding(60, 80, 120, 5, 0.08)}
            {scaffolding(350, 100, 160, 6, 0.10)}
            {scaffolding(700, 70, 100, 4, 0.07)}
            {scaffolding(1000, 90, 140, 5, 0.09)}

            {/* Cranes */}
            {craneGroup(250, 380, 200, 65, 0.14, 1.0)}
            {craneGroup(800, 420, 240, 75, 0.18, 1.2)}

            {/* Ground line */}
            <line x1={0} y1={H} x2={W} y2={H} stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
          </g>
        </g>
      </svg>
    </div>
  );
};
