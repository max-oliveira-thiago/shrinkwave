import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const Judith = () => {

// Set page title
React.useEffect(() => {
  document.title = "Meet Judith – Shrink Wave";
}, []);

  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  useScrollAnimations();

  useEffect(() => {
    const storedLang = sessionStorage.getItem('language');
    if (storedLang === 'pt' || storedLang === 'en') {
      setLanguage(storedLang as 'en' | 'pt');
    }
  }, []);

  const handleLanguageChange = (lang: 'en' | 'pt') => {
    setLanguage(lang);
    sessionStorage.setItem('language', lang);
  };

  const content = {
    en: {
      title: "Chat with Judith",
      subtitle: "Your AI automation strategist",
      flowchartTitle: "Live Workflow Preview",
      buyButton: "Buy this package",
      placeholderText: "Judith will generate your custom workflow here based on your conversation...",
      backButton: "← Back to packages"
    },
    pt: {
      title: "Converse com Judith",
      subtitle: "Sua estrategista de automação IA",
      flowchartTitle: "Visualização do Fluxo ao Vivo",
      buyButton: "Comprar este pacote",
      placeholderText: "Judith gerará seu fluxo personalizado aqui baseado na sua conversa...",
      backButton: "← Voltar aos pacotes"
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <div className="min-h-screen clean-tech-bg" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      {/* Hero Section with Clean Tech gradient */}
      <section 
        className=" section  pb-12 reveal-element"
        style={{
          background: 'radial-gradient(ellipse at top, #7E3AF2 0%, #0E7490 100%)',
          color: 'white'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <Button 
              onClick={() => window.history.back()}
              className="mb-6 clean-tech-button"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(12px)',
                color: 'white'
              }}
            >
              {currentContent.backButton}
            </Button>
            <h1 className="hero-title mb-4">
              {currentContent.title}
            </h1>
            <p className="hero-subtitle">
              {currentContent.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className=" section  reveal-element section-bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-7 gap-8 min-h-[700px]">
            {/* Chat Widget - 70% width */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl h-full clean-tech-card card-hover" style={{ minHeight: '700px' }}>
                <iframe 
                  src="https://example.com/chat-widget" 
                  className="w-full h-full rounded-2xl border-0"
                  style={{ minHeight: '700px' }}
                  title="Judith Chat Widget"
                />
              </div>
            </div>
            
            {/* Flowchart Panel - 30% width */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl p-6 h-full clean-tech-card card-hover">
                <h3 className="card-subtitle mb-4">
                  {currentContent.flowchartTitle}
                </h3>
                
                <div 
                  id="flowchart"
                  className="flex-1 rounded-xl p-4 mb-6 min-h-[500px] flex items-center justify-center text-center"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#6B7280'
                  }}
                >
                  {currentContent.placeholderText}
                </div>
                
                <Button 
                  className="w-full btn-primary btn-hover"
                  onClick={() => window.location.href = '#packages'}
                >
                  {currentContent.buyButton}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Judith Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => window.location.href = '/judith'}
          className="px-6 py-3 rounded-full shadow-lg btn-secondary clean-tech-button flex items-center space-x-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Fale com a IA ✨</span>
        </Button>
      </div>
      
      <Footer language={language} />
      
      <style>
        {`
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Inter Tight', sans-serif !important;
            font-weight: 700 !important;
            letter-spacing: -0.02em !important;
          }
          
          .reveal-element {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s ease;
          }
          
          .reveal-element.revealed {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
};

export default Judith;