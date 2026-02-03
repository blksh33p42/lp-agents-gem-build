import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0C10]/90 backdrop-blur-md border-b border-white/5 py-4 transition-all"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Logo & Main Nav */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <a href="#" className="flex-shrink-0 block">
              <img 
                src="https://i.ibb.co/TMJRn3c1/Dart-white-wordmark.png" 
                alt="Dart" 
                className="h-6 md:h-7 w-auto object-contain"
              />
            </a>
            
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <div className="group relative">
                <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none">
                  <span>Product</span>
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </button>
              </div>
              
              <div className="group relative">
                <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </button>
              </div>

              <div className="group relative">
                <button className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                </button>
              </div>

              <a href="#download" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Download</a>
              <a href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#sales" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact sales</a>
            <a href="#login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log in</a>
            <Button variant="primary" size="sm" className="font-semibold px-5">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0B0C10] border-b border-white/10 p-4 flex flex-col space-y-4 shadow-2xl h-screen md:h-auto overflow-y-auto pb-20">
           <a href="#product" className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Product</a>
           <a href="#solutions" className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
           <a href="#resources" className="text-lg font-medium text-gray-300 hover:text-white py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>Resources</a>
           <a href="#download" className="text-lg font-medium text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Download</a>
           <a href="#pricing" className="text-lg font-medium text-gray-300 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
           
           <div className="pt-4 flex flex-col space-y-3">
             <a href="#sales" className="text-center text-gray-300 hover:text-white py-2">Contact sales</a>
             <a href="#login" className="text-center text-gray-300 hover:text-white py-2">Log in</a>
             <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>Sign up</Button>
           </div>
        </div>
      )}
    </nav>
  );
};