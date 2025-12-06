import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL } from '../config/social';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: GITHUB_URL,
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: LINKEDIN_URL,
      label: 'LinkedIn'
    },
    {
      icon: <FaInstagram />,
      url: INSTAGRAM_URL,
      label: 'Instagram'
    },
    
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p className="footer-description">
              Frontend Developer building clean, responsive web experiences.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Bhumika Sonekar. Made with <FaHeart className="heart-icon" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
