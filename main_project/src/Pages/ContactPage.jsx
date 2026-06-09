import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../store/navSlice';

const ContactPage = () => {
  const dispatch = useDispatch();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Form submission message state
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    comment: '',
    saveInfo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted successfully:", formData);
    alert("Thank you! Your message has been recorded.");
    setFormData({ firstName: '', email: '', comment: '', saveInfo: false });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log("Searching contact directory for:", searchQuery);
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

  return (
    <div className="liggeet-contact-page-wrapper">
      
      {/* 1. Top Utility Row Bar */}
      <div className="contact-top-bar">
        <div className="contact-container-fluid utility-row-flex">
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

      {/* 2. Main Navigation Bar Layout Row */}
      <div className="contact-nav-row">
        <div className="contact-container-fluid nav-row-flex">
          
          {/* Logo brand module */}
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

          {/* Interactive Navigation menu row elements */}
          <nav className="contact-main-nav">
            <ul className="contact-nav-links">
              <li className="contact-nav-item">
                <a href="#home" onClick={(e) => { e.preventDefault(); dispatch(navigateTo('home')); }}>Home</a>
              </li>

              {Object.keys(menuItems).map((key) => (
                <li 
                  key={key}
                  className="contact-nav-item has-dropdown"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="contact-nav-btn" onClick={() => dispatch(navigateTo(key === 'admissions' ? 'careers' : key))}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                  <ul className={`contact-dropdown-menu ${activeDropdown === key ? 'show' : ''}`}>
                    {menuItems[key].map((item, idx) => (
                      <li key={idx}><a href={item.href}>{item.label}</a></li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="contact-nav-item active">
                <button className="contact-nav-btn" onClick={() => dispatch(navigateTo('contact'))}>Contact</button>
              </li>
            </ul>
          </nav>

          {/* Soft Pink Search input form element */}
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

      {/* 3. White Title Banner Section Block Layout */}
      <section className="contact-title-canvas-viewport">
        <div className="contact-container-fluid path-and-title-box">
          <div className="contact-breadcrumb-path">
            <span className="crumb-home-anchor" onClick={() => dispatch(navigateTo('home'))}>Home</span>
            <span className="crumb-arrow-separator">/</span>
            <span className="crumb-active-page">Contact</span>
          </div>
          <div className="contact-centered-title-node">
            <h1 className="contact-main-h1-heading">Contact</h1>
          </div>
        </div>
      </section>

      {/* 4. Full Width Map Frame Workspace (Screenshot 2 Match) */}
      <section className="contact-map-embed-section">
        <div className="map-outer-frame-container">
          <iframe 
            title="Liggeet University Campus Location Map Tracker"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.60953258525!2d-111.93356612739418!3d33.48834471018933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0bdf60ff5a07%3A0x6b77afbdc1a9657b!2sScottsdale%2C%20AZ%2085251%2C%20USA!5e0!3m2!1sen!2sin!4v1717882200000!5m2!1sen!2sin"
            width="100%" 
            height="550" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          
          {/* Symmetrical Left Map Floating Floating Pin Indicator Card Overlay */}
          <div className="map-floating-pin-overlay-card">
            <div className="pin-card-inner">
              <h3 className="pin-card-brand-heading">Bashas' Pharmacy</h3>
              <p className="pin-card-address-text">8035 E Indian School Rd,</p>
              <p className="pin-card-city-text">Scottsdale, AZ 85251, USA</p>
              <div className="pin-card-rating-row">
                <span className="rating-score-num">4.5</span>
                <span className="rating-star-vector">★</span>
                <span className="rating-reviews-count-link">(11)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Floating Info Cards Overlapping Row Grid (Screenshot 3 Match) */}
      <section className="contact-info-cards-section-wrapper">
        <div className="contact-container-fluid floating-cards-flex-row">
          
          {/* Card Module 1: Address */}
          <div className="info-specification-card">
            <h2 className="info-card-section-title">Address</h2>
            <div className="info-card-underline-pink-dash" />
            <p className="info-card-text-detail-para font-bold-dark">
              1800 Abbot Kinney Blvd. Unit D & E
            </p>
            <p className="info-card-text-detail-para">Venice</p>
          </div>

          {/* Card Module 2: Contact Info Details */}
          <div className="info-specification-card">
            <h2 className="info-card-section-title">Contact</h2>
            <div className="info-card-underline-pink-dash" />
            <p className="info-card-text-detail-para">
              Mobile: <span className="font-bold-dark">(+88) - 1990 - 6886</span>
            </p>
            <p className="info-card-text-detail-para">
              Hotline: <span className="font-bold-dark">+123 4567 8900</span>
            </p>
            <p className="info-card-text-detail-para">
              Mail: <span className="font-bold-dark text-lowercase">info@liggeet.com</span>
            </p>
          </div>

          {/* Card Module 3: Operational Working hours timing clock config */}
          <div className="info-specification-card">
            <h2 className="info-card-section-title">Hour of operation</h2>
            <div className="info-card-underline-pink-dash" />
            <p className="info-card-text-detail-para">
              Monday - Friday: <span className="font-bold-dark">09:00 - 20:00</span>
            </p>
            <p className="info-card-text-detail-para">
              Sunday & Saturday: <span className="font-bold-dark">10:30 - 22:00</span>
            </p>
          </div>

        </div>
      </section>

      {/* 6. Send Us A Message Form Block Row (Screenshot 4 Match) */}
      <section className="contact-messaging-form-section">
        <div className="contact-container-fluid message-form-container-box">
          
          <div className="messaging-form-header">
            <h2 className="messaging-section-display-title">Send us a message</h2>
            <div className="messaging-title-underline-pink-bar" />
          </div>

          {/* Core Input Submission Form Elements */}
          <form className="messaging-actual-html-form" onSubmit={handleFormSubmit}>
            
            <div className="form-input-dual-row-flex">
              <input 
                type="text" 
                name="firstName"
                placeholder="First name *" 
                className="form-input-text-field-element"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email *" 
                className="form-input-text-field-element"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-textarea-row">
              <textarea 
                name="comment"
                placeholder="Your Comment" 
                className="form-textarea-message-element"
                rows="8"
                value={formData.comment}
                onChange={handleInputChange}
              />
            </div>

            {/* Checkbox item marker alignment */}
            <div className="form-checkbox-consent-row">
              <input 
                type="checkbox" 
                id="saveInfo"
                name="saveInfo"
                className="form-checkbox-input-ticker"
                checked={formData.saveInfo}
                onChange={handleInputChange}
              />
              <label htmlFor="saveInfo" className="form-checkbox-label-string-text">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <div className="form-submit-row-btn-block">
              <button type="submit" className="form-submit-execution-action-btn">
                Submit
              </button>
            </div>

          </form>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;