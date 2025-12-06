import React from 'react';

const StorySection: React.FC = () => {
  const stories = [
    {
      title: "ההתחלה - יוני 2024",
      desc: "הסיפור שלנו התחיל עם חנן טל (היזם והמקים) - ביום שלישי אחד, חזר מעזה ויצא לבקר חבר לצוות שנפצע שבוע קודם לכן. חנן שאל מה להביא בשביל לשמח אותו ואת השותף שלו לחדר בבית החולים - תל השומר, התשובה הייתה, תביא איזה סטייק טוב. חנן הדליק מנגל בחניה והכין סטייקים לחבר ולשותף לחדר.",
      img: `${import.meta.env.BASE_URL}instagram/82.jpg`,
      reverse: false
    },
    {
      title: "מסורת שבועית",
      desc: "הריח והטעם הציתו בעוד פצועים את הרצון בפינוק של ארוחת בשרים, אז כך חזר חנן גם ביום שלישי שאחריו ועוד שלישי ועוד אחד והקהל גדל עד שהגענו לכל הפצועים .עד עצם היום הזה צוות מיומן ומאורגן מגיעים לשמח בארוחת בשרים, מוזיקה, קינוחים ואווירה טובה. על הדרך, יושבים, מדברים ומכירים את הפצועים, את האדם מאחורי הסיפור וכך מתגלה עולם שלם.",
      img: `${import.meta.env.BASE_URL}instagram/23.jpg`,
      reverse: true
    },
    {
      title: "ארגון ענק",
      desc: (
        <>
          בשיא המלחמה עבדנו ב 3 בתי חולים וכל עוד היו שם פצועים, פינקנו ללא הרף! תל השומר - ר''ג, איכילוב - ת''א, סורוקה - ב''ש.
          <br />
           אנחנו לא עוצרים לרגע וממשיכים  כל עוד הם צריכים אותנו.
          <br /><br />
          <span className=" text-[20px] text-[#0D245E] mt-4 font-bold" style={{ fontFamily: "'Guttman Yad', cursive" }}>
            אנחנו כאן בשביל הגיבורים שלנו תמיד
          </span>
        </>
      ),
      img: `${import.meta.env.BASE_URL}instagram/61.jpg`,
      reverse: false
    }
  ];

  return (
    <>
      <section id="story" className="scroll-mt-40 py-20 bg-transparent" dir="rtl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* כותרת ראשית */}
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#007aff]">
              ?איך נולד שלישי שמח
            </h2>
            <p className="text-lg md:text-xl text-[#0D245E] font-medium">
              שלישי שמח הוא ארגון עצמאי, הכל בהתנדבות מלאה!
            </p>
            <p className="text-lg md:text-xl text-[#0D245E] font-bold">
              השכר שלנו הוא המצווה לשמח את הגיבורים.
            </p>
          </div>

          {/* רשימת הסיפורים */}
          <div className="space-y-24">
            {stories.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
                
                {/* צד תמונה */}
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                      {/* אפקט רקע לתמונה */}
                      <div className="absolute inset-0 bg-blue-100 rounded-3xl transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform -z-10"></div>
                      <img 
                          src={item.img} 
                          alt={item.title} 
                          className="relative rounded-3xl shadow-xl w-full h-64 md:h-80 object-cover z-10 transform transition-transform group-hover:-translate-y-1"
                      />
                  </div>
                </div>

                {/* צד טקסט */}
                <div className="w-full md:w-1/2 text-center md:text-right space-y-4">
                  <h3 className="text-2xl font-bold text-[#007aff]">{item.title}</h3>
                  <div className="text-lg text-[#0D245E] leading-relaxed font-medium">
                    {item.desc}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default StorySection;