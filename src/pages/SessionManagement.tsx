import React, { useState, useEffect } from 'react';
import { ArrowRight, Bell, FileText, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import AnimatedCostChart from '@/components/AnimatedCostChart';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const SessionManagement = () => {

// Set page title
React.useEffect(() => {
  document.title = "Session Management Automations – Shrink Wave";
}, []);

  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  
  useScrollAnimations();
  
  useEffect(() => {
    // Load language preference from sessionStorage
    const storedLang = sessionStorage.getItem('language');
    if (storedLang === 'pt' || storedLang === 'en') {
      setLanguage(storedLang as 'en' | 'pt');
    }
  }, []);

  const handleLanguageChange = (lang: 'en' | 'pt') => {
    if (lang === language) return;
    
    setLanguage(lang);
    sessionStorage.setItem('language', lang);
  };

  const content = {
    en: {
      hero: {
        title: "Smarter sessions. Fewer no-shows.",
        subtitle: "Automate your 1-on-1 client flow with reminders, calendars, and digital intake forms.",
        cta: "Start Now"
      },
      benefits: {
        title: "Key Benefits",
        items: [
          {
            icon: <Bell className="h-8 w-8 text-brand-teal" />,
            title: "Automated Reminders",
            description: "Custom notifications reduce no-shows by 30%, with automatic follow-ups and rescheduling options."
          },
          {
            icon: <FileText className="h-8 w-8 text-brand-teal" />,
            title: "Digital Forms",
            description: "Collect information before sessions with customized intake forms that integrate with your workflow."
          },
          {
            icon: <Calendar className="h-8 w-8 text-brand-teal" />,
            title: "Integrated Calendar",
            description: "Sync with Google Calendar, Outlook or Calendly with automated booking confirmations."
          }
        ]
      },
      pricing: {
        title: "Choose Your Plan",
        tiers: [
          {
            name: "Start",
            features: [
              "WhatsApp reminders",
              "Google/Calendly integration",
              "Client sheet"
            ],
            setup: "$500",
            monthly: "$149/month",
            stripeLink: "https://stripe.com/en-us/start",
            popular: false
          },
          {
            name: "Growth",
            features: [
              "Everything in Start",
              "Intake via Typeform",
              "Stripe billing and confirmation"
            ],
            setup: "$650",
            monthly: "$179/month",
            stripeLink: "https://stripe.com/en-us/growth",
            popular: true
          },
          {
            name: "Scale",
            features: [
              "Everything in Growth",
              "NPS",
              "KPI Dashboard",
              "Client reactivation"
            ],
            setup: "$800",
            monthly: "$199/month",
            stripeLink: "https://stripe.com/en-us/scale",
            popular: false
          }
        ],
        setupLabel: "One-time setup",
        monthlyLabel: "Monthly fee",
        ctaLabel: "Get Started"
      },
      judithCta: {
        title: "Still not sure?",
        description: "Talk to Judith, our automation AI, and see how the workflow would work in practice.",
        buttonText: "See example with Judith"
      }
    },
    pt: {
      hero: {
        title: "Atendimentos mais inteligentes. Menos faltas.",
        subtitle: "Automatize seu atendimento 1-a-1 com lembretes, agendamentos e fichas digitais.",
        cta: "Começar agora"
      },
      benefits: {
        title: "Principais Benefícios",
        items: [
          {
            icon: <Bell className="h-8 w-8 text-brand-teal" />,
            title: "Lembretes Automáticos",
            description: "Notificações personalizadas reduzem faltas em 30%, com follow-ups e opções de reagendamento."
          },
          {
            icon: <FileText className="h-8 w-8 text-brand-teal" />,
            title: "Formulários Digitais",
            description: "Colete informações antes das sessões com formulários de entrada personalizados que se integram ao seu fluxo de trabalho."
          },
          {
            icon: <Calendar className="h-8 w-8 text-brand-teal" />,
            title: "Calendário Integrado",
            description: "Sincronize com Google Calendar, Outlook ou Calendly com confirmações automáticas de agendamento."
          }
        ]
      },
      pricing: {
        title: "Escolha Seu Plano",
        tiers: [
          {
            name: "Start",
            features: [
              "Lembretes WhatsApp",
              "Integração Google/Calendly",
              "Ficha de cliente"
            ],
            setup: "R$2.495",
            monthly: "R$745/mês",
            stripeLink: "https://stripe.com/pt-br/start",
            popular: false
          },
          {
            name: "Growth",
            features: [
              "Tudo do Start",
              "Intake via Typeform",
              "Faturamento e confirmação Stripe"
            ],
            setup: "R$3.245",
            monthly: "R$895/mês",
            stripeLink: "https://stripe.com/pt-br/growth",
            popular: true
          },
          {
            name: "Scale",
            features: [
              "Tudo do Growth",
              "NPS",
              "Dashboard de KPI",
              "Reativação de clientes"
            ],
            setup: "R$3.995",
            monthly: "R$995/mês",
            stripeLink: "https://stripe.com/pt-br/scale",
            popular: false
          }
        ],
        setupLabel: "Setup único",
        monthlyLabel: "Mensalidade",
        ctaLabel: "Começar"
      },
      judithCta: {
        title: "Ainda não tem certeza?",
        description: "Fale com Judith, nossa IA de automação, e veja como o fluxo seria na prática.",
        buttonText: "Ver exemplo com a Judith"
      }
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <div className="min-h-screen flex flex-col clean-tech-bg" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header 
        language={language} 
        onLanguageChange={handleLanguageChange} 
      />
      
      {/* Hero Section with Clean Tech gradient */}
      <section 
        className=" section  pb-20 reveal-element clean-tech-gradient"
        style={{ color: 'white' }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="hero-title mb-6">
              {currentContent.hero.title}
            </h1>
            <p className="hero-subtitle mb-10 leading-relaxed">
              {currentContent.hero.subtitle}
            </p>
            <Button 
              className="px-8 py-6 text-lg h-auto btn-primary btn-hover"
            >
              {currentContent.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Animated Cost Chart Section */}
      <AnimatedCostChart language={language} />
      
      {/* Benefits Section */}
      <section className=" section  reveal-element section-bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title text-center mb-16">
            {currentContent.benefits.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {currentContent.benefits.items.map((benefit, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl clean-tech-card card-hover reveal-element"
                style={{ marginBottom: '40px' }}
              >
                <div className="flex justify-center mb-6">
                  <div style={{ width: '32px', height: '32px' }}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="card-subtitle mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-center" style={{ fontSize: '16px' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Tiers Section */}
      <section className=" section  reveal-element section-bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title text-center mb-16">
            {currentContent.pricing.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {currentContent.pricing.tiers.map((tier, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-2xl clean-tech-card card-hover"
                style={{ padding: '40px', marginBottom: '40px' }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="popular-badge">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="card-title mb-4">
                    {tier.name}
                  </h3>
                  <div className="mb-2">
                    <p className="text-sm text-gray-500 mb-1">{currentContent.pricing.setupLabel}</p>
                    <p className="font-bold text-gray-900" style={{ fontSize: '32px' }}>
                      {tier.setup}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{currentContent.pricing.monthlyLabel}</p>
                    <p className="font-bold primary-color" style={{ fontSize: '24px' }}>
                      {tier.monthly}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg 
                        className="mr-3 flex-shrink-0 primary-color" 
                        style={{ width: '20px', height: '20px' }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ fontSize: '16px', color: '#374151' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => window.open(tier.stripeLink, '_blank')}
                  className={`w-full btn-hover font-semibold ${tier.popular ? 'btn-primary' : ''}`}
                  style={{
                    backgroundColor: tier.popular ? '#0E7490' : 'white',
                    color: tier.popular ? 'white' : '#0E7490',
                    border: `2px solid #0E7490`,
                    padding: '12px 24px',
                    fontSize: '16px'
                  }}
                >
                  {currentContent.pricing.ctaLabel}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Talk to Judith Section */}
      <section className=" section  reveal-element clean-tech-gradient" style={{ color: 'white' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6" style={{ color: 'white' }}>
              Talk to Judith, your AI automation strategist
            </h2>
            <p className="hero-subtitle mb-8">
              Get a tailored quote and a preview of your future workflow in minutes.
            </p>
            <Button 
              onClick={() => window.location.href = '/judith'}
              className="px-8 py-4 text-lg font-semibold btn-hover"
              style={{
                backgroundColor: 'white',
                color: '#0E7490',
                borderColor: 'white'
              }}
            >
              Talk to Judith
            </Button>
          </div>
        </div>
      </section>
      
      {/* Judith CTA Section */}
      <section className=" section  reveal-element section-bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-xl text-center clean-tech-card card-hover">
              <h3 className="card-title mb-4">
                {currentContent.judithCta.title}
              </h3>
              <p className="mb-6" style={{ fontSize: '18px', lineHeight: '140%' }}>
                {currentContent.judithCta.description}
              </p>
              <Button 
                onClick={() => window.location.href = '/judith'}
                className="px-8 py-3 text-lg font-semibold btn-primary btn-hover"
              >
                {currentContent.judithCta.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ language={language} />
      
      {/* Floating Judith Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => window.location.href = '/judith'}
          className="px-6 py-3 rounded-full shadow-lg btn-secondary clean-tech-button flex items-center space-x-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span>💬 Fale com a Judith (IA)</span>
        </Button>
      </div>
      
      {/* Footer */}
      <Footer language={language} />
      
      <style>
        {`
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Inter Tight', sans-serif !important;
            font-weight: 700 !important;
            letter-spacing: -0.02em !important;
          }
          
          .reveal-element {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s ease;
          }
          
          .reveal-element.revealed {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
};

export default SessionManagement;