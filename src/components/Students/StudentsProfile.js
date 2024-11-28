import React, { useState } from 'react';

function StudentProfile() {
  const [profile, setProfile] = useState({
    name: 'Student Name',
    email: 'student@example.com',
    coursesApplied: ['Course 1', 'Course 2'],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updating student profile:', profile);
    // Handle profile update logic here (e.g., send to an API)
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '20px',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '30px',
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
    marginBottom: '8px',
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

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#333',
    minHeight: '80px', // Make textarea larger
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

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h3 style={headingStyle}>Student Profile</h3>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Courses Applied:</label>
          <textarea
            name="coursesApplied"
            value={profile.coursesApplied.join(', ')}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
          <br />
          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentProfile;
