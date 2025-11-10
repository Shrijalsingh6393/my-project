// src/components/FeaturesSection.jsx
import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div style={{ padding: '20px', border: '1px solid #dee2e6', borderRadius: '8px', marginBottom: '20px', backgroundColor: 'white' }}>
    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.25rem' }}>{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    { title: "Detailed Vehicle Modeling", description: "Each vehicle is an agent with individual parameters, enabling accurate simulation of driver behavior, speed control, and lane merging." },
    { title: "2D/3D Visualization", description: "Animate your models in stunning 2D or 3D. Use density maps to clearly visualize congestion and bottlenecks." },
    { title: "Traffic Light Optimization", description: "Design, test, and optimize complex traffic light sequences and timings to enhance flow and capacity." },
    { title: "GIS Map Integration", description: "Quickly build road networks by converting GIS shapefiles or using built-in map data for real-world accuracy." },
  ];

  return (
    <div id="features" className="section" style={{ backgroundColor: 'var(--secondary-color)' }}>
      <div className="container">
        <h2 className="section-title">Key Features of the Road Traffic Library</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
        <div id="libraries" style={{ marginTop: '50px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--dark-color)', fontSize: '1.5rem', marginBottom: '15px' }}>Multimethod Modeling Capabilities</h3>
            <p>Combine road traffic with other systems using industry-specific libraries:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'inline-flex', gap: '40px', fontWeight: 'bold' }}>
                <li>**Pedestrian Library**</li>
                <li>**Rail Library**</li>
                <li>**Material Handling Library**</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;