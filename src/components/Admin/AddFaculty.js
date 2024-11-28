import React, { useState } from 'react';

function AddFaculty() {
  const [facultyName, setFacultyName] = useState('');
  const [facultyDescription, setFacultyDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding faculty:', facultyName, facultyDescription);
    // Handle faculty addition logic here
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
    width: '400px',
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
        <h3 style={headingStyle}>Add Faculty</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={labelStyle}>Faculty Name:</label>
            <input
              type="text"
              value={facultyName}
              onChange={(e) => setFacultyName(e.target.value)}
              required
              placeholder="Enter faculty name"
              style={inputStyle}
            />
          </div>

          <div className="form-group">
            <label style={labelStyle}>Description:</label>
            <textarea
              value={facultyDescription}
              onChange={(e) => setFacultyDescription(e.target.value)}
              required
              placeholder="Enter faculty description"
              style={{ ...inputStyle, height: '120px' }} // Adjust height for textarea
            />
          </div>

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Add Faculty
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFaculty;
