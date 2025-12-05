import React from 'react';
import { DonationButton } from './DonationButton';
import { Instagram, CheckCircle } from 'lucide-react';
import bbq1 from '../assets/instagram/bbq1.jpg';
import bbq2 from '../assets/instagram/bbq2.jpg';
import friends1 from '../assets/instagram/friends1.jpg';
import sol1 from '../assets/instagram/sol1.jpg';

const SimpleImageBox = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-md bg-gray-200">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export const JoinUsSection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 container mx-auto px-6 max-w-7xl scroll-mt-24">
      {/* Donation CTA */}
      <div className="text-center mb-16">
        {/* כאן תחזיר את כל ה־CTA המקורי שהיה לך (לוגו, כותרת, טקסט וכו') */}
        <DonationButton className="mb-4" />
        <p className="text-sm text-[#0D245E] flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-500" />
          תרומה מוכרת לצרכי מס
        </p>
      </div>

      {/* Grid */}
      <div className="text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
          <SimpleImageBox src={bbq1} alt="BBQ" />
          <SimpleImageBox src={friends1} alt="Friends" />
          <SimpleImageBox src={sol1} alt="Soldiers" />
          <SimpleImageBox src={bbq2} alt="BBQ 2" />
        </div>

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
