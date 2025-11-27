import React, { useState } from 'react';

const TrainerDashboard = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'clients', label: 'My Clients', icon: '👥' },
    { id: 'schedule', label: 'Schedule', icon: '📅' },
    { id: 'workouts', label: 'Workout Plans', icon: '💪' },
    { id: 'earnings', label: 'Earnings', icon: '💰' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div>
            <h3 style={{ color: 'var(--primary-orange)' }}>Trainer Dashboard - {user.name}</h3>
            <div className="row mt-4">
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>25</h4>
                  <p>Active Clients</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>8</h4>
                  <p>Sessions Today</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>₹45,000</h4>
                  <p>Monthly Earnings</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>4.8⭐</h4>
                  <p>Rating</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'clients':
        return (
          <div>
            <h3 style={{ color: 'var(--primary-orange)' }}>My Clients</h3>
            <div className="program-card mt-3">
              <p>Client management and progress tracking will be available here.</p>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h3 style={{ color: 'var(--primary-orange)' }}>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h3>
            <div className="program-card mt-3">
              <p>Content for {activeSection} section will be implemented here.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 sidebar">
            <h4 style={{ color: 'var(--primary-orange)', marginBottom: '2rem' }}>Trainer Panel</h4>
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className="me-2">{item.icon}</span>
                {item.label}
              </div>
            ))}
            <div className="sidebar-item mt-4" onClick={onLogout}>
              <span className="me-2">🚪</span>
              Logout
            </div>
          </div>
          
          <div className="col-md-9" style={{ padding: '2rem' }}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;