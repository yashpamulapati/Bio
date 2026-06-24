import React from 'react';

const W = 1200;
const H = 300;

const DenverSkyline: React.FC = () => (
  <g>
    {/* Rocky Mountains backdrop */}
    <path
      d="M 0 300 L 0 205 L 70 150 L 130 180 L 210 125 L 290 170 L 370 135 L 470 95 L 560 150 L 660 115 L 770 165 L 890 130 L 1010 172 L 1110 145 L 1200 178 L 1200 300 Z"
      fill="rgba(190, 190, 195, 0.14)"
      stroke="rgba(160, 160, 168, 0.35)"
      strokeWidth="0.7"
    />
    {/* Snow-cap hints on the tallest peaks */}
    <path d="M 445 113 L 470 95 L 495 113 Z" fill="rgba(205, 205, 210, 0.22)" stroke="none" />
    <path d="M 195 137 L 210 125 L 225 137 Z" fill="rgba(205, 205, 210, 0.2)" stroke="none" />

    {/* Filled downtown silhouette */}
    <path
      d="M 0 300 L 0 255 L 30 255 L 30 248 L 60 248 L 60 240 L 90 240 L 90 250 L 120 250 L 120 235 L 150 235 L 150 245 L 180 245
         L 180 210 L 200 210 L 200 195 L 215 195 L 215 215 L 235 215 L 235 185 L 250 185 L 250 165 L 268 165 L 268 180 L 285 180
         L 285 150 L 298 150 L 298 90 L 304 85 L 304 70 L 346 70 L 346 85 L 352 90 L 352 150 L 366 150
         L 366 130 L 380 130 L 380 110 L 396 110 L 396 95 L 440 95 L 440 110 L 456 110 L 456 130 L 470 130
         L 470 140 L 485 140 L 485 100 L 489 90 L 495 82 L 503 76 L 510 74 L 517 76 L 525 82 L 531 90 L 535 100 L 535 140 L 550 140
         L 550 160 L 572 160 L 572 145 L 588 145 L 588 165 L 606 165 L 606 150 L 626 150 L 626 175 L 650 175
         L 650 190 L 690 190 L 690 205 L 730 205 L 730 215 L 780 215 L 780 225 L 840 225 L 840 235 L 900 235 L 900 245 L 980 245 L 980 252 L 1080 252 L 1080 262 L 1200 262 L 1200 300 Z"
      fill="rgba(180, 180, 185, 0.25)"
      stroke="rgba(150, 150, 158, 0.6)"
      strokeWidth="0.8"
    />
    {/* Republic Plaza accent (tallest) */}
    <path d="M 298 150 L 298 90 L 304 85 L 304 70 L 346 70 L 346 85 L 352 90 L 352 150 Z"
      fill="rgba(165, 165, 172, 0.32)" stroke="none" />
    {/* 1801 California accent */}
    <path d="M 380 130 L 380 110 L 396 110 L 396 95 L 440 95 L 440 110 L 456 110 L 456 130 Z"
      fill="rgba(165, 165, 172, 0.22)" stroke="none" />
    {/* Wells Fargo Center "Cash Register" accent - arched top */}
    <path d="M 485 140 L 485 100 L 489 90 L 495 82 L 503 76 L 510 74 L 517 76 L 525 82 L 531 90 L 535 100 L 535 140 Z"
      fill="rgba(160, 160, 168, 0.3)" stroke="none" />
    {/* Antennas */}
    <line x1="325" y1="70" x2="325" y2="52" stroke="rgba(150, 150, 158, 0.5)" strokeWidth="0.6" />
    {/* Window hints */}
    {Array.from({ length: 8 }, (_, i) => (
      <line key={`rp${i}`} x1="305" y1={88 + i * 7} x2="345" y2={88 + i * 7} stroke="rgba(150, 150, 158, 0.3)" strokeWidth="0.4" />
    ))}
    {Array.from({ length: 5 }, (_, i) => (
      <line key={`ca${i}`} x1="382" y1={98 + i * 6} x2="438" y2={98 + i * 6} stroke="rgba(150, 150, 158, 0.25)" strokeWidth="0.4" />
    ))}
    {Array.from({ length: 4 }, (_, i) => (
      <line key={`cr${i}`} x1="487" y1={104 + i * 8} x2="533" y2={104 + i * 8} stroke="rgba(150, 150, 158, 0.25)" strokeWidth="0.4" />
    ))}
  </g>
);

const PhiladelphiaSkyline: React.FC = () => (
  <g>
    {/* Filled silhouette */}
    <path
      d="M 0 300 L 0 250 L 25 250 L 25 240 L 45 240 L 45 230 L 65 230 L 65 220 L 80 220 L 80 235 L 100 235 L 100 215 L 120 215 L 120 225 L 140 225
         L 140 200 L 160 200 L 160 180 L 175 180 L 175 165 L 190 165 L 190 175 L 210 175 L 210 155 L 225 155 L 225 145 L 240 145 L 240 160 L 260 160
         L 260 140 L 275 140 L 275 120 L 280 120 L 280 105 L 285 105 L 285 95 L 290 95 L 290 85 L 295 80 L 297 75 L 299 70 L 300 65 L 301 70 L 303 75 L 305 80 L 310 85 L 310 95 L 315 95 L 315 105 L 320 105 L 320 120 L 325 120 L 325 140 L 340 140 L 340 160
         L 340 130 L 355 130 L 355 105 L 365 105 L 365 85 L 375 85 L 375 65 L 380 60 L 383 50 L 385 45 L 387 50 L 390 60 L 395 65 L 395 85 L 405 85 L 405 70 L 410 65 L 413 55 L 415 48 L 417 55 L 420 65 L 425 70 L 425 85 L 435 85 L 435 100 L 445 100 L 445 115 L 460 115
         L 460 80 L 470 80 L 470 50 L 475 45 L 478 38 L 480 32 L 482 38 L 485 45 L 490 50 L 490 80 L 500 80 L 500 100 L 515 100 L 515 120 L 530 120
         L 530 100 L 545 100 L 545 110 L 560 110 L 560 95 L 575 95 L 575 115 L 590 115 L 590 130 L 610 130 L 610 145 L 630 145 L 630 155 L 650 155 L 650 170 L 680 170
         L 680 185 L 710 185 L 710 200 L 740 200 L 740 210 L 780 210 L 780 220 L 820 220 L 820 230 L 870 230 L 870 240 L 930 240 L 930 250 L 1020 250 L 1020 260 L 1100 260 L 1100 270 L 1200 270 L 1200 300 Z"
      fill="rgba(180, 180, 185, 0.25)"
      stroke="rgba(150, 150, 158, 0.6)"
      strokeWidth="0.8"
    />
    {/* City Hall accent */}
    <path d="M 260 160 L 260 140 L 275 140 L 275 120 L 325 120 L 325 140 L 340 140 L 340 160 Z"
      fill="rgba(165, 165, 172, 0.28)" stroke="none" />
    {/* City Hall tower */}
    <path d="M 285 120 L 285 95 L 290 95 L 290 85 L 295 80 L 300 65 L 305 80 L 310 85 L 310 95 L 315 95 L 315 120 Z"
      fill="rgba(160, 160, 168, 0.3)" stroke="none" />
    {/* Liberty Place towers accent */}
    <path d="M 365 115 L 365 85 L 375 85 L 375 65 L 385 45 L 395 65 L 395 85 L 405 85 L 405 70 L 415 48 L 425 70 L 425 85 L 435 85 L 435 115 Z"
      fill="rgba(165, 165, 172, 0.25)" stroke="none" />
    {/* Comcast Center accent */}
    <path d="M 460 115 L 460 80 L 470 80 L 470 50 L 480 32 L 490 50 L 490 80 L 500 80 L 500 115 Z"
      fill="rgba(160, 160, 168, 0.3)" stroke="none" />
    {/* Penn statue */}
    <line x1="300" y1="65" x2="300" y2="50" stroke="rgba(150, 150, 158, 0.6)" strokeWidth="0.7" />
    <circle cx="300" cy="47" r="3" fill="rgba(170, 170, 178, 0.3)" stroke="rgba(150, 150, 158, 0.5)" strokeWidth="0.5" />
    {/* Antenna */}
    <line x1="480" y1="32" x2="480" y2="18" stroke="rgba(150, 150, 158, 0.5)" strokeWidth="0.5" />
    {/* Window hints */}
    {Array.from({ length: 6 }, (_, i) => (
      <line key={`lw${i}`} x1="378" y1={68 + i * 7} x2="392" y2={68 + i * 7} stroke="rgba(150, 150, 158, 0.3)" strokeWidth="0.4" />
    ))}
    {Array.from({ length: 7 }, (_, i) => (
      <line key={`cw${i}`} x1="473" y1={55 + i * 7} x2="487" y2={55 + i * 7} stroke="rgba(150, 150, 158, 0.3)" strokeWidth="0.4" />
    ))}
    {/* City Hall columns */}
    {Array.from({ length: 4 }, (_, i) => (
      <line key={`chc${i}`} x1={280 + i * 12} y1={120} x2={280 + i * 12} y2={160} stroke="rgba(150, 150, 158, 0.25)" strokeWidth="0.4" />
    ))}
  </g>
);

const WashingtonDCSkyline: React.FC = () => (
  <g>
    {/* Filled silhouette */}
    <path
      d="M 0 300 L 0 255 L 30 255 L 30 248 L 55 248 L 55 242 L 80 242 L 80 250 L 110 250 L 110 240 L 130 240 L 130 245 L 160 245
         L 160 220 L 165 215 L 170 210 L 175 207 L 180 205 L 220 205 L 225 207 L 230 210 L 235 215 L 240 220 L 240 245
         L 260 248 L 340 248
         L 340 240 L 348 240 L 348 100 L 350 95 L 352 80 L 354 60 L 356 40 L 358 25 L 360 15 L 362 25 L 364 40 L 366 60 L 368 80 L 370 95 L 372 100 L 372 240 L 380 240 L 380 248
         L 420 248 L 420 242 L 440 242 L 440 248 L 500 248
         L 500 225 L 510 225 L 510 215 L 520 215 L 520 208 L 530 208 L 530 200 L 540 195 L 545 190 L 550 185 L 555 180 L 558 175 L 560 170
         L 562 160 L 565 152 L 570 145 L 576 140 L 583 137 L 590 136 L 597 137 L 604 140 L 610 145 L 615 152 L 618 160 L 620 170
         L 622 175 L 625 180 L 630 185 L 635 190 L 640 195 L 650 200 L 650 208 L 660 208 L 660 215 L 670 215 L 670 225 L 680 225 L 680 248
         L 700 248 L 700 235 L 720 235 L 720 225 L 740 225 L 740 235 L 770 235 L 770 228 L 790 228 L 790 238 L 820 238 L 820 242 L 860 242 L 860 248 L 920 248 L 920 252 L 1000 252 L 1000 258 L 1100 258 L 1100 265 L 1200 265 L 1200 300 Z"
      fill="rgba(180, 180, 185, 0.25)"
      stroke="rgba(150, 150, 158, 0.6)"
      strokeWidth="0.8"
    />
    {/* Lincoln Memorial accent */}
    <path d="M 160 245 L 160 220 L 165 215 L 170 210 L 175 207 L 180 205 L 220 205 L 225 207 L 230 210 L 235 215 L 240 220 L 240 245 Z"
      fill="rgba(170, 170, 178, 0.3)" stroke="none" />
    {/* Lincoln Memorial columns */}
    {Array.from({ length: 7 }, (_, i) => (
      <line key={`lmc${i}`} x1={172 + i * 10} y1={210} x2={172 + i * 10} y2={245} stroke="rgba(150, 150, 158, 0.35)" strokeWidth="0.5" />
    ))}
    {/* Washington Monument accent */}
    <path d="M 348 240 L 348 100 L 350 95 L 352 80 L 354 60 L 356 40 L 358 25 L 360 15 L 362 25 L 364 40 L 366 60 L 368 80 L 370 95 L 372 100 L 372 240 Z"
      fill="rgba(165, 165, 172, 0.32)" stroke="none" />
    {/* Monument tip */}
    <line x1="360" y1="15" x2="360" y2="8" stroke="rgba(150, 150, 158, 0.6)" strokeWidth="0.5" />
    {/* Capitol dome accent */}
    <path d="M 560 170 L 562 160 L 565 152 L 570 145 L 576 140 L 583 137 L 590 136 L 597 137 L 604 140 L 610 145 L 615 152 L 618 160 L 620 170 Z"
      fill="rgba(165, 165, 172, 0.35)" stroke="none" />
    {/* Dome lantern */}
    <path d="M 583 137 L 585 130 L 588 125 L 590 120 L 592 125 L 595 130 L 597 137" stroke="rgba(150, 150, 158, 0.5)" strokeWidth="0.5" fill="rgba(170, 170, 178, 0.25)" />
    <line x1="590" y1="120" x2="590" y2="108" stroke="rgba(150, 150, 158, 0.5)" strokeWidth="0.5" />
    <circle cx="590" cy="106" r="2.5" fill="rgba(170, 170, 178, 0.3)" stroke="rgba(150, 150, 158, 0.5)" strokeWidth="0.5" />
    {/* Capitol wings accent */}
    <path d="M 500 248 L 500 225 L 510 225 L 510 215 L 520 215 L 520 208 L 560 208 L 560 248 Z"
      fill="rgba(170, 170, 178, 0.22)" stroke="none" />
    <path d="M 620 248 L 620 208 L 660 208 L 660 215 L 670 215 L 670 225 L 680 225 L 680 248 Z"
      fill="rgba(170, 170, 178, 0.22)" stroke="none" />
    {/* Capitol columns */}
    {Array.from({ length: 5 }, (_, i) => (
      <line key={`ccl${i}`} x1={535 + i * 6} y1={200} x2={535 + i * 6} y2={248} stroke="rgba(150, 150, 158, 0.3)" strokeWidth="0.4" />
    ))}
    {Array.from({ length: 5 }, (_, i) => (
      <line key={`ccr${i}`} x1={645 + i * 6} y1={200} x2={645 + i * 6} y2={248} stroke="rgba(150, 150, 158, 0.3)" strokeWidth="0.4" />
    ))}
    {/* Trees along the mall */}
    {[280, 310, 400, 430, 460].map(x => (
      <circle key={`tree${x}`} cx={x} cy={244} r="4.5" fill="rgba(175, 175, 180, 0.2)" stroke="rgba(150, 150, 158, 0.3)" strokeWidth="0.4" />
    ))}
  </g>
);

const skylineMap: Record<string, React.FC> = {
  trimble: DenverSkyline,
  'borton-lawson': PhiladelphiaSkyline,
  salut: WashingtonDCSkyline,
};

interface CitySkylineProps {
  activeId: string;
}

const CitySkyline: React.FC<CitySkylineProps> = ({ activeId }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id="skyFadeV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="skyFadeH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="8%" stopColor="white" stopOpacity="1" />
          <stop offset="92%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="skyMaskV">
          <rect width={W} height={H} fill="url(#skyFadeV)" />
        </mask>
        <mask id="skyMaskH">
          <rect width={W} height={H} fill="url(#skyFadeH)" />
        </mask>
      </defs>
      <g mask="url(#skyMaskV)">
        <g mask="url(#skyMaskH)">
          {Object.entries(skylineMap).map(([id, SkylineComp]) => (
            <g
              key={id}
              style={{
                opacity: id === activeId ? 1 : 0,
                transition: 'opacity 0.6s ease-in-out',
              }}
            >
              <SkylineComp />
            </g>
          ))}
        </g>
      </g>
    </svg>
  </div>
);

export default CitySkyline;
