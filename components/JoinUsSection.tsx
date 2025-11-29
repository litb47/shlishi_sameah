import React from 'react';
import { DonationButton } from './DonationButton';
import { Instagram, CheckCircle } from 'lucide-react';

export const JoinUsSection: React.FC = () => {
  return (
    <section className="py-16 container mx-auto px-6 max-w-7xl">
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

      {/* Instagram Section */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-10">
          עקבו אחרינו באינסטגרם
        </h3>
        
        <div className="flex justify-center">
          <a 
            href="https://www.instagram.com/shlishi_sameach/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-1.5 pr-5 pl-1.5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105 duration-300"
            dir="ltr"
          >
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
              <Instagram className="w-8 h-8 md:w-9 md:h-9 text-white" />
            </div>
            <span className="text-white text-xl md:text-2xl font-bold tracking-wide font-sans px-1">
              Follow Us
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};