
import React, { useEffect } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import AccordionSection from '@/components/AccordionSection';
import TestimonialSection from '@/components/TestimonialSection';
import EmgBenefitsSection from '@/components/EmgBenefitsSection';
import AboutSection from '@/components/AboutSection';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    
    return () => {
      document.documentElement.removeAttribute('dir');
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Logo and CTA */}
      <header className="bg-medblue sticky top-0 z-50 shadow-md">
        <div className="container mx-auto py-3 px-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <img 
              src="/lovable-uploads/0129c4d1-1a85-436e-ac82-f1a37da97565.png"
              alt="MEDASSIST Logo"
              className="h-10 object-contain"
            />
          </div>
          <div className="flex flex-col items-end">
            <div className="text-white text-sm mb-1">בדיקת EMG</div>
            <a href="tel:03-300-8863" className="flex items-center gap-2 bg-orange-500 text-white rounded-md px-4 py-2 font-medium text-sm hover:bg-orange-600 transition-colors">
              <span>03-300-8863</span>
              <Phone size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <div className="max-w-lg opacity-0 animate-fadeIn">
                <div className="text-medblue inline-block px-3 py-1 rounded-full bg-blue-50 text-sm font-medium mb-4">
                  בדיקות EMG
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-medblue-dark leading-tight mb-4 text-right">
                  פתרונות מתקדמים לאבחון וטיפול
                </h1>
                <p className="text-lg text-gray-600 mb-8 text-right">
                  מרכז מומחים לטיפולי EMG מתקדמים עם צוות רפואי מנוסה ומסור, המעניק שירות מקצועי ואישי לכל מטופל.
                </p>
                <div className="text-right">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="call-button mb-4 md:mb-0 md:ml-4"
                  >
                    קבעו תור עכשיו
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-10 md:hidden">
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-medblue flex flex-col items-center opacity-0 animate-fadeIn animate-delay-500"
                >
                  <span className="mb-1">למידע נוסף</span>
                  <ChevronDown className="animate-bounce" />
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="w-full max-w-md relative opacity-0 animate-fadeIn animate-delay-100">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="EMG Treatment" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">היתרונות שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "צוות מומחים מנוסה",
                description: "צוות הרופאים והמטפלים שלנו בעל ניסיון רב בביצוע בדיקות EMG ופירוש התוצאות.",
                delay: "animate-delay-100",
                image: "/lovable-uploads/ab41fbcd-f023-40f0-b5c0-c3fef4fe0aea.png"
              },
              {
                title: "ציוד מתקדם",
                description: "אנו משתמשים בטכנולוגיה המתקדמת ביותר לביצוע בדיקות EMG, המבטיחה תוצאות מדויקות.",
                delay: "animate-delay-200",
                image: "/lovable-uploads/b4bd302e-9dfc-46e7-b94b-6b10ba38a2cf.png"
              },
              {
                title: "טיפול אישי",
                description: "כל מטופל מקבל התייחסות אישית ותוכנית טיפול המותאמת לצרכיו הספציפיים.",
                delay: "animate-delay-300",
                image: "/lovable-uploads/0129c4d1-1a85-436e-ac82-f1a37da97565.png"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`bg-medblue-dark p-6 rounded-lg shadow-md text-right opacity-0 animate-fadeIn ${feature.delay}`}
              >
                <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <img src={feature.image} alt={feature.title} className="h-10 w-10 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-medblue-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMG Benefits Section */}
      <EmgBenefitsSection />

      {/* About MEDASSIST Section */}
      <AboutSection />

      {/* Process Section with parallax effect */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">תהליך הטיפול</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-right opacity-0 animate-fadeIn">
              <div className="space-y-8">
                {[
                  { 
                    number: "01",
                    title: "יצירת קשר וקביעת תור",
                    description: "השאירו פרטים או התקשרו אלינו כדי לקבוע תור לייעוץ ראשוני או לבדיקת EMG."
                  },
                  { 
                    number: "02",
                    title: "אבחון ראשוני",
                    description: "בפגישה הראשונה, הרופא יבצע הערכה מקיפה של מצבכם ויקבע אם יש צורך בבדיקת EMG."
                  },
                  { 
                    number: "03",
                    title: "ביצוע בדיקת EMG",
                    description: "הבדיקה מתבצעת על ידי מומחה תוך הקפדה על נוחות המטופל לאורך כל התהליך."
                  },
                  { 
                    number: "04",
                    title: "פירוש התוצאות וטיפול",
                    description: "לאחר הבדיקה, הרופא יסביר את התוצאות ויציע תוכנית טיפול מותאמת אישית."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-3xl font-bold text-medgold opacity-70">{step.number}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-medblue-dark mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] opacity-0 animate-fadeIn animate-delay-200">
              <div className="absolute inset-0 bg-medblue rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Medical Procedure" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medblue-dark/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xl font-semibold">טיפול מקצועי</p>
                  <p>בסביבה נעימה ומרגיעה</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">שאלות נפוצות</h2>
          <AccordionSection />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-16">המטופלים ממליצים</h2>
          <TestimonialSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-medblue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">צרו קשר עוד היום</h2>
            <p className="text-medblue-light max-w-2xl mx-auto">
              השאירו פרטים ונחזור אליכם בהקדם, או התקשרו ישירות למספר שלנו לקביעת תור
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-8 opacity-0 animate-fadeIn">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="שם מלא" 
                    className="form-input" 
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="טלפון" 
                    className="form-input" 
                    required 
                  />
                </div>
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="דוא״ל" 
                  className="form-input" 
                />
              </div>
              <div>
                <Textarea 
                  placeholder="פרטי בדיקה" 
                  rows={4} 
                  className="form-input resize-none" 
                />
              </div>
              <div className="text-right">
                <button 
                  type="submit" 
                  className="bg-medblue hover:bg-medblue-dark text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 shimmering-button"
                >
                  שליחה
                </button>
              </div>
            </form>
            <div className="mt-8 text-center">
              <div className="text-gray-500 mb-2">או התקשרו ישירות</div>
              <a href="tel:03-300-8863" className="text-xl font-bold text-medblue hover:text-medblue-dark transition-colors">
                03-300-8863
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">MEDASSIST</div>
              <div className="text-gray-400 text-sm mt-1">בדיקות EMG מתקדמות</div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© 2023 MedAssist כל הזכויות שמורות</p>
              <div className="mt-2 text-gray-500 text-xs flex flex-wrap justify-center md:justify-end gap-4">
                <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
                <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
                <a href="#" className="hover:text-white transition-colors">צור קשר</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
