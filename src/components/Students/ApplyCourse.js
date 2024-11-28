import React, { useState } from 'react';

function ApplyCourse() {
  const [courseName, setCourseName] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [institutionName, setInstitutionName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      courseName,
      facultyName,
      institutionName,
      status: 'Pending',  // Default status for new applications
    };

    // Save application to localStorage
    const existingApplications = JSON.parse(localStorage.getItem('applications')) || [];
    existingApplications.push(newApplication);
    localStorage.setItem('applications', JSON.stringify(existingApplications));

    console.log('Applying for course:', courseName, facultyName, institutionName);
    // Reset form after submission
    setCourseName('');
    setFacultyName('');
    setInstitutionName('');
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

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h3 style={headingStyle}>Apply for Course</h3>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            placeholder="Enter course name"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Faculty Name:</label>
          <input
            type="text"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            required
            placeholder="Enter faculty name"
            style={inputStyle}
          />
          <br />
          <label style={labelStyle}>Institution Name:</label>
          <input
            type="text"
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
            required
            placeholder="Enter institution name"
            style={inputStyle}
          />
          <br />
          <button type="submit" style={buttonStyle}>
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyCourse;
