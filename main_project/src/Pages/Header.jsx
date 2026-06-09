import React, { useState } from 'react';
// Import Redux dispatch and selector hooks to communicate with the store
import { useDispatch, useSelector } from 'react-redux';
import { navigateTo } from '../store/navSlice';

const Header = ({ onLoginClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Initialize the dispatch function wrapper
  const dispatch = useDispatch();

  // Extract the current navigation path state dynamically to toggle underlying active classes
  const currentPage = useSelector((state) => state.navigation.currentPage);

  const menuItems = {
    academics: [
      { label: "Academics 01", href: "#Academics 01" },
      { label: "Academics 02", href: "#Academics 02" },
      { label: "Programs", href: "#Programs" },
      { label: "Major Programs", href: "#Major Programs" }
    ],
    admissions: [
      { label: "Graduate Admission", href: "#Graduate Admission" },
      { label: "Undergraduate Admission", href: "#Undergraduate Admission" },
      { label: "Careers", href: "#Carres" },
      { label: "Carrer Details", href: "#Carrer Details" }
    ],
    pages: [
      { label: "About", href: "#about" },
      { label: "Faq", href: "#faq" },
      { label: "Events", href: "#Events" },
      { label: "Events sidebar", href: "#event sidebar" },
      { label: "Events Details", href: "#event Details" },
      { label: "Request Info", href: "#Request Info" },
      { label: "Campus Life", href: "#campus life" }
    ],
    blog: [
      { label: "Blog", href: "#blog" },
      { label: "Blog Details", href: "#blog details" },
      { label: "Blog Listing", href: "#blog listing" }
    ]
  };

  return (
    <header className="liggeet-header">
      <div className="top-banner">
        <div className="banner-container">
          <span className="banner-text">Starts TOMORROW! Our biggest event of the year...</span>
          <div className="banner-links">
            <a href="#faqs">Faqs</a>
            <span className="separator">|</span>
            
            <a 
              href="#login" 
              onClick={(e) => {
                e.preventDefault(); 
                if (onLoginClick) onLoginClick();
              }}
            >
              Login / Register
            </a>

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
            <li className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}>
              <a href="#home" onClick={(e) => { e.preventDefault(); dispatch(navigateTo('home')); }}>Home</a>
            </li>

            {/* Academics Navigation Button */}
            <li 
              className={`nav-item has-dropdown ${currentPage === 'academics' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('academics')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-btn"
                onClick={() => dispatch(navigateTo('academics'))}
              >
                Academics
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'academics' ? 'show' : ''}`}>
                {menuItems.academics.map((item, index) => (
                  <li key={index}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </li>

            {/* Admissions Navigation Button */}
            <li 
              className={`nav-item has-dropdown ${currentPage === 'careers' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('admissions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-btn"
                onClick={() => dispatch(navigateTo('careers'))}
              >
                Admissions
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'admissions' ? 'show' : ''}`}>
                {menuItems.admissions.map((item, index) => (
                  <li key={index}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </li>

            {/* Pages Navigation Button */}
            <li 
              className={`nav-item has-dropdown ${currentPage === 'faq' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('pages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-btn"
                onClick={() => dispatch(navigateTo('faq'))}
              >
                Pages
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'pages' ? 'show' : ''}`}>
                {menuItems.pages.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.label === "Faq") {
                          dispatch(navigateTo('faq'));
                        } else {
                          console.log(`Navigating to fallback layout content path: ${item.label}`);
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Blog Navigation Button — Linked to dynamically render the new BlogPage file view */}
            <li 
              className={`nav-item has-dropdown ${currentPage === 'blog' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('blog')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="nav-btn"
                onClick={() => dispatch(navigateTo('blog'))}
              >
                Blog
              </button>
              <ul className={`dropdown-menu ${activeDropdown === 'blog' ? 'show' : ''}`}>
                {menuItems.blog.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(navigateTo('blog'));
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact Navigation Button — Now explicitly updates Redux store view on click */}
            <li className={`nav-item ${currentPage === 'contact' ? 'active' : ''}`}>
              <a 
                href="#contact" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  dispatch(navigateTo('contact')); 
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          
          <button className="cta-btn">Free Join Us</button>
        </nav>

        <div className="hero-content">
          <div className="hero-text-container">
            <span className="hero-tagline">For A Better Future</span>
            <h1 className="hero-title">TO LEARN ABOUT<br />THE WORLD</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;