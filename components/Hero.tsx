import React from "react";
import { DonationButton } from "./DonationButton";

export const Hero: React.FC = () => {
  const stats = [
    { value: "1.5", label: "שנות פעילות (מאז יוני 2024)" },
    { value: "50+", label: "מתנדבים פעילים" },
    { value: "1000+", label: "חיילים שנעזרו" }
  ];

  return (
    <section className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Content - Right side in RTL */}
        <div className="order-2 lg:order-1 text-right animate-fade-in-up">
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            שלישי שמח לחיילים שלנו!
          </h1>

          {/* כותרת מעוצבת עם פונט נוטו למילה לגיבורים */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0D245E] leading-tight">
              מחזירים אהבה
              <br />
              <span className="font-noto text-5xl md:text-6xl lg:text-7xl mt-2 block">לגיבורים</span>
            </h2>
          </div>

          <DonationButton />

          <div className="mt-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1758672860bd2c6c1895ca0d56ba891739451a94?placeholderIfAbsent=true"
              className="w-full max-w-md"
              alt="תמונה דקורטיבית"
            />
          </div>
        </div>

        {/* Image - Left side in RTL */}
        <div className="order-1 lg:order-2 animate-scale-in">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7d07097ba329151250d867d60152e474b7065c3b?placeholderIfAbsent=true"
            className="w-full rounded-br-[150px] shadow-xl"
            alt="חיילים שמחים"
          />
        </div>
      </div>

      {/* Stats Section with Hover Effect */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#AAD1FB] border border-[#D3DCE7] rounded-xl p-8 text-center transition-all duration-300 hover:bg-[#8Cbef9] hover:shadow-lg hover:-translate-y-1 group cursor-default"
          >
            <div className="text-[#0D245E] text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-[#0D245E] text-xl font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};