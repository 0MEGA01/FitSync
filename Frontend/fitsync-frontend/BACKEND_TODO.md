# Backend Integration TODO

## Remove from Frontend (when backend is ready):

### 1. Mock Authentication
- Remove mock login logic in `App.jsx`
- Replace with real API calls

### 2. Mock Data Generation
- Remove mock plan generation in `PersonalizedPlan.jsx`
- Replace with API calls to Spring Boot

### 3. Local State Management
- Move user data to backend database
- Replace localStorage with JWT tokens

### 4. Hardcoded Data
- Remove hardcoded workout/diet plans
- Fetch from database via APIs

## Backend APIs Needed:

### Authentication
- POST /api/auth/login
- POST /api/auth/register
- POST /api/auth/logout
- GET /api/auth/me

### User Management
- GET /api/users/profile
- PUT /api/users/profile
- POST /api/users/details (form data)

### Plans
- POST /api/plans/generate (user details → personalized plan)
- GET /api/plans/user/{userId}
- PUT /api/plans/{planId}

### Gym Data
- GET /api/gym/info
- GET /api/trainers
- GET /api/programs

## Frontend Changes for Backend:

### 1. Add API Service
```javascript
// services/api.js
const API_BASE = 'http://localhost:8080/api';

export const authAPI = {
  login: (credentials) => fetch(`${API_BASE}/auth/login`, {...}),
  register: (userData) => fetch(`${API_BASE}/auth/register`, {...})
};
```

### 2. Replace Mock Functions
```javascript
// Before (mock)
const handleLogin = (userData) => {
  setUser(userData);
};

// After (real API)
const handleLogin = async (credentials) => {
  const response = await authAPI.login(credentials);
  const user = await response.json();
  setUser(user);
};
```

### 3. Add Loading States
- Show spinners during API calls
- Handle network errors
- Add retry mechanisms

## Keep Simple for Now:
- All current functionality works with mock data
- Easy to understand and demo
- No complex API integration yet
- Focus on UI/UX perfection first