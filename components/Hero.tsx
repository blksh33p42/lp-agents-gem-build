import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const Hero: React.FC = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32">
       {/* Background Glow - Updated colors */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -z-10 opacity-50" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none -z-10 opacity-30" />

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
        
        {/* Updated Heading Typography */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] md:leading-[1.1] text-white drop-shadow-sm">
          Automate your workflow with <br className="hidden md:block"/>
          <span className="text-brand-400 relative inline-block">
            AI agents
            {/* SVG Underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-500 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Automate workflows with intelligent task ownership. 
          Configure triggers, define behaviors, and integrate deeply with your tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto">
            Get started for free
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <FileText className="w-4 h-4 mr-2" />
            Read setup docs
          </Button>
        </div>

        {/* Hero Visual - Placeholder with new border and surface color */}
        <div className="w-full max-w-5xl mt-16 relative group">
          <div className="absolute -inset-1 bg-brand-gradient rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] bg-dark-surface rounded-2xl border border-dark-border flex items-center justify-center">
             <span className="text-gray-500 font-medium">UI Mockup / Screenshot</span>
          </div>
        </div>

      </div>
    </Section>
  );
};