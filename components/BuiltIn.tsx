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
             {/* Mock Chat Interface */}
             <div className="bg-dark-surface border border-white/10 rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="space-y-6">
                  {/* User Message */}
                  <div className="flex items-end justify-end space-x-2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm">
                      What's the status of the Q3 Roadmap?
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-600 border border-white/10 overflow-hidden">
                       <img src="https://picsum.photos/32/32?random=1" alt="User" />
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex items-end justify-start space-x-2">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">D</div>
                     <div className="bg-white/10 text-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-white/5 w-full">
                       <p className="mb-2">The Q3 Roadmap is <strong>75% complete</strong>.</p>
                       <ul className="list-disc pl-4 space-y-1 text-gray-400 text-xs">
                         <li>Backend migration: Done</li>
                         <li>UI Refresh: In Review</li>
                         <li>Mobile App: <span className="text-yellow-400">At Risk (Deadline: Fri)</span></li>
                       </ul>
                     </div>
                  </div>
                </div>
                
                {/* Input Area */}
                <div className="mt-6 relative">
                  <input 
                    type="text" 
                    placeholder="Ask Dart anything..." 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    disabled
                  />
                  <div className="absolute right-3 top-3 text-gray-500">↵</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};