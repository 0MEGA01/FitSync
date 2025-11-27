import React from 'react';

const About = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--dark-black)' }}>
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">About FitSync</h2>
          
          <div className="text-center mb-5" style={{ marginTop: '2rem' }}>
            <h3 style={{ color: 'var(--primary-orange)', marginBottom: '3rem' }}>
              Meet Our Team
            </h3>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="program-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="John Smith"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    border: '3px solid var(--primary-orange)'
                  }}
                />
                <h4 style={{ color: 'var(--primary-orange)', marginBottom: '0.5rem' }}>Isha Gulhane</h4>
                <h6 style={{ color: 'var(--text-gray)', marginBottom: '1rem' }}>Founder & CEO</h6>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Fitness enthusiast with 10+ years experience. Passionate about helping people achieve their fitness goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                  alt="Sarah Johnson"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    border: '3px solid var(--primary-orange)'
                  }}
                />
                <h4 style={{ color: 'var(--primary-orange)', marginBottom: '0.5rem' }}>Dipali Vasave</h4>
                <h6 style={{ color: 'var(--text-gray)', marginBottom: '1rem' }}>Head Trainer</h6>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Certified personal trainer specializing in strength training and nutrition. Loves motivating clients.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Mike Davis"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    border: '3px solid var(--primary-orange)'
                  }}
                />
                <h4 style={{ color: 'var(--primary-orange)', marginBottom: '0.5rem' }}>Soumya Prasad Sahu</h4>
                <h6 style={{ color: 'var(--text-gray)', marginBottom: '1rem' }}>Tech Lead</h6>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Software engineer who built the FitSync platform. Combines technology with fitness innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;