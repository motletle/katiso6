import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Applications() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
    setApplications(storedApplications);
  }, []);

  const handleAdmit = (index) => {
    const updatedApplications = [...applications];
    updatedApplications[index].status = 'Admitted';
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
    setApplications(updatedApplications);

    const admissions = JSON.parse(localStorage.getItem('admissions')) || [];
    admissions.push({
      course: updatedApplications[index].courseName,
      status: 'Admitted',
    });
    localStorage.setItem('admissions', JSON.stringify(admissions));

    navigate('/view-admissions');  // Navigate to the ViewAdmissions page
  };

  const handleReject = (index) => {
    const updatedApplications = [...applications];
    updatedApplications[index].status = 'Rejected';
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
    setApplications(updatedApplications);

    const admissions = JSON.parse(localStorage.getItem('admissions')) || [];
    admissions.push({
      course: updatedApplications[index].courseName,
      status: 'Rejected',
    });
    localStorage.setItem('admissions', JSON.stringify(admissions));

    navigate('/view-admissions');  // Navigate to the ViewAdmissions page
  };

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

  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  const rejectButtonStyle = {
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  return (
    <div style={containerStyle}>
      <h3>Applications</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Course</th>
            <th style={tableHeaderStyle}>Faculty</th>
            <th style={tableHeaderStyle}>Institution</th>
            <th style={tableHeaderStyle}>Status</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.length === 0 ? (
            <tr>
              <td colSpan="5" style={tableCellStyle}>No applications yet.</td>
            </tr>
          ) : (
            applications.map((app, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{app.courseName}</td>
                <td style={tableCellStyle}>{app.facultyName}</td>
                <td style={tableCellStyle}>{app.institutionName}</td>
                <td style={tableCellStyle}>{app.status}</td>
                <td style={tableCellStyle}>
                  {app.status === 'Pending' && (
                    <>
                      <button style={buttonStyle} onClick={() => handleAdmit(index)}>
                        Admit
                      </button>
                      <button style={rejectButtonStyle} onClick={() => handleReject(index)}>
                        Reject
                      </button>
                    </>
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

export default Applications;
