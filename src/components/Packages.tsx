
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, FileCheck, Repeat, Scale } from 'lucide-react';

interface PackagesProps {
  language: string;
}

const Packages = ({ language }: PackagesProps) => {
  const content = {
    en: {
      title: "Choose the package that fits your business",
      subtitle: "Each bundle is designed to solve a specific type of operational pain. Find your match and automate what matters.",
      cta: "View Details",
      packages: [
        {
          icon: <Calendar className="h-8 w-8 text-brand-teal mb-4" />,
          title: "1-on-1 Session Management",
          description: "Smart scheduling, reminders, and client communication for independent professionals.",
          subtitle: "Perfect for therapists, coaches, and consultants who want to reduce admin and focus on clients.",
          price: "$49/month",
          link: "/session-management"
        },
        {
          icon: <FileCheck className="h-8 w-8 text-brand-teal mb-4" />,
          title: "Consulting & Projects",
          description: "Proposal automation, onboarding, and project delivery for service-based businesses.",
          subtitle: "Ideal for professionals who close custom deals and need to move faster from pitch to delivery.",
          price: "$79/month",
          link: "/consulting-projects"
        },
        {
          icon: <Repeat className="h-8 w-8 text-brand-teal mb-4" />,
          title: "Recurring Digital Products",
          description: "Memberships, course access, and delivery with student support.",
          subtitle: "Great for creators and educators scaling with digital content and community.",
          price: "$99/month",
          link: "/digital-products"
        },
        {
          icon: <Scale className="h-8 w-8 text-brand-teal mb-4" />,
          title: "Automated Legal Office",
          description: "Client intake, document generation, and case update automation.",
          subtitle: "Built for lawyers and legal professionals who want to eliminate busywork and improve client experience.",
          price: "$129/month",
          link: "/legal-office"
        }
      ]
    },
    pt: {
      title: "Escolha o pacote que se encaixa no seu negócio",
      subtitle: "Cada pacote é projetado para resolver um tipo específico de dor operacional. Encontre o seu e automatize o que importa.",
      cta: "Ver mais",
      packages: [
        {
          icon: <Calendar className="h-8 w-8 text-brand-teal mb-4" />,
          title: "Gestão de Atendimentos 1-a-1",
          description: "Agendamento inteligente, lembretes e comunicação com clientes para profissionais independentes.",
          subtitle: "Perfeito para terapeutas, coaches e consultores que querem reduzir admin e focar nos clientes.",
          price: "R$249/mês",
          link: "/session-management"
        },
        {
          icon: <FileCheck className="h-8 w-8 text-brand-teal mb-4" />,
          title: "Consultoria e Projetos",
          description: "Automação de propostas, onboarding e entrega de projetos para negócios baseados em serviços.",
          subtitle: "Ideal para profissionais que fecham contratos customizados e precisam acelerar do pitch à entrega.",
          price: "R$399/mês",
          link: "/consulting-projects"
        },
        {
          icon: <Repeat className="h-8 w-8 text-brand-teal mb-4" />,
          title: "Produtos Digitais com Recorrência",
          description: "Memberships, acesso a cursos e entrega com suporte a alunos.",
          subtitle: "Ótimo para criadores e educadores escalando com conteúdo digital e comunidade.",
          price: "R$499/mês",
          link: "/digital-products"
        },
        {
          icon: <Scale className="h-8 w-8 text-brand-teal mb-4" />,
          title: "Jurídico Automatizado",
          description: "Captação de clientes, geração de documentos e automação de atualizações de casos.",
          subtitle: "Feito para advogados e profissionais jurídicos que querem eliminar trabalho braçal e melhorar a experiência do cliente.",
          price: "R$649/mês",
          link: "/legal-office"
        }
      ]
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;

  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <h2 
          className="font-bold mb-4 text-gray-900"
          style={{
            fontSize: '36px',
            fontFamily: "'Inter Tight', sans-serif"
          }}
        >
          {currentContent.title}
        </h2>
        <p 
          className="text-gray-700 leading-relaxed max-w-4xl mx-auto"
          style={{
            fontSize: '20px',
            lineHeight: '140%'
          }}
        >
          {currentContent.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentContent.packages.map((pkg, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              marginBottom: '40px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.06)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div className="p-6 text-center flex-1">
              <div className="flex justify-center">
                {pkg.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {pkg.title}
              </h3>
              <p 
                className="font-bold text-brand-teal mb-4"
                style={{ fontSize: '24px' }}
              >
                {pkg.price}
              </p>
              <p className="text-gray-700 mb-3 font-medium" style={{ fontSize: '16px' }}>
                {pkg.description}
              </p>
              <p 
                className="text-gray-600 mb-6"
                style={{
                  fontSize: '14px',
                  fontStyle: 'italic'
                }}
              >
                → {pkg.subtitle}
              </p>
            </div>
            <div className="px-6 pb-6">
              <Button 
                className="w-full bg-[#0E7490] hover:bg-[#0a5d6b] text-white transition-all duration-300 transform hover:scale-103 shadow-lg hover:shadow-xl" 
                asChild
              >
                <Link to={pkg.link}>
                  {currentContent.cta}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
