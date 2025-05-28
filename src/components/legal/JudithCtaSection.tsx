
import React from 'react';
import { Button } from '@/components/ui/button';

interface JudithCtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary';
}

const JudithCtaSection: React.FC<JudithCtaSectionProps> = ({
  title = "Talk to Judith, your AI automation strategist",
  description = "Get a tailored quote and a preview of your future workflow in minutes.",
  buttonText = "Talk to Judith",
  variant = 'primary'
}) => {
  if (variant === 'primary') {
    return (
      <section className="py-20 reveal-element" style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #0E7490 100%)',
        color: 'white'
      }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold mb-6" style={{
              fontSize: '36px',
              fontFamily: "'Inter Tight', sans-serif"
            }}>
              {title}
            </h2>
            <p className="mb-8" style={{
              fontSize: '20px',
              lineHeight: '140%',
              color: 'rgba(255,255,255,0.9)'
            }}>
              {description}
            </p>
            <Button onClick={() => window.location.href = '/judith'} className="px-8 py-4 text-lg font-semibold transform transition-all duration-300" style={{
              backgroundColor: 'white',
              color: '#0E7490',
              borderColor: 'white'
            }} onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.backgroundColor = '#F8FAFC';
            }} onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = 'white';
            }}>
              {buttonText}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 reveal-element" style={{
      background: 'rgba(255,255,255,0.95)'
    }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-xl text-center transform transition-all duration-300" style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)'
          }} onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.06)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }} onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <h3 className="font-bold mb-4" style={{
              fontSize: '24px',
              fontFamily: "'Inter Tight', sans-serif"
            }}>
              {title}
            </h3>
            <p className="mb-6" style={{
              fontSize: '18px',
              lineHeight: '140%'
            }}>
              {description}
            </p>
            <Button onClick={() => window.location.href = '/judith'} className="px-8 py-3 text-lg font-semibold transform transition-all duration-300" style={{
              backgroundColor: '#0E7490',
              color: 'white',
              borderColor: '#0E7490'
            }} onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(14, 116, 144, 0.3)';
            }} onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudithCtaSection;
