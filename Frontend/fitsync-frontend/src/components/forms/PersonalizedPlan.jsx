import React from 'react';

const PersonalizedPlan = ({ userData, onBackToHome }) => {
  // Mock AI-generated plan based on user data
  const generatePlan = (data) => {
    const workoutPlan = {
      weight_loss: ['Cardio 30 min', 'Strength Training 20 min', 'HIIT 15 min'],
      muscle_gain: ['Weight Training 45 min', 'Compound Exercises', 'Rest 2 min between sets'],
      maintenance: ['Mixed Cardio 25 min', 'Light Weights 30 min', 'Stretching 10 min'],
      endurance: ['Running 40 min', 'Cycling 30 min', 'Swimming 25 min']
    };

    const dietPlan = {
      vegetarian: ['Quinoa Bowl', 'Lentil Curry', 'Greek Yogurt', 'Mixed Nuts'],
      non_vegetarian: ['Grilled Chicken', 'Fish Curry', 'Egg Whites', 'Lean Meat'],
      vegan: ['Tofu Stir-fry', 'Chickpea Salad', 'Almond Milk', 'Chia Seeds'],
      keto: ['Avocado', 'Cheese', 'Nuts', 'Olive Oil']
    };

    return {
      workout: workoutPlan[data.goal] || workoutPlan.maintenance,
      diet: dietPlan[data.dietPreference] || dietPlan.vegetarian
    };
  };

  const plan = generatePlan(userData);

  return (
    <div className="container-fluid min-vh-100" style={{ backgroundColor: 'var(--dark-black)', paddingTop: '120px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-5" style={{ marginTop: '2rem' }}>
              <h2 className="form-title">Your Personalized Plan</h2>
              <p className="form-subtitle">Based on your goals and preferences</p>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="plan-card">
                  <h3 className="plan-section-title">Workout Plan</h3>
                  <div className="plan-content">
                    {plan.workout.map((exercise, index) => (
                      <div key={index} className="plan-item">
                        <span className="plan-bullet">•</span>
                        {exercise}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="plan-card">
                  <h3 className="plan-section-title">Diet Plan</h3>
                  <div className="plan-content">
                    {plan.diet.map((food, index) => (
                      <div key={index} className="plan-item">
                        <span className="plan-bullet">•</span>
                        {food}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="plan-card">
                  <h3 className="plan-section-title">Your Profile Summary</h3>
                  <div className="profile-summary">
                    <div className="row">
                      <div className="col-md-3 col-6 mb-3">
                        <div className="summary-item">
                          <strong>Age:</strong> {userData.age} years
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-3">
                        <div className="summary-item">
                          <strong>Gender:</strong> {userData.gender}
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-3">
                        <div className="summary-item">
                          <strong>Weight:</strong> {userData.weight} kg
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-3">
                        <div className="summary-item">
                          <strong>Height:</strong> {userData.height} cm
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-3">
                        <div className="summary-item">
                          <strong>Goal:</strong> {userData.goal.replace('_', ' ')}
                        </div>
                      </div>
                      <div className="col-md-3 col-6 mb-3">
                        <div className="summary-item">
                          <strong>Diet:</strong> {userData.dietPreference.replace('_', ' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                className="btn btn-orange px-5"
                onClick={onBackToHome}
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedPlan;