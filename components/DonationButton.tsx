import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Heart, X } from 'lucide-react';

interface DonationButtonProps {
  className?: string;
  onClick?: () => void;
}

export const DonationButton: React.FC<DonationButtonProps> = ({ className = "", onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    if (onClick) {
      onClick();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* הכפתור הראשי */}
      <button
        onClick={handleClick}
        className={`inline-flex items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-5 md:py-2.5 text-sm md:text-lg font-semibold text-white bg-[#007aff] rounded-full hover:bg-blue-600 hover:scale-105 transition-all shadow-md hover:shadow-lg ${className}`}
      >
        <Heart className="w-4 h-4 md:w-5 md:h-5 fill-current" />
        <span>לתרומה באהבה</span>
      </button>

      {/* פופ-אפ */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] h-screen w-screen flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            dir="rtl"
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-200">
              {/* כפתור סגירה */}
              <button
                onClick={handleClose}
                className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>

              {/* כותרת */}
              <div className="pt-8 pb-4 px-8 text-right">
                <h2 className="text-2xl font-bold text-[#0f172a]">פרטי להעברה בנקאית</h2>
              </div>

              {/* תוכן - רשימה מסודרת וצמודה */}
              <div className="px-8 pb-6 space-y-4">
                {/* שורה 1 */}
                <div className="flex flex-col items-start gap-1 text-right border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm font-medium">בנק:</span>
                  <span className="text-[#0f172a] font-bold text-xl">בנק הפועלים</span>
                </div>

                {/* שורה 2 */}
                <div className="flex flex-col items-start gap-1 text-right border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm font-medium">סניף:</span>
                  <span className="text-[#0f172a] font-bold text-xl">532</span>
                </div>

                {/* שורה 3 */}
                <div className="flex flex-col items-start gap-1 text-right border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm font-medium">חשבון:</span>
                  <span className="text-[#0f172a] font-bold text-xl">572386</span>
                </div>

                {/* שורה 4 */}
                <div className="flex flex-col items-start gap-1 text-right border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm font-medium">שם המוטב:</span>
                  <span className="text-[#0f172a] font-bold text-xl">עמותת נכה לא חצי בן אדם</span>
                </div>
              </div>

              {/* הערה למטה */}
              <div className="px-8 pb-8">
                <div className="bg-[#e0fbfd] rounded-xl p-4 flex items-start gap-3 border-r-4 border-orange-400">
                  <Heart className="w-5 h-5 text-blue-500 fill-blue-500 shrink-0 mt-1" />
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    התרומה מוכרת לצרכי מס ומתבצעת עבור 'ארגון שלישי שמח' דרך עמותת 'נכה לא חצי בן אדם'
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};