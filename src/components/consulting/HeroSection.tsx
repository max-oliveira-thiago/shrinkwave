
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: 'en' | 'pt';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: "Sell faster. Deliver smarter.",
      subtitle: "Automate proposals, signatures and delivery for your consulting projects.",
      cta: "Start Now"
    },
    pt: {
      title: "Venda mais rápido. Entregue com mais inteligência.",
      subtitle: "Automatize propostas, assinaturas e entrega de projetos de consultoria.",
      cta: "Começar agora"
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative  section  pb-20 bg-hero consulting-section">
      <div className="absolute inset-0 bg-black/25 md:bg-transparent"></div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="font-bold text-gray-900 mb-6 leading-tight consulting-h1"
            style={{ 
              fontSize: '56px', 
              letterSpacing: '-1px',
              fontFamily: "'Inter Tight', sans-serif",
              color: '#0F172A'
            }}
          >
            {currentContent.title}
          </h1>
          <p 
            className="text-gray-600 mb-10 leading-relaxed consulting-subtitle"
            style={{ 
              fontSize: '20px', 
              lineHeight: '140%',
              color: '#475569'
            }}
          >
            {currentContent.subtitle}
          </p>
          <Button 
            className="bg-[#0E7490] hover:bg-[#0a5d6b] text-white px-8 py-6 text-lg h-auto consulting-button"
            style={{
              backgroundColor: '#0E7490',
              borderColor: '#0E7490'
            }}
          >
            {currentContent.cta} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
