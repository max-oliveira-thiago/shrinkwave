
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCostChartProps {
  language: 'en' | 'pt';
}

const AnimatedCostChart = ({ language }: AnimatedCostChartProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      title: "Cost Comparison",
      traditional: "Traditional Tools",
      shrinkwave: "Shrink Wave",
      savings: "Save 64% monthly",
      traditionalCost: "$500/month",
      shrinkwaveCost: "$179/month"
    },
    pt: {
      title: "Comparação de Custos",
      traditional: "Ferramentas Tradicionais",
      shrinkwave: "Shrink Wave",
      savings: "Economize 64% mensalmente",
      traditionalCost: "$500/mês",
      shrinkwaveCost: "$179/mês"
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateBars(true), 300);
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
    <section className="py-20 reveal-element" style={{ background: '#F1F5F9' }}>
      <div ref={sectionRef} className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 
            className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ 
              fontSize: '36px',
              fontFamily: "'Inter Tight', sans-serif"
            }}
          >
            {currentContent.title}
          </h2>
          
          <div className="space-y-8">
            {/* Traditional Tools Bar */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span 
                  className="font-medium"
                  style={{ 
                    fontSize: '18px',
                    fontFamily: "'Inter', sans-serif",
                    color: '#374151'
                  }}
                >
                  {currentContent.traditional}
                </span>
                <span 
                  className="font-bold text-red-600"
                  style={{ fontSize: '18px' }}
                >
                  {currentContent.traditionalCost}
                </span>
              </div>
              <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-brand-purple rounded-full transition-all duration-1000 ease-out ${
                    animateBars ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </div>

            {/* Shrink Wave Bar */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span 
                  className="font-medium"
                  style={{ 
                    fontSize: '18px',
                    fontFamily: "'Inter', sans-serif",
                    color: '#374151'
                  }}
                >
                  {currentContent.shrinkwave}
                </span>
                <span 
                  className="font-bold text-green-600"
                  style={{ fontSize: '18px' }}
                >
                  {currentContent.shrinkwaveCost}
                </span>
              </div>
              <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-brand-teal rounded-full transition-all duration-1000 ease-out ${
                    animateBars ? 'w-[36%]' : 'w-0'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p 
              className={`text-green-600 font-semibold transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
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
    </section>
  );
};

export default AnimatedCostChart;
