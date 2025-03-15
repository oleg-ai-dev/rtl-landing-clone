
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const rating = 4.8;
  const reviewCount = 42;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto opacity-0 animate-fadeIn animate-delay-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="order-2 md:order-1 text-center md:text-right">
          <h3 className="text-2xl font-bold text-medblue-dark mb-2">המטופלים שלנו מרוצים</h3>
          <div className="flex items-center justify-center md:justify-end mb-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={22} 
                fill={i < Math.floor(rating) ? "#D4B776" : "none"}
                stroke={i < Math.floor(rating) ? "#D4B776" : "#D4B776"}
                className={`${i < Math.floor(rating) ? "text-medgold" : "text-gray-300"}`}
              />
            ))}
            <span className="mx-2 font-bold text-medgold">{rating}</span>
          </div>
          <p className="text-gray-500 text-sm">
            מבוסס על {reviewCount} חוות דעת
          </p>
        </div>
        
        <div className="order-1 md:order-2 text-right bg-gray-50 p-4 rounded-lg border border-gray-100 max-w-md">
          <p className="text-gray-700 mb-4">
            "הטיפול ב-MedAssist היה מקצועי ביותר. הצוות התייחס אלי באכפתיות והסביר כל שלב בתהליך. כבר אחרי הטיפול הראשון הרגשתי שיפור משמעותי. אני ממליץ בחום!"
          </p>
          <div className="font-semibold text-medblue-dark">יוסי כהן</div>
          <div className="text-sm text-gray-500">מטופל, תל אביב</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
