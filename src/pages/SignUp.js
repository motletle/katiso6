// src/pages/StudentSignup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      console.log('Passwords do not match!');
      return;
    }
    
    // Here you would send the email and password to the server for registration
    console.log('Registering with:', email, password);
    navigate('/student-login'); // After successful signup, redirect to login
  };

  return (
    <div className="container flex-center">
      <div className="login-box">
        <h3>Student Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default StudentSignup;
