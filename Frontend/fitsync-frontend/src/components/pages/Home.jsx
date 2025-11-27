import React from 'react';

const Home = ({ onStartJourney }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">
                Transform Your <span className="hero-highlight">Fitness</span> Journey
              </h1>
              <p className="hero-subtitle">
                Join FitSync and experience the perfect blend of technology and fitness. 
                Track your progress, connect with trainers, and achieve your goals.
              </p>
              <button 
                className="btn btn-orange btn-lg"
                onClick={onStartJourney}
              >
                Start Your Journey
              </button>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format" 
                  alt="Fitness Training"
                  style={{
                    width: '100%',
                    maxWidth: '450px',
                    height: '320px',
                    borderRadius: '20px',
                    objectFit: 'cover',
                    border: '3px solid var(--primary-orange)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Why Choose FitSync?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="program-card text-center">
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 4px 8px rgba(255, 107, 53, 0.3))' }}>📊</div>
                <h4 style={{ 
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '700',
                  fontSize: '1.4rem',
                  marginBottom: '1rem'
                }}>Smart Tracking</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: '1.6' }}>Advanced fitness tracking with real-time progress monitoring</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card text-center">
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 4px 8px rgba(255, 107, 53, 0.3))' }}>👨🏫</div>
                <h4 style={{ 
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '700',
                  fontSize: '1.4rem',
                  marginBottom: '1rem'
                }}>Expert Trainers</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: '1.6' }}>Connect with certified trainers for personalized guidance</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card text-center">
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 4px 8px rgba(255, 107, 53, 0.3))' }}>💪</div>
                <h4 style={{ 
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '700',
                  fontSize: '1.4rem',
                  marginBottom: '1rem'
                }}>Flexible Plans</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: '1.6' }}>Choose from various membership plans that suit your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;