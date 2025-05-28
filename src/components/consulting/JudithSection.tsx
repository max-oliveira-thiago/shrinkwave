
import React from 'react';
import { Button } from '@/components/ui/button';

interface JudithSectionProps {
  language: 'en' | 'pt';
}

const JudithSection = ({ language }: JudithSectionProps) => {
  const content = {
    en: {
      title: "Talk to Judith, your AI automation strategist",
      subtitle: "Get a tailored quote and a preview of your future workflow in minutes.",
      cta: "Talk to Judith"
    },
    pt: {
      title: "Converse com Judith, sua estrategista de automação IA",
      subtitle: "Obtenha um orçamento personalizado e uma prévia do seu futuro fluxo de trabalho em minutos.",
      cta: "Falar com Judith"
    }
  };

  const currentContent = content[language];

  return (
    <section 
      className="py-20 consulting-section"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #0F172A 0%, #0E7490 100%)'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="font-bold text-white mb-6 consulting-h2"
            style={{ 
              fontSize: '36px',
              fontFamily: "'Inter Tight', sans-serif"
            }}
          >
            {currentContent.title}
          </h2>
          <p 
            className="text-slate-200 mb-8 consulting-subtitle"
            style={{ 
              fontSize: '20px', 
              lineHeight: '140%' 
            }}
          >
            {currentContent.subtitle}
          </p>
          <Button 
            onClick={() => window.location.href = '/judith'}
            className="bg-white text-brand-teal hover:bg-gray-100 px-8 py-4 text-lg font-semibold consulting-button"
          >
            {currentContent.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JudithSection;
