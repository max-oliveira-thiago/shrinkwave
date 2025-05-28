
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingJudithButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button onClick={() => window.location.href = '/judith'} className="px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 flex items-center space-x-2" style={{
        backgroundColor: '#7E3AF2',
        color: 'white',
        borderColor: '#7E3AF2'
      }} onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(126, 58, 242, 0.3)';
      }} onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}>
        <MessageCircle className="h-5 w-5" />
        <span>💬 Fale com a Judith (IA)</span>
      </Button>
    </div>
  );
};

export default FloatingJudithButton;
