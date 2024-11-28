import React, { useState } from 'react';

function InstituteProfile() {
  const [profile, setProfile] = useState({
    name: 'Example Institute',
    description: 'A brief description of the institute.',
    address: '123 Institute St.',
    contact: '123-456-7890',
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
    console.log('Updating profile:', profile);
    // Handle profile update logic here
  };

  // Inline Styles
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f9',
    maxWidth: '600px',
    margin: '0 auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };

  const labelStyle = {
    display: 'block',
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
    resize: 'vertical',
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
      <h3 style={headingStyle}>Institute Profile</h3>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Institute Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <br />
        <label style={labelStyle}>Description:</label>
        <textarea
          name="description"
          value={profile.description}
          onChange={handleChange}
          required
          style={textareaStyle}
        />
        <br />
        <label style={labelStyle}>Address:</label>
        <input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <br />
        <label style={labelStyle}>Contact:</label>
        <input
          type="text"
          name="contact"
          value={profile.contact}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <br />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default InstituteProfile;
