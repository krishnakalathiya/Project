import React from 'react';

const Header = () => {
  return (
    <header className="liggeet-header">
      <div className="top-banner">
        <div className="banner-container">
          <span className="banner-text">Starts TOMORROW! Our biggest event of the year...</span>
          <div className="banner-links">
            <a href="#faqs">Faqs</a>
            <span className="separator">|</span>
            <a href="#login-register">Login / Register</a>
          </div>
        </div>
      </div>

      <div className="main-branding-row">
        <div className="branding-container">
          <div className="logo-area">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#F06371" />
                <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#E28743" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="sub-title">university</span>
              <span className="main-title">LIGGEET</span>
            </div>
          </div>

          <div className="contact-info-block">
            <div className="info-item">
              <span className="info-label">EMAIL ADDRESS</span>
              <a href="mailto:info@example.com" className="info-value">info@example.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">PHONE NUMBER</span>
              <a href="tel:+12345678900" className="info-value">+123 456 78900</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wrapper">
        <nav className="nav-bar">
          <ul className="nav-links">
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#pages">Pages</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cta-btn">Free Join Us</button>
        </nav>

        {/* Hero Content Section */}
        <div className="hero-content">
          <div className="hero-text-container">
            <span className="hero-tagline">For A Better Future</span>
            <h1 className="hero-title">
              TO LEARN ABOUT<br />THE WORLD
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;