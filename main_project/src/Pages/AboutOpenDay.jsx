import React from 'react';

const AboutOpenDay = () => {
  const programLinks = [
    "Find The Right Program",
    "Request Information",
    "Start Your Application",
    "Inspiring Student Life"
  ];

  return (
    <div className="liggeet-layout-wrapper">
      <section className="open-day-section">
        <div className="open-day-container">
          <div className="image-stack-box">
            <div className="main-student-img">
              <img 
                src="https://html.tonatheme.com/2025/liggeet/assets/images/resource/about-image-01.jpg" 
                alt="Student standing on campus" 
              />
            </div>
            <div className="floating-group-img">
              <img 
                src="https://html.tonatheme.com/2025/liggeet/assets/images/resource/about-image-02.jpg" 
                alt="Students studying on a laptop" 
              />
            </div>
          </div>
          <div className="open-day-content-box">
            <div className="watermark-map-bg">
            </div>

            <div className="content-inner-wrapper">
              <div className="accent-cap-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#F06371" />
                  <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="#E28743" />
                </svg>
              </div>

              <span className="section-tagline">About The Liggeet</span>
              <h2 className="section-main-heading">Liggeet Open Day</h2>
              
              <p className="section-paragraph-text">
                Etiam in arcu dictum, maximus libero ac, porttitor ante. Mauris in 
                ultricies odio, id porttitor nulla. Phasellus tristique vehicula eros id 
                hendrerit. Interdum et malesuada fames ac ante ipsumisth primis in 
                faucibus. Maecenas ultricies finibus est.
              </p>

              <div className="programs-links-grid">
                {programLinks.map((linkText, i) => (
                  <div className="program-link-item" key={i}>
                    <span className="bullet-arrow"></span>
                    <a href={`#${linkText.toLowerCase().replace(/ /g, '-')}`}>{linkText}</a>
                  </div>
                ))}
              </div>

              <button className="more-details-btn">More Details</button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutOpenDay;