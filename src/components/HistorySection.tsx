
import React from 'react';
import { cn } from "@/lib/utils";

interface HistorySectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  imageUrl?: string;
  imageSide?: 'left' | 'right';
  className?: string;
}

const HistorySection: React.FC<HistorySectionProps> = ({
  id,
  title,
  children,
  imageUrl,
  imageSide = 'right',
  className
}) => {
  return (
    <section id={id} className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="border-b-2 border-soviet-red pb-2">{title}</span>
        </h2>
        
        <div className={cn(
          "flex flex-col md:flex-row gap-8 items-center", 
          imageSide === 'left' ? 'md:flex-row-reverse' : ''
        )}>
          {imageUrl && (
            <div className="md:w-1/3">
              <img 
                src={imageUrl} 
                alt={title} 
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
              />
            </div>
          )}
          
          <div className={imageUrl ? "md:w-2/3" : "w-full"}>
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
