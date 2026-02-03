import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { Badge } from './ui/Badge';

export const Hero: React.FC = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32">
       {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 opacity-50" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10 opacity-30" />

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
        <Badge className="mb-4 animate-fade-in-up">Now in Beta 2.0</Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] md:leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-sm">
          Automate your workflow with <br className="hidden md:block"/>
          <span className="text-white relative">
            AI agents
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-500 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Automate workflows with intelligent task ownership. 
          Configure triggers, define behaviors, and integrate deeply with your tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-blue-500/20">
            Get started for free
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <FileText className="w-4 h-4 mr-2" />
            Read setup docs
          </Button>
        </div>

        {/* Hero Visual - Code Mockup */}
        <div className="w-full max-w-5xl mt-16 relative perspective-1000 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden text-left font-mono text-sm leading-relaxed">
            {/* Window Controls */}
            <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-white/5 space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <div className="ml-4 text-xs text-gray-500 select-none">agent-workflow.tsx</div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex items-start space-x-2 text-gray-300">
                <span className="text-blue-400 select-none">1</span>
                <span><span className="text-purple-400">const</span> <span className="text-yellow-200">designWorkflow</span> = <span className="text-blue-300">new</span> <span className="text-green-300">Agent</span>({'{'}</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pl-4 md:pl-8">
                <span className="text-blue-400 select-none">2</span>
                <span><span className="text-sky-300">id</span>: <span className="text-orange-300">'DES-204'</span>,</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pl-4 md:pl-8">
                <span className="text-blue-400 select-none">3</span>
                <span><span className="text-sky-300">status</span>: <span className="text-orange-300">'In Progress'</span>,</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pl-4 md:pl-8">
                <span className="text-blue-400 select-none">4</span>
                <span><span className="text-sky-300">task</span>: <span className="text-orange-300">'Generate OG images for blog'</span>,</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pl-4 md:pl-8">
                <span className="text-blue-400 select-none">5</span>
                <span><span className="text-sky-300">trigger</span>: <span className="text-yellow-200">Trigger</span>.<span className="text-blue-300">ASSIGNED_TO_DESIGN_AGENT</span>,</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pl-4 md:pl-8">
                <span className="text-blue-400 select-none">6</span>
                <span><span className="text-sky-300">action</span>: <span className="text-orange-300">async</span> () ={'>'} {'{'}</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pl-8 md:pl-12">
                <span className="text-blue-400 select-none">7</span>
                <span className="text-gray-500">// Generating assets via DALL-E 3...</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pl-8 md:pl-12">
                <span className="text-blue-400 select-none">8</span>
                <span><span className="text-purple-400">return</span> <span className="text-orange-300">"4 images attached to task"</span>;</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 pl-4 md:pl-8">
                <span className="text-blue-400 select-none">9</span>
                <span>{'}'}</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <span className="text-blue-400 select-none">10</span>
                <span>{'}'});</span>
              </div>
            </div>
            
            {/* Terminal Output */}
            <div className="border-t border-white/5 bg-black/30 p-4 font-mono text-xs">
              <div className="flex space-x-2 text-green-400">
                <span>➜</span>
                <span>agent run --watch</span>
              </div>
              <div className="mt-2 space-y-1 text-gray-400">
                <p>[10:42:01] <span className="text-blue-400">INFO</span> Agent initialized</p>
                <p>[10:42:05] <span className="text-yellow-400">WARN</span> Waiting for input...</p>
                <p>[10:42:12] <span className="text-blue-400">INFO</span> Trigger detected: New Assignment</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};