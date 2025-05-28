
import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesProps {
  language: string;
}

const Features = ({ language }: FeaturesProps) => {
  const content = {
    en: {
      title: "What You Really Get",
      subtitle: "Not just automations — a done-for-you system tailored to your business.",
      features: [
        {
          title: "Tailored setup for your process",
          description: "Every automation is designed specifically for your flow — no templates, no copy-paste."
        },
        {
          title: "Free support for the first 3 months",
          description: "We stay with you to guarantee it works, adapts, and evolves with your business."
        },
        {
          title: "Global tool integrations",
          description: "We connect with the tools you already use — from CRMs to calendars and payment systems."
        },
        {
          title: "Zero coding required",
          description: "You don't need to be tech-savvy. If you can send an email, you can manage this."
        }
      ]
    },
    pt: {
      title: "O que Você Realmente Recebe",
      subtitle: "Não apenas automações — um sistema feito sob medida para o seu negócio.",
      features: [
        {
          title: "Configuração personalizada para seu processo",
          description: "Cada automação é projetada especificamente para seu fluxo — sem templates, sem copiar e colar."
        },
        {
          title: "Suporte gratuito nos primeiros 3 meses",
          description: "Ficamos com você para garantir que funcione, se adapte e evolua com seu negócio."
        },
        {
          title: "Integrações com ferramentas globais",
          description: "Conectamos com as ferramentas que você já usa — de CRMs a calendários e sistemas de pagamento."
        },
        {
          title: "Nenhuma programação necessária",
          description: "Você não precisa ser expert em tecnologia. Se consegue enviar um email, consegue gerenciar isso."
        }
      ]
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <section 
      id="how-it-works" 
      className="relative"
      style={{ 
        paddingTop: '64px', 
        paddingBottom: '64px',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-bold text-gray-900 mb-4"
            style={{ 
              fontSize: '2rem', 
              letterSpacing: '-0.5px',
              maxWidth: '800px',
              margin: '0 auto 16px auto'
            }}
          >
            🚀 {currentContent.title}
          </h2>
          {currentContent.subtitle && (
            <p 
              className="text-xl text-gray-600"
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              {currentContent.subtitle}
            </p>
          )}
        </div>
        
        <div 
          className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-100"
          style={{ 
            padding: '32px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="rounded-full bg-shrink-100 p-2 flex-shrink-0">
                  <Check className="h-5 w-5 text-shrink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
