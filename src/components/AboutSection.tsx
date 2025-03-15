
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-right opacity-0 animate-fadeIn">
            <h2 className="section-heading text-medblue-dark mb-8">
              <span className="text-medblue">MEDASSIST</span> אודות
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-bold text-medblue-dark">Medassist</span> היא חברת הרפואה הפרטית המובילה בישראל, אשר מתמחה במתן שירותי רפואה דחופים ובדיקות רפואיות שלא מבוצעות דיאגנוסטית בקופת חולים.
              </p>
              <p>
                הרופאים הטובים ביותר בתחומם, טכנולוגיה חדשה ומתקדמת, שירות מקצועי וליווי מלא.
              </p>
              <p>
                לכן, אם אתם זקוקים לבדיקה מצילת חיים, פנו אלינו בהקדם, כדי שנוכל לסייע בגילוי מוקדם ולהביא לשיפור משמעותי באיכות חייכם.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <div className="text-xl font-bold text-medblue-dark">MedAssist</div>
                  <div className="text-sm text-gray-500">HaBarzel St 11, Tel Aviv-Yafo</div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 mt-4">
                <div className="text-xl font-bold text-medgold">4.8</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-medgold" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-gray-500">334 reviews</div>
              </div>
            </div>
          </div>
          <div className="opacity-0 animate-fadeIn animate-delay-200">
            <img 
              src="/lovable-uploads/40fc7cbf-5c01-4dbe-843e-0347cc6c5c0d.png" 
              alt="MEDASSIST Facility" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
