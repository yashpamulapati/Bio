import React from 'react';
import { EXPERIENCES } from '../constants';
import { ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-32 max-w-5xl mx-auto bg-neutral-50">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-20">
        Experience
      </h2>
      
      <div className="space-y-20">
        {EXPERIENCES.map((job) => (
          <div key={job.id} className="group relative border-l border-neutral-200 pl-8 md:pl-12 py-1 transition-all duration-500 hover:border-neutral-400">
            {/* Period Badge */}
            <span className="inline-block text-xs font-semibold text-neutral-500 mb-3 uppercase tracking-wide bg-neutral-100 px-3 py-1 rounded-md">
              {job.period}
            </span>

            <div className="flex flex-col md:flex-row md:items-start gap-8 mt-4">
              {/* Company Icon / Link */}
              <a 
                href={job.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 relative block"
                title={`Visit ${job.company}`}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-md hover:scale-105 transition-all duration-300 bg-white flex items-center justify-center grayscale group-hover:grayscale-0">
                  <img 
                    src={job.logoUrl} 
                    alt={`${job.company} logo`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {job.company}
                  </h3>
                  <p className="text-lg text-neutral-500 font-medium mt-1">
                    {job.role}
                  </p>
                </div>
                <p className="text-neutral-600 leading-relaxed text-lg font-light max-w-3xl">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;