
import React, { useEffect, useState } from 'react';

const FloatingShapes: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate offset from center of screen
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // SVG Shapes
  const Triangle = () => (
    <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
      <polygon points="50,15 100,85 0,85" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-300" />
    </svg>
  );

  const Hexagon = () => (
    <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
      <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-300" />
    </svg>
  );

  const shapes = [
    // Left side - Mid/Lower
    {
      id: 1,
      factor: 0.02,
      component: <div className="w-5 h-5 border border-neutral-300 rounded-full" />,
      style: { top: '62%', left: '15%' }
    },
    {
      id: 2,
      factor: 0.05,
      component: <div className="w-10 h-10"><Hexagon /></div>,
      style: { top: '75%', left: '22%' }
    },
    // Center area - Lower
    {
      id: 3,
      factor: 0.03,
      component: <div className="w-16 h-px bg-neutral-300 rotate-[-10deg]" />,
      style: { top: '82%', left: '48%' }
    },
    // Right side - Mid/Lower
    {
      id: 4,
      factor: 0.04,
      component: <div className="w-8 h-8"><Triangle /></div>,
      style: { top: '65%', right: '18%' }
    },
    {
      id: 5,
      factor: 0.02,
      component: <div className="w-3 h-3 border border-neutral-300 rotate-45" />,
      style: { top: '78%', right: '10%' }
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute opacity-80 will-change-transform transition-transform duration-1000 ease-out"
          style={{
            ...shape.style,
            transform: `translate(${offset.x * -shape.factor}px, ${offset.y * -shape.factor}px)`
          }}
        >
            {shape.component}
        </div>
      ))}
    </div>
  );
};

export default FloatingShapes;
