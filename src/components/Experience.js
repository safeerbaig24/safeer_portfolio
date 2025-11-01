import React from 'react';
import './Experience.css';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior React Developer',
      company: 'Zweidevs (Pvt) Ltd.',
      location: 'Lahore, Punjab, Pakistan',
      period: 'Sep 2024 - Present',
      duration: '1 year 3 months',
      description: [
        'Leading React development initiatives and mentoring junior developers',
        'Architecting scalable frontend solutions for complex enterprise applications',
        'Collaborating with cross-functional teams to deliver high-quality software products',
        'Implementing best practices in code quality, performance optimization, and testing',
      ],
      skills: ['React', 'JavaScript', 'TypeScript', 'Redux', 'Git', 'Agile'],
    },
    {
      title: 'React Developer',
      company: 'WADIC',
      location: 'Lahore, Punjab, Pakistan',
      period: 'Aug 2022 - Sep 2024',
      duration: '2 years 2 months',
      description: [
        'Developed and maintained responsive web applications using React and modern JavaScript',
        'Built reusable components and custom hooks for improved code efficiency',
        'Integrated RESTful APIs and third-party services into React applications',
        'Collaborated with UI/UX designers to implement pixel-perfect designs',
      ],
      skills: ['React', 'JavaScript', 'REST APIs', 'CSS3', 'Responsive Design'],
    },
    {
      title: 'React Developer',
      company: 'ShopDev',
      location: 'Punjab, Pakistan',
      period: 'May 2021 - Jul 2022',
      duration: '1 year 3 months',
      description: [
        'Built modern e-commerce and web applications using React framework',
        'Implemented state management solutions for complex application flows',
        'Optimized application performance and improved user experience',
        'Participated in code reviews and contributed to team knowledge sharing',
      ],
      skills: ['React', 'JavaScript', 'State Management', 'Git', 'Web Development'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">03.</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline-wrapper">
          {/* Timeline Line */}
          <div className="experience-timeline-line"></div>

          {/* Experience Items */}
          <div className="experience-items">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item ${index % 2 === 0 ? 'experience-item-left' : 'experience-item-right'}`}
              >
                {/* Timeline Dot */}
                <div className="experience-timeline-dot"></div>

                {/* Content Card */}
                <div className={`experience-card-wrapper ${index % 2 === 0 ? 'experience-card-right' : 'experience-card-left'}`}>
                  <div className="experience-card">
                    {/* Gradient Overlay */}
                    <div className="experience-card-overlay"></div>

                    {/* Content */}
                    <div className="experience-card-content">
                      {/* Header */}
                      <div className={`experience-card-header ${index % 2 === 0 ? 'experience-card-header-right' : 'experience-card-header-left'}`}>
                        <div className="experience-title-row">
                          <FaBriefcase className="experience-icon" />
                          <span className="experience-job-title">{exp.title}</span>
                        </div>
                        <h3 className="experience-company">{exp.company}</h3>
                        <div className="experience-meta">
                          <div className="experience-meta-item">
                            <FaMapMarkerAlt className="experience-meta-icon" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="experience-meta-item">
                            <FaCalendarAlt className="experience-meta-icon" />
                            <span>{exp.period}</span>
                          </div>
                          {exp.duration && (
                            <span className="experience-duration">{exp.duration}</span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <ul className={`experience-description ${index % 2 === 0 ? 'experience-description-right' : 'experience-description-left'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="experience-description-item">
                            <span className="experience-bullet">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills */}
                      <div className={`experience-skills ${index % 2 === 0 ? 'experience-skills-right' : 'experience-skills-left'}`}>
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="experience-skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date Badge (Desktop) */}
                <div className="experience-date-badge">
                  <div className="experience-date-badge-content">
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

