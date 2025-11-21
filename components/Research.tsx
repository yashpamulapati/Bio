import React from 'react';
import { RESEARCH } from '../constants';
import { BookOpen } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-100">
      <div className="px-6 md:px-20 lg:px-32 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10 text-neutral-400">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]">
            Research & Motivation
          </h2>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200/60">
          <h3 className="text-2xl md:text-3xl font-light text-neutral-900 mb-6 font-serif italic">
            {RESEARCH.title}
          </h3>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
            {RESEARCH.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;