import React from 'react';
import { Section } from './ui/Section';
import { Zap, Settings, Share2 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Custom triggers',
    description: 'Set agents to activate based on task assignments, comments, or workflow events.',
    // Kept gradients but made them more subtle or aligned
    gradient: 'from-brand-500 to-brand-400'
  },
  {
    icon: Settings,
    title: 'Defined behaviors',
    description: 'Configure what the agent does and where it sends data, no coding required.',
    gradient: 'from-blue-500 to-brand-500'
  },
  {
    icon: Share2,
    title: 'Workflow integration',
    description: 'Connect agents directly to tools like n8n or webhooks for full process automation.',
    gradient: 'from-brand-600 to-purple-600'
  }
];

export const Features: React.FC = () => {
  return (
    <Section id="features" className="border-t border-dark-border">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Agent-driven task automation</h2>
        <p className="text-gray-400 text-lg">Configure exactly how and when your agents work to eliminate repetitive administrative overhead.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group relative p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-brand-400" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};