import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTAStrip: React.FC = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="rounded-3xl bg-brand-gradient p-[1px] shadow-[0_0_100px_-20px_rgba(139,92,246,0.3)]">
          <div className="rounded-[23px] bg-dark-bg relative overflow-hidden px-8 py-12 md:py-16 md:px-16 text-center">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-transparent to-transparent opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Scalable by design
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                 Create multiple agents tailored to different projects or teams, ensuring your entire organization runs on autopilot.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Start for free
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Talk to sales <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};