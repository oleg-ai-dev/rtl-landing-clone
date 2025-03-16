
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const rating = 4.9;
  const reviewCount = 137;

  const testimonials = [
    {
      text: "הטיפול ב-MedAssist היה מקצועי ביותר. הצוות התייחס אלי באכפתיות והסביר כל שלב בתהליך. כבר אחרי הטיפול הראשון הרגשתי שיפור משמעותי. אני ממליץ בחום!",
      name: "יוסי כהן",
      title: "מטופל, תל אביב",
      improvement: "שיפור של 85% בתפקוד היומיומי"
    },
    {
      text: "הרופאים במדאסיסט זיהו את הבעיה שלי מיד, למרות שהתרוצצתי בין רופאים שונים במשך חודשים. הטיפול היה מהיר ויעיל, ותוך שבועיים חזרתי לעבודה.",
      name: "שרה לוי",
      title: "מטופלת, ירושלים",
      improvement: "אבחון מדויק אחרי 3 מומחים שונים"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto opacity-0 animate-fadeIn animate-delay-400">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
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
        <div className="text-right">
          <h3 className="text-2xl font-bold text-medblue-dark">המטופלים שלנו מרוצים</h3>
          <p className="text-gray-500 text-sm">
            מבוסס על {reviewCount} חוות דעת
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-right bg-gray-50 p-5 rounded-lg border border-gray-100">
            <div className="flex justify-end mb-3">
              <Quote size={24} className="text-medgold opacity-40" />
            </div>
            <p className="text-gray-700 mb-4">
              "{testimonial.text}"
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                {testimonial.improvement}
              </span>
              <div>
                <div className="font-semibold text-medblue-dark">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <a href="#contact" className="text-medblue font-medium hover:text-medblue-dark transition-colors">
          קרא עוד חוות דעת »
        </a>
      </div>
    </div>
  );
};

export default TestimonialSection;
