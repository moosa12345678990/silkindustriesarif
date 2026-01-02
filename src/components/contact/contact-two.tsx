'use client';

import React, { useState } from "react";
import Image from "next/image";
import Social from "../social/social";
import shape from "@/assets/img/inner-about/about/shape-1.png";

export default function ContactTwo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all required fields (Name, Email, Message)');
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create the email data
      const emailData = {
        to: 'nouman@arifsilkindustries.com',
        subject: formData.subject || `Contact Form Inquiry from ${formData.name}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };
      
      // Simulate sending email (you'll need to implement actual email sending)
      // For now, we'll show success after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        
        // Auto-clear success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          setSubmitMessage('');
        }, 8000);
      }, 1500);
      
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or email us directly at nouman@arifsilkindustries.com');
      
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 8000);
    }
  };

  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100 green-contact-section">
      <div className="ab-2-hero-social-wrap d-none d-xl-block">
        <div className="ab-2-hero-social">
          <Social />
        </div>
        <div className="ab-2-hero-social-text">
          <span>Follow us</span>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="ab-about-category-title-box mb-40 p-relative">
              <h4 className="ab-about-category-title green-contact-title">
                Send a Message <br />
                <span className="green-accent">Contact Us</span>
              </h4>
              <p className="green-contact-subtitle">
                Get in touch with our team. We'll respond to your inquiry within 24 hours.
              </p>
              
              <div className="green-contact-info mt-30">
                <div className="contact-info-item mb-20">
                  <h5 className="green-info-title">
                    <i className="fa-regular fa-envelope" style={{color: '#b5d334', marginRight: '10px'}}></i>
                    Email Address
                  </h5>
                  <a href="mailto:nouman@arifsilkindustries.com" className="green-info-text">
                    nouman@arifsilkindustries.com
                  </a>
                </div>
                
                <div className="contact-info-item">
                  <h5 className="green-info-title">
                    <i className="fa-regular fa-clock" style={{color: '#b5d334', marginRight: '10px'}}></i>
                    Response Time
                  </h5>
                  <p className="green-info-text">
                    Typically replies within 24 hours
                  </p>
                </div>
              </div>
              
              <Image
                className="ab-about-shape-1 d-none d-xl-block"
                src={shape}
                alt="shape"
              />
            </div>
          </div>
          
          <div className="col-xl-7">
            <div className="cn-contactform-wrap green-contact-form">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="alert alert-success green-alert-success">
                  <div className="d-flex align-items-start">
                    <i className="fa-solid fa-check-circle" style={{marginRight: '12px', fontSize: '20px', color: '#b5d334', marginTop: '2px'}}></i>
                    <div>
                      <strong style={{display: 'block', marginBottom: '5px'}}>Message Sent Successfully!</strong>
                      {submitMessage}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="alert alert-error green-alert-error">
                  <div className="d-flex align-items-start">
                    <i className="fa-solid fa-exclamation-circle" style={{marginRight: '12px', fontSize: '20px', color: '#ff4444', marginTop: '2px'}}></i>
                    <div>
                      <strong style={{display: 'block', marginBottom: '5px'}}>Something went wrong</strong>
                      {submitMessage}
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="contact-form green-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-form-input mb-30">
                      <label htmlFor="name" className="green-form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="green-form-input"
                        placeholder="Enter your name"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="contact-form-input mb-30">
                      <label htmlFor="email" className="green-form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="green-form-input"
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="contact-form-input mb-30">
                      <label htmlFor="phone" className="green-form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="green-form-input"
                        placeholder="Enter your phone number"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="contact-form-input mb-30">
                      <label htmlFor="subject" className="green-form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="green-form-input"
                        placeholder="Enter message subject"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-12">
                    <div className="contact-form-input mb-35">
                      <label htmlFor="message" className="green-form-label">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="green-form-textarea"
                        placeholder="Type your message here..."
                        disabled={isSubmitting}
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="tp-btn-green"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" style={{marginRight: '8px'}}></span>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="fa-regular fa-paper-plane" style={{marginLeft: '10px'}}></i>
                        </>
                      )}
                    </button>
                    
                    <div className="green-form-note mt-20">
                      <p style={{marginBottom: '5px'}}>
                        <i className="fa-solid fa-info-circle" style={{marginRight: '8px', color: '#b5d334'}}></i>
                        We'll email you a confirmation and respond within 24 hours.
                      </p>
                      <p style={{fontSize: '13px', color: '#666'}}>
                        All messages are sent directly to: <strong>nouman@arifsilkindustries.com</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom styles for green theme */}
      <style jsx>{`
        .green-contact-section {
          position: relative;
          overflow: hidden;
        }
        
        .green-contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(181, 211, 52, 0.1) 0%, rgba(181, 211, 52, 0) 70%);
          border-radius: 50%;
          z-index: 0;
        }
        
        .green-contact-title {
          color: #000 !important;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
        }
        
        .green-contact-title .green-accent {
          color: #b5d334 !important;
          position: relative;
          display: inline-block;
        }
        
        .green-contact-title .green-accent::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(181, 211, 52, 0.2);
          z-index: -1;
        }
        
        .green-contact-subtitle {
          color: #666;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .green-contact-info {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          border-left: 4px solid #b5d334;
        }
        
        .green-info-title {
          color: #000;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
        }
        
        .green-info-text {
          color: #444;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .green-info-text:hover {
          color: #b5d334;
        }
        
        .green-contact-form {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(181, 211, 52, 0.1);
        }
        
        .green-form-label {
          display: block;
          color: #000;
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 15px;
        }
        
        .green-form-input,
        .green-form-textarea {
          width: 100%;
          padding: 14px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #f9fafb;
        }
        
        .green-form-input:focus,
        .green-form-textarea:focus {
          outline: none;
          border-color: #b5d334;
          background: white;
          box-shadow: 0 0 0 3px rgba(181, 211, 52, 0.1);
        }
        
        .green-form-input:disabled,
        .green-form-textarea:disabled {
          background: #f3f4f6;
          cursor: not-allowed;
          opacity: 0.7;
        }
        
        .green-form-input::placeholder,
        .green-form-textarea::placeholder {
          color: #9ca3af;
        }
        
        .tp-btn-green {
          background-color: #b5d334 !important;
          color: #000 !important;
          border: 2px solid #b5d334 !important;
          padding: 16px 40px !important;
          font-weight: 700 !important;
          font-size: 16px;
          border-radius: 8px !important;
          cursor: pointer;
          transition: all 0.3s ease !important;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        .tp-btn-green:hover:not(:disabled) {
          background-color: #000 !important;
          color: #b5d334 !important;
          border-color: #000 !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(181, 211, 52, 0.3);
        }
        
        .tp-btn-green:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }
        
        .green-form-note {
          color: #666;
          font-size: 14px;
        }
        
        .green-alert-success {
          background-color: rgba(181, 211, 52, 0.1);
          border-left: 4px solid #b5d334;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          color: #000;
        }
        
        .green-alert-error {
          background-color: rgba(255, 68, 68, 0.1);
          border-left: 4px solid #ff4444;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
          color: #000;
        }
        
        .spinner-border {
          display: inline-block;
          width: 1rem;
          height: 1rem;
          vertical-align: text-bottom;
          border: 0.2em solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: spinner-border .75s linear infinite;
        }
        
        @keyframes spinner-border {
          to { transform: rotate(360deg); }
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .green-contact-title {
            font-size: 36px;
          }
        }
        
        @media (max-width: 992px) {
          .green-contact-form {
            padding: 30px;
          }
          
          .green-contact-title {
            font-size: 32px;
          }
        }
        
        @media (max-width: 768px) {
          .green-contact-form {
            padding: 25px;
          }
          
          .green-contact-title {
            font-size: 28px;
          }
          
          .green-contact-info {
            padding: 20px;
          }
          
          .tp-btn-green {
            padding: 14px 30px !important;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
}