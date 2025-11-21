
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Research from './components/Research';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import { PROFILE } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-neutral-50 selection:bg-neutral-200 selection:text-neutral-900">
      <Header />
      
      <main>
        <Hero />
        <FeaturedProjects />
        <Experience />
        <Research />
        <Contact />
      </main>

      <ChatBot />

      <footer className="bg-neutral-900 text-neutral-600 py-8 text-center text-sm border-t border-neutral-800">
        <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
