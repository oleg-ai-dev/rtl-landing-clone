
import React, { useState, useEffect } from 'react';
import { Star, Quote, User, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    },
    {
      text: "אחרי תאונת דרכים לא יכולתי לחזור לעבודה. חודש של טיפולים ב-MedAssist והכאבים כמעט נעלמו. היום אני חוזרת למסלול החיים הרגיל שלי בזכות הצוות המקצועי והאכפתי.",
      name: "נועה ברקוביץ",
      title: "מטופלת, רמת גן",
      improvement: "חזרה לתפקוד מלא תוך חודש",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      beforeAfter: 95
    },
    {
      text: "מעולם לא קיבלתי טיפול כל כך מקיף וטוב כמו ב-MedAssist. המכשור החדיש ביותר ביחד עם הידע המקצועי של הרופאים הצליחו לעזור לי אחרי שנים של סבל. תודה!",
      name: "דוד שמעוני",
      title: "מטופל, אשדוד",
      improvement: "שיפור של 80% בתנועתיות הכתף",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      beforeAfter: 80
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-gray-50 rounded-2xl shadow-xl p-6 md:p-8 max-w-3xl mx-auto overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={24} 
              fill={i < Math.floor(rating) ? "#D4B776" : "none"}
              stroke={i < Math.floor(rating) ? "#D4B776" : "#D4B776"}
              className={`${i < Math.floor(rating) ? "text-medgold" : "text-gray-300"} transition-all duration-300 hover:scale-110`}
            />
          ))}
          <span className="mx-2 font-bold text-medgold text-xl">{rating}</span>
        </div>
        <div className="text-right">
          <h3 className="text-2xl font-bold text-medblue-dark">המטופלים שלנו מרוצים</h3>
          <p className="text-gray-500 text-sm">
            מבוסס על <span className="font-medium text-medblue">{reviewCount}</span> חוות דעת
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden rounded-xl bg-white shadow-md border border-gray-100">
          <div 
            className={`transition-all duration-500 transform ${isAnimating ? 'opacity-70' : 'opacity-100'}`} 
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          >
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full text-right p-8 bg-white"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-medium rounded-full shadow-sm">
                      {testimonial.improvement}
                    </span>
                    <div className="flex justify-end">
                      <Quote size={32} className="text-medgold opacity-30" />
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex-1">
                      {/* Before/After Progress Bar */}
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-600">אחרי הטיפול</span>
                          <span className="font-medium text-medblue">{testimonial.beforeAfter}%</span>
                        </div>
                        <Progress value={testimonial.beforeAfter} className="h-2" />
                        <div className="mt-1 text-xs text-gray-500 text-left">שיפור משמעותי</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="ml-4 text-right">
                        <div className="font-semibold text-medblue-dark">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.title}</div>
                      </div>
                      <Avatar className="w-12 h-12 border-2 border-medgold shadow-md">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-6">
          <Button 
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="bg-white hover:bg-blue-50 shadow-md border border-gray-200 rounded-full h-10 w-10 p-0"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ArrowRight size={18} className="text-medblue" />
          </Button>
          
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 h-2 bg-medblue rounded-full' 
                    : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
          
          <Button 
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="bg-white hover:bg-blue-50 shadow-md border border-gray-200 rounded-full h-10 w-10 p-0"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ArrowLeft size={18} className="text-medblue" />
          </Button>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button 
          variant="link" 
          className="text-medblue font-medium hover:text-medblue-dark transition-colors"
          onClick={() => window.location.href = '#contact'}
        >
          <span>קרא עוד חוות דעת</span>
          <ArrowLeft size={16} className="mr-1" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialSection;
