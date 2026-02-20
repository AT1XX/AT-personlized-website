import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import { contactConfig } from './content_options.js'; // if you want to display email/phone

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    console.log('form.current:', form.current);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus({
            type: 'success',
            message: 'Your message has been sent successfully!',
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus({
            type: 'error',
            message: 'Something went wrong. Please try again later.',
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Left side – Contact information */}
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>{contactConfig.description || "I'd love to hear from you. Send me a message and I'll respond as soon as possible."}</p>
          
          <div className="contact-detail">
            <i>📧</i>
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>{contactConfig.YOUR_EMAIL}</a>
          </div>
          
          <div className="contact-detail">
            <i>📞</i>
            <a href={`tel:${contactConfig.YOUR_FONE}`}>{contactConfig.YOUR_FONE}</a>
          </div>
          
          {/* You can add social links here */}
        </div>

        {/* Right side – Contact form */}
        <div className="contact-form">
          <h2>Send a message</h2>
          <p className="subtitle">Fill out the form below and I'll get back to you shortly.</p>

          <form ref={form} onSubmit={sendEmail}>
            {/* Name field */}
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name *"
                required
              />
            </div>

            {/* Email field */}
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address *"
                required
              />
            </div>

            {/* Message field */}
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="Your Message *"
                required
              ></textarea>
            </div>

            {/* Submit button with loading spinner */}
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading && <span className="spinner"></span>}
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status message */}
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;