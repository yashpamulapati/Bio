import React from 'react';
import { PROFILE } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col bg-neutral-50 overflow-hidden">
      
      {/* Centered Top Greeting */}
      <div className="w-full flex justify-center pt-32 z-10">
        <span className="text-lg md:text-xl text-neutral-600 font-light text-center px-4">
          Hello and Welcome!
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20 lg:px-32 flex flex-col justify-center flex-1 items-center text-center">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-neutral-600 font-light mb-2">
            I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-neutral-900 mb-8">
            {PROFILE.name}
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto">
            {PROFILE.shortBio}
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-400 z-20">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;