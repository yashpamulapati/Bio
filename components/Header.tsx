
import React from 'react';
import { Mail, Github, Linkedin, FolderKanban } from 'lucide-react';
import { SOCIALS } from '../constants';

const IconMap: Record<string, React.FC<{ className?: string }>> = {
  Mail,
  Github,
  Linkedin,
  FolderKanban,
};

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-8 mix-blend-difference text-white pointer-events-none">
      {/* Logo */}
      <a 
        href="#" 
        onClick={scrollToTop}
        className="pointer-events-auto text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity select-none"
      >
        YP.
      </a>

      <nav className="flex gap-6 pointer-events-auto">
        {SOCIALS.map((link) => {
          const Icon = IconMap[link.icon];
          return (
            <a
              key={link.platform}
              href={link.url}
              target={link.platform === 'Contact' ? undefined : '_blank'}
              rel={link.platform === 'Contact' ? undefined : "noopener noreferrer"}
              onClick={(e) => handleNavClick(e, link.url)}
              className="group flex flex-col items-center gap-1 text-neutral-400 hover:text-white transition-colors duration-300"
              aria-label={link.platform}
            >
              {Icon && <Icon className="w-6 h-6" />}
              <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-full mt-1 font-medium">
                {link.platform}
              </span>
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
