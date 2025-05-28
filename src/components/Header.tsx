
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  language: string;
  onLanguageChange: (lang: string) => void;
}

const Header = ({
  language,
  onLanguageChange
}: HeaderProps) => {
  const translations = {
    howItWorks: language === 'en' ? 'How it works' : 'Como funciona',
    benefits: language === 'en' ? 'Benefits' : 'Benefícios',
    faq: 'FAQ',
    products: language === 'en' ? 'Products' : 'Produtos',
    sessionManagement: language === 'en' ? '1-on-1 Session Management' : 'Gestão de Atendimentos 1-a-1',
    consultingProjects: language === 'en' ? 'Consulting & Projects' : 'Consultoria e Projetos',
    digitalProducts: language === 'en' ? 'Recurring Digital Products' : 'Produtos Digitais com Recorrência',
    legalOffice: language === 'en' ? 'Automated Legal Office' : 'Jurídico Automatizado',
    askJudith: language === 'en' ? 'Ask Judith 🪄' : 'Pergunte à Judith 🪄',
    login: language === 'en' ? 'Login' : 'Entrar'
  };

  return (
    <header 
      className="fixed top-0 w-full z-50 py-4"
      style={{
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link to="/">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <nav 
            className="flex items-center space-x-8 px-[20px]"
            style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
            }}
          >
            <Link to="/#how-it-works" className="text-gray-600 hover:text-shrink-600 transition-colors">
              {translations.howItWorks}
            </Link>
            
            <Link to="/#benefits" className="text-gray-600 hover:text-shrink-600 transition-colors">
              {translations.benefits}
            </Link>
            
            <Link to="/#faq" className="text-gray-600 hover:text-shrink-600 transition-colors">
              {translations.faq}
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-600 hover:text-shrink-600 transition-colors flex items-center gap-1 bg-transparent border-none p-0 h-auto font-normal">
                {translations.products}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/session-management" className="block w-full">
                    {translations.sessionManagement}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/consulting-projects" className="block w-full">
                    {translations.consultingProjects}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/digital-products" className="block w-full">
                    {translations.digitalProducts}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/legal-office" className="block w-full">
                    {translations.legalOffice}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white border-0">
            <Link to="/judith">
              {translations.askJudith}
            </Link>
          </Button>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
          <Button variant="outline" className="hidden md:inline-flex border-shrink-500 text-shrink-600">
            {translations.login}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
