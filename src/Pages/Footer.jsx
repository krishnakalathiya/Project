import React from 'react';

const Footer = () => {
  return (
    <div className="liggeet-layout-wrapper">
      <footer className="main-site-footer">
        <div className="footer-bg-media">
          <div className="footer-dark-overlay">
             <img 
            src="https://html.tonatheme.com/2025/liggeet/assets/images/footer/footer-bg-01.jpg" 
            alt="University Interior/Library blur overlay" 
            className="footer-img-layer"
          />
          </div>
        </div>

        <div className="footer-grid-container">
          <div className="footer-column brand-summary-col">
            <div className="footer-logo-area">
              <div className="footer-logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#F06371" />
                  <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="footer-logo-text">
                <span className="f-sub-title">university</span>
                <span className="f-main-title">LIGGEET</span>
              </div>
            </div>

            <p className="footer-intro-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p>

            <div className="footer-contact-info">
              <div className="location-header">
                <span className="location-line-dash">—</span>
                <h4 className="location-title">United States</h4>
              </div>
              <p className="address-text">141, First Floor, 12 St Roots Terrace, Los Angeles 90010.</p>
              <p className="phone-text">Front Desk: <a href="tel:+14065550120">+(406) 555-0120</a></p>
            </div>

            <a href="#branches" className="branches-link-btn">Our All Branches</a>
          </div>
          <div className="footer-column links-list-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column links-list-col">
            <h3 className="footer-col-title">Links</h3>
            <ul className="footer-links-list">
              <li><a href="#students">Students</a></li>
              <li><a href="#faculty">Faculty & Staffs</a></li>
              <li><a href="#visit">Visit</a></li>
              <li><a href="#registration">Registration</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>

          <div className="footer-column links-list-col">
            <h3 className="footer-col-title">Get in touch</h3>
            <ul className="footer-links-list">
              <li><a href="#academics">Academics</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#give">Give to liggeet</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright-bar">
          <div className="copyright-container">
            <p>© 2025 Liggeet. All Rights Reserved</p>
          </div>
        </div>

      </footer>

    </div>
  );
};

export default Footer;