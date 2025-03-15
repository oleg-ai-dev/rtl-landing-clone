
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "פנייתך התקבלה בהצלחה",
        description: "נציג יחזור אליך בהקדם",
      });
      setName('');
      setPhone('');
      setEmail('');
      setDetails('');
    }, 1000);
  };

  return (
    <div className="rounded-lg p-6 bg-white shadow-lg w-full max-w-md mx-auto opacity-0 animate-fadeIn animate-delay-200">
      <h3 className="text-xl font-bold mb-4 text-medblue-dark text-right">
        השאירו פרטים ונחזור אליכם
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            dir="rtl"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="שם מלא"
            className="form-input"
            required
          />
        </div>
        <div className="relative">
          <Input
            dir="rtl"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="טלפון"
            className="form-input"
            required
          />
        </div>
        <div className="relative">
          <Input
            dir="rtl"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="דוא״ל"
            className="form-input"
          />
        </div>
        <div className="relative">
          <Textarea
            dir="rtl"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="פרטי בדיקה"
            className="form-input resize-none h-24"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full shimmering-button bg-medblue hover:bg-medblue-dark text-white py-3 rounded-md transition-all duration-300 text-lg font-semibold"
        >
          {isLoading ? "שולח..." : "שליחה"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
