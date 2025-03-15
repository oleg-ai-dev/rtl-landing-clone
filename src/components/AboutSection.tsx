
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
