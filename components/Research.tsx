
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Research Summary */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-200/60 h-full flex flex-col">
            <h3 className="text-2xl font-light text-neutral-900 mb-6 font-serif italic">
              {RESEARCH.title}
            </h3>
            <p className="text-base text-neutral-600 leading-relaxed font-light">
              {RESEARCH.summary}
            </p>
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

          {/* Card 3: Journal Link */}
          {RESEARCH.journalUrl && (
            <a 
              href={RESEARCH.journalUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-200/60 h-full flex flex-col items-center justify-center text-center hover:border-neutral-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-20 h-20 mb-6 rounded-xl bg-neutral-50 p-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {RESEARCH.journalLogo ? (
                   <img src={RESEARCH.journalLogo} alt="Journal Logo" className="w-full h-full object-contain" />
                ) : (
                   <BookOpen className="w-8 h-8 text-neutral-400" />
                )}
              </div>
              
              <h4 className="text-lg font-medium text-neutral-900 mb-2">
                Read Publication
              </h4>
              <p className="text-sm text-neutral-500 font-light mb-6">
                Construction and Building Materials
              </p>
              
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-neutral-600">
                View on ScienceDirect <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Research;
