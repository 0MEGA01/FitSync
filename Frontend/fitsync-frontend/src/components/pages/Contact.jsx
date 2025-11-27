import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--dark-black)' }}>
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title" style={{ marginTop: '2rem' }}>Contact Us</h2>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="program-card">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-orange btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="program-card text-center">
                <h5 style={{ color: 'var(--primary-orange)' }}>📍 Address</h5>
                <p>Cloud 9, 3 Floor, Mulund West<br />Mumbai, 400080</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card text-center">
                <h5 style={{ color: 'var(--primary-orange)' }}>📞 Phone</h5>
                <p>+91 98765 43210<br />+91 87654 32109</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="program-card text-center">
                <h5 style={{ color: 'var(--primary-orange)' }}>✉️ Email</h5>
                <p>info@fitsync.com<br />support@fitsync.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;