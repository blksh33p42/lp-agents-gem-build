import React from 'react';
import { Section } from './ui/Section';
import { Sliders, MousePointerClick, ShieldCheck } from 'lucide-react';

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

        {/* Visual Checklist Card - Placeholder */}
        <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
             <span className="text-gray-500 font-medium relative z-10">UI Mockup / Screenshot</span>
        </div>
      </div>
    </Section>
  );
};