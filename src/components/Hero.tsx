
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      title: "Work less. Deliver more.",
      subtitle: "Smart automations that save you 8+ hours every week. Designed for psychologists, consultants, coaches, and legal professionals.",
      cta: "Start saving time"
    },
    pt: {
      title: "Trabalhe menos. Entregue mais.",
      subtitle: "Automações inteligentes que economizam 8+ horas por semana. Desenvolvidas para psicólogos, consultores, coaches e profissionais jurídicos.",
      cta: "Quero economizar horas por semana"
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <section className="relative  section  pb-20 bg-hero">
      <div className="absolute inset-0 bg-black/25 md:bg-transparent"></div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            {currentContent.subtitle}
          </p>
          <Button className="bg-[#0E7490] hover:bg-[#0a5d6b] text-white px-8 py-6 text-lg h-auto">
            {currentContent.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
