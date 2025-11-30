import React, { useState, useEffect } from 'react';
import { DonationButton } from './DonationButton';
import { Instagram, CheckCircle } from 'lucide-react';

// רכיב ריבוע בודד שמחליף תמונות
const InstagramSquare = ({ images, delay }: { images: string[], delay: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // השהיה התחלתית כדי שהריבועים לא יתחלפו בדיוק באותו זמן
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
      {/* תמונות מתחלפות */}
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

export const JoinUsSection: React.FC = () => {
  // מאגרי תמונות (Placeholders איכותיים המדמים את הפעילות: חיילים, מנגל, חברים, שמחה)
  const feed1 = [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=600&fit=crop", // BBQ
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=600&fit=crop", // Friends
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=600&fit=crop"  // Community
  ];
  
  const feed2 = [
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=600&fit=crop", // People
    "https://images.unsplash.com/photo-1533227297464-94754543d343?w=600&h=600&fit=crop", // Party
    "https://images.unsplash.com/photo-1561489413-985b06da5bee?w=600&h=600&fit=crop"  // Happy
  ];
  
  const feed3 = [
    "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=600&h=600&fit=crop", // Happy Group
    "https://images.unsplash.com/photo-1511632765486-a01980968a0c?w=600&h=600&fit=crop", // Crowd
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"  // Team
  ];
  
  const feed4 = [
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop", // Hug/Friends
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=600&fit=crop", // School/Teaching (volunteering)
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=600&fit=crop"  // Volunteers
  ];

  return (
    <section id="gallery" className="py-16 container mx-auto px-6 max-w-7xl scroll-mt-24">
      {/* Donation CTA */}
      <div className="text-center mb-16 animate-fade-in-up">
        {/* Hugging Hearts Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/535b6f6e779f3deaaee5d4ebfadae88f4f44df76?placeholderIfAbsent=true"
          className="w-64 md:w-80 mx-auto mb-8 object-contain"
          alt="לוגו דקורטיבי"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          הצטרפו אלינו לשמח את הגיבורים
        </h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-6 leading-relaxed">
          כל תרומה, קטנה כגדולה, מאפשרת לנו להמשיך לעטוף את
          החיילים שלנו באהבה. תרמו עכשיו ותהיו חלק מהמעגל הזה.
        </p>
        <DonationButton className="mb-4" />
        <p className="text-sm text-foreground/60 flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-500" />
          תרומה מוכרת לצרכי מס
        </p>
      </div>

      {/* Instagram Grid Section */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-10">
          עקבו אחרינו באינסטגרם
        </h3>
        
        {/* Grid of 4 squares */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
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