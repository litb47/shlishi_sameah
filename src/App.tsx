import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import { JoinUsSection } from './components/JoinUsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Navigation handler - simply scrolls to the section ID or top of page
  const handleNavigate = (_view: 'landing' | 'gallery', sectionId?: string) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to top if no section specified (clicking Logo)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F6] font-sans text-[#0D245E]" dir="rtl">
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero />
        
        {/* Ambient Glow Background Wrapper */}
        <div className="relative bg-[#f3f4f6] overflow-hidden">
          
          {/* Top-Left Glow: Responsive size (smaller on mobile) */}
          <div 
            className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-60 -translate-x-1/3 -translate-y-1/3 pointer-events-none z-0"
          ></div>

          {/* Bottom-Right Glow: Responsive size (smaller on mobile) */}
          <div 
            className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-60 translate-x-1/3 translate-y-1/3 pointer-events-none z-0"
          ></div>

          {/* Content Container - z-10 ensures content sits above the background orbs */}
          <div className="relative z-10">
            <StorySection />
            <ValuesSection />
            {/* This section now has id="gallery" for navigation */}
            <JoinUsSection />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

