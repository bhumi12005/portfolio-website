import React, { useEffect, useMemo, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaStar, FaCode } from 'react-icons/fa';
import { GITHUB_URL } from '../config/social';
import './Projects.css';
// Project thumbnail images (public assets)
const images = {
  placeholder: '/images/projects/sample-portfolio.svg',
  'simon-game': '/images/projects/SimonSay.png',
  PasswordGenerator: '/images/projects/PasswordGenerator.png',
  Project1: '/images/projects/Campus.png',
  samplePortfolio: '/images/projects/Portfolio.png'
};

// Stable configuration maps (moved outside component to avoid useMemo missing deps)
const REPO_WHITELIST = ['simon-game', 'PasswordGenerator', 'Project1'].map(n => n.toLowerCase());

const TITLE_MAP = {
  Project1: 'Campus Lost and Found'
};

const LIVE_MAP = {
  PasswordGenerator: 'https://bhumi-password-gen.netlify.app/',
  'simon-game': 'https://simonsay-gamee.netlify.app/',
  Project1: 'https://69257d79c3f7103a4befebc8--zingy-cactus-6f35c8.netlify.app/'
};

const DESCRIPTION_MAP = {
  PasswordGenerator: 'A secure password generator that creates strong, customizable passwords instantly.',
  'simon-game': 'A fun memory-based Simon game that challenges users to repeat increasingly complex color sequences.',
  Project1: 'A simple platform that helps students report, search, and retrieve lost items on campus.'
};

// Custom technology tags to show alongside detected language
const TECH_MAP = {
  PasswordGenerator: ['JavaScript', 'React', 'Tailwind CSS'],
  'simon-game': ['HTML', 'CSS', 'JavaScript'],
  Project1: ['JavaScript', 'React', 'Tailwind CSS']
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const githubUsername = useMemo(() => {
    try {
      const url = new URL(GITHUB_URL);
      return (url.pathname || '').replace('/', '') || '';
    } catch {
      return '';
    }
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!githubUsername) {
        setLoading(false);
        setError('GitHub username not found.');
        return;
      }
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        const data = await res.json();
        const cleaned = (data || []).filter(r => !r.fork);
        setRepos(cleaned);
      } catch (e) {
        setError(e.message || 'Failed to load repositories');
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [githubUsername]);

  const projects = [
    {
      id: 1,
      title: 'Sample Portfolio',
      description: 'A modern, responsive portfolio template designed to showcase personal projects and skills.',
      image: images.samplePortfolio,
      technologies: ['React', 'CSS', 'JavaScript', 'Router'],
      categories: ['interactive', 'frontend', 'react'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'react', label: 'React Apps' },
    { key: 'interactive', label: 'Interactive' },
    { key: 'learning', label: 'Learning Projects' }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  const repoCards = useMemo(() => {
    return repos
      .filter(r => REPO_WHITELIST.includes((r.name || '').toLowerCase()))
      .map((r) => ({
      id: r.id,
       title: TITLE_MAP[r.name] || r.name,
        description: DESCRIPTION_MAP[r.name] || r.description || 'No description provided.',
       image: images[r.name] || images.placeholder,
        technologies: TECH_MAP[r.name] || [r.language || 'Unknown'],
      category: (r.language || 'learning').toLowerCase(),
      categories: [
        (r.language || 'learning').toLowerCase(),
        ...(r.name === 'PasswordGenerator' ? ['react'] : []),
        ...(r.name === 'simon-game' ? ['interactive'] : [])
      ],
      githubUrl: r.html_url,
        liveUrl: LIVE_MAP[r.name] || r.homepage || '',
      featured: false,
      stargazers_count: r.stargazers_count || 0
    }));
  }, [repos]);

  const allProjects = [...featuredProjects, ...repoCards];
  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter(project => {
        if (Array.isArray(project.categories)) {
          return project.categories.includes(activeFilter);
        }
        return project.category === activeFilter;
      });

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-content">
          {/* Header */}
          <div className="projects-header">
            <h1 className="heading-1">My <span className="text-gradient">Projects</span></h1>
            <p className="projects-description">
              Here's a showcase of my frontend development projects. Each project demonstrates my skills in 
              React.js, JavaScript, and modern web technologies, focusing on clean code, responsive design, 
              and engaging user experiences.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="featured-section">
            <h2 className="heading-2">Featured <span className="text-gradient">Projects</span></h2>
            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="featured-project">
                  <div className="project-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="400" height="250" fill="#2A2A2A"/>
                            <rect x="150" y="100" width="100" height="50" rx="8" fill="#4F9EFF"/>
                            <text x="200" y="130" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Project</text>
                          </svg>
                        `)}`;
                      }}
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View source code"
                        >
                          <FaGithub />
                        </a>
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label="View live demo"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Section */}
          <div className="filter-section">
            <div className="filter-header">
              <h2 className="heading-2">All <span className="text-gradient">Projects</span></h2>
              <div className="filter-controls">
                <FaFilter className="filter-icon" />
                <div className="filter-buttons">
                  {filters.map(filter => (
                    <button
                      key={filter.key}
                      className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                      onClick={() => setActiveFilter(filter.key)}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {loading && (
              <p className="projects-status">Loading projects from GitHub…</p>
            )}
            {!loading && error && (
              <p className="projects-status error">{error}</p>
            )}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="400" height="250" fill="#2A2A2A"/>
                          <rect x="150" y="100" width="100" height="50" rx="8" fill="#4F9EFF"/>
                          <text x="200" y="130" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Project</text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View source code"
                      >
                        <FaGithub />
                      </a>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          aria-label="View live demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  {typeof project.stargazers_count === 'number' && (
                    <div className="project-meta">
                      <span className="meta-item"><FaStar /> {project.stargazers_count}</span>
                      {project.category && (
                        <span className="meta-item"><FaCode /> {project.category}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
