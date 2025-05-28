
import React from 'react';
import { Clock, CalendarCheck, TrendingUp } from 'lucide-react';

interface BenefitsProps {
  language: string;
}

const Benefits = ({ language }: BenefitsProps) => {
  const content = {
    en: {
      title: "Why Automate Your Process?",
      blocks: [
        {
          icon: <Clock className="h-8 w-8 text-brand-teal" />,
          title: "Save 8+ hours every week",
          description: "Stop wasting time on repetitive tasks—focus on high-value work."
        },
        {
          icon: <CalendarCheck className="h-8 w-8 text-brand-teal" />,
          title: "Cut 30% of no-shows",
          description: "Automated reminders keep your calendar full—no manual follow-up."
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-brand-teal" />,
          title: "Triple your proposal output",
          description: "Sharper client onboarding and follow-ups help you close faster."
        }
      ]
    },
    pt: {
      title: "Por que Automatizar Seu Processo?",
      blocks: [
        {
          icon: <Clock className="h-8 w-8 text-brand-teal" />,
          title: "Economize 8+ horas por semana",
          description: "Pare de desperdiçar tempo com tarefas repetitivas—foque no trabalho de alto valor."
        },
        {
          icon: <CalendarCheck className="h-8 w-8 text-brand-teal" />,
          title: "Reduza 30% das faltas",
          description: "Lembretes automatizados mantêm sua agenda cheia—sem follow-up manual."
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-brand-teal" />,
          title: "Triplique o envio de propostas",
          description: "Onboarding mais ágil e follow-ups ajudam você a fechar mais rápido."
        }
      ]
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
      
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {currentContent.blocks.map((block, index) => (
          <div 
            key={index} 
            className="text-center p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              marginBottom: '40px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            }}
          >
            <div className="flex justify-center mb-6">
              {block.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {block.title}
            </h3>
            <p className="text-gray-600 leading-relaxed" style={{ fontSize: '16px' }}>
              {block.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
