import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = ({ onLogin, onSignup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (isLogin) {
      onLogin({ ...formData, name: 'User', role: 'user' });
    } else {
      onSignup(formData);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'user'
    });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center" style={{ backgroundColor: 'var(--dark-black)', paddingTop: '80px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-9">
            <div className="auth-card">
              <div className="text-center mb-4" style={{ marginTop: '1rem' }}>
                <Link to="/" className="auth-brand">FitSync</Link>
                <h2 className="auth-title">
                  {isLogin ? 'Welcome Back' : 'Join FitSync'}
                </h2>
                <p className="auth-subtitle">
                  {isLogin ? 'Sign in to your account' : 'Create your account'}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Role</label>
                      <select
                        className="form-select"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                      >
                        <option value="user">User</option>
                        <option value="trainer">Trainer</option>
                        <option value="gym_owner">Gym Owner</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                {!isLogin ? (
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                )}

                <button type="submit" className="btn btn-orange w-100 mb-3">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              <div className="text-center">
                <p className="auth-link-text">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    className="auth-link btn btn-link p-0 ms-1"
                    onClick={toggleMode}
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
                <Link to="/" className="auth-link">Back to Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;