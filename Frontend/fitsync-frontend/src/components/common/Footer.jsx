import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row justify-content-center">
          {/* Gym Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">FitSync Gym</h5>
            <div className="footer-content">
              <p className="footer-text">
                <strong>📍 Location:</strong><br/>
                Cloud 9, 3 Floor, Mulund West<br/>
                Mumbai, Maharashtra 400080
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Contact Info</h5>
            <div className="footer-content">
              <p className="footer-text">
                <strong>📞 Phone:</strong><br/>
                +91 98765 43210
              </p>
              <p className="footer-text">
                <strong>📧 Email:</strong><br/>
                info@fitsync.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <div className="footer-content">
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/programs">Programs</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;