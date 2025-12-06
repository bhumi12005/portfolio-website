import React from 'react';
import { FaGraduationCap, FaAward, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';
// Placeholder profile image; replace with your own later
const profilePlaceholder = `data:image/svg+xml;base64,${btoa(
  '<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">\n'
  + '<rect width="300" height="300" fill="#2A2A2A"/>\n'
  + '<circle cx="150" cy="110" r="45" fill="#4F9EFF"/>\n'
  + '<rect x="80" y="170" width="140" height="70" rx="12" fill="#4F9EFF"/>\n'
  + '<text x="150" y="265" font-family="Arial" font-size="14" fill="#FFFFFF" text-anchor="middle">Profile Placeholder</text>\n'
  + '</svg>'
)}`;

const About = () => {
  const timelineData = [
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: "Bachelor’s in Computer Science",
      organization: 'Lakshmi Narain College of Technology and Science Bhopal (M.P)',
      period: '2023 - 2027',
      description: 'Focused on programming, data structures, and web development.',
      location: 'Bhopal, India'
    },
    {
      type: 'education',
      icon: <FaGraduationCap />,
      title: 'Higher Secondary Education (12th)',
      organization: 'Green Valley Public School Balaghat (M.P) CBSE Board',
      period: '2023',
      description: 'Completed senior secondary with core STEM subjects.',
      location: 'Balaghat, India'
    },
    {
      type: 'achievement',
      icon: <FaAward />,
      title: 'Projects & Learning',
      organization: 'Self-Directed Learning',
      period: 'Year - Present 2025',
      description: 'Built responsive websites and web applications using modern technologies.',
      location: 'Bhopal, India'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          {/* Hero Section */}
          <div className="about-hero">
            <div className="profile-section">
              <div className="profile-image">
                <img 
                  src={profilePlaceholder}
                  alt="Your Name" 
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMkEyQTJBIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM0RjlFRkYiLz4KPHBhdGggZD0iTTkwIDE4MEM5MCAyMTAgMTE3LjkgMjM1IDE1MCAyMzVDMTgyLjEgMjM1IDIxMCAyMTAgMjEwIDE4MEgyMTBWMjcwSDkwVjE4MFoiIGZpbGw9IiM0RjlFRkYiLz4KPC9zdmc+';
                  }}
                />
                <div className="profile-badge">
                  <span>Available for Work</span>
                </div>
              </div>
            </div>

            <div className="about-text">
              <h1 className="heading-1">About <span className="text-gradient">Me</span></h1>
              <div className="bio">
                <p className="body-large">
                  Hello! I'm Bhumika Sonekar, a Front-End Developer focused on building clean, responsive, and user-friendly web experiences.
                </p>
                <p>
                  I work primarily with React.js, JavaScript, HTML5, and CSS3, delivering efficient code and smooth user experiences.
                </p>
                <p>
                  I enjoy building projects that challenge me and help me grow as a developer, and I stay updated with modern web development trends.
                </p>
                <p>
                  Outside coding, I explore new web technologies, work on personal projects, and collaborate with the community.
                </p>
              </div>

              <div className="quick-facts">
                <div className="fact">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">
                    <FaMapMarkerAlt /> Bhopal, India
                  </span>
                </div>
                <div className="fact">
                  <span className="fact-label">Status</span>
                  <span className="fact-value">Student & Learning</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Focus</span>
                  <span className="fact-value">Frontend Development</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Status</span>
                  <span className="fact-value status-available">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="timeline-section">
            <h2 className="heading-2 text-center">My <span className="text-gradient">Journey</span></h2>
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div key={index} className={`timeline-item ${item.type}`}>
                  <div className="timeline-marker">
                    <div className="timeline-icon">
                      {item.icon}
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{item.title}</h3>
                      <span className="timeline-period">{item.period}</span>
                    </div>
                    <div className="timeline-organization">
                      <strong>{item.organization}</strong>
                      <span className="location">
                        <FaMapMarkerAlt /> {item.location}
                      </span>
                    </div>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h2 className="heading-2 text-center">What Drives <span className="text-gradient">Me</span></h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>
                  I believe in pushing boundaries and exploring new technologies to create 
                  cutting-edge solutions that make a difference.
                </p>
              </div>
              <div className="value-card">
                <h3>Quality</h3>
                <p>
                  Every line of code matters. I'm committed to writing clean, maintainable, 
                  and efficient code that stands the test of time.
                </p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>
                  Great products are built by great teams. I thrive in collaborative 
                  environments where ideas can flourish and grow.
                </p>
              </div>
              <div className="value-card">
                <h3>Learning</h3>
                <p>
                  Technology evolves rapidly, and so do I. I'm always eager to learn 
                  new skills and adapt to emerging trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
