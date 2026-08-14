import React, { useState } from 'react';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting email:', email);
  };

  return (
    <div className="liggeet-layout-wrapper">
      <section className="newsletter-section-wrapper">
        <div className="newsletter-vector-left">
          <svg viewBox="0 0 148 214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2C26.5 45 74.5 24.5 58 77.5C41.5 130.5 142.5 106 109.5 163.5C83.1 209.5 7 194.5 12 212" stroke="#ffffff" strokeWidth="2" opacity="0.25"/>
          </svg>
        </div>

        <div className="newsletter-vector-right">
          <svg viewBox="0 0 148 214" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2C26.5 45 74.5 24.5 58 77.5C41.5 130.5 142.5 106 109.5 163.5C83.1 209.5 7 194.5 12 212" stroke="#ffffff" strokeWidth="2" opacity="0.25"/>
          </svg>
        </div>

        <div className="newsletter-container">
          <h2 className="newsletter-heading">
            Get the latest Liggeet news delivered to<br />you inbox
          </h2>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="newsletter-btn">Find out more</button>
          </form>
        </div>

      </section>

    </div>
  );
};

export default NewsletterBanner;