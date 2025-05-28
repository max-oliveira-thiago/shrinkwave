import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import HeroSection from '@/components/consulting/HeroSection';
import BenefitsSection from '@/components/consulting/BenefitsSection';
import PricingSection from '@/components/consulting/PricingSection';
import JudithSection from '@/components/consulting/JudithSection';
import AnimatedCostChart from '@/components/AnimatedCostChart';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const ConsultingProjects = () => {

// Set page title
React.useEffect(() => {
  document.title = "Consulting Projects – Shrink Wave";
}, []);

  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  
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
  };

  const content = {
    en: {
      judithCta: {
        title: "Still not sure?",
        description: "Talk to Judith, our automation AI, and see how the workflow would work in practice.",
        buttonText: "See example with Judith"
      }
    },
    pt: {
      judithCta: {
        title: "Ainda não tem certeza?",
        description: "Fale com Judith, nossa IA de automação, e veja como o fluxo seria na prática.",
        buttonText: "Ver exemplo com a Judith"
      }
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <div className="min-h-screen flex flex-col clean-tech-bg">
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange} 
      />
      
      {/* Hero Section */}
      <HeroSection language={language} />
      
      {/* Benefits Section */}
      <BenefitsSection language={language} />
      
      {/* Animated Cost Chart Section */}
      <AnimatedCostChart language={language} />
      
      {/* Pricing Tiers Section */}
      <section className=" section  section-bg-secondary" style={{ 
        paddingTop: '80px', 
        paddingBottom: '80px' 
      }}>
        <PricingSection language={language} />
      </section>
      
      {/* Judith Section */}
      <JudithSection language={language} />
      
      {/* Judith CTA Section */}
      <section className=" section  reveal-element section-bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div 
              className="p-8 rounded-xl text-center clean-tech-card card-hover"
            >
              <h3 
                className="card-title mb-4"
              >
                {currentContent.judithCta.title}
              </h3>
              <p className="mb-6" style={{ fontSize: '18px', lineHeight: '140%' }}>
                {currentContent.judithCta.description}
              </p>
              <Button 
                onClick={() => window.location.href = '/judith'}
                className="px-8 py-3 text-lg font-semibold btn-primary btn-hover"
              >
                {currentContent.judithCta.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ language={language} />
      
      {/* Floating Judith Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => window.location.href = '/judith'}
          className="bg-[#0E7490] hover:bg-[#0a5d6b] text-white px-6 py-3 rounded-full shadow-lg clean-tech-button flex items-center space-x-2"
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

export default ConsultingProjects;