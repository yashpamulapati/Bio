
import React, { useEffect, useRef } from 'react';
import { PROFILE } from '../constants';

interface Node {
  id: number;
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isCenter?: boolean;
  color?: string;
  font?: string;
}

const KEYWORDS = [
  "Product Management", "Civil Engineering", "SaaS", "API Strategy", 
  "Construction Tech", "SDLC", "Agile", "Data Analysis", 
  "UX Research", "B2B", "Mobile Apps", "Roadmap", "Stakeholder Mgmt"
];

const ForceGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initNodes = () => {
      const { width, height } = container.getBoundingClientRect();
      
      // Center Node (Name)
      const centerNode: Node = {
        id: 0,
        text: PROFILE.name,
        x: width / 2,
        y: height / 2,
        vx: 0,
        vy: 0,
        radius: 60,
        isCenter: true,
        color: '#171717', // neutral-900
        font: '600 32px sans-serif' // Larger font for name
      };

      // Surrounding Nodes (Keywords)
      const otherNodes: Node[] = KEYWORDS.map((text, i) => ({
        id: i + 1,
        text,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5, // Random initial velocity
        vy: (Math.random() - 0.5) * 1.5,
        radius: 40,
        isCenter: false,
        color: 'rgba(115, 115, 115, 0.7)', // neutral-500 with 70% opacity
        font: '400 14px sans-serif'
      }));

      nodesRef.current = [centerNode, ...otherNodes];
    };

    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Re-center the center node on resize
      if (nodesRef.current.length > 0) {
        nodesRef.current[0].x = width / 2;
        nodesRef.current[0].y = height / 2;
      } else {
        initNodes();
      }
    };

    const updatePhysics = (width: number, height: number) => {
      const nodes = nodesRef.current;
      const centerNode = nodes[0];
      
      // Constants
      const repulsionStrength = 500;
      const springLength = Math.min(width, height) * 0.25; // Responsive spring length
      const springStrength = 0.005;
      const centerAttraction = 0.001; // Pull stray nodes back
      const mouseRepulsion = 1000;
      const mouseRadius = 150;

      // Keep center node fixed
      centerNode.x = width / 2;
      centerNode.y = height / 2;
      centerNode.vx = 0;
      centerNode.vy = 0;

      for (let i = 1; i < nodes.length; i++) {
        const node = nodes[i];

        // 1. Repulsion from other nodes
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq) || 1;
          
          if (dist < 200) { // Only repel if close
            const force = repulsionStrength / distSq;
            node.vx += (dx / dist) * force;
            node.vy += (dy / dist) * force;
          }
        }

        // 2. Spring force to center
        const dx = node.x - centerNode.x;
        const dy = node.y - centerNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const springForce = (dist - springLength) * springStrength;
        
        node.vx -= (dx / dist) * springForce;
        node.vy -= (dy / dist) * springForce;

        // 3. Mouse Interaction
        if (mouseRef.current) {
          const mdx = node.x - mouseRef.current.x;
          const mdy = node.y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouseRadius) {
            const force = (mouseRadius - mDist) / mouseRadius * mouseRepulsion / mDist;
             node.vx += (mdx / mDist) * force;
             node.vy += (mdy / mDist) * force;
          }
        }

        // 4. Damping (Friction)
        node.vx *= 0.94;
        node.vy *= 0.94;

        // 5. Update Position
        node.x += node.vx;
        node.y += node.vy;

        // 6. Boundary check (soft bounce)
        const margin = 50;
        if (node.x < margin) node.vx += 0.5;
        if (node.x > width - margin) node.vx -= 0.5;
        if (node.y < margin) node.vy += 0.5;
        if (node.y > height - margin) node.vy -= 0.5;
      }
    };

    const draw = () => {
      const { width, height } = container.getBoundingClientRect();
      updatePhysics(width, height);

      ctx.clearRect(0, 0, width, height);

      // Draw Lines
      const nodes = nodesRef.current;
      const centerNode = nodes[0];

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(212, 212, 212, 0.5)'; // neutral-300 with opacity
      ctx.lineWidth = 1;

      for (let i = 1; i < nodes.length; i++) {
        const node = nodes[i];
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(node.x, node.y);
      }
      ctx.stroke();

      // Draw Nodes
      nodes.forEach(node => {
        ctx.font = node.font || '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Background "glow" for readability
        /*
        ctx.fillStyle = 'rgba(250, 250, 250, 0.8)';
        const textMetrics = ctx.measureText(node.text);
        const tw = textMetrics.width;
        const th = parseInt(ctx.font, 10); // Approx height
        ctx.fillRect(node.x - tw/2 - 4, node.y - th/2 - 4, tw + 8, th + 8);
        */

        ctx.fillStyle = node.color || '#000';
        ctx.fillText(node.text, node.x, node.y);
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    // Init
    handleResize();
    initNodes();
    draw();

    // Listeners
    window.addEventListener('resize', handleResize);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    const handleMouseLeave = () => {
      mouseRef.current = null;
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default ForceGraph;
