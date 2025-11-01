import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Safeer Baig.</h1>
          <h2 className="hero-title">I build things for the web.</h2>
          <p className="hero-description">
            I'm a React developer specializing in building exceptional digital experiences. 
            Currently focused on creating accessible, human-centered products.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary" onClick={() => scrollToSection('projects')}>
              Check out my work
            </a>
            <a href="#contact" className="btn-secondary" onClick={() => scrollToSection('contact')}>
              Get in touch
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/safeerbaig24" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/safeer-baig-84230b192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:safeerbaig30@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <HiArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;

