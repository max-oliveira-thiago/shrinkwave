
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import TopHero from '@/components/TopHero';
import Benefits from '@/components/Benefits';
import CostComparison from '@/components/CostComparison';
import Features from '@/components/Features';
import Packages from '@/components/Packages';
import MeetJudith from '@/components/MeetJudith';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const Index = () => {

// Set page title
React.useEffect(() => {
  document.title = "Shrink Wave – Shrink Wave";
}, []);

  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const { toast } = useToast();

  useScrollAnimations();

  useEffect(() => {
    // Load language preference from sessionStorage
    const storedLang = sessionStorage.getItem('language');
    if (storedLang === 'pt' || storedLang === 'en') {
      setLanguage(storedLang as 'en' | 'pt');
    }
  }, []);

  const handleLanguageChange = (lang: 'en' | 'pt') => {
    if (lang === language) return;
    setLanguage(lang);
    sessionStorage.setItem('language', lang);
    toast({
      title: lang === 'en' ? 'Language Changed' : 'Idioma Alterado',
      description: lang === 'en' ? 'The website language is now English' : 'O idioma do site agora é Português',
      duration: 3000
    });
  };

  return (
    <div className="min-h-screen clean-tech-bg" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section with Clean Tech gradient */}
      <section 
        id="hero-home" 
        className="reveal-element"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #0E7490 100%)',
          paddingTop: '128px',
          paddingBottom: '80px'
        }}
      >
        <TopHero language={language} />
      </section>
      
      {/* Benefits Section */}
      <section 
        className="py-0 reveal-element section-bg-primary" 
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px'
        }}
      >
        <Benefits language={language} />
      </section>
      
      {/* Cost Comparison Section */}
      <section 
        className="py-0 reveal-element section-bg-secondary" 
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px'
        }}
      >
        <CostComparison language={language} />
      </section>
      
      {/* Features Section */}
      <section 
        className="py-0 reveal-element section-bg-primary" 
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px'
        }}
      >
        <Features language={language} />
      </section>
      
      {/* Packages Section */}
      <section 
        className="py-0 reveal-element section-bg-secondary"
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px'
        }}
      >
        <Packages language={language} />
      </section>
      
      {/* Meet Judith Section */}
      <section 
        className="py-0 reveal-element"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #0E7490 100%)',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
      >
        <MeetJudith language={language} />
      </section>
      
      {/* Testimonials Section */}
      <section 
        className="py-0 reveal-element section-bg-primary" 
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px'
        }}
      >
        <Testimonials language={language} />
      </section>
      
      {/* FAQ Section */}
      <section 
        className="py-0 reveal-element section-bg-secondary" 
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px'
        }}
      >
        <FAQ language={language} />
      </section>
      
      {/* Floating Judith Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => window.location.href = '/judith'}
          className="px-6 py-3 rounded-full shadow-lg clean-tech-button flex items-center space-x-2"
          style={{
            backgroundColor: '#7E3AF2',
            color: 'white',
            borderColor: '#7E3AF2'
          }}
        >
          <MessageCircle className="h-5 w-5" />
          <span>💬 Fale com a Judith (IA)</span>
        </Button>
      </div>
      
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default Index;