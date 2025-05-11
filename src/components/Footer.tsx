
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-industrial-brown text-vintage-beige py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif font-bold">Танкоград 1941-1945</h3>
            <p className="text-sm mt-1">Челябинск в годы Великой Отечественной войны</p>
          </div>
          
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <div className="flex flex-col">
              <span className="text-sm"></span>
              <span className="text-xs mt-1 text-gray-400">
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
