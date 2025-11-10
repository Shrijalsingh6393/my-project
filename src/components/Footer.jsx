// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--dark-color)', color: 'white', padding: '40px 0', fontSize: '0.9rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ marginBottom: '20px' }}>
          <h5 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>AnyLogic</h5>
          <p>The leading simulation modeling software for business applications.</p>
          <p>Trusted by over 40% of Fortune 100 companies.</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h5 style={{ marginBottom: '10px' }}>Solutions</h5>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Supply Chain</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Manufacturing</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Road Traffic</a></li>
          </ul>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h5 style={{ marginBottom: '10px' }}>Resources</h5>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Downloads</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Support & Help</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Webinars</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #495057', marginTop: '20px' }}>
        &copy; {new Date().getFullYear()} AnyLogic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;