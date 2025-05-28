import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/consulting/PricingSection';
import FAQ from '@/components/FAQ';
import HeroSection from '@/components/legal/HeroSection';
import NavigationMenuSection from '@/components/legal/NavigationMenuSection';
import ContractFlowSection from '@/components/legal/ContractFlowSection';
import ProductSection from '@/components/legal/ProductSection';
import JudithCtaSection from '@/components/legal/JudithCtaSection';
import FloatingJudithButton from '@/components/legal/FloatingJudithButton';
import { useLocation } from 'react-router-dom';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const LegalOffice = () => {

// Update meta description
React.useEffect(() => {
  let metaDesc = document.querySelector('meta[name="description"]');
  if(!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name','description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content','Streamline legal document workflows and client onboarding with AI.');
}, []);


// Set page title
React.useEffect(() => {
  document.title = "Legal Automations – Shrink Wave";
}, []);

  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const contractflowRef = useRef<HTMLDivElement>(null);
  const corplegalRef = useRef<HTMLDivElement>(null);
  const datashieldRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useScrollAnimations();

  useEffect(() => {
    const storedLang = sessionStorage.getItem('language');
    if (storedLang === 'pt' || storedLang === 'en') {
      setLanguage(storedLang as 'en' | 'pt');
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const hash = location.hash.substring(1);
        if (hash === 'contractflow' && contractflowRef.current) {
          contractflowRef.current.scrollIntoView({
            behavior: 'smooth'
          });
        } else if (hash === 'corplegal' && corplegalRef.current) {
          corplegalRef.current.scrollIntoView({
            behavior: 'smooth'
          });
        } else if (hash === 'datashield' && datashieldRef.current) {
          datashieldRef.current.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  const handleLanguageChange = (lang: 'en' | 'pt') => {
    if (lang === language) return;
    setLanguage(lang);
    sessionStorage.setItem('language', lang);
  };

  const content = {
    en: {
      hero: {
        title: "Automate your legal operation.",
        subtitle: "From contracts to compliance – streamlined, secure, and scalable.",
        cta: "Start Now"
      },
      menu: {
        contractflow: "ContractFlow",
        corplegal: "CorpLegal 360",
        datashield: "DataShield"
      },
      products: {
        corplegal: {
          subtitle: "Comprehensive corporate legal management platform",
          benefits: [
            "Streamlined task management",
            "Enhanced stakeholder visibility",
            "Real-time compliance tracking",
            "Automated workflow optimization"
          ],
          plans: [{
            name: "CorpLegal Starter",
            setup: "$1,500",
            monthly: "$349/month",
            features: [
              "Task intake and approval chain",
              "Integration with Monday or Jira",
              "Internal sync with CRM"
            ],
            popular: false
          }, {
            name: "CorpLegal Pro",
            setup: "$4,000",
            monthly: "$899/month",
            features: [
              "Everything in Starter",
              "Legal metrics dashboard for CFO",
              "Stakeholder visibility reports",
              "Real-time sync"
            ],
            popular: true
          }, {
            name: "CorpLegal Enterprise",
            setup: "$10,000",
            monthly: "$2,199/month",
            features: [
              "Everything in Pro",
              "Advanced automation flows",
              "Multi-region compliance",
              "Legal team collaboration tools"
            ],
            popular: false
          }]
        },
        datashield: {
          subtitle: "Advanced data protection and compliance solution",
          benefits: [
            "Automated GDPR compliance",
            "Real-time risk monitoring",
            "Comprehensive audit trails",
            "Streamlined incident management"
          ],
          plans: [{
            name: "DataShield Lite",
            setup: "$500",
            monthly: "$99/month",
            features: [
              "Consent portal",
              "Incident logging",
              "Basic risk monitoring"
            ],
            popular: false
          }, {
            name: "DataShield Pro",
            setup: "$1,500",
            monthly: "$299/month",
            features: [
              "Everything in Lite",
              "ROPA & DPIA auto-documentation",
              "Processor classification",
              "Legal evidence reports"
            ],
            popular: true
          }, {
            name: "DataShield Enterprise",
            setup: "$3,000",
            monthly: "$699/month",
            features: [
              "Everything in Pro",
              "Risk scoring system",
              "Legal audit trail",
              "Custom compliance workflows"
            ],
            popular: false
          }]
        }
      },
      judithCta: {
        title: "Still not sure?",
        description: "Talk to Judith, our automation AI, and see how the workflow would work in practice.",
        buttonText: "See example with Judith"
      }
    },
    pt: {
      hero: {
        title: "Automatize seu jurídico.",
        subtitle: "Dos contratos ao compliance – com fluidez, segurança e escalabilidade.",
        cta: "Começar agora"
      },
      menu: {
        contractflow: "ContractFlow",
        corplegal: "CorpLegal 360",
        datashield: "DataShield"
      },
      products: {
        corplegal: {
          subtitle: "Plataforma abrangente de gestão jurídica corporativa",
          benefits: [
            "Gestão de tarefas otimizada",
            "Maior visibilidade para stakeholders",
            "Monitoramento de compliance em tempo real",
            "Otimização automatizada de fluxos"
          ],
          plans: [{
            name: "CorpLegal Starter",
            setup: "R$7.500",
            monthly: "R$1.745/mês",
            features: [
              "Captação de tarefas e cadeia de aprovação",
              "Integração com Monday ou Jira",
              "Sincronização interna com CRM"
            ],
            popular: false
          }, {
            name: "CorpLegal Pro",
            setup: "R$20.000",
            monthly: "R$4.495/mês",
            features: [
              "Tudo do Starter",
              "Dashboard de métricas jurídicas para CFO",
              "Relatórios de visibilidade para stakeholders",
              "Sincronização em tempo real"
            ],
            popular: true
          }, {
            name: "CorpLegal Enterprise",
            setup: "R$50.000",
            monthly: "R$10.995/mês",
            features: [
              "Tudo do Pro",
              "Fluxos de automação avançados",
              "Compliance multi-regional",
              "Ferramentas de colaboração jurídica"
            ],
            popular: false
          }]
        },
        datashield: {
          subtitle: "Solução avançada de proteção de dados e compliance",
          benefits: [
            "Compliance LGPD automatizado",
            "Monitoramento de risco em tempo real",
            "Trilhas de auditoria abrangentes",
            "Gestão simplificada de incidentes"
          ],
          plans: [{
            name: "DataShield Lite",
            setup: "R$2.500",
            monthly: "R$495/mês",
            features: [
              "Portal de consentimento",
              "Registro de incidentes",
              "Monitoramento básico de risco"
            ],
            popular: false
          }, {
            name: "DataShield Pro",
            setup: "R$7.500",
            monthly: "R$1.495/mês",
            features: [
              "Tudo do Lite",
              "Auto-documentação ROPA & DPIA",
              "Classificação de processadores",
              "Relatórios de evidências jurídicas"
            ],
            popular: true
          }, {
            name: "DataShield Enterprise",
            setup: "R$15.000",
            monthly: "R$3.495/mês",
            features: [
              "Tudo do Pro",
              "Sistema de scoring de risco",
              "Trilha de auditoria jurídica",
              "Fluxos de compliance customizados"
            ],
            popular: false
          }]
        }
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
    <div className="min-h-screen flex flex-col clean-tech-bg" style={{
      fontFamily: "'Inter', sans-serif"
    }}>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <HeroSection content={currentContent.hero} />

      <NavigationMenuSection 
        content={currentContent.menu}
        contractflowRef={contractflowRef}
        corplegalRef={corplegalRef}
        datashieldRef={datashieldRef}
      />

      <ContractFlowSection refProp={contractflowRef} />

      <ProductSection
        product={currentContent.products.corplegal}
        title={currentContent.menu.corplegal}
        icon={Shield}
        refProp={corplegalRef}
      />

      <ProductSection
        product={currentContent.products.datashield}
        title={currentContent.menu.datashield}
        icon={Lock}
        refProp={datashieldRef}
      />

      <JudithCtaSection 
        title={currentContent.judithCta.title}
        description={currentContent.judithCta.description}
        buttonText={currentContent.judithCta.buttonText}
        variant="secondary"
      />

      <FloatingJudithButton />

      <FAQ language={language} />
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

export default LegalOffice;