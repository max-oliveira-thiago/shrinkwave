
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCostComparisonProps {
  language: 'en' | 'pt';
}

const AnimatedCostComparison = ({ language }: AnimatedCostComparisonProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateBar, setAnimateBar] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      title: "Cost Comparison",
      traditional: "Traditional Consulting: $500/month",
      shrinkwave: "Shrink Wave: $179/month",
      savings: "Save 64% monthly"
    },
    pt: {
      title: "Comparação de Custos",
      traditional: "Consultoria Tradicional: R$ 2.500/mês",
      shrinkwave: "Shrink Wave: R$ 895/mês",
      savings: "Economize 64% por mês"
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateBar(true), 300);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`text-center mb-12 consulting-h2 consulting-reveal ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            fontSize: '36px',
            fontFamily: "'Inter Tight', sans-serif",
            color: '#0F172A'
          }}
        >
          {currentContent.title}
        </h2>
        
        <div className="space-y-8">
          {/* Traditional Consulting Bar */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span 
                className="consulting-body"
                style={{ 
                  fontSize: '16px',
                  fontFamily: "'Inter', sans-serif",
                  color: '#475569'
                }}
              >
                {currentContent.traditional}
              </span>
              <span className="font-semibold text-gray-600">100%</span>
            </div>
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gray-400 rounded-full transition-all duration-1000 ease-out ${
                  animateBar ? 'w-full' : 'w-0'
                }`}
              />
            </div>
          </div>

          {/* Shrink Wave Bar */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span 
                className="consulting-body"
                style={{ 
                  fontSize: '16px',
                  fontFamily: "'Inter', sans-serif",
                  color: '#475569'
                }}
              >
                {currentContent.shrinkwave}
              </span>
              <span className="font-semibold text-brand-teal">36%</span>
            </div>
            <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-[#0E7490] rounded-full transition-all duration-1000 ease-out ${
                  animateBar ? 'w-[36%]' : 'w-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p 
            className={`text-brand-teal font-semibold consulting-reveal ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ 
              fontSize: '20px',
              fontFamily: "'Inter Tight', sans-serif",
              transitionDelay: '0.5s'
            }}
          >
            {currentContent.savings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCostComparison;
