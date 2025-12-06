import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaRocket } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          {/* Animated 404 */}
          <div className="error-animation">
            <div className="error-number">
              <span className="four">4</span>
              <span className="zero">
                <div className="planet">
                  <div className="ring"></div>
                  <div className="ring ring-2"></div>
                </div>
              </span>
              <span className="four">4</span>
            </div>
          </div>

          {/* Error Message */}
          <div className="error-message">
            <h1 className="error-title">
              <span className="text-gradient">Oops!</span> Page Not Found
            </h1>
            <p className="error-description">
              The page you're looking for seems to have drifted into the digital void. 
              Don't worry, even the best developers sometimes take a wrong turn in cyberspace!
            </p>
          </div>

          {/* Suggestions */}
          <div className="suggestions">
            <h2 className="suggestions-title">What can you do?</h2>
            <div className="suggestions-grid">
              <div className="suggestion-card">
                <div className="suggestion-icon">
                  <FaHome />
                </div>
                <h3>Go Home</h3>
                <p>Return to the homepage and start fresh</p>
              </div>
              <div className="suggestion-card">
                <div className="suggestion-icon">
                  <FaSearch />
                </div>
                <h3>Navigate</h3>
                <p>Use the navigation menu to find what you need</p>
              </div>
              <div className="suggestion-card">
                <div className="suggestion-icon">
                  <FaRocket />
                </div>
                <h3>Explore</h3>
                <p>Check out my projects and skills</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="error-actions">
            <Link to="/" className="btn btn-primary">
              <FaHome />
              Back to Home
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              <FaRocket />
              View Projects
            </Link>
          </div>

          {/* Fun Quote */}
          <div className="fun-quote">
            <p>"There are only 10 types of people in the world: those who understand binary and those who don't."</p>
            <span>- Classic Developer Joke</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-code code-1">{'<div>'}</div>
        <div className="floating-code code-2">{'</div>'}</div>
        <div className="floating-code code-3">{'{ }'}</div>
        <div className="floating-code code-4">{'< />'}</div>
        <div className="floating-code code-5">{'/*404*/'}</div>
      </div>
    </div>
  );
};

export default NotFound;
