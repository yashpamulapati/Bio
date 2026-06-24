
import React from 'react';
import { Trophy, Mic, Presentation, CalendarClock, BookOpen, Award } from 'lucide-react';
import { RECOGNITIONS } from '../constants';
import { Recognition } from '../types';

const IconMap: Record<string, React.FC<{ className?: string }>> = {
  Trophy,
  Mic,
  Presentation,
  CalendarClock,
  BookOpen,
};

const Pill: React.FC<{ item: Recognition }> = ({ item }) => {
  const Icon = IconMap[item.icon] ?? Award;
  const content = (
    <>
      <Icon className="w-4 h-4 text-neutral-400 shrink-0" />
      <span className="text-sm font-medium text-neutral-700">{item.label}</span>
      <span className="text-xs text-neutral-400">{item.detail}</span>
    </>
  );

  const baseClass =
    'group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-neutral-200 whitespace-nowrap transition-all duration-300 hover:border-neutral-300 hover:shadow-sm';

  if (item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        title={`${item.label} — ${item.detail}`}
      >
        {content}
      </a>
    );
  }

  return <div className={baseClass}>{content}</div>;
};

const Recognitions: React.FC = () => {
  // Double the list to create a seamless loop
  const seamless = [...RECOGNITIONS, ...RECOGNITIONS];

  return (
    <section className="bg-neutral-100 border-b border-neutral-200 overflow-hidden py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6 md:px-20 lg:px-32">

        {/* Static Title */}
        <div className="shrink-0 z-10 bg-neutral-100 md:pr-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-500 whitespace-nowrap">
            Recognitions
          </h3>
        </div>

        {/* Marquee Container - scrolls opposite direction to My Toolkit */}
        <div className="relative flex-1 overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex w-max animate-scroll-reverse gap-6 items-center">
            {seamless.map((item, index) => (
              <Pill key={`${item.label}-${index}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Recognitions;
