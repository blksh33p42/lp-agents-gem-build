import React from 'react';
import { Section } from './ui/Section';
import { PenTool, Code, Megaphone, Search } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const cases = [
  {
    icon: PenTool,
    title: 'Design assistant',
    description: 'Automate creative production with design-focused agent workflows that organize assets and feedback.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  },
  {
    icon: Code,
    title: 'Dev support agent',
    description: 'Generate or review code based on context from assigned tasks, streamlining PR reviews.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    icon: Megaphone,
    title: 'Marketing agent',
    description: 'Have agents draft and post marketing material across all of your channels automatically.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10'
  },
  {
    icon: Search,
    title: 'Sales research agent',
    description: 'Surface qualified leads, analyze buyer intent, and enrich CRM records with contextual insights.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  }
];

export const UseCases: React.FC = () => {
  return (
    <Section id="use-cases" className="">
      <div className="mb-16">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Flexible use cases</h2>
          <p className="text-gray-400 text-lg max-w-2xl">Adapt agents to any department. From engineering to sales, automation scales with your team.</p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cases.map((item, index) => (
          <Reveal key={index} delay={index * 100} className="h-full">
            <div className="flex flex-col p-6 rounded-2xl border border-dark-border bg-dark-card/50 backdrop-blur-sm hover:border-white/10 transition-colors h-full">
              <div className={`w-12 h-12 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};