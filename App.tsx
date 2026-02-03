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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <BuiltIn />
        <Integrations />
        <Setup />
        <div className="bg-dark-surface/50 py-16 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Scalable by design</h2>
                <p className="text-gray-400 max-w-xl mx-auto">Create multiple agents tailored to different projects or teams, ensuring your entire organization runs on autopilot.</p>
            </div>
        </div>
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;