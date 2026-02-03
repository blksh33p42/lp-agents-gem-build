import React from 'react';
import { Section } from './ui/Section';
import { Sliders, MousePointerClick, ShieldCheck, ListChecks } from 'lucide-react';

const steps = [
  {
    icon: Sliders,
    title: 'Quick configuration',
    description: 'Set up agents from the settings menu in just a few steps.'
  },
  {
    icon: MousePointerClick,
    title: 'No-code options',
    description: 'Use templates or visual tools to build agents without writing code.'
  },
  {
    icon: ShieldCheck,
    title: 'Fully Customizable',
    description: 'Configure permissions and behaviors in Settings → Dart AI.'
  }
];

export const Setup: React.FC = () => {
  return (
    <Section className="bg-dark-surface/30">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Easy setup and management</h2>
          <p className="text-gray-400 text-lg mb-12">
            Getting started with AI agents doesn't require a degree in prompt engineering. We've made it as simple as managing a task.
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Checklist Card */}
        <div className="bg-dark-card border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="flex items-center space-x-3 mb-6 border-b border-white/5 pb-4">
            <ListChecks className="text-blue-500" />
            <span className="font-mono text-sm text-gray-300">SETUP_CHECKLIST.md</span>
          </div>

          <div className="space-y-4">
             {[
               "Go to Settings > Agents",
               "Click 'Add Agent'",
               "Choose Default or Custom",
               "Define Triggers & Actions"
             ].map((item, idx) => (
               <div key={idx} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default group">
                 <div className="w-6 h-6 rounded border border-white/20 flex items-center justify-center text-xs text-transparent group-hover:text-white/50 transition-colors">
                   {idx + 1}
                 </div>
                 <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
               </div>
             ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
             <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
               <div className="bg-blue-500 w-3/4 h-full rounded-full"></div>
             </div>
             <div className="flex justify-between text-xs text-gray-500 mt-2">
               <span>Progress</span>
               <span>75%</span>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};