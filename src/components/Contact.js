import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04.</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-text">
              I'm currently looking for new opportunities, whether that's a full-time position or 
              freelance work. If you have a project that you want to get started or think you need 
              my help with something, then get in touch.
            </p>
            <div className="contact-social">
              <a href="https://www.linkedin.com/in/safeer-baig-84230b192/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/safeerbaig24" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a href="mailto:safeerbaig@example.com" aria-label="Email">
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

