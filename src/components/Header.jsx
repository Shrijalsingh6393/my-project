// src/components/Header.jsx
import React from 'react';
import '../tailwindsty.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <img src="Logo.png" className="h-30 w-30"></img>
        <p className='font-extrabold text-2xl pr-160'>VeloCity</p>
        
        <nav className="nav-links flex">
          <a href="#features">Features</a>
          <a href="#casestudies">CaseStudies</a>
          <a href="#libraries">Libraries</a>
          <a href="#download">Download</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;