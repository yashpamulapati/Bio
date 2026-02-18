
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { ExternalLink, ChevronRight } from 'lucide-react';
import WavyLines from './WavyLines';

const subtleRibbons = [
  { baseY: 150, thickness: 40, wavelength: 550, amplitude: 35, speed: 0.15, phase: 0.5, color: 'rgba(210, 210, 215, OPACITY)', opacity: 0.08 },
  { baseY: 140, thickness: 50, wavelength: 480, amplitude: 40, speed: 0.2, phase: 2.0, color: 'rgba(200, 200, 208, OPACITY)', opacity: 0.06 },
  { baseY: 160, thickness: 35, wavelength: 520, amplitude: 30, speed: 0.18, phase: 3.5, color: 'rgba(215, 215, 220, OPACITY)', opacity: 0.07 },
];

const Experience: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);
  const active = EXPERIENCES.find((j) => j.id === activeId) ?? EXPERIENCES[0];

  return (
    <section className="relative py-24 px-6 md:px-20 lg:px-32 max-w-6xl mx-auto overflow-hidden">
      <WavyLines
        ribbons={subtleRibbons}
        className="absolute inset-0"
      />
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-16">
        Experience
      </h2>

      {/* Desktop: side-by-side selector + detail */}
      <div className="hidden md:grid md:grid-cols-[280px_1fr] gap-10">
        {/* Left: company selector tabs */}
        <div className="flex flex-col gap-2">
          {EXPERIENCES.map((job) => {
            const isActive = job.id === activeId;
            return (
              <button
                key={job.id}
                onClick={() => setActiveId(job.id)}
                className={`group relative text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-neutral-700 text-white shadow-lg shadow-neutral-700/10'
                    : 'bg-transparent text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-1 ${
                    isActive ? 'bg-white' : 'bg-neutral-100 group-hover:bg-white'
                  } transition-colors`}>
                    <img
                      src={job.logoUrl}
                      alt={`${job.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold truncate ${isActive ? 'text-white' : ''}`}>
                      {job.company}
                    </p>
                    <p className={`text-xs truncate ${isActive ? 'text-neutral-300' : 'text-neutral-400'}`}>
                      {job.role}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 ml-auto shrink-0 transition-transform duration-300 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: active job detail */}
        <div
          key={active.id}
          className="bg-neutral-100 rounded-2xl border border-neutral-200 p-10 shadow-sm"
          style={{ animation: 'fadeSlideIn 0.35s ease-out' }}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider bg-neutral-50 px-3 py-1.5 rounded-full">
              {active.period}
            </span>
            <a
              href={active.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 transition-colors"
              title={`Visit ${active.company}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <h3 className="text-3xl font-light text-neutral-900 mb-1">
            {active.company}
          </h3>
          <p className="text-lg text-neutral-500 font-medium mb-6">
            {active.role}
          </p>
          <p className="text-neutral-600 leading-relaxed text-[17px] font-light">
            {active.description}
          </p>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-6">
        {EXPERIENCES.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center p-1.5">
                <img
                  src={job.logoUrl}
                  alt={`${job.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-neutral-900">{job.company}</h3>
                <p className="text-sm text-neutral-500">{job.role}</p>
              </div>
              <a
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-neutral-400 hover:text-neutral-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <span className="inline-block text-xs font-semibold text-neutral-400 uppercase tracking-wider bg-neutral-50 px-3 py-1 rounded-full mb-3">
              {job.period}
            </span>
            <p className="text-neutral-600 leading-relaxed text-[15px] font-light">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
