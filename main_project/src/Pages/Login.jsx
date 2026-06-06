import React, { useState } from 'react';

const LoginHeader = ({ onBackClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Login card field state managers
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please fill out this field.");
      return;
    }
    console.log("Searching for:", searchQuery);
  };

  const handleFormLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Form Authentication Triggered:", { username, password });
  };

  const menuItems = {
    academics: [
      { label: "Undergraduate", href: "#undergraduate" },
      { label: "Postgraduate", href: "#postgraduate" }
    ],
    admissions: [
      { label: "How to Apply", href: "#apply" },
      { label: "Tuition & Fees", href: "#tuition" }
    ],
    pages: [
      { label: "About Us", href: "#about" },
      { label: "Our Faculty", href: "#faculty" },
      { label: "Login Page", href: "#login" }
    ],
    blog: [
      { label: "Latest News", href: "#news" },
      { label: "Student Stories", href: "#stories" }
    ]
  };

  return (
    <header className="liggeet-login-header">
      
      {/* 1. Specialized Top Utility Bar (Screenshot 1) */}
      <div className="login-top-bar">
        <div className="login-top-container">
          <div className="utility-info-left">
            <span className="address-info">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            <a href="mailto:info@templatepath.com" className="email-info">info@templatepath.com</a>
          </div>
          <button className="top-login-register-btn">Login / Register</button>
        </div>
      </div>

      {/* 2. Main Navigation Bar Row (Screenshots 1 & 2) */}
      <div className="login-nav-row">
        <div className="login-nav-container">
          
          {/* Logo Brand Component (Click to Go Home) */}
          <div className="logo-area" onClick={onBackClick} style={{ cursor: 'pointer' }}>
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

          {/* Navigation Links */}
          <nav className="login-main-nav">
            <ul className="login-nav-links">
              <li className="login-nav-item">
                <a 
                  href="#home" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onBackClick) onBackClick();
                  }}
                >
                  Home
                </a>
              </li>

              <li 
                className="login-nav-item has-dropdown"
                onMouseEnter={() => setActiveDropdown('academics')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="login-nav-btn">Academics</button>
                <ul className={`login-dropdown-menu ${activeDropdown === 'academics' ? 'show' : ''}`}>
                  {menuItems.academics.map((item, idx) => (
                    <li key={idx}><a href={item.href}>{item.label}</a></li>
                  ))}
                </ul>
              </li>

              <li 
                className="login-nav-item has-dropdown"
                onMouseEnter={() => setActiveDropdown('admissions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="login-nav-btn">Admissions</button>
                <ul className={`login-dropdown-menu ${activeDropdown === 'admissions' ? 'show' : ''}`}>
                  {menuItems.admissions.map((item, idx) => (
                    <li key={idx}><a href={item.href}>{item.label}</a></li>
                  ))}
                </ul>
              </li>

              <li 
                className="login-nav-item has-dropdown active"
                onMouseEnter={() => setActiveDropdown('pages')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="login-nav-btn">Pages</button>
                <ul className={`login-dropdown-menu ${activeDropdown === 'pages' ? 'show' : ''}`}>
                  {menuItems.pages.map((item, idx) => (
                    <li key={idx}><a href={item.href}>{item.label}</a></li>
                  ))}
                </ul>
              </li>

              <li 
                className="login-nav-item has-dropdown"
                onMouseEnter={() => setActiveDropdown('blog')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="login-nav-btn">Blog</button>
                <ul className={`login-dropdown-menu ${activeDropdown === 'blog' ? 'show' : ''}`}>
                  {menuItems.blog.map((item, idx) => (
                    <li key={idx}><a href={item.href}>{item.label}</a></li>
                  ))}
                </ul>
              </li>

              <li className="login-nav-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Search Bar (Screenshot 1) */}
          <form className="header-search-form" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search ..." 
              className="header-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="header-search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

        </div>
      </div>

      {/* 3. Chess-Themed Hero Breadcrumb Banner (Screenshot 1) */}
      <div className="login-hero-banner">
        <div className="login-hero-container">
          <div className="breadcrumb-nav-path">
            <span onClick={onBackClick} className="crumb-link" style={{ cursor: 'pointer' }}>Home</span>
            <span className="crumb-separator">/</span>
            <span className="crumb-current">Login</span>
          </div>

          <div className="login-hero-content-box">
            <h1 className="login-hero-title">Login</h1>
            <p className="login-hero-description">
              Etiam in arcu dictum, maximus libero ac, porttitor ante. Mauris in 
              ultricies odio, id porttitor nulla. Phasellus tristique
            </p>
          </div>
        </div>
      </div>

      {/* 4. Core Login Credentials Form Workspace */}
      <div className="login-workspace-area">
        <div className="login-panel-card">
          <h2 className="login-panel-title">login</h2>
          
          <form className="login-actual-form" onSubmit={handleFormLoginSubmit}>
            {/* Username/Email Input Container */}
            <div className="panel-field-group">
              <label className="panel-field-label">Email</label>
              <div className="panel-input-inner-wrapper">
                <span className="panel-inner-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Type Your Username" 
                  className="panel-input-element"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Input Container */}
            <div className="panel-field-group">
              <label className="panel-field-label">Password</label>
              <div className="panel-input-inner-wrapper">
                <span className="panel-inner-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <input 
                  type="password" 
                  placeholder="Type Your Password" 
                  className="panel-input-element"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="panel-forgot-row">
                <a href="#forgot" className="panel-forgot-anchor">Forget your password?</a>
              </div>
            </div>

            {/* Submit Action Button */}
            <div className="panel-submit-row">
              <button type="submit" className="panel-submit-button">Login</button>
            </div>

            {/* Footer Redirect Options */}
            <div className="panel-footer-row">
              <span className="panel-footer-divider-text">Or</span>
              <a href="#register" className="panel-footer-register-link">Register</a>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;