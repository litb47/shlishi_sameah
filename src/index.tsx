import React, { useState, useEffect } from 'react';
import { DonationButton } from './DonationButton';
import { Instagram, CheckCircle } from 'lucide-react';

// --------------------------------------------------------
// חלק א: ייבוא התמונות מהתיקייה המקומית
// --------------------------------------------------------

// קבוצה 1: על האש (BBQ)
import bbq1 from '../assets/instagram/bbq1.jpg';
import bbq2 from '../assets/instagram/bbq2.jpg';
import bbq3 from '../assets/instagram/bbq3.jpg';

// קבוצה 2: חברים/קהילה (Friends)
// (הנחתי שהשמות הם friends1, friends2 וכו' לפי הצילום מסך)
import friend1 from '../assets/instagram/friends1.jpg';
import friend2 from '../assets/instagram/friends2.jpg';
import friend3 from '../assets/instagram/friends3.jpg';

// קבוצה 3: חיילים (Soldiers)
import sol1 from '../assets/instagram/sol1.jpg';
import sol2 from '../assets/instagram/sol2.jpg';
import sol3 from '../assets/instagram/sol3.jpg';

// הערה: אם יש לך עוד תמונות לקבוצה 4, תייבא אותן כאן.
// בינתיים יצרתי מיקס מהתמונות הקיימות עבור הריבוע הרביעי.


// --------------------------------------------------------
// חלק ב: רכיב הריבוע (ללא שינוי)
// --------------------------------------------------------
const InstagramSquare = ({ images, delay }: { images: string[], delay: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3500); // החלפה כל 3.5 שניות

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [images.length, delay]);

  return (
    <a
      href="https://www.instagram.com/shlishi_sameach/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-100"
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt="Instagram moment"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* שכבת כהות ואייקון במעבר עכבר */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
        <Instagram className="text-white w-10 h-10 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
      </div>
    </a>
  );
};

// --------------------------------------------------------
// חלק ג: הקומפוננטה הראשית
// --------------------------------------------------------
export const JoinUsSection: React.FC = () => {
  
  // הגדרת המערכים עם המשתנים שייבאנו למעלה
  const feed1 = [bbq1, bbq2, bbq3];
  const feed2 = [friend1, friend2, friend3];
  const feed3 = [sol1, sol2, sol3];
  
  // ריבוע רביעי - מיקס (או שתייבא תמונות נוספות אם יש)
  const feed4 = [friend2, sol1, bbq3]; 

  return (
    <section id="gallery" className="py-16 container mx-auto px-6 max-w-7xl scroll-mt-24">
      {/* Donation CTA */}
      <div className="text-center mb-16 animate-fade-in-up">
        {/* גם את הלוגו מומלץ להחליף לתמונה מקומית אם יש לך */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/535b6f6e779f3deaaee5d4ebfadae88f4f44df76?placeholderIfAbsent=true"
          className="w-64 md:w-80 mx-auto mb-8 object-contain"
          alt="לוגו דקורטיבי"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0D245E] mb-4">
          הצטרפו אלינו לשמח את הגיבורים
        </h2>
        <p className="text-lg text-[#0D245E] max-w-xl mx-auto mb-6 leading-relaxed">
          כל תרומה, קטנה כגדולה, מאפשרת לנו להמשיך לעטוף את
          החיילים שלנו באהבה. תרמו עכשיו ותהיו חלק מהמעגל הזה.
        </p>
        <DonationButton className="mb-4" />
        <p className="text-sm text-[#0D245E] flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-500" />
          תרומה מוכרת לצרכי מס
        </p>
      </div>

      {/* Instagram Grid Section */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#0D245E] mb-10">
          עקבו אחרינו באינסטגרם
        </h3>
        
        {/* Grid of 4 squares */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
          {/* שימוש במשתנים המקומיים */}
          <InstagramSquare images={feed1} delay={0} />
          <InstagramSquare images={feed2} delay={1000} />
          <InstagramSquare images={feed3} delay={2000} />
          <InstagramSquare images={feed4} delay={500} />
        </div>

        {/* Styled Button */}
        <a
          href="https://www.instagram.com/shlishi_sameach/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all transform bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full hover:scale-105 hover:shadow-lg shadow-md"
        >
          <Instagram className="w-6 h-6" />
          עקבו אחרינו באינסטגרם
        </a>
      </div>
    </section>
  );
};
