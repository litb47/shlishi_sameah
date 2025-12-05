import React from 'react';
import { DonationButton } from './DonationButton';
import { Instagram, CheckCircle } from 'lucide-react';

// ייבוא תמונות כמודולים
import bbq1 from '../assets/instagram/bbq1.jpg';
import bbq2 from '../assets/instagram/bbq2.jpg';
import friends1 from '../assets/instagram/friends1.jpg';
import sol1 from '../assets/instagram/sol1.jpg';

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

export const JoinUsSection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 container mx-auto px-6 max-w-7xl scroll-mt-24">
      {/* ... שאר הקוד שלך ללא שינוי ... */}

      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#0D245E] mb-10">
          עקבו אחרינו באינסטגרם
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
          <SimpleImageBox src={bbq1} alt="BBQ" />
          <SimpleImageBox src={friends1} alt="Friends" />
          <SimpleImageBox src={sol1} alt="Soldiers" />
          <SimpleImageBox src={bbq2} alt="BBQ 2" />
        </div>

        {/* כפתור אינסטגרם נשאר כמו שהוא */}
      </div>
    </section>
  );
};
