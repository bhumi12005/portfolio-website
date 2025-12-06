import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap,
  FaGitAlt, 
  FaGithub,
  FaFigma,
  FaCode
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNetlify,
  SiVercel
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, level: 80, color: '#F7DF1E' },
        { name: 'React.js', icon: <FaReact />, level: 75, color: '#61DAFB' },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 70, color: '#7952B3' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 65, color: '#06B6D4' }
      ]
    },
    {
      title: 'Development Tools & Platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 75, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, level: 80, color: '#181717' },
        { name: 'VS Code', icon: <FaCode />, level: 85, color: '#007ACC' },
        { name: 'Figma', icon: <FaFigma />, level: 60, color: '#F24E1E' },
        { name: 'Netlify', icon: <SiNetlify />, level: 70, color: '#00C7B7' },
        { name: 'Vercel', icon: <SiVercel />, level: 65, color: '#000000' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Projects Built',
      value: '10+',
      description: 'Personal and learning projects completed'
    },
    {
      title: 'Years Learning',
      value: '2+',
      description: 'Years of dedicated web development study'
    },
    {
      title: 'Technologies',
      value: '12+',
      description: 'Frontend technologies learned and practiced'
    },
    {
      title: 'GitHub Repos',
      value: '15+',
      description: 'Public repositories and contributions'
    }
  ];

  return (
    <div className="skills">
      <div className="container">
        <div className="skills-content">
          {/* Header */}
          <div className="skills-header">
            <h1 className="heading-1">My <span className="text-gradient">Skills</span></h1>
            <p className="skills-description">
              I'm passionate about learning new technologies and constantly improving my skills. 
              Here's what I've been working with recently.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h2 className="category-title">{category.title}</h2>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="skill-item"
                      style={{'--skill-color': skill.color}}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <div className="skill-icon" style={{color: skill.color}}>
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="achievements-section">
            <h2 className="heading-2 text-center">
              My <span className="text-gradient">Achievements</span>
            </h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-value">{achievement.value}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="learning-section">
            <div className="learning-content">
              <h2 className="heading-2">Currently <span className="text-gradient">Learning</span></h2>
              <p>
                As a Computer Science student, I'm passionate about continuous learning and expanding my skillset. 
                Currently, I'm focusing on backend technologies to become a full-stack MERN developer:
              </p>
              <div className="learning-list">
                <div className="learning-item">
                  <span className="learning-bullet">🗄️</span>
                  <span>MongoDB - NoSQL Database Management</span>
                </div>
                <div className="learning-item">
                  <span className="learning-bullet">⚙️</span>
                  <span>Express.js - Backend Framework for Node.js</span>
                </div>
                <div className="learning-item">
                  <span className="learning-bullet">�</span>
                  <span>Node.js - Server-side JavaScript Runtime</span>
                </div>
                <div className="learning-item">
                  <span className="learning-bullet">�</span>
                  <span>REST APIs & Backend Architecture</span>
                </div>
                <div className="learning-item">
                  <span className="learning-bullet">🚀</span>
                  <span>Full-Stack MERN Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
