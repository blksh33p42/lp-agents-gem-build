import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { BuiltIn } from './components/BuiltIn';
import { Integrations } from './components/Integrations';
import { Setup } from './components/Setup';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CTAStrip } from './components/CTAStrip';
import { ScrollBackground } from './components/ScrollBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-500/30 relative">
      <ScrollBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <UseCases />
        <BuiltIn />
        <Integrations />
        <Setup />
        <CTAStrip />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;