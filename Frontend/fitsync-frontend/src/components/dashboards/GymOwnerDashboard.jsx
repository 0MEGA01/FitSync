import React, { useState } from 'react';

const GymOwnerDashboard = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'members', label: 'Members', icon: '👥' },
    { id: 'trainers', label: 'Trainers', icon: '👨🏫' },
    { id: 'revenue', label: 'Revenue', icon: '💰' },
    { id: 'equipment', label: 'Equipment', icon: '🏋️' },
    { id: 'reports', label: 'Reports', icon: '📈' },
    { id: 'settings', label: 'Gym Settings', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div>
            <h3 style={{ color: 'var(--primary-orange)' }}>Gym Owner Dashboard - {user.name}</h3>
            <div className="row mt-4">
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>150</h4>
                  <p>Total Members</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>12</h4>
                  <p>Active Trainers</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>₹2,50,000</h4>
                  <p>Monthly Revenue</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="program-card text-center">
                  <h4 style={{ color: 'var(--primary-orange)' }}>95%</h4>
                  <p>Equipment Status</p>
                </div>
              </div>
            </div>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="program-card">
                  <h5 style={{ color: 'var(--primary-orange)' }}>Recent Memberships</h5>
                  <p>New member registrations and renewals will be shown here.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="program-card">
                  <h5 style={{ color: 'var(--primary-orange)' }}>Quick Actions</h5>
                  <button className="btn btn-orange me-2 mb-2">Add Member</button>
                  <button className="btn btn-orange me-2 mb-2">Add Trainer</button>
                  <button className="btn btn-orange mb-2">View Reports</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'members':
        return (
          <div>
            <h3 style={{ color: 'var(--primary-orange)' }}>Member Management</h3>
            <div className="program-card mt-3">
              <p>Member list, registration, and management tools will be available here.</p>
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
            <h4 style={{ color: 'var(--primary-orange)', marginBottom: '2rem' }}>Gym Owner Panel</h4>
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

export default GymOwnerDashboard;