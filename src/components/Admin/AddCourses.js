import React, { useState } from 'react';

function AddCourses() {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [facultyDescription, setFacultyDescription] = useState('');
  const [message, setMessage] = useState(''); // Message after form submission

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!courseName || !courseDescription || !courseDuration || !coursePrice || !facultyName || !facultyDescription) {
      setMessage('Please fill out all fields!');
      return;
    }

    // Create a new course object
    const newCourse = {
      name: courseName,
      description: courseDescription,
      duration: courseDuration,
      price: coursePrice,
      faculty: [
        {
          name: facultyName,
          description: facultyDescription
        }
      ]
    };

    // Get the current list of courses from localStorage (if any)
    const existingCourses = JSON.parse(localStorage.getItem('courses')) || [];

    // Add the new course to the list
    existingCourses.push(newCourse);

    // Save the updated courses back to localStorage
    localStorage.setItem('courses', JSON.stringify(existingCourses));

    // Show success message
    setMessage('Course and Faculty added successfully!');

    // Clear the form fields
    setCourseName('');
    setCourseDescription('');
    setCourseDuration('');
    setCoursePrice('');
    setFacultyName('');
    setFacultyDescription('');
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

  const messageStyle = {
    marginBottom: '15px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'green',  // Success message color
  };

  const errorMessageStyle = {
    marginBottom: '15px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'red',  // Error message color
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
        <h2 style={headingStyle}>Add a New Course</h2>

        {/* Display success or error message */}
        {message && <p style={message.includes('successfully') ? messageStyle : errorMessageStyle}>{message}</p>}

        <form onSubmit={handleSubmit}>
          {/* Course details */}
          <div className="form-group">
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

          <div className="form-group">
            <label style={labelStyle}>Course Description:</label>
            <textarea
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              required
              placeholder="Enter course description"
              style={inputStyle}
            />
          </div>

          <div className="form-group">
            <label style={labelStyle}>Course Duration (in yrs):</label>
            <input
              type="number"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
              required
              placeholder="Enter course duration"
              style={inputStyle}
            />
          </div>

          <div className="form-group">
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

          {/* Faculty details */}
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
            <label style={labelStyle}>Faculty Description:</label>
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
            Add Course and Faculty
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCourses;
