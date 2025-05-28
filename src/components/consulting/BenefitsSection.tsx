
import React from 'react';
import { Clock, TrendingUp, Users, Shield } from 'lucide-react';

interface BenefitsSectionProps {
  language: 'en' | 'pt';
}

const BenefitsSection = ({ language }: BenefitsSectionProps) => {
  const content = {
    en: {
      title: "Key Benefits",
      benefits: [
        {
          icon: Clock,
          title: "Save 8+ hours per week",
          description: "Automate proposal creation, client onboarding, and project delivery workflows."
        },
        {
          icon: TrendingUp,
          title: "Increase close rates by 40%",
          description: "Professional proposals with integrated signatures and payment processing."
        },
        {
          icon: Users,
          title: "Scale without hiring",
          description: "Handle more clients with the same team through intelligent automation."
        },
        {
          icon: Shield,
          title: "Enterprise security",
          description: "SOC 2 compliant infrastructure with bank-level encryption and data protection."
        }
      ]
    },
    pt: {
      title: "Principais Benefícios",
      benefits: [
        {
          icon: Clock,
          title: "Economize 8+ horas por semana",
          description: "Automatize criação de propostas, onboarding de clientes e fluxos de entrega de projetos."
        },
        {
          icon: TrendingUp,
          title: "Aumente taxa de fechamento em 40%",
          description: "Propostas profissionais com assinaturas integradas e processamento de pagamentos."
        },
        {
          icon: Users,
          title: "Escale sem contratar",
          description: "Atenda mais clientes com a mesma equipe através de automação inteligente."
        },
        {
          icon: Shield,
          title: "Segurança empresarial",
          description: "Infraestrutura compatível com SOC 2 com criptografia e proteção de dados de nível bancário."
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-white consulting-section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="consulting-h2 text-gray-900 mb-4"
            style={{ 
              fontSize: '36px',
              fontFamily: "'Inter Tight', sans-serif",
              color: '#0F172A'
            }}
          >
            {currentContent.title}
          </h2>
        </div>
        
        {/* Horizontal layout for benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {currentContent.benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="text-center p-6 consulting-card rounded-lg"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  border: '1px solid rgba(14, 116, 144, 0.2)',
                  backdropFilter: 'blur(12px)',
                  marginBottom: '40px'
                }}
              >
                <div className="flex justify-center mb-6">
                  <IconComponent 
                    className="text-brand-teal consulting-icon" 
                    style={{ width: '32px', height: '32px' }}
                  />
                </div>
                <h3 
                  className="font-semibold mb-3"
                  style={{ 
                    fontSize: '18px',
                    fontFamily: "'Inter Tight', sans-serif",
                    color: '#0F172A'
                  }}
                >
                  {benefit.title}
                </h3>
                <p 
                  className="consulting-body text-gray-600"
                  style={{ 
                    fontSize: '16px',
                    fontFamily: "'Inter', sans-serif",
                    color: '#475569'
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
