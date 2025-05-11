
import React from 'react';

interface TimelineEventProps {
  year: string;
  title: string;
  children: React.ReactNode;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ year, title, children }) => {
  return (
    <div className="mb-12 relative">
      {/* Circle on timeline */}
      <div className="absolute left-0 w-6 h-6 bg-soviet-red rounded-full mt-1.5 -ml-3 border-4 border-vintage-beige" />
      
      {/* Content */}
      <div className="ml-8 pb-4 border-b border-gray-300">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
          <span className="inline-block py-1 px-3 bg-soviet-red text-white text-sm font-bold rounded">
            {year}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
