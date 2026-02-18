
import React from 'react';
import { PROFILE } from '../constants';
import { ArrowDown } from 'lucide-react';
import WavyLines from './WavyLines';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-6">
      
      {/* Wavy lines - bottom half background */}
      <WavyLines
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '30%', zIndex: 1 }}
      />

      {/* Background: gradient + blobs */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/60 via-blue-50/30 to-transparent" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-300/40 blur-[80px] animate-blob mix-blend-multiply" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-200/40 blur-[80px] animate-blob animation-delay-2000 mix-blend-multiply" />
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-200/40 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />
      </div>

      {/* Greeting - Positioned at the top */}
      <div className="absolute top-28 md:top-36 w-full text-center z-10">
        <span className="text-2xl md:text-3xl text-neutral-600 font-light tracking-wide">
          Hello and Welcome
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
            Lead Consultant at Trimble supporting B2B SaaS applications
            <span className="block mt-2">
              Currently managing $1.5M+ ARR
            </span>
          </p>
          
          <p className="text-sm md:text-base text-neutral-500 font-medium tracking-wide uppercase">
            Project & Product Management | Solutions Engineering | Professional Services
          </p>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
         <div className="animate-bounce">
            <ArrowDown className="w-10 h-10 text-neutral-400/80 animate-pulse" />
         </div>
      </div>
      
    </section>
  );
};

export default Hero;
