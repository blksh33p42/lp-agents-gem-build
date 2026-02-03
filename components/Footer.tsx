import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Section className="py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Start automating today</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Take control of your project management today with intelligent automation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <Button size="lg">Get started for free</Button>
          <Button variant="ghost" size="lg">Read setup docs</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/10 pt-16 max-w-4xl mx-auto">
           <div>
             <h4 className="font-bold text-white mb-4">Product</h4>
             <ul className="space-y-2 text-sm text-gray-500">
               <li><a href="#" className="hover:text-blue-400">AI Agents</a></li>
               <li><a href="#" className="hover:text-blue-400">Roadmap</a></li>
               <li><a href="#" className="hover:text-blue-400">Changelog</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-white mb-4">Resources</h4>
             <ul className="space-y-2 text-sm text-gray-500">
               <li><a href="#" className="hover:text-blue-400">Docs</a></li>
               <li><a href="#" className="hover:text-blue-400">Community</a></li>
               <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-white mb-4">Company</h4>
             <ul className="space-y-2 text-sm text-gray-500">
               <li><a href="#" className="hover:text-blue-400">About</a></li>
               <li><a href="#" className="hover:text-blue-400">Blog</a></li>
               <li><a href="#" className="hover:text-blue-400">Careers</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-bold text-white mb-4">Legal</h4>
             <ul className="space-y-2 text-sm text-gray-500">
               <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
               <li><a href="#" className="hover:text-blue-400">Terms</a></li>
               <li><a href="#" className="hover:text-blue-400">Security</a></li>
             </ul>
           </div>
        </div>
        
        <div className="mt-16 text-xs text-gray-600">
          © {new Date().getFullYear()} Dart Inc. All rights reserved.
        </div>
      </Section>
    </footer>
  );
};