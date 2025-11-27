import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FitSync
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                to="/"
                onClick={() => setActiveTab('home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
                to="/about"
                onClick={() => setActiveTab('about')}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeTab === 'programs' ? 'active' : ''}`}
                to="/programs"
                onClick={() => setActiveTab('programs')}
              >
                Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
                to="/gallery"
                onClick={() => setActiveTab('gallery')}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
                to="/contact"
                onClick={() => setActiveTab('contact')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          <div className="d-flex">
            <Link to="/login" className="btn btn-orange">
              Login / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;