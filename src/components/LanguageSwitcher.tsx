
import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex space-x-1 border rounded-md overflow-hidden">
      <Button
        onClick={() => onLanguageChange('en')}
        variant={currentLanguage === 'en' ? 'default' : 'ghost'}
        className={`px-3 py-1 h-8 ${
          currentLanguage === 'en' 
            ? 'bg-shrink-500 hover:bg-shrink-600 text-white' 
            : 'text-shrink-600 hover:text-shrink-700'
        }`}
      >
        EN
      </Button>
      <Button
        onClick={() => onLanguageChange('pt')}
        variant={currentLanguage === 'pt' ? 'default' : 'ghost'}
        className={`px-3 py-1 h-8 ${
          currentLanguage === 'pt' 
            ? 'bg-shrink-500 hover:bg-shrink-600 text-white' 
            : 'text-shrink-600 hover:text-shrink-700'
        }`}
      >
        PT
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
