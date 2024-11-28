import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const [availableCourses, setAvailableCourses] = useState([]);

  // Fetch courses from localStorage when the component mounts
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setAvailableCourses(storedCourses);
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#2c3e50', fontSize: '28px', fontWeight: '700', marginBottom: '10px' }}>
          Welcome, {studentData.name}!
        </h2>
        <p style={{ color: '#7f8c8d', fontSize: '16px', marginBottom: '20px' }}>Email: {studentData.email}</p>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#2c3e50', fontSize: '22px', fontWeight: '600' }}>Available Courses</h3>
          {availableCourses.length > 0 ? (
            <ul style={{ paddingLeft: '20px', listStyleType: 'none', marginTop: '10px' }}>
              {availableCourses.map((course, index) => (
                <li key={index} style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#ecf0f1', borderRadius: '8px' }}>
                  <strong style={{ color: '#34495e', fontSize: '18px' }}>{course.name}</strong>
                  <p style={{ color: '#7f8c8d', marginTop: '10px' }}>{course.description}</p>
                  <p style={{ color: '#7f8c8d' }}>Duration: {course.duration} weeks</p>
                  <p style={{ color: '#7f8c8d' }}>Price: ${course.price}</p>

                  {course.faculty && course.faculty.length > 0 ? (
                    <div style={{ marginTop: '10px' }}>
                      <h4 style={{ color: '#34495e', fontSize: '18px' }}>Faculty</h4>
                      <p style={{ color: '#7f8c8d', fontWeight: '600' }}>{course.faculty[0].name}</p>
                      <p style={{ color: '#7f8c8d' }}>{course.faculty[0].description}</p>
                    </div>
                  ) : (
                    <p style={{ color: '#e74c3c' }}>No faculty details available for this course.</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: '#e74c3c' }}>No courses available at the moment.</p>
          )}
          <p>
            <Link to="/view-admissions" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '600' }}>
              Click here to View Admissions
            </Link>
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#2c3e50', fontSize: '22px', fontWeight: '600' }}>Update Your Profile</h3>
          <p>
            <Link to="/student-profile" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '600' }}>
              Click here to update your profile
            </Link>
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#2c3e50', fontSize: '22px', fontWeight: '600' }}>Manage Applications</h3>
          <p>
            <Link to="/apply-form" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '600' }}>
              Click here to Apply for a Course
            </Link>
          </p>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', fontSize: '16px', color: '#7f8c8d' }}>
          <p>
            <Link to="/" style={{ color: '#3498db', textDecoration: 'none', fontWeight: '600' }}>
              Go back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
