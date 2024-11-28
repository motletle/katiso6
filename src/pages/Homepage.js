import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component for navigation

const HomePage = () => {
  // Inline Styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    padding: '20px',
  };

  const headerStyle = {
    textAlign: 'center',
    paddingBottom: '20px',
    borderBottom: '2px solid #4CAF50',
  };

  const headingStyle = {
    fontSize: '2.5em',
    color: '#333',
  };

  const subheadingStyle = {
    fontSize: '1.2em',
    color: '#777',
  };

  const featuresSectionStyle = {
    marginTop: '40px',
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    fontSize: '1.8em',
    marginBottom: '20px',
    color: '#333',
  };

  const featureCardsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const featureCardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '250px',
    padding: '20px',
    textAlign: 'center',
  };

  const featureCardTitleStyle = {
    fontSize: '1.5em',
    color: '#4CAF50',
    marginBottom: '15px',
  };

  const featureCardTextStyle = {
    color: '#555',
    fontSize: '1em',
    lineHeight: '1.5',
  };

  const actionsSectionStyle = {
    marginTop: '40px',
    textAlign: 'center',
  };

  const actionButtonStyle = {
    padding: '12px 30px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
    margin: '10px',
    transition: 'background-color 0.3s',
  };

  const actionButtonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const footerStyle = {
    marginTop: '50px',
    textAlign: 'center',
    fontSize: '1em',
    color: '#777',
  };

  const footerLinkStyle = {
    color: '#4CAF50',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h2 style={headingStyle}>Welcome to the Career Guidance Portal!</h2>
        <p style={subheadingStyle}>
          Your gateway to discovering institutes, courses, and the guidance you need to shape your future studies.
        </p>
      </header>

      <section style={featuresSectionStyle}>
        <h3 style={sectionTitleStyle}>Explore the Features</h3>
        <div style={featureCardsStyle}>
          <div style={featureCardStyle}>
            <h4 style={featureCardTitleStyle}>Find Faculties</h4>
            <p style={featureCardTextStyle}>
              Discover the best higher learning faculty in your university. Browse by courses.
            </p>
          </div>
          <div style={featureCardStyle}>
            <h4 style={featureCardTitleStyle}>Explore Courses</h4>
            <p style={featureCardTextStyle}>
              Browse a wide variety of courses offered by institutes. Filter based on your interests and career goals.
            </p>
          </div>
          <div style={featureCardStyle}>
            <h4 style={featureCardTitleStyle}>Get Guidance</h4>
            <p style={featureCardTextStyle}>
              Get personalized career guidance, advice, and tips to help you choose the right path for your future.
            </p>
          </div>
        </div>
      </section>

      <section style={actionsSectionStyle}>
        <h3 style={sectionTitleStyle}>Ready to Get Started?</h3>
        <div>
          <Link to="/adminpage2">
            <button
              style={actionButtonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = actionButtonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = actionButtonStyle.backgroundColor)}
            >
              Browse Institutes
            </button>
          </Link>
          <Link to="/adminpage2">
            <button
              style={actionButtonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = actionButtonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = actionButtonStyle.backgroundColor)}
            >
              Explore Courses
            </button>
          </Link>
          <Link to="/career-guidance">
            <button
              style={actionButtonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = actionButtonHoverStyle.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = actionButtonStyle.backgroundColor)}
            >
              Get Career Guidance
            </button>
          </Link>
        </div>
      </section>

      <footer style={footerStyle}>
        <p>
          Need help? <a href="/contact" style={footerLinkStyle}>Contact Us</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
