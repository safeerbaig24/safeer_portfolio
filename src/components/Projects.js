import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/64ffda/0a192f?text=E-Commerce'
    },
    {
      title: 'Task Management App',
      description: 'A modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      tech: ['React', 'Redux', 'Firebase', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/64ffda/0a192f?text=Task+Manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current weather conditions and forecasts using weather APIs with an intuitive UI.',
      tech: ['React', 'API Integration', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://example.com',
      image: 'https://via.placeholder.com/600x400/64ffda/0a192f?text=Weather'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

