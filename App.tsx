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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-brand-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <BuiltIn />
        <Integrations />
        <Setup />
        {/* Replaced simple div with dedicated CTA Strip */}
        <CTAStrip />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;