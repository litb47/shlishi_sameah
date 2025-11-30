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
    <div className="min-h-screen bg-[#FAF6F6] font-sans text-gray-900" dir="rtl">
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero />
        <StorySection />
        <ValuesSection />
        {/* This section now has id="gallery" for navigation */}
        <JoinUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;