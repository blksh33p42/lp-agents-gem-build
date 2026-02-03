import React from 'react';
import { Section } from './ui/Section';
import { Plus } from 'lucide-react';

const partners = [
  { name: 'Cursor', role: 'Coding', initials: 'Cu', color: 'bg-blue-600' },
  { name: 'Magic Patterns', role: 'Design', initials: 'MP', color: 'bg-purple-600' },
  { name: 'Predis', role: 'Marketing', initials: 'Pr', color: 'bg-pink-600' },
  { name: 'Clay', role: 'Sales research', initials: 'Cl', color: 'bg-orange-600' },
];

export const Integrations: React.FC = () => {
  return (
    <Section id="integrations" className="border-t border-white/5 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Default agents</h2>
        <p className="text-gray-400">Dart supports integrating with any 3rd party agent ecosystem.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center space-x-4 bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition-colors cursor-default min-w-[200px]">
            <div className={`w-10 h-10 rounded-lg ${partner.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
              {partner.initials}
            </div>
            <div className="text-left">
              <h4 className="font-bold text-white text-sm">{partner.name}</h4>
              <p className="text-xs text-gray-400">{partner.role}</p>
            </div>
          </div>
        ))}
        
        {/* Add Custom Agent Button */}
        <button className="flex items-center space-x-4 bg-transparent border border-dashed border-white/20 px-6 py-4 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all min-w-[200px] group">
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
            <Plus className="w-5 h-5" />
          </div>
          <div className="text-left">
             <h4 className="font-bold text-gray-400 group-hover:text-white text-sm">Custom Agent</h4>
             <p className="text-xs text-gray-500">Connect your own</p>
          </div>
        </button>
      </div>
    </Section>
  );
};