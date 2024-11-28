const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const getConnection = require('./db');  // Import the getConnection function

// Initialize the Express app
const app = express();
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST route to add a new course
app.post('/api/courses', async (req, res) => {
  const {
    course_name,
    course_description,
    course_duration,
    course_price,
    faculty_name,
    faculty_description
  } = req.body;

  // Validate the request body (ensure all required fields are present)
  if (!course_name || !course_description || !course_duration || !course_price || !faculty_name || !faculty_description) {
    return res.status(400).json({ message: 'Please fill out all required fields!' });
  }

  const sql = `
    INSERT INTO courses (course_name, course_description, course_duration, course_price, faculty_name, faculty_description)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
  `;
  const values = [course_name, course_description, course_duration, course_price, faculty_name, faculty_description];

  // Get a new connection for this request
  const db = getConnection();

  try {
    // Connect to the database
    await db.connect();
    
    // Execute the query
    const result = await db.query(sql, values);

    console.log('Inserted Course ID:', result.rows[0].id);

    // Respond with success message and course ID
    return res.status(200).json({
      message: 'Course and Faculty added successfully!',
      courseId: result.rows[0].id,
    });
  } catch (err) {
    console.error('Error inserting course:', err);
    return res.status(500).json({ message: 'Failed to add course', error: err.message });
  } finally {
    // Make sure to close the database connection
    db.end();
  }
});

// Set up the server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
