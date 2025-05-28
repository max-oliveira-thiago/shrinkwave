
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingSectionProps {
  language: 'en' | 'pt';
}

const PricingSection = ({ language }: PricingSectionProps) => {
  const content = {
    en: {
      title: "Choose Your Plan",
      plans: [
        {
          name: "Starter",
          price: "$179",
          period: "/month",
          setup: "$1,000 one-time setup",
          features: [
            "Up to 10 active projects",
            "Basic proposal templates",
            "Digital signatures",
            "Client portal access",
            "Email support"
          ],
          cta: "Start with Starter",
          popular: false
        },
        {
          name: "Professional",
          price: "$349",
          period: "/month",
          setup: "$2,000 one-time setup",
          features: [
            "Up to 50 active projects",
            "Custom proposal templates",
            "Advanced digital signatures",
            "Client portal + branding",
            "Project management tools",
            "Priority support"
          ],
          cta: "Go Professional",
          popular: true
        },
        {
          name: "Enterprise",
          price: "$699",
          period: "/month",
          setup: "$5,000 one-time setup",
          features: [
            "Unlimited projects",
            "White-label solutions",
            "Advanced integrations",
            "Custom workflows",
            "Dedicated account manager",
            "24/7 phone support"
          ],
          cta: "Contact Sales",
          popular: false
        }
      ]
    },
    pt: {
      title: "Escolha Seu Plano",
      plans: [
        {
          name: "Starter",
          price: "R$ 895",
          period: "/mês",
          setup: "R$ 4.995 setup único",
          features: [
            "Até 10 projetos ativos",
            "Templates básicos de proposta",
            "Assinaturas digitais",
            "Acesso ao portal do cliente",
            "Suporte por email"
          ],
          cta: "Começar com Starter",
          popular: false
        },
        {
          name: "Professional",
          price: "R$ 1.745",
          period: "/mês",
          setup: "R$ 9.995 setup único",
          features: [
            "Até 50 projetos ativos",
            "Templates personalizados",
            "Assinaturas digitais avançadas",
            "Portal do cliente + branding",
            "Ferramentas de gestão de projetos",
            "Suporte prioritário"
          ],
          cta: "Ir para Professional",
          popular: true
        },
        {
          name: "Enterprise",
          price: "R$ 3.495",
          period: "/mês",
          setup: "R$ 24.995 setup único",
          features: [
            "Projetos ilimitados",
            "Soluções white-label",
            "Integrações avançadas",
            "Fluxos de trabalho personalizados",
            "Gerente de conta dedicado",
            "Suporte 24/7 por telefone"
          ],
          cta: "Falar com Vendas",
          popular: false
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 
          className="text-gray-900 mb-4"
          style={{ 
            fontSize: '36px',
            fontFamily: "'Inter Tight', sans-serif",
            color: '#0F172A'
          }}
        >
          {currentContent.title}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {currentContent.plans.map((plan, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-2xl transform transition-all duration-300"
            style={{
              background: 'white',
              border: '2px solid #0E7490',
              padding: '40px',
              marginBottom: '40px',
              boxShadow: '0 4px 20px rgba(14, 116, 144, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(14, 116, 144, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(14, 116, 144, 0.1)';
            }}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span 
                  className="px-4 py-1 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: '#0E7490' }}
                >
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 
                className="font-bold mb-4"
                style={{ 
                  fontSize: '24px',
                  fontFamily: "'Inter Tight', sans-serif",
                  color: '#0F172A'
                }}
              >
                {plan.name}
              </h3>
              
              <div className="mb-2">
                <span 
                  className="font-bold text-gray-900"
                  style={{ fontSize: '32px' }}
                >
                  {plan.price}
                </span>
                <span 
                  className="text-gray-500"
                  style={{ fontSize: '16px' }}
                >
                  {plan.period}
                </span>
              </div>
              
              <p 
                className="text-gray-500"
                style={{ 
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {plan.setup}
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check 
                    className="text-brand-teal mr-3 mt-0.5 flex-shrink-0" 
                    style={{ width: '20px', height: '20px' }}
                  />
                  <span 
                    style={{ 
                      fontSize: '16px',
                      fontFamily: "'Inter', sans-serif",
                      color: '#475569'
                    }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="w-full transform transition-all duration-300 font-semibold"
              style={{
                backgroundColor: plan.popular ? '#0E7490' : 'white',
                color: plan.popular ? 'white' : '#0E7490',
                border: `2px solid #0E7490`,
                padding: '12px 24px',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.backgroundColor = '#0E7490';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.popular) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#0E7490';
                }
              }}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
