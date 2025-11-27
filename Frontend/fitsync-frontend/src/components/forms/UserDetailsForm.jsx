import React, { useState } from 'react';

const UserDetailsForm = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    goal: 'weight_loss',
    activityLevel: 'moderate',
    dietPreference: 'vegetarian',
    medicalConditions: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center" style={{ backgroundColor: 'var(--dark-black)', paddingTop: '120px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="form-container">
              <div className="text-center mb-4" style={{ marginTop: '1rem' }}>
                <h2 className="form-title">Tell Us About Yourself</h2>
                <p className="form-subtitle">Help us create your personalized fitness plan</p>
              </div>

              <form onSubmit={handleSubmit} className="user-form">
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
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Your age"
                      min="16"
                      max="80"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Weight (kg)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="Weight in kg"
                      min="30"
                      max="200"
                      required
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Height (cm)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="height"
                      value={formData.height}
                      onChange={handleChange}
                      placeholder="Height in cm"
                      min="120"
                      max="220"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Fitness Goal</label>
                    <select
                      className="form-select"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                    >
                      <option value="weight_loss">Weight Loss</option>
                      <option value="muscle_gain">Muscle Gain</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="endurance">Build Endurance</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Activity Level</label>
                    <select
                      className="form-select"
                      name="activityLevel"
                      value={formData.activityLevel}
                      onChange={handleChange}
                    >
                      <option value="sedentary">Sedentary</option>
                      <option value="light">Light Activity</option>
                      <option value="moderate">Moderate Activity</option>
                      <option value="active">Very Active</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Diet Preference</label>
                  <select
                    className="form-select"
                    name="dietPreference"
                    value={formData.dietPreference}
                    onChange={handleChange}
                  >
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non_vegetarian">Non-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="keto">Keto</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Medical Conditions (Optional)</label>
                  <textarea
                    className="form-control"
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Any medical conditions we should know about..."
                  ></textarea>
                </div>

                <div className="d-flex gap-3 justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary px-4"
                    onClick={onBack}
                  >
                    Back to Home
                  </button>
                  <button
                    type="submit"
                    className="btn btn-orange px-4"
                  >
                    Generate My Plan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsForm;