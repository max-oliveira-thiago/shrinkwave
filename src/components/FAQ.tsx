import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface FAQProps {
  language: string;
}
const FAQ = ({
  language
}: FAQProps) => {
  const content = {
    en: {
      title: "Frequently Asked Questions",
      questions: [{
        question: "How does the onboarding process work?",
        answer: "After subscribing, you'll receive a welcome email with a link to schedule your onboarding call. Our team will guide you through the setup process, customize the automation to your workflow, and provide training on how to use the system."
      }, {
        question: "How long is the setup process?",
        answer: "The typical setup takes 1-2 weeks, depending on the complexity of your workflow and the package you've chosen. Our team will work with you to ensure everything is set up correctly and tailored to your specific needs."
      }, {
        question: "What kind of support do you offer?",
        answer: "We provide free email support for 3 months after your onboarding is complete. After that, you can purchase additional support packages or schedule ad-hoc consultations as needed. Our knowledge base is always available for self-service support."
      }, {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time through your account dashboard. Your subscription will remain active until the end of the current billing period."
      }, {
        question: "Is my data secure and compliant with regulations?",
        answer: "Yes, we take data security seriously. We're GDPR and LGPD compliant, use industry-standard encryption, and never share your data with third parties. We can provide a data processing agreement upon request."
      }, {
        question: "Do you support international clients?",
        answer: "Absolutely! Our platform works globally, and we have clients in over 20 countries. All notifications and client-facing communications can be configured in multiple languages."
      }, {
        question: "Which payment methods do you accept?",
        answer: "We accept all major credit cards through our secure payment processor, Stripe. For annual subscriptions, we can also arrange alternative payment methods upon request."
      }, {
        question: "Can I integrate with my existing tools?",
        answer: "Yes, we integrate with popular tools like Google Calendar, Outlook, Zoom, Microsoft Teams, Stripe, PayPal, and many more. Our team can discuss specific integration needs during your onboarding."
      }, {
        question: "Do I need technical skills to use the platform?",
        answer: "No technical skills are required! Our platform is designed to be user-friendly, and our onboarding process ensures you're comfortable using all features. We handle the technical setup for you."
      }, {
        question: "Can I upgrade or downgrade my plan later?",
        answer: "Yes, you can change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the start of your next billing cycle."
      }]
    },
    pt: {
      title: "Perguntas Frequentes",
      questions: [{
        question: "Como funciona o processo de onboarding?",
        answer: "Após a assinatura, você receberá um e-mail de boas-vindas com um link para agendar sua chamada de onboarding. Nossa equipe o guiará pelo processo de configuração, personalizará a automação para seu fluxo de trabalho e fornecerá treinamento sobre como usar o sistema."
      }, {
        question: "Quanto tempo dura o processo de configuração?",
        answer: "A configuração típica leva de 1 a 2 semanas, dependendo da complexidade do seu fluxo de trabalho e do pacote escolhido. Nossa equipe trabalhará com você para garantir que tudo seja configurado corretamente e adaptado às suas necessidades específicas."
      }, {
        question: "Que tipo de suporte vocês oferecem?",
        answer: "Fornecemos suporte gratuito por e-mail durante 3 meses após a conclusão do seu onboarding. Depois disso, você pode adquirir pacotes de suporte adicionais ou agendar consultorias pontuais conforme necessário. Nossa base de conhecimento está sempre disponível para suporte autoatendimento."
      }, {
        question: "Posso cancelar minha assinatura a qualquer momento?",
        answer: "Sim, você pode cancelar sua assinatura a qualquer momento através do painel da sua conta. Sua assinatura permanecerá ativa até o final do período de faturamento atual."
      }, {
        question: "Meus dados estão seguros e em conformidade com os regulamentos?",
        answer: "Sim, levamos a segurança de dados a sério. Estamos em conformidade com GDPR e LGPD, usamos criptografia padrão da indústria e nunca compartilhamos seus dados com terceiros. Podemos fornecer um acordo de processamento de dados mediante solicitação."
      }, {
        question: "Vocês atendem clientes internacionais?",
        answer: "Absolutamente! Nossa plataforma funciona globalmente e temos clientes em mais de 20 países. Todas as notificações e comunicações voltadas para o cliente podem ser configuradas em vários idiomas."
      }, {
        question: "Quais métodos de pagamento vocês aceitam?",
        answer: "Aceitamos todos os principais cartões de crédito através do nosso processador de pagamentos seguro, Stripe. Para assinaturas anuais, também podemos providenciar métodos de pagamento alternativos mediante solicitação."
      }, {
        question: "Posso integrar com minhas ferramentas existentes?",
        answer: "Sim, integramos com ferramentas populares como Google Calendar, Outlook, Zoom, Microsoft Teams, Stripe, PayPal e muitas outras. Nossa equipe pode discutir necessidades específicas de integração durante seu onboarding."
      }, {
        question: "Preciso ter conhecimentos técnicos para usar a plataforma?",
        answer: "Não são necessárias habilidades técnicas! Nossa plataforma foi projetada para ser amigável, e nosso processo de onboarding garante que você se sinta confortável usando todos os recursos. Nós cuidamos da configuração técnica para você."
      }, {
        question: "Posso fazer upgrade ou downgrade do meu plano posteriormente?",
        answer: "Sim, você pode alterar seu plano a qualquer momento. Ao fazer upgrade, você receberá um pró-rata pelo restante do seu ciclo de faturamento. Ao fazer downgrade, as alterações entrarão em vigor no início do próximo ciclo de faturamento."
      }]
    }
  };
  const currentContent = language === 'pt' ? content.pt : content.en;
  return <section id="faq" style={{
    paddingTop: '64px',
    paddingBottom: '64px',
    backgroundColor: '#F9FAFB'
  }} className="relative bg-sky-50 py-[60px]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Subtle divider line */}
        
        
        <h2 className="font-bold text-center mb-16 text-gray-900" style={{
        fontSize: '2rem',
        letterSpacing: '-0.5px',
        maxWidth: '800px',
        margin: '0 auto 64px auto'
      }}>
          <span className="text-brand-teal">❓</span> {currentContent.title}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-1 px-0 my-0 rounded-none">
            {currentContent.questions.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="hover:bg-gray-50 text-left text-lg font-medium py-[5px] mx-0 my-0 px-[25px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;