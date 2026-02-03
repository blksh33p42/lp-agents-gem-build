import React, { useEffect, useRef } from 'react';

export const ScrollBackground: React.FC = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Direct DOM manipulation avoids React render cycle overhead
          if (blob1Ref.current) {
            blob1Ref.current.style.transform = `translate3d(0, ${scrollY * 0.1}px, 0)`;
          }
          if (blob2Ref.current) {
            blob2Ref.current.style.transform = `translate3d(0, ${scrollY * -0.05}px, 0)`;
          }
          if (blob3Ref.current) {
            blob3Ref.current.style.transform = `translate3d(0, ${scrollY * 0.15}px, 0)`;
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-dark-bg" />
      
      {/* Blob 1: Top Left - Purple - Moves down slowly */}
      <div 
        ref={blob1Ref}
        className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] bg-brand-700/10 rounded-full blur-[120px] opacity-60 mix-blend-screen will-change-transform"
      />

      {/* Blob 2: Center Right - Blue - Moves up slowly (opposing motion creates depth) */}
      <div 
        ref={blob2Ref}
        className="absolute top-[30%] -right-[20%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[100px] opacity-50 mix-blend-screen will-change-transform"
      />

      {/* Blob 3: Bottom Left - Violet - Moves down slightly faster */}
      <div 
        ref={blob3Ref}
        className="absolute top-[80%] -left-[10%] w-[50vw] h-[50vw] bg-brand-600/10 rounded-full blur-[140px] opacity-40 mix-blend-screen will-change-transform"
      />
    </div>
  );
};