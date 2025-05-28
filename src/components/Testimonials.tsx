
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialsProps {
  language: string;
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const content = {
    en: {
      title: "What Our Clients Say",
      testimonials: [
        {
          text: "Shrink Wave saved me hours every week with client scheduling and follow-ups. My no-show rate dropped dramatically after just one month.",
          name: "David Miller",
          profession: "Clinical Psychologist",
          highlight: "8+ hours saved weekly"
        },
        {
          text: "The project management automation is a game-changer. I can now manage twice as many clients with half the admin work.",
          name: "Sarah Johnson",
          profession: "Business Consultant",
          highlight: "100% more clients"
        },
        {
          text: "Setting up recurring payments and membership access was always a headache before. Now it's completely automated and I can focus on creating content.",
          name: "Michael Brown",
          profession: "Executive Coach",
          highlight: "3x revenue increase"
        },
        {
          text: "Document generation and client updates used to take hours. Shrink Wave automated our entire workflow and client satisfaction has improved significantly.",
          name: "Jennifer Lee",
          profession: "Attorney",
          highlight: "50% less admin time"
        }
      ]
    },
    pt: {
      title: "O Que Nossos Clientes Dizem",
      testimonials: [
        {
          text: "A Shrink Wave me economizou horas toda semana com agendamentos e acompanhamentos. Minha taxa de faltas caiu drasticamente após apenas um mês.",
          name: "David Miller",
          profession: "Psicólogo Clínico",
          highlight: "+8 horas economizadas por semana"
        },
        {
          text: "A automação de gerenciamento de projetos é revolucionária. Agora consigo gerenciar o dobro de clientes com metade do trabalho administrativo.",
          name: "Sarah Johnson",
          profession: "Consultora de Negócios",
          highlight: "100% mais clientes"
        },
        {
          text: "Configurar pagamentos recorrentes e liberar acessos para membros sempre foi um desafio. Agora está tudo automatizado e posso focar na criação de conteúdo.",
          name: "Michael Brown",
          profession: "Coach Executivo",
          highlight: "Aumento de 3x na receita"
        },
        {
          text: "A geração de documentos e atualizações de clientes costumavam levar horas. A Shrink Wave automatizou todo o nosso fluxo de trabalho e a satisfação do cliente melhorou significativamente.",
          name: "Jennifer Lee",
          profession: "Advogada",
          highlight: "50% menos tempo administrativo"
        }
      ]
    }
  };

  const currentContent = language === 'pt' ? content.pt : content.en;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === currentContent.testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, currentContent.testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => 
      prev === 0 ? currentContent.testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => 
      prev === currentContent.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section 
      className="relative"
      style={{ 
        paddingTop: '64px', 
        paddingBottom: '64px',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 
          className="font-bold text-center mb-16 text-gray-900"
          style={{ 
            fontSize: '2rem', 
            letterSpacing: '-0.5px',
            maxWidth: '800px',
            margin: '0 auto 64px auto'
          }}
        >
          {currentContent.title}
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow-lg pointer-events-auto hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-shrink-600" />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow-lg pointer-events-auto hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-shrink-600" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}
            >
              {currentContent.testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full px-8"
                >
                  <div 
                    className="bg-white rounded-xl border border-gray-100 text-center"
                    style={{ 
                      padding: '32px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
                    }}
                  >
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex justify-center items-center flex-col">
                      <div className="mb-3">
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.profession}</p>
                      </div>
                      <div 
                        className="inline-block"
                        style={{
                          background: '#E0F7F5',
                          color: '#00bfa6',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}
                      >
                        {testimonial.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {currentContent.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentIndex ? 'bg-shrink-500' : 'bg-shrink-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
