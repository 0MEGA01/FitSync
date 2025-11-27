import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Toast from '../common/Toast';

const Pricing = ({ user }) => {
  const navigate = useNavigate();
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "₹6,000",
      period: "/package",
      features: [
        "Gym Access",
        "Basic Equipment",
        "Locker Room",
        "Mobile App"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Premium",
      price: "₹13,000",
      period: "/package",
      features: [
        "Full Gym Access",
        "Personal Trainer (2 sessions)",
        "Swimming Pool",
        "Group Classes",
        "Progress Tracking",
        "Diet Consultation"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Elite",
      price: "₹18,000",
      period: "/package",
      features: [
        "24/7 Gym Access",
        "Personal Trainer (Unlimited)",
        "Swimming Pool",
        "All Classes",
        "Advanced Analytics",
        "Custom Diet Plans",
        "Spa & Massage",
        "Goal Achievement Guarantee"
      ],
      popular: false
    }
  ];

  const handleChoosePlan = (plan) => {
    if (!user) {
      setToast({ 
        show: true, 
        message: 'Please Log in to choose', 
        type: 'warning' 
      });
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setToast({ 
        show: true, 
        message: `Great choice! You selected the ${plan.name} plan!`, 
        type: 'success' 
      });
    }
  };

  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--dark-black)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Programs</h2>
          <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>
            Select the perfect program package for your fitness journey
          </p>
        </div>

        <div className="row justify-content-center">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6 mb-4">
              <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}
                
                <div className="pricing-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                </div>

                <div className="pricing-features">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  className={`btn w-100 ${plan.popular ? 'btn-orange' : 'btn-outline-orange'}`}
                  onClick={() => handleChoosePlan(plan)}
                >
                  {user ? 'Choose Plan' : 'Login to Choose'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {!user && (
          <div className="text-center mt-4">
            <p style={{ color: 'var(--text-gray)' }}>
              Please <strong style={{ color: 'var(--primary-orange)' }}>login</strong> to select a membership plan
            </p>
          </div>
        )}
      </div>
      
      <Toast 
        message={toast.message}
        show={toast.show}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
};

export default Pricing;