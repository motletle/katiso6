import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Implement your own validation or API call here
    if (email && password) {
      // This is where you would make an actual API request to verify the credentials
      console.log("Logging in with", email, password);
      navigate('/student-dashboard'); // Redirect to student dashboard on successful login
    } else {
      console.log('Please enter both email and password');
    }
  };

  // Handle redirect to sign-up page
  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the sign-up page
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f2f2f2',
  };

  const loginBoxStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  };

  const labelStyle = {
    display: 'block',
    textAlign: 'left',
    marginBottom: '5px',
    fontWeight: '500',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#333',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const signupLinkStyle = {
    marginTop: '15px',
    fontSize: '14px',
    color: '#333',
  };

  const signUpButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <div style={loginBoxStyle}>
        <h3 style={headingStyle}>Student Login</h3>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={inputStyle}
          />
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={inputStyle}
          />
          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Login
          </button>
        </form>

        <div style={signupLinkStyle}>
          <p>Don't have an account? <button onClick={handleSignUp} style={signUpButtonStyle}>Sign Up</button></p>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
