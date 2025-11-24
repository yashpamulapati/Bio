import React from 'react';
import { PROFILE } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-neutral-50 overflow-hidden px-6">
      
      {/* Greeting - Positioned at the top */}
      <div className="absolute top-28 md:top-36 w-full text-center z-10">
        <span className="text-2xl md:text-3xl text-neutral-600 font-light tracking-wide">
          Hello and Welcome!
        </span>
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 space-y-8 pt-20">
        
        {/* Name Block */}
        <div className="space-y-2">
          <span className="text-sm md:text-base text-neutral-500 font-light block mb-2">
            I'm
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900">
            {PROFILE.name}
          </h1>
        </div>

        {/* Bio */}
        <div className="space-y-6 mt-8">
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light max-w-2xl mx-auto">
            Product Consultant at Trimble supporting B2B SaaS products
            <span className="block mt-2">
              Currently managing $1.5M+ ARR
            </span>
          </p>
          
          <p className="text-sm md:text-base text-neutral-500 font-medium tracking-wide uppercase">
            Product Management | Solutions Engineering | Implementations
          </p>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-400">
        <ArrowDown className="w-6 h-6" />
      </div>
      
    </section>
  );
};

export default Hero;