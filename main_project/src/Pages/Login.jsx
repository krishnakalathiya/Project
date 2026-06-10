import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../store/navSlice';

const LoginHeader = () => {
  const dispatch = useDispatch();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Login card field state managers
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Interactive operational state tracking variables
  const [authSuccessMessage, setAuthSuccessMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching for:", searchQuery);
  };

  const handleFormLoginSubmit = (e) => {
    e.preventDefault();
    
    if (isProcessing) return;
    
    setIsProcessing(true);
    
    console.log("Form Authentication Triggered:", { username, password });
   
    const dynamicUserIdentity = username.includes('@') ? username.split('@')[0] : username; 
    
    // Mount success message container layer with user's name
    setAuthSuccessMessage(`Login Successfully! Welcome back, ${dynamicUserIdentity}.`);
    
    setPassword('');
   
    setTimeout(() => {
      setIsProcessing(false);
      setAuthSuccessMessage('');
      setUsername('');
      dispatch(navigateTo('home'));
    }, 200);
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
      
      {/* 1. Top Utility Status Row Bar */}
      <div className="login-top-bar">
        <div className="login-top-container">
          <div className="utility-info-left">
            <span className="address-info">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            <a href="mailto:info@templatepath.com" className="email-info">info@templatepath.com</a>
          </div>
          <button className="top-login-register-btn" onClick={() => dispatch(navigateTo('register'))}>
            Login / Register
          </button>
        </div>
      </div>

      {/* 2. Main Navigation Bar Row Layout */}
      <div className="login-nav-row">
        <div className="login-nav-container">
          
          {/* Logo Brand Component Group */}
          <div className="logo-area" onClick={() => dispatch(navigateTo('home'))} style={{ cursor: 'pointer' }}>
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

          {/* Navigation Links list */}
          <nav className="login-main-nav">
            <ul className="login-nav-links">
              <li className="login-nav-item">
                <a href="#home" onClick={(e) => { e.preventDefault(); dispatch(navigateTo('home')); }}>Home</a>
              </li>

              {Object.keys(menuItems).map((key) => (
                <li 
                  key={key}
                  className={`login-nav-item has-dropdown ${key === 'pages' ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="login-nav-btn" onClick={() => dispatch(navigateTo(key === 'admissions' ? 'careers' : key))}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                  <ul className={`login-dropdown-menu ${activeDropdown === key ? 'show' : ''}`}>
                    {menuItems[key].map((item, idx) => (
                      <li key={idx}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="login-nav-item">
                <a href="#contact" onClick={(e) => { e.preventDefault(); dispatch(navigateTo('contact')); }}>Contact</a>
              </li>
            </ul>
          </nav>

          {/* Integrated Search Bar input component */}
          <form className="header-search-form" onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search ..." 
              className="header-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="header-search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

        </div>
      </div>

      {/* 3. Hero Breadcrumb Banner Block Section */}
      <div className="login-hero-banner">
        <div className="login-hero-container">
          <div className="breadcrumb-nav-path">
            <span onClick={() => dispatch(navigateTo('home'))} className="crumb-link" style={{ cursor: 'pointer' }}>Home</span>
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

      {/* 4. Core Login Credentials Form Workspace Area */}
      <div className="login-workspace-area">
        <div className="login-panel-card">
          <h2 className="login-panel-title">login</h2>
          
          {/* DYNAMIC ALERT POPUP LAYER FOR SUCCESSFUL LOGIN CONFIRMATIONS */}
          {authSuccessMessage && (
            <div className="form-success-alert-ui" style={{
              backgroundColor: '#e6f7f4',
              color: '#00a7ac',
              padding: '16px 20px',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: '700',
              textAlign: 'center',
              border: '1px solid #cbf3ee',
              marginBottom: '30px'
            }}>
              {authSuccessMessage}
            </div>
          )}

          <form className="login-actual-form" onSubmit={handleFormLoginSubmit}>
            
            {/* Username/Email Input Container row */}
            <div className="panel-field-group">
              <label className="panel-field-label">Email</label>
              <div className="panel-input-inner-wrapper">
                <span className="panel-inner-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  disabled={isProcessing}
                />
              </div>
            </div>

            {/* Password Input Container row */}
            <div className="panel-field-group">
              <label className="panel-field-label">Password</label>
              <div className="panel-input-inner-wrapper">
                <span className="panel-inner-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                  disabled={isProcessing}
                />
              </div>
              <div className="panel-forgot-row">
                <a href="#forgot" className="panel-forgot-anchor">Forget your password?</a>
              </div>
            </div>

            {/* Submit Interactive Button element */}
            <div className="panel-submit-row">
              <button 
                type="submit" 
                className="panel-submit-button"
                disabled={isProcessing}
                style={{ opacity: isProcessing ? 0.75 : 1 }}
              >
                {isProcessing ? "Authenticating..." : "Login"}
              </button>
            </div>

            {/* Footer option controls segment links */}
            <div className="panel-footer-row">
              <span className="panel-footer-divider-text">Or</span>
              <span 
                className="panel-footer-register-link"
                style={{ cursor: isProcessing ? 'not-allowed' : 'pointer' }}
                onClick={() => !isProcessing && dispatch(navigateTo('register'))}
              >
                Register
              </span>
            </div>

          </form>
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;