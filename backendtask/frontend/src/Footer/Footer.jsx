import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <span> <i className="fab fa-facebook"></i> </span>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <span> <i className="fab fa-instagram"></i> </span>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <span> <i className="fab fa-linkedin"></i> </span>
      </a>
    </div>
  );
}

export default Footer;
