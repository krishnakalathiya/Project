import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navigateTo } from '../store/navSlice';
import { updateFormField, submitRegistrationStart, submitRegistrationSuccess } from '../store/authSlice';

const RegisterPage = () => {
  const dispatch = useDispatch();
  
  // Local UI presentation hook states
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract variables natively out from our combined Redux framework layers
  const formValues = useSelector((state) => state.auth.registrationForm);
  const isSubmitting = useSelector((state) => state.auth.isSubmitting);
  const successMessage = useSelector((state) => state.auth.successMessage);

  const handleInputChange = (field, value) => {
    dispatch(updateFormField({ field, value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Global searching query index for:", searchQuery);
  };

  const handleRegistrationAction = (e) => {
    e.preventDefault();
    dispatch(submitRegistrationStart());
    
    // Simulate API registration network processing timings asynchronously
    setTimeout(() => {
      dispatch(submitRegistrationSuccess("Account successfully processed under Redux management!"));
    }, 1200);
  };

  const menuItems = {
    academics: [{ label: "Undergraduate", href: "#" }, { label: "Postgraduate", href: "#" }],
    admissions: [{ label: "How to Apply", href: "#" }, { label: "Tuition & Fees", href: "#" }],
    pages: [{ label: "About Us", href: "#" }, { label: "Register Page", href: "#" }],
    blog: [{ label: "Latest News", href: "#" }, { label: "Student Stories", href: "#" }]
  };

  return (
    <div className="liggeet-register-page-wrapper">
      
      {/* ==================== 1. TOP UTILITY UTILITY BANNER ==================== */}
      <div className="reg-top-bar">
        <div className="reg-center-container">
          <div className="utility-info-left">
            <span className="address-info">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            <a href="mailto:info@templatepath.com" className="email-info">info@templatepath.com</a>
          </div>
          <button className="top-login-register-btn" onClick={() => dispatch(navigateTo('home'))}>
            Login / Register
          </button>
        </div>
      </div>

      {/* ==================== 2. NAVIGATION BAR CONTAINER ==================== */}
      <div className="reg-nav-row">
        <div className="reg-center-container nav-flex-alignment">
          
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

          <nav className="reg-main-nav">
            <ul className="reg-nav-links">
              <li className="reg-nav-item">
                <a href="#home" onClick={(e) => { e.preventDefault(); dispatch(navigateTo('home')); }}>Home</a>
              </li>

              {Object.keys(menuItems).map((key) => (
                <li 
                  key={key}
                  className={`reg-nav-item has-dropdown ${key === 'pages' ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="reg-nav-btn">{key.charAt(0).toUpperCase() + key.slice(1)}</button>
                  <ul className={`reg-dropdown-menu ${activeDropdown === key ? 'show' : ''}`}>
                    {menuItems[key].map((item, idx) => (
                      <li key={idx}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="reg-nav-item"><a href="#contact">Contact</a></li>
            </ul>
          </nav>

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

      {/* ==================== 3. CHESS BG BREADCRUMB BANNER ==================== */}
      <div className="reg-hero-banner">
        <div className="reg-center-container text-layer-z">
          <div className="breadcrumb-nav-path">
            <span onClick={() => dispatch(navigateTo('home'))} className="crumb-link">Home</span>
            <span className="crumb-separator">/</span>
            <span className="crumb-current">Resgister</span>
          </div>
          <div className="reg-hero-content-box">
            <h1 className="reg-hero-title">Resgister</h1>
            <p className="reg-hero-description">
              Etiam in arcu dictum, maximus libero ac, porttitor ante. Mauris in 
              ultricies odio, id porttitor nulla. Phasellus tristique
            </p>
          </div>
        </div>
      </div>

      {/* ==================== 4. DATA INPUT FORM LAYOUT CARD ==================== */}
      <div className="reg-form-workspace-area">
        <div className="reg-form-card">
          <h2 className="reg-form-card-title">Register</h2>
          
          {successMessage && <div className="form-success-alert-ui">{successMessage}</div>}

          <form className="reg-actual-form" onSubmit={handleRegistrationAction}>
            
            {/* Field A: Email */}
            <div className="reg-field-group">
              <label className="reg-field-label">Email</label>
              <div className="reg-input-inner-wrapper">
                <span className="reg-inner-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Type Your Username" 
                  className="reg-input-element"
                  value={formValues.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Field B: Phone */}
            <div className="reg-field-group">
              <label className="reg-field-label">Phone <span className="recommended-badge">(Recommended)</span></label>
              <div className="reg-input-inner-wrapper">
                <span className="reg-inner-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </span>
                <input 
                  type="tel" 
                  placeholder="Type Your Phone Number" 
                  className="reg-input-element"
                  value={formValues.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Field C: Password */}
            <div className="reg-field-group">
              <label className="reg-field-label">Password</label>
              <div className="reg-input-inner-wrapper">
                <span className="reg-inner-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <input 
                  type="password" 
                  placeholder="Type Your Password" 
                  className="reg-input-element"
                  value={formValues.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Submission Action Button */}
            <div className="reg-submit-row">
              <button type="submit" className="reg-submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Account"}
              </button>
            </div>

            {/* Alternate Login Trigger Anchor Link */}
            <div className="reg-footer-row">
              <span className="reg-footer-divider-text">Already a member?</span>
              <span className="reg-footer-login-link" onClick={() => dispatch(navigateTo('home'))}>
                Login
              </span>
            </div>

          </form>
        </div>

        {/* Floating visual accent structure background rings matching screenshots template profile */}
        <div className="reg-card-corner-ring-accent"></div>
      </div>

    </div>
  );
};

export default RegisterPage;