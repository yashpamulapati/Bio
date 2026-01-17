
import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../constants';
import { Plus } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  // Show only first 2 real projects, 3rd slot is the placeholder
  const projectsToShow = FEATURED_PROJECTS.slice(0, 2);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section id="projects" className="bg-neutral-600 py-20 px-6 md:px-20 lg:px-32 text-neutral-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 border-b border-neutral-500/50 pb-6">
          <h2 className="text-3xl font-light text-white">
            Assets Under Construction
          </h2>
        </div>

        {/* Grid - 3 Rectangles Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Real Projects */}
          {projectsToShow.map((project) => {
            const isLink = !!project.link;
            const CardTag = isLink ? 'a' : 'div';
            const cardProps = isLink ? {
              href: project.link,
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {};

            return (
              <CardTag 
                key={project.id} 
                {...cardProps}
                className={`group relative overflow-hidden bg-neutral-900/30 border border-neutral-500/50 rounded-lg p-6 hover:bg-neutral-800 hover:border-neutral-400 transition-all duration-300 flex flex-col h-full ${isLink ? 'cursor-pointer block' : ''}`}
              >
                {/* Background Image Logic */}
                {project.coverImage && (
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                  </div>
                )}

                {/* Content Wrapper - z-10 to sit on top of background */}
                <div className="relative z-10 flex flex-col h-full">
                  {project.imageUrl && (
                    <div className="mb-5 h-32 w-full bg-white rounded-md overflow-hidden flex items-center justify-center p-2">
                       <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-contain" 
                       />
                    </div>
                  )}

                  <div className="mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${project.coverImage ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                      {project.category}
                    </span>
                    <h3 className="text-lg font-medium text-white mt-2 group-hover:text-neutral-100">
                      {project.title}
                    </h3>
                  </div>

                  <p className={`text-sm leading-relaxed mb-6 font-light line-clamp-4 flex-grow ${project.coverImage ? 'text-neutral-200' : 'text-neutral-300'}`}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 mt-auto pt-4 ${project.coverImage ? 'border-neutral-500/50' : 'border-neutral-600/50'} border-t`}>
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`px-2 py-1 text-[10px] uppercase tracking-wide rounded border transition-colors ${
                          project.coverImage 
                            ? 'bg-black/50 text-neutral-300 border-neutral-500 group-hover:border-neutral-300' 
                            : 'bg-neutral-800/50 text-neutral-300 border-neutral-600 group-hover:border-neutral-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardTag>
            );
          })}

          {/* 3rd Card: Interactive Placeholder */}
          <button
            onClick={() => setIsClicked(!isClicked)}
            className="group bg-neutral-900/20 border border-neutral-500/50 border-dashed rounded-lg p-6 hover:bg-neutral-800 hover:border-neutral-400 transition-all duration-300 flex flex-col h-full items-center justify-center cursor-pointer min-h-[250px] focus:outline-none"
          >
            {isClicked ? (
              <span className="text-neutral-300 font-light text-lg animate-in fade-in zoom-in duration-300 text-center">
                More Projects <br /> Coming Soon
              </span>
            ) : (
              <Plus className="w-12 h-12 text-neutral-500 group-hover:text-neutral-300 transition-colors duration-300" />
            )}
          </button>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
