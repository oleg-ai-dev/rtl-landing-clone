
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="text-right">
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
          <img 
            src="/lovable-uploads/40fc7cbf-5c01-4dbe-843e-0347cc6c5c0d.png" 
            alt="MEDASSIST Facility" 
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
