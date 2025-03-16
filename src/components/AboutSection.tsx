
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

          {/* Added trust indicators */}
          <div className="flex items-center justify-end space-x-4 rtl:space-x-reverse mt-4">
            <div className="flex items-center text-medblue-dark">
              <span className="font-bold text-xl">4.9</span>
              <span className="text-sm mx-1">דירוג</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-medgold" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-medblue-dark font-medium">
              <span>כ-450 מטופלים בחודש</span>
            </div>
          </div>
        </div>

        {/* Added CTA button */}
        <div className="mt-6">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>צור קשר עכשיו</span>
            <Phone size={16} />
          </Button>
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
