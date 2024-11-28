import React, { useState } from 'react';

// Career Guidance component
function CareerGuidance() {
  // States to hold user inputs
  const [careerField, setCareerField] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [suggestion, setSuggestion] = useState('');

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to provide guidance based on input
    let careerAdvice = '';
    
    if (careerField === 'Technology' && skills.toLowerCase().includes('coding') && experience > 2) {
      careerAdvice = 'You may consider becoming a Software Engineer or a Web Developer.';
    } else if (careerField === 'Healthcare' && skills.toLowerCase().includes('medicine')) {
      careerAdvice = 'You may want to pursue a career as a Doctor, Nurse, or Medical Researcher.';
    } else if (careerField === 'Arts' && skills.toLowerCase().includes('design')) {
      careerAdvice = 'You might be a great fit for a career as a Graphic Designer or an Artist.';
    } else {
      careerAdvice = 'We recommend exploring further based on your specific interests!';
    }

    setSuggestion(careerAdvice);
  };

  return (
    <div style={styles.container}>
      <h1>Career Guidance</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label>Career Field:</label>
          <select
            value={careerField}
            onChange={(e) => setCareerField(e.target.value)}
            style={styles.input}
          >
            <option value="">Select a Career Field</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Arts">Arts</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div>
          <label>Skills (e.g., Coding, Medicine, Design):</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            style={styles.input}
            placeholder="Enter your skills"
            required
          />
        </div>

        <div>
          <label>Years of Experience:</label>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            style={styles.input}
            placeholder="Enter your years of experience"
            required
          />
        </div>

        <button type="submit" style={styles.button}>Get Career Suggestion</button>
      </form>

      {suggestion && <p style={styles.suggestion}>{suggestion}</p>}
    </div>
  );
}

// Inline styles for the component
const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    maxWidth: '600px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  suggestion: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#333',
    fontWeight: 'bold',
  },
};

export default CareerGuidance;
