// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  // Define a style for the wrapper to give it a fixed height
  const heroWrapperStyle = {
    position: 'relative', // Crucial for positioning the image and content
    height: '500px',      // Fixed height for the hero area
    overflow: 'hidden',   // Hide anything that spills out
  };

  // Define a style for the content container
  const contentStyle = {
    position: 'absolute', // Position content over the image
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
    textAlign: 'center',
    color: 'white',
    zIndex: 2, // Ensure text is above the image and overlay
  };

  return (
    <div className="section" style={heroWrapperStyle}>
      
      {/* 1. Image Tag for Background */}
      <img 
        src="backgroung-traffic.jpg" // 👈 Use the <img> tag here
        alt="AnyLogic Road Traffic Simulation"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures image covers the full area without distortion
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0, // Base layer
        }}
      />
      
      {/* 2. Dark Overlay for Readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark semi-transparent overlay
          zIndex: 1, // Above the image, below the content
        }}
      ></div>

      {/* 3. Content Layer (Text and Buttons) */}
      <div className="container" style={contentStyle}>
        <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
                Leading **Road Traffic Simulation Software**
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
                Simulate road networks, analyze traffic flow, and optimize infrastructure design with the powerful **AnyLogic Road Traffic Library**.
            </p>
            
            {/* Call to Action Buttons */}
            <button className="btn-primary" style={{ marginRight: '15px' }}>
                Start Your Free Trial
            </button>
            <button className="btn-primary" style={{ backgroundColor: 'transparent', border: '2px solid white' }}>
                Request a Demo
            </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;