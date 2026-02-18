
import React, { useEffect, useRef, useState } from 'react';
import { PROFILE } from '../constants';
import { ArrowDown } from 'lucide-react';
import ConstructionScene from './ConstructionScene';

const roles = [
  'Product Management',
  'Solutions Engineering',
  'Professional Services',
  'Project Management',
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const targetPos = useRef({ x: 0.5, y: 0.5 });
  const [revealed, setRevealed] = useState(false);

  // Smooth mouse tracking for gradient
  useEffect(() => {
    let rafId: number;
    const handleMove = (e: MouseEvent) => {
      targetPos.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    const animate = () => {
      setMousePos(prev => ({
        x: prev.x + (targetPos.current.x - prev.x) * 0.04,
        y: prev.y + (targetPos.current.y - prev.y) * 0.04,
      }));
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 120;

    if (!isDeleting && displayText === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? current.substring(0, displayText.length - 1)
          : current.substring(0, displayText.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Staggered reveal on mount
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      
      {/* Construction scene - bottom */}
      <ConstructionScene />

      {/* Background: gradient + blobs */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/60 via-blue-50/30 to-transparent" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-300/40 blur-[80px] animate-blob mix-blend-multiply" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-200/40 blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-200/40 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />
      </div>

      {/* Mouse-reactive glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-[5] transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            ellipse 40% 40% at ${mousePos.x * 100}% ${mousePos.y * 100}%,
            rgba(148, 163, 184, 0.08) 0%,
            transparent 60%
          )`,
        }}
      />

      {/* Greeting */}
      <div
        className={`absolute top-28 md:top-36 w-full text-center z-10 transition-all duration-700 ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span className="text-2xl md:text-3xl text-neutral-600 font-light tracking-wide">
          Hello and Welcome
        </span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 space-y-8 pt-20">
        
        {/* Name */}
        <div
          className={`space-y-2 transition-all duration-700 delay-200 ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-sm md:text-base text-neutral-500 font-light block mb-2">
            I'm
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900">
            {PROFILE.name}
          </h1>
        </div>

        {/* Bio */}
        <div
          className={`space-y-6 mt-8 transition-all duration-700 delay-[400ms] ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto">
            Lead Consultant at Trimble supporting B2B SaaS applications
            <span className="block mt-2">
              Currently managing $1.5M+ ARR
            </span>
          </p>
          
          {/* Typewriter role */}
          <div className="h-8 flex items-center justify-center">
            <p className="text-sm md:text-base text-neutral-500 font-medium tracking-wide uppercase">
              {displayText}
              <span className="inline-block w-[2px] h-4 bg-neutral-400 ml-0.5 align-middle hero-cursor" />
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-28 transition-all duration-700 delay-[600ms] ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#projects"
            className="group px-16 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-2 text-neutral-700 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(187, 247, 208, 0.45) 0%, rgba(220, 252, 231, 0.35) 50%, rgba(187, 247, 208, 0.25) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(187, 247, 208, 0.5)',
              boxShadow: '0 2px 16px rgba(187, 247, 208, 0.15), inset 0 1px 0 rgba(255,255,255,0.5)',
            }}
          >
            View Work
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="px-16 py-3.5 text-sm font-medium rounded-xl transition-all duration-300 text-neutral-600 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 212, 216, 0.35) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(212, 212, 216, 0.2) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(212, 212, 216, 0.45)',
              boxShadow: '0 2px 16px rgba(161, 161, 170, 0.1), inset 0 1px 0 rgba(255,255,255,0.5)',
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;
