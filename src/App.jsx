// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CaseStudiesSection />
        {/* Placeholder for a Download/Testimonial CTA section */}
        <div id="download" className="section" style={{ textAlign: 'center', backgroundColor: '#e6f0ff', padding: '60px 0' }}>
            <h2 style={{ color: 'var(--dark-color)' }}>Ready to Optimize Your Infrastructure?</h2>
            <p style={{ fontSize: '1.2rem', margin: '15px 0 30px' }}>Join GE, PwC, and IBM in trusting AnyLogic for complex system modeling.</p>
            <button className="btn-primary">Request a Quote</button>
            <button className="btn-primary" style={{ marginLeft: '20px', backgroundColor: 'white', color: 'var(--primary-color)', border: '2px solid var(--primary-color)' }}>Download PLE</button>
        </div>
      </main>
      <Chatbot />
      <Footer />

    </div>
  );
}

export default App;


