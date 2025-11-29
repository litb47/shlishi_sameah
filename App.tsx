import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import { JoinUsSection } from './components/JoinUsSection';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'gallery'>('landing');

  const handleNavigate = (view: 'landing' | 'gallery', sectionId?: string) => {
    setCurrentView(view);

    if (view === 'gallery') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId) {
      // אם אנחנו כבר בדף הבית, נגלול מיד. אם לא, נחכה לרינדור מחדש.
      const delay = currentView === 'landing' ? 0 : 100;
      
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, delay);
    } else {
      // ניווט לראש דף הבית
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F6] font-sans text-gray-900" dir="rtl">
      <Header onNavigate={handleNavigate} />
      <main>
        {currentView === 'landing' ? (
          <>
            <Hero />
            <StorySection />
            <ValuesSection />
            <JoinUsSection />
          </>
        ) : (
          <Gallery />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;