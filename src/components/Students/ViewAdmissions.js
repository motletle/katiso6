import React, { useState, useEffect } from 'react';

function ViewAdmissions() {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const storedAdmissions = JSON.parse(localStorage.getItem('admissions')) || [];
    setAdmissions(storedAdmissions);
  }, []);

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f4f4f9',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const tableHeaderStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  };

  const tableCellStyle = {
    padding: '10px',
    border: '1px solid #ddd',
  };

  return (
    <div style={containerStyle}>
      <h3>Admissions</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Course</th>
            <th style={tableHeaderStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {admissions.length === 0 ? (
            <tr>
              <td colSpan="2" style={tableCellStyle}>No admissions yet.</td>
            </tr>
          ) : (
            admissions.map((admission, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{admission.course}</td>
                <td style={tableCellStyle}>
                  {admission.status === 'Admitted' ? (
                    <span style={{ color: 'green' }}>Admitted</span>
                  ) : (
                    <span style={{ color: 'red' }}>Rejected</span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAdmissions;
