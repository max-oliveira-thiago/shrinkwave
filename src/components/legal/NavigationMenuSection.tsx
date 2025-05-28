
import React from 'react';
import { FileText, Shield, Lock } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface NavigationMenuSectionProps {
  content: {
    contractflow: string;
    corplegal: string;
    datashield: string;
  };
  contractflowRef: React.RefObject<HTMLDivElement>;
  corplegalRef: React.RefObject<HTMLDivElement>;
  datashieldRef: React.RefObject<HTMLDivElement>;
}

const NavigationMenuSection: React.FC<NavigationMenuSectionProps> = ({
  content,
  contractflowRef,
  corplegalRef,
  datashieldRef
}) => {
  return (
    <section className="py-16 reveal-element" style={{
      background: 'rgba(255,255,255,0.95)'
    }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto justify-center">
          <Card className="cursor-pointer transform transition-all duration-300 flex-1" style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(14, 116, 144, 0.2)',
            backdropFilter: 'blur(12px)',
            marginBottom: '40px'
          }} onClick={() => contractflowRef.current?.scrollIntoView({
            behavior: 'smooth'
          })} onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.06)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }} onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <CardHeader className="text-center">
              <FileText className="mx-auto mb-4" style={{
                color: '#0E7490',
                width: '32px',
                height: '32px'
              }} />
              <CardTitle style={{
                fontFamily: "'Inter Tight', sans-serif"
              }}>
                {content.contractflow}
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card className="cursor-pointer transform transition-all duration-300 flex-1" style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(14, 116, 144, 0.2)',
            backdropFilter: 'blur(12px)',
            marginBottom: '40px'
          }} onClick={() => corplegalRef.current?.scrollIntoView({
            behavior: 'smooth'
          })} onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.06)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }} onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <CardHeader className="text-center">
              <Shield className="mx-auto mb-4" style={{
                color: '#0E7490',
                width: '32px',
                height: '32px'
              }} />
              <CardTitle style={{
                fontFamily: "'Inter Tight', sans-serif"
              }}>
                {content.corplegal}
              </CardTitle>
            </CardHeader>
          </Card>
          
          <Card className="cursor-pointer transform transition-all duration-300 flex-1" style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(14, 116, 144, 0.2)',
            backdropFilter: 'blur(12px)',
            marginBottom: '40px'
          }} onClick={() => datashieldRef.current?.scrollIntoView({
            behavior: 'smooth'
          })} onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.06)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }} onMouseLeave={e => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <CardHeader className="text-center">
              <Lock className="mx-auto mb-4" style={{
                color: '#0E7490',
                width: '32px',
                height: '32px'
              }} />
              <CardTitle style={{
                fontFamily: "'Inter Tight', sans-serif"
              }}>
                {content.datashield}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NavigationMenuSection;
