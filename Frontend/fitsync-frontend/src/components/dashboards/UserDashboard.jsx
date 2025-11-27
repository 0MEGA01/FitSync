import React, { useState } from 'react';

const UserDashboard = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'workouts', label: 'My Workouts', icon: '💪' },
    { id: 'progress', label: 'Progress', icon: '📈' },
    { id: 'trainers', label: 'My Trainers', icon: '👨🏫' },
    { id: 'membership', label: 'Membership', icon: '🎫' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div>
            <h3 style={{ color: 'var(--primary-orange)' }}>Welcome back, {user.name}!</h3>
            <div className="row mt-4">
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>12</h4>
                  <p>Workouts This Month</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>5.2kg</h4>
                  <p>Weight Lost</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>85%</h4>
                  <p>Goal Progress</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>24</h4>
                  <p>Days Streak</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'workouts':
        return (
          <div>
            <h3 style={{ color: 'var(--primary-orange)' }}>My Workouts</h3>
            <div className="program-card mt-3">
              <p>Your workout plans and schedules will appear here.</p>
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
            <h4 style={{ color: 'var(--primary-orange)', marginBottom: '2rem' }}>User Dashboard</h4>
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

export default UserDashboard;