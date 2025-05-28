
import React from 'react';

interface TopHeroProps {
  language: string;
}

const TopHero = ({ language }: TopHeroProps) => {
  const content = {
    en: {
      title: "Shrink your work. Expand your results.",
      subtitle: "We automate and connect your tools so you work less and deliver more.",
      subtitle2: "Trusted by 40+ founders in 6 countries.",
      buttonText: "Let's shrink your process"
    },
    pt: {
      title: "Reduza o esforço. Amplie seus resultados.",
      subtitle: "Automatizamos e conectamos suas ferramentas para que você trabalhe menos e entregue mais.",
      subtitle2: "Confiado por 40+ fundadores em 6 países.",
      buttonText: "Vamos reduzir seu processo"
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <section 
      className="relative min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #0E7490 100%)',
        paddingTop: '120px',
        paddingBottom: '120px'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className="font-extrabold mb-6 leading-tight"
            style={{ 
              fontSize: '56px', 
              lineHeight: '120%',
              color: '#ffffff',
              textShadow: '0 1px 4px rgba(0,0,0,0.2)'
            }}
          >
            {currentContent.title}
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl leading-relaxed mb-2"
               style={{
                 color: '#ffffff',
                 textShadow: '0 1px 4px rgba(0,0,0,0.2)'
               }}>
              {currentContent.subtitle}
            </p>
            <p className="text-xl font-semibold"
               style={{
                 color: '#ffffff',
                 textShadow: '0 1px 4px rgba(0,0,0,0.2)'
               }}>
              {currentContent.subtitle2}
            </p>
          </div>
          
          <a 
            href="#packages" 
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {currentContent.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopHero;
