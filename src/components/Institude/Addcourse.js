import React, { useState } from 'react';
import axios from 'axios';

function AddCourses() {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [facultyDescription, setFacultyDescription] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Inline styles for components
  const formStyle = {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    color: '#333',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    color: '#333',
    height: '100px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const successMessageStyle = {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const errorMessageStyle = {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!courseName || !courseDescription || !courseDuration || !coursePrice || !facultyName || !facultyDescription) {
      setMessage('');
      setErrorMessage('Please fill out all fields!');
      return;
    }

    // Create a new course object
    const newCourse = {
      course_name: courseName,
      course_description: courseDescription,
      course_duration: courseDuration,
      course_price: coursePrice,
      faculty_name: facultyName,
      faculty_description: facultyDescription,
    };

    try {
      // Send data to backend using Axios
      const response = await axios.post('http://localhost:5000/api/courses', newCourse);

      // If the course was added successfully
      if (response.status === 200) {
        setMessage('Course and Faculty added successfully!');
        setErrorMessage('');
        // Clear form fields
        setCourseName('');
        setCourseDescription('');
        setCourseDuration('');
        setCoursePrice('');
        setFacultyName('');
        setFacultyDescription('');
      }
    } catch (error) {
      // Handle errors
      setMessage('');
      setErrorMessage('Failed to add course. Please try again.');
      console.error('Error occurred:', error);  // Log error for debugging
    }
  };

  return (
    <div style={formStyle}>
      <h2>Add a New Course</h2>

      {/* Display success or error messages */}
      {message && <p style={successMessageStyle}>{message}</p>}
      {errorMessage && <p style={errorMessageStyle}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            placeholder="Enter course name"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Course Description:</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
            placeholder="Enter course description"
            style={textareaStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Course Duration (in years):</label>
          <input
            type="number"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            required
            placeholder="Enter course duration"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Course Price:</label>
          <input
            type="number"
            value={coursePrice}
            onChange={(e) => setCoursePrice(e.target.value)}
            required
            placeholder="Enter course price"
            style={inputStyle}
          />
        </div>

        <div>
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

        <div>
          <label style={labelStyle}>Faculty Description:</label>
          <textarea
            value={facultyDescription}
            onChange={(e) => setFacultyDescription(e.target.value)}
            required
            placeholder="Enter faculty description"
            style={textareaStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>Add Course and Faculty</button>
      </form>
    </div>
  );
}

export default AddCourses;
