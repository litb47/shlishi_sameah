import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import { JoinUsSection } from './components/JoinUsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const handleNavigate = (_view: 'landing' | 'gallery', sectionId?: string) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F6] font-sans text-[#0D245E]" dir="rtl">
      <Header onNavigate={handleNavigate} />
      <main>
        {/* עטיפת הרקע כמו שהייתה */}
        <div className="relative bg-[#f3f4f6] overflow-hidden">
          <div
            className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-60 -translate-x-1/3 -translate-y-1/3 pointer-events-none z-0"
          />
          <div
            className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-60 translate-x-1/3 translate-y-1/3 pointer-events-none z-0"
          />

          <div className="relative z-10">
            <StorySection />
            <Hero />           {/* ← עכשיו Hero בדיוק אחרי StorySection */}
            <ValuesSection />
            <JoinUsSection />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
