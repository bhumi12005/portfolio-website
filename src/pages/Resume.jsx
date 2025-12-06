import React from 'react';
import { FaDownload, FaEye, FaGraduationCap, FaBriefcase, FaAward, FaCode } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/BhumikaResume2.pdf`; // PDF should be in public folder
    link.download = 'BhumikaResume2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      title: 'Portfolio Website | ReactJS',
      tech: 'ReactJS, HTML, CSS, JavaScript',
      period: '2025',
      links: {
        source: 'https://github.com/bhumi12005/portfolio-website',
        live: 'https://bhumiportfolio-website.netlify.app'
      },
      description: [
        'Built a responsive and modern personal portfolio using React with a clean, component-based architecture.',
        'Designed intuitive UI/UX with smooth navigation using React Router and reusable components.',
        'Optimized performance and layout for all screen sizes while maintaining a consistent theme.'
      ]
    },
    {
      title: 'Password Generator | ReactJS',
      tech: 'ReactJS, HTML, CSS, JavaScript',
      period: '2025',
      links: {
        source: 'https://github.com/bhumi12005/PasswordGenerator',
        live: 'https://bhumi-password-gen.netlify.app/'
      },
      description: [
        'Built a secure and responsive password generator web app with customizable strength options.',
        'Implemented randomized generation of uppercase/lowercase letters, numbers, and symbols.',
        'Added interactive UI controls: length slider, toggles, and one-click copy-to-clipboard.',
        'Designed clean, modern UI/UX with real-time updates, visual feedback, and smooth transitions.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor’s in Computer Science',
      school: 'Lakshmi Narain College of Technology and Science Bhopal (M.P)',
      period: '2023 - 2027',
      location: 'Bhopal, India',
      achievements: [
        'Strong foundation in programming fundamentals and front-end development',
        'Coursework includes Data Structures & Algorithms and Object-Oriented Programming'
      ]
    },
    {
      degree: 'Higher Secondary Education (12th)',
      school: 'Green Valley Public School Balaghat (M.P) CBSE Board',
      period: '2023',
      location: 'Balaghat, India',
      achievements: [
        'Completed senior secondary with core STEM subjects'
      ]
    },
    {
      degree: 'Projects & Learning',
      school: 'Self-Directed Learning',
      period: 'Year - Present 2025',
      location: 'Bhopal, India',
      achievements: [
        'Built responsive websites and web applications using modern technologies.'
      ]
    }
  ];

  const certifications = [
    { name: 'Data Structures and Algorithms', issuer: 'Coursera', year: '' },
    { name: 'JavaScript Essentials', issuer: 'Cisco Networking Academy', year: '' },
    { name: 'Networking Essentials', issuer: 'Cisco Networking Academy', year: '' }
  ];

  const skills = {
    'Programming': ['C', 'Java', 'Data Structures & Algorithms', 'OOP'],
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
    'Tools & Others': ['Git', 'GitHub', 'VS Code', 'npm', 'Node.js (basics)', 'Chrome DevTools', 'Figma (basics)']
  };

  const extracurricular = [
    {
      category: 'Communication & Leadership',
      activities: [
        'Won many debate competitions and recognized as a good speaker',
        'Strong communication skills'
      ]
    },
    {
      category: 'Fine Arts',
      activities: [
        'Sketching',
        'Painting',
        'Rangoli',
        'Multiple certificates in fine arts'
      ]
    }
  ];

  return (
    <div className="resume">
      <div className="container">
        <div className="resume-content">
          {/* Header */}
          <div className="resume-header">
            <h1 className="heading-1">My <span className="text-gradient">Resume</span></h1>
            <div className="personal-info">
              <h2>Bhumika Sonekar</h2>
              <p>Bhopal, Madhya Pradesh, India</p>
              <div className="contact-links">
                <span>📧 bhumikasonekar12@gmail.com</span>
                <span>📱 +91-8305740071</span>
                <a href="https://www.linkedin.com/in/bhumika-sonekar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/bhumi12005" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://leetcode.com/u/Bhumika_Sonekar/" target="_blank" rel="noopener noreferrer">LeetCode</a>
                <a href="https://bhumiportfolio-website.netlify.app" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </div>
            </div>
            <p className="resume-description">
              Motivated Computer Science undergraduate skilled in front-end development and programming fundamentals. Experienced in building responsive, user-friendly web applications using ReactJS, JavaScript, and modern UI/UX practices. Strong problem-solving ability with hands-on project experience.
            </p>
            <div className="resume-actions">
              <button className="btn btn-primary" onClick={handleDownload}>
                <FaDownload />
                Download PDF
              </button>
              <button className="btn btn-secondary" onClick={() => window.open(`${process.env.PUBLIC_URL}/BhumikaResume2.pdf`, '_blank')}>
                <FaEye />
                View PDF
              </button>
            </div>
          </div>

          <div className="resume-main">
            {/* Projects Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaCode className="section-icon" />
                <h2 className="section-title">Projects</h2>
              </div>
              <div className="timeline">
                {projects.map((project, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="job-header">
                        <h3 className="job-title">{project.title}</h3>
                        <span className="job-period">{project.period}</span>
                      </div>
                      <div className="job-company">
                        <strong>{project.tech}</strong>
                        {project.links && (
                          <span>
                            {project.links.source && <> • <a href={project.links.source} target="_blank" rel="noopener noreferrer">Source Code</a></>}
                            {project.links.live && <> • <a href={project.links.live} target="_blank" rel="noopener noreferrer">Live Website</a></>}
                          </span>
                        )}
                      </div>
                      <ul className="job-description">
                        {project.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaGraduationCap className="section-icon" />
                <h2 className="section-title">Education</h2>
              </div>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-header">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <span className="education-period">{edu.period}</span>
                    </div>
                    <div className="education-school">
                      <strong>{edu.school}</strong> • {edu.location}
                    </div>
                    <ul className="education-achievements">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaCode className="section-icon" />
                <h2 className="section-title">Technical Skills</h2>
              </div>
              <div className="skills-grid">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="skill-category">
                    <h3 className="skill-category-title">{category}</h3>
                    <div className="skill-tags">
                      {skillList.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaAward className="section-icon" />
                <h2 className="section-title">Certifications</h2>
              </div>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <h3 className="certification-name">{cert.name}</h3>
                    <div className="certification-details">
                      <span className="certification-issuer">{cert.issuer}</span>
                      <span className="certification-year">{cert.year}</span>
                      {cert.credentialId && <span className="credential-id">ID: {cert.credentialId}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Extracurricular Activities Section */}
            <section className="resume-section">
              <div className="section-header">
                <FaBriefcase className="section-icon" />
                <h2 className="section-title">Extracurricular Activities</h2>
              </div>
              <div className="extracurricular-grid">
                {extracurricular.map((item, index) => (
                  <div key={index} className="extracurricular-category">
                    <h3 className="extracurricular-title">{item.category}</h3>
                    <ul className="extracurricular-list">
                      {item.activities.map((activity, actIndex) => (
                        <li key={actIndex}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
