
import React from 'react';
import { RESEARCH } from '../constants';
import { BookOpen, ExternalLink } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-100">
      <div className="px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10 text-neutral-400">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
            Research & Motivation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Research Summary */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/60 h-full">
            <h3 className="text-2xl md:text-3xl font-light text-neutral-900 mb-6 font-serif italic">
              {RESEARCH.title}
            </h3>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
              {RESEARCH.summary}
            </p>
          </div>

          {/* Card 2: Journal Link */}
          {RESEARCH.journalUrl && (
            <a 
              href={RESEARCH.journalUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/60 h-full flex flex-col items-center justify-center text-center hover:border-neutral-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-24 h-24 mb-8 rounded-xl bg-neutral-50 p-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {RESEARCH.journalLogo ? (
                   <img src={RESEARCH.journalLogo} alt="Journal Logo" className="w-full h-full object-contain" />
                ) : (
                   <BookOpen className="w-10 h-10 text-neutral-400" />
                )}
              </div>
              
              <h4 className="text-xl md:text-2xl font-medium text-neutral-900 mb-2">
                Read Full Publication
              </h4>
              <p className="text-neutral-500 font-light mb-6">
                Construction and Building Materials
              </p>
              
              <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-neutral-900 group-hover:text-neutral-600">
                View on ScienceDirect <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Research;
