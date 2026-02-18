
import React from 'react';
import { FEATURED_PROJECTS } from '../constants';
import { BlueprintBg } from './SectionConstructionBgs';

const FeaturedProjects: React.FC = () => {
  // Show only first 2 real projects, 3rd slot is the placeholder
  const projectsToShow = FEATURED_PROJECTS.slice(0, 2);

  return (
    <section id="projects" className="relative bg-neutral-800 py-20 px-6 md:px-20 lg:px-32 text-white overflow-hidden">
      <BlueprintBg />
      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 border-b border-neutral-700 pb-6">
          <h2 className="text-3xl font-light text-white">
            Beyond the 9-to-5
          </h2>
        </div>

        {/* Grid - Adjusted for larger project cards and narrower placeholder */}
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
            const hasCover = !!project.coverImage;

            return (
              <CardTag 
                key={project.id} 
                {...cardProps}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 flex flex-col h-full bg-neutral-900 ${
                    isLink ? 'cursor-pointer block' : ''
                } ${
                    hasCover 
                    ? 'shadow-sm hover:shadow-xl' 
                    : 'border border-neutral-700 shadow-sm hover:shadow-xl hover:border-neutral-600'
                }`}
              >
                {/* Background Image Logic */}
                {hasCover && (
                  <div className="absolute inset-0 z-0 bg-neutral-900">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
                    />
                    {/* Gradient Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                  </div>
                )}

                {/* Content Wrapper - z-10 to sit on top of background */}
                <div className="relative z-10 flex flex-col h-full">
                  {project.imageUrl && (
                    <div className="mb-5 h-32 w-full bg-white rounded-xl overflow-hidden flex items-center justify-center p-4 shadow-sm border border-neutral-100">
                       <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-contain" 
                       />
                    </div>
                  )}

                  <div className="mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                        hasCover ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-500'
                    }`}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-medium mt-2 text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className={`text-base leading-relaxed mb-6 font-light line-clamp-4 flex-grow ${
                      hasCover ? 'text-neutral-200' : 'text-neutral-400'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className={`flex flex-wrap gap-2 mt-auto pt-4 border-t ${
                      hasCover ? 'border-white/20' : 'border-neutral-800'
                  }`}>
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`px-2 py-1 text-[10px] uppercase tracking-wide rounded border transition-colors ${
                          hasCover 
                            ? 'bg-black/40 text-neutral-300 border-white/20 group-hover:border-white/50' 
                            : 'bg-neutral-800 text-neutral-400 border-neutral-700 group-hover:border-neutral-600'
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

          {/* Hobbies & Lifestyle Card */}
          <div className="group relative overflow-hidden rounded-2xl p-6 flex flex-col h-full bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 z-0 bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop"
                alt="Hobbies & Fun Time"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-white transition-colors">
                  Lifestyle
                </span>
                <h3 className="text-2xl font-medium mt-2 text-white">
                  Hobbies & Fun Time
                </h3>
              </div>
              <p className="text-base leading-relaxed mb-6 font-light text-neutral-200 flex-grow">
                Exploring new cities, trying new foods, hiking trails, and dancing — previously performed at university cultural events across Louisiana.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/20">
                {['Travel', 'Hiking', 'Dancing', 'Food'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] uppercase tracking-wide rounded border bg-black/40 text-neutral-300 border-white/20 group-hover:border-white/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
