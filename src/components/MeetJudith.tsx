
import React from 'react';
import { Link } from 'react-router-dom';

interface MeetJudithProps {
  language: string;
}

const MeetJudith = ({ language }: MeetJudithProps) => {
  const content = {
    en: {
      title: "Meet Judith, your AI automation strategist",
      subtitle: "Chat live, preview the exact workflow she'll build for you, and get a tailored quote in minutes.",
      buttonText: "Talk to Judith"
    },
    pt: {
      title: "Conheça Judith, sua estrategista de automação IA",
      subtitle: "Converse ao vivo, visualize o fluxo exato que ela criará para você e receba um orçamento personalizado em minutos.",
      buttonText: "Falar com Judith"
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <section 
      className="relative"
      style={{
        background: 'linear-gradient(to right, #0E7490, #7E3AF2)',
        paddingTop: '96px',
        paddingBottom: '96px'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 
            className="font-bold text-white mb-6"
            style={{ fontSize: '40px' }}
          >
            {currentContent.title}
          </h2>
          
          <p className="text-green-50 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
          
          <Link 
            to="/judith"
            className="inline-block bg-white text-cyan-700 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-50"
          >
            {currentContent.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetJudith;
