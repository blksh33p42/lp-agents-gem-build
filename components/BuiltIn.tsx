import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Bot } from 'lucide-react';

export const BuiltIn: React.FC = () => {
  return (
    <Section className="py-24">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark-card">
        {/* Decorative Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-6">
              <Bot className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wide">Built-in Project Manager</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Meet Dart AI</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Dart AI is our built-in project management agent that comes with every workspace. It supports tasks from creation and progress tracking to managing deadlines and team communication.
            </p>

            <div className="space-y-4">
               <div className="flex items-start space-x-3">
                 <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                 <div>
                   <h4 className="font-semibold text-white">Always On</h4>
                   <p className="text-sm text-gray-400 mt-1">No setup required. Dart AI works out of the box to keep your projects moving.</p>
                 </div>
               </div>
               <div className="flex items-start space-x-3">
                 <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
                 <div>
                   <h4 className="font-semibold text-white">Context Aware</h4>
                   <p className="text-sm text-gray-400 mt-1">Understands your project structure, priorities, and team velocity.</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="relative">
             {/* Placeholder for Chat Interface */}
             <div className="w-full max-w-md mx-auto aspect-[4/5] bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl">
                <span className="text-gray-500 font-medium">UI Mockup / Screenshot</span>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};