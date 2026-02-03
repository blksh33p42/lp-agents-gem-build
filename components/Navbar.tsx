import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-dark-bg/80 backdrop-blur-md border-dark-border py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 group">
              {/* Logo placeholder */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-gray-200 transition-colors">Dart</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">AI Agents</a>
              <a href="#docs" className="text-sm text-gray-400 hover:text-white transition-colors">Docs</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-sm text-gray-400 hover:text-white transition-colors">Log in</a>
            <Button variant="primary" size="sm" className="group">
              Get started 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <button 
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-card border-b border-dark-border p-4 flex flex-col space-y-4">
           <a href="#features" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>AI Agents</a>
           <a href="#docs" className="text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Docs</a>
           <div className="h-px bg-dark-border my-2"></div>
           <Button variant="ghost" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Log in</Button>
           <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Get started</Button>
        </div>
      )}
    </nav>
  );
};