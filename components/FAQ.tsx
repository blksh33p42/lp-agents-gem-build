import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

const questions = [
  {
    question: "Can Dart integrate with 3rd party agents?",
    answer: "Yes, Dart integrates seamlessly with popular agent frameworks and allows you to connect custom agents via webhooks."
  },
  {
    question: "What are the default agents?",
    answer: "We offer built-in integrations for coding (Cursor), design (Magic Patterns), marketing (Predis), and sales research (Clay)."
  },
  {
    question: "What can trigger an agent?",
    answer: "Agents can be triggered by a wide variety of events including task assignment, status changes, new comments, or external webhook calls."
  },
  {
    question: "Is there a built-in agent in Dart?",
    answer: "Yes! 'Dart AI' is available in every workspace to help with project management tasks, summaries, and proactive reminders."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-dark-surface/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={i} className="border border-white/10 rounded-xl bg-dark-card overflow-hidden transition-all duration-200">
              <button 
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-white pr-8">{q.question}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-gray-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                  {q.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};