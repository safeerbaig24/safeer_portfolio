import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-number">01.</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Safeer Baig, a passionate React developer based in the world of web development. 
              I enjoy creating beautiful and functional web applications that provide exceptional user experiences.
            </p>
            <p>
              My journey in web development started with a curiosity about how websites work, and it has 
              evolved into a deep passion for building interactive and responsive applications using modern 
              technologies and best practices.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="tech-list">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML & CSS</li>
              <li>Git & GitHub</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img src="https://i.postimg.cc/Z5QfJ99N/profile-pic.png" alt="Safeer Baig" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

