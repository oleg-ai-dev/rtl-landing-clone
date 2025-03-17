
import React from 'react';
import { Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog articles data
  const articles = [
    {
      id: 1,
      title: "כל מה שצריך לדעת על בדיקות EMG",
      excerpt: "בדיקת EMG היא בדיקה חשובה לאבחון בעיות עצביות ושריריות. במאמר זה נסביר על התהליך והיתרונות.",
      date: "15 במאי, 2023",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      readTime: "5 דקות קריאה"
    },
    {
      id: 2,
      title: "איך להתכונן לבדיקת EMG",
      excerpt: "הכנה נכונה לבדיקת EMG יכולה לשפר את התוצאות ולהפחית חרדה. קראו את המדריך המלא שלנו.",
      date: "3 ביוני, 2023",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      readTime: "4 דקות קריאה"
    },
    {
      id: 3,
      title: "בעיות עצביות נפוצות וכיצד EMG יכול לעזור",
      excerpt: "גילוי מוקדם של בעיות עצביות חשוב לטיפול יעיל. למדו כיצד בדיקות EMG יכולות לסייע באבחון.",
      date: "22 ביולי, 2023",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      readTime: "7 דקות קריאה"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - We're reusing the same style as in Index page */}
      <header className="bg-medblue sticky top-0 z-50 shadow-md py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/">
                <Button variant="ghost" className="text-white">
                  חזרה לעמוד הראשי
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-white text-2xl font-medium">בלוג</div>
              <Link to="/">
                <img 
                  src="/lovable-uploads/b3ae4162-c8d5-4e97-9a55-d20176c33296.png"
                  alt="MEDASSIST Logo"
                  className="h-10 object-contain"
                />
              </Link>
            </div>
            
            <a href="tel:03-300-8863" className="flex items-center gap-2 bg-orange-500 text-white rounded-md px-4 py-2 font-medium hover:bg-orange-600 transition-colors shadow-md">
              <span>03-300-8863</span>
              <Phone size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Blog Hero Section */}
      <section className="py-12 bg-medblue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Book size={36} className="text-medgold" />
            </div>
            <h1 className="text-4xl font-bold mb-4">בלוג MEDASSIST</h1>
            <p className="text-lg text-medblue-light mb-8">
              מאמרים מקצועיים, עצות וחדשות בתחום האבחון והטיפול בבעיות נוירולוגיות
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-medblue-dark">
                מאמרים מומלצים
              </Button>
              <Button className="bg-medgold hover:bg-medgold/90 text-medblue-dark">
                מידע על בדיקות EMG
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-medblue-dark mb-12 text-center">המאמרים האחרונים</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:shadow-lg hover:-translate-y-1">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-right text-medblue-dark">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-right">{article.excerpt}</p>
                  <div className="text-right">
                    <Button variant="link" className="text-medblue hover:text-medblue-dark p-0 h-auto font-semibold">
                      קרא עוד
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-medblue hover:bg-medblue-dark">
              לכל המאמרים
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 border-t-4 border-orange-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-medblue-dark mb-2">הישארו מעודכנים</h3>
              <p className="text-gray-600">הירשמו לניוזלטר שלנו לקבלת מאמרים חדשים ועדכונים</p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="דוא״ל" 
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-medblue"
              />
              <Button className="bg-medgold hover:bg-medgold/90 text-medblue-dark">
                הרשמה לניוזלטר
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer - Simplified version of main page footer */}
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

export default Blog;
