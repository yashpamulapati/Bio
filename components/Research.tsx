
import React from 'react';
import { RESEARCH } from '../constants';
import { BookOpen, ExternalLink, Lightbulb, GraduationCap } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-100">
      <div className="px-6 md:px-20 lg:px-32 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-10 text-neutral-400">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
            Education, Research, & Transition
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Education */}
          <div className="relative overflow-hidden bg-white text-neutral-900 p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-200 h-full flex flex-col min-h-[400px] group">
             {/* Background Image */}
             <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2000&auto=format&fit=crop" 
                 alt="Graduation Cap and Diploma" 
                 className="w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
             </div>
             
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8 text-neutral-900">
                    <div className="p-2 bg-white/90 rounded-lg border border-neutral-200 backdrop-blur-sm shadow-sm">
                      <GraduationCap className="w-5 h-5 text-neutral-700" />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight">Education</h3>
                </div>

                <div className="space-y-8 flex-grow">
                    <div className="relative pl-4 border-l-2 border-neutral-300/50">
                        <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-neutral-600"></span>
                        <h4 className="text-lg font-medium text-neutral-900 leading-tight">Master of Science</h4>
                        <p className="text-sm text-neutral-600 font-light mt-1">Civil Engineering</p>
                        <p className="text-xs text-neutral-500 mt-2 uppercase tracking-wider font-medium">Specialized in Transportation</p>
                        <p className="text-sm text-neutral-700 mt-2 font-medium">Louisiana State University</p>
                    </div>

                    <div className="relative pl-4 border-l-2 border-neutral-300/50">
                         <span className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-neutral-400"></span>
                        <h4 className="text-lg font-medium text-neutral-900 leading-tight">Bachelor of Technology</h4>
                        <p className="text-sm text-neutral-600 font-light mt-1">Civil Engineering</p>
                    </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-neutral-100 text-xs text-neutral-400 font-mono flex justify-between items-center">
                  <span>ACADEMIC FOUNDATION</span>
                </div>
            </div>
          </div>

          {/* Card 2: Research Summary */}
          <div className="relative overflow-hidden bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-200/60 h-full flex flex-col justify-between min-h-[400px] group">
            {/* Background Image: Aerial Highway Interchange */}
            <div className="absolute inset-0 z-0">
               <img 
                 src="https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=2000&auto=format&fit=crop" 
                 alt="Highway Interchange" 
                 className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 grayscale"
               />
               <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-60" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div>
                <div className="flex items-center gap-2 mb-6 text-neutral-900">
                   <div className="p-2 bg-white/90 rounded-lg border border-neutral-200/50 backdrop-blur-md shadow-sm">
                      <BookOpen className="w-5 h-5 text-neutral-700" />
                   </div>
                   <h3 className="text-xl font-medium">Research</h3>
                </div>

                <h3 className="text-xl font-light text-neutral-900 mb-4 font-serif italic relative z-10">
                  "{RESEARCH.title}"
                </h3>
                <p className="text-sm md:text-base text-neutral-800 leading-relaxed font-light mb-8 relative z-10 font-medium">
                  {RESEARCH.summary}
                </p>
              </div>

              {/* Publication Link Section */}
              {RESEARCH.journalUrl && (
                <a 
                  href={RESEARCH.journalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-4 pt-6 border-t border-neutral-900/10 transition-colors mt-auto relative z-10"
                >
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-white p-2 border border-neutral-200 flex items-center justify-center group-hover/link:scale-105 transition-transform duration-300 shadow-sm">
                    {RESEARCH.journalLogo ? (
                       <img src={RESEARCH.journalLogo} alt="Journal Logo" className="w-full h-full object-contain" />
                    ) : (
                       <BookOpen className="w-5 h-5 text-neutral-500" />
                    )}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-neutral-900 group-hover/link:text-neutral-700 transition-colors">
                      Read Publication
                    </span>
                    <span className="text-xs text-neutral-600 font-light flex items-center gap-1">
                      Construction and Building Materials <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Card 3: Innovation / Methodology */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-neutral-200/60 h-full flex flex-col min-h-[400px]">
             <div className="flex items-center gap-2 mb-6 text-neutral-900">
                <div className="p-2 bg-neutral-50 rounded-lg border border-neutral-100">
                  <Lightbulb className="w-5 h-5 text-neutral-600" />
                </div>
                <h3 className="text-xl font-medium">
                  {RESEARCH.innovationTitle}
                </h3>
             </div>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-light flex-grow">
              {RESEARCH.innovationSummary}
            </p>
            
            <div className="mt-8 pt-6 border-t border-neutral-100">
               <div className="flex gap-2">
                 <span className="px-3 py-1 bg-neutral-100 text-neutral-500 text-[10px] uppercase tracking-wide rounded-full font-medium">Analysis</span>
                 <span className="px-3 py-1 bg-neutral-100 text-neutral-500 text-[10px] uppercase tracking-wide rounded-full font-medium">Problem Solving</span>
                 <span className="px-3 py-1 bg-neutral-100 text-neutral-500 text-[10px] uppercase tracking-wide rounded-full font-medium">Scalability</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
