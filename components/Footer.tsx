import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/40 py-10 mt-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-foreground/70 text-center md:text-right">
            <p>© 2025 שלישי שמח - כל הזכויות שמורות</p>
            <p className="mt-1">ארגון התנדבותי עצמאי למען חיילים פצועים ושבים מהשבי</p>
          </div>
          <a href="/" className="flex items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5bdd26699dc1b606f917fd79d3a5f75c071ea673?placeholderIfAbsent=true"
              className="w-20 h-20 object-contain"
              alt="שלישי שמח לוגו"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
