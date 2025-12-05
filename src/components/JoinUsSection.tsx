import React from 'react';
import { DonationButton } from './DonationButton';
import { Instagram, CheckCircle } from 'lucide-react';

// --------------------------------------------------------
// קומפוננטה פשוטה - תמונה בודדת ללא אנימציה
// --------------------------------------------------------
const SimpleImageBox = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md bg-gray-200">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          console.error('Failed to load:', src);
          e.currentTarget.style.backgroundColor = '#f3f4f6';
        }}
      />
    </div>
  );
};

// --------------------------------------------------------
// הקומפוננטה הראשית
// --------------------------------------------------------
export const JoinUsSection: React.FC = () => {
  
  return (
    <section id="gallery" className="py-16 container mx-auto px-6 max-w-7xl scroll-mt-24">
      {/* Donation CTA */}
      <div className="text-center mb-16 animate-fade-in-up">
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
        
        {/* Grid של 4 ריבועים - תמונה סטטית בכל אחד */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
            <SimpleImageBox src={`${import.meta.env.BASE_URL}instagram/bbq1.jpg`} alt="BBQ" />
            <SimpleImageBox src={`${import.meta.env.BASE_URL}instagram/friends1.jpg`} alt="Friends" />
            <SimpleImageBox src={`${import.meta.env.BASE_URL}instagram/sol1.jpg`} alt="Soldiers" />
            <SimpleImageBox src={`${import.meta.env.BASE_URL}instagram/bbq2.jpg`} alt="BBQ 2" />
        </div>

        {/* כפתור אינסטגרם */}
        
        
         <a href="https://www.instagram.com/shlishi_sameach/"
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
