// src/components/CaseStudiesSection.jsx
import React from 'react';

const StudyCard = ({ title, company, snippet }) => (
  <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
    <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>{title}</h4>
    <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>Client: {company}</p>
    <p style={{ fontSize: '0.95rem' }}>{snippet}</p>
    <a href="#" style={{ display: 'block', marginTop: '10px', color: '#0056b3', textDecoration: 'none', fontWeight: 'bold' }}>Read More →</a>
  </div>
);

const CaseStudiesSection = () => {
  const studies = [
    { title: "Parking Garage & Traffic Flow Optimization", company: "NIH Campus", snippet: "Modeled 12,000+ daily vehicles to plan new parking garages and road networks for maximum efficiency." },
    { title: "Preventing Bus Bunching", company: "Public Transit Agency", snippet: "Used simulation to confirm optimization strategies and improve service reliability for public transit riders." },
    { title: "Earthmoving Project Constraints", company: "Consolidated Contractors Company (CCC)", snippet: "Simulated complex logistics to mitigate schedule impact from new, restrictive site constraints." },
  ];

  return (
    <div id="casestudies" className="section">
      <div className="container">
        <h2 className="section-title">Real-World Road Traffic Case Studies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {studies.map((study, index) => (
            <StudyCard key={index} {...study} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button className="btn-primary" style={{ backgroundColor: 'var(--dark-color)' }}>
                View All Transportation Case Studies
            </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;