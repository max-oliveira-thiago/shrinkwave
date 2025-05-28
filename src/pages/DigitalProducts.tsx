import React, { useState, useEffect } from 'react';
import { ArrowRight, Rocket, MessageSquare, ChartLine, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/consulting/PricingSection';
import FAQ from '@/components/FAQ';
import AnimatedCostChart from '@/components/AnimatedCostChart';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const DigitalProducts = () => {

// Update meta description
React.useEffect(() => {
  let metaDesc = document.querySelector('meta[name="description"]');
  if(!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name','description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content','Recurring digital product automations that run your storefront 24/7.');
}, []);


// Set page title
React.useEffect(() => {
  document.title = "Digital Products – Shrink Wave";
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
        title: "Sell. Onboard. Scale.",
        subtitle: "Automate your digital product sales with smart onboarding, retention and metrics.",
        cta: "Start Now"
      },
      benefits: {
        title: "Key Benefits",
        items: [
          {
            icon: <Rocket className="h-8 w-8 text-brand-teal" />,
            title: "Automatic onboarding after payment",
            description: "Instantly welcome new customers with personalized onboarding flows that guide them through your product."
          },
          {
            icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
            title: "Smart message sequences (email + WhatsApp)",
            description: "Engage customers with intelligent messaging across multiple channels to maximize retention."
          },
          {
            icon: <ChartLine className="h-8 w-8 text-purple-500" />,
            title: "Churn, NPS and LTV metrics dashboard",
            description: "Track customer lifetime value, satisfaction scores, and churn rates with comprehensive analytics."
          }
        ]
      },
      marketComparison: {
        title: "End Integration Chaos",
        description: "Most solutions require you to integrate Hotmart, RD Station, Notion, WhatsApp... You waste hours connecting tools that don't communicate properly.",
        highlight: "With Shrink Wave, everything comes ready and tested — just sell."
      },
      pricing: {
        title: "Choose Your Plan",
        tiers: [
          {
            name: "Smart Launch",
            features: [
              "Stripe Checkout",
              "Automatic onboarding",
              "Initial WhatsApp + email message"
            ],
            setup: "$500",
            monthly: "$149/month",
            stripeLink: "https://stripe.com/en-us/start",
            popular: false
          },
          {
            name: "Scalable Relationships",
            features: [
              "Everything in Smart Launch",
              "Email sequences by stages",
              "Integrated NPS"
            ],
            setup: "$650",
            monthly: "$179/month",
            stripeLink: "https://stripe.com/en-us/growth",
            popular: true
          },
          {
            name: "Complete Funnel & Re-engagement",
            features: [
              "Everything in Scalable",
              "Inactive user reactivation (email + coupon)",
              "Dashboard with churn, MRR and LTV"
            ],
            setup: "$800",
            monthly: "$199/month",
            stripeLink: "https://stripe.com/en-us/scale",
            popular: false
          }
        ],
        setupLabel: "One-time setup",
        monthlyLabel: "Monthly fee",
        ctaLabel: "Subscribe"
      }
    },
    pt: {
      hero: {
        title: "Venda. Onboard. Escale.",
        subtitle: "Automatize seu produto digital com onboarding, retenção e métricas inteligentes.",
        cta: "Começar agora"
      },
      benefits: {
        title: "Principais Benefícios",
        items: [
          {
            icon: <Rocket className="h-8 w-8 text-brand-teal" />,
            title: "Onboarding automático após pagamento",
            description: "Dê as boas-vindas instantaneamente aos novos clientes com fluxos de onboarding personalizados que os guiam pelo seu produto."
          },
          {
            icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
            title: "Sequências inteligentes de mensagens (email + WhatsApp)",
            description: "Engaje clientes com mensagens inteligentes em múltiplos canais para maximizar a retenção."
          },
          {
            icon: <ChartLine className="h-8 w-8 text-purple-500" />,
            title: "Dashboard de métricas de churn, NPS e LTV",
            description: "Acompanhe o valor do tempo de vida do cliente, pontuações de satisfação e taxas de churn com análises abrangentes."
          }
        ]
      },
      marketComparison: {
        title: "Acabe com o Caos de Integrações",
        description: "A maioria das soluções exige integrar Hotmart, RD Station, Notion, WhatsApp... Você perde horas conectando ferramentas que não conversam direito.",
        highlight: "Com Shrink Wave, tudo já vem pronto e testado — é só vender."
      },
      pricing: {
        title: "Escolha Seu Plano",
        tiers: [
          {
            name: "Lançamento Inteligente",
            features: [
              "Stripe Checkout",
              "Onboarding automático",
              "Mensagem inicial por WhatsApp + email"
            ],
            setup: "R$2.495",
            monthly: "R$745/mês",
            stripeLink: "https://stripe.com/pt-br/start",
            popular: false
          },
          {
            name: "Relacionamento Escalável",
            features: [
              "Tudo do Lançamento Inteligente",
              "Sequência de emails por etapas",
              "NPS integrado"
            ],
            setup: "R$3.245",
            monthly: "R$895/mês",
            stripeLink: "https://stripe.com/pt-br/growth",
            popular: true
          },
          {
            name: "Funil Completo e Reengajamento",
            features: [
              "Tudo do Relacionamento Escalável",
              "Reativação de inativos (email + cupom)",
              "Dashboard com churn, MRR e LTV"
            ],
            setup: "R$3.995",
            monthly: "R$995/mês",
            stripeLink: "https://stripe.com/pt-br/scale",
            popular: false
          }
        ],
        setupLabel: "Setup único",
        monthlyLabel: "Mensalidade",
        ctaLabel: "Assinar"
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
      
      {/* Benefits Section */}
      <section className=" section  reveal-element section-bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="section-title text-center mb-16">
            {currentContent.benefits.title}
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {currentContent.benefits.items.map((benefit, index) => (
              <div 
                key={index} 
                className="flex-1 p-8 rounded-xl clean-tech-card card-hover reveal-element text-center"
                style={{ marginBottom: '40px', maxWidth: '350px' }}
              >
                <div className="flex justify-center mb-6">
                  <div style={{ width: '32px', height: '32px' }}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="card-subtitle mb-4">
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '16px' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Animated Cost Chart Section */}
      <AnimatedCostChart language={language} />
      
      {/* Market Comparison Section */}
      <section className=" section  reveal-element section-bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              {currentContent.marketComparison.title}
            </h2>
            <p className="section-subtitle mb-6">
              {currentContent.marketComparison.description}
            </p>
            <p className="font-medium primary-color" style={{ fontSize: '18px' }}>
              {currentContent.marketComparison.highlight}
            </p>
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
                color: '#7E3AF2',
                borderColor: 'white'
              }}
            >
              Talk to Judith
            </Button>
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
          <span>Fale com a IA ✨</span>
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

export default DigitalProducts;