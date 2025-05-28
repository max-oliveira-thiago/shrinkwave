
import React from 'react';

interface CostComparisonProps {
  language: string;
}

const CostComparison = ({ language }: CostComparisonProps) => {
  const content = {
    en: {
      title: "Cost Comparison",
      subtitle: "One seamless workflow, one flat subscription.",
      fragmented: "Traditional Professionals",
      shrinkWave: "Shrink Wave",
      traditionalCost: "$500/month",
      shrinkWaveCost: "$179/month"
    },
    pt: {
      title: "Comparação de Custos",
      subtitle: "Um fluxo contínuo, uma assinatura única.",
      fragmented: "Profissionais Tradicionais",
      shrinkWave: "Shrink Wave",
      traditionalCost: "R$2.500/mês",
      shrinkWaveCost: "R$895/mês"
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <h2 
        className="font-bold text-gray-900 text-center mb-14"
        style={{ 
          fontSize: '36px',
          fontFamily: "'Inter Tight', sans-serif"
        }}
      >
        {currentContent.title}
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700 min-w-[200px]">
                {currentContent.fragmented}
              </span>
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                  <div 
                    className="bg-gray-500 h-6 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '100%', animation: 'slideIn 1.5s ease-out' }}
                  ></div>
                </div>
                <span className="text-xl font-bold text-gray-600 min-w-[120px]">
                  {currentContent.traditionalCost}
                </span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700 min-w-[200px]">
                {currentContent.shrinkWave}
              </span>
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex-1 bg-cyan-100 rounded-full h-6 relative overflow-hidden">
                  <div 
                    className="bg-[#0E7490] h-6 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '36%', animation: 'slideIn 1.5s ease-out 0.5s both' }}
                  ></div>
                </div>
                <span className="text-xl font-bold text-brand-teal min-w-[120px]">
                  {currentContent.shrinkWaveCost}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <p 
          className="text-center text-gray-600 mt-6"
          style={{ fontSize: '18px' }}
        >
          {currentContent.subtitle}
        </p>
      </div>
      
      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width, 100%);
          }
        }
      `}</style>
    </div>
  );
};

export default CostComparison;
