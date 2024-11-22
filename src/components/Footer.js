// components/Footer.js
import React from 'react';
import './Footer.css';  // Optional: if you want to add specific styles for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:example@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
