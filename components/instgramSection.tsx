import React from 'react';
import { DonationButton } from './DonationButton';
import { Instagram, CheckCircle } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const instagramPosts = Array(4).fill(null);

  return (
    <section className="py-16 container mx-auto px-6 max-w-7xl">
      {/* Donation CTA */}
      <div className="text-center mb-16 animate-fade-in-up">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/535b6f6e779f3deaaee5d4ebfadae88f4f44df76?placeholderIfAbsent=true"
          className="w-64 md:w-80 mx-auto mb-8"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {instagramPosts.map((_, index) => (
            <a 
              key={index}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-8 flex items-center justify-center aspect-square hover-lift shadow-sm border border-border/50"
            >
              <Instagram className="w-16 h-16 text-primary/60" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
