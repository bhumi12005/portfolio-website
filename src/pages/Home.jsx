import { GITHUB_URL, LINKEDIN_URL } from '../config/social';
import { INSTAGRAM_URL } from '../config/social';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from 'react-icons/fa';
import './Home.css';

const roles = ['Front-End Developer', 'React Developer', 'JavaScript Expert', 'UI/UX Enthusiast'];

const Home = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && typewriterText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (isDeleting) {
        setTypewriterText(currentRole.substring(0, typewriterText.length - 1));
      } else {
        setTypewriterText(currentRole.substring(0, typewriterText.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, currentRoleIndex]);

  // Scroll tracking for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: GITHUB_URL, label: 'GitHub' },
    { icon: <FaLinkedin />, url: LINKEDIN_URL, label: 'LinkedIn' },
    { icon: <FaInstagram />, url: INSTAGRAM_URL, label: 'Instagram' }
  ];

  return (
    <div className="home">
      {/* Animated Background with Parallax */}
      <div className="animated-background">
        <div 
          className="floating-shape shape-1"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="floating-shape shape-2"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
        <div 
          className="floating-shape shape-3"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
        <div 
          className="floating-shape shape-4"
          style={{ transform: `translateY(${scrollY * -0.12}px)` }}
        ></div>
        <div 
          className="gradient-orb orb-1"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        <div 
          className="gradient-orb orb-2"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        ></div>
      </div>

      <div className="container">
        <div className="home-content">
          {/* Main Hero Section */}
          <div className="hero-section">
            <div className="hero-text">
              <h1 className="hero-name scroll-animate">
                Hi, I'm <span className="text-gradient animate-text enhanced-name-animation">Bhumika Sonekar</span>
              </h1>
              <div className="hero-role scroll-animate">
                <span className="role-text">
                  {typewriterText}
                  <span className="cursor">|</span>
                </span>
              </div>
              <p className="hero-description scroll-animate">
                Computer Science student passionate about Front-End Development with React, JavaScript, and modern web technologies.
                Enthusiastic about learning, creating responsive user interfaces, and building innovative projects.
              </p>
              
              <div className="hero-actions scroll-animate">
                <Link to="/projects" className="btn btn-primary magic-hover">
                  View My Work
                </Link>
                <Link to="/contact" className="btn btn-secondary magic-hover">
                  Get In Touch
                </Link>
              </div>

              <div className="social-links scroll-animate">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link bounce-hover"
                    aria-label={link.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

            </div>

            {/* Right-side robot image */}
            <div className="hero-illustration scroll-animate">
              <img
                src="/images/projects/robot.jpg"
                alt="Robot illustration"
                className="hero-robot-image"
                loading="lazy"
              />
            </div>

            {/* Right-side illustration removed per request */}
          </div>

          {/* Explore More Button */}
          <div className="explore-section scroll-animate">
            <Link to="/about" className="explore-btn pulse-animation">
              <span>Explore More</span>
              <FaArrowDown className="arrow-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
