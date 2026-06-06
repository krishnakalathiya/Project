import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../store/navSlice';
import AboutOpenDay from './AboutOpenDay';
import Footer from './Footer';
import HeroCarousel from './HeroCarousel'

const AcademicsPage = () => {
  const dispatch = useDispatch();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching for:", searchQuery);
  };

  const menuItems = {
    academics: [{ label: "Undergraduate", href: "#" }, { label: "Postgraduate", href: "#" }],
    admissions: [{ label: "How to Apply", href: "#" }, { label: "Tuition & Fees", href: "#" }],
    pages: [{ label: "About Us", href: "#" }, { label: "Register Page", href: "#" }],
    blog: [{ label: "Latest News", href: "#" }, { label: "Student Stories", href: "#" }]
  };

  // Data array modeling the 4 department columns exactly as shown in the screenshot
  const departmentCards = [
    { title: "Architecture", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Design", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Engineering", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." },
    { title: "Education", desc: "Sed gravida nisl a porta tincidunt. Integer aliquam." }
  ];

  return (
    <div className="liggeet-academics-page-wrapper">
      
      {/* 1. Specialized Top Utility Bar */}
      <div className="acad-top-bar">
        <div className="acad-center-container">
          <div className="utility-info-left">
            <span className="address-info">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            <a href="mailto:info@templatepath.com" className="email-info">info@templatepath.com</a>
          </div>
          <button className="top-login-register-btn" onClick={() => dispatch(navigateTo('login'))}>
            Login / Register
          </button>
        </div>
      </div>

      {/* 2. Main Navigation Bar Row */}
      <div className="acad-nav-row">
        <div className="acad-center-container nav-flex-alignment">
          
          {/* Logo Brand Component */}
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

          {/* Interactive Navigation Menu List */}
          <nav className="acad-main-nav">
            <ul className="acad-nav-links">
              <li className="acad-nav-item">
                <a href="#home" onClick={(e) => { e.preventDefault(); dispatch(navigateTo('home')); }}>Home</a>
              </li>

              {Object.keys(menuItems).map((key) => (
                <li 
                  key={key}
                  className={`acad-nav-item has-dropdown ${key === 'academics' ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="acad-nav-btn" onClick={() => dispatch(navigateTo('academics'))}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                  <ul className={`acad-dropdown-menu ${activeDropdown === key ? 'show' : ''}`}>
                    {menuItems[key].map((item, idx) => (
                      <li key={idx}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="acad-nav-item"><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Search Engine Field */}
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

      {/* 3. Academics Historic Building Hero Banner Area */}
      <div className="acad-hero-banner">
        <div className="acad-center-container text-layer-z">
          <div className="breadcrumb-nav-path">
            <span onClick={() => dispatch(navigateTo('home'))} className="crumb-link">Home</span>
            <span className="crumb-separator">/</span>
            <span className="crumb-current">Academics</span>
          </div>
          <div className="acad-hero-content-box">
            <h1 className="acad-hero-title">Academics</h1>
            <p className="acad-hero-description">
              Etiam in arcu dictum, maximus libero ac, porttitor ante. Mauris in 
              ultricies odio, id porttitor nulla. Phasellus tristique
            </p>
          </div>
        </div>
      </div>

      {/* 4. INTEGRATED ABOUT THE LIGGEET SPLIT SECTION */}
      <section className="about-liggeet-split-section">
        <div className="acad-center-container split-grid-layout">
          
          {/* Left Text Column Content */}
          <div className="about-liggeet-left-col">
            <span className="about-section-tagline">About The Liggeet</span>
            <h2 className="about-section-heading">
              We are one of the largest, most universities in the world.
            </h2>
            
            <p className="about-section-desc-primary">
              Etiam in arcu dictum, maximus libero ac, porttitor ante. Mauris in ultricies 
              odio, id porttitor nulla. Phasellus tristique vehicula eros id hendrerit. 
              Interdum et malesuada.
            </p>
            
            <p className="about-section-desc-secondary">
              Etiam in arcu dictum, maximus libero ac, porttitor ante. Mauris in ultricies odio, 
              id porttitor nulla. Phasellus tristique vehicula eros id hendrerit. Interdum et 
              malesuada fames ac ante.
            </p>

            {/* Metrics Numerical Grid Setup Row */}
            <div className="about-metrics-counter-row">
              <div className="metric-stat-item">
                <span className="metric-number">1021</span>
                <span className="metric-label">FINISHED SESSIONS</span>
              </div>
              <div className="metric-stat-item">
                <span className="metric-number">2562+</span>
                <span className="metric-label">ENROLLED LEARNERS</span>
              </div>
              <div className="metric-stat-item">
                <span className="metric-number">100%</span>
                <span className="metric-label">SATISFACTION RATE</span>
              </div>
            </div>
          </div>

          {/* Right Image Frame Column */}
          <div className="about-liggeet-right-col">
            <div className="about-image-card-frame">
              <img 
                src="https://html.tonatheme.com/2025/liggeet/assets/images/resource/about-image-05.jpg" 
                alt="Students walking up campus staircase" 
                className="about-split-img-asset"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. Existing Open Day Sub-section component container */}
      <div className="open-day-viewport-container">
        <AboutOpenDay />
      </div>

      {/* 6. APPLY FOR ADMISSIONS CTA BANNER ROW */}
      <section className="acad-admissions-cta-section">
        <div className="acad-center-container">
          <div className="cta-banner-inner-box">
            
            {/* Hanging Left Notification Bell Badge Vector Circle */}
            <div className="cta-bell-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>

            {/* Central Typography Header Columns */}
            <div className="cta-banner-text-contents">
              <span className="cta-mini-tagline">Easy to apply</span>
              <h3 className="cta-main-heading">Apply For Admissions</h3>
            </div>

            {/* Right Side Call To Action Button Link Element */}
            <div className="cta-banner-action-side">
              <button 
                className="cta-apply-now-btn"
                onClick={() => dispatch(navigateTo('register'))}
              >
                Apply Now <span className="btn-arrow-vector">→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. NEW 4-COLUMN DEPARTMENT COURSE GRID SECTION 
         ========================================================================== */}
      <section className="acad-departments-grid-section">
        <div className="acad-center-container">
          <div className="departments-grid-container">
            {departmentCards.map((card, idx) => (
              <div key={idx} className="department-grid-card">
                <h3 className="dept-card-title">{card.title}</h3>
                <p className="dept-card-description">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

        <div>
            <footer/>
        </div>

        <div>
            <HeroCarousel/>
        </div>
    </div>
  );
};

export default AcademicsPage;