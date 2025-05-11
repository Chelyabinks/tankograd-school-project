
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://i.pinimg.com/originals/48/66/22/486622d4c5acb2a676a586d7e53c8e62.jpg")', 
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
      
      <div className="relative h-full container mx-auto flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 animate-fade-in drop-shadow-lg">
          Челябинск в годы<br />
          <span className="text-soviet-red bg-black bg-opacity-30 px-4 py-1">Великой Отечественной</span>
        </h1>
        
        <div className="w-32 h-1 bg-soviet-red mb-6" />
        
        <h2 className="text-xl md:text-3xl text-white font-serif mb-8 animate-fade-in drop-shadow-md" style={{ animationDelay: '0.3s' }}>

        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
