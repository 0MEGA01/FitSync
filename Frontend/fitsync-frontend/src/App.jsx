import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/theme.css';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Pricing from './components/pages/Pricing';
import Auth from './components/auth/Auth';
import UserDetailsForm from './components/forms/UserDetailsForm';
import PersonalizedPlan from './components/forms/PersonalizedPlan';
import UserDashboard from './components/dashboards/UserDashboard';
import TrainerDashboard from './components/dashboards/TrainerDashboard';
import GymOwnerDashboard from './components/dashboards/GymOwnerDashboard';

function App() {
  const [user, setUser] = useState(null);
  const [userFormData, setUserFormData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showPlan, setShowPlan] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    console.log('User logged in:', userData);
  };

  const handleSignup = (userData) => {
    setUser(userData);
    console.log('User signed up:', userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleStartJourney = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData) => {
    setUserFormData(formData);
    setShowForm(false);
    setShowPlan(true);
  };

  const handleBackToHome = () => {
    setShowForm(false);
    setShowPlan(false);
    setUserFormData(null);
  };

  const renderDashboard = () => {
    if (!user) return null;

    switch (user.role) {
      case 'user':
        return <UserDashboard user={user} onLogout={handleLogout} />;
      case 'trainer':
        return <TrainerDashboard user={user} onLogout={handleLogout} />;
      case 'gym_owner':
        return <GymOwnerDashboard user={user} onLogout={handleLogout} />;
      default:
        return <UserDashboard user={user} onLogout={handleLogout} />;
    }
  };

  // If user is logged in, show dashboard
  if (user) {
    return renderDashboard();
  }

  // If showing user form
  if (showForm) {
    return (
      <UserDetailsForm
        onBack={handleBackToHome}
        onSubmit={handleFormSubmit}
      />
    );
  }

  // If showing personalized plan
  if (showPlan && userFormData) {
    return (
      <PersonalizedPlan
        userData={userFormData}
        onBackToHome={handleBackToHome}
      />
    );
  }

  // Main website
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home onStartJourney={handleStartJourney} />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Pricing user={user} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth onLogin={handleLogin} onSignup={handleSignup} />} />
          <Route path="/signup" element={<Auth onLogin={handleLogin} onSignup={handleSignup} />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;