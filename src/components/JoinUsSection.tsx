import React from 'react';
import { DonationButton } from './DonationButton';
import { Instagram, CheckCircle } from 'lucide-react';

const SimpleImageBox = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md bg-gray-200">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export const JoinUsSection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 container mx-auto px-6 max-w-7xl scroll-mt-24">
      {/* Donation CTA – בדיוק כמו קודם, רק בלי לגעת בעיצוב */}
      <div className="text-center mb-16">
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

      {/* Grid של 4 תמונות מה-public/instagram */}
      <div className="text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
          <SimpleImageBox src="/instagram/bbq1.jpg" alt="BBQ" />
          <SimpleImageBox src="/instagram/friends1.jpg" alt="Friends" />
          <SimpleImageBox src="/instagram/sol1.jpg" alt="Soldiers" />
          <SimpleImageBox src="/instagram/bbq2.jpg" alt="BBQ 2" />
        </div>

        {/* כפתור אינסטגרם – פעם אחת בלבד */}
        <a
          href="https://www.instagram.com/shlishi_sameach/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white rounded-full"
        >
          <Instagram className="w-6 h-6" />
          עקבו אחרינו באינסטגרם
        </a>
      </div>
    </section>
  );
};

export default JoinUsSection;
