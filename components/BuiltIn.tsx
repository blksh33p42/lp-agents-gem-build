import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Bot, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Reveal } from './ui/Reveal';

export const BuiltIn: React.FC = () => {
  return (
    <Section className="py-24">
      <div className="relative rounded-3xl overflow-hidden border border-dark-border bg-dark-card">
        {/* Decorative Gradient Background - More purple */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700/10 via-transparent to-brand-900/10"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-3 py-1 mb-6">
                <Bot className="w-4 h-4 text-brand-400" />
                <span className="text-xs font-semibold text-brand-300 uppercase tracking-wide">Built-in Project Manager</span>
              </div>
            </Reveal>
            
            <Reveal delay={100}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Meet Dart AI</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Dart AI is our built-in project management agent that comes with every workspace. It supports tasks from creation and progress tracking to managing deadlines and team communication.
              </p>
            </Reveal>

            <div className="space-y-6">
               <Reveal delay={200}>
                 <div className="flex items-start space-x-3">
                   <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-semibold text-white">Always On</h4>
                     <p className="text-sm text-gray-400 mt-1">No setup required. Dart AI works out of the box to keep your projects moving.</p>
                   </div>
                 </div>
               </Reveal>
               <Reveal delay={300}>
                 <div className="flex items-start space-x-3">
                   <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0 mt-1" />
                   <div>
                     <h4 className="font-semibold text-white">Context Aware</h4>
                     <p className="text-sm text-gray-400 mt-1">Understands your project structure, priorities, and team velocity.</p>
                   </div>
                 </div>
               </Reveal>
               
               {/* Contextual CTA */}
               <Reveal delay={400}>
                 <div className="pt-4">
                    <Button variant="secondary" className="group">
                      Explore Dart AI
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </div>
               </Reveal>
            </div>
          </div>

          <Reveal delay={200} width="100%" className="relative flex justify-center items-center h-full">
             {/* Placeholder for Chat Interface - Landscape */}
             <div className="w-full aspect-[16/10] bg-dark-bg rounded-2xl border border-dark-border flex items-center justify-center shadow-2xl relative overflow-hidden">
                <span className="text-gray-500 font-medium">UI Mockup / Screenshot</span>
             </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};