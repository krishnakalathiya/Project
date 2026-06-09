import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../store/navSlice';     

const FaqPage = () => {
  const dispatch = useDispatch();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqs, setOpenFaqs] = useState({
    left_0: true,  
    left_1: false,
    left_2: false,
    left_3: false,
    right_0: true, 
    right_1: false,
    right_2: false,
    right_3: false,
  });

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching knowledge base for:", searchQuery);
  };

  const menuItems = {
    academics: [
      { label: "Academics 01", href: "#" },
      { label: "Academics 02", href: "#" }
    ],
    admissions: [
      { label: "Graduate Admission", href: "#" },
      { label: "Undergraduate Admission", href: "#" }
    ],
    pages: [
      { label: "About Us", href: "#" },
      { label: "Register Page", href: "#" }
    ],
    blog: [
      { label: "Latest News", href: "#" },
      { label: "Student Stories", href: "#" }
    ]
  };

  const leftColumnFaqs = [
    { id: "left_0", q: "Undergraduate Admissions", a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" },
    { id: "left_1", q: "How get graduate certificate?", a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" },
    { id: "left_2", q: "Build your career", a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" },
    { id: "left_3", q: "How to soft launch your business?", a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" }
  ];

  const rightColumnFaqs = [
    { id: "right_0", q: "How to turn visitors into contributors", a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" },
    { id: "right_1", q: "How can i find my solutions?", a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" },
    { id: "right_2", q: "Build your career", a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" },
    { id: "right_3", q: "How to turn visitors into contributors", a: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" }
  ];

  return (
    <div className="liggeet-faq-page-wrapper">
      
      {/* 1. Specialized Top Utility Row Bar */}
      <div className="faq-top-bar">
        <div className="faq-container-fluid utility-row-flex">
          <div className="utility-info-left">
            <span className="address-info">2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            <a href="mailto:info@templatepath.com" className="email-info">info@templatepath.com</a>
          </div>
          <button 
            className="top-login-register-btn" 
            onClick={() => dispatch(navigateTo('login'))}
          >
            Login / Register
          </button>
        </div>
      </div>

      {/* 2. Main Navigation Bar Row Layout */}
      <div className="faq-nav-row">
        <div className="faq-container-fluid nav-row-flex">
          
          {/* Logo Brand Component */}
          <div 
            className="logo-area" 
            onClick={() => dispatch(navigateTo('home'))} 
            style={{ cursor: 'pointer' }}
          >
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

          {/* Interactive Navigation Menu Links */}
          <nav className="faq-main-nav">
            <ul className="faq-nav-links">
              <li className="faq-nav-item">
                <a href="#home" onClick={(e) => { e.preventDefault(); dispatch(navigateTo('home')); }}>Home</a>
              </li>

              {Object.keys(menuItems).map((key) => (
                <li 
                  key={key}
                  className={`faq-nav-item has-dropdown ${key === 'pages' ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="faq-nav-btn"
                    onClick={() => dispatch(navigateTo(key === 'admissions' ? 'careers' : key))}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                  <ul className={`faq-dropdown-menu ${activeDropdown === key ? 'show' : ''}`}>
                    {menuItems[key].map((item, idx) => (
                      <li key={idx}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="faq-nav-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Integrated Search Box Input */}
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

      {/* 3. White Minimal Layout Title Canvas Block */}
      <section className="faq-title-canvas-viewport">
        <div className="faq-container-fluid path-and-title-box">
          <div className="faq-breadcrumb-path">
            <span className="crumb-home-anchor" onClick={() => dispatch(navigateTo('home'))}>Home</span>
            <span className="crumb-arrow-separator">/</span>
            <span className="crumb-active-page">Faq</span>
          </div>
          <div className="faq-centered-title-node">
            <h1 className="faq-main-h1-heading">Faq</h1>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. CORE FAQ INTERACTIVE ACCORDION ROW GRID 
         ========================================================================== */}
      <section className="faq-accordion-grid-section">
        <div className="faq-container-fluid">
          
          {/* Spaced Section Main Header Text */}
          <div className="faq-section-main-title-box">
            <h2 className="faq-section-display-heading">Frequently Asked Questions</h2>
          </div>

          {/* Symmetrical 2-Column Split Workspace */}
          <div className="faq-split-accordion-row">
            
            {/* Left Hand Column Accordions Track */}
            <div className="faq-accordion-column">
              {leftColumnFaqs.map((faq) => (
                <div key={faq.id} className={`faq-accordion-item-card ${openFaqs[faq.id] ? 'is-expanded' : ''}`}>
                  <button className="faq-item-trigger-button" onClick={() => toggleFaq(faq.id)}>
                    <span className="faq-question-string-label">{faq.q}</span>
                    <span className="faq-icon-indicator-state">
                      {openFaqs[faq.id] ? (
                        <span className="icon-minus-shape">—</span>
                      ) : (
                        <span className="icon-plus-shape">+</span>
                      )}
                    </span>
                  </button>
                  <div className={`faq-item-collapsible-content ${openFaqs[faq.id] ? 'open' : ''}`}>
                    <div className="faq-content-inner-body-padding">
                      <p className="faq-answer-paragraph-text">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Hand Column Accordions Track */}
            <div className="faq-accordion-column">
              {rightColumnFaqs.map((faq) => (
                <div key={faq.id} className={`faq-accordion-item-card ${openFaqs[faq.id] ? 'is-expanded' : ''}`}>
                  <button className="faq-item-trigger-button" onClick={() => toggleFaq(faq.id)}>
                    <span className="faq-question-string-label">{faq.q}</span>
                    <span className="faq-icon-indicator-state">
                      {openFaqs[faq.id] ? (
                        <span className="icon-minus-shape">—</span>
                      ) : (
                        <span className="icon-plus-shape">+</span>
                      )}
                    </span>
                  </button>
                  <div className={`faq-item-collapsible-content ${openFaqs[faq.id] ? 'open' : ''}`}>
                    <div className="faq-content-inner-body-padding">
                      <p className="faq-answer-paragraph-text">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default FaqPage;