import React from 'react';

const Header = () => {
  // Inline styles for header and container
  const headerStyle = {
    backgroundColor: '#282c34',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: '0',
  };

  const navItemStyle = {
    margin: '0 15px',
  };

  const linkStyle = {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1>Career Guidance Portal</h1>
        <nav>
          <ul style={navStyle}>
            <li style={navItemStyle}><a href="/" style={linkStyle}>Home</a></li>
            <li style={navItemStyle}><a href="/institude" style={linkStyle}>Institutes</a></li>
            <li style={navItemStyle}><a href="/student-login" style={linkStyle}>Student</a></li>
            <li style={navItemStyle}><a href="/admin" style={linkStyle}>Admin</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
