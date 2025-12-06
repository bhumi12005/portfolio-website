import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
// EmailJS temporarily disabled for a simple contact page
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'bhumikasonekar3@gmail.com',
      link: 'mailto:bhumikasonekar3@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Bhopal, India',
      link: null
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    
    if (!name.trim()) {
      return 'Name is required';
    }
    
    if (!email.trim()) {
      return 'Email is required';
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address';
    }
    
    if (!message.trim()) {
      return 'Message is required';
    }
    
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus({ type: 'error', message: validationError });
      setIsSubmitting(false);
      return;
    }
    // Simulate a short async submit and show a success message
    setTimeout(() => {
      setSubmitStatus({
        type: 'success',
        message: 'Thanks! Please reach me directly via email or social links.'
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-content">
          {/* Header */}
          <div className="contact-header">
            <h1 className="heading-1">Get In <span className="text-gradient">Touch</span></h1>
            <p className="contact-description">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="contact-main">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="heading-3">Let's Connect</h2>
              <p className="info-description">
                Feel free to reach out through any of these channels. I typically respond 
                within 24 hours.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon">
                      {info.icon}
                    </div>
                    <div className="method-content">
                      <h3 className="method-title">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="method-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="method-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="availability">
                <div className="availability-indicator">
                  <div className="status-dot"></div>
                  <span>Available for new projects</span>
                </div>
                <p className="availability-text">
                  I'm currently open to new freelance projects and full-time opportunities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="heading-3">Send a Message</h2>
                
                {submitStatus && (
                  <div className={`status-message ${submitStatus.type}`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <FaUser className="label-icon" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope className="label-icon" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <FaPaperPlane className="label-icon" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
