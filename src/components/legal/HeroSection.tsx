
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  content: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section className=" section  pb-20 reveal-element" style={{
      background: 'radial-gradient(ellipse at top, #0F172A 0%, #0E7490 100%)',
      color: 'white'
    }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold mb-6 leading-tight" style={{
            fontSize: '56px',
            letterSpacing: '-1px',
            fontFamily: "'Inter Tight', sans-serif"
          }}>
            {content.title}
          </h1>
          <p className="mb-10 leading-relaxed" style={{
            fontSize: '20px',
            lineHeight: '140%'
          }}>
            {content.subtitle}
          </p>
          <Button className="px-8 py-6 text-lg h-auto transform transition-all duration-300" style={{
            backgroundColor: '#0E7490',
            borderColor: '#0E7490'
          }} onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(14, 116, 144, 0.3)';
          }} onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            {content.cta} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
