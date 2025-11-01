import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'LootEdge.com - Gaming Marketplace for Buying & Selling',
      description: 'Trusted marketplace to buy and sell game accounts, items, and more. . Enjoy instant delivery, secure transactions, and 24/7 support for gamers worldwide at ...',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/safeerbaig24',
      demo: 'https://lootedge.com/',
      image: 'https://i.postimg.cc/Hscq1tKx/Screenshot-2025-11-01-at-11-26-04-AM.png'
    },
    {
      title: 'PicMe - Connecting CREATIVES and clients worldwide',
      description: 'A modern task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      tech: ['React', 'Redux', 'Firebase', 'CSS3'],
      github: 'https://github.com/safeerbaig24',
      demo: 'https://thepicmeapp.com/',
      image: 'https://i.postimg.cc/wj9nRdMx/Screenshot-2025-11-01-at-11-30-21-AM.png'
    },
    {
      title: 'Skaly | Your AI Business Coach for Food & Beverage Growth',
      description: 'Skaly connects your QuickBooks, reviews, and location data to give you clear AI-driven actions — helping you grow sales, cut costs, and run your business with confidence.',
      tech: ['React', 'API Integration', 'CSS3'],
      github: 'https://github.com/safeerbaig24',
      demo: 'https://skalyapp.com/',
      image: 'https://i.postimg.cc/rpjVRJMQ/Screenshot-2025-11-01-at-11-35-43-AM.png'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
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

