import React, { useState } from 'react';

function AdminProfile() {
  const [profile, setProfile] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    role: 'Admin',
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
    console.log('Updating Admin Profile:', profile);
    // Handle profile update logic here (e.g., send to an API)
  };

  // Inline Styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
    padding: '20px',
  };

  const formBoxStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#333',
    textAlign: 'left',
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
    padding: '12px',
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
      <div style={formBoxStyle}>
        <h3 style={headingStyle}>Admin Profile</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={labelStyle}>Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Role:</label>
            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
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

export default AdminProfile;
