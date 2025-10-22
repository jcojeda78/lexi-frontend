import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from './components/ui/toaster';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsShowcase from './components/StatsShowcase';
import ProductFlowSection from './components/ProductFlowSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Header />
          <main>
            <HeroSection />
            <StatsShowcase />
            <ProductFlowSection />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
          </main>
          <Footer />
          <Toaster />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
