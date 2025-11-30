import React from 'react';
import { DonationButton } from './DonationButton';
import { Image as ImageIcon } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'landing' | 'gallery', sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-[#FAF6F6]/80 sticky top-0 z-50 w-full border-b border-gray-200/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 md:px-6 md:py-4 max-w-7xl">
        <div className="flex items-center gap-2 md:gap-10">
          <DonationButton />
          
          {/* תפריט ניווט */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            <button 
              onClick={() => onNavigate('landing', 'story')}
              className="text-foreground/80 hover:text-[#007aff] transition-colors focus:outline-none"
            >
               מי אנחנו
            </button>
            <button 
              onClick={() => onNavigate('landing', 'projects')}
              className="text-foreground/80 hover:text-[#007aff] transition-colors flex items-center gap-2 focus:outline-none"
            >
              הפרויקט
            </button>
            <button 
              onClick={() => onNavigate('gallery')}
              className="text-foreground/80 hover:text-[#007aff] transition-colors focus:outline-none"
            >
           
              גלריה
            </button>
          </nav>
          
          {/* כפתור גלריה למובייל (אייקון בלבד) */}
          <button 
            onClick={() => onNavigate('gallery')}
            className="md:hidden text-foreground/80 hover:text-[#007aff] p-2 focus:outline-none"
          >
            <ImageIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        
        {/* לוגו - לחיצה עליו מחזירה לדף הבית */}
        <button 
          onClick={() => onNavigate('landing')} 
          className="flex items-center focus:outline-none"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5bdd26699dc1b606f917fd79d3a5f75c071ea673?placeholderIfAbsent=true"
            className="w-14 h-14 md:w-24 md:h-24 object-contain"
            alt="שלישי שמח לוגו"
          />
        </button>
      </div>
    </header>
  );
};