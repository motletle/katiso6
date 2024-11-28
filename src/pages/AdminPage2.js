import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {

  const [availableCourses, setAvailableCourses] = useState([]);

  // Fetch courses from localStorage when the component mounts
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setAvailableCourses(storedCourses);
  }, []);

  return (
    <div>
      <div>
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
