
import React from 'react';
import { Star, Quote, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const rating = 4.9;
  const reviewCount = 137;

  const testimonials = [
    {
      text: "הטיפול ב-MedAssist היה מקצועי ביותר. הצוות התייחס אלי באכפתיות והסביר כל שלב בתהליך. כבר אחרי הטיפול הראשון הרגשתי שיפור משמעותי. אני ממליץ בחום!",
      name: "יוסי כהן",
      title: "מטופל, תל אביב",
      improvement: "שיפור של 85% בתפקוד היומיומי",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      beforeAfter: 85
    },
    {
      text: "הרופאים במדאסיסט זיהו את הבעיה שלי מיד, למרות שהתרוצצתי בין רופאים שונים במשך חודשים. הטיפול היה מהיר ויעיל, ותוך שבועיים חזרתי לעבודה.",
      name: "שרה לוי",
      title: "מטופלת, ירושלים",
      improvement: "אבחון מדויק אחרי 3 מומחים שונים",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      beforeAfter: 92
    },
    {
      text: "המטפלים ב-MedAssist הם ברמה אחרת לגמרי. חוויתי כאבי גב כרוניים במשך שנים, וניסיתי טיפולים רבים ללא הצלחה. אחרי סדרת טיפולי EMG ופיזיותרפיה, אני מרגיש כמו אדם חדש.",
      name: "אלון גולדשטיין",
      title: "מטופל, חיפה",
      improvement: "הפחתה של 75% בכאב הכרוני",
      avatar: "https://randomuser.me/api/portraits/men/68.jpg",
      beforeAfter: 75
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md p-6 md:p-8 max-w-3xl mx-auto overflow-hidden">
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
      
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="transition-all duration-500 transform" 
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full text-right bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-end mb-3">
                    <Quote size={28} className="text-medgold opacity-40" />
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full">
                      {testimonial.improvement}
                    </span>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-medblue-dark">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.title}</div>
                      </div>
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full border-2 border-medgold ml-3 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Before/After Progress Bar */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-600">אחרי הטיפול</span>
                      <span className="font-medium text-medblue">{testimonial.beforeAfter}%</span>
                    </div>
                    <Progress value={testimonial.beforeAfter} className="h-2" />
                    <div className="mt-1 text-xs text-gray-500 text-left">שיפור משמעותי</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-4">
          <button 
            onClick={prevTestimonial}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-all border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ArrowRight size={20} className="text-medblue" />
          </button>
          
          <div className="flex items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`mx-1 w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-medblue w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-all border border-gray-200"
            aria-label="Next testimonial"
          >
            <ArrowLeft size={20} className="text-medblue" />
          </button>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <a 
          href="#contact" 
          className="text-medblue font-medium hover:text-medblue-dark transition-colors flex items-center gap-1"
        >
          <span>קרא עוד חוות דעת</span>
          <ArrowLeft size={16} />
        </a>
      </div>
    </div>
  );
};

export default TestimonialSection;
