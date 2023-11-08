
import React, { useState } from 'react';
import './contact.css'; // Import your CSS file for styling
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import the icons
import Footer from './footer';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const [acknowledgement, setAcknowledgement] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    // Simulate a delay for demonstration purposes (replace this with your actual form submission logic)
    setTimeout(() => {
      console.log(formData);
  
      // Set acknowledgment message and reset loading state
      setAcknowledgement(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span className="contact-label">Phone:</span>
            </div>
            <div className='contct-det'>
            <span className="contact-bold">790-434-9667</span>
            <br />
          </div><br/><br/><br/>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span className="contact-label">Email:</span>
        </div>
        <div>
            <span className="contact-bold">shanufruits@gmail.com</span>
            <br />
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-button">
      {isLoading ? (
        <div className="loading-animation"></div>
      ) : (
        'Send'
      )}
    </button>
          </form>
          {acknowledgement && (
              <div className="acknowledgement-message show">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default ContactForm;
