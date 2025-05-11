
import React from 'react';
import { cn } from "@/lib/utils";

interface NavigationItemProps {
  href: string;
  title: string;
  active?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ href, title, active }) => {
  return (
    <li className="mr-6">
      <a 
        href={href} 
        className={cn(
          "pb-2 transition-all duration-200 border-b-2 border-transparent hover:border-soviet-red",
          active && "border-soviet-red font-medium"
        )}
      >
        {title}
      </a>
    </li>
  );
};

const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-industrial-brown bg-opacity-95 text-vintage-beige p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="font-serif text-xl md:text-2xl font-bold">
            Танкоград
            <span className="text-soviet-red"> 1941-1945</span>
          </div>
        </div>
        
        <ul className="flex flex-wrap justify-center">
          <NavigationItem href="#intro" title="Тыловой город" active />
          <NavigationItem href="#industry" title="Промышленность" />
          <NavigationItem href="#education" title="Образование" />
          <NavigationItem href="#military" title="Военное дело" />
          <NavigationItem href="#hospitals" title="Госпитали" />
          <NavigationItem href="#culture" title="Культура" />
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
