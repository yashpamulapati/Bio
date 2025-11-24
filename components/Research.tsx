
import React from 'react';
import { RESEARCH } from '../constants';
import { BookOpen, ExternalLink, Lightbulb } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-100">
      <div className="px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10 text-neutral-400">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
            Research & Innovation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Research Summary & Publication Merged */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-200/60 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-light text-neutral-900 mb-6 font-serif italic">
                {RESEARCH.title}
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed font-light mb-8">
                {RESEARCH.summary}
              </p>
            </div>

            {/* Publication Link Section */}
            {RESEARCH.journalUrl && (
              <a 
                href={RESEARCH.journalUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 pt-6 border-t border-neutral-100 transition-colors mt-auto"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-neutral-50 p-3 border border-neutral-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {RESEARCH.journalLogo ? (
                     <img src={RESEARCH.journalLogo} alt="Journal Logo" className="w-full h-full object-contain" />
                  ) : (
                     <BookOpen className="w-6 h-6 text-neutral-400" />
                  )}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    Read Publication
                  </span>
                  <span className="text-xs text-neutral-400 font-light flex items-center gap-1">
                    Construction and Building Materials <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            )}
          </div>

          {/* Card 2: Innovation / Methodology */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-200/60 h-full flex flex-col">
             <div className="flex items-center gap-2 mb-6 text-neutral-900">
                <Lightbulb className="w-5 h-5" />
                <h3 className="text-xl font-medium">
                  {RESEARCH.innovationTitle}
                </h3>
             </div>
            <p className="text-base text-neutral-600 leading-relaxed font-light">
              {RESEARCH.innovationSummary}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
