import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClass?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, containerClass = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
      <div className={`container mx-auto px-4 md:px-6 max-w-7xl relative z-10 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};