import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../store/navSlice';

const CareersPage = () => {
  const dispatch = useDispatch();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching records for:", searchQuery);
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

  const careerFeatures = [
    {
      title: "Current Opportunities",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/resource/career-feature-01.jpg"
    },
    {
      title: "Applying with us",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/resource/career-feature-02.jpg"
    },
    {
      title: "Your benefits",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      img: "https://html.tonatheme.com/2025/liggeet/assets/images/resource/career-feature-03.jpg"
    }
  ];

  const serviceCards = [
    {
      title: "Innovative Courses",
      desc: "Sed gravida nisl a porta tincidunt. Integer aliquam.",
      highlight: false
    },
    {
      title: "Affordability",
      desc: "Sed gravida nisl a porta tincidunt. Integer aliquam.",
      highlight: false
    },
    {
      title: "Academics",
      desc: "Sed gravida nisl a porta tincidunt. Integer aliquam.",
      highlight: true
    },
    {
      title: "Inspiring Student Life",
      desc: "Sed gravida nisl a porta tincidunt. Integer aliquam.",
      highlight: false
    }
  ];

  const jobPositions = [
    {
      role: "Clinical Research Manager",
      location: "California, United States",
      type: "Full-Time",
      department: "Finance",
      date: "November 8, 2022",
      author: "TemplathePath"
    },
    {
      role: "Fullstack Web Developer",
      location: "California, United States",
      type: "Full-Time",
      department: "Development",
      date: "November 8, 2022",
      author: "TemplathePath"
    },
    {
      role: "Human Resources Coordinator",
      location: "California, United States",
      type: "Full-Time",
      department: "Admin",
      date: "November 8, 2022",
      author: "TemplathePath"
    },
    {
      role: "Content writer",
      location: "California, United States",
      type: "Full-Time",
      department: "Tecnical",
      date: "November 8, 2022",
      author: "TemplathePath"
    }
  ];

  return (
    <div className="liggeet-careers-page-wrapper">
      
      {/* 1. Specialized Top Utility Row Bar */}
      <div className="careers-top-bar">
        <div className="careers-container-fluid utility-row-flex">
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
      <div className="careers-nav-row">
        <div className="careers-container-fluid nav-row-flex">
          
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

          <nav className="careers-main-nav">
            <ul className="careers-nav-links">
              <li className="careers-nav-item">
                <a 
                  href="#home" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    dispatch(navigateTo('home')); 
                  }}
                >
                  Home
                </a>
              </li>

              {Object.keys(menuItems).map((key) => (
                <li 
                  key={key}
                  className={`careers-nav-item has-dropdown ${key === 'admissions' ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className="careers-nav-btn"
                    onClick={() => dispatch(navigateTo(key === 'admissions' ? 'careers' : key))}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                  <ul className={`careers-dropdown-menu ${activeDropdown === key ? 'show' : ''}`}>
                    {menuItems[key].map((item, idx) => (
                      <li key={idx}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="careers-nav-item">
                <a href="#contact">Contact</a>
              </li>
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

        </div>
      </div>

      {/* 3. White Minimal Layout Title Canvas Block */}
      <section className="careers-title-canvas-viewport">
        <div className="careers-container-fluid path-and-title-box">
          <div className="careers-breadcrumb-path">
            <span className="crumb-home-anchor" onClick={() => dispatch(navigateTo('home'))}>Home</span>
            <span className="crumb-arrow-separator">/</span>
            <span className="crumb-current">Careers</span>
          </div>
          <div className="careers-centered-title-node">
            <h1 className="careers-main-h1-heading">Careers</h1>
          </div>
        </div>
      </section>

      {/* 4. 3-COLUMN CIRCULAR INFO GRID */}
      <section className="careers-features-circular-section">
        <div className="careers-container-fluid features-circle-grid">
          {careerFeatures.map((item, idx) => (
            <div key={idx} className="circle-feature-card">
              <div className="circle-image-frame-holder">
                <img src={item.img} alt={item.title} className="circle-img-asset-element" />
              </div>
              <h3 className="circle-card-main-title">{item.title}</h3>
              <p className="circle-card-paragraph-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTEGRATED STUDENT TESTIMONIAL SLIDER LAYER */}
      <section className="careers-testimonial-slider-section">
        <div className="careers-container-fluid testimonial-split-grid">
          <div className="testimonial-left-header-box">
            <span className="testimonial-mini-tagline">Testimonial</span>
            <h2 className="testimonial-main-heading">What our student are saying ?</h2>
            <p className="testimonial-paragraph-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <button className="testimonial-view-events-btn">View All Events</button>
          </div>

          <div className="testimonial-right-slider-window">
            <p className="slider-quote-body-text">The response to your Liggeet has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on.</p>
            <div className="slider-student-meta-row">
              <div className="slider-avatar-circle-frame">
                <img src="https://html.tonatheme.com/2025/liggeet/assets/images/resource/author.png" alt="Jane Cooper" className="slider-avatar-image" />
              </div>
              <div className="slider-bio-identity-box">
                <h4 className="student-profile-name">Jane Cooper</h4>
                <span className="student-profile-company">Bank of America</span>
              </div>
            </div>
            <div className="slider-navigation-arrows-dock">
              <button className="slider-nav-arrow arrow-backward"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
              <button className="slider-nav-arrow arrow-forward"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "WHY CHOOSE LIGGEET" SERVICES SECTION */}
      <section className="careers-services-grid-section">
        <div className="services-squiggly-accent-decor">
          <svg viewBox="0 0 100 100" fill="none" stroke="#F05C72" strokeWidth="1.5" opacity="0.15">
            <path d="M10,20 Q30,5 50,20 T90,20" /><path d="M10,35 Q30,20 50,35 T90,35" />
          </svg>
        </div>
        <div className="careers-container-fluid">
          <div className="services-section-header">
            <span className="services-mini-tagline">How our services</span>
            <h2 className="services-main-heading">Why Choose Liggeet</h2>
            <div className="services-heading-border-line" />
          </div>
          <div className="services-cards-grid-row">
            {serviceCards.map((card, idx) => (
              <div key={idx} className={`service-feature-item-card ${card.highlight ? 'is-highlighted-orange' : ''}`}>
                <div className="service-card-semi-circle-tab" />
                <h3 className="service-card-title">{card.title}</h3>
                <p className="service-card-description">{card.desc}</p>
                <span className="service-card-footnote-power">To the power.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. NEW TEMPORARY WORK JOB OPPORTUNITIES LIST
         ========================================================================== */}
      <section className="careers-jobs-list-section">
        <div className="careers-container-fluid">
          
          {/* Section Section Header */}
          <div className="jobs-section-header">
            <span className="jobs-mini-tagline">Job opportunity</span>
            <h2 className="jobs-main-heading">Temporary Work</h2>
            <div className="jobs-heading-border-line" />
          </div>

          {/* Core Vertical Listing Container */}
          <div className="jobs-list-vertical-wrapper">
            {jobPositions.map((job, idx) => (
              <div key={idx} className="job-row-item-card">
                
                {/* Left Side Cyan Shape Blocks Accent */}
                <div className="job-card-visual-block-thumb" />

                {/* Info Text Nodes */}
                <div className="job-card-details-block">
                  <h3 className="job-card-role-title">{job.role}</h3>
                  <div className="job-card-meta-row">
                    <span className="job-meta-location">{job.location}</span>
                    <span className="job-meta-type-badge">{job.type}</span>
                  </div>
                </div>

                {/* Mid Department Details Segment */}
                <div className="job-card-department-block">
                  <h4 className="job-dept-name-title">{job.department}</h4>
                  <p className="job-dept-attribution-text">
                    {job.date} by <span className="job-author-highlight">{job.author}</span>
                  </p>
                </div>

                {/* Right Side Call-To-Action Registration Execution Button */}
                <div className="job-card-action-block">
                  <button 
                    className="job-apply-now-btn"
                    onClick={() => dispatch(navigateTo('register'))}
                  >
                    Apply
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default CareersPage;