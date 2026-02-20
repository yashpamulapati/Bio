
import React from 'react';
import { TOOLS } from '../constants';

const ToolsTicker: React.FC = () => {
  // Double the list to create seamless loop
  const seamlessTools = [...TOOLS, ...TOOLS];

  return (
    <section className="bg-neutral-100 border-t border-b border-neutral-200 overflow-hidden py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6 md:px-20 lg:px-32">
        
        {/* Static Title */}
        <div className="shrink-0 z-10 bg-neutral-100 md:pr-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-500 whitespace-nowrap">
            My Toolkit
          </h3>
        </div>

        {/* Marquee Container */}
        <div className="relative flex-1 overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex w-max animate-scroll gap-16 items-center">
            {seamlessTools.map((tool, index) => (
              <a
                key={`${tool.name}-${index}`}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                title={tool.name}
              >
                <img 
                  src={tool.logoUrl} 
                  alt={`${tool.name} logo`} 
                  className="h-10 w-auto object-contain max-w-[150px]"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ToolsTicker;
