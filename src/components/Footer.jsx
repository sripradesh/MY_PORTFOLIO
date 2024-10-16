import React from 'react';
import './Footer.css';
import linkedinLogo from '../assets/linkedin.svg'; // Add your LinkedIn logo path
import githubLogo from '../assets/github.svg'; // Add your GitHub logo path
import twitterLogo from '../assets/twitter.svg'; // Add your Twitter logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Sripradesh. All Rights Reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="social-icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
