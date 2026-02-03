import React from 'react';
import { Section } from './ui/Section';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I've been using Dart for months now, and it is my #1 tool for managing my projects! Plus, the user experience is crisp and it's a pleasure to make, track, and then close out tasks.",
    author: "John Morgan",
    role: "Head of Engineering",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "I really enjoy using the app - it has replaced my other kanban apps because of the AI features. Auto fill properties and generate subtasks are a massive boon.",
    author: "Sijia Qiu",
    role: "Analytics Consultant",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section className="">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by teams</h2>
        <p className="text-gray-400">See what others are saying about Dart.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/5 relative">
            <Quote className="absolute top-8 right-8 w-8 h-8 text-white/10" />
            
            <p className="text-lg text-gray-300 italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
            
            <div className="flex items-center space-x-4">
              <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border border-white/10" />
              <div>
                <h4 className="text-white font-bold">{t.author}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};