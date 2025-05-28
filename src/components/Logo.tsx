
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/lovable-uploads/ac738b22-30f0-473c-98b0-9f336f9bcca6.png"
        alt="Shrink Wave Logo"
        className="h-8 w-auto"
      />
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-shrink-500 to-shrink-600 bg-clip-text text-transparent">Shrink Wave</span>
    </div>
  );
};

export default Logo;
