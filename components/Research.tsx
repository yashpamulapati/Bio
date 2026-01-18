
import React from 'react';
import { RESEARCH } from '../constants';
import { BookOpen, ExternalLink, Lightbulb, GraduationCap } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-200 border-t border-neutral-300">
      <div className="px-6 md:px-20 lg:px-32 max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10 text-neutral-500">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
            Education & Research
          </h2>
        </div>

        {/* Grid layout - Education takes less width (1/5) vs others (2/5) on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* 1. Education Card - Narrower */}
          <div className="lg:col-span-1 bg-white relative p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
            
            <div className="relative z-10 h-full flex flex-col">
               <div className="mb-4 p-2 bg-neutral-50/80 backdrop-blur-sm w-fit rounded-lg border border-neutral-100">
                <GraduationCap className="w-5 h-5 text-neutral-600" />
               </div>
              
              <div className="flex flex-col gap-6">
                {/* Masters */}
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 leading-tight">
                    Master of Science
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Civil Engineering
                  </p>
                  <p className="text-xs text-neutral-400 italic mb-2">
                    Specialization in Transportation
                  </p>
                  <p className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                    Louisiana State University
                  </p>
                </div>

                {/* Bachelors */}
                <div className="pt-4 border-t border-neutral-100">
                  <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                    Bachelor of Technology
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Civil Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Research Card (2/5 width) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Thesis & Publication
              </span>
              <h3 className="text-xl font-medium text-neutral-900 mt-2">
                {RESEARCH.title}
              </h3>
            </div>

            <p className="text-neutral-600 leading-relaxed font-light text-sm mb-4">
              {RESEARCH.summary}
            </p>
            
            <p className="text-neutral-600 leading-relaxed font-light text-sm mb-6 border-l-2 border-amber-400 pl-3 italic">
               Won travel award from LSU to Present paper in 96th TRB Annual meeting as first author and published an article in the Elsevier journal Construction and Building Materials.
            </p>

            {RESEARCH.journalUrl && (
              <a 
                href={RESEARCH.journalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors mt-auto group"
              >
                {RESEARCH.journalLogo && (
                  <img src={RESEARCH.journalLogo} alt="Elsevier Logo" className="w-5 h-5 object-contain" />
                )}
                Read Publication
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </div>

          {/* 3. Innovation/Transition Card (2/5 width) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
             
             <div className="mb-6">
               <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-neutral-100 rounded-md">
                    <Lightbulb className="w-4 h-4 text-neutral-500" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Career Pivot
                  </span>
               </div>
               <h3 className="text-xl font-medium text-neutral-900 mt-2">
                 {RESEARCH.innovationTitle}
               </h3>
             </div>
             
             <p className="text-neutral-600 leading-relaxed font-light text-sm">
               {RESEARCH.innovationSummary}
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
