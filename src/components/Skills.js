import React from 'react';
import './Skills.css';
import { 
  FaReact, 
  FaJs, 
  FaNode, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt,
  FaGithub,
  FaNpm
} from 'react-icons/fa';
import { SiRedux, SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Node.js', icon: <FaNode />, color: '#339933' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'NPM', icon: <FaNpm />, color: '#CB3837' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02.</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

