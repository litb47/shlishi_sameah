import React from "react";

export const Hero: React.FC = () => {
  // בדיקה
  React.useEffect(() => {
    console.log('Available fonts:', document.fonts);
  }, []);

  const stats = [
    { value: "1.5", label: "שנות פעילות (מאז יוני 2024)" },
    { value: "50+", label: "מתנדבים פעילים" },
    { value: "1000+", label: "חיילים שנעזרו" }
  ];

  return (
    <section className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* צד ימין - טקסט */}
        <div className="order-2 lg:order-1 text-right animate-fade-in-up">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#0D245E] mb-2">
            שלישי שמח לחיילים שלנו!
          </h1>

          {/* --- כאן השינוי של הפונטים --- */}
          <div className="mb-8">
            <h2 className="text-[#0D245E] leading-tight">
              {/* מילה ראשונה: BuNotza */}
              <span className="font-yad text-4xl md:text-5xl lg:text-6xl font-normal block">
                מחזירים אהבה
              </span>
              
              {/* מילה שניה: Frank */}
              <span className="font-frank text-5xl md:text-6xl lg:text-7xl mt-2 block">
                לגיבורים
              </span>
            </h2>
          </div>
          {/* ----------------------------- */}

          <div className="mt-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1758672860bd2c6c1895ca0d56ba891739451a94?placeholderIfAbsent=true"
              className="w-full max-w-md"
              alt="תמונה דקורטיבית"
            />
          </div>
        </div>

        {/* צד שמאל - תמונה 77 */}
        <div className="order-1 lg:order-2 animate-scale-in">
          <img
            src={`${import.meta.env.BASE_URL}instagram/77.jpg`}
            className="w-full rounded-br-[150px] shadow-xl"
            alt="צוות שלישי שמח"
          />
        </div>
      </div>

      {/* סטטיסטיקה */}
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