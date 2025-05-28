import React from 'react';
import Logo from './Logo';
interface FooterProps {
  language: string;
}
const Footer = ({
  language
}: FooterProps) => {
  const content = {
    en: {
      termsOfUse: "Terms of Use",
      privacyPolicy: "Privacy Policy",
      contact: "Contact",
      rights: "All rights reserved"
    },
    pt: {
      termsOfUse: "Termos de Uso",
      privacyPolicy: "Política de Privacidade",
      contact: "Contato",
      rights: "Todos os direitos reservados"
    }
  };
  const currentContent = language === 'pt' ? content.pt : content.en;
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-50 border-t border-gray-200 py-0">
      <div className="container mx-auto lg:px-8 px-0">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Logo className="mb-4 md:mb-0" />
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-shrink-600 transition-colors">
              {currentContent.termsOfUse}
            </a>
            <a href="#" className="text-gray-600 hover:text-shrink-600 transition-colors">
              {currentContent.privacyPolicy}
            </a>
            <a href="#" className="text-gray-600 hover:text-shrink-600 transition-colors">
              {currentContent.contact}
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 py-0">
          <p>© {currentYear} Shrink Wave – {currentContent.rights}</p>
        </div>
      </div>
    </footer>;
};
export default Footer;