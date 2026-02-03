import React, { useEffect, useState } from 'react';

export const ScrollBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-dark-bg" />
      
      {/* Blob 1: Top Left - Purple - Moves down slowly */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] bg-brand-700/10 rounded-full blur-[120px] opacity-60 mix-blend-screen will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
      />

      {/* Blob 2: Center Right - Blue - Moves up slowly (opposing motion creates depth) */}
      <div 
        className="absolute top-[30%] -right-[20%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[100px] opacity-50 mix-blend-screen will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * -0.05}px, 0)` }}
      />

      {/* Blob 3: Bottom Left - Violet - Moves down slightly faster */}
      <div 
        className="absolute top-[80%] -left-[10%] w-[50vw] h-[50vw] bg-brand-600/10 rounded-full blur-[140px] opacity-40 mix-blend-screen will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
      />
    </div>
  );
};